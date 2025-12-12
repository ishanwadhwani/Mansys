import { type SchemaTypeDefinition } from "sanity";
import candidateApplication from "../schemas/candidateApplication";
import emailLog from "../schemas/emailLog";
import emailTemplate from "../schemas/emailTemplate";
import siteSettings from "../schemas/siteSettings";
import staff from "../schemas/staff";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [candidateApplication, siteSettings, emailTemplate, emailLog, staff],
};
