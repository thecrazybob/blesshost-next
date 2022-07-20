import PicoSanity from "picosanity"

export const client = new PicoSanity({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
})
