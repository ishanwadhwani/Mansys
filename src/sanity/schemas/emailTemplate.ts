import { defineType, defineField } from "sanity";

export default defineType({
  name: "emailTemplate",
  title: "Email Template",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "unique id like qualified-candidate",
      options: {
        source: "subject",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subject",
      type: "string",
      title: "Subject",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
      title: "Body (plain text or simple markup)",
      description:
        "Use {{firstName}}, {{lastName}}, {{occupation}} as placeholders.",
    }),
    defineField({
      name: "fromEmail",
      type: "string",
      title: "From email",
    }),
  ],
});
