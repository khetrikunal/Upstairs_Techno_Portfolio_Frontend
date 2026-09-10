"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { Job } from "@/lib/data/types";

const CONTACT_EMAIL = "contact@upstairstechno.com";

function ApplyButton({ job }: { job: Job }) {
  const subject = encodeURIComponent(`Job Application: ${job.title}`);
  const body = encodeURIComponent(
    `Hi Upstairs Techno,\n\nI would like to apply for the ${job.title} position (${job.department} · ${job.type}).\n\nMy details:\nName: \nLinkedIn: \nPortfolio/GitHub: \n\nCover note:\n`
  );
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
      aria-label={`Apply for ${job.title} via email`}
      className="inline-flex items-center gap-2 rounded-lg bg-ink text-paper px-6 py-3.5 text-base font-semibold transition-colors hover:bg-blueline min-h-[48px]"
    >
      Apply via Email
      <ArrowUpRight className="w-5 h-5" />
    </a>
  );
}

export default function Careers({ jobs }: { jobs: Job[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"All" | "Internships" | "BTDS" | "Full-time">("All");

  const filteredJobs = jobs.filter((job) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Internships") return job.type.toLowerCase().includes("internship");
    if (activeCategory === "BTDS") return job.slug.includes("btds") || job.department.includes("BTDS");
    if (activeCategory === "Full-time") return job.type.toLowerCase().includes("full-time");
    return true;
  });

  return (
    <section id="careers" className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-3 font-semibold">
            Open Positions & Programs
          </div>
          <h2 className="font-display text-section-heading font-bold text-balance text-paper">
            Build the systems that don&apos;t make headlines for breaking.
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-paper/80 leading-relaxed">
            Explore engineering roles, BTDS talent pipeline opportunities, and high-impact internships with direct mentorship.
          </p>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {(["All", "Internships", "BTDS", "Full-time"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenSlug(null);
                }}
                className={`rounded-full px-5 py-2.5 text-sm sm:text-base font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blueline text-paper shadow-lg shadow-blueline/30"
                    : "border border-paper/20 bg-paper/5 text-paper/70 hover:bg-paper/10 hover:text-white"
                }`}
              >
                {cat === "Internships" ? "🎓 Internships" : cat === "BTDS" ? "⚡ BTDS Trainee" : cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredJobs.map((job, i) => {
            const open = openSlug === job.slug;
            const isInternship = job.type.toLowerCase().includes("internship");
            const isBtds = job.slug.includes("btds") || job.department.includes("BTDS");

            return (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`rounded-2xl border bg-paper/[0.03] overflow-hidden transition-all duration-300 ${
                  open ? "border-blueline/50 shadow-xl shadow-blueline/5" : "border-paper/15 hover:border-paper/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenSlug(open ? null : job.slug)}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-6 text-left min-h-[72px] cursor-pointer group"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="font-display text-xl sm:text-2xl font-bold text-paper group-hover:text-blueline-soft transition-colors">
                        {job.title}
                      </span>
                      {isInternship && (
                        <span className="rounded-full bg-blueline/20 border border-blueline/40 text-blueline-soft px-2.5 py-0.5 text-xs font-mono font-bold">
                          Internship
                        </span>
                      )}
                      {isBtds && (
                        <span className="rounded-full bg-[#C98A3E]/20 border border-[#C98A3E]/40 text-[#EBB778] px-2.5 py-0.5 text-xs font-mono font-bold">
                          BTDS Program
                        </span>
                      )}
                    </div>
                    <span className="block text-sm sm:text-base text-paper/70 font-mono">
                      {job.department} · {job.location} · <span className="text-blueline-soft font-semibold">{job.type}</span>
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 text-paper/70 transition-transform duration-300 ${open ? "rotate-180 text-blueline-soft" : "group-hover:text-white"}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 border-t border-paper/10 pt-6">
                        <p className="text-base sm:text-lg text-paper/90 leading-relaxed font-normal">{job.summary}</p>

                        <div className="mt-8 grid sm:grid-cols-2 gap-8">
                          <div>
                            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-blueline-soft mb-3.5 font-bold">
                              You&apos;ll do
                            </p>
                            <ul className="space-y-3 text-base text-paper/80 leading-relaxed">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="flex gap-2.5">
                                  <span className="text-blueline-soft font-bold">—</span> {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-blueline-soft mb-3.5 font-bold">
                              You&apos;ll bring
                            </p>
                            <ul className="space-y-3 text-base text-paper/80 leading-relaxed">
                              {job.requirements.map((r) => (
                                <li key={r} className="flex gap-2.5">
                                  <span className="text-blueline-soft font-bold">—</span> {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {isInternship && (
                          <div className="mt-6 p-4 rounded-xl border border-blueline/30 bg-blueline/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <p className="text-sm sm:text-base text-paper/90">
                              Looking for the multi-step internship application form with resume upload?
                            </p>
                            <a
                              href="/career/services/internship/apply"
                              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-blueline-soft hover:underline shrink-0"
                            >
                              Direct Internship Form →
                            </a>
                          </div>
                        )}

                        <div className="mt-8 rounded-2xl bg-paper text-ink p-6 sm:p-8 shadow-xl">
                          <h4 className="font-display text-xl font-bold text-ink mb-4">
                            Apply for {job.title}
                          </h4>
                          <p className="text-sm sm:text-base text-slate mb-4 leading-relaxed">
                            Send us your details via email and we&apos;ll get back to you within one business day.
                          </p>
                          <ApplyButton job={job} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
