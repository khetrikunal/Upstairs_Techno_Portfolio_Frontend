import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Education Division | Upstairs Techno",
  description:
    "Empowering students and professionals with future-ready technology skills through AI courses, monthly coding competitions, internships, workshops, and corporate training.",
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
                <GraduationCap className="w-4 h-4 text-blueline-soft" />
                <span>Education Division</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight">
                Empowering Students & Professionals With Future-Ready Tech Skills
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-paper/80 leading-relaxed">
                The Education division of Upstairs Techno delivers high-impact, practical technology education designed for school students, college freshers, working professionals, universities, and enterprise organizations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#offering-coding-competition"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-lg shadow-blueline/30 hover:bg-blueline-soft transition-all"
                >
                  Monthly Coding Competition
                  <Trophy className="w-5 h-5" />
                </a>
                <a
                  href="#offering-ai-courses"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-6 py-3.5 text-base font-semibold text-paper hover:bg-paper/10 transition-colors"
                >
                  AI Courses
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mt-16 sm:mt-24 space-y-20 sm:space-y-28">
          {/* Offering 1: AI Courses */}
          <section id="offering-ai-courses" className="rounded-3xl border border-grid bg-paper p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline mb-3">
              <Cpu className="w-5 h-5" />
              <span>Offering 01</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
              AI Courses
            </h2>
            <p className="text-slate text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
              We provide AI-focused learning paths designed specifically for different student cohorts, from foundational concepts to production-level ML systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* School Students Card */}
              <div className="rounded-2xl border border-grid bg-paper-dim/30 p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-blueline bg-blueline/10 px-3 py-1 rounded-full inline-block mb-4">
                    School Students Cohort
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">Young AI Explorers</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    Introducing young minds to the fundamentals of Artificial Intelligence and computational thinking.
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink/80">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Artificial Intelligence Fundamentals</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Generative AI & Creative Tools</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Machine Learning Basics</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Prompt Engineering for Learning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Practical Hands-on AI Mini-Projects</li>
                  </ul>
                </div>
              </div>

              {/* College Students Card */}
              <div className="rounded-2xl border border-grid bg-paper-dim/30 p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-blueline bg-blueline/10 px-3 py-1 rounded-full inline-block mb-4">
                    College Students & Graduates
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">Applied AI Engineering</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    Production-oriented curriculum focused on building real-world ML systems and LLM applications.
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink/80">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Python for Data Science & AI</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Deep Learning & Neural Networks</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> RAG Pipelines & Vector DBs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Fine-Tuning Open Source LLMs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Portfolio Capstone Projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center sm:text-left">
              <a
                href="/education/ai-courses"
                className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-md hover:bg-blueline-soft transition-colors"
              >
                <span>Explore AI Courses</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>

          {/* Offering 2: Monthly Coding Competition */}
          <section id="offering-coding-competition" className="rounded-3xl bg-ink text-paper p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-60" />
            <div className="relative">
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline-soft mb-3">
                <Trophy className="w-5 h-5" />
                <span>Offering 02</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-paper mb-4">
                Monthly Coding Competition
              </h2>
              <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
                Conducted <span className="text-blueline-soft font-bold">every month</span> to empower students to build logical thinking, quantitative aptitude, problem solving, and production coding skills through a competitive 3-round structure.
              </p>

              {/* 3 Rounds Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Round 1 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 1
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper mt-4 mb-2">Aptitude Test</h3>
                  <p className="text-xs text-paper/70 mb-4">Focuses on logical reasoning, quantitative aptitude, and analytical problem solving.</p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1">
                    <li>• Logical Reasoning</li>
                    <li>• Quantitative Aptitude</li>
                    <li>• Speed Problem Solving</li>
                  </ul>
                </div>

                {/* Round 2 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 2
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper mt-4 mb-2">Basic Coding</h3>
                  <p className="text-xs text-paper/70 mb-4">Tests programming fundamentals, conditions, loops, functions, and arrays.</p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1">
                    <li>• Syntax & Variables</li>
                    <li>• Loops & Functions</li>
                    <li>• Array Manipulations</li>
                  </ul>
                </div>

                {/* Round 3 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 3
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper mt-4 mb-2">Advanced Coding</h3>
                  <p className="text-xs text-paper/70 mb-4">Complex algorithmic challenges, data structures, and code optimization.</p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1">
                    <li>• Advanced Data Structures</li>
                    <li>• Dynamic Programming</li>
                    <li>• Time/Space Optimization</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/education/coding-competition/register"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-xl hover:bg-blueline-soft transition-colors"
                >
                  <span>Register Now & Grab Your Rewards</span>
                  <Sparkles className="w-5 h-5" />
                </a>
                <a
                  href="/education/coding-competition"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-6 py-3.5 text-base font-semibold text-paper hover:bg-paper/20 transition-colors"
                >
                  <span>Apply Now / View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Offering 3: Internship */}
          <section id="offering-internship" className="rounded-3xl border border-grid bg-paper p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline mb-3">
              <GraduationCap className="w-5 h-5" />
              <span>Offering 03</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
              Internship Program
            </h2>
            <p className="text-slate text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
              Gain production experience on live enterprise software, cloud infrastructure, and AI engineering projects with 1-on-1 mentorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl border border-grid bg-paper-dim/20 p-5">
                <h4 className="font-bold text-ink mb-1">Real-World Projects</h4>
                <p className="text-xs text-slate">Ship code that runs in real production client environments.</p>
              </div>
              <div className="rounded-xl border border-grid bg-paper-dim/20 p-5">
                <h4 className="font-bold text-ink mb-1">Senior Mentorship</h4>
                <p className="text-xs text-slate">1-on-1 pairing with Principal Engineers and Tech Leads.</p>
              </div>
              <div className="rounded-xl border border-grid bg-paper-dim/20 p-5">
                <h4 className="font-bold text-ink mb-1">Certificate & Experience Letter</h4>
                <p className="text-xs text-slate">Official verifiable experience credentials and PPO opportunities.</p>
              </div>
            </div>

            <a
              href="/career/services/internship/apply"
              className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-md hover:bg-blueline-soft transition-colors"
            >
              <span>Apply for Internship</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </section>

          {/* Offering 4 & 5: Workshops & Corporate Training */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Workshops */}
            <section id="offering-workshops" className="rounded-3xl border border-grid bg-paper p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline mb-3">
                  <Wrench className="w-5 h-5" />
                  <span>Offering 04</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ink mb-3">Workshops</h2>
                <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                  Short-term practical masterclasses covering emerging tech like Generative AI, Full-Stack Web Dev, Cloud Native, and DevOps pipelines.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink/80 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> 1-2 Day Intensive Hands-on Sprints</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Live Coding & Project Toolkits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Certification of Completion</li>
                </ul>
              </div>

              <div>
                <a
                  href="/education/workshops"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper hover:bg-blueline transition-colors"
                >
                  <span>Explore Workshops</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* Corporate Training */}
            <section id="offering-corporate-training" className="rounded-3xl border border-grid bg-paper p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline mb-3">
                  <Building2 className="w-5 h-5" />
                  <span>Offering 05</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ink mb-3">Corporate Training</h2>
                <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                  Customized upskilling and technology transformation training for enterprise teams in AI, Cloud, Cybersecurity, and Data Architecture.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink/80 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Tailored Enterprise Tech Curriculum</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> On-site or Remote Cohort Delivery</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Post-Training Benchmark Metrics</li>
                </ul>
              </div>

              <div>
                <a
                  href="/education/corporate-training"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper hover:bg-blueline transition-colors"
                >
                  <span>Request Corporate Training</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
