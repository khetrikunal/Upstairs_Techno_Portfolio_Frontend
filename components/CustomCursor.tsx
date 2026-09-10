"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      setLabel(target ? target.getAttribute("data-cursor") : null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[60] hidden md:flex items-center justify-center transition-transform duration-150 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${label ? 1 : 0})`,
      }}
    >
      <span className="whitespace-nowrap rounded-full bg-ink text-paper font-mono text-[11px] tracking-wide px-3 py-1.5 shadow-lg">
        {label}
      </span>
    </div>
  );
}
