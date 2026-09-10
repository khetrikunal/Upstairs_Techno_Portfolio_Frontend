import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Cpu, Cloud, Database, Lock, Code } from "lucide-react";

export const metadata = {
  title: "Corporate Training Solutions | Upstairs Techno Education",
  description:
    "Customized enterprise technical training programs for companies in AI & Generative AI, Cloud Technologies, Software Architecture, Data & Cybersecurity.",
};

const AREAS = [
  { title: "AI & Generative AI", icon: Cpu, desc: "Empower engineering teams to leverage LLMs, prompt engineering, and RAG architectures." },
  { title: "Software Development", icon: Code, desc: "Modern full-stack practices, clean architecture, microservices, and automated testing." },
  { title: "Cloud & DevOps", icon: Cloud, desc: "Docker, Kubernetes, AWS/Azure infrastructure automation, and CI/CD pipelines." },
  { title: "Data & Analytics", icon: Database, desc: "Enterprise data engineering, real-time analytics, and data pipeline optimization." },
  { title: "Cybersecurity", icon: Lock, desc: "Secure coding practices, cloud security posture, and compliance frameworks." },
  { title: "Custom Training Solutions", icon: Building2, desc: "Bespoke tech training tailored to your company's specific stack and business domain." },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        <section className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4.5 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-6">
              <Building2 className="w-4 h-4 text-blueline-soft" />
              <span>Enterprise Upskilling</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight">
              Corporate Training Solutions
            </h1>

            <p className="mt-6 text-base sm:text-lg text-paper/80 leading-relaxed max-w-3xl">
              Upskill your engineering and technology teams with custom-curated training programs taught by active enterprise practitioners.
            </p>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-lg font-extrabold text-paper shadow-xl hover:bg-blueline-soft transition-colors"
              >
                <span>Request Corporate Training</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 mt-16 sm:mt-24 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="rounded-2xl border border-grid bg-paper p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blueline/10 text-blueline flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-ink mb-2">{area.title}</h3>
                    <p className="text-xs sm:text-sm text-slate leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <section className="rounded-3xl border border-grid bg-paper p-8 sm:p-12 text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink mb-4">
              Need a Custom Training Program for Your Organization?
            </h2>
            <p className="text-slate text-base max-w-xl mx-auto mb-8">
              We design specialized workshops, bootcamp cohorts, and executive technical briefings aligned to your tech stack.
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-bold text-paper hover:bg-blueline transition-colors"
            >
              <span>Contact Enterprise Training Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
