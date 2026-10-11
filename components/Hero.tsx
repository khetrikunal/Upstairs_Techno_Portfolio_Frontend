"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { EASE } from "@/components/ui/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-ink text-paper"
    >
      {/* Background video with scaling */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full opacity-60 scale-105"
      >
        <source src="/Background%20Video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/90" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.18em] text-blueline-soft mb-4 sm:mb-6 font-semibold uppercase px-4 py-1.5 rounded-full bg-blueline/15 border border-blueline-soft/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] animate-float">
            Software · AI · Education · Talent
          </span>

          <h1 className="font-display font-black text-hero-heading text-paper tracking-tight max-w-4xl text-balance">
            We Build Software.{" "}
            <span className="block sm:inline text-white">We Build Careers.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <Link
            href="/what-we-do"
            className="group clay-btn clay-btn-primary px-8 py-4 text-base sm:text-lg min-h-[52px]"
          >
            Explore Services
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="#our-workspace"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("our-workspace") || document.getElementById("workplace");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#our-workspace");
              }
            }}
            aria-label="Explore Our Workspace"
            className="group clay-btn clay-btn-ghost-dark px-6 py-3.5 text-sm sm:text-base min-h-[48px]"
          >
            Explore Our Workspace
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-paper/70"
        >
          <span className="font-mono text-xs tracking-widest uppercase font-semibold">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
