import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ALL_PROJECTS, getCategoryMeta } from "@/lib/data/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products | Upstairs Techno",
  description:
    "Explore Upstairs Techno's portfolio of enterprise software products — from healthcare management and ERP systems to e-commerce platforms and procurement software.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink">
        {/* ── Page Hero ────────────────────────────────────────────────────── */}
        <section className="relative bg-ink text-paper pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blueline/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-blueline/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-5 font-semibold">
              🗂 Enterprise Software Portfolio
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight max-w-4xl">
              Our{" "}
              <span className="text-blueline-soft">Products</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-paper/70 leading-relaxed max-w-3xl">
              Real enterprise software built for real businesses — from hospital management systems and procurement platforms to e-commerce solutions and manufacturing ERPs.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6 sm:gap-10">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-extrabold text-blueline-soft">{ALL_PROJECTS.length}</span>
                <span className="text-xs text-paper/50 font-mono uppercase tracking-wider">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-extrabold text-blueline-soft">
                  {ALL_PROJECTS.filter((p) => p.status === "Live").length}
                </span>
                <span className="text-xs text-paper/50 font-mono uppercase tracking-wider">Live</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-extrabold text-blueline-soft">
                  {ALL_PROJECTS.filter((p) => p.status === "Completed").length}
                </span>
                <span className="text-xs text-paper/50 font-mono uppercase tracking-wider">Completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Project Grid ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_PROJECTS.map((project) => {
              const meta = getCategoryMeta(project.category);
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-grid bg-white overflow-hidden hover:border-blueline/40 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.2)] transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Accent bar */}
                  <div className="h-1 shrink-0" style={{ backgroundColor: meta.color }} />

                  {/* Visual area */}
                  <div
                    className="relative flex h-44 items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${meta.color}06 0%, ${meta.color}18 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 blueprint-grid opacity-20" />

                    {/* Category tag */}
                    <div
                      className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-mono font-semibold text-paper"
                      style={{ backgroundColor: meta.color }}
                    >
                      {meta.emoji} {meta.label}
                    </div>

                    {/* Status badge */}
                    <div
                      className={`absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono font-bold ${
                        project.status === "Live"
                          ? "bg-green-500/10 text-green-600 border-green-500/30"
                          : "bg-blueline/10 text-blueline border-blueline/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === "Live" ? "bg-green-500 animate-pulse" : "bg-blueline"
                        }`}
                      />
                      {project.status}
                    </div>

                    {/* Icon */}
                    <div
                      className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: `${meta.color}15`,
                        border: `1.5px solid ${meta.color}30`,
                      }}
                    >
                      {project.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-display text-lg font-bold text-ink leading-snug group-hover:text-blueline transition-colors duration-200 mb-2">
                      {project.name}
                    </h2>
                    <p className="text-sm text-slate leading-relaxed line-clamp-3 mb-4 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-paper-dim px-2.5 py-0.5 text-xs font-mono font-medium text-slate"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-full bg-paper-dim px-2.5 py-0.5 text-xs font-mono font-medium text-slate">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3.5 border-t border-grid">
                      <span className="text-xs text-slate font-mono">{project.industry}</span>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all duration-200"
                        style={{ color: meta.color }}
                      >
                        View Details
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
          <div className="rounded-2xl bg-ink text-paper p-8 sm:p-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline-soft mb-3">
              Build with us
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-paper/60 text-base max-w-xl mx-auto leading-relaxed">
              Upstairs Techno builds enterprise software that solves real business problems. Let&apos;s talk.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 rounded-full bg-blueline px-7 py-3.5 text-sm font-bold text-paper hover:bg-blueline-soft transition-all duration-200"
              >
                Explore Our Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/10 px-7 py-3.5 text-sm font-bold text-paper hover:bg-paper/20 transition-all duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
