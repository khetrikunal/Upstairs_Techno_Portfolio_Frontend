import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data/services";

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 sm:pt-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
              What We Do
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink text-balance tracking-tight">
              Services built to move your business forward.
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate leading-relaxed">
              Explore our core disciplines, from IT strategy and custom software engineering to talent development pipelines and technical education.
            </p>
          </div>

          <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>

          <div className="mt-14 sm:mt-16 rounded-3xl border border-grid bg-blueline/5 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-2 font-medium">
                Ready to work together?
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Let&apos;s plan the service path that fits your business.
              </h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition duration-300 hover:bg-blueline shrink-0 min-h-[48px]"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
