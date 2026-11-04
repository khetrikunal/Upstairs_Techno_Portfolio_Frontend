"use client";

import Link from "next/link";
import {
  ArrowDown, ArrowRight, Bot, BriefcaseBusiness, Building2, Check, Code2,
  ExternalLink, GraduationCap, Handshake, Mail, MapPin, MessageCircle,
  Globe2, Sparkles,
} from "lucide-react";
import ContactEnquiryForm, { enquiryTypes } from "@/components/ContactEnquiryForm";

const officeAddress = "Rajeamarsinha Colony, Malegaon Bk, Baramati, Pune, Maharashtra – 413115, India.";
const mapQuery = encodeURIComponent("Rajeamarsinha Colony, Malegaon Bk, Baramati, Pune, Maharashtra 413115, India");
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const contactCards = [
  { icon: Mail, label: "Email", lines: ["contact@upstairstechno.com", "info@upstairstechno.com"], hrefs: ["mailto:contact@upstairstechno.com", "mailto:info@upstairstechno.com"] },
  { icon: MapPin, label: "Office", lines: [officeAddress], hrefs: [mapLink] },
  { icon: Globe2, label: "Website", lines: ["www.upstairstechno.com"], hrefs: ["https://www.upstairstechno.com"] },
];

const helpCards = [
  { icon: Code2, title: "Business & Software Solutions", copy: "Custom software, web and mobile applications, and practical technology guidance for your business.", type: "Software Development" },
  { icon: Bot, title: "AI & Automation", copy: "Explore AI assistants, chatbots, and workflow automation for measurable business needs.", type: "AI & Automation" },
  { icon: BriefcaseBusiness, title: "Careers & Internships", copy: "Explore internship, OJT, training, and role opportunities through our careers portal.", type: "Internship & Career Opportunities", careers: true },
  { icon: GraduationCap, title: "Training & Education", copy: "Ask about technical education, structured learning, and talent development programs.", type: "Training & Education" },
  { icon: Handshake, title: "Partnerships & Collaborations", copy: "Share an idea for working together on a product, program, or client initiative.", type: "Business Partnership" },
  { icon: MessageCircle, title: "General Support", copy: "Have another question? Send it to our team and we’ll help you find the right next step.", type: "General Enquiry" },
];

const faqs = [
  { q: "What services does Upstairs Techno provide?", a: "The site describes IT consulting, custom software development, AI and automation, digital marketing, technical education, and talent development offerings. Visit the services page to explore current details." },
  { q: "How can I request a software development quotation?", a: "Choose Software Development in the enquiry form and include your goals, key requirements, and any useful context. The team can review the information and discuss the next step." },
  { q: "Does Upstairs Techno offer internships?", a: "Yes. The company site describes internship and on-the-job training opportunities. Current opportunities and application details are available through the careers portal." },
  { q: "How can I apply for an internship or job?", a: "Visit the Upstairs Techno careers portal to see available opportunities and submit an application." },
  { q: "How can I discuss a business partnership?", a: "Select Business Partnership in the enquiry form and share the organization, idea, and type of collaboration you have in mind." },
  { q: "How long does it take to receive a response?", a: "Response times can vary. The website does not publish a specific response-time commitment; you can also email the team directly if your enquiry is time-sensitive." },
];

