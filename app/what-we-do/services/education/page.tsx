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
} from "lucide-react";

export const metadata = {
  title: "Education Division | Upstairs Techno",
  description:
    "Empowering students with future-ready technology skills through Code Nova monthly coding championships and practical AI courses.",
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
                The Education division of Upstairs Techno delivers practical technology education through our monthly nationwide <strong className="text-white">Code Nova</strong> skill championship and comprehensive <strong className="text-white">AI Courses</strong> designed for school students, college freshers, and aspiring developers.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/education/coding-competition"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-lg shadow-blueline/30 hover:bg-blueline-soft transition-all"
                >
                  <Trophy className="w-5 h-5" />
                  <span>Code Nova Championship</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://edu.upstairstechno.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-3.5 text-base font-semibold text-amber-300 hover:bg-amber-400/20 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>AI Course (Course Upcoming Soon)</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mt-16 sm:mt-24 space-y-20 sm:space-y-28">
          {/* Offering 1: Code Nova (Monthly Coding Competition) */}
          <section id="offering-coding-competition" className="rounded-3xl bg-ink text-paper p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-blueline/30">
            <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
            <div className="absolute -top-32 right-0 w-96 h-96 bg-blueline/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline-soft">
                  <Trophy className="w-5 h-5 text-blueline-soft" />
                  <span>Offering 01 · Flagship Championship</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blueline/20 border border-blueline/40 text-blueline-soft px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                  Monthly Event · All India
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight mb-4">
                Code Nova – Monthly Coding Competition
              </h2>
              <p className="text-paper/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                Code Nova is India&apos;s structured monthly online skill championship testing <span className="text-blueline-soft font-bold">aptitude</span>, <span className="text-blueline-soft font-bold">fundamental coding</span>, and <span className="text-blueline-soft font-bold">advanced algorithmic problem solving</span>. Designed by Senior Architects, competitors win medals, Claude subscriptions, exclusive kits, and fast-track paid remote internships.
              </p>

              {/* Quick stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 rounded-2xl bg-paper/[0.04] border border-paper/10">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-blueline-soft">3 Rounds</p>
                  <p className="font-mono text-xs text-paper/60 uppercase tracking-wider mt-0.5">Progressive Difficulty</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-[#F59E0B]">Medals &amp; Kits</p>
                  <p className="font-mono text-xs text-paper/60 uppercase tracking-wider mt-0.5">Top 3 &amp; Qualified</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-blueline-soft">Paid Internship</p>
                  <p className="font-mono text-xs text-paper/60 uppercase tracking-wider mt-0.5">PPO Fast-Track</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-blueline-soft">Monthly</p>
                  <p className="font-mono text-xs text-paper/60 uppercase tracking-wider mt-0.5">Regular Schedule</p>
                </div>
              </div>

              {/* 3 Rounds Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Round 1 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 hover:border-blueline/50 transition-colors">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 1
                  </span>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <BrainCircuit className="w-6 h-6 text-blueline-soft" />
                    <h3 className="font-display text-xl font-bold text-paper">Aptitude Test</h3>
                  </div>
                  <p className="text-sm text-paper/70 mb-4 leading-relaxed">
                    Evaluates logical reasoning, quantitative aptitude, analytical thinking, and speed problem solving under timed constraints.
                  </p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1.5 border-t border-paper/10 pt-3">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Logical &amp; Quantitative</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Speed Problem Solving</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Timed Online Platform</li>
                  </ul>
                </div>

                {/* Round 2 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 hover:border-blueline/50 transition-colors">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 2
                  </span>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <Code2 className="w-6 h-6 text-blueline-soft" />
                    <h3 className="font-display text-xl font-bold text-paper">Basic Coding</h3>
                  </div>
                  <p className="text-sm text-paper/70 mb-4 leading-relaxed">
                    Tests fundamental programming syntax, conditions, loops, functions, and arrays with automated testcases.
                  </p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1.5 border-t border-paper/10 pt-3">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Python, Java, C++, JS/TS</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Automated Test Suite</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Official T-Shirt for Qualifiers</li>
                  </ul>
                </div>

                {/* Round 3 */}
                <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 hover:border-blueline/50 transition-colors">
                  <span className="font-mono text-xs font-bold text-blueline-soft uppercase bg-blueline/20 px-3 py-1 rounded-full">
                    Round 3 · Finals
                  </span>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <Trophy className="w-6 h-6 text-blueline-soft" />
                    <h3 className="font-display text-xl font-bold text-paper">Advanced Coding</h3>
                  </div>
                  <p className="text-sm text-paper/70 mb-4 leading-relaxed">
                    Complex algorithmic challenges, data structure optimization, dynamic programming, and high-performance engineering.
                  </p>
                  <ul className="text-xs font-mono text-paper/60 space-y-1.5 border-t border-paper/10 pt-3">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Trees, Graphs &amp; DP</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Gold, Silver &amp; Bronze Medals</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blueline-soft" /> Paid Remote Internship Offers</li>
                  </ul>
                </div>
              </div>

              {/* CTAs for Code Nova */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/education/coding-competition"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-extrabold text-paper shadow-xl shadow-blueline/40 hover:bg-blueline-soft hover:scale-105 transition-all"
                >
                  <Trophy className="w-5 h-5" />
                  <span>Go to Code Nova Page</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
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
          </section>

          {/* Offering 2: AI Course */}
          <section id="offering-ai-courses" className="rounded-3xl border border-grid bg-white p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden">
            {/* Top Badge & Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-blueline">
                <Cpu className="w-5 h-5 text-blueline" />
                <span>Offering 02 · Practical Curriculum</span>
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
