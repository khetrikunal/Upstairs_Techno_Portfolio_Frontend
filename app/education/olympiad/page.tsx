"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  GraduationCap,
  Globe2,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Medal,
  Calendar,
  Users,
  ShieldCheck,
  ChevronDown,
  Mail,
  Send,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const GRADE_LEVELS = [
  {
    tier: "Primary Division",
    grades: "Standard 1st – 5th",
    icon: "🌱",
    color: "#2557FF",
    desc: "Nurturing curiosity, foundational numerical ability, pattern recognition, and observation-based science questions tailored for young learners.",
    topics: ["Foundational Mathematics", "General Science & Nature", "Visual Puzzles & Patterns", "Basic Logical Thinking"],
  },
  {
    tier: "Middle School Division",
    grades: "Standard 6th – 8th",
    icon: "🚀",
    color: "#7C3AED",
    desc: "Building structured problem-solving instincts, applied mathematics, experimental science, and deductive reasoning skills.",
    topics: ["Applied Arithmetic & Geometry", "Physical & Natural Sciences", "Deductive & Inductive Reasoning", "Data Interpretation"],
  },
  {
    tier: "Secondary Division",
    grades: "Standard 9th – 10th",
    icon: "⚡",
    color: "#059669",
    desc: "Challenging analytical acumen with multi-concept questions, scientific hypothesis evaluation, and competitive benchmarking.",
    topics: ["Advanced STEM Concepts", "Algebra & Coordinate Geometry", "Scientific Analysis & Physics", "Complex Analytical Logic"],
  },
  {
    tier: "Senior Secondary Division",
    grades: "Standard 11th – 12th",
    icon: "🏆",
    color: "#F59E0B",
    desc: "National-standard rigor testing deep conceptual clarity, quantitative prowess, and Olympiad-level critical problem solving.",
    topics: ["Advanced Higher Mathematics", "Physics & Chemistry Applications", "Higher-Order Cognitive Logic", "National Competitive Readiness"],
  },
];

const MODES = [
  {
    mode: "Online Examination",
    badge: "Available Anywhere",
    icon: Globe2,
    color: "#2557FF",
    headline: "Participate from Home or Computer Lab",
    description:
      "Students can take the Olympiad examination online through our secure, modern examination portal. Equipped with intuitive navigation and AI-assisted proctoring, it guarantees a fair, seamless test experience from anywhere in India.",
    features: [
      "Flexible exam slots on scheduled test days",
      "Compatible with laptops, desktops, and modern browsers",
      "Instant submission and detailed performance analytics",
      "Verified digital certificate and national percentile score",
    ],
  },
  {
    mode: "Offline Examination",
    badge: "School & Center Arrangements",
    icon: Building2,
    color: "#059669",
    headline: "Arranged Through Partner Schools & Exam Centers",
    description:
      "For schools and institutions wishing to conduct the examination on-campus, Upstairs Techno provides comprehensive offline examination kits including physical question booklets, OMR answer sheets, and invigilator guidelines.",
    features: [
      "Physical question papers & standardized OMR answer sheets",
      "Conducted within school premises under faculty supervision",
      "School-level awards, institution trophies & rank recognition",
      "Complete logistical support provided by Upstairs Techno",
    ],
  },
];

const REWARDS = [
  {
    rank: "National Rank 1",
    medal: "Gold Medal",
    emoji: "🥇",
    color: "#F59E0B",
    items: ["Gold Medal of Excellence", "Winner Certificate", "Special Scholarship Award", "National Champion Trophy"],
  },
  {
    rank: "National Rank 2",
    medal: "Silver Medal",
    emoji: "🥈",
    color: "#94A3B8",
    items: ["Silver Medal of Excellence", "Merit Certificate", "Excellence Gift Kit", "State-Level Commendation"],
  },
  {
    rank: "National Rank 3",
    medal: "Bronze Medal",
    emoji: "🥉",
    color: "#CD7F32",
    items: ["Bronze Medal of Excellence", "Merit Certificate", "Excellence Gift Kit", "Honorable Mention"],
  },
];

