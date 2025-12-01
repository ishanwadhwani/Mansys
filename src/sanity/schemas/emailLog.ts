import { defineType, defineField } from "sanity";

export default defineType({
  name: "emailLog",
  title: "Email Log",
  type: "document",
  readOnly: true,
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
      name: "triggeredBy",
      type: "string",
      title: "Triggered By",
      description: "e.g 'admin_action' or 'system_auto'",
      options: {
        list: [
          { title: "Admin Action (Studio)", value: "admin_action" },
          { title: "System Automation", value: "system_auto" },
        ],
      },
    }),
    defineField({
      name: "response",
      type: "text",
      title: "Provider response",
    }),
    defineField({
      name: "sentAt",
      type: "datetime",
      title: "Sent at",
    }),
  ],
  preview: {
    select: {
      to: "to",
      subject: "subject",
      date: "sentAt",
      status: "status",
    },
    prepare({ to, subject, status }) {
      return {
        title: `To: ${to}`,
        subtitle: `${status?.toUpperCase()} - ${subject}`,
        // media: status === "sent" ? RxCheck : RxCross2,
      };
    },
  },
});
