"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BrainCircuit, ChartColumn, Code, ShieldCheck, Sparkles, Users, X } from "lucide-react";

const OPEN_ROLES = [
  { title: "Full Stack Developer", icon: Code },
  { title: "QA Tester", icon: ShieldCheck },
  { title: "AI/ML Engineer", icon: BrainCircuit },
  { title: "Data Analyst", icon: ChartColumn },
];

export default function HiringBanner() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("vacancyPopupShown");
    if (alreadyShown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setShowPopup(true);
            sessionStorage.setItem("vacancyPopupShown", "true");
          }, 800);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("career");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.section
        id="career"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        aria-label="Hiring announcement: 125+ job vacancies for freshers"
        className="relative bg-paper overflow-hidden scroll-mt-24 sm:scroll-mt-28"
      >
        {/* Anchor for backward compatibility */}
        <div id="hiring-banner" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
        {/* Blueprint grid texture */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-14">
          <div className="clay-card-dark rounded-2xl sm:rounded-3xl border border-blueline/30 overflow-hidden relative">
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
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blueline/20 border border-blueline/40 flex items-center justify-center shadow-xl animate-pulse-soft">
                    <Users className="w-9 h-9 sm:w-11 sm:h-11 text-blueline-soft" />
                  </div>
                </div>

                {/* Count badge */}
                <div className="text-center md:text-left">
                  <p
                    className="font-display font-black text-5xl sm:text-6xl leading-none tracking-tight text-paper"
                    aria-label="125 plus job vacancies"
                  >
                    125<span className="text-blueline-soft">+</span>
                  </p>
                  <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-paper/60 mt-1">
                    Job Vacancies Available
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px md:w-px md:h-auto md:self-stretch bg-paper/10 shrink-0" />

              {/* Center: main message */}
              <div className="flex-1 text-center md:text-left">
                {/* Label pill */}
                <div className="clay-pill clay-pill-accent mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  We&apos;re Hiring — Open Now
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-paper leading-tight tracking-tight text-balance">
                  Start Your Career With{" "}
                  <span className="text-blueline-soft">Upstairs Techno</span>
                </h2>

                {/* FOR FRESHERS ONLY badge */}
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-brass/20 border border-brass/35 px-4 py-1.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <span className="text-base">🎓</span>
                  <span className="font-display font-black text-xs sm:text-sm text-brass tracking-wider uppercase">
                    FOR FRESHERS ONLY
                  </span>
                </div>

                <p className="mt-4 text-base sm:text-lg text-paper/75 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Practical experience and career opportunities — all in one place.
                </p>

                {/* Open Job Roles */}
                <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
                  {OPEN_ROLES.map((role) => {
                    const Icon = role.icon;
                    return (
                      <span
                        key={role.title}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper/10 border border-paper/15 text-paper text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-sm"
                      >
                        <Icon className="w-3.5 h-3.5 text-blueline-soft" />
                        {role.title}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col items-center md:items-start shrink-0 w-full md:w-auto">
                <a
                  href="https://jobs.upstairstechno.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apply for Job - 125+ job vacancies for freshers"
                  className="clay-btn clay-btn-primary w-full md:w-auto px-8 py-4 text-base font-bold whitespace-nowrap"
                >
                  Apply for Job
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 125+ Vacancies Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              key="popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[80] bg-ink/40 backdrop-blur-[2px]"
              onClick={() => setShowPopup(false)}
              aria-hidden="true"
            />

            {/* Popup card */}
            <motion.div
              key="popup-card"
              role="dialog"
              aria-modal="true"
              aria-label="125+ job vacancies available"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 bottom-6 sm:inset-auto sm:bottom-8 sm:right-8 sm:left-auto z-[81] w-auto sm:w-[390px] max-w-full"
            >
              <div className="relative clay-card bg-white p-0 overflow-hidden shadow-2xl">
                {/* Thin top accent stripe */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blueline via-blueline-soft to-blueline rounded-t-2xl" />

                <div className="px-6 pt-7 pb-6">
                  {/* Close button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    aria-label="Close popup"
                    className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-ink/40 hover:text-ink hover:bg-ink/5 transition-all duration-150"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Live badge */}
                  <div className="inline-flex items-center gap-1.5 mb-3.5">
                    <span className="w-2 h-2 rounded-full bg-blueline animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blueline">
                      Hiring Open
                    </span>
                  </div>

                  {/* Headline */}
                  <p className="font-display font-extrabold text-ink leading-none tracking-tight">
                    <span className="text-4xl sm:text-5xl">125</span>
                    <span className="text-4xl sm:text-5xl text-blueline">+</span>
                    <span className="block text-base font-semibold text-slate mt-1.5 tracking-normal">
                      Job Vacancies Available
                    </span>
                  </p>

                  {/* Open Job Roles Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-4 mb-3.5">
                    {OPEN_ROLES.map((role) => {
                      const Icon = role.icon;
                      return (
                        <div
                          key={role.title}
                          className="flex items-center gap-2 p-2 rounded-xl bg-paper/80 border border-grid/70 text-ink shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        >
                          <div className="w-6 h-6 rounded-md bg-blueline/10 text-blueline flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-ink leading-snug">
                            {role.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="my-3.5 h-px bg-grid/60" />

                  {/* Supporting text */}
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">
                    Explore current job opportunities and apply for positions that match your skills.
                  </p>

                  {/* CTA */}
                  <a
                    href="https://jobs.upstairstechno.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowPopup(false)}
                    className="mt-4 clay-btn clay-btn-primary w-full py-3 text-sm font-bold text-white shadow-md"
                  >
                    Apply for Job
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

