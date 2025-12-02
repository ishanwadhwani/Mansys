import { defineType, defineField } from "sanity";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import { EmailManager } from "@/components/EmailManager";

export default defineType({
  name: "candidateApplication",
  title: "Candidate Application",
  type: "document",
  fields: [
    defineField({
      name: "wantsToWorkInAustralia",
      title: "Wants to work in Australia",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "adminEmailActions",
      title: "Admin Actions",
      type: "string",
      components: {
        field: EmailManager,
      },
      readOnly: true,
    }),

    //personal
    defineField({
      name: "firstName",
      type: "string",
      title: "First Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      type: "string",
      title: "Last Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone",
    }),

    //job and location info
    defineField({
      name: "occupation",
      type: "string",
      title: "Occupation",
      options: {
        list: [
          "Bricklayer/Stonemason",
          "Carpenter/Joiner",
          "Glazier",
          "Painter",
          "Plasterer/Renderer",
          "Tiler",
          "Welder",
          "Other",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "occupationOther",
      type: "string",
      title: "Occupation (other)",
    }),
    defineField({
      name: "countryOfEmployment",
      type: "string",
      title: "Where are you working currently?",
      options: {
        list: [
          { title: "Bahrain", value: "Bahrain" },
          { title: "Kuwait", value: "Kuwait" },
          { title: "Israel", value: "Israel" },
          { title: "Jordan", value: "Jordan" },
          { title: "Oman", value: "Oman" },
          { title: "Saudi Arabia", value: "Saudi Arabia" },
          { title: "UAE", value: "UAE" },
          { title: "Other", value: "Other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "countryOfEmploymentOther",
      type: "string",
      title: "Country of Employment (Other)",
      hidden: ({ document }) => document?.countryOfEmployment !== "Other",
    }),

    // Experience and skills
    defineField({
      name: "experienceYears",
      title: "Years of experience",
      type: "number",
      options: {
        list: [
          { title: "1 Year", value: 1 },
          { title: "2 Years", value: 2 },
          { title: "3 Years", value: 3 },
          { title: "4 Years", value: 4 },
          { title: "5 Years", value: 5 },
          { title: "6 Years", value: 6 },
          { title: "7 Years", value: 7 },
          { title: "8 Years or More", value: 8 },
        ],
      },
    }),
    defineField({
      name: "englishLevel",
      type: "string",
      title: "English level",
      options: {
        list: ["Bad", "Little", "OK", "Good", "Very Good", "Excellent"],
      },
    }),
    defineField({
      name: "passportCountry",
      title: "Passport country",
      type: "string",
      options: {
        list: [
          { title: "Bangladesh", value: "Bangladesh" },
          { title: "India", value: "India" },
          { title: "Indonesia", value: "Indonesia" },
          { title: "Nepal", value: "Nepal" },
          { title: "Pakistan", value: "Pakistan" },
          { title: "Philippines", value: "Philippines" },
          { title: "Sri Lanka", value: "Sri Lanka" },
          { title: "Egypt", value: "Egypt" },
          { title: "Other", value: "Other" },
        ],
      },
    }),

    defineField({
      name: "passportCountryOther",
      type: "string",
      title: "Passport Country (Other)",
      hidden: ({ document }) => document?.passportCountry !== "Other",
    }),

    // misc qualifications
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // Optional files
    defineField({
      name: "cv",
      title: "CV (optional)",
      type: "file",
      description: "PDF/DOC/DOCX preferred",
      options: { accept: ".pdf,.doc,.docx" },
    }),

    // Tracking and meta data
    defineField({ name: "source", type: "string", title: "Source / UTM" }),
    defineField({
      name: "consent",
      type: "boolean",
      title: "Consent (privacy)",
    }),

    // System fields by backend
    defineField({ name: "qualified", title: "Qualified", type: "boolean" }),
    defineField({
      name: "qualificationReason",
      title: "Qualification reason",
      type: "text",
    }),
    defineField({ name: "emailSent", title: "Email sent", type: "boolean" }),
    defineField({
      name: "emailSentAt",
      title: "Email sent at",
      type: "datetime",
    }),
    defineField({ name: "createdAt", title: "Created at", type: "datetime" }),
  ],
  preview: {
    select: {
      firstName: "firstName",
      email: "email",
      qualified: "qualified",
    },
    prepare(selection: unknown) {
      // Safely cast the incoming generic selection
      const { firstName, email, qualified } = selection as {
        firstName?: string;
        email?: string;
        qualified?: boolean;
      };

      return {
        title: firstName ? firstName : "New Candidate",
        subtitle: email || "",
        media: qualified ? FaCheckCircle : IoMdCloseCircle,
      };
    },
  },
});
