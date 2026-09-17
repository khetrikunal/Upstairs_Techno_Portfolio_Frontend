import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type InformationSection = {
  title: string;
  paragraphs: string[];
};

export default function InformationPage({
  eyebrow = "Information",
  title,
  intro,
  sections,
  content,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  sections: InformationSection[];
  content?: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-28 sm:pt-36 pb-16 sm:pb-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="rounded-[2rem] border border-grid bg-white p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_-40px_rgba(14,21,36,0.3)]">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline font-medium">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">{intro}</p>
            {content ?? (
              <div className="mt-10 space-y-8">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
                    <div className="mt-3 space-y-3 text-base leading-relaxed text-slate">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </section>
                ))}
              </div>
            )}
            <Link href="/contact-us" className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-blueline">
              Contact Upstairs Techno
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}