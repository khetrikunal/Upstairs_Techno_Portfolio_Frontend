import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPageClient from "@/components/ProjectsPageClient";
import { ALL_PROJECTS, PROJECT_CATEGORIES } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Our Products | Upstairs Techno",
  description:
    "Explore Upstairs Techno's portfolio of enterprise software products across E-commerce, ERP, CRM, Healthcare, FinTech, Logistics, and more.",
};

export default function ProjectsPage() {
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
              <span>🗂</span>
              <span>Enterprise Software Portfolio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight max-w-4xl">
              Products Across{" "}
              <span className="text-blueline-soft">{PROJECT_CATEGORIES.length} Industries</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-paper/80 leading-relaxed max-w-3xl">
              From multi-vendor e-commerce platforms to hospital management systems and payment gateways — explore the full depth of enterprise software we've designed and delivered.
            </p>

            {/* Stats strip */}
            <div className="mt-10 flex flex-wrap gap-4 sm:gap-8">
              <StatChip label="Total Products" value={ALL_PROJECTS.length.toString()} />
              <StatChip label="Categories" value={PROJECT_CATEGORIES.length.toString()} />
              <StatChip
                label="Live Products"
                value={ALL_PROJECTS.filter((p) => p.status === "Live").length.toString()}
              />
              <StatChip
                label="Completed"
                value={ALL_PROJECTS.filter((p) => p.status === "Completed").length.toString()}
              />
            </div>
          </div>
        </section>

        {/* Category quick-scroll bar (mobile/tablet) */}
        <div className="lg:hidden border-b border-grid bg-white sticky top-[4.5rem] z-30 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 px-4 py-3 w-max min-w-full">
            <CategoryPill label="All" count={ALL_PROJECTS.length} active={false} />
            {PROJECT_CATEGORIES.map((cat) => {
              const count = ALL_PROJECTS.filter((p) => p.category === cat.id).length;
              return (
                <CategoryPill
                  key={cat.id}
                  label={`${cat.emoji} ${cat.label}`}
                  count={count}
                  active={false}
                  color={cat.color}
                />
              );
            })}
          </div>
        </div>

        {/* Main content area: sidebar + grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-14">
          <ProjectsPageClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl sm:text-3xl font-extrabold text-blueline-soft">{value}</span>
      <span className="text-xs sm:text-sm text-paper/60 font-mono font-medium">{label}</span>
    </div>
  );
}

function CategoryPill({
  label,
  count,
  active,
  color,
}: {
  label: string;
  count: number;
  active: boolean;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono font-semibold whitespace-nowrap ${
        active ? "text-paper" : "bg-paper-dim text-ink"
      }`}
      style={active && color ? { backgroundColor: color } : {}}
    >
      {label}
      <span className={`${active ? "bg-paper/20 text-paper/80" : "bg-grid text-slate"} rounded-full px-1.5 py-0.5 text-[10px]`}>
        {count}
      </span>
    </span>
  );
}
