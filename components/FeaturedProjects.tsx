"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS, getCategoryMeta } from "@/lib/data/projects";
import ProjectDetailModal from "./ProjectDetailModal";
import type { Project } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="featured-projects"
        className="relative py-20 sm:py-28 bg-paper overflow-hidden"
      >
        {/* Subtle blueprint grid background */}
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/30 bg-blueline/5 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline uppercase mb-3 font-bold">
                🗂 Featured Products
              </div>
              <h2 className="font-display text-section-heading font-bold text-ink tracking-tight text-balance">
                Enterprise Solutions{" "}
                <span className="text-blueline">We&apos;ve Built</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate leading-relaxed max-w-xl">
                A curated selection of our enterprise products across different industries and technology domains.
              </p>
            </div>

            <a
              href="/projects"
              className="group shrink-0 inline-flex items-center gap-2.5 rounded-full border border-grid bg-ink text-paper px-6 py-3.5 text-base font-bold transition-all duration-300 hover:bg-blueline hover:border-blueline hover:-translate-y-0.5 whitespace-nowrap self-start sm:self-auto"
            >
              View All Products
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Featured project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURED_PROJECTS.map((project, i) => {
              const meta = getCategoryMeta(project.category);

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
                  aria-label={`View details for ${project.name}`}
                  className="group relative flex flex-col rounded-2xl border border-grid bg-white shadow-sm hover:shadow-xl hover:border-blueline/40 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Accent top bar */}
                  <div className="h-1.5 shrink-0" style={{ backgroundColor: meta.color }} />

                  {/* Visual area */}
                  <div
                    className="relative h-48 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${meta.color}06 0%, ${meta.color}18 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 blueprint-grid opacity-25" />

                    {/* Icon */}
                    <div
                      className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: `${meta.color}15`,
                        border: `1.5px solid ${meta.color}30`,
                      }}
                    >
                      {project.icon}
                    </div>

                    {/* Category tag */}
                    <div
                      className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-mono font-semibold text-paper"
                      style={{ backgroundColor: meta.color }}
                    >
                      {meta.emoji} {meta.label}
                    </div>

                    {/* Status */}
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
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-display text-lg font-bold text-ink leading-snug group-hover:text-blueline transition-colors duration-200 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed line-clamp-2 mb-4 flex-1">
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
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end pt-3.5 border-t border-grid">
                      <span
                        className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all duration-200"
                        style={{ color: meta.color }}
                      >
                        View Details
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-bold text-paper shadow-lg shadow-blueline/25 transition-all duration-300 hover:bg-blueline-soft hover:shadow-xl hover:shadow-blueline/35 hover:-translate-y-0.5"
            >
              Explore All {FEATURED_PROJECTS.length > 0 ? `${FEATURED_PROJECTS.length > 5 ? "50+" : FEATURED_PROJECTS.length}` : ""} Products
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Detail modal */}
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
