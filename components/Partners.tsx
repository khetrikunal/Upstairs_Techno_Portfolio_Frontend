"use client";

import { Building2 } from "lucide-react";
import Image from "next/image";
import { PARTNERS } from "@/lib/data/partners";

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative py-20 sm:py-28 bg-ink text-paper overflow-hidden"
    >
      {/* Blueprint grid background — dark variant */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-70 pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blueline/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brass/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-[0.2em] text-blueline-soft mb-4 font-bold">
            <Building2 className="w-3.5 h-3.5" />
            Partners
          </div>
          <h2 className="font-display text-section-heading font-bold text-paper tracking-tight text-balance">
            Companies We <span className="text-blueline-soft">Work With</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-paper/70 leading-relaxed max-w-xl mx-auto">
            Businesses and organizations that rely on Upstairs Techno to build reliable software and digital tools.
          </p>
        </div>
      </div>

      {/* ── Infinite marquee strip ── */}
      {/* Full-width — intentionally breaks out of the max-w container */}
      <div
        className="relative w-full overflow-hidden"
        aria-label="Partner logos"
      >
        {/* Left fade mask */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-36 z-10"
          style={{ background: "linear-gradient(to right, #0e1524 0%, transparent 100%)" }}
        />
        {/* Right fade mask */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-36 z-10"
          style={{ background: "linear-gradient(to left, #0e1524 0%, transparent 100%)" }}
        />

        {/*
          The inner track is rendered TWICE side-by-side so its total width = 2×
          one logo set. The CSS animation translates -50% (= one set width),
          making the loop perfectly seamless with no jump.
        */}
        <div className="animate-partner-loop py-4">
          {/* Set 1 */}
          {PARTNERS.map((partner) => (
            <LogoCard key={`a-${partner.slug}`} partner={partner} />
          ))}
          {/* Set 2 — identical clone to fill the loop */}
          {PARTNERS.map((partner) => (
            <LogoCard key={`b-${partner.slug}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Internal logo card — no border box, just logo + name ──────────────────────
function LogoCard({ partner }: { partner: (typeof PARTNERS)[number] }) {
  return (
    <div className="flex flex-col items-center gap-3 mx-6 sm:mx-8 shrink-0">
      {/* Logo container */}
      <div className="flex items-center justify-center w-24 h-16 sm:w-28 sm:h-20 rounded-xl bg-white/95 shadow-sm overflow-hidden">
        <div className="relative w-20 h-12 sm:w-24 sm:h-16">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
      </div>
      {/* Partner name */}
      <p className="font-display text-xs sm:text-sm font-semibold text-paper/80 text-center whitespace-nowrap">
        {partner.name}
      </p>
    </div>
  );
}
