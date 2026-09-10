/**
 * Static data access — no backend, no filesystem writes.
 * All data is bundled at build time from seed-data.ts and career-services.ts.
 */

import { seedBlogPosts, seedCaseStudies, seedJobs } from "./seed-data";
import { careerServices } from "./career-services";
import type {
  BlogPost,
  CaseStudy,
  Job,
  CareerService,
} from "./types";

// --- Blog ---------------------------------------------------------------
export async function listBlogPosts(): Promise<BlogPost[]> {
  return [...seedBlogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return seedBlogPosts.find((p) => p.slug === slug);
}

// --- Case studies -------------------------------------------------------
export async function listCaseStudies(): Promise<CaseStudy[]> {
  return [...seedCaseStudies].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return seedCaseStudies.find((s) => s.slug === slug);
}

// --- Jobs ---------------------------------------------------------------
export async function listJobs(): Promise<Job[]> {
  return [...seedJobs].sort((a, b) =>
    a.postedAt < b.postedAt ? 1 : -1
  );
}

export async function getJob(slug: string): Promise<Job | undefined> {
  return seedJobs.find((j) => j.slug === slug);
}

// --- Career Services ----------------------------------------------------
export async function listCareerServices(): Promise<CareerService[]> {
  return [...careerServices];
}

export async function getCareerService(id: string): Promise<CareerService | undefined> {
  return careerServices.find((s) => s.id === id);
}
