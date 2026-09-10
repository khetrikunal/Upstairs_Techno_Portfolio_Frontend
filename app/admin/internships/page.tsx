import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Admin | Upstairs Techno",
  robots: { index: false, follow: false },
};

export default function AdminInternshipsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24 flex items-center justify-center">
        <div className="mx-auto max-w-lg px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blueline/10 text-blueline flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-3">
            Applications are managed via email
          </h1>
          <p className="text-base sm:text-lg text-slate leading-relaxed mb-8">
            Internship applications submitted through this portfolio are sent
            directly to{" "}
            <a
              href="mailto:contact@upstairstechno.com"
              className="text-blueline font-semibold hover:underline"
            >
              contact@upstairstechno.com
            </a>
            . There is no backend admin panel configured for this portfolio
            site.
          </p>
          <a
            href="/career"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-7 py-3.5 text-base font-bold hover:bg-blueline transition-colors"
          >
            Back to Careers <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
