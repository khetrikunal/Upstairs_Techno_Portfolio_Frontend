"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { label: "Discovery", detail: "We map the system as it actually runs, not as the docs say it does." },
  { label: "Planning", detail: "Scope, sequencing, and the rollback plan — written before the build plan." },
  { label: "Design", detail: "Interfaces and architecture reviewed together, not handed off in sequence." },
  { label: "Development", detail: "Shipped in increments a client can see and react to every two weeks." },
  { label: "Testing", detail: "Load, security, and failure-mode testing — rehearsed, not just documented." },
  { label: "Deployment", detail: "Shadowed traffic, staged cutover, and a rollback that's actually been run." },
  { label: "Support", detail: "On-call alongside your team until the system is boring again." },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
            How We Work
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink">
            Seven stages. Same team, start to finish.
          </h2>
        </motion.div>

        <div ref={ref} className="relative pl-8 sm:pl-12 md:pl-16">
          <div className="absolute left-[3px] md:left-[5px] top-2 bottom-2 w-px bg-grid" />
          <motion.div
            className="absolute left-[3px] md:left-[5px] top-2 w-px bg-blueline"
            style={{ height: lineHeight }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative pb-10 sm:pb-12 last:pb-0"
            >
              <span className="absolute -left-8 sm:-left-12 md:-left-16 top-1 w-[8px] h-[8px] rounded-full bg-blueline ring-4 ring-paper" />
              <div className="flex items-baseline gap-3.5">
                <span className="font-mono text-sm sm:text-base font-bold text-blueline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl sm:text-[26px] font-bold text-ink">{step.label}</h3>
              </div>
              <p className="mt-2.5 text-base sm:text-lg text-slate max-w-xl leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
