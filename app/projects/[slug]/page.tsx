import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getCategoryMeta,
  ALL_PROJECTS,
} from "@/lib/data/projects";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Upstairs Techno`,
    description: project.shortDescription,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const meta = getCategoryMeta(project.category);

  // Related: same category, excluding current
  const related = ALL_PROJECTS.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  ).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-ink text-paper pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 80% 50%, ${meta.color}40 0%, transparent 70%)`,
            }}
          />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
            {/* Back */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-paper/60 hover:text-paper transition-colors text-sm font-mono mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to All Products
            </Link>

            {/* Category badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono font-semibold tracking-widest text-paper uppercase mb-5"
              style={{ backgroundColor: meta.color }}
            >
              {meta.emoji} {meta.label}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper leading-tight">
              {project.name}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-paper/70 font-medium">
              {project.tagline}
            </p>

            <p className="mt-5 text-base sm:text-lg text-paper/60 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* CTA buttons — only show if URLs exist */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blueline px-6 py-3 text-sm font-bold text-paper hover:bg-blueline-soft transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/10 px-6 py-3 text-sm font-bold text-paper hover:bg-paper/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}

            {/* Tech pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-paper/20 bg-paper/10 px-3.5 py-1 text-xs font-mono text-paper/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Status + Industry strip */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-paper/10 pt-6">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/40 mb-1">Status</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-bold border ${
                    project.status === "Live"
                      ? "bg-green-500/10 text-green-400 border-green-500/30"
                      : "bg-blueline/10 text-blueline-soft border-blueline/20"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-green-500 animate-pulse" : "bg-blueline-soft"}`} />
                  {project.status}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/40 mb-1">Industry</span>
                <span className="text-sm font-semibold text-paper/80">{project.industry}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/40 mb-1">Type</span>
                <span className="text-sm font-semibold text-paper/80">{project.projectType}</span>
              </div>
              {project.year && (
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/40 mb-1">Year</span>
                  <span className="text-sm font-semibold text-paper/80">{project.year}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── BODY ─────────────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 space-y-14 sm:space-y-20">

          {/* ABOUT */}
          <section>
            <SectionLabel>About the Project</SectionLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              What is {project.name}?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed">
              {project.description}
            </p>
          </section>

          <Divider />

          {/* PROBLEM */}
          <section>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              What was the challenge?
            </h2>
            <div className="mt-5 rounded-2xl border border-grid bg-paper-dim p-6 sm:p-8">
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                {project.businessProblem}
              </p>
            </div>
          </section>

          <Divider />

          {/* SOLUTION */}
          <section>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              How Upstairs Techno solved it
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed">
              {project.solution}
            </p>
          </section>

          <Divider />

          {/* KEY FEATURES */}
          <section>
            <SectionLabel>Key Features</SectionLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              What the platform delivers
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-grid bg-white px-5 py-3.5"
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${meta.color}18` }}
                  >
                    <Check className="h-3.5 w-3.5" style={{ color: meta.color }} />
                  </div>
                  <span className="text-sm font-medium text-ink">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* TECHNOLOGY */}
          {project.techStack && (
            <section>
              <SectionLabel>Technology</SectionLabel>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
                Built with
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                  <TechGroup label="Frontend" items={project.techStack.frontend} color={meta.color} />
                )}
                {project.techStack.backend && project.techStack.backend.length > 0 && (
                  <TechGroup label="Backend" items={project.techStack.backend} color={meta.color} />
                )}
                {project.techStack.database && project.techStack.database.length > 0 && (
                  <TechGroup label="Database" items={project.techStack.database} color={meta.color} />
                )}
                {project.techStack.other && project.techStack.other.length > 0 && (
                  <TechGroup label="Other" items={project.techStack.other} color={meta.color} />
                )}
              </div>
            </section>
          )}

          <Divider />

          {/* RESULT / IMPACT */}
          <section>
            <SectionLabel>Result & Impact</SectionLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              Outcomes delivered
            </h2>
            <div className="mt-6 space-y-3">
              {project.impact.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl border border-grid bg-white p-5"
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold font-mono text-paper mt-0.5"
                    style={{ backgroundColor: meta.color }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-slate leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* DEVELOPMENT DETAILS */}
          <section>
            <SectionLabel>Development Details</SectionLabel>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <DetailCard label="Industry" value={project.industry} />
              <DetailCard label="Project Type" value={project.projectType} />
              <DetailCard label="Status" value={project.status} />
              {project.year && <DetailCard label="Year" value={project.year} />}
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="rounded-2xl border border-grid bg-ink text-paper p-8 sm:p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline-soft mb-3">
              Ready to build something like this?
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Let&apos;s work together.
            </h2>
            <p className="mt-3 text-paper/60 text-base leading-relaxed max-w-xl mx-auto">
              Upstairs Techno builds custom enterprise software for businesses across every industry.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blueline px-7 py-3.5 text-sm font-bold text-paper hover:bg-blueline-soft transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/10 px-7 py-3.5 text-sm font-bold text-paper hover:bg-paper/20 transition-all duration-200"
              >
                Contact Upstairs Techno
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* RELATED PROJECTS */}
          {related.length > 0 && (
            <section>
              <SectionLabel>Related Projects</SectionLabel>
              <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-ink mb-6">
                More from {meta.label}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel) => {
                  const relMeta = getCategoryMeta(rel.category);
                  return (
                    <Link
                      key={rel.slug}
                      href={`/projects/${rel.slug}`}
                      className="group rounded-2xl border border-grid bg-white p-6 hover:border-blueline/40 hover:shadow-lg transition-all duration-200"
                    >
                      <span className="text-3xl">{rel.icon}</span>
                      <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-blueline transition-colors">
                        {rel.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate line-clamp-2 leading-relaxed">
                        {rel.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blueline">
                        View Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="text-center pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-slate hover:text-blueline transition-colors text-sm font-semibold group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to All Products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline font-semibold">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="border-t border-grid" />;
}

function TechGroup({
  label,
  items,
  color,
}: {
  label: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-grid bg-white p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full px-3 py-1 text-xs font-mono font-semibold text-paper"
            style={{ backgroundColor: color }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-grid bg-white p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate mb-2">{label}</p>
      <p className="text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