export default function ContactUsExperience() {
  function chooseType(type: string) {
    const supportedType = enquiryTypes.includes(type as (typeof enquiryTypes)[number]) ? type : "General Enquiry";
    const select = document.getElementById("contact-enquiry-type") as HTMLSelectElement | null;
    if (select) {
      select.value = supportedType;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="flex-1 bg-paper text-ink">
      <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white sm:pt-40 sm:pb-28 lg:pb-32">
        <div className="blueprint-grid-dark absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blueline/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_0.68fr] md:items-end md:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-blueline-soft"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Let’s Connect</p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">Let&apos;s <span className="text-blueline-soft">Connect.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">Have a project in mind, a question about our services, or want to explore a partnership? We&apos;d love to hear from you.</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">Whether you&apos;re a business looking for technology solutions or a student exploring career opportunities, our team is here to help.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className="clay-btn clay-btn-primary min-h-[52px] px-6 py-3.5">Send an Enquiry <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
              <Link href="/services" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline-soft">Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hidden justify-self-end md:block" aria-hidden="true">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-5 rounded-full border border-dashed border-white/15" />
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blueline text-white shadow-[0_16px_50px_rgba(37,87,255,0.42)]"><MessageCircle className="h-10 w-10" strokeWidth={1.5} /></div>
              <span className="absolute -right-2 top-8 rounded-full border border-white/15 bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/70">Ideas welcome</span>
              <span className="absolute -bottom-1 left-2 rounded-full border border-white/15 bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/70">People first</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Contact details" className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {contactCards.map(({ icon: Icon, label, lines, hrefs }) => (
            <article key={label} className="rounded-2xl border border-grid/70 bg-white p-5 shadow-[0_16px_44px_-32px_rgba(14,21,36,0.55)] sm:p-6">
              <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blueline/10 text-blueline"><Icon className="h-5 w-5" aria-hidden="true" /></span><div className="min-w-0"><h2 className="font-display text-lg font-bold">{label}</h2><div className="mt-2 space-y-1.5">{lines.map((line, index) => <a key={line} href={hrefs[index]} target={label === "Office" || label === "Website" ? "_blank" : undefined} rel={label === "Office" || label === "Website" ? "noopener noreferrer" : undefined} className="block break-words text-sm leading-relaxed text-slate underline decoration-grid underline-offset-4 transition hover:text-blueline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline">{line}{label === "Office" && <ExternalLink className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />}</a>)}</div></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 lg:px-8" aria-labelledby="form-heading">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline">Start a conversation</p>
          <h2 id="form-heading" className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Tell us a little about what you need.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">Share a few details and we&apos;ll route your enquiry to the right team.</p>
          <div className="mt-8 rounded-2xl border border-grid bg-white p-5">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white"><Building2 className="h-5 w-5" aria-hidden="true" /></span><div><p className="font-display font-bold">Prefer email?</p><p className="text-sm text-slate">Reach our team directly</p></div></div>
            <a href="mailto:contact@upstairstechno.com" className="mt-4 inline-flex items-center gap-2 font-semibold text-blueline underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline"><Mail className="h-4 w-4" aria-hidden="true" />contact@upstairstechno.com</a>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-grid bg-white p-5 shadow-[0_20px_64px_-44px_rgba(14,21,36,0.4)] sm:p-8 lg:p-10">
          <ContactEnquiryForm />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="help-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center"><p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline">The right conversation</p><h2 id="help-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">How Can We Help You?</h2><p className="mt-4 leading-relaxed text-slate">Choose a topic to get started. We&apos;ll set the enquiry type for you.</p></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map(({ icon: Icon, title, copy, type, careers }) => <article key={title} className="group flex min-h-[250px] flex-col rounded-2xl border border-grid bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-blueline/40 hover:shadow-[0_18px_40px_-28px_rgba(14,21,36,0.38)] sm:p-7">
              <Icon className="h-8 w-8 text-blueline transition-transform group-hover:scale-110" aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate">{copy}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5"><button type="button" onClick={() => chooseType(type)} className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-blueline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline">Enquire <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>{careers && <a href="https://careers.upstairstechno.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blueline underline underline-offset-4">Careers portal <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-8" aria-labelledby="location-heading">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-grid bg-white lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline">Find us</p><h2 id="location-heading" className="mt-3 font-display text-3xl font-bold">Our Office</h2><p className="mt-4 flex items-start gap-3 leading-relaxed text-slate"><MapPin className="mt-1 h-5 w-5 shrink-0 text-blueline" aria-hidden="true" /><span>{officeAddress}</span></p><a href={mapLink} target="_blank" rel="noopener noreferrer" className="clay-btn clay-btn-primary mt-7 min-h-[50px] w-fit px-6 py-3">Get Directions <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div>
          <div className="min-h-[300px] bg-paper sm:min-h-[380px]"><iframe title="Map showing Upstairs Techno office address" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} className="h-full min-h-[300px] w-full border-0 sm:min-h-[380px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8"><div className="text-center"><p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline-soft">Good to know</p><h2 id="faq-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2></div>
          <div className="mt-10 divide-y divide-white/10">{faqs.map(({ q, a }) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline-soft [&::-webkit-details-marker]:hidden">{q}<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-blueline-soft transition group-open:rotate-45"><span aria-hidden="true">+</span><span className="sr-only">Toggle answer</span></span></summary><p className="max-w-3xl pt-4 pr-12 leading-relaxed text-white/65">{a}</p></details>)}</div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-blueline px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16"><div className="blueprint-grid-dark absolute inset-0 opacity-20" aria-hidden="true" /><div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">Your next chapter starts here</p><h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Ready to Build Something Great?</h2><p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">Let&apos;s discuss your ideas and explore how Upstairs Techno can help you achieve your business goals.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"><a href="#contact-form" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-ink transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Check className="h-4 w-4" aria-hidden="true" />Start a Project</a><a href="mailto:contact@upstairstechno.com" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Mail className="h-4 w-4" aria-hidden="true" />Contact Our Team</a></div></div></div></section>
    </main>
  );
}
