import { defineType, defineField } from "sanity";

export default defineType({
  name: "staff",
  title: "Admin Staff / Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Staff Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Staff Email",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: ["Admin", "Reviewer", "Migration Agent"],
      },
    }),
  ],
});
