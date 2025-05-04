import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const VITE_TOKEN = import.meta.env.VITE_TOKEN;

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: VITE_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source);
