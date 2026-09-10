"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import Image from "next/image";
import { PARTNERS } from "@/lib/data/partners";

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative py-20 sm:py-28 bg-ink text-paper overflow-hidden"
    >
      {/* Blueprint grid background — dark variant */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-70 pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blueline/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brass/8 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-4 font-bold">
              <Building2 className="w-3.5 h-3.5" />
              Our Partners
            </div>
            <h2 className="font-display text-section-heading font-bold text-paper tracking-tight text-balance">
              Companies We&apos;ve{" "}
              <span className="text-blueline-soft">Built For</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-paper/70 leading-relaxed max-w-xl">
              Trusted by businesses across industries to design and deliver
              enterprise software that drives real results.
            </p>
          </div>

          <a
            href="/partners"
            className="group shrink-0 inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/8 backdrop-blur-sm text-paper px-6 py-3.5 text-base font-bold transition-all duration-300 hover:bg-blueline hover:border-blueline hover:-translate-y-0.5 whitespace-nowrap self-start sm:self-auto"
          >
            View All Partners
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Partner cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
            >
              <a
                href={`/partners/${partner.slug}`}
                className="group relative flex flex-col rounded-2xl border border-paper/10 bg-paper/5 backdrop-blur-sm hover:bg-paper/10 hover:border-blueline/40 hover:shadow-xl hover:shadow-blueline/10 transition-all duration-300 overflow-hidden h-full"
                aria-label={`View projects for ${partner.name}`}
              >
                {/* Top accent bar */}
                <div className="h-1 shrink-0 bg-gradient-to-r from-blueline to-blueline-soft" />

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Logo */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-white/95 border border-paper/20 shadow-lg mb-5 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <div className="relative w-16 h-16">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>

                  {/* Company info */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-paper leading-snug group-hover:text-blueline-soft transition-colors duration-200 mb-1.5">
                      {partner.name}
                    </h3>

                    {partner.industry && (
                      <p className="text-xs font-mono font-semibold text-blueline-soft uppercase tracking-widest mb-2">
                        {partner.industry}
                      </p>
                    )}

                    <p className="text-sm text-paper/65 leading-relaxed mb-4">
                      {partner.shortDescription}
                    </p>

                    {/* Project count badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-blueline/15 border border-blueline/30 px-3 py-1 text-xs font-mono font-semibold text-blueline-soft">
                      <span className="w-1.5 h-1.5 rounded-full bg-blueline-soft animate-pulse" />
                      {partner.projects.length}{" "}
                      {partner.projects.length === 1 ? "Project" : "Projects"}
                    </div>
                  </div>

                  {/* CTA footer */}
                  <div className="flex items-center justify-end pt-5 mt-5 border-t border-paper/10">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-paper/70 group-hover:text-blueline-soft group-hover:gap-2.5 transition-all duration-200">
                      View Projects
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
