"use client";
import React, { useState } from "react";
import { useForm, Controller, Control, RegisterOptions } from "react-hook-form";

type FormValues = {
  wantsToWorkInAustralia: boolean;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  countryCode: string;
  occupation: string;
  occupationOther?: string;
  experienceYears: string;
  countryOfEmployment: string;
  countryOfEmploymentOther?: string;
  passportCountry: string;
  passportCountryOther?: string;
  englishLevel: string;
  consent: boolean;
};

const countryPhoneCodes = [
  { code: "+61", country: "Australia" },
  { code: "+91", country: "India" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+973", country: "Bahrain" },
  { code: "+965", country: "Kuwait" },
  { code: "+962", country: "Jordan" },
  { code: "+968", country: "Oman" },
  { code: "+974", country: "Qatar" },
  { code: "+880", country: "Bangladesh" },
  { code: "+977", country: "Nepal" },
  { code: "+94", country: "Sri Lanka" },
];

const occupationOptions = [
  "Bricklayer/Stonemason",
  "Carpenter/Joiner",
  "Glazier",
  "Painter",
  "Plasterer/Renderer",
  "Tiler",
  "Welder",
  "Other",
];

const experienceOptions = [
  "1 Year",
  "2 Years",
  "3 Years",
  "4 Years",
  "5 Years",
  "6 Years",
  "7 Years",
  "8 Years or More",
];

const countryOfEmploymentOptions = [
  "Bahrain",
  "Kuwait",
  "Israel",
  "Jordan",
  "Oman",
  "Qatar",
  "Saudi Arabia",
  "UAE",
  "Other",
];

const passportCountryOptions = [
  "Bangladesh",
  "India",
  "Indonesia",
  "Nepal",
  "Pakistan",
  "Philippines",
  "Sri Lanka",
  "Egypt",
  "Other",
];

const englishOptions = [
  "Bad",
  "Little",
  "OK",
  "Good",
  "Very Good",
  "Excellent",
];

const englishLevelTooltip = (
  <div className="text-left space-y-1.5 min-w-[220px]">
    <p>
      <span className="font-bold text-[var(--color-brand)]">Bad</span> — Very
      little English
    </p>
    <p>
      <span className="font-bold text-[var(--color-brand)]">Little</span> —
      Basic English only
    </p>
    <p>
      <span className="font-bold text-[var(--color-brand)]">OK</span> — Simple
      conversation possible
    </p>
    <p>
      <span className="font-bold text-[var(--color-brand)]">Good</span> —
      Comfortable speaking English
    </p>
    <p>
      <span className="font-bold text-[var(--color-brand)]">Very Good</span> —
      Strong English skills
    </p>
    <p>
      <span className="font-bold text-[var(--color-brand)]">Excellent</span> —
      Fluent English
    </p>
  </div>
);

export default function CandidateForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { wantsToWorkInAustralia: true, countryCode: "+91" },
  });

  const [serverResponse, setServerResponse] = useState<{
    ok: boolean;
    qualified?: boolean;
    reasons?: string[];
    id?: string;
    message?: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const watchOccupation = watch("occupation");
  const watchCountryOfEmployment = watch("countryOfEmployment");
  const watchPassportCountry = watch("passportCountry");

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setServerResponse(null);

    const fd = new FormData();
    fd.append("wantsToWorkInAustralia", "true"); // Always true
    fd.append("firstName", data.firstName || "");
    fd.append("lastName", data.lastName || "");
    fd.append("email", data.email || "");

    const fullPhone = data.phone ? `${data.countryCode} ${data.phone}` : "";
    fd.append("phone", fullPhone);

    fd.append("occupation", data.occupation || "");
    if (data.occupation === "Other" && data.occupationOther) {
      fd.append("occupationOther", data.occupationOther);
    }

    fd.append("countryOfEmployment", data.countryOfEmployment || "");
    if (data.countryOfEmployment === "Other" && data.countryOfEmploymentOther) {
      fd.append("countryOfEmploymentOther", data.countryOfEmploymentOther);
    }

    fd.append("passportCountry", data.passportCountry || "");
    if (data.passportCountry === "Other" && data.passportCountryOther) {
      fd.append("passportCountryOther", data.passportCountryOther);
    }

    const expIndex = experienceOptions.indexOf(data.experienceYears);
    const expValue =
      expIndex >= 0 ? (expIndex + 1).toString() : data.experienceYears;
    fd.append("experienceYears", expValue);

    // fd.append("countryOfEmployment", data.countryOfEmployment || "");
    // fd.append("passportCountry", data.passportCountry || "");
    fd.append("englishLevel", data.englishLevel || "");
    fd.append("consent", String(Boolean(data.consent)));

    try {
      const resp = await fetch("/api/submit-candidate", {
        method: "POST",
        body: fd,
      });
      const json = await resp.json();
      setServerResponse(json);

      if (json.ok) {
        reset({
          wantsToWorkInAustralia: true,
          countryCode: data.countryCode,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          occupation: "",
          occupationOther: "",
          experienceYears: "",
          countryOfEmployment: "",
          passportCountry: "",
          englishLevel: "",
          consent: false,
        });
        // window.scrollTo({
        //   top: document.body.scrollHeight,
        //   behavior: "smooth",
        // });
      }
    } catch (err) {
      setServerResponse({ ok: false, message: String(err) });
    } finally {
      setLoading(false);
    }
  };

  type SelectionGroupProps<Name extends keyof FormValues> = {
    label: string;
    name: Name;
    options: string[];
    control: Control<FormValues>;
    rules?: RegisterOptions<FormValues, Name>;
    tooltipContent?: React.ReactNode;
  };

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const SelectionGroup = <Name extends keyof FormValues>({
    label,
    name,
    options,
    control,
    rules = { required: true } as RegisterOptions<FormValues, Name>,
    tooltipContent,
  }: SelectionGroupProps<Name>) => (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <label className="block text-[var(--text-default)] text-lg font-semibold">
          {label} <span className="text-red-500">*</span>
        </label>

        {/* Tooltip Icon & Popup (Only renders if content is provided) */}
        {tooltipContent && (
          <div className="relative">
            <div
              className="cursor-help text-[var(--color-secondary)] hover:text-[var(--color-brand)] transition-colors duration-200 p-1"
              onMouseEnter={() => setIsTooltipOpen(true)}
              onMouseLeave={() => setIsTooltipOpen(false)}
              onClick={() => setIsTooltipOpen(!isTooltipOpen)}
            >
              {/* Icon */}
              {/* <div className="cursor-help text-[var(--muted)]/70 hover:text-[var(--color-brand)] transition-colors duration-200"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Popup Box */}
            <div
              className={`
                  absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 p-4 
                  bg-[var(--color-navy)] text-[var(--color-paper)] text-xs rounded-xl shadow-2xl 
                  transition-all duration-300 transform 
                  w-max max-w-[260px] md:max-w-sm pointer-events-none
                  ${isTooltipOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
                `}
            >
              {tooltipContent}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-navy)]"></div>
            </div>
          </div>
        )}
      </div>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className="flex flex-wrap gap-3">
            {options.map((option) => {
              const isSelected = field.value === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => field.onChange(option)}
                  className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                      ${
                        isSelected
                          ? "bg-[#64a9ec] text-white border-[#64a9ec] shadow-md transform scale-[1.02]"
                          : "bg-[#fefeff] text-[#6b7280] border-[#acb5d4] hover:border-[#64a9ec] hover:text-[#0b2540]"
                      }
                    `}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      />
      {errors[name] && (
        <p className="text-xs text-red-500 mt-2">Please make a selection</p>
      )}
    </div>
  );

  return (
    <div className="w-full bg-[var(--color-paper)] rounded-2xl shadow-sm border border-[var(--color-secondary)]/20 overflow-hidden">
      {/* Form Header */}
      <div className="bg-[var(--color-paper)] p-6 md:p-8 border-b border-[var(--color-secondary)]/20">
        <h2 className="text-2xl font-bold text-[var(--color-navy)]">
          Candidate Application
        </h2>
        <p className="text-[var(--muted)] mt-2 text-sm">
          Please enter your details to check eligibility.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
        <input type="hidden" {...register("wantsToWorkInAustralia")} />

        <SelectionGroup
          label="Your Trade / Work"
          name="occupation"
          options={occupationOptions}
          control={control}
        />
        {watchOccupation === "Other" && (
          <div className="mb-8 animate-fadeIn">
            <label className="block text-[var(--text-default)] text-sm font-medium mb-2">
              Please specify your occupation
            </label>
            <input
              {...register("occupationOther", { required: true })}
              className="w-full md:w-1/2 p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all"
              placeholder="e.g. Electrician"
            />
          </div>
        )}

        <SelectionGroup
          label="Your Work Experience"
          name="experienceYears"
          options={experienceOptions}
          control={control}
        />

        <SelectionGroup
          label="Where are you working?"
          name="countryOfEmployment"
          options={countryOfEmploymentOptions}
          control={control}
        />

        {watchCountryOfEmployment === "Other" && (
          <div className="mb-8 animate-fadeIn">
            <label className="block text-[var(--text-default)] text-sm font-medium mb-2">
              Please specify country
            </label>
            <input
              {...register("countryOfEmploymentOther", { required: true })}
              className="w-full md:w-1/2 p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] outline-none"
              placeholder="e.g. United Kingdom"
            />
          </div>
        )}

        <SelectionGroup
          label="Your Passport Country"
          name="passportCountry"
          options={passportCountryOptions}
          control={control}
        />

        {watchPassportCountry === "Other" && (
          <div className="mb-8 animate-fadeIn">
            <label className="block text-[var(--text-default)] text-sm font-medium mb-2">
              Please specify passport country
            </label>
            <input
              {...register("passportCountryOther", { required: true })}
              className="w-full md:w-1/2 p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] outline-none"
              placeholder="e.g. Malaysia"
            />
          </div>
        )}

        <SelectionGroup
          label="Your English Level"
          name="englishLevel"
          options={englishOptions}
          control={control}
          tooltipContent={englishLevelTooltip}
        />

        <hr className="border-[var(--color-secondary)]/30 my-8" />

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[var(--color-navy)] mb-4">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[var(--text-default)] text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("firstName", { required: true })}
                className="w-full p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all bg-[var(--color-paper)]"
                placeholder="Jane"
              />
              {errors.firstName && (
                <p className="text-xs text-red-500 mt-1">Required</p>
              )}
            </div>

            <div>
              <label className="block text-[var(--text-default)] text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                {...register("lastName")}
                className="w-full p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all bg-[var(--color-paper)]"
                placeholder="Doe"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-[var(--text-default)] text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
                className="w-full p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all bg-[var(--color-paper)]"
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  Valid email required
                </p>
              )}
            </div>

            <div className="md:col-span-1">
              <label className="block text-[var(--text-default)] text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  {...register("countryCode")}
                  className="w-24 p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent bg-[var(--color-paper)] text-sm"
                >
                  {countryPhoneCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </select>
                <input
                  {...register("phone")}
                  className="w-full p-3 rounded-lg border border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent outline-none transition-all bg-[var(--color-paper)]"
                  placeholder="1234567890"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50/50 rounded-lg border border-[var(--color-brand)]/20 flex items-start gap-3">
            <input
              {...register("consent", { required: true })}
              id="consent"
              type="checkbox"
              className="mt-1 w-5 h-5 text-[var(--color-brand)] rounded border-gray-300 focus:ring-[var(--color-brand)]"
            />
            <label
              htmlFor="consent"
              className="text-sm text-[var(--text-default)]"
            >
              I consent to providing my personal information for visa
              eligibility assessment.
            </label>
          </div>
          {errors.consent && (
            <p className="text-xs text-red-500 mt-1 ml-1">Required</p>
          )}
        </div>

        {serverResponse && (
          <div
            className={`mt-8 p-6 rounded-xl border-l-4 shadow-sm animate-fadeIn ${
              serverResponse.qualified
                ? "bg-green-50 border-green-500"
                : "bg-orange-50 border-orange-400"
            }`}
          >
            <h3
              className={`text-lg font-bold mb-2 ${serverResponse.qualified ? "text-green-800" : "text-orange-800"}`}
            >
              {serverResponse.qualified ? "Congratulations!" : "Thank You"}
            </h3>
            <p className="text-[var(--text-default)] whitespace-pre-line">
              {serverResponse.message}
            </p>
            {serverResponse.reasons && serverResponse.reasons.length > 0 && (
              <ul className="mt-4 list-disc list-inside text-sm text-[var(--muted)]">
                {serverResponse.reasons.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--color-navy)] hover:bg-[var(--color-accent)] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto text-lg"
          >
            {loading ? "Processing..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}
