import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ALL_PROJECTS } from "@/lib/data/projects";
import { PARTNERS } from "@/lib/data/partners";
import { services } from "@/lib/data/services";
import { listBlogPosts, listCaseStudies, listCareerServices } from "@/lib/data/repository";

export const metadata: Metadata = {
  title: "HTML Sitemap",
  description: "Browse all public pages on the Upstairs Techno website.",
  alternates: { canonical: "/sitemap" },
};

const corePages = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["What We Do", "/what-we-do"], ["Projects", "/projects"], ["Partners", "/partners"],
  ["Careers", "/career"], ["Contact", "/contact"], ["Education", "/education"],
];
const educationPages = ["ai-courses", "coding-competition", "olympiad"];
const policyPages = ["privacy-policy", "terms-and-conditions", "cookie-policy", "refund-policy", "internship-terms", "disclaimer"];

export default async function SitemapPage() {
  const [posts, studies, careerServices] = await Promise.all([listBlogPosts(), listCaseStudies(), listCareerServices()]);
  const groups: [string, { label: string; href: string }[]][] = [
    ["Main pages", corePages.map(([label, href]) => ({ label, href }))],
    ["Services", services.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` }))],
    ["What we do", services.map(({ title, slug }) => ({ label: title, href: `/what-we-do/${slug}` })).concat([{ label: "Education services", href: "/what-we-do/services/education" }])],
    ["Projects", ALL_PROJECTS.map(({ name, slug }) => ({ label: name, href: `/projects/${slug}` }))],
    ["Partners", PARTNERS.map(({ name, slug }) => ({ label: name, href: `/partners/${slug}` }))],
    ["Career services", careerServices.map(({ title, id }) => ({ label: title, href: `/career/services/${id}` }))],
    ["Education", educationPages.map((slug) => ({ label: slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()), href: `/education/${slug}` }))],
    ["Case studies", studies.map(({ title, slug }) => ({ label: title, href: `/case-studies/${slug}` }))],
    ["Insights", posts.map(({ title, slug }) => ({ label: title, href: `/blog/${slug}` }))],
    ["Policies", policyPages.map((slug) => ({ label: slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()), href: `/${slug}` }))],
  ];

  return <><Navbar /><main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-28 sm:px-6 md:px-8"><p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline">Explore</p><h1 className="mt-3 text-4xl font-bold text-ink">Website Sitemap</h1><p className="mt-4 max-w-2xl text-slate">Browse the public pages on the Upstairs Techno website.</p><div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{groups.map(([title, links]) => <section key={title}><h2 className="text-lg font-bold text-ink">{title}</h2><ul className="mt-3 space-y-2">{links.map(({ label, href }) => <li key={href}><Link className="text-sm text-blueline underline-offset-4 hover:underline" href={href}>{label}</Link></li>)}</ul></section>)}</div></main><Footer /></>;
}
