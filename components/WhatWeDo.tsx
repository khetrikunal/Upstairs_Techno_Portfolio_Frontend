"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
            What We Do
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink text-balance">
            End-to-end disciplines, one delivery team.
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="h-full"
            >
              <Link
                href={service.slug === "education" ? "/what-we-do/services/education" : `/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-grid bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)] h-full flex flex-col"
                data-cursor="Learn more"
              >
                <div className="flex-1">
                  <span className="absolute top-0 left-0 h-[2px] w-0 bg-blueline transition-all duration-500 group-hover:w-full" />

                  <service.icon className="w-8 h-8 text-blueline transition-transform duration-500 group-hover:rotate-12" />

                  <h3 className="mt-6 font-display text-2xl sm:text-[26px] font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3.5 text-base sm:text-lg text-slate leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <span className="mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-ink group-hover:text-blueline transition-colors shrink-0">
                  Learn more
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-blueline/0 blur-2xl transition-all duration-500 group-hover:bg-blueline/10" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
