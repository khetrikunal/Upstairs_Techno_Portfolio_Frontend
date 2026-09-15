"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
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
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-[0.2em] text-blueline-soft mb-4 font-bold">
            <Building2 className="w-3.5 h-3.5" />
            Our Partners
          </div>
          <h2 className="font-display text-section-heading font-bold text-paper tracking-tight text-balance">
            Trusted{" "}
            <span className="text-blueline-soft">Partners</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-paper/70 leading-relaxed max-w-xl mx-auto">
            Businesses that trust Upstairs Techno to design and deliver
            enterprise software that drives real results.
          </p>
        </motion.div>

        {/* Partner name cards grid */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-5xl mx-auto">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center rounded-2xl border border-paper/10 bg-paper/5 backdrop-blur-sm hover:bg-paper/10 hover:border-blueline/40 hover:shadow-xl hover:shadow-blueline/10 transition-all duration-300 overflow-hidden p-6 sm:p-8 w-full max-w-[280px] min-w-[200px] flex-1"
            >
              {/* Logo */}
              <div className="flex items-center justify-center w-28 h-24 rounded-xl bg-white border border-paper/20 shadow-lg mb-4 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-24 h-20">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Company Name only */}
              <h3 className="font-display text-lg font-bold text-paper text-center leading-snug group-hover:text-blueline-soft transition-colors duration-200">
                {partner.name}
              </h3>

              {partner.industry && (
                <p className="mt-1.5 text-sm font-medium text-blueline-soft text-center">
                  {partner.industry}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
