import Image from "next/image";
import { CalendarDays } from "lucide-react";

export default function PublicEvents() {
  return (
    <section
      id="public-events"
      className="relative overflow-hidden border-t border-grid bg-paper py-20 text-ink sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blueline/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brass/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <div className="clay-pill clay-pill-accent mb-4">
            <CalendarDays className="h-3.5 w-3.5" />
            Events &amp; Recognition
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl md:text-5xl">
            Public <span className="text-blueline">Events</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-grid bg-white p-2 shadow-xl shadow-ink/10 sm:rounded-3xl sm:p-3">
          <Image
            src="/Research distinction event.jpeg"
            alt="Research Distinction Awards event announcement"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-xl object-contain sm:rounded-2xl"
          />
        </div>

        <p className="mt-7 text-center font-display text-sm font-black tracking-[0.2em] text-blueline sm:mt-9 sm:text-base sm:tracking-[0.28em]">
          MORE UPDATES SOON
        </p>
      </div>
    </section>
  );
}
