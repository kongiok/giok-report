import { z } from "zod";

const excerptSchema = z.object({
  type: z.string(),
  children: z.any(),
});

const slugSchema = z.string().min(1).max(100);

const pageBaseSchema = z.object({
  slug: slugSchema,
  author: z.string().min(1).max(100).default("NOBODY"),
  title: z.string().min(1).max(100).default("Untitled"),
  description: z.string().min(1).max(200).default("No description"),
  createdAt: z.string().datetime(),
});
const pageNavigationSchema = z.object({
  area: z.string().min(5).max(100),
  category: z.string().min(5).max(100),
  tags: z.array(z.string().min(1).max(100)).max(5).optional(),
  related: z.array(slugSchema).max(5).optional(),
});

const pageExtraSchema = z.object({
  bgImg: z.string().url().optional(),
  excerpt: excerptSchema,
});

const pageSchema = z.object({
  ...pageBaseSchema.shape,
  ...pageNavigationSchema.shape,
  ...pageExtraSchema.shape,
});

const politicsSchema = pageSchema.extend({
  area: z.string().min(5).max(100).default("politics"),
});
const techSchema = pageSchema.extend({
  area: z.string().min(5).max(100).default("tech"),
});
const projectsSchema = pageSchema.extend({
  area: z.string().min(5).max(100).default("projects"),
});

const greenSchema = pageSchema.extend({
  area: z.string().min(5).max(100).default("green"),
});

enum ContentArea {
  POLITICS = "politics",
  TECH = "tech",
  PROJECTS = "projects",
  GREEN = "green",
}

const contentAreaEnum = z.nativeEnum(ContentArea);

export {
  politicsSchema,
  techSchema,
  projectsSchema,
  greenSchema,
  ContentArea,
  contentAreaEnum,
};
