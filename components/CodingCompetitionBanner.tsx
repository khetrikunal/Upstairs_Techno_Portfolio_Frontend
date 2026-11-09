"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Trophy,
  Code2,
  BrainCircuit,
  GraduationCap,
  Globe2,
  Building2,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function CodingCompetitionBanner() {
  return (
    <section
      id="coding-competition"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 my-14 sm:my-20 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Backward-compatibility anchors */}
      <div id="code-nova" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div id="competitions" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div id="olympiad" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4.5 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline uppercase font-bold mb-4">
          <Trophy className="w-4 h-4 text-blueline" />
          <span>Competitions &amp; Examinations</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
          Showcase Your Skills. <span className="text-blueline">Compete With Excellence.</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
          Explore premier competitions and examinations organised by Upstairs Techno to challenge intellect, celebrate talent, and build future-ready careers.
        </p>
      </div>

      {/* Two Competitions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* ── COMPETITION 1: CODENOVA ────────────────────────────────────── */}
        <div className="relative rounded-3xl border border-blueline/30 bg-ink text-paper overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-blueline/60 transition-all duration-300">
          {/* Blueprint subtle background */}
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blueline/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
            {/* Top pill bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blueline/20 border border-blueline/40 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-blueline-soft">
                <Code2 className="w-3.5 h-3.5" />
                Coding Competition
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/10 border border-paper/15 px-3 py-1 text-xs font-mono text-paper/70">
                Organised by Upstairs Techno
              </span>
            </div>

            {/* Official CodeNova Logo Display */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-paper/15 bg-gradient-to-b from-[#121c2e] to-[#0a101c] p-4 sm:p-6 mb-6 flex items-center justify-center shadow-inner group-hover:border-blueline/40 transition-colors">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square">
                <Image
                  src="/codenova-logo.png"
                  alt="CodeNova Coding Competition Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-paper tracking-tight">
                  CodeNova
                </h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40">
                  Championship
                </span>
              </div>
              <p className="text-sm sm:text-base text-paper/80 leading-relaxed">
                CodeNova is a premier coding competition organised by Upstairs Techno where participants can showcase their programming skills, logical thinking, and problem-solving abilities.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2.5 mb-8 font-mono text-xs sm:text-sm text-paper/85">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft shrink-0" />
                <span>Showcase programming and logical problem-solving skills</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft shrink-0" />
                <span>National leaderboard, ranking, and verified digital certificates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft shrink-0" />
                <span>Medals, official kits, and Claude AI subscriptions for top winners</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300">Paid Remote Internship opportunities for top performers</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-4 border-t border-paper/10 flex flex-wrap items-center gap-3.5">
              <Link
                href="/education/coding-competition"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-full bg-blueline px-5 py-3.5 text-sm sm:text-base font-bold text-paper shadow-lg shadow-blueline/30 hover:bg-blueline-soft hover:shadow-blueline/50 transition-all"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://codenova.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-5 py-3.5 text-sm sm:text-base font-bold text-paper hover:bg-paper/20 transition-colors"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
            </div>
          </div>
        </div>

        {/* ── COMPETITION 2: OLYMPIAD EXAMINATION ────────────────────────── */}
        <div className="relative rounded-3xl border border-brass/40 bg-ink text-paper overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-brass/70 transition-all duration-300">
          {/* Blueprint subtle background */}
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
            {/* Top pill bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                <GraduationCap className="w-3.5 h-3.5" />
                Olympiad Examination
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/10 border border-paper/15 px-3 py-1 text-xs font-mono text-paper/70">
                Organised by Upstairs Techno
              </span>
            </div>

            {/* Official Olympiad Logo Display */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-paper/15 bg-gradient-to-b from-[#1a1c22] to-[#0d0f14] p-4 sm:p-6 mb-6 flex items-center justify-center shadow-inner group-hover:border-amber-400/40 transition-colors">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square">
                <Image
                  src="/olympiad-logo.png"
                  alt="Upstairs Future Genius Olympiad (UFGO) Exam Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-paper tracking-tight">
                  Olympiad Examination
                </h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  UFGO
                </span>
              </div>
              <p className="text-sm sm:text-base text-paper/80 leading-relaxed">
                Upstairs Future Genius Olympiad is a prestigious examination designed to evaluate analytical reasoning, logical thinking, and academic brilliance across schools nationwide.
              </p>
            </div>

            {/* Eligibility Highlight Badge */}
            <div className="mb-4 rounded-xl border border-amber-400/35 bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent p-3.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300/80">
                  Eligibility Criteria
                </p>
                <p className="font-display text-sm sm:text-base font-extrabold text-paper">
                  Standard 1st to Standard 12th Students
                </p>
              </div>
            </div>

            {/* Examination Modes Breakdown: Online & Offline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl border border-blueline/35 bg-blueline/10 p-3.5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-blueline-soft mb-1">
                  <Globe2 className="w-4 h-4 text-blueline-soft" />
                  <span>Online Mode</span>
                </div>
                <p className="text-xs text-paper/75 leading-relaxed">
                  Participate online from the comfort of home or school lab with secure digital proctoring.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-3.5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-emerald-300 mb-1">
                  <Building2 className="w-4 h-4 text-emerald-300" />
                  <span>Offline Mode</span>
                </div>
                <p className="text-xs text-paper/75 leading-relaxed">
                  Participate through offline examination arrangements at partner schools and exam centers.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-4 border-t border-paper/10 flex flex-wrap items-center gap-3.5">
              <Link
                href="/education/olympiad"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-5 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-500/30 transition-all"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/education/olympiad#register"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-5 py-3.5 text-sm sm:text-base font-bold text-paper hover:bg-paper/20 transition-colors"
              >
                <span>Register / Enquire</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
