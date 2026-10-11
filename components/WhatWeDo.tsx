"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { EASE } from "@/components/ui/motion";

export default function WhatWeDo() {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-paper scroll-mt-24 sm:scroll-mt-28">
      {/* Anchor for backward compatibility */}
      <div id="what-we-do" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="inline-block font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-blueline mb-3 font-bold px-3 py-1 rounded-full bg-blueline/10 border border-blueline/20">
            Services
          </span>
          <h2 className="font-display text-section-heading font-black text-ink text-balance">
            Our services, all in one place.
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              id={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="h-full scroll-mt-28 sm:scroll-mt-32"
            >
              <Link
                href={service.slug === "education" ? "/what-we-do/services/education" : `/services/${service.slug}`}
                className="group relative overflow-hidden clay-card clay-card-hover p-7 sm:p-8 h-full flex flex-col"
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

                <span className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-ink group-hover:text-blueline transition-colors shrink-0">
                  Learn more
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
