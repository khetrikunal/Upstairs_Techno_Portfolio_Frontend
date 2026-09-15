"use client";

import { ArrowRight, Trophy, Code2, BrainCircuit, Sparkles, CheckCircle2 } from "lucide-react";

export default function CodingCompetitionBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 my-10 sm:my-14">
      <div className="relative bg-ink text-paper py-16 sm:py-20 md:py-24 overflow-hidden rounded-3xl shadow-2xl border border-blueline/30">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-5 py-2 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-4 shadow-sm font-semibold">
            <Trophy className="w-4 h-4 text-blueline-soft" />
            <span>3 Rounds • Every Month • Exciting Rewards</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-paper tracking-tight">
            Monthly Coding Competition
          </h2>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-blueline-soft text-balance">
            Test Your Aptitude. Master Coding. Solve Advanced Challenges. Win Rewards.
          </p>
        </div>

        {/* 3 Rounds Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Round 1 */}
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-7 backdrop-blur-sm hover:border-blueline-soft/60 transition-all group">
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
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-7 backdrop-blur-sm hover:border-blueline-soft/60 transition-all group">
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
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-7 backdrop-blur-sm hover:border-blueline-soft/60 transition-all group">
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

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://codenova.upstairstechno.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-extrabold text-paper shadow-xl shadow-blueline/30 transition-all duration-300 hover:bg-blueline-soft hover:shadow-2xl hover:-translate-y-0.5"
          >
            <span>Register Now</span>
            <Sparkles className="w-5 h-5" />
          </a>

          <a
            href="/education/coding-competition"
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/10 px-7 py-4 text-base font-bold text-paper hover:bg-paper/20 transition-all"
          >
            <span>Apply Now / Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
}
