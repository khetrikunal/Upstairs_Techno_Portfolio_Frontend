"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, X, ChevronLeft, ChevronRight, Maximize2, ChevronDown } from "lucide-react";

export type OfficePhoto = {
  id: string;
  src: string;
  alt: string;
  tag: string;
  title: string;
};

export const OFFICE_PHOTOS: OfficePhoto[] = [
  {
    id: "exterior",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.08 PM.jpeg",
    alt: "Upstairs Techno Headquarters building exterior and company entrance",
    tag: "Headquarters",
    title: "Upstairs Techno Campus",
  },
  {
    id: "strategy-room",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.21.49 PM.jpeg",
    alt: "Strategic conference room meeting and executive discussion",
    tag: "Conference Hall",
    title: "Strategic Planning Session",
  },
  {
    id: "main-entrance",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.11 PM (1).jpeg",
    alt: "Upstairs Techno branded glass entrance lobby",
    tag: "Reception Lobby",
    title: "Main Entrance",
  },
  {
    id: "engineering-bay",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.20.30 PM.jpeg",
    alt: "Engineering team collaborating at modern workstations",
    tag: "Development Bay",
    title: "Engineering Team Workstations",
  },
  {
    id: "corridor-clocks",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.11 PM (2).jpeg",
    alt: "Executive corridor with world time zone clocks and indoor greenery",
    tag: "Global Operations",
    title: "Executive Corridor & Clocks",
  },
  {
    id: "team-discussion",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.10 PM.jpeg",
    alt: "Team presentation and discussion in conference room",
    tag: "Collaboration",
    title: "Knowledge Sharing Session",
  },
  {
    id: "conference-hallway",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.12 PM.jpeg",
    alt: "Glass partition conference hallway with marble flooring",
    tag: "Architecture",
    title: "Glass Partition Conference Hallway",
  },
  {
    id: "zen-workstations",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.11 PM.jpeg",
    alt: "Ergonomic workstations with plant wall and calm environment",
    tag: "Work Environment",
    title: "Ergonomic Desks & Zen Wall",
  },
  {
    id: "team-standup",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.18.09 PM.jpeg",
    alt: "Team members gathering for daily standup meeting",
    tag: "Teamwork",
    title: "Daily Standup & Alignment",
  },
  {
    id: "glass-meeting",
    src: "/Office pic/WhatsApp Image 2026-10-02 at 6.22.51 PM.jpeg",
    alt: "Executive meeting viewed through architectural glass partition",
    tag: "Executive Board",
    title: "Conference Meeting in Progress",
  },
];

