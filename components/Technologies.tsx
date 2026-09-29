"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ToolkitItem = {
  name: string;
  src: string;
};

const TOOLKIT: ToolkitItem[] = [
  { name: "React", src: "/Toolkit/react.png" },
  { name: "Node.js", src: "/Toolkit/Node.js_logo.svg.webp" },
  { name: "Python", src: "/Toolkit/python.jpg" },
  { name: "Spring Boot", src: "/Toolkit/Springboot.jpg" },
  { name: "dotnet", src: "/Toolkit/dotnet.png" },
  { name: "PostgreSQL", src: "/Toolkit/PostgresSQL.png" },
  { name: "AWS", src: "/Toolkit/AWS.jpg" },
];

// Double the items so each repeating half is long enough for any screen width
const MARQUEE_SET = [...TOOLKIT, ...TOOLKIT];

function ToolkitCard({ tool }: { tool: ToolkitItem }) {
  return (
    <div className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-grid/80 bg-white px-5 sm:px-6 py-3.5 sm:py-4 shadow-sm hover:border-blueline/50 hover:shadow-md transition-all duration-300 shrink-0 select-none">
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center shrink-0">
        <Image
          src={tool.src}
          alt={`${tool.name} logo`}
          width={48}
          height={48}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="font-display text-base sm:text-lg font-bold text-ink whitespace-nowrap tracking-tight">
        {tool.name}
      </span>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="py-16 sm:py-20 md:py-24 bg-paper-dim/60 overflow-hidden">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-semibold">
            THE TOOLKIT
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink text-balance">
            The tools we use to build your product.
          </h2>
        </motion.div>
      </div>

      {/* Continuous Infinite Scrolling Row */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right gradient fade masks for smooth transition */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-paper-dim via-paper-dim/40 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-paper-dim via-paper-dim/40 to-transparent z-10" />

        {/* Marquee Track: Two identical halves moving seamlessly from right to left */}
        <div className="animate-toolkit-loop">
          {/* Half 1 */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {MARQUEE_SET.map((tool, idx) => (
              <ToolkitCard key={`set1-${tool.name}-${idx}`} tool={tool} />
            ))}
          </div>

          {/* Half 2 (identical duplicate for seamless infinite loop) */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {MARQUEE_SET.map((tool, idx) => (
              <ToolkitCard key={`set2-${tool.name}-${idx}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
