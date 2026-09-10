import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getService, services } from "@/lib/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.title} | What We Do | Upstairs Techno`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <article className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-slate">
            <Link href="/" className="hover:text-blueline transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/what-we-do" className="hover:text-blueline transition-colors">
              What We Do
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold">{service.title}</span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
                {service.title}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink text-balance tracking-tight">
                {service.title}
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate leading-relaxed">
                {service.intro}
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition duration-300 hover:bg-blueline min-h-[48px]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <section>
              <div className="rounded-3xl border border-grid bg-white p-10">
                <h2 className="font-display text-2xl font-semibold text-ink">About the Service</h2>
                <div className="mt-6 space-y-5 text-slate">
                  {service.about.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-grid bg-white p-10">
                  <h2 className="font-display text-xl font-semibold text-ink">What We Offer</h2>
                  <div className="mt-6 space-y-4">
                    {service.subServices.map((item) => (
                      <div key={item.title} className="rounded-3xl bg-paper p-5">
                        <h3 className="font-medium text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-grid bg-white p-10">
                  <h2 className="font-display text-xl font-semibold text-ink">Process</h2>
                  <ol className="mt-6 space-y-4">
                    {service.process.map((step, index) => (
                      <li key={step} className="flex gap-4 rounded-3xl bg-paper p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-paper font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-sm text-slate leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-grid bg-white p-10">
                <h2 className="font-display text-xl font-semibold text-ink">Technologies</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-grid bg-paper px-4 py-2 text-sm text-slate"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-grid bg-white p-10">
                <h2 className="font-display text-xl font-semibold text-ink">Our Products / Portfolio</h2>
                <div className="mt-6 space-y-6">
                  {service.projects.map((project) => (
                    <div key={project.title} className="rounded-3xl border border-grid bg-paper p-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blueline mb-2">
                            {project.industry}
                          </p>
                          <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
                        </div>
                        {project.caseStudySlug ? (
                          <Link
                            href={`/case-studies/${project.caseStudySlug}`}
                            className="text-sm font-medium text-blueline hover:text-ink transition-colors"
                          >
                            View Case Study →
                          </Link>
                        ) : null}
                      </div>
                      <p className="mt-4 text-sm text-slate leading-relaxed">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-grid bg-white px-3 py-1 text-xs text-slate">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-8">
              <div className="rounded-3xl border border-grid bg-white p-8">
                <h2 className="font-display text-xl font-semibold text-ink">Results / Business Impact</h2>
                <ul className="mt-6 space-y-4">
                  {service.results.map((result) => (
                    <li key={result} className="flex gap-3 text-sm text-slate leading-relaxed">
                      <Check className="mt-1 h-4 w-4 text-blueline" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-grid bg-white p-8">
                <h2 className="font-display text-xl font-semibold text-ink">Why Choose Us</h2>
                <div className="mt-6 space-y-4">
                  {service.differentiators.map((feature) => (
                    <div key={feature.title} className="flex gap-4 rounded-3xl bg-paper p-4">
                      <feature.icon className="h-6 w-6 text-blueline" />
                      <div>
                        <p className="font-medium text-ink">{feature.title}</p>
                        <p className="mt-1 text-sm text-slate leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-grid bg-white p-8">
                <h2 className="font-display text-xl font-semibold text-ink">Final CTA</h2>
                <p className="mt-4 text-sm text-slate leading-relaxed">
                  Ready to turn this service into measurable business impact? Let&apos;s discuss your priorities and next milestone.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-14 rounded-3xl border border-grid bg-white p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">FAQs</h2>
            <div className="mt-6 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl bg-paper p-6">
                  <p className="font-medium text-ink">{faq.question}</p>
                  <p className="mt-3 text-sm text-slate leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-grid bg-paper p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Related Services</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/what-we-do/${related.slug}`}
                  className="group block rounded-3xl border border-grid bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)]"
                >
                  <related.icon className="h-10 w-10 text-blueline" />
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{related.title}</h3>
                  <p className="mt-3 text-sm text-slate leading-relaxed">{related.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
