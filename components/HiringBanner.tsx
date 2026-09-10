"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users } from "lucide-react";

export default function HiringBanner() {
  return (
    <motion.section
      id="hiring-banner"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      aria-label="Hiring announcement: 100+ job vacancies for freshers"
      className="relative bg-paper overflow-hidden"
    >
      {/* Blueprint grid texture */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-14">
        <div className="rounded-2xl sm:rounded-3xl border border-blueline/25 bg-gradient-to-br from-ink via-ink-soft to-[#0d1d40] shadow-2xl shadow-ink/30 overflow-hidden">
          {/* Blueprint grid overlay inside card */}
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />

          {/* Decorative glow blobs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blueline/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-brass/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-10 md:p-12">
            {/* Left: icon / badge column */}
            <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
              {/* Animated icon circle */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blueline/15 border border-blueline/30 flex items-center justify-center shadow-xl">
                  <Users className="w-9 h-9 sm:w-11 sm:h-11 text-blueline-soft" />
                </div>
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border border-blueline/40 animate-ping opacity-30" />
              </div>

              {/* Count badge */}
              <div className="text-center md:text-left">
                <p
                  className="font-display font-extrabold text-5xl sm:text-6xl leading-none tracking-tight text-paper"
                  aria-label="100 plus job vacancies"
                >
                  100<span className="text-blueline-soft">+</span>
                </p>
                <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-paper/60 mt-1">
                  Job Vacancies
                </p>
              </div>
            </div>

            {/* Divider — vertical on md, horizontal on mobile */}
            <div className="w-full h-px md:w-px md:h-auto md:self-stretch bg-paper/10 shrink-0" />

            {/* Center: main message */}
            <div className="flex-1 text-center md:text-left">
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-4 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                We&apos;re Hiring — Open Now
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-paper leading-tight tracking-tight text-balance">
                Start Your Career With{" "}
                <span className="text-blueline-soft">Upstairs Techno</span>
              </h2>

              {/* FOR FRESHERS ONLY badge */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brass/15 border border-brass/30 px-4 py-2">
                <span className="text-lg">🎓</span>
                <span className="font-display font-bold text-sm sm:text-base text-brass tracking-wide">
                  FOR FRESHERS ONLY
                </span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-paper/75 leading-relaxed max-w-xl mx-auto md:mx-0">
                Build your career with real-world enterprise projects, 1:1
                senior mentorship, hands-on technology exposure, and a
                professional growth path — all in one place.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center md:items-start gap-3 shrink-0 w-full md:w-auto">
              <a
                href="/career#open-positions"
                aria-label="View 100+ job vacancies for freshers"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-blueline px-7 py-4 text-base font-bold text-paper shadow-lg shadow-blueline/30 transition-all duration-300 hover:bg-blueline-soft hover:shadow-xl hover:shadow-blueline/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                View Job Vacancies
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/career"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10 transition-colors whitespace-nowrap"
              >
                Explore Career Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
