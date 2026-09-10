"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
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
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block font-mono text-sm sm:text-[15px] uppercase tracking-[0.3em] text-blueline-soft mb-4 sm:mb-6 font-semibold">
            Next-Gen Software Architecture
          </span>

          <h1 className="font-display font-bold text-hero-heading text-paper tracking-tight max-w-4xl text-balance">
            Enterprise Engineering,{" "}
            <span className="block sm:inline text-white">one level up.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-hero-paragraph text-paper/90 max-w-3xl leading-relaxed"
        >
          We design and build the platforms that financial services, logistics, and
          healthcare companies stake their operations on — modernized without the
          downtime, and instrumented so nothing breaks quietly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <a
            href="/what-we-do"
            data-cursor="View"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-bold text-paper shadow-lg transition-all duration-300 hover:bg-blueline-soft hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,87,255,0.5)] min-h-[52px]"
          >
            Explore Services
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/education/coding-competition/register"
            data-cursor="Compete"
            aria-label="Register for Coding Competition"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-blueline-soft/60 bg-blueline/15 backdrop-blur-sm px-8 py-4 text-base sm:text-lg font-bold text-paper transition-all duration-300 hover:scale-[1.02] hover:border-blueline-soft hover:bg-blueline/25 min-h-[52px]"
          >
            <span>🏆</span>
            Register for Coding Competition
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/#contact"
            data-cursor="Book"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/30 bg-paper/10 backdrop-blur-sm px-8 py-4 text-base sm:text-lg font-bold text-paper transition-all duration-300 hover:scale-[1.02] hover:border-paper/70 hover:bg-paper/20 min-h-[52px]"
          >
            Schedule Consultation
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
