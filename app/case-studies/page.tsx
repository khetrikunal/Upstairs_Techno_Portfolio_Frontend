import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { listCaseStudies } from "@/lib/data/repository";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore case studies showing how Upstairs Techno solves complex software and technology challenges.",
  alternates: { canonical: "/case-studies" },
};

export default async function CaseStudiesPage() {
  const studies = await listCaseStudies();
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-28 sm:px-6 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline">Our work</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Case Studies</h1>
        <p className="mt-4 max-w-2xl text-slate">Explore how we address complex challenges with practical technology solutions.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <article key={study.slug} className="clay-card clay-card-hover p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-blueline">{study.industry} · {study.client}</p>
              <h2 className="mt-3 text-2xl font-bold text-ink">{study.title}</h2>
              <p className="mt-3 leading-relaxed text-slate">{study.summary}</p>
              <Link className="mt-5 inline-flex font-semibold text-blueline underline-offset-4 hover:underline" href={`/case-studies/${study.slug}`}>Read case study</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
