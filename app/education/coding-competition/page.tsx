"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Trophy,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BarChart3,
  User,
  Clock,
  Star,
  ChevronDown,
  Sparkles,
  Medal,
  Gift,
  Shirt,
  FileText,
  BrainCircuit,
  Code2,
  Lock,
  Briefcase,
  Award,
  Scale,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const REWARDS = [
  {
    place: 1,
    label: "1st Place",
    emoji: "🥇",
    title: "Champion",
    medal: "Gold Medal",
    medalColor: "#F59E0B",
    glowColor: "rgba(245,158,11,0.35)",
    borderColor: "rgba(245,158,11,0.6)",
    bgGradient: "from-[#F59E0B]/12 via-[#F59E0B]/5 to-transparent",
    prizes: ["Gold Medal", "Winner Certificate", "Claude One Month Subscription", "Official Code Nova T-Shirt"],
    prizeIcons: ["🥇", "📜", "🤖", "👕"],
  },
  {
    place: 2,
    label: "2nd Place",
    emoji: "🥈",
    title: "Runner-Up",
    medal: "Silver Medal",
    medalColor: "#94A3B8",
    glowColor: "rgba(148,163,184,0.3)",
    borderColor: "rgba(148,163,184,0.5)",
    bgGradient: "from-[#94A3B8]/10 via-[#94A3B8]/4 to-transparent",
    prizes: ["Silver Medal", "Winner Certificate", "Claude One Month Subscription", "Official Code Nova T-Shirt"],
    prizeIcons: ["🥈", "📜", "🤖", "👕"],
  },
  {
    place: 3,
    label: "3rd Place",
    emoji: "🥉",
    title: "Second Runner-Up",
    medal: "Bronze Medal",
    medalColor: "#CD7F32",
    glowColor: "rgba(205,127,50,0.3)",
    borderColor: "rgba(205,127,50,0.5)",
    bgGradient: "from-[#CD7F32]/10 via-[#CD7F32]/4 to-transparent",
    prizes: ["Bronze Medal", "Winner Certificate", "Claude One Month Subscription", "Official Code Nova T-Shirt"],
    prizeIcons: ["🥉", "📜", "🤖", "👕"],
  },
];

const ROUNDS = [
  {
    step: 1,
    label: "Registration",
    icon: FileText,
    color: "#2557FF",
    title: "Sign Up & Register",
    desc: "Complete your registration and secure your seat for the next monthly Code Nova event.",
  },
  {
    step: 2,
    label: "Round 1",
    icon: BrainCircuit,
    color: "#7C3AED",
    title: "Aptitude & Reasoning",
    desc: "Solve aptitude and logical reasoning questions testing your analytical speed and critical thinking.",
  },
  {
    step: 3,
    label: "Round 2",
    icon: Code2,
    color: "#059669",
    title: "Advanced Coding Challenge",
    desc: "Qualified participants tackle advanced algorithmic and data structure problems under timed conditions.",
  },
  {
    step: 4,
    label: "🏆 Final",
    icon: Trophy,
    color: "#F59E0B",
    title: "Championship Final",
    desc: "Top performers compete in the grand final. Top 3 are crowned Code Nova Champions.",
  },
];

const FEATURES = [
  {
    icon: Lock,
    title: "Secure Online Examination",
    desc: "AI-assisted anti-cheat monitoring ensures a fair playing field for all participants.",
    color: "#2557FF",
  },
  {
    icon: BarChart3,
    title: "Live Leaderboard",
    desc: "Track your ranking in real time and see where you stand against competitors across India.",
    color: "#7C3AED",
  },
  {
    icon: Trophy,
    title: "Certificates & Rewards",
    desc: "Earn official certificates, medals, and exciting rewards for top performance.",
    color: "#F59E0B",
  },
  {
    icon: User,
    title: "Participant Dashboard",
    desc: "Track your results, rankings, and competition history in your personal dashboard.",
    color: "#059669",
  },
];

const BENEFITS = [
  "Compete with talented students across India",
  "Structured 3-round skill-based competition",
  "Aptitude & logical reasoning challenge in Round 1",
  "Advanced coding challenge for Round 2 qualifiers",
  "Live rankings and leaderboard",
  "Digital participation certificate",
  "Medals & winner certificates for Top 3",
  "Claude One Month Subscription for Top 3",
  "Official Code Nova T-Shirt for Top 3 & Round 2 qualifiers",
  "Exclusive Code Nova Kit (notebook, pen, stickers, badge, lanyard, collectibles) after 3 consecutive registrations",
  "Paid Remote Internship Opportunity for Top 10 across 3 consecutive months",
];

