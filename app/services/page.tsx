import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/data/services";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Upstairs Techno",
  description: "Explore Upstairs Techno’s IT consulting, custom software development, BTDS talent development, and technical education offerings.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 sm:pt-10">
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-blueline font-medium">
              Services
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight text-balance">
              Technology services designed to move your business forward.
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate">
              Discover the consulting, software engineering, talent development, and technical education offerings that help organizations scale with confidence.
            </p>
          </div>

          <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block rounded-[2rem] border border-grid bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)] min-h-[260px] flex flex-col justify-between"
              >
                <div>
                  <service.icon className="h-10 w-10 text-blueline transition-transform duration-300 group-hover:rotate-12" />
                  <h2 className="mt-6 font-display text-xl sm:text-2xl font-semibold text-ink">{service.title}</h2>
                  <p className="mt-3.5 text-[15px] sm:text-base leading-relaxed text-slate">{service.shortDescription}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-ink group-hover:text-blueline transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
