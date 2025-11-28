import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { writeClient } from "../../../sanity/lib/client";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { candidateId, type, customSubject, customBody } = await req.json();

    if (!candidateId || !type) {
      return NextResponse.json({ message: "Missing data" }, { status: 400 });
    }

    const candidate = await writeClient.fetch(
      `*[_type == "candidateApplication" && _id == $id][0]`,
      { id: candidateId }
    );

    if (!candidate || !candidate.email) {
      return NextResponse.json(
        {
          message: "Candidate not found or email",
        },
        { status: 400 }
      );
    }

    let subject = customSubject;
    let body = customBody;

    if (!subject || !body) {
      const templateSlug =
        type === "qualify" ? "qualified-candidate" : "unqualified-candidate";

      const template = await writeClient.fetch(
        `*[_type == "emailTemplate" && slug.current == $slug][0]`,
        { slug: templateSlug }
      );

      subject =
        template?.subject ||
        (type === "qualify"
          ? "Update on your Application"
          : "Application Status");

      body =
        template?.body ||
        "Hello, please send us all the related documents for further guidance.";

      body = body
        .replace(/{{firstName}}/g, candidate.firstName || "Candidate")
        .replace(/{{lastName}}/g, candidate.lastName || "")
        .replace(/{{occupation}}/g, candidate.occupation || "Trade");
    }

    const { data, error } = await resend.emails.send({
      from: "MANSYS <onboarding@resend.dev>",
      to: ["iwadhwani029@gmail.com"],
      //   to: [candidate.email],
      subject: subject,
      text: body,
    });

    if (error) {
      console.error("Resend error: ", error);
      throw new Error(error.message);
    }

    await writeClient.create({
      _type: "emailLog",
      candidateRef: { _type: "reference", _ref: candidateId },
      to: candidate.email,
      subject: subject,
      body: body,
      status: "sent",
      sentAt: new Date().toISOString(),
      triggeredBy: "admin_action",
    });

    await writeClient
      .patch(candidateId)
      .set({
        emailSent: true,
        emailSentAt: new Date().toISOString(),
        qualified: type === "qualify",
      })
      .commit();

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Admin Email API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to send email", error: errorMessage },
      { status: 500 }
    );
  }
}
