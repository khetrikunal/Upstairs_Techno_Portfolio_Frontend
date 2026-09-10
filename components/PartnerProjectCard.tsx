"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Package } from "lucide-react";
import Image from "next/image";
import type { PartnerProject } from "@/lib/data/partners";

interface PartnerProjectCardProps {
  project: PartnerProject;
  index?: number;
}

export default function PartnerProjectCard({
  project,
  index = 0,
}: PartnerProjectCardProps) {
  const isPlaceholder =
    !project.technologies?.length &&
    !project.features?.length &&
    !project.details;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-grid bg-white shadow-sm hover:shadow-xl hover:border-blueline/40 transition-all duration-300 overflow-hidden"
    >
      {/* Accent top bar */}
      <div className="h-1.5 shrink-0 bg-gradient-to-r from-blueline to-blueline-soft" />

      {/* Thumbnail / visual area */}
      <div className="relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blueline/5 to-blueline/12">
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        {project.thumbnail ? (
          <div className="relative w-full h-full">
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-blueline/10 border border-blueline/20 flex items-center justify-center shadow-lg">
              <Package className="w-7 h-7 text-blueline" />
            </div>
            {isPlaceholder && (
              <span className="text-xs font-mono font-semibold text-slate bg-paper-dim px-3 py-1 rounded-full border border-grid">
                Details coming soon
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-ink leading-snug group-hover:text-blueline transition-colors duration-200 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Details paragraph */}
        {project.details && (
          <p className="text-sm text-slate leading-relaxed mb-4 border-l-2 border-blueline/30 pl-3 italic">
            {project.details}
          </p>
        )}

        {/* Features list */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blueline mb-2">
              Key Modules
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-1.5 text-xs text-slate"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blueline shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology pills */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-paper-dim px-2.5 py-0.5 text-xs font-mono font-medium text-slate border border-grid"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-grid">
          {project.projectLink ? (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-blueline px-4 py-2 text-xs font-bold text-paper shadow-md shadow-blueline/20 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blueline/30"
            >
              View Project
              <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-blueline opacity-70">
              <ArrowUpRight className="w-3.5 h-3.5" />
              Projects delivered by Upstairs Techno
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
