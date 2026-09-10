import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCaseStudy } from "@/lib/data/repository";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate hover:text-blueline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>

          <p className="mt-6 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline font-medium">
            {study.industry} · {study.client}
          </p>
          <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink text-balance tracking-tight">
            {study.title}
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate leading-relaxed">{study.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-grid px-3.5 py-1.5 text-xs sm:text-sm font-mono text-slate bg-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {study.coverImage && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-grid shadow-sm max-h-[360px] bg-ink">
              <img
                src={study.coverImage}
                alt={study.title}
                className="w-full h-full max-h-[360px] object-cover block"
              />
            </div>
          )}

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">The Challenge</h2>
              <p className="mt-3 text-[15px] sm:text-base text-slate leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">The Solution</h2>
              <p className="mt-3 text-[15px] sm:text-base text-slate leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 rounded-2xl bg-ink text-paper p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-white">Results</h2>
            <ul className="mt-4 space-y-3">
              {study.results.map((result) => (
                <li key={result} className="flex items-start gap-3 text-[15px] sm:text-base text-paper/90 leading-relaxed">
                  <Check className="w-5 h-5 text-blueline-soft mt-0.5 shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
