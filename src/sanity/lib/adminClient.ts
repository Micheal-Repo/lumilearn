import { createClient } from "@sanity/client";
//import { stega } from '@sanity/preview-kit';
import { apiVersion, dataset, projectId } from "../env";

export const adminClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_ADMIN_TOKEN,
  stega: {
    enabled: true,
    studioUrl: "https://lumilearn.vercel.app/studio",
  },
});
