"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\Studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { SendEmailAction } from "@/sanity/actions";
import ExportCandidatesTool from "@/sanity/tool/ExportCandidatesTool";

const privateDataset = process.env.NEXT_PRIVATE_SANITY_DATASET;

export default defineConfig({
  basePath: "/Studio",
  projectId,
  dataset: privateDataset || "production",
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    actions: (prev, context) => {
      if (context.schemaType === "candidateApplication") {
        return [SendEmailAction, ...prev];
      }
      return prev;
    },
  },
  tools: (prev) => {
    return [
      ...prev,
      {
        name: "export-candidates",
        title: "Export Report",
        component: ExportCandidatesTool,
      },
    ];
  },
});
