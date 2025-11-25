import { defineType, defineField } from "sanity";

export default defineType({
  name: "emailLog",
  title: "Email Log",
  type: "document",
  fields: [
    defineField({ name: "to", type: "string", title: "To" }),
    defineField({ name: "subject", type: "string", title: "Subject" }),
    defineField({ name: "body", type: "text", title: "Body" }),
    defineField({
      name: "candidateRef",
      type: "reference",
      to: [{ type: "candidateApplication" }],
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      options: { list: ["sent", "failed"] },
    }),
    defineField({
      name: "response",
      type: "text",
      title: "Provider response",
    }),
    defineField({
      name: "createdAt",
      title: "Sent at",
      type: "datetime",
    }),
  ],
});
