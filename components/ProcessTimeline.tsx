"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { label: "Discovery", detail: "We talk to you, understand your business, and learn exactly what you need." },
  { label: "Planning", detail: "We create a clear plan — what we'll build, how long it will take, and how much it will cost." },
  { label: "Design", detail: "We design how the product looks and works, and share it with you before building." },
  { label: "Development", detail: "We build the product step by step and show you updates regularly so you stay in the loop." },
  { label: "Testing", detail: "We test everything carefully to make sure it works properly and is safe to use." },
  { label: "Deployment", detail: "We launch your product smoothly, with proper checks to avoid any downtime." },
  { label: "Support", detail: "We stay with you after launch to fix issues and keep everything running well." },
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
          <div className="clay-pill clay-pill-accent mb-3">
            How We Work
          </div>
          <h2 className="font-display text-section-heading font-black text-ink">
            How we work with you, step by step.
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate">
            From our first conversation to post-launch support — here&apos;s exactly how we handle your project.
          </p>
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
              className="relative pb-6 sm:pb-8 last:pb-0"
            >
              <span className="absolute -left-8 sm:-left-12 md:-left-16 top-5 w-[10px] h-[10px] rounded-full bg-blueline ring-4 ring-paper shadow-sm" />
              <div className="clay-card p-5 sm:p-6 transition-all hover:border-blueline/35 hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <span className="clay-pill clay-pill-accent font-mono text-xs sm:text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">{step.label}</h3>
                </div>
                <p className="mt-2.5 text-base sm:text-lg text-slate leading-relaxed">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
