import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Sparkles,
  Trophy,
} from "lucide-react";

export const metadata = {
  title: "Education Division | Upstairs Techno",
  description:
    "Empowering students with future-ready technology skills through practical AI courses and monthly coding competitions.",
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
                The Education division of Upstairs Techno delivers practical AI learning and competitive coding experiences designed for school students, college freshers, and aspiring developers.
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
              AI Course
            </h2>
            <p className="text-slate text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
              Upstairs Techno provides practical AI learning covering relevant AI concepts, tools, and hands-on projects. Our courses are designed for school students, college freshers, and developers who want to understand and apply Artificial Intelligence in the real world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* School Students Card */}
              <div className="rounded-2xl border border-grid bg-paper-dim/30 p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-blueline bg-blueline/10 px-3 py-1 rounded-full inline-block mb-4">
                    School Students
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">Young AI Explorers</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    Introducing young minds to the fundamentals of Artificial Intelligence and computational thinking.
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink/80">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Artificial Intelligence Fundamentals</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Generative AI &amp; Creative Tools</li>
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
                    College Students &amp; Developers
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">Applied AI Engineering</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    Production-oriented curriculum focused on building real-world ML systems and LLM applications.
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink/80">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Python for Data Science &amp; AI</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> Deep Learning &amp; Neural Networks</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blueline" /> RAG Pipelines &amp; Vector DBs</li>
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
                Coding Competition
              </h2>
              <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
                Students and developers can participate in coding competitions designed to test{" "}
                <span className="text-blueline-soft font-bold">problem solving</span>,{" "}
                <span className="text-blueline-soft font-bold">programming skills</span>,{" "}
                <span className="text-blueline-soft font-bold">logical thinking</span>, and{" "}
                <span className="text-blueline-soft font-bold">competitive programming</span>{" "}
                through a structured 3-round format conducted every month.
              </p>

              {/* 3 Rounds Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Round 1 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 1
                  </span>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <BrainCircuit className="w-6 h-6 text-blueline-soft" />
                    <h3 className="font-display text-xl font-bold text-paper">Aptitude Test</h3>
                  </div>
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
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-blueline-soft" />
                    <h3 className="font-display text-xl font-bold text-paper">Basic Coding</h3>
                  </div>
                  <p className="text-xs text-paper/70 mb-4">Tests programming fundamentals, conditions, loops, functions, and arrays.</p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1">
                    <li>• Syntax &amp; Variables</li>
                    <li>• Loops &amp; Functions</li>
                    <li>• Array Manipulations</li>
                  </ul>
                </div>

                {/* Round 3 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 3
                  </span>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <Trophy className="w-6 h-6 text-blueline-soft" />
                    <h3 className="font-display text-xl font-bold text-paper">Advanced Coding</h3>
                  </div>
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
                  <span>Register Now</span>
                  <Sparkles className="w-5 h-5" />
                </a>
                <a
                  href="/education/coding-competition"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-6 py-3.5 text-base font-semibold text-paper hover:bg-paper/20 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
