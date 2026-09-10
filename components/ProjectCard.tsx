"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { getCategoryMeta } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick: (project: Project) => void;
}

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-green-500/10 text-green-600 border-green-500/30",
  Completed: "bg-blueline/10 text-blueline border-blueline/30",
  "In Progress": "bg-brass/10 text-brass border-brass/30",
};

const STATUS_DOT: Record<Project["status"], string> = {
  Live: "bg-green-500 animate-pulse",
  Completed: "bg-blueline",
  "In Progress": "bg-brass animate-pulse",
};

export default function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const categoryMeta = getCategoryMeta(project.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      layout
      className="group relative flex flex-col rounded-2xl border border-grid bg-white shadow-sm hover:shadow-xl hover:border-blueline/40 transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => onClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.name}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
    >
      {/* Color accent banner */}
      <div
        className="h-2 w-full shrink-0"
        style={{ backgroundColor: categoryMeta.color, opacity: 0.85 }}
      />

      {/* Card graphic area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden shrink-0"
        style={{
          background: `linear-gradient(135deg, ${categoryMeta.color}08 0%, ${categoryMeta.color}18 100%)`,
        }}
      >
        {/* Blueprint grid texture */}
        <div className="absolute inset-0 blueprint-grid opacity-30" />

        {/* Project icon */}
        <div
          className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${categoryMeta.color}15`, border: `1.5px solid ${categoryMeta.color}30` }}
        >
          {project.icon}
        </div>

        {/* Status badge */}
        <div
          className={`absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono font-bold ${STATUS_STYLES[project.status]}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
          {project.status}
        </div>

        {/* Category chip */}
        <div
          className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-mono font-semibold text-paper"
          style={{ backgroundColor: categoryMeta.color }}
        >
          <span>{categoryMeta.emoji}</span>
          <span>{categoryMeta.label}</span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-bold text-ink leading-snug group-hover:text-blueline transition-colors duration-200 mb-2">
          {project.name}
        </h3>

        <p className="text-sm text-slate leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Technologies */}
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

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3.5 border-t border-grid">
          {project.duration && (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate font-mono">
              <Clock className="w-3.5 h-3.5" />
              {project.duration}
            </span>
          )}
          <span
            className="ml-auto inline-flex items-center gap-1 text-sm font-bold transition-colors duration-200 group-hover:gap-2"
            style={{ color: categoryMeta.color }}
          >
            View Details
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
