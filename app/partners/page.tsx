import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PARTNERS } from "@/lib/data/partners";

export const metadata: Metadata = {
  title: "Our Partners | Upstairs Techno",
  description:
    "Companies and businesses that Upstairs Techno has built enterprise software for — from manufacturing ERP systems to full-stack web platforms.",
};

export default function PartnersPage() {
  const totalProjects = PARTNERS.reduce(
    (sum, p) => sum + p.projects.length,
    0
  );

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-20">
        {/* Page hero */}
        <section className="relative bg-ink text-paper py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />

          {/* Decorative glows */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blueline/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blueline/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-5 font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              Partner Companies
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight max-w-4xl">
              Companies We&apos;ve{" "}
              <span className="text-blueline-soft">Built For</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-paper/80 leading-relaxed max-w-3xl">
              Upstairs Techno has partnered with businesses across industries to
              design, build, and deliver enterprise software that drives
              measurable results.
            </p>

            {/* Stats strip */}
            <div className="mt-10 flex flex-wrap gap-6 sm:gap-10">
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-blueline-soft">
                  {PARTNERS.length}
                </span>
                <span className="text-xs sm:text-sm text-paper/60 font-mono font-medium">
                  Partner Companies
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-blueline-soft">
                  {totalProjects}
                </span>
                <span className="text-xs sm:text-sm text-paper/60 font-mono font-medium">
                  Projects Delivered
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Partners grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-8 font-medium">
            All Partners
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <a
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group relative flex flex-col rounded-2xl border border-grid bg-white shadow-sm hover:shadow-xl hover:border-blueline/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                aria-label={`View projects for ${partner.name}`}
              >
                {/* Top accent bar */}
                <div className="h-1.5 shrink-0 bg-gradient-to-r from-blueline to-blueline-soft" />

                <div className="flex flex-col p-6 sm:p-7">
                  {/* Logo */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-paper-dim border border-grid shadow-sm mb-5 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <div className="relative w-16 h-16">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <h2 className="font-display text-xl font-bold text-ink leading-snug group-hover:text-blueline transition-colors duration-200 mb-1">
                    {partner.name}
                  </h2>

                  {partner.industry && (
                    <p className="text-xs font-mono font-semibold text-blueline uppercase tracking-widest mb-2">
                      {partner.industry}
                    </p>
                  )}

                  <p className="text-sm text-slate leading-relaxed mb-4 flex-1">
                    {partner.shortDescription}
                  </p>

                  {/* Project count */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blueline/8 border border-blueline/20 px-3 py-1 text-xs font-mono font-semibold text-blueline w-fit mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blueline animate-pulse" />
                    {partner.projects.length}{" "}
                    {partner.projects.length === 1 ? "Project" : "Projects"}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-end pt-4 border-t border-grid">
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-blueline group-hover:gap-2 transition-all duration-200">
                      View Projects
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
