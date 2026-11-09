import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Each case study is one Markdown file in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    domain: z.string(), // e.g. "Maritime", "Oil & Gas", "Payments", "Cross-domain"
    skills: z.array(z.string()).default([]),
    role: z.string().default("Business Analyst"),
    order: z.number().default(99), // lower number shows first
    status: z.enum(["published", "draft"]).default("published"),
    downloads: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

// Each insight / article is one Markdown file in src/content/insights/
const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, insights };
