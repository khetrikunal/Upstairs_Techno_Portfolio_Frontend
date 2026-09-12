import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Cpu, Sparkles, BookOpen, GraduationCap, Code, Clock } from "lucide-react";

export const metadata = {
  title: "AI Courses | Upstairs Techno Education",
  description:
    "Explore AI-focused courses designed for School & College students. Learn Artificial Intelligence, Generative AI, PyTorch, RAG Pipelines, and real-world ML engineering.",
};

export default function AICoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        {/* Hero Banner */}
        <section className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4.5 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-6">
              <Cpu className="w-4 h-4 text-blueline-soft" />
              <span>Future-Ready AI Curriculum</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight">
              AI Courses for School & College Cohorts
            </h1>

            <p className="mt-6 text-base sm:text-lg text-paper/80 leading-relaxed max-w-3xl">
              Master Artificial Intelligence, Machine Learning, Generative AI, and LLM engineering through hands-on practical projects built for your skill level.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 mt-12 sm:mt-16">
          <section className="rounded-3xl border border-grid bg-white p-8 sm:p-14 lg:p-16 text-center shadow-sm relative overflow-hidden">
            <div className="mx-auto w-20 h-20 rounded-3xl bg-blueline/10 text-blueline flex items-center justify-center mb-6 shadow-inner">
              <Sparkles className="w-10 h-10 text-blueline animate-pulse" />
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] font-bold mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Course Upcoming Soon
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-4">
              Course Upcoming Soon
            </h2>

            <p className="text-slate text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
              AI Course content and interactive cohorts are currently being prepared for edu.upstairstechno.com.
            </p>

            <div className="max-w-md mx-auto rounded-2xl border border-grid bg-paper p-6 mb-8 text-left">
              <div className="flex items-start gap-3.5">
                <Cpu className="w-5 h-5 text-blueline shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-ink text-sm sm:text-base">Cohort Curriculum Under Preparation</p>
                  <p className="text-xs sm:text-sm text-slate mt-1 leading-relaxed">
                    We are building comprehensive, hands-on modules designed for School and College student cohorts. Follow updates on our official portal.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://edu.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base font-bold text-paper shadow-lg shadow-blueline/25 hover:bg-blueline-soft hover:shadow-xl transition-all"
              >
                <span>Visit edu.upstairstechno.com</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/education/coding-competition"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-7 py-4 text-base font-semibold text-ink hover:border-blueline hover:text-blueline transition-colors"
              >
                Explore Code Nova
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
