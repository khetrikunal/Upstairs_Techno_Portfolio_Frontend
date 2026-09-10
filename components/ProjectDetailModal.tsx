"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { getCategoryMeta } from "@/lib/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const STATUS_COLORS: Record<Project["status"], string> = {
  Live: "text-green-600 bg-green-500/10 border-green-500/30",
  Completed: "text-blueline bg-blueline/10 border-blueline/30",
  "In Progress": "text-brass bg-brass/10 border-brass/30",
};

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${project.name}`}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-y-0 right-0 z-[101] w-full max-w-2xl bg-paper shadow-2xl overflow-y-auto flex flex-col"
          >
            {/* Header */}
            {(() => {
              const categoryMeta = getCategoryMeta(project.category);
              return (
                <>
                  {/* Accent bar */}
                  <div className="h-1.5 shrink-0" style={{ backgroundColor: categoryMeta.color }} />

                  {/* Dark hero header */}
                  <div
                    className="relative bg-ink text-paper px-6 sm:px-8 pt-8 pb-10 overflow-hidden shrink-0"
                    style={{
                      background: `linear-gradient(135deg, #0e1524 60%, ${categoryMeta.color}30 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />

                    {/* Close button */}
                    <button
                      type="button"
                      onClick={onClose}
                      aria-label="Close project details"
                      className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-paper/10 hover:bg-paper/20 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5 text-paper" />
                    </button>

                    <div className="relative z-10">
                      {/* Category + status row */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-mono font-bold text-paper"
                          style={{ backgroundColor: categoryMeta.color }}
                        >
                          {categoryMeta.emoji} {categoryMeta.label}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono font-bold ${STATUS_COLORS[project.status]}`}
                        >
                          {project.status}
                        </span>
                        {project.duration && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-paper/60">
                            <Clock className="w-3.5 h-3.5" />
                            {project.duration}
                          </span>
                        )}
                      </div>

                      {/* Project icon + name */}
                      <div className="flex items-start gap-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-xl"
                          style={{ backgroundColor: `${categoryMeta.color}20`, border: `1.5px solid ${categoryMeta.color}40` }}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-paper leading-tight">
                            {project.name}
                          </h2>
                          <p className="mt-1.5 text-base text-paper/70 leading-relaxed">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* External links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-blueline px-5 py-2.5 text-sm font-bold text-paper hover:bg-blueline-soft transition-colors"
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
                              className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/10 px-5 py-2.5 text-sm font-bold text-paper hover:bg-paper/20 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="flex-1 px-6 sm:px-8 py-8 space-y-8">
                    {/* Description */}
                    <div>
                      <SectionTitle icon="📄" title="Overview" />
                      <p className="text-base text-ink/85 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Business problem & solution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="rounded-2xl bg-ink text-paper p-5">
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-blueline-soft mb-3">
                          Business Problem
                        </p>
                        <p className="text-sm text-paper/85 leading-relaxed">{project.businessProblem}</p>
                      </div>
                      <div
                        className="rounded-2xl p-5 text-paper"
                        style={{ backgroundColor: categoryMeta.color }}
                      >
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-paper/70 mb-3">
                          Our Solution
                        </p>
                        <p className="text-sm text-paper/90 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Key features */}
                    <div>
                      <SectionTitle icon="⚡" title="Key Features" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5 rounded-xl border border-grid bg-paper p-3">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: categoryMeta.color }} />
                            <span className="text-sm text-ink leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology stack */}
                    <div>
                      <SectionTitle icon="🛠" title="Technology Stack" />
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-grid bg-paper-dim px-3.5 py-1.5 text-sm font-mono font-semibold text-ink"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project info strip */}
                    <div className="rounded-2xl border border-grid bg-paper-dim/50 p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <InfoCell label="Category" value={`${categoryMeta.emoji} ${categoryMeta.label}`} />
                      <InfoCell label="Status" value={project.status} />
                      {project.duration && <InfoCell label="Duration" value={project.duration} />}
                    </div>

                    {/* Footer CTA */}
                    <div className="pt-4 border-t border-grid">
                      <p className="text-sm text-slate text-center">
                        Interested in building something similar?
                      </p>
                      <a
                        href="/#contact"
                        className="mt-3 w-full flex items-center justify-center gap-2 rounded-full bg-ink text-paper px-6 py-4 text-base font-bold hover:bg-blueline transition-colors"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-lg">{icon}</span>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
    </div>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs text-slate uppercase tracking-widest font-bold mb-1">{label}</p>
      <p className="text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
