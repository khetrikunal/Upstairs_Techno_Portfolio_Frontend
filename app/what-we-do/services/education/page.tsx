import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Sparkles,
  Trophy,
  Clock,
  Code2,
  ExternalLink,
  Laptop,
  Award,
  Medal,
  GraduationCap,
  Globe2,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Education Division",
  description:
    "Empowering students with future-ready technology skills through Code Nova coding competitions, nationwide Olympiad examinations, and practical AI courses.",
  alternates: { canonical: "/education" },
};

export default function EducationDivisionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        {/* Division Hero Header */}
        <section className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4.5 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-6">
                <Cpu className="w-4 h-4 text-blueline-soft" />
                <span>Education Division</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight">
                Empowering Students With Future-Ready Tech Skills
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-paper/80 leading-relaxed">
                The Education division of Upstairs Techno delivers practical technology education through our nationwide <strong className="text-white">CodeNova</strong> coding competition, the <strong className="text-white">Olympiad Examination</strong> (Standard 1st–12th), and comprehensive <strong className="text-white">AI Courses</strong>.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/education/coding-competition"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-lg shadow-blueline/30 hover:bg-blueline-soft transition-all"
                >
                  <Code2 className="w-5 h-5" />
                  <span>CodeNova Competition</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/education/olympiad"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-500/30 transition-all"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Olympiad Examination</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://edu.upstairstechno.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-3.5 text-base font-semibold text-amber-300 hover:bg-amber-400/20 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>AI Courses (Upcoming)</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mt-16 sm:mt-24 space-y-20 sm:space-y-28">
          {/* Offering 1: Code Nova (Coding Competition) */}
          <section id="offering-coding-competition" className="rounded-3xl bg-ink text-paper p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-blueline/30">
            <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
            <div className="absolute -top-32 right-0 w-96 h-96 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline-soft">
                    <Trophy className="w-5 h-5 text-blueline-soft" />
                    <span>Offering 01 · Coding Competition</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blueline/20 border border-blueline/40 text-blueline-soft px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                    Coding Competition
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight mb-4">
                  CodeNova – Coding Competition
                </h2>
                <p className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                  CodeNova is a <strong className="text-white">Coding Competition</strong> organised by Upstairs Techno. It is a premier platform where participants can showcase their programming skills, logical thinking, and problem-solving abilities.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  <div className="flex items-center gap-2.5 text-sm text-paper/85 bg-paper/5 border border-paper/10 rounded-xl p-3">
                    <Code2 className="w-4 h-4 text-blueline-soft shrink-0" />
                    <span>Programming skills in Python, Java, C++, JS/TS</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-paper/85 bg-paper/5 border border-paper/10 rounded-xl p-3">
                    <BrainCircuit className="w-4 h-4 text-blueline-soft shrink-0" />
                    <span>Logical thinking &amp; algorithmic problem solving</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-paper/85 bg-paper/5 border border-paper/10 rounded-xl p-3">
                    <Medal className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Medals, certificates &amp; Claude AI subscriptions</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-paper/85 bg-paper/5 border border-paper/10 rounded-xl p-3">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Paid Remote Internship opportunities for top 10</span>
                  </div>
                </div>

                {/* CTAs for Code Nova */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/education/coding-competition"
                    className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-extrabold text-paper shadow-xl shadow-blueline/40 hover:bg-blueline-soft hover:scale-105 transition-all"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Go to CodeNova Page</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="https://codenova.upstairstechno.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-7 py-4 text-base font-bold text-paper hover:bg-paper/20 transition-colors"
                  >
                    <span>Register on codenova.upstairstechno.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* CodeNova Logo Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl border border-blueline/40 bg-gradient-to-b from-[#131d2e] to-[#090e18] p-6 shadow-2xl flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-paper/15 bg-gradient-to-b from-[#162238] to-[#0a101b] flex items-center justify-center p-4 shadow-inner mb-4">
                    <Image
                      src="/codenova-logo.png"
                      alt="CodeNova Logo"
                      fill
                      sizes="(max-width: 768px) 260px, 320px"
                      className="object-contain"
                    />
                  </div>
                  <p className="font-display text-sm font-bold text-paper text-center">
                    Official CodeNova Competition
                  </p>
                  <p className="font-mono text-xs text-blueline-soft text-center mt-1">
                    Organised by Upstairs Techno
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Offering 2: Olympiad Examination */}
          <section id="offering-olympiad" className="rounded-3xl bg-gradient-to-br from-[#1b1913] via-ink to-[#12100a] text-paper p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-amber-400/40">
            <div className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none" />
            <div className="absolute -top-32 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                    <span>Offering 02 · Olympiad Examination</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                    Standard 1st to 12th
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight mb-4">
                  Olympiad Examination
                </h2>
                <p className="text-paper/85 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                  Upstairs Future Genius Olympiad (UFGO) is a prestigious examination organised by Upstairs Techno for students studying in <strong className="text-white">Standard 1st to Standard 12th</strong>. It benchmarks conceptual clarity, science, mathematics, and logical reasoning.
                </p>

                {/* Examination Modes: Online & Offline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="rounded-2xl border border-blueline/40 bg-blueline/10 p-5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-blueline-soft mb-1.5">
                      <Globe2 className="w-4 h-4" />
                      <span>Online Examination Mode</span>
                    </div>
                    <p className="text-xs sm:text-sm text-paper/80 leading-relaxed">
                      Students can participate in the examination online from home or school computer labs via our secure proctored portal.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-emerald-300 mb-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>Offline Examination Mode</span>
                    </div>
                    <p className="text-xs sm:text-sm text-paper/80 leading-relaxed">
                      Students can participate through offline examination arrangements organized in schools and affiliated exam centers.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/education/olympiad"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 text-base sm:text-lg font-extrabold text-white shadow-xl shadow-amber-500/30 hover:scale-105 transition-all"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Go to Olympiad Page</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/education/olympiad#register"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-7 py-4 text-base font-bold text-paper hover:bg-paper/20 transition-colors"
                  >
                    <span>Register / Enquire</span>
                  </Link>
                </div>
              </div>

              {/* Olympiad Logo Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl border border-amber-400/40 bg-gradient-to-b from-[#1f1d16] to-[#0e0d0a] p-6 shadow-2xl flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-paper/15 bg-gradient-to-b from-[#242118] to-[#12110c] flex items-center justify-center p-4 shadow-inner mb-4">
                    <Image
                      src="/olympiad-logo.png"
                      alt="Upstairs Future Genius Olympiad Exam Logo"
                      fill
                      sizes="(max-width: 768px) 260px, 320px"
                      className="object-contain"
                    />
                  </div>
                  <p className="font-display text-sm font-bold text-paper text-center">
                    Official Olympiad Examination
                  </p>
                  <p className="font-mono text-xs text-amber-300 text-center mt-1">
                    UFGO · Standard 1st to 12th
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Offering 3: AI Course */}
          <section id="offering-ai-courses" className="rounded-3xl border border-grid bg-white p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden">
            {/* Top Badge & Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline">
                <Cpu className="w-5 h-5 text-blueline" />
                <span>Offering 03 · Practical Curriculum</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider animate-pulse">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Course Upcoming Soon
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-4">
              AI Course
            </h2>
            <p className="text-slate text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              Upstairs Techno provides practical, production-oriented AI learning designed for school students, college freshers, and developers who want to master Artificial Intelligence, Machine Learning, and Generative AI through live code and hands-on projects.
            </p>

            {/* Upcoming announcement alert banner */}
            <div className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-50/70 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <Sparkles className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Course Upcoming Soon on edu.upstairstechno.com
                  </h3>
                  <p className="text-sm text-slate mt-0.5 leading-relaxed">
                    Interactive notebooks, cloud GPU environments, and modular courses are actively being prepared. Visit our dedicated education platform to explore upcoming cohorts.
                  </p>
                </div>
              </div>
              <a
                href="https://edu.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 text-sm font-bold shadow-md transition-colors"
              >
                <span>Visit edu.upstairstechno.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Cohorts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* School Students Card */}
              <div className="rounded-2xl border border-grid bg-paper-dim/30 p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-blueline bg-blueline/10 px-3 py-1 rounded-full inline-block mb-4">
                    School Cohort · Grades 8–12
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">Young AI Explorers</h3>
                  <p className="text-sm sm:text-base text-slate leading-relaxed mb-6">
                    Introducing young minds to the fundamentals of Artificial Intelligence, creative generative tools, and computational thinking.
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink/85">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Artificial Intelligence &amp; Data Fundamentals</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Generative AI &amp; Creative Media Tools</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Machine Learning Basics &amp; Classification</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Prompt Engineering for Learning &amp; Research</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Hands-on AI Mini-Projects with Mentorship</li>
                  </ul>
                </div>
              </div>

              {/* College Students Card */}
              <div className="rounded-2xl border border-grid bg-paper-dim/30 p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-blueline bg-blueline/10 px-3 py-1 rounded-full inline-block mb-4">
                    College Cohort &amp; Developers
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">Applied AI &amp; LLM Engineering</h3>
                  <p className="text-sm sm:text-base text-slate leading-relaxed mb-6">
                    Production-oriented curriculum focused on building real-world Machine Learning systems, RAG applications, and autonomous AI agents.
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink/85">
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Python for Data Science &amp; PyTorch Foundations</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Deep Learning, Embeddings &amp; Vector Databases</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Production RAG Pipelines (LangChain &amp; LlamaIndex)</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Fine-Tuning Open Source Large Language Models</li>
                    <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-blueline shrink-0" /> Portfolio Capstone Projects &amp; Cloud Deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Course CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="https://edu.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-bold text-paper shadow-xl shadow-blueline/30 hover:bg-blueline-soft transition-all"
              >
                <span>Go to AI Course Platform (edu.upstairstechno.com)</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <span className="text-sm font-mono text-slate font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                Course Upcoming Soon
              </span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