const RULES_FAQ = [
  {
    q: "Who can participate?",
    a: "Students from school, college, recent graduates, and working professionals are all eligible to participate.",
  },
  {
    q: "Is this an individual competition?",
    a: "Yes. Code Nova is an individual competition. One registration per participant per monthly event.",
  },
  {
    q: "How is the examination conducted?",
    a: "The online examination uses AI-assisted monitoring to ensure fair participation. All participants must follow the exam rules strictly.",
  },
  {
    q: "What happens if I qualify Round 1?",
    a: "Participants who clear the Round 1 threshold advance to the Round 2 advanced coding challenge and receive an Official Code Nova T-Shirt.",
  },
  {
    q: "How do I become eligible for the Paid Remote Internship?",
    a: "Participants who secure a position in the Top 10 for three consecutive months will be eligible for a paid remote internship opportunity with our organization, rewarding consistent performance and dedication.",
  },
  {
    q: "What is the Exclusive Code Nova Kit?",
    a: "Participants who register for 3 consecutive monthly competitions unlock the exclusive Code Nova Kit (premium notebook, pen, stickers, badge, lanyard, and collectibles).",
  },
  {
    q: "Is the competition registration refundable?",
    a: "Competition registrations are non-refundable once confirmed.",
  },
  {
    q: "When is the competition held?",
    a: "Code Nova is conducted every month. Competition date and schedule for each event will be announced upon registration.",
  },
  {
    q: "What is the final decision authority?",
    a: "The organizers' decision regarding scores, qualifications, and awards is final and binding.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function FadeInUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline uppercase font-bold mb-4">
      {children}
    </div>
  );
}