const FAQS = [
  {
    q: "Who is eligible to participate in the Olympiad Examination?",
    a: "Students currently enrolled in Standard 1st to Standard 12th across any recognized educational board (CBSE, ICSE, State Boards, and International Curriculums) are eligible to participate.",
  },
  {
    q: "How does the Online Examination work?",
    a: "Students registered for the online examination receive secure login credentials. On the examination date, they can log in from their laptop or desktop to complete the test within the allotted time window.",
  },
  {
    q: "How can schools arrange an Offline Examination?",
    a: "Schools can register their institution with Upstairs Techno to conduct the Olympiad offline. We provide complete examination packets (question booklets, OMR sheets, guidelines) and coordinate result processing and physical awards.",
  },
  {
    q: "Can an individual student register directly?",
    a: "Yes! Individual students can register directly for the Online Examination mode through this website even if their school is not participating offline.",
  },
  {
    q: "What subjects are covered in the Olympiad Examination?",
    a: "The examination assesses Mathematics, Science, General Aptitude, and Logical Reasoning tailored to the student's respective grade level.",
  },
  {
    q: "What awards and certificates will students receive?",
    a: "All participants receive an official Certificate of Participation. Top rankers at the National, State, and School levels are awarded Medals of Excellence, Merit Certificates, and special trophies.",
  },
];

