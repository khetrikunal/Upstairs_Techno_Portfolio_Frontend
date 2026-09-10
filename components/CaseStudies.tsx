"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data/types";

const CASE_STUDY_IMAGES: Record<string, string> = {
  "meridian-bank-core-modernization": "/median Banking.png",
  "harborline-logistics-realtime-tracking": "/Harboeline.png",
  "clearview-health-patient-portal": "/clearview.png",
  "cs-1": "/median Banking.png",
  "cs-2": "/Harboeline.png",
  "cs-3": "/clearview.png",
  "gradient-5": "/median Banking.png",
  "gradient-6": "/Harboeline.png",
  "gradient-7": "/clearview.png",
};

export default function CaseStudies({ studies }: { studies: CaseStudy[] }) {
  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper-dim/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
            Case Studies
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink">
            Proof, not promises.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8">
          {studies.map((study, i) => {
            const imageSrc =
              study.coverImage?.startsWith("/")
                ? study.coverImage
                : CASE_STUDY_IMAGES[study.slug] ||
                  CASE_STUDY_IMAGES[study.id] ||
                  CASE_STUDY_IMAGES[study.coverImage] ||
                  "/median Banking.png";

            return (
              <motion.a
                href={`/case-studies/${study.slug}`}
                data-cursor="View study"
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative grid md:grid-cols-5 gap-0 overflow-hidden rounded-2xl border border-grid bg-white transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative md:col-span-2 h-64 sm:h-72 md:h-auto min-h-[220px] bg-ink overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={study.title}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300 pointer-events-none" />
                  <span className="absolute bottom-4 left-4 z-10 font-mono text-xs uppercase tracking-widest text-paper/90 bg-ink/60 backdrop-blur-md px-3 py-1 rounded-full font-medium border border-paper/10">
                    {study.industry}
                  </span>
                </div>

                <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-sm sm:text-base font-mono text-slate font-bold">{study.client}</span>
                  <h3 className="mt-2.5 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink group-hover:text-blueline transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-3.5 text-base sm:text-lg text-slate leading-relaxed max-w-xl">
                    {study.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-grid px-3.5 py-1.5 text-xs sm:text-sm font-mono text-slate bg-paper/60 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-base sm:text-lg font-bold text-ink w-fit transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:text-blueline">
                    Read the case study
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