function RewardPreviewStrip() {
  return (
    <section className="relative z-10 mx-4 sm:mx-6 lg:mx-auto lg:max-w-5xl -mt-10 sm:-mt-14">
      <div className="rounded-2xl sm:rounded-3xl border border-[#F59E0B]/50 bg-ink shadow-2xl shadow-[#F59E0B]/10 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F59E0B]/20 via-[#F59E0B]/10 to-transparent px-5 sm:px-8 py-4 border-b border-[#F59E0B]/20 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F59E0B]">
              Win Big with Code Nova
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-3 py-1 text-xs font-mono font-bold text-emerald-400">
            💼 Paid Remote Internship Opportunity
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper/10">
          {REWARDS.map((r, i) => (
            <div key={r.place} className={`px-5 sm:px-6 py-5 flex items-center gap-4 ${i === 0 ? "bg-[#F59E0B]/5" : ""}`}>
              <span className="text-3xl sm:text-4xl shrink-0">{r.emoji}</span>
              <div>
                <p className="font-mono text-xs text-paper/50 uppercase tracking-wider mb-0.5">{r.label}</p>
                <p className="font-display text-sm sm:text-base font-bold text-paper leading-snug">
                  Medal · Certificate · Claude Sub · T-Shirt
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 sm:px-8 py-3.5 border-t border-paper/10 flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-paper/60 font-mono">
            Plus: Round 2 T-Shirt · 🎁 Code Nova Kit · 💼 Paid Remote Internship
          </p>
          <a
            href="#rewards"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F59E0B] hover:underline"
          >
            View Full Rewards <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function RewardCard({ reward, index }: { reward: (typeof REWARDS)[0]; index: number }) {
  const isFirst = reward.place === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: isFirst ? -8 : -4, transition: { duration: 0.25 } }}
      className={`relative flex flex-col rounded-2xl sm:rounded-3xl border overflow-hidden cursor-default ${
        isFirst ? "sm:scale-[1.04] sm:z-10" : ""
      }`}
      style={{
        borderColor: reward.borderColor,
        boxShadow: isFirst ? `0 0 60px ${reward.glowColor}, 0 20px 40px rgba(0,0,0,0.4)` : `0 0 30px ${reward.glowColor}, 0 10px 20px rgba(0,0,0,0.3)`,
        background: "linear-gradient(135deg, #0e1524 0%, #161f33 100%)",
      }}
    >
      {/* Champion badge */}
      {isFirst && (
        <div
          className="absolute -top-px left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-b-xl font-mono text-xs font-bold uppercase tracking-wider text-ink"
          style={{ backgroundColor: reward.medalColor }}
        >
          🏆 Grand Champion
        </div>
      )}

      {/* Top gradient area */}
      <div
        className={`relative pt-${isFirst ? "12" : "8"} pb-8 px-6 sm:px-8 flex flex-col items-center text-center bg-gradient-to-b ${reward.bgGradient}`}
      >
        {/* Blueprint grid subtle */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

        {/* Medal emoji */}
        <motion.div
          animate={isFirst ? { scale: [1, 1.06, 1], rotate: [0, 2, -2, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`relative z-10 ${isFirst ? "text-7xl sm:text-8xl mb-2" : "text-6xl sm:text-7xl mb-2"}`}
        >
          {reward.emoji}
        </motion.div>

        {/* Place number */}
        <div
          className="relative z-10 font-display font-black leading-none mb-2"
          style={{
            fontSize: isFirst ? "clamp(3rem,7vw,5rem)" : "clamp(2.5rem,5vw,3.5rem)",
            color: reward.medalColor,
            textShadow: `0 0 30px ${reward.glowColor}`,
          }}
        >
          {reward.place === 1 ? "1st" : reward.place === 2 ? "2nd" : "3rd"}
        </div>

        <p className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest text-paper/50 mb-1">{reward.title}</p>
        <p
          className="relative z-10 font-display text-xl sm:text-2xl font-bold"
          style={{ color: reward.medalColor }}
        >
          {reward.medal}
        </p>
      </div>

      {/* Prize list */}
      <div className="flex-1 px-6 sm:px-8 pb-7 pt-2 border-t border-paper/10 space-y-3">
        {reward.prizes.map((prize, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xl shrink-0">{reward.prizeIcons[i]}</span>
            <span className="text-base sm:text-lg font-semibold text-paper">{prize}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CompetitionTimeline() {
  return (
    <div className="relative">
      {/* Connector line (desktop) */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blueline/30 via-blueline to-[#F59E0B]/80 mx-32" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ROUNDS.map((round, i) => {
          const Icon = round.icon;
          return (
            <FadeInUp key={round.step} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                {/* Mobile connector */}
                {i < ROUNDS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-1/2 top-24 w-0.5 h-6 -translate-x-1/2"
                    style={{ backgroundColor: round.color, opacity: 0.4 }}
                  />
                )}

                {/* Step circle */}
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 shadow-xl z-10"
                  style={{
                    backgroundColor: `${round.color}18`,
                    border: `2px solid ${round.color}60`,
                    boxShadow: `0 0 30px ${round.color}30`,
                  }}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9" style={{ color: round.color }} />

                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-black text-paper shadow"
                    style={{ backgroundColor: round.color }}
                  >
                    {round.step}
                  </div>
                </div>

                <span
                  className="font-mono text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: round.color }}
                >
                  {round.label}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-paper mb-2">{round.title}</h3>
                <p className="text-sm text-paper/65 leading-relaxed">{round.desc}</p>
              </div>
            </FadeInUp>
          );
        })}
      </div>
    </div>
  );
}

function PaidInternshipReward() {
  return (
    <FadeInUp className="mb-14 sm:mb-16">
      <div className="relative rounded-3xl border-2 border-emerald-400/60 overflow-hidden bg-gradient-to-br from-[#0a1e24] via-ink to-[#071d18] p-7 sm:p-10 md:p-12 shadow-[0_0_60px_rgba(16,185,129,0.20),0_20px_40px_rgba(0,0,0,0.5)]">
        {/* Ambient glow & blueprint grid */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top featured badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-emerald-300 uppercase font-bold shadow-sm">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Career Opportunity · Special Recognition</span>
          </div>

          <span className="font-mono text-xs text-emerald-400/90 font-semibold bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
            ⭐ Extended Excellence
          </span>
        </div>

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3.5 mb-3">
              <span className="text-3xl sm:text-4xl">💼</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-paper tracking-tight">
                Paid Remote Internship Opportunity
              </h3>
            </div>

            <p className="text-base sm:text-lg text-paper/85 leading-relaxed mt-4">
              Participants who secure a position in the <strong className="text-emerald-400 font-bold">Top 10 for three consecutive months</strong> will be eligible for a paid remote internship opportunity with our organization.
            </p>

            <p className="text-sm sm:text-base text-paper/65 leading-relaxed mt-2.5">
              This recognition is designed to reward consistent performance, dedication, and excellence over an extended period.
            </p>

            {/* Clear Criteria Banner */}
            <div className="mt-6 rounded-2xl border-2 border-emerald-400/40 bg-emerald-500/10 p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-inner">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 text-emerald-300">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300/80 mb-0.5">
                  Eligibility Criteria
                </p>
                <p className="font-display text-base sm:text-lg md:text-xl font-extrabold text-paper">
                  Top 10 for 3 Consecutive Months → <span className="text-emerald-400">Eligible for Paid Remote Internship</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              {
                icon: "💼",
                title: "Paid Remote Role",
                desc: "Work on live enterprise platforms from anywhere with competitive stipend.",
              },
              {
                icon: "🏢",
                title: "Real Client Projects",
                desc: "Hands-on engineering across cloud, AI, and modern web architectures.",
              },
              {
                icon: "🌟",
                title: "1-on-1 Mentorship",
                desc: "Direct guidance and code reviews from senior enterprise engineers.",
              },
              {
                icon: "📜",
                title: "Letter of Recommendation",
                desc: "Official experience certificate & performance recommendation for your career.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-emerald-500/25 bg-emerald-950/30 p-4.5 backdrop-blur-sm hover:border-emerald-400/50 transition-colors"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h4 className="font-display text-sm sm:text-base font-bold text-paper mb-1">{f.title}</h4>
                <p className="text-xs text-paper/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}

function LoyaltyReward() {
  const steps = ["Month 1", "Month 2", "Month 3", "🎁 Kit Unlocked"];
  const colors = ["#2557FF", "#7C3AED", "#059669", "#F59E0B"];

  return (
    <FadeInUp>
      <div className="relative rounded-2xl sm:rounded-3xl border border-brass/50 overflow-hidden bg-gradient-to-br from-ink to-[#1a1200] p-7 sm:p-10 shadow-2xl shadow-brass/10">
        <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brass/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-brass/20 border border-brass/30 flex items-center justify-center text-3xl shrink-0">
              🎁
            </div>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brass mb-1 block">
                Loyalty Reward · Exclusive Code Nova Kit
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-paper">
                🎁 Exclusive Code Nova Kit
              </h3>
              <p className="mt-2 text-base sm:text-lg text-paper/85 max-w-2xl leading-relaxed">
                Participants who register for 3 consecutive monthly competitions unlock the exclusive Code Nova Kit, including a premium notebook, pen, stickers, badge, lanyard, and collectibles.
              </p>
            </div>
          </div>

          {/* Progress visual */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <div
                  className="flex items-center justify-center rounded-xl px-3.5 py-2 font-mono text-sm font-bold"
                  style={{
                    backgroundColor: `${colors[i]}20`,
                    border: `1.5px solid ${colors[i]}50`,
                    color: colors[i],
                  }}
                >
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-paper/30 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Kit contents */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-brass mb-4">
              What&apos;s Inside the Exclusive Code Nova Kit
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "📓 Premium Notebook",
                "🖊️ Premium Pen",
                "🎨 Stickers Pack",
                "🏅 Exclusive Badge",
                "🪪 Code Nova Lanyard",
                "🎁 Collectibles Pack",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-brass/20 bg-brass/5 px-3.5 py-3">
                  <span className="text-lg">{item.split(" ")[0]}</span>
                  <span className="text-sm font-semibold text-paper/85">{item.split(" ").slice(1).join(" ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TERMS & CONDITIONS SECTION
// ─────────────────────────────────────────────────────────────────────────────

const TERMS_SECTIONS = [
  {
    number: "01",
    icon: "📖",
    title: "About Code Nova",
    content: (
      <>
        <p className="text-slate leading-relaxed mb-4">
          Code Nova is a monthly online competition platform on which students across India take part in skill-based challenges spanning:
        </p>
        <ul className="space-y-2 mb-4">
          {["Aptitude", "Coding", "Mathematics", "Logical Reasoning"].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-slate">
              <span className="w-1.5 h-1.5 rounded-full bg-blueline shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate leading-relaxed text-sm bg-blueline/5 border border-blueline/20 rounded-xl px-4 py-3">
          <strong className="text-ink">Important:</strong> By registering for any Code Nova event, participants agree to be bound by these Terms &amp; Conditions and Competition Rules.
        </p>
      </>
    ),
  },
  {
    number: "02",
    icon: "✅",
    title: "Eligibility & Registration",
    content: (
      <ul className="space-y-3">
        {[
          "Open to students across India who complete the registration process for a given monthly event.",
          "Only one registration is permitted per participant, per event.",
          "Duplicate or multiple entries by the same individual for a single event are not allowed.",
          "Registration grants access to all competition rounds, subject to qualification in the preceding round.",
          "Participants are responsible for providing accurate personal details during registration.",
          "Code Nova is not liable for issues arising from incorrect information supplied by the participant.",
        ].map((rule, i) => (
          <li key={i} className="flex items-start gap-3 text-slate leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-blueline shrink-0 mt-0.5" />
            {rule}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "03",
    icon: "🏁",
    title: "Competition Structure",
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {[
            { step: "Stage 1", label: "Registration", desc: "Sign up to enter the competition.", color: "#2557FF" },
            { step: "Round 1", label: "Aptitude & Logical Reasoning Test", desc: "Analytical and reasoning skills assessment.", color: "#7C3AED" },
            { step: "Round 2", label: "Advanced Coding Challenge", desc: "Algorithmic and data structure problems.", color: "#059669" },
            { step: "🏆 Final", label: "Championship Final Showdown", desc: "Top performers compete for the grand title.", color: "#F59E0B" },
          ].map((stage) => (
            <div
              key={stage.step}
              className="rounded-xl border p-4"
              style={{ borderColor: `${stage.color}40`, background: `${stage.color}08` }}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-wider mb-1" style={{ color: stage.color }}>{stage.step}</p>
              <p className="font-display text-sm font-bold text-ink mb-1">{stage.label}</p>
              <p className="text-xs text-slate leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate bg-paper/60 border border-grid rounded-xl px-4 py-3 leading-relaxed">
          Advancement to each subsequent round is subject to qualification in the previous round, as determined by the organizers.
        </p>
      </>
    ),
  },
  {
    number: "04",
    icon: "📋",
    title: "Competition Rules",
    content: (
      <>
        <div className="space-y-3 mb-5">
          {[
            "Individual participation only — no team participation permitted.",
            "One registration per participant per event.",
            "No proxy participation of any kind.",
            "All examinations are timed and conducted online under AI-based monitoring for security and integrity purposes.",
            "Participants must complete each round within the allotted time window.",
            "Late submissions may not be considered.",
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-3 text-slate leading-relaxed text-sm">
              <ShieldCheck className="w-4 h-4 text-blueline shrink-0 mt-0.5" />
              {rule}
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-red-300/40 bg-red-50/50 p-4 mb-4">
          <p className="font-semibold text-red-700 text-sm mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Unfair Practices — Strictly Prohibited
          </p>
          <ul className="space-y-1.5">
            {["Impersonation", "Unauthorized assistance", "Plagiarism", "Collusion", "Attempts to bypass the anti-cheat system"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-red-800/80">
                <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-blueline/30 bg-blueline/5 px-4 py-3 space-y-2">
          <p className="text-sm text-slate leading-relaxed">
            <strong className="text-ink">Final Authority:</strong> The organizers&apos; decision on all competition matters, including qualification, scoring, disputes, and disqualification, is final and binding.
          </p>
          <p className="text-sm text-slate leading-relaxed">
            Code Nova reserves the right to disqualify participants who violate the competition rules.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "05",
    icon: "🛡️",
    title: "Fair Play, Monitoring & Technical Requirements",
    content: (
      <ul className="space-y-3">
        {[
          "Examinations use AI-assisted anti-cheat monitoring to help ensure a fair and secure testing environment.",
          "Participants are responsible for ensuring a stable internet connection.",
          "Participants must use a compatible device for the duration of each round.",
          "Code Nova is not responsible for connectivity issues, power outages, or device problems on the participant's side.",
          "Participants are encouraged to report technical issues promptly to the organizers.",
        ].map((rule, i) => (
          <li key={i} className="flex items-start gap-3 text-slate leading-relaxed text-sm">
            <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            {rule}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "06",
    icon: "🎁",
    title: "Participant Benefits",
    content: (
      <>
        <p className="text-sm font-semibold text-ink mb-3">Every registered participant receives:</p>
        <ul className="space-y-2 mb-6">
          {[
            "Official Upstairs Techno T-shirt",
            "Digital Certificate of Participation",
            "Personal dashboard with results and rankings",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-slate text-sm">
              <CheckCircle2 className="w-4 h-4 text-blueline shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-brass/40 bg-gradient-to-br from-[#1a1200]/60 to-[#0e1524]/40 p-5 mb-4">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brass mb-2">🎁 Code Nova Loyalty Reward</p>
          <p className="text-sm text-paper/80 leading-relaxed mb-3">
            Participants who register for 3 consecutive monthly competitions unlock the exclusive <strong className="text-paper">Code Nova Kit</strong>, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Premium notebook", "Pen", "Stickers", "Badge", "Lanyard", "Collectibles"].map((item) => (
              <span key={item} className="text-xs text-paper/70 bg-brass/10 border border-brass/20 rounded-lg px-2.5 py-1.5 text-center">{item}</span>
            ))}
          </div>
        </div>

        {/* Highlighted Internship Card */}
        <div className="relative rounded-2xl border-2 border-emerald-400/60 bg-gradient-to-br from-[#0a1e24] via-[#0e1524] to-[#071d18] p-5 sm:p-6 overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-300">💼 Paid Remote Internship Opportunity</p>
            </div>
            <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 mb-3 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="font-display text-sm sm:text-base font-extrabold text-paper">
                Top 10 for 3 Consecutive Months → <span className="text-emerald-400">Paid Remote Internship</span>
              </p>
            </div>
            <p className="text-xs text-paper/70 leading-relaxed">
              Participants who secure a position in the Top 10 for three consecutive months will be eligible for a paid remote internship opportunity with our organization. This recognition is designed to reward consistent performance, dedication, and excellence over an extended period.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "07",
    icon: "🏆",
    title: "Rewards & Recognition",
    content: (
      <>
        <div className="space-y-3 mb-5">
          {[
            { place: "1st Place", emoji: "🥇", color: "#F59E0B", items: ["Gold Medal", "Winner Certificate", "Claude One-Month Subscription", "T-shirt"] },
            { place: "2nd Place", emoji: "🥈", color: "#94A3B8", items: ["Silver Medal", "Winner Certificate", "Claude One-Month Subscription", "T-shirt"] },
            { place: "3rd Place", emoji: "🥉", color: "#CD7F32", items: ["Bronze Medal", "Winner Certificate", "Claude One-Month Subscription", "T-shirt"] },
          ].map((r) => (
            <div
              key={r.place}
              className="flex items-start gap-4 rounded-xl border p-4"
              style={{ borderColor: `${r.color}50`, background: `${r.color}08` }}
            >
              <span className="text-3xl shrink-0">{r.emoji}</span>
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-ink mb-2" style={{ color: r.color }}>{r.place}</p>
                <div className="flex flex-wrap gap-2">
                  {r.items.map((item) => (
                    <span key={item} className="text-xs text-slate bg-white border border-grid px-2.5 py-1 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-grid bg-paper/60 p-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">🎽</span>
            <div>
              <p className="font-display text-sm font-bold text-ink mb-1">All Round 2 Qualifiers</p>
              <div className="flex flex-wrap gap-2">
                {["Official T-shirt", "Digital Participation Certificate"].map((item) => (
                  <span key={item} className="text-xs text-slate bg-white border border-grid px-2.5 py-1 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate/80 border-t border-grid pt-3 leading-relaxed">
            Only participants who qualify for Round 2 are eligible to receive the official T-shirt and digital participation certificate.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "08",
    icon: "💳",
    title: "Fees, Payment & Refunds",
    content: (
      <ul className="space-y-3">
        {[
          "Any applicable registration or payment requirements must be completed according to the competition registration process.",
          "Fees, if applicable, are generally non-refundable once registration is confirmed, except where required by law or at the organizers' discretion.",
          "Participants should confirm event dates and requirements before completing registration.",
        ].map((rule, i) => (
          <li key={i} className="flex items-start gap-3 text-slate leading-relaxed text-sm">
            <CheckCircle2 className="w-4 h-4 text-blueline shrink-0 mt-0.5" />
            {rule}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "09",
    icon: "🤝",
    title: "Code of Conduct",
    content: (
      <ul className="space-y-3">
        {[
          "Participants must behave respectfully towards organizers, fellow participants, and Code Nova staff.",
          "Harassment, abuse, or disruptive behavior may result in immediate disqualification.",
          "Serious violations may result in a ban from future Code Nova events.",
          "Participants must not share, publish, or distribute competition questions or materials before, during, or after the event unless officially permitted by the organizers.",
        ].map((rule, i) => (
          <li key={i} className="flex items-start gap-3 text-slate leading-relaxed text-sm">
            <ShieldCheck className="w-4 h-4 text-blueline shrink-0 mt-0.5" />
            {rule}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "10",
    icon: "⚙️",
    title: "Amendments & Organizer Rights",
    content: (
      <ul className="space-y-3">
        {[
          "Code Nova reserves the right to modify these Terms & Conditions.",
          "Code Nova may modify the competition format, schedule, or rewards.",
          "Reasonable notice will be provided to participants where possible.",
          "Code Nova reserves the right to cancel, postpone, or reschedule an event due to unforeseen circumstances.",
          "In all matters relating to interpretation of the rules, scoring, and disputes, the decision of the organizers is final.",
        ].map((rule, i) => (
          <li key={i} className="flex items-start gap-3 text-slate leading-relaxed text-sm">
            <Scale className="w-4 h-4 text-blueline shrink-0 mt-0.5" />
            {rule}
          </li>
        ))}
      </ul>
    ),
  },
];

function TermsAccordionItem({
  section,
  index,
  isOpen,
  onToggle,
}: {
  section: (typeof TERMS_SECTIONS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen ? "border-blueline/40 shadow-md shadow-blueline/5" : "border-grid bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 sm:px-7 py-4.5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-black"
          style={{
            background: isOpen ? "linear-gradient(135deg,#2557FF,#5c7dff)" : "#f2f4f1",
            color: isOpen ? "#fff" : "#2557FF",
          }}
        >
          {section.number}
        </div>
        <div className="flex-1 flex items-center gap-2.5">
          <span className="text-lg sm:text-xl leading-none">{section.icon}</span>
          <span className="font-display text-base sm:text-lg font-bold text-ink">{section.title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-slate transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blueline" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-7 pb-6 pt-1 border-t border-grid">
              {section.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TermsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="terms"
      className="relative py-20 sm:py-28 bg-paper overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blueline/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blueline/40 bg-blueline/8 px-5 py-2 text-xs sm:text-sm font-mono tracking-widest text-blueline uppercase font-bold mb-5">
            <Scale className="w-4 h-4" />
            Legal & Rules
          </div>
          <h2
            className="font-display font-extrabold text-ink text-balance"
            style={{ fontSize: "clamp(2rem,5vw,3rem)", letterSpacing: "-0.025em" }}
          >
            Terms &amp; Conditions &amp;{" "}
            <span className="text-blueline">Competition Rules</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
            By registering for any Code Nova event, participants agree to be bound by these Terms &amp; Conditions and Competition Rules.
          </p>
        </FadeInUp>

        {/* Accordion Sections */}
        <FadeInUp>
          <div className="space-y-3">
            {TERMS_SECTIONS.map((section, i) => (
              <TermsAccordionItem
                key={section.number}
                section={section}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeInUp>

        {/* Expand all hint */}
        <FadeInUp className="mt-8 text-center">
          <p className="text-xs text-slate/70 font-mono">
            Click any section to expand &amp; read the full terms
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/education/coding-competition/register"
              className="inline-flex items-center gap-2 rounded-full bg-blueline px-6 py-3 text-sm font-bold text-paper hover:bg-blueline-soft transition-colors shadow-lg shadow-blueline/20"
            >
              <Trophy className="w-4 h-4" />
              Register for Code Nova
            </a>
            <a
              href="#rewards"
              className="inline-flex items-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-blueline hover:text-blueline transition-colors"
            >
              View Rewards
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2.5">
      {RULES_FAQ.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
            openIndex === i ? "border-blueline/50 bg-blueline/5" : "border-grid bg-white"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4.5 text-left cursor-pointer"
            aria-expanded={openIndex === i}
          >
            <span className="font-display text-base sm:text-lg font-bold text-ink">{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 text-slate transition-transform duration-300 ${
                openIndex === i ? "rotate-180 text-blueline" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-5 sm:px-7 pb-5 text-slate text-base leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-ink/95 backdrop-blur-md border-t border-paper/10 px-4 py-3 safe-area-bottom"
        >
          <a
            href="/education/coding-competition/register"
            className="w-full flex items-center justify-center gap-2.5 rounded-full bg-blueline px-6 py-4 text-base font-extrabold text-paper shadow-xl shadow-blueline/40 hover:bg-blueline-soft transition-colors min-h-[52px]"
          >
            <Trophy className="w-5 h-5" />
            Register for Code Nova
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function CodeNovaPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <main className="flex-1 min-h-screen bg-paper text-ink overflow-x-hidden">
        <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center bg-ink text-paper pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden">
          {/* Background video with scaling */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full opacity-55 scale-105"
          >
            <source src="/CodeNovavideo.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for optimal text contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/90" />

          {/* Blueprint grid subtle */}
          <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />

          {/* Gradient glows */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blueline/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-20 -right-32 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-72 h-72 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-8 text-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-5 py-2 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase font-bold mb-6">
                <Trophy className="w-4 h-4" />
                India&apos;s Monthly Online Skill Championship
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-black tracking-tight text-paper leading-none mb-4">
                <span
                  className="block"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "-0.04em" }}
                >
                  Code
                  <span style={{ color: "#2557FF" }}>·</span>
                  Nova
                </span>
                <span
                  className="block text-paper/60 font-bold"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)", letterSpacing: "-0.01em", lineHeight: 1.4 }}
                >
                  Compete. Learn. Grow.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-paper/75 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Compete with talented students across India in a structured monthly skill championship designed to test aptitude, logical reasoning, and coding skills.
            </motion.p>

            {/* Championship Feature badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-blueline-soft/40 bg-blueline/10 px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blueline-soft animate-pulse" />
              <span className="text-paper/90 font-mono text-xs sm:text-sm font-semibold tracking-wide">
                Monthly Championship · All 3 Rounds Included
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/education/coding-competition/register"
                className="group inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4.5 text-lg font-extrabold text-paper shadow-2xl shadow-blueline/40 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(37,87,255,0.5)]"
              >
                <Trophy className="w-5 h-5" />
                Register for Coding Competition
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#rewards"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#F59E0B]/50 bg-[#F59E0B]/10 px-7 py-4.5 text-base font-bold text-[#F59E0B] hover:bg-[#F59E0B]/20 transition-all duration-300"
              >
                📋 View Rewards
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-14 pt-10 border-t border-paper/10 grid grid-cols-3 gap-6 max-w-lg mx-auto"
            >
              {[
                { value: "3", label: "Rounds" },
                { value: "Monthly", label: "Schedule" },
                { value: "National", label: "Level" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl font-black text-blueline-soft">{s.value}</p>
                  <p className="font-mono text-xs text-paper/50 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── REWARDS PREVIEW STRIP ───────────────────────────────────────── */}
        <RewardPreviewStrip />

        {/* ── MAIN REWARDS SECTION ────────────────────────────────────────── */}
        <section
          id="rewards"
          className="relative py-20 sm:py-28 bg-ink text-paper overflow-hidden mt-16 sm:mt-20"
        >
          <div className="absolute inset-0 blueprint-grid-dark opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blueline/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            {/* Header */}
            <FadeInUp className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-5 py-2 text-xs sm:text-sm font-mono tracking-widest text-[#F59E0B] uppercase font-bold mb-5">
                🏆 Rewards & Recognition
              </div>
              <h2
                className="font-display font-extrabold text-paper text-balance"
                style={{ fontSize: "clamp(2rem,5vw,3.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Compete for Recognition.{" "}
                <span className="text-[#F59E0B]">Earn Rewards.</span>{" "}
                Build Your Profile.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-paper/65 max-w-xl mx-auto">
                Every Code Nova champion walks away with tangible rewards, career opportunities, and lasting recognition.
              </p>
            </FadeInUp>

            {/* 🌟 HIGHLIGHTED REWARD: PAID REMOTE INTERNSHIP OPPORTUNITY 🌟 */}
            <PaidInternshipReward />

            {/* 3 podium reward cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-start mb-16 sm:mb-20">
              {REWARDS.map((r, i) => (
                <RewardCard key={r.place} reward={r} index={i} />
              ))}
            </div>

            {/* Participant rewards */}
            <FadeInUp>
              <div className="border-t border-paper/10 pt-14">
                <div className="text-center mb-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-paper mb-2">
                    🎽 Every Qualified Round‑2 Participant Gets
                  </h3>
                  <p className="text-paper/55 text-base">Recognition that you can showcase on your student or career profile.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                  {[
                    {
                      icon: "👕",
                      title: "Official Code Nova T-Shirt",
                      desc: "Participants who qualify for Round 2 receive the exclusive Code Nova T-shirt — wear it with pride.",
                    },
                    {
                      icon: "📜",
                      title: "Digital Participation Certificate",
                      desc: "Receive an official digital participation certificate to add to your academic and professional profile.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 hover:border-paper/30 transition-colors"
                    >
                      <span className="text-3xl shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="font-display text-lg font-bold text-paper mb-1">{item.title}</h4>
                        <p className="text-sm text-paper/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── LOYALTY REWARD (EXCLUSIVE CODE NOVA KIT) ─────────────────────── */}
        <section className="py-16 sm:py-24 mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <FadeInUp className="text-center mb-10">
            <SectionLabel>🎁 Loyalty Reward</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink text-balance" style={{ letterSpacing: "-0.02em" }}>
              Keep Competing. Get Rewarded Every Time.
            </h2>
          </FadeInUp>
          <LoyaltyReward />
        </section>

        {/* ── REGISTRATION + CTA ──────────────────────────────────────────── */}
        <section
          id="register"
          className="relative py-20 sm:py-28 bg-ink text-paper overflow-hidden mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl rounded-3xl border border-blueline/30 shadow-2xl mb-16"
        >
          <div className="absolute inset-0 blueprint-grid-dark opacity-60" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blueline/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <FadeInUp>
              <SectionLabel>Register Now</SectionLabel>
              <h2 className="font-display font-extrabold text-paper mb-3" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.025em" }}>
                Register for Code Nova
              </h2>

              <p className="text-base sm:text-lg text-paper/75 max-w-xl mx-auto mb-8">
                Join India&apos;s structured monthly skill championship. Access all 3 rounds (subject to qualification), earn certificates, medals, and career opportunities.
              </p>

              {/* Timeline: Registration → R1 → R2 → Final */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {["Registration", "Round 1", "Round 2", "🏆 Final"].map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="rounded-full px-4 py-2 font-mono text-xs font-bold border border-paper/20 bg-paper/5 text-paper/80">
                      {s}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-paper/30" />}
                  </div>
                ))}
              </div>

              <a
                href="/education/coding-competition/register"
                className="group inline-flex items-center gap-3 rounded-full bg-blueline px-10 py-5 text-xl font-extrabold text-paper shadow-2xl shadow-blueline/40 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(37,87,255,0.5)]"
              >
                <Trophy className="w-6 h-6" />
                Register for Coding Competition
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </FadeInUp>
          </div>
        </section>

        {/* ── COMPETITION STRUCTURE ───────────────────────────────────────── */}
        <section className="py-16 sm:py-24 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <FadeInUp className="text-center mb-14">
            <SectionLabel>📋 Competition Structure</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-3" style={{ letterSpacing: "-0.02em" }}>
              How Code Nova Works
            </h2>
            <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Every Code Nova event follows a structured, multi-round format designed to progressively challenge participants and identify skilled competitors across India.
            </p>
          </FadeInUp>
          <CompetitionTimeline />
        </section>

        {/* ── WHY PARTICIPATE ─────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-paper-dim/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <FadeInUp className="text-center mb-12">
              <SectionLabel>🚀 Platform Features</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
                Why Participate in Code Nova?
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <FadeInUp key={f.title} delay={i * 0.08}>
                    <div
                      className="group relative flex flex-col rounded-2xl border border-grid bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                        style={{ backgroundColor: f.color }}
                      />
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                        style={{ backgroundColor: `${f.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: f.color }} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-ink mb-2">{f.title}</h3>
                      <p className="text-sm text-slate leading-relaxed flex-1">{f.desc}</p>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PARTICIPANT BENEFITS ─────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <FadeInUp className="text-center mb-12">
            <SectionLabel>🌟 What You Get</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
              Everything Included in One Registration
            </h2>
          </FadeInUp>

          <FadeInUp>
            <div className="rounded-2xl sm:rounded-3xl border border-grid bg-white p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blueline shrink-0 mt-0.5" />
                    <span className="text-base text-ink leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* ── COMPETITION RULES FAQ ───────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-paper-dim/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            <FadeInUp className="text-center mb-10">
              <SectionLabel>📜 Competition Rules</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
                Rules &amp; FAQs
              </h2>
            </FadeInUp>
            <FAQAccordion />
            <FadeInUp className="mt-10 text-center">
              <a
                href="#terms"
                className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/8 px-6 py-3 text-sm font-semibold text-blueline hover:bg-blueline/15 transition-colors"
              >
                <Scale className="w-4 h-4" />
                View Full Terms &amp; Conditions
                <ArrowRight className="w-4 h-4" />
              </a>
            </FadeInUp>
          </div>
        </section>

        {/* ── TERMS & CONDITIONS ──────────────────────────────────────────── */}
        <TermsSection />

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="relative py-24 sm:py-32 bg-ink text-paper overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blueline/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

          <FadeInUp className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-blueline-soft mb-4 font-bold">
              Code Nova · Monthly Skill Championship
            </p>
            <h2
              className="font-display font-extrabold text-paper text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Ready to Compete?
            </h2>
            <p className="text-base sm:text-xl text-paper/70 mb-10 leading-relaxed">
              Prove your skills. Climb the leaderboard. Earn recognition.
              <br />
              <strong className="text-paper/90">India&apos;s Monthly Online Skill Championship — Code Nova.</strong>
            </p>

            <a
              href="/education/coding-competition/register"
              className="group inline-flex items-center gap-3 rounded-full bg-blueline px-10 py-5 text-xl font-extrabold text-paper shadow-2xl shadow-blueline/40 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(37,87,255,0.55)]"
            >
              <Trophy className="w-6 h-6" />
              Register for Coding Competition
              <Sparkles className="w-5 h-5" />
            </a>

            <p className="mt-5 font-mono text-sm text-paper/50">
              Monthly Skill Championship · All Rounds & Recognition Included
            </p>
          </FadeInUp>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </>
  );
}
