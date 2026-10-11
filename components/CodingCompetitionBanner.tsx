"use client";

import { Trophy, Code2, BrainCircuit, CheckCircle2, Calendar } from "lucide-react";

export default function CodingCompetitionBanner() {
  return (
    <section id="coding-competition" className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 my-10 sm:my-14 scroll-mt-24 sm:scroll-mt-28">
      {/* Anchor for Code Nova */}
      <div id="code-nova" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div className="relative clay-card-dark text-paper py-16 sm:py-20 md:py-24 overflow-hidden rounded-3xl shadow-2xl border border-blueline/35">
        {/* Responsive Background Image with Dark Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/coding.jpeg"
            alt="Coding Competition"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/80 to-ink/95" />
        </div>

        <div className="absolute inset-0 blueprint-grid-dark opacity-50 z-0" />

        {/* Decorative gradient glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blueline/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blueline/15 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 px-4 sm:px-8 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="clay-pill clay-pill-accent px-5 py-2 text-xs sm:text-sm mb-4 font-bold">
            <Trophy className="w-4 h-4 text-blueline-soft" />
            <span>3 Rounds • Every Month • Exciting Rewards</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-paper tracking-tight">
            CodeNova
          </h2>

          <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-paper/85 italic">
            Competitive Coding &amp; Career Development Program
          </p>

          {/* Prominent Starting Date Announcement */}
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-brass/50 bg-gradient-to-r from-brass/25 via-brass/15 to-brass/25 px-5 sm:px-7 py-2 sm:py-2.5 shadow-lg shadow-brass/20 backdrop-blur-md">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-brass animate-pulse shrink-0" />
            <span className="font-display text-base sm:text-lg md:text-xl font-black tracking-tight text-paper">
              Starting 1st November 2026
            </span>
          </div>

          <p className="mt-6 text-base sm:text-lg md:text-xl font-bold text-blueline-soft text-balance">
            Test Your Aptitude. Master Coding. Solve Advanced Challenges. Win Rewards.
          </p>
        </div>

        {/* 3 Rounds Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Round 1 */}
          <div className="rounded-2xl border border-blueline/20 bg-ink/70 p-7 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:border-blueline-soft/60 hover:-translate-y-1.5 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blueline-soft bg-blueline/15 px-3.5 py-1 rounded-full">
                Round 1
              </span>
              <BrainCircuit className="w-7 h-7 text-blueline-soft group-hover:scale-110 transition-transform" />
            </div>

            <h3 className="font-display text-2xl font-bold text-paper mb-2.5">Aptitude Test</h3>
            <p className="text-sm sm:text-base text-paper/80 leading-relaxed mb-5">
              Evaluates logical reasoning, quantitative aptitude, analytical thinking, and speed problem solving.
            </p>

            <ul className="space-y-2 font-mono text-xs sm:text-sm text-paper/70 border-t border-paper/10 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft" /> Logical & Quantitative
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft" /> Timed Multiple Choice
              </li>
            </ul>
          </div>

          {/* Round 2 */}
          <div className="rounded-2xl border border-blueline/20 bg-ink/70 p-7 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:border-blueline-soft/60 hover:-translate-y-1.5 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blueline-soft bg-blueline/15 px-3.5 py-1 rounded-full">
                Round 2
              </span>
              <Code2 className="w-7 h-7 text-blueline-soft group-hover:scale-110 transition-transform" />
            </div>

            <h3 className="font-display text-2xl font-bold text-paper mb-2.5">Basic Coding</h3>
            <p className="text-sm sm:text-base text-paper/80 leading-relaxed mb-5">
              Tests fundamental programming syntax, conditions, loops, functions, and basic data structures.
            </p>

            <ul className="space-y-2 font-mono text-xs sm:text-sm text-paper/70 border-t border-paper/10 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft" /> Loops, Functions & Arrays
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft" /> Timed Coding Challenges
              </li>
            </ul>
          </div>

          {/* Round 3 */}
          <div className="rounded-2xl border border-blueline/20 bg-ink/70 p-7 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:border-blueline-soft/60 hover:-translate-y-1.5 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blueline-soft bg-blueline/15 px-3.5 py-1 rounded-full">
                Round 3
              </span>
              <Trophy className="w-7 h-7 text-blueline-soft group-hover:scale-110 transition-transform" />
            </div>

            <h3 className="font-display text-2xl font-bold text-paper mb-2.5">Advanced Coding</h3>
            <p className="text-sm sm:text-base text-paper/80 leading-relaxed mb-5">
              Solves complex data structure challenges, algorithmic optimization, and high-performance problems.
            </p>

            <ul className="space-y-2 font-mono text-xs sm:text-sm text-paper/70 border-t border-paper/10 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft" /> Graphs, Trees, Dynamic Prog
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blueline-soft" /> Grand Rewards & PPOs
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
);
}
