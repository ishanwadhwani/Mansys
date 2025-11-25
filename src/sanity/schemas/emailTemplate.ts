import { defineType, defineField } from "sanity";

export default defineType({
  name: "emailTemplate",
  title: "Email Template",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
      description: "unique id like qualified-candidate",
    }),
    defineField({
      name: "subject",
      type: "string",
      title: "Subject",
    }),
    defineField({
      name: "body",
      type: "text",
      title: "Body (plain text or simple markup)",
    }),
    defineField({
      name: "fromEmail",
      type: "string",
      title: "From email",
    }),
  ],
});
