export const runtime = "nodejs";
import type { IncomingMessage } from "http";

import { Readable } from "stream";
import formidable, { File, Files, Fields } from "formidable";
import fs from "fs";
import { writeClient } from "../../../sanity/lib/client";

type QualifiedResult = { qualified: boolean; reasons: string[] };

interface CandidateDoc {
  _type: "candidateApplication";
  wantsToWorkInAustralia: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  occupation?: string;
  occupationOther?: string;
  countryOfEmployment?: string;
  countryOfEmploymentOther?: string;
  hasPassport?: boolean;
  passportCountry?: string;
  passportCountryOther?: string;
  experienceYears?: number;
  englishLevel?: string;
  qualifications?: string[];
  consent?: boolean;
  source?: string | null;
  qualified: boolean;
  qualificationReason?: string;
  emailSent?: boolean;
  emailSentAt?: string | null;
  cv?: { _type: "reference"; _ref: string } | undefined;
  createdAt: string;
  status: string;
  caseStatus: string;
  assignedTo?: { _type: "reference"; _ref: string };
}

const parseForm = async (
  req: Request
): Promise<{ fields: Fields; files: Files }> => {
  const form = formidable({
    maxFileSize: 6 * 1024 * 1024,
    multiples: false,
  });

  const buf = Buffer.from(await req.arrayBuffer());
  const nodeReq = new Readable();
  nodeReq.push(buf);
  nodeReq.push(null);

  const headers = Object.fromEntries(req.headers);

  const incomingReq = nodeReq as unknown as IncomingMessage;
  incomingReq.headers = headers;
  incomingReq.method = req.method ?? "POST";
  incomingReq.url = "/api/submit-candidate";

  return new Promise((resolve, reject) => {
    form.parse(incomingReq, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

const getSingleValue = (field: string | string[] | undefined): string => {
  if (Array.isArray(field)) {
    return field.length > 0 ? field[0] : "";
  }
  return typeof field === "string" ? field : "";
};

const toBool = (v: unknown): boolean => {
  if (typeof v === "boolean") return v;
  if (typeof v === "string") {
    const s = v.trim().toLowerCase();
    return s === "true" || s === "1" || s === "yes";
  }
  return false;
};

const toNumber = (v: unknown): number => {
  if (typeof v === "number") return Number.isFinite(v) ? v : 0;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isNaN(n) ? 0 : n;
  }
  return 0;
};

const toStringArray = (raw: unknown): string[] => {
  if (raw == null) return [];
  if (Array.isArray(raw)) return raw.map(String);
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parsed.map(String);
      } catch {}
    }
    if (trimmed.includes(","))
      return trimmed
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    return trimmed ? [trimmed] : [];
  }
  return [String(raw)];
};

async function evaluateQualification(payload: {
  occupation: string;
  countryOfEmployment: string;
  experienceYears: number;
  englishLevel: string;
}): Promise<QualifiedResult> {
  const MIN_EXPERIENCE_YEARS = 2;

  const reasons: string[] = [];
  let qualified = true;

  // 1. Occupation Check (Required)
  if (!payload.occupation || payload.occupation.trim() === "") {
    qualified = false;
    reasons.push("Occupation not selected");
  }

  // 2. Country of Employment Check (Required)
  if (
    !payload.countryOfEmployment ||
    payload.countryOfEmployment.trim() === ""
  ) {
    qualified = false;
    reasons.push("Country of employment not selected");
  }

  // 3. Experience Check (Must be >= 2 years)
  if (
    Number.isNaN(payload.experienceYears) ||
    payload.experienceYears < MIN_EXPERIENCE_YEARS
  ) {
    qualified = false;
    reasons.push(`Experience must be >= ${MIN_EXPERIENCE_YEARS} years`);
  }

  // 4. English Level Check (Must be OK or higher)
  const requiredEnglish = ["ok", "good", "very good", "excellent"];
  const currentEnglish = payload.englishLevel.trim().toLowerCase();

  if (!requiredEnglish.includes(currentEnglish)) {
    qualified = false;
    reasons.push("English level must be OK or higher");
  }
  return { qualified, reasons };
}

