"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";
import { EASE } from "@/components/ui/motion";

const STATS = [
  { label: "Enterprise Clients", value: 84, suffix: "" },
  { label: "Platforms Shipped", value: 213, suffix: "" },
  { label: "Countries Served", value: 40, suffix: "" },
  { label: "Engineers & Designers", value: 312, suffix: "" },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <div className="clay-pill clay-pill-accent mb-4">
            By the Numbers
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="clay-card-dark text-center p-6 sm:p-7"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white tabular-nums">
                <Counter value={stat.value} suffix="+" />
              </div>
              <p className="mt-2.5 text-sm sm:text-base font-semibold text-paper/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
