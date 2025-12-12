import React, { useState } from "react";
import { useClient } from "sanity";
import * as XLSX from "xlsx";

const apiVersion = "2024-01-01";

interface CandidateApplication {
  _id: string;
  createdAt: string;
  status?: string;
  caseStatus?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  occupation: string;
  occupationOther?: string;
  countryOfEmploymentOther?: string;
  englishLevel?: string;
  qualifications?: string[];
  cvUrl?: string;
  consent?: boolean;
  passportCountry?: string;
  passportCountryOther?: string;
  experienceYears?: number;
  countryOfEmployment: string;
  wantsToWorkInAustralia?: boolean;
  qualified?: boolean;
  qualificationReason?: string;
  assignedToName?: string;
  source?: string;
  emailSent?: boolean;
  emailSentAt?: string;
}

const ExportCandidatesTool = () => {
  const client = useClient({ apiVersion });
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    setIsLoading(true);
    try {
      //Fetch ALL data
      const query = `*[_type == "candidateApplication"] | order(createdAt desc) {
        _id,
        createdAt,
        status,
        caseStatus,
        "assignedToName": assignedTo->name,
        
        wantsToWorkInAustralia,
        firstName,
        lastName,
        email,
        phone,
        
        occupation,
        occupationOther,
        
        countryOfEmployment,
        countryOfEmploymentOther,
        
        experienceYears,
        englishLevel,
        
        passportCountry,
        passportCountryOther,
        
        qualifications,
        
        qualified,
        qualificationReason,
        emailSent,
        emailSentAt
      }`;

      const data = await client.fetch(query);

      //Data for Excel
      const excelRows = data.map((item: CandidateApplication) => ({
        "Date Applied": item.createdAt
          ? new Date(item.createdAt).toLocaleDateString()
          : "",
        "Time Applied": item.createdAt
          ? new Date(item.createdAt).toLocaleTimeString()
          : "",

        // --- Admin Status ---
        Status: item.status?.toUpperCase() || "INITIAL",
        "Case Status": item.caseStatus?.toUpperCase() || "OPEN",
        "Assigned Staff": item.assignedToName || "Unassigned",

        // --- Personal ---
        "First Name": item.firstName || "",
        "Last Name": item.lastName || "",
        Email: item.email || "",
        Phone: item.phone || "",
        "Wants Australia?": item.wantsToWorkInAustralia ? "YES" : "NO",

        // --- Job Info ---
        Occupation: item.occupation || "",
        "Occupation (Other)": item.occupationOther || "",
        "Experience (Years)": item.experienceYears || 0,
        "English Level": item.englishLevel || "",

        // --- Location Info ---
        "Current Country": item.countryOfEmployment || "",
        "Current Country (Other)": item.countryOfEmploymentOther || "",
        "Passport Country": item.passportCountry || "",
        "Passport Country (Other)": item.passportCountryOther || "",

        // --- Qualifications ---
        Qualifications: Array.isArray(item.qualifications)
          ? item.qualifications.join(", ")
          : "",

        // --- System Decisions ---
        "Qualified?": item.qualified ? "YES" : "NO",
        "Qual. Reason": item.qualificationReason || "",

        // --- Files & Meta ---
        "Auto Email Sent": item.emailSent ? "YES" : "NO",
        "Email Sent Date": item.emailSentAt
          ? new Date(item.emailSentAt).toLocaleDateString()
          : "",
      }));

      //Create Worksheet
      const worksheet = XLSX.utils.json_to_sheet(excelRows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Candidates");

      //Download File
      const dateStr = new Date().toISOString().split("T")[0];
      XLSX.writeFile(workbook, `Candidates_Report_${dateStr}.xlsx`);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Error exporting data. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-lg">
      <h2 className="text-lg font-bold mb-5">Export Candidate Database</h2>
      <p className="mb-7 text-sm text-[var(--color-secondary)]">
        This tool will download a complete report of all candidate applications
        currently in the system. The file includes personal details,
        qualification status, and admin workflow status.
      </p>

      <button
        onClick={handleExport}
        disabled={isLoading}
        className={`bg-[var(--color-navy)] text-white p-4 text-lg rounded-sm flex items-center justify-center gap-3
            ${isLoading ? "opacity-50 cursor-not-allowed opacity-90" : "hover:bg-[var(--color-brand)] cursor-pointer opacity-100"}
        `}
      >
        {isLoading ? "Generating Report..." : "Download Excel Report (.xlsx)"}
      </button>

      <div className="mt-10 p-4 bg-[var(--color-navy)] rounded-sm text-md">
        <strong>Note:</strong> This file contains sensitive personal data.
        Please handle with care and do not share outside the organization.
      </div>
    </div>
  );
};

export default ExportCandidatesTool;
