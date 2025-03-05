import { z, defineContentConfig, defineCollection } from "@nuxt/content";
import { profileSchema } from "./utils/types/data";
import {
  greenSchema,
  politicsSchema,
  projectsSchema,
  techSchema,
} from "./utils/types/content";

export default defineContentConfig({
  collections: {
    profile: defineCollection({
      type: "data",
      source: "/data/profiles/*.yaml",
      schema: profileSchema,
    }),
    techs: defineCollection({
      type: "page",
      source: "/techs/**/*.{md, mdx}",
      schema: techSchema,
    }),
    politics: defineCollection({
      type: "page",
      source: "/politics/**/*.{md,mdx}",
      schema: politicsSchema,
    }),
    project: defineCollection({
      type: "page",
      source: "/projects/**/*.{md,mdx}",
      schema: projectsSchema,
    }),
    green: defineCollection({
      type: "page",
      source: "/green/**/*.{md,mdx}",
      schema: greenSchema,
    }),
  },
});
