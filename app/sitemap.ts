import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/lib/data/projects";
import { PARTNERS } from "@/lib/data/partners";
import { services } from "@/lib/data/services";
import { listBlogPosts, listCaseStudies, listCareerServices } from "@/lib/data/repository";

const siteUrl = "https://upstairstechno.com";
const lastModified = new Date("2026-11-12T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, studies, careerServices] = await Promise.all([
    listBlogPosts(),
    listCaseStudies(),
    listCareerServices(),
  ]);

  const pages: MetadataRoute.Sitemap = [
    ["", "weekly", 1], ["about", "monthly", 0.8], ["services", "monthly", 0.9],
    ["what-we-do", "monthly", 0.8], ["projects", "monthly", 0.9],
    ["partners", "monthly", 0.7], ["case-studies", "monthly", 0.7], ["career", "monthly", 0.7],
    ["contact", "monthly", 0.8], ["education", "monthly", 0.7],
    ["education/ai-courses", "monthly", 0.6], ["education/coding-competition", "monthly", 0.6],
    ["education/olympiad", "monthly", 0.6],
    ["what-we-do/services/education", "monthly", 0.6],
    ["privacy-policy", "yearly", 0.3], ["terms-and-conditions", "yearly", 0.3],
    ["cookie-policy", "yearly", 0.3], ["refund-policy", "yearly", 0.3],
    ["internship-terms", "yearly", 0.2], ["disclaimer", "yearly", 0.2],
    ["sitemap", "monthly", 0.3],
  ].map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}/${path}`.replace(/\/$/, path === "" ? "/" : ""),
    lastModified,
    changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: priority as number,
  }));

  const dynamic: MetadataRoute.Sitemap = [
    ...ALL_PROJECTS.map(({ slug }) => ({ path: `projects/${slug}`, priority: 0.7 })),
    ...PARTNERS.map(({ slug }) => ({ path: `partners/${slug}`, priority: 0.6 })),
    ...services.map(({ slug }) => ({ path: `services/${slug}`, priority: 0.7 })),
    ...services.map(({ slug }) => ({ path: `what-we-do/${slug}`, priority: 0.6 })),
    ...careerServices.map(({ id }) => ({ path: `career/services/${id}`, priority: 0.5 })),
    ...posts.map(({ slug }) => ({ path: `blog/${slug}`, priority: 0.6 })),
    ...studies.map(({ slug }) => ({ path: `case-studies/${slug}`, priority: 0.6 })),
  ].map(({ path, priority }) => ({
    url: `${siteUrl}/${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...pages, ...dynamic];
}
