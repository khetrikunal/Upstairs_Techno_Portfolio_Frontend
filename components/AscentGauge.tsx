"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FLOORS = ["Ground", "Discover", "Build", "Prove", "Scale", "Summit"];

export default function AscentGauge() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const height = useTransform(smoothed, (v) => `${v * 100}%`);
  const [floorIndex, setFloorIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setFloorIndex(Math.min(FLOORS.length - 1, Math.floor(v * FLOORS.length)));
      setVisible(v > 0.02);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <div
      aria-hidden="true"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2 pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms ease" }}
    >
      <span className="font-mono text-[10px] tracking-widest text-slate rotate-0">
        {String(floorIndex + 1).padStart(2, "0")}
      </span>
      <div className="relative w-[2px] h-40 bg-grid/70 overflow-hidden rounded-full">
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-blueline rounded-full"
          style={{ height }}
        />
      </div>
      <span className="font-mono text-[9px] tracking-widest text-slate [writing-mode:vertical-rl] uppercase">
        {FLOORS[floorIndex]}
      </span>
    </div>
  );
}
