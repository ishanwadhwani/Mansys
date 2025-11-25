import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Site title",
    }),
    defineField({
      name: "degreeList",
      title: "Degrees considered qualifying",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Graduate, Post graduate, MBA",
    }),
    defineField({
      name: "minExperienceYears",
      title: "Minimum years experience",
      type: "number",
      description: "e.g. 2",
    }),
    defineField({
      name: "sendEmailOnQualified",
      title: "Auto send email when qualified",
      type: "boolean",
    }),
  ],
});
