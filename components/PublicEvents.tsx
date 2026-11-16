"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, X } from "lucide-react";

const APPLY_URL = "https://research-distinction.upstairstechno.com/";

export default function PublicEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  return (
    <section
      id="public-events"
      className="relative overflow-hidden border-t border-grid bg-paper py-20 text-ink sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blueline/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brass/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <div className="clay-pill clay-pill-accent mb-4">
            <CalendarDays className="h-3.5 w-3.5" />
            Events &amp; Recognition
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl md:text-5xl">
            Public <span className="text-blueline">Events</span>
          </h2>
        </div>

        <article className="group mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#e6d2aa] bg-white shadow-xl shadow-ink/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8b5b18]/15 sm:rounded-3xl">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
            className="grid w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#c58b2b]/60 md:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative overflow-hidden bg-[#f7f2e8]">
              <Image
                src="/Research Distinction Awards New Poster.png"
                alt="Research Distinction Awards poster featuring a gold trophy and research themes"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 100vw, 560px"
                className="h-full max-h-[560px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] md:max-h-[620px]"
                priority
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#805313] shadow-sm sm:left-6 sm:top-6 sm:text-xs">
                Awards &amp; Recognition
              </span>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden bg-[#101a31] px-6 py-8 text-white sm:px-10 sm:py-12 lg:px-14">
              <div className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-40" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d59b35]/15 blur-3xl" />
              <div className="relative">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#efc77d] sm:text-xs">
                  Recognizing Research. Rewarding Excellence.
                </p>
                <h3 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Research <span className="text-[#e4b657]">Distinction</span> Awards
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/75 sm:mt-5 sm:text-base">
                  A platform celebrating original scholarship and outstanding contributions across scientific and Vedic research.
                </p>
                <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] p-4 sm:mt-9 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d59b35]/15 text-[#efc77d]">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 sm:text-xs">Competition Starts At</span>
                    <span className="mt-1 block text-base font-bold tracking-wide text-white sm:text-lg">22/11/2026</span>
                  </span>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#efc77d] transition-colors group-hover:text-white sm:mt-8">
                  Explore event details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </div>
          </button>
          <div className="flex flex-col gap-3 border-t border-[#eadfc9] bg-[#fbf8f1] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
            <p className="text-center text-xs font-medium text-[#765d39] sm:text-left sm:text-sm">Applications are now open for the upcoming awards.</p>
            <a
              href={APPLY_URL}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b77c20] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#8b5b18]/20 transition hover:bg-[#956116] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#b77c20]/30"
            >
              Apply Now <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>

        <p className="mt-8 text-center font-display text-xs font-black tracking-[0.2em] text-blueline sm:mt-10 sm:text-sm sm:tracking-[0.28em]">
          MORE UPDATES SOON
        </p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto p-3 sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
            <motion.div
              className="absolute inset-0 bg-[#080d19]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="research-awards-title"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative z-10 my-auto grid w-full max-w-4xl overflow-hidden rounded-2xl border border-[#e6d2aa] bg-[#fbf8f1] shadow-2xl sm:rounded-3xl md:grid-cols-[0.85fr_1.15fr]"
            >
              <button type="button" onClick={closeModal} aria-label="Close event details" className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#101a31]/85 text-white transition hover:bg-[#b77c20] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#b77c20]/50 sm:right-4 sm:top-4">
                <X className="h-5 w-5" />
              </button>
              <div className="relative max-h-[40vh] overflow-hidden bg-[#f7f2e8] md:max-h-none">
                <Image
                  src="/Research Distinction Awards New Poster.png"
                  alt="Research Distinction Awards event poster"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="relative flex flex-col justify-center overflow-hidden bg-[#101a31] px-6 py-7 text-white sm:px-9 sm:py-10">
                <div className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-35" />
                <div className="relative">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#efc77d] sm:text-xs">Research &amp; Recognition</p>
                  <h2 id="research-awards-title" className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl">Research <span className="text-[#e4b657]">Distinction</span> Awards</h2>
                  <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                    Research Distinction Awards recognizes thoughtful, original work and the people advancing knowledge. The program brings scientific research and Vedic research into one distinguished platform, celebrating curiosity, rigor, and meaningful discovery.
                  </p>
                  <div className="mt-6 rounded-xl border border-white/15 bg-white/[0.06] p-4 sm:mt-7 sm:p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 sm:text-xs">Competition Starts At</p>
                    <p className="mt-1.5 text-lg font-bold tracking-wide text-[#efc77d] sm:text-xl">22/11/2026</p>
                  </div>
                  <a href={APPLY_URL} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#c28a2c] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#d49a35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#efc77d]/40 sm:mt-7 sm:w-auto sm:min-w-52">
                    Apply Now <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