export default function OlympiadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formType, setFormType] = useState<"individual" | "school">("individual");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gradeOrSchool: "",
    preferredMode: "Online Examination",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Olympiad Registration (${formType === "school" ? "School" : "Student"}): ${formData.name}`
    );
    const body = encodeURIComponent(
      [
        `=== UPSTAIRS FUTURE GENIUS OLYMPIAD REGISTRATION ===`,
        `Type: ${formType === "school" ? "School Enrollment" : "Individual Student"}`,
        `Name/Contact Person: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Standard / School Name: ${formData.gradeOrSchool}`,
        `Preferred Examination Mode: ${formData.preferredMode}`,
        `City/State: ${formData.city}`,
        `Message / Notes: ${formData.message || "None"}`,
      ].join("\n")
    );
    window.location.href = `mailto:contact@upstairstechno.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 min-h-screen bg-paper text-ink overflow-x-hidden pt-28 sm:pt-32">
        {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative bg-ink text-paper py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-20 -right-32 w-96 h-96 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Information */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4.5 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-amber-300 uppercase font-bold mb-6">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Upstairs Future Genius Olympiad (UFGO)</span>
                </div>

                <h1 className="font-display font-extrabold text-paper tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                  Olympiad <span className="text-amber-400">Examination</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-paper/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                  A prestigious national examination organised by Upstairs Techno designed to nurture analytical acumen, critical reasoning, and academic brilliance for students from <strong className="text-white">Standard 1st to Standard 12th</strong>.
                </p>

                {/* Eligibility & Dual Modes Highlights */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-500/15 px-4 py-2 text-xs sm:text-sm font-mono font-bold text-amber-300">
                    <GraduationCap className="w-4 h-4" />
                    <span>Eligibility: Standard 1st to 12th</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-blueline/40 bg-blueline/20 px-4 py-2 text-xs sm:text-sm font-mono font-bold text-blueline-soft">
                    <Globe2 className="w-4 h-4" />
                    <span>Online Examination</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-xs sm:text-sm font-mono font-bold text-emerald-300">
                    <Building2 className="w-4 h-4" />
                    <span>Offline Examination</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 text-base sm:text-lg font-extrabold text-white shadow-xl shadow-amber-500/30 transition-all hover:scale-105"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Register for Olympiad</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#modes"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-7 py-4 text-base font-bold text-paper hover:bg-paper/20 transition-colors"
                  >
                    <span>Explore Exam Modes</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Official Olympiad Logo Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl border border-brass/50 bg-gradient-to-b from-[#181d28] via-[#10141f] to-[#0c0f17] p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-ink text-[11px] font-mono font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Official Olympiad Insignia
                  </div>

                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-paper/15 bg-gradient-to-b from-[#1c2230] to-[#0e121a] flex items-center justify-center p-4 shadow-inner">
                    <Image
                      src="/olympiad-logo.png"
                      alt="Upstairs Future Genius Olympiad (UFGO) Exam Logo"
                      fill
                      priority
                      sizes="(max-width: 768px) 320px, 420px"
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <p className="font-display text-base font-bold text-paper">
                      Upstairs Future Genius Olympiad
                    </p>
                    <p className="font-mono text-xs text-amber-300/80 mt-1">
                      UFGO Examination · Standard 1st to 12th
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXAMINATION MODES: ONLINE & OFFLINE ─────────────────────────── */}
        <section id="modes" className="py-20 sm:py-28 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blueline uppercase font-bold mb-4">
              <Globe2 className="w-4 h-4" />
              <span>Examination Modes</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
              Flexible Formats: <span className="text-blueline">Online &amp; Offline</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
              We empower every student to participate effortlessly. The Olympiad Examination is fully conducted through both online digital platforms and offline school arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {MODES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.mode}
                  className="rounded-3xl border border-grid bg-white p-8 sm:p-10 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-blueline/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: m.color }} />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${m.color}15`, color: m.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border"
                        style={{ backgroundColor: `${m.color}10`, color: m.color, borderColor: `${m.color}40` }}
                      >
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-ink mb-2">{m.mode}</h3>
                    <p className="font-semibold text-sm mb-4" style={{ color: m.color }}>
                      {m.headline}
                    </p>
                    <p className="text-sm sm:text-base text-slate leading-relaxed mb-6">
                      {m.description}
                    </p>

                    <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate border-t border-grid pt-6">
                      {m.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: m.color }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-grid">
                    <a
                      href="#register"
                      className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                      style={{ color: m.color }}
                    >
                      <span>Register for {m.mode}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ELIGIBILITY BREAKDOWN BY GRADE LEVELS ────────────────────────── */}
        <section className="py-20 bg-paper-dim/60 border-y border-grid">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono tracking-widest text-amber-700 uppercase font-bold mb-4">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Eligibility &amp; Grade Divisions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                Designed for Standard 1st to Standard 12th
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
                Every division features grade-appropriate question papers crafted by leading academic experts to inspire learning, scientific curiosity, and problem-solving confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GRADE_LEVELS.map((g) => (
                <div
                  key={g.grades}
                  className="rounded-2xl border border-grid bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl mb-3">{g.icon}</div>
                    <span
                      className="font-mono text-xs font-bold uppercase tracking-wider block mb-1"
                      style={{ color: g.color }}
                    >
                      {g.tier}
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-ink mb-3">{g.grades}</h3>
                    <p className="text-xs sm:text-sm text-slate leading-relaxed mb-5">{g.desc}</p>
                  </div>

                  <div className="border-t border-grid pt-4 space-y-1.5">
                    <p className="font-mono text-[11px] font-bold uppercase text-slate/70">Key Focus Areas:</p>
                    {g.topics.map((top, idx) => (
                      <p key={idx} className="text-xs text-ink/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: g.color }} />
                        {top}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REWARDS & RECOGNITION ───────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-ink text-paper relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/15 px-4.5 py-1.5 text-xs font-mono tracking-widest text-amber-300 uppercase font-bold mb-4">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Rewards &amp; Recognition</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight">
                Celebrate Every Milestone of Genius
              </h2>
              <p className="mt-4 text-base sm:text-lg text-paper/70 leading-relaxed">
                From school-level certificates to national gold medals and trophies, the Olympiad recognizes talent and determination at every level.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-14">
              {REWARDS.map((r, i) => (
                <div
                  key={r.rank}
                  className={`rounded-3xl border border-paper/15 bg-gradient-to-b from-[#141b27] to-[#0d121c] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative ${
                    i === 0 ? "border-amber-400/60 shadow-amber-500/15 sm:scale-105" : ""
                  }`}
                >
                  {i === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-ink text-[11px] font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      National Winner
                    </div>
                  )}
                  <div className="text-center pt-2 pb-6 border-b border-paper/10">
                    <span className="text-5xl block mb-3">{r.emoji}</span>
                    <h3 className="font-display text-2xl font-bold" style={{ color: r.color }}>
                      {r.rank}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-paper/60 mt-1">
                      {r.medal}
                    </p>
                  </div>

                  <ul className="py-6 space-y-3 font-mono text-xs sm:text-sm text-paper/80 flex-1">
                    {r.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: r.color }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Recognition for All Participants */}
            <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 sm:p-8 text-center max-w-3xl mx-auto">
              <h4 className="font-display text-xl sm:text-2xl font-bold text-paper mb-2">
                📜 Certificates &amp; Performance Report for All Participants
              </h4>
              <p className="text-sm sm:text-base text-paper/70 leading-relaxed">
                Every registered student receives an official Certificate of Participation along with a detailed Performance Breakdown Report evaluating their strengths across science, math, and analytical logic.
              </p>
            </div>
          </div>
        </section>

        {/* ── REGISTRATION & INQUIRY FORM ─────────────────────────────────── */}
        <section id="register" className="py-20 sm:py-28 mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl border border-grid bg-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono tracking-widest text-amber-700 uppercase font-bold mb-4">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Olympiad Enrolment</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                Register for the Olympiad Examination
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate leading-relaxed">
                Open for individual student registrations and school institutional affiliations across Standard 1st to 12th.
              </p>

              {/* Selector: Individual vs School */}
              <div className="inline-flex items-center gap-2 rounded-full border border-grid bg-paper p-1 mt-6">
                <button
                  type="button"
                  onClick={() => setFormType("individual")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    formType === "individual"
                      ? "bg-ink text-paper shadow-sm"
                      : "text-slate hover:text-ink"
                  }`}
                >
                  Individual Student
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("school")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    formType === "school"
                      ? "bg-ink text-paper shadow-sm"
                      : "text-slate hover:text-ink"
                  }`}
                >
                  School / Institutional Enrolment
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-2">
                  Enquiry / Registration Initiated!
                </h3>
                <p className="text-slate text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Your details have been pre-filled into your mail client. Our Olympiad team will also follow up with syllabus packets and verification instructions.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blueline hover:underline"
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      {formType === "individual" ? "Student Full Name *" : "School / Contact Person Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={formType === "individual" ? "e.g. Aarav Sharma" : "e.g. St. Xavier's High School"}
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. student@example.com"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      {formType === "individual" ? "Standard / Grade (1st to 12th) *" : "Number of Students *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.gradeOrSchool}
                      onChange={(e) => setFormData({ ...formData, gradeOrSchool: e.target.value })}
                      placeholder={formType === "individual" ? "e.g. Standard 8th" : "e.g. 150+ students"}
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      Examination Mode *
                    </label>
                    <select
                      value={formData.preferredMode}
                      onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    >
                      <option value="Online Examination">Online Examination</option>
                      <option value="Offline Examination">Offline Examination</option>
                      <option value="Both / Either">Both / Open to Advice</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      City &amp; State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Pune, Maharashtra"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate mb-1.5">
                      Additional Note / Message (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Please send syllabus & dates"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-blueline"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate font-mono">
                    Official Support: <a href="mailto:contact@upstairstechno.com" className="text-blueline underline">contact@upstairstechno.com</a>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Olympiad Registration</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS ──────────────────────────────────── */}
        <section className="py-20 bg-paper-dim/60 border-t border-grid">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blueline uppercase font-bold mb-4">
                <span>FAQs</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-ink">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-grid bg-white overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-ink">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate transition-transform duration-300 shrink-0 ${
                        openFaq === i ? "rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate leading-relaxed border-t border-grid pt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CROSS LINK TO CODENOVA ───────────────────────────────────────── */}
        <section className="py-16 sm:py-20 mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl border border-blueline/30 bg-ink text-paper p-8 sm:p-12 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blueline/20 border border-blueline/40 flex items-center justify-center shrink-0">
                <Code2 className="w-8 h-8 text-blueline-soft" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-blueline-soft font-bold block mb-1">
                  Also Explore Our Coding Competition
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-paper">
                  CodeNova – Coding Competition
                </h3>
                <p className="text-sm text-paper/75 mt-1">
                  Showcase programming skills, logical thinking, and problem solving.
                </p>
              </div>
            </div>

            <Link
              href="/education/coding-competition"
              className="inline-flex items-center gap-2 rounded-full bg-blueline px-6 py-3.5 text-sm sm:text-base font-bold text-paper hover:bg-blueline-soft transition-all shrink-0"
            >
              <span>Explore CodeNova</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
