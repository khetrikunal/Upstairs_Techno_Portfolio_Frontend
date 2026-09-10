import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCareerService, listCareerServices } from "@/lib/data/repository";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  FileCheck,
  GraduationCap,
  HelpCircle,
  Info,
  Sparkles,
  Users,
} from "lucide-react";

export async function generateStaticParams() {
  const services = await listCareerServices();
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = await getCareerService(id);
  if (!service) return { title: "Career Service | Upstairs Techno" };

  return {
    title: `${service.title} | Career & Skill Accelerator | Upstairs Techno`,
    description: service.shortDescription,
  };
}

const serviceIcons: Record<string, typeof Code2> = {
  btds: GraduationCap,
  "coding-competition": Code2,
  "ai-course": Cpu,
  internship: GraduationCap,
};

export default async function CareerServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getCareerService(id);

  if (!service) {
    notFound();
  }

  const IconComponent = serviceIcons[service.id] || Award;
  const isInternship = service.id === "internship";

  if (service.id === "ai-course") {
    return (
      <>
        <Navbar />
        <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
          {/* Banner / Hero Section */}
          <section className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-6">
                <IconComponent className="w-4 h-4 text-blueline-soft" />
                <span>{service.category}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance">
                {service.title}
              </h1>

              <p className="mt-4 text-xl sm:text-2xl font-medium text-blueline-soft text-balance">
                {service.headline}
              </p>
            </div>
          </section>

          {/* Uploading Soon State */}
          <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 mt-12 sm:mt-16">
            <section className="rounded-3xl border border-grid bg-white p-8 sm:p-14 lg:p-16 text-center shadow-sm relative overflow-hidden">
              <div className="mx-auto w-20 h-20 rounded-3xl bg-blueline/10 text-blueline flex items-center justify-center mb-6 shadow-inner">
                <Sparkles className="w-10 h-10 text-blueline animate-pulse" />
              </div>

              <span className="inline-block rounded-full bg-blueline/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-blueline font-bold mb-4">
                Coming Soon
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-4">
                Uploading Soon
              </h2>

              <p className="text-slate text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
                AI Course content is currently being prepared. Please check back soon.
              </p>

              <div className="max-w-md mx-auto rounded-2xl border border-grid bg-paper p-6 mb-8 text-left">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-blueline shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-semibold text-ink text-sm sm:text-base">Curriculum in Preparation</p>
                    <p className="text-xs sm:text-sm text-slate mt-1 leading-relaxed">
                      Our engineering mentors are preparing hands-on AI modules, real-world case studies, and practical project tracks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/career#career-services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base font-bold text-paper shadow-lg shadow-blueline/25 hover:bg-blueline-soft hover:shadow-xl transition-all"
                >
                  <span>Explore Other Career Programs</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-7 py-4 text-base font-semibold text-ink hover:border-blueline hover:text-blueline transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        {/* Banner / Hero Section */}
        <section className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-6">
              <IconComponent className="w-4 h-4 text-blueline-soft" />
              <span>{service.category}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance">
              {service.title}
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-medium text-blueline-soft text-balance">
              {service.headline}
            </p>

            <p className="mt-6 text-base sm:text-lg text-paper/80 leading-relaxed max-w-3xl">
              {service.overview}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {isInternship ? (
                <a
                  href="/career/services/internship/apply"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-lg font-extrabold text-paper shadow-xl shadow-blueline/30 transition-all duration-300 hover:bg-blueline-soft hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <span>Apply for Internship</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-lg font-bold text-paper shadow-xl shadow-blueline/30 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-0.5"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}

              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-paper/70 font-mono bg-paper/5 px-4 py-3 rounded-full border border-paper/10">
                <Clock className="w-4 h-4 text-blueline-soft" />
                <span>Duration: {service.duration}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 space-y-16 sm:space-y-20">
          {/* Detailed Overview Card */}
          <section className="rounded-3xl border border-grid bg-paper p-8 sm:p-12 shadow-sm">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-4">
              Program Overview
            </h2>
            <p className="text-slate text-base sm:text-lg leading-relaxed">{service.description}</p>
          </section>

          {/* Benefits & What You Will Gain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Benefits */}
            <section className="rounded-3xl border border-grid bg-paper p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blueline mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Program Advantages</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-6">Key Benefits</h3>
                <ul className="space-y-3.5">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-ink/90">
                      <CheckCircle2 className="w-5 h-5 text-blueline shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* What You Will Gain */}
            <section className="rounded-3xl border border-grid bg-paper p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blueline mb-4">
                  <Award className="w-4 h-4" />
                  <span>Learning Outcomes</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-6">What You Will Gain</h3>
                <ul className="space-y-3.5">
                  {service.whatYouWillGain.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-ink/90">
                      <CheckCircle2 className="w-5 h-5 text-blueline shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Eligibility & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="rounded-3xl border border-grid bg-paper p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blueline" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-2.5">
                {service.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                    <span className="text-blueline font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-grid bg-paper p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blueline" />
                Prerequisites & Requirements
              </h3>
              <ul className="space-y-2.5">
                {service.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                    <span className="text-blueline font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Process / How It Works */}
          <section className="rounded-3xl border border-grid bg-paper p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-mono text-xs uppercase tracking-widest text-blueline font-semibold mb-2">
                Step-by-Step Pathway
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="rounded-2xl border border-grid/80 bg-paper-dim/40 p-6 relative">
                  <div className="w-10 h-10 rounded-xl bg-blueline text-paper font-mono font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Information Box */}
          <section className="rounded-3xl border border-blueline/30 bg-blueline/[0.04] p-8">
            <h3 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blueline" />
              Important Information
            </h3>
            <ul className="space-y-2.5">
              {service.importantInfo.map((info, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <span className="text-blueline font-bold">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section className="rounded-3xl border border-grid bg-paper p-8 sm:p-12 shadow-sm">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-8 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-blueline" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-grid/60 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="font-display font-bold text-lg text-ink mb-2">{faq.question}</h4>
                  <p className="text-slate text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Sticky/Prominent CTA Card */}
          <section className="rounded-3xl bg-ink text-paper p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-50" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-paper mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-paper/80 text-base sm:text-lg mb-8">
                {isInternship
                  ? "Submit your application today to start your journey as an Engineering Intern at Upstairs Techno."
                  : `Join our next ${service.title} program and elevate your engineering career.`}
              </p>

              {isInternship ? (
                <a
                  href="/career/services/internship/apply"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-9 py-4.5 text-lg font-extrabold text-paper shadow-2xl shadow-blueline/40 transition-all duration-300 hover:bg-blueline-soft hover:scale-105"
                >
                  <span>Apply for Internship</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              ) : (
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-9 py-4.5 text-lg font-extrabold text-paper shadow-2xl shadow-blueline/40 transition-all duration-300 hover:bg-blueline-soft hover:scale-105"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
