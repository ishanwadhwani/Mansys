import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // S.documentTypeListItems()
      S.listItem()
        .title("Candidate Applications")
        .schemaType("candidateApplication")
        .child(
          S.documentTypeList("candidateApplication").title(
            "Candidate Applications"
          )
        ),
      S.listItem()
        .title("Email Templates")
        .schemaType("emailTemplate")
        .child(S.documentTypeList("emailTemplate").title("Email Templates")),
      S.listItem()
        .title("Site Settings")
        .schemaType("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Email Log")
        .schemaType("emailLog")
        .child(S.documentTypeList("emailLog").title("Email Log")),
      S.listItem()
        .title("Team Management")
        .schemaType("staff")
        .child(S.documentTypeList("staff").title("Team Management")),
      S.divider(),
    ]);