export default function OfficeCollage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Close lightbox on Escape and support keyboard arrow navigation
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev === 0 ? OFFICE_PHOTOS.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev === OFFICE_PHOTOS.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  // Lock scroll when lightbox modal is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activePhotoIndex]);

  const activePhoto = activePhotoIndex !== null ? OFFICE_PHOTOS[activePhotoIndex] : null;

  return (
    <section id="our-workspace" className="relative py-12 sm:py-16 bg-paper text-ink overflow-hidden border-t border-grid scroll-mt-24 sm:scroll-mt-28">
      {/* Anchors for backward compatibility */}
      <div id="workplace" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div id="workspace" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Subtle blueprint accent background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      {/* Decorative gradient blur accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blueline/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="clay-pill clay-pill-accent mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Inside Upstairs Techno
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-ink">
            Our <span className="text-blueline">Workspace</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate leading-relaxed max-w-2xl mx-auto">
            A glimpse into the people, workspace, and environment behind Upstairs Techno.
          </p>
        </div>

        {/* ── Collage Grid ── */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Top Feature Mosaic (Hero Exterior + 3 Companion Spaces) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
            {/* 1. Large Tall Exterior Building */}
            <div
              onClick={() => setActivePhotoIndex(0)}
              className="lg:col-span-5 relative group overflow-hidden rounded-2xl sm:rounded-3xl clay-card clay-card-hover p-0 cursor-pointer h-64 sm:h-72 lg:h-[340px]"
            >
              <Image
                src={OFFICE_PHOTOS[0].src}
                alt={OFFICE_PHOTOS[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
              <PhotoCardOverlay photo={OFFICE_PHOTOS[0]} />
            </div>

            {/* Right Cluster: 3 photos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {/* 2. Conference Room Strategy */}
              <div
                onClick={() => setActivePhotoIndex(1)}
                className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl clay-card clay-card-hover p-0 cursor-pointer h-64 sm:h-72 lg:h-[340px] ${isExpanded ? "" : "sm:col-span-2 lg:col-span-2"}`}
              >
                <Image
                  src={OFFICE_PHOTOS[1].src}
                  alt={OFFICE_PHOTOS[1].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 29vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <PhotoCardOverlay photo={OFFICE_PHOTOS[1]} />
              </div>

              {isExpanded && <>
              {/* 3. Branded Main Entrance */}
              <div
                onClick={() => setActivePhotoIndex(2)}
                className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-grid/80 bg-paper-dim shadow-sm hover:shadow-xl hover:border-blueline/50 transition-all duration-300 cursor-pointer h-64 sm:h-72"
              >
                <Image
                  src={OFFICE_PHOTOS[2].src}
                  alt={OFFICE_PHOTOS[2].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 29vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <PhotoCardOverlay photo={OFFICE_PHOTOS[2]} />
              </div>

              {/* 4. Full Engineering Workstation Bay */}
              <div
                onClick={() => setActivePhotoIndex(3)}
                className="sm:col-span-2 relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-grid/80 bg-paper-dim shadow-sm hover:shadow-xl hover:border-blueline/50 transition-all duration-300 cursor-pointer h-64 sm:h-72"
              >
                <Image
                  src={OFFICE_PHOTOS[3].src}
                  alt={OFFICE_PHOTOS[3].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <PhotoCardOverlay photo={OFFICE_PHOTOS[3]} />
              </div>
              </>}
            </div>
          </div>

          {/* Lower Grid (6 photos in balanced responsive columns) */}
          <AnimatePresence initial={false}>
          {isExpanded && <motion.div
            key="more-workspace-photos"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          ><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pt-4 sm:pt-5 lg:pt-6">
            {OFFICE_PHOTOS.slice(4).map((photo, idx) => {
              const globalIndex = idx + 4;
              return (
                <div
                  key={photo.id}
                  onClick={() => setActivePhotoIndex(globalIndex)}
                  className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-grid/80 bg-paper-dim shadow-sm hover:shadow-xl hover:border-blueline/50 transition-all duration-300 cursor-pointer h-56 sm:h-64 lg:h-[260px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <PhotoCardOverlay photo={photo} />
                </div>
              );
            })}
          </div>
          </motion.div>}
          </AnimatePresence>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            aria-expanded={isExpanded}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blueline/30 bg-paper px-6 py-2.5 font-display text-sm font-bold text-blueline shadow-sm transition-all duration-200 hover:border-blueline hover:bg-blueline hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline focus-visible:ring-offset-2"
          >
            {isExpanded ? "View Less" : "View More"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Interactive Lightbox Modal ── */}
      <AnimatePresence>
        {activePhotoIndex !== null && activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Close image viewer"
              className="absolute top-5 right-5 z-20 rounded-full bg-paper/10 hover:bg-paper/20 p-2.5 text-paper transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(
                  activePhotoIndex === 0
                    ? OFFICE_PHOTOS.length - 1
                    : activePhotoIndex - 1
                );
              }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-6 z-20 rounded-full bg-paper/10 hover:bg-paper/25 p-3 text-paper transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(
                  activePhotoIndex === OFFICE_PHOTOS.length - 1
                    ? 0
                    : activePhotoIndex + 1
                );
              }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-6 z-20 rounded-full bg-paper/10 hover:bg-paper/25 p-3 text-paper transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-3 flex items-center justify-between w-full px-2 text-paper">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-blueline-soft font-semibold">
                    {activePhoto.tag}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold">
                    {activePhoto.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-paper/60">
                  {activePhotoIndex + 1} / {OFFICE_PHOTOS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Subtle Photo Card Overlay ──
function PhotoCardOverlay({ photo }: { photo: OfficePhoto }) {
  return (
    <>
      {/* Gradient shade that intensifies subtly on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

      {/* Expand icon in top right */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full bg-paper/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-white">
        <Maximize2 className="w-4 h-4" />
      </div>

      {/* Info Label pinned to bottom */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 pointer-events-none">
        <span className="inline-block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blueline-soft bg-ink/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full mb-1 border border-blueline/30">
          {photo.tag}
        </span>
        <h3 className="font-display text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm group-hover:text-blueline-soft transition-colors duration-200">
          {photo.title}
        </h3>
      </div>
    </>
  );
}