//post req
export async function POST(req: Request): Promise<Response> {
  try {
    const { fields, files } = await parseForm(req);

    const wantsRaw = getSingleValue(fields.wantsToWorkInAustralia);
    const wants = toBool(wantsRaw);

    if (!wants) {
      const minimal: CandidateDoc = {
        _type: "candidateApplication",
        wantsToWorkInAustralia: false,
        firstName: getSingleValue(fields.firstName),
        lastName: getSingleValue(fields.lastName),
        email: getSingleValue(fields.email),
        createdAt: new Date().toISOString(),
        qualified: false,
        status: "rejected",
        caseStatus: "closed",
      };
      await writeClient.create(minimal);
      return new Response(
        JSON.stringify({
          ok: true,
          qualified: false,
          message: "Candidate not interested in Australia",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const firstName = getSingleValue(fields.firstName);
    const lastName = getSingleValue(fields.lastName);
    const email = getSingleValue(fields.email);
    const phone = getSingleValue(fields.phone);
    const occupation = getSingleValue(fields.occupation);
    const occupationOther = getSingleValue(fields.occupationOther);
    const countryOfEmployment = getSingleValue(fields.countryOfEmployment);
    const countryOfEmploymentOther = getSingleValue(
      fields.countryOfEmploymentOther
    );
    const hasPassport = toBool(getSingleValue(fields.hasPassport));
    const passportCountry = getSingleValue(fields.passportCountry);
    const passportCountryOther = getSingleValue(fields.passportCountryOther);
    const experienceYears = toNumber(getSingleValue(fields.experienceYears));
    const englishLevel = getSingleValue(fields.englishLevel);

    const qualificationsRaw =
      fields["qualifications[]"] ?? fields.qualifications;
    const qualifications = toStringArray(qualificationsRaw);

    const consent = toBool(getSingleValue(fields.consent));
    const source = getSingleValue(fields.source);

    const { qualified, reasons } = await evaluateQualification({
      occupation,
      countryOfEmployment,
      experienceYears,
      englishLevel,
    });

    // CV upload
    let cvRef: { _type: "reference"; _ref: string } | undefined;
    if (files && files.cv) {
      const fileEntry = Array.isArray(files.cv)
        ? files.cv[0]
        : (files.cv as File);
      if (fileEntry && fileEntry.filepath) {
        const stream = fs.createReadStream(fileEntry.filepath);
        const asset = await writeClient.assets.upload(
          "file",
          stream as unknown as NodeJS.ReadableStream,
          { filename: fileEntry.originalFilename ?? `cv-${Date.now()}.pdf` }
        );
        cvRef = { _type: "reference", _ref: asset._id };
      }
    }

    // Create candidate document
    const candidate: CandidateDoc = {
      _type: "candidateApplication",
      wantsToWorkInAustralia: true,
      firstName,
      lastName,
      email,
      phone,
      occupation,
      occupationOther,
      countryOfEmployment,
      countryOfEmploymentOther,
      hasPassport,
      passportCountry,
      passportCountryOther,
      experienceYears,
      englishLevel,
      qualifications,
      consent,
      source,
      qualified,
      qualificationReason: reasons.join("; "),
      emailSent: false,
      emailSentAt: null,
      createdAt: new Date().toISOString(),
      status: "rejected",
      caseStatus: "closed",
    };
    if (cvRef) candidate.cv = cvRef;
    const created = (await writeClient.create(candidate)) as { _id: string };

    //Client Message and Send Email
    let clientMessage = "";
    if (qualified) {
      clientMessage =
        "Congratulations! You may qualify for sponsorship to work in Australia. Most jobs start from AUD 80,000 per year (minimum). Our office will contact you shortly.";
    } else {
      clientMessage =
        "You have strong skills and experience. To check your full eligibility for an Australian work visa, our office needs to speak with you.";
    }

    // Conditional Email Sending Logic (uses existing Sanity logic)
    const settingsQuery = `*[_type == "siteSettings"][0]{sendEmailOnQualified}`;
    const settings = await writeClient.fetch(settingsQuery);
    const shouldAutoSend = Boolean(settings?.sendEmailOnQualified);
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (qualified && shouldAutoSend && RESEND_API_KEY && email) {
    }

    // Final API Response with Pop-up Message
    return new Response(
      JSON.stringify({
        ok: true,
        qualified,
        reasons,
        id: created._id,
        message: clientMessage,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("submit-candidate error:", msg);
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
