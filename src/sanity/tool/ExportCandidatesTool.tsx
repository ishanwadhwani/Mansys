import React, { useState } from "react";
import { useClient } from "sanity";
import * as XLSX from "xlsx";

const apiVersion = "2024-01-01";

// --- Types ---
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

type ExportMode = "all" | "date" | "latest";

const ExportCandidatesTool = () => {
  const client = useClient({ apiVersion });
  const [isLoading, setIsLoading] = useState(false);

  // --- Filter State ---
  const [mode, setMode] = useState<ExportMode>("latest"); // Default to 'latest' to be safe
  const [limit, setLimit] = useState<number>(100);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleExport = async () => {
    // Basic Validation
    if (mode === "date" && (!startDate || !endDate)) {
      alert("Please select both a Start Date and an End Date.");
      return;
    }

    setIsLoading(true);
    try {
      let query = "";
      let params: Record<string, string | number> = {};

      const projection = `{
        _id, createdAt, status, caseStatus,
        "assignedToName": assignedTo->name,
        wantsToWorkInAustralia, firstName, lastName, email, phone,
        occupation, occupationOther, countryOfEmployment, countryOfEmploymentOther,
        experienceYears, englishLevel, passportCountry, passportCountryOther,
        qualifications, qualified, qualificationReason, emailSent, emailSentAt
      }`;

      if (mode === "all") {
        query = `*[_type == "candidateApplication"] | order(createdAt desc) ${projection}`;
      } else if (mode === "latest") {
        query = `*[_type == "candidateApplication"] | order(createdAt desc) [0...$limit] ${projection}`;
        params = { limit: Number(limit) };
      } else if (mode === "date") {
        query = `*[_type == "candidateApplication" && createdAt >= $start && createdAt <= $end] | order(createdAt desc) ${projection}`;
        params = {
          start: `${startDate}T00:00:00.000Z`,
          end: `${endDate}T23:59:59.999Z`,
        };
      }

      console.log("Fetching with Mode:", mode);
      const data = await client.fetch(query, params);

      if (!data || data.length === 0) {
        alert("No records found for the selected criteria.");
        setIsLoading(false);
        return;
      }
      const excelRows = data.map((item: CandidateApplication) => ({
        "Date Applied": item.createdAt
          ? new Date(item.createdAt).toLocaleDateString()
          : "",
        "Time Applied": item.createdAt
          ? new Date(item.createdAt).toLocaleTimeString()
          : "",
        Status: item.status?.toUpperCase() || "INITIAL",
        "Case Status": item.caseStatus?.toUpperCase() || "OPEN",
        "Assigned Staff": item.assignedToName || "Unassigned",
        "First Name": item.firstName || "",
        "Last Name": item.lastName || "",
        Email: item.email || "",
        Phone: item.phone || "",
        "Wants Australia?": item.wantsToWorkInAustralia ? "YES" : "NO",
        Occupation: item.occupation || "",
        "Occupation (Other)": item.occupationOther || "",
        "Experience (Years)": item.experienceYears || 0,
        "English Level": item.englishLevel || "",
        "Current Country": item.countryOfEmployment || "",
        "Passport Country": item.passportCountry || "",
        Qualifications: Array.isArray(item.qualifications)
          ? item.qualifications.join(", ")
          : "",
        "Qualified?": item.qualified ? "YES" : "NO",
        "Qual. Reason": item.qualificationReason || "",
        "Auto Email Sent": item.emailSent ? "YES" : "NO",
      }));

      const worksheet = XLSX.utils.json_to_sheet(excelRows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Candidates");

      const dateStr = new Date().toISOString().split("T")[0];
      const filename =
        mode === "date"
          ? `Candidates_${startDate}_to_${endDate}.xlsx`
          : mode === "latest"
            ? `Candidates_Latest_${limit}.xlsx`
            : `Candidates_Full_Database_${dateStr}.xlsx`;

      XLSX.writeFile(workbook, filename);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Error exporting data. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="block text-sm font-bold text-[var(--color-navy)] mb-1">
      {children}
    </label>
  );

  const InputStyle = "w-full p-2 border border-gray-300 rounded mb-4";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center p-8 max-w-xl bg-[var(--color-navy)] rounded-lg shadow-xl border border-gray-700">
        <h2 className="text-xl font-bold mb-2">Export Candidate Database</h2>
        <p className="mb-6 text-sm text-white/80">
          Select which records you want to download to Excel.
        </p>

        <div className="flex gap-4 mb-6 border-b pb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="mode"
              value="latest"
              checked={mode === "latest"}
              onChange={() => setMode("latest")}
            />
            Latest Records
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="mode"
              value="date"
              checked={mode === "date"}
              onChange={() => setMode("date")}
            />
            Date Range
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="mode"
              value="all"
              checked={mode === "all"}
              onChange={() => setMode("all")}
            />
            Everything (Caution)
          </label>
        </div>

        {/* --- DYNAMIC INPUTS --- */}
        <div className="bg-[var(--color-navy)] p-4 rounded mb-6">
          {mode === "latest" && (
            <div className="text-white">
              <p>How many recent records?</p>
              <input
                type="number"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                className={InputStyle}
                min="1"
                max="10000"
              />
              <p className="text-xs text-white/70">
                Retrieves the most recently applied candidates.
              </p>
            </div>
          )}

          {mode === "date" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="text-white">
                <p>Start Date</p>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className={InputStyle}
                />
              </div>
              <div className="text-white">
                <p>End Date</p>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={InputStyle}
                />
              </div>
            </div>
          )}

          {mode === "all" && (
            <div className="text-amber-700 bg-amber-50 p-3 rounded text-sm border border-amber-200">
              <strong>Warning:</strong> This will download the entire database.
              If you have thousands of records, this may take a while.
            </div>
          )}
        </div>

        {/* --- ACTION BUTTON --- */}
        <button
          onClick={handleExport}
          disabled={isLoading}
          className={`w-full bg-[var(--color-navy)] text-white p-3 text-lg rounded font-semibold flex items-center justify-center gap-2 transition-all
            ${isLoading ? "opacity-70 cursor-wait" : "hover:bg-[var(--color-brand)] hover:shadow-md"}
        `}
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Generating...
            </>
          ) : (
            `Download Excel (${mode === "all" ? "All" : mode === "latest" ? `Top ${limit}` : "Date Range"})`
          )}
        </button>
      </div>
    </div>
  );
};

export default ExportCandidatesTool;
