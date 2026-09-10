import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerProjectCard from "@/components/PartnerProjectCard";
import {
  PARTNERS,
  getPartnerBySlug,
  getAllPartnerSlugs,
} from "@/lib/data/partners";

// ---------------------------------------------------------------------------
// Static params — pre-render one page per partner at build time
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  return getAllPartnerSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata per partner
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    return {
      title: "Partner Not Found | Upstairs Techno",
    };
  }

  return {
    title: `${partner.name} Projects | Upstairs Techno`,
    description: `Explore the ${partner.projects.length} project${partner.projects.length !== 1 ? "s" : ""} Upstairs Techno has delivered for ${partner.name}${partner.industry ? ` — ${partner.industry}` : ""}.`,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-20">
        {/* Partner hero */}
        <section className="relative bg-ink text-paper py-14 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />

          {/* Decorative glows */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blueline/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] bg-brass/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Breadcrumb */}
            <a
              href="/partners"
              className="inline-flex items-center gap-1.5 text-paper/60 hover:text-paper text-sm font-mono font-medium transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              All Partners
            </a>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              {/* Logo */}
              <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-xl border border-paper/20 overflow-hidden shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-3 font-bold">
                  <Building2 className="w-3 h-3" />
                  Partner Company
                </div>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-paper leading-tight text-balance">
                  {partner.name}
                </h1>

                {partner.industry && (
                  <p className="mt-1.5 text-sm font-mono font-semibold text-blueline-soft uppercase tracking-widest">
                    {partner.industry}
                  </p>
                )}

                <p className="mt-3 text-base sm:text-lg text-paper/75 max-w-2xl leading-relaxed">
                  {partner.shortDescription}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6 sm:gap-10 border-t border-paper/10 pt-8">
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-blueline-soft">
                  {partner.projects.length}
                </span>
                <span className="text-xs sm:text-sm text-paper/60 font-mono font-medium">
                  {partner.projects.length === 1
                    ? "Project Delivered"
                    : "Projects Delivered"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-2 font-medium">
                Project Portfolio
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
                Work Delivered for{" "}
                <span className="text-blueline">{partner.name}</span>
              </h2>
            </div>
          </div>

          {partner.projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {partner.projects.map((project, i) => (
                <PartnerProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-grid rounded-2xl">
              <p className="text-slate font-mono text-sm">
                No projects listed yet.
              </p>
            </div>
          )}
        </section>

        {/* Bottom CTA strip */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-4">
          <div className="rounded-2xl bg-ink text-paper p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
            <div className="relative">
              <p className="font-mono text-xs tracking-widest uppercase text-blueline-soft mb-1 font-semibold">
                Want to be a partner?
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-paper">
                Let&apos;s build something together.
              </h3>
            </div>
            <a
              href="/#contact"
              className="relative group inline-flex items-center gap-2 rounded-full bg-blueline px-6 py-3 text-sm font-bold text-paper shadow-lg shadow-blueline/25 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-0.5 shrink-0"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>

        {/* Back link */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-10">
          <a
            href="/partners"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-blueline transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to All Partners
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
