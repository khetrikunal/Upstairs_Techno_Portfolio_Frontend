import { ArrowLeft, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PartnerNotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-20 flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blueline/10 border border-blueline/20 mb-6">
            <Building2 className="w-9 h-9 text-blueline" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-3">
            Partner Not Found
          </h1>
          <p className="text-base sm:text-lg text-slate leading-relaxed mb-8">
            We couldn&apos;t find a partner matching that URL. It may have been
            moved or does not exist.
          </p>

          <a
            href="/partners"
            className="group inline-flex items-center gap-2 rounded-full bg-blueline px-6 py-3 text-sm font-bold text-paper shadow-lg shadow-blueline/25 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            View All Partners
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
