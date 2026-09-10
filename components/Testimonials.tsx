"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "They rebuilt our core banking platform while we kept operating — something two previous vendors told us was not realistic on our timeline.",
    name: "Elena Ford",
    role: "CTO, Meridian Bank",
  },
  {
    quote:
      "The dispatcher console alone paid for the engagement in the first quarter. Our fuel spend dropped in ways we could actually attribute to the change.",
    name: "Tomas Reyes",
    role: "VP Operations, Harborline Logistics",
  },
  {
    quote:
      "Every security review since the rebuild has come back clean. That's not something I say about many vendors after eighteen months.",
    name: "Dr. Anika Rao",
    role: "CISO, Clearview Health Network",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const t = TESTIMONIALS[index];

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-8 sm:mb-10 font-medium">
          What Clients Say
        </p>

        <div className="relative min-h-[200px] sm:min-h-[220px] flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-gradient-to-br from-blueline to-ink ring-2 ring-blueline/30 ring-offset-4 ring-offset-paper shadow-md" />
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-ink leading-snug text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm sm:text-base text-slate">
                <span className="text-ink font-semibold">{t.name}</span> — {t.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border border-grid p-3 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-7 bg-blueline" : "w-2 bg-grid"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border border-grid p-3 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
