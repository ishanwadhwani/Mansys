import { createClient } from "next-sanity";

// import { apiVersion, dataset, projectId } from '../env'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const publicDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const privateDataset = process.env.NEXT_PRIVATE_SANITY_DATASET;

export const config = {
  projectId,
  dataset: publicDataset,
  apiVersion: "2024-01-01",
  useCdn: false,
};

export const client = createClient(config);

export const writeClient = createClient({
  ...config,
  dataset: privateDataset,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})
