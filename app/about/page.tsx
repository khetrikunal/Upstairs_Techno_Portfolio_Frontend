import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Globe,
  Handshake,
  Lightbulb,
  Mail,
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "About Us | Upstairs Techno",
  description:
    "Learn about Upstairs Techno, our technology solutions, leadership team, vision, mission, values, and commitment to empowering businesses and developing future technology professionals.",
};

const values = [
  { title: "Customer Success", description: "We measure our success by our clients' success.", icon: Handshake },
  { title: "Innovation", description: "We embrace emerging technologies and continuous improvement.", icon: Lightbulb },
  { title: "Integrity", description: "Every project is built on honesty, transparency, and accountability.", icon: ShieldCheck },
  { title: "Excellence", description: "High-quality delivery, following industry best practices.", icon: TrendingUp },
  { title: "Continuous Learning", description: "Technology evolves fast, and so do we.", icon: Sparkles },
  { title: "Collaboration", description: "Great solutions are built through teamwork and open communication.", icon: Users },
  { title: "People First", description: "Employees, interns, students, and clients are at the center of everything we do.", icon: Building2 },
  { title: "Quality & Reliability", description: "Secure, scalable, maintainable solutions businesses can depend on.", icon: Check },
  { title: "Growth Mindset", description: "Every challenge is an opportunity to improve.", icon: TrendingUp },
  { title: "Social Impact", description: "Making technology education accessible and supporting fresh talent.", icon: Globe },
];

const pillars = [
  { title: "Technology Solutions", description: "Helping businesses innovate, digitize, scale, and operate more effectively through modern technology.", points: ["IT Consulting", "Software Development", "Enterprise Applications", "System Modernization"], icon: Monitor },
  { title: "Talent Development", description: "Developing future technology professionals through practical training, internships, projects, and industry exposure.", points: ["BTDS – Talent Development Division", "Technology Training", "Internships", "Certifications", "Real Project Experience", "Coding Competitions", "Career Development"], icon: GraduationCap },
];

const ecosystem = [
  { title: "Consulting", description: "IT Consulting", icon: Briefcase },
  { title: "Engineering", description: "Software Development", icon: Code2 },
  { title: "Talent", description: "BTDS – Talent Development Division (TDD)", icon: GraduationCap },
  { title: "Education", description: "Technology Education & Training", icon: Globe },
];

const founders = [
  { name: "Avinash Narute", title: "Founder", image: "/Founder.jpeg", priority: 1 },
  { name: "Ganesh Kokare", title: "Co-Founder", image: "/Co-Founder.jpeg", priority: 2 },
];

const leadership = [
  { name: "Kunal Khetri", title: "Chief Executive Officer", image: "/CEO.jpeg", priority: 3, objectPosition: "object-top" },
  { name: "Shreyash Chilweri", title: "Chief Technology Officer", image: "/CTO.jpeg", priority: 4, objectPosition: "object-center" },
];

const journeySteps = ["Foundation", "Growth", "Technology Expansion", "Talent Development", "Global Vision"];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 sm:pt-10">
          <div className="rounded-[2rem] border border-grid bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-40px_rgba(14,21,36,0.30)]">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-blueline font-medium">About Upstairs Techno</p>
                <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
                  Building Tomorrow&apos;s Technology, Empowering Tomorrow&apos;s Talent.
                </h1>
                <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate">
                  Upstairs Techno is a technology-driven consulting and digital solutions company helping startups, SMEs, and enterprises turn ideas into scalable, secure, and innovative digital products.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3.5">
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition duration-300 hover:bg-blueline min-h-[48px]">
                    Explore Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#leadership" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-7 py-3.5 text-base font-semibold text-ink transition duration-300 hover:border-blueline hover:text-blueline min-h-[48px]">
                    Meet Our Team
                  </a>
                </div>
              </div>
              <div className="rounded-[2rem] border border-grid bg-paper p-6 sm:p-8">
                <div className="rounded-[1.5rem] border border-grid bg-white p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline font-medium">Our Focus</p>
                  <div className="mt-4 space-y-4">
                    {[
                      "Business growth through technology",
                      "Practical talent development",
                      "Secure and scalable digital products",
                      "Long-term partnerships",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-paper p-4">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm leading-relaxed text-slate">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A technology company built to connect business innovation with practical talent growth.</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-slate">
                Upstairs Techno is a technology-driven consulting and digital solutions company helping startups, SMEs, and enterprises turn ideas into scalable, secure, innovative digital products. We bring IT consulting, custom software engineering, practical talent development, and technology education together under one roof.
              </p>
              <p className="text-lg leading-relaxed text-slate">
                We&apos;re a team of technology consultants, software engineers, mentors, trainers, and innovators united by a belief that technology should simplify business, improve productivity, and create new opportunities. Beyond client work, we&apos;re committed to developing future technology professionals through practical training, internships, certification courses, and coding competitions.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate">{pillar.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.points.map((point) => (
                    <span key={point} className="rounded-full border border-grid bg-paper px-3 py-2 text-sm text-slate">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Why We Started</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Bridging the gap between business needs and modern technology.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Upstairs Techno was founded to bridge the gap between business needs and modern technology. Many growing businesses struggle to find one reliable partner for strategy, software development, and ongoing engineering support. We set out to build exactly that — while also creating a pipeline for students and fresh graduates to gain real industry experience.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-paper p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">For Businesses</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">Finding a reliable technology partner capable of supporting the complete digital journey.</h3>
              </div>
              <div className="rounded-[2rem] border border-grid bg-paper p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">For Students &amp; Fresh Graduates</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">Getting practical industry experience and a genuine pathway into technology careers.</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-ink p-8 text-paper sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Our Vision</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">To become a globally recognized technology company that empowers businesses through innovation, delivers world-class digital solutions, and develops the next generation of technology professionals by bridging the gap between education and industry.</h2>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Our Mission</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">To help businesses innovate, grow, and succeed through high-quality IT consulting and custom software development — while empowering students and fresh graduates through training, internships, and real-world project experience.</h2>
            <div className="mt-6 rounded-[2rem] border border-grid bg-paper p-6 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">Business Growth + Talent Development</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Our Core Values</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">The principles that guide every engagement and every relationship.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-[1.75rem] border border-grid bg-paper p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Why Choose Upstairs Techno?</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A reliable partner for business growth and future-ready talent.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "End-to-End Capability", description: "Consulting, engineering, talent development, and technical education under one roof." },
                { title: "Client-First Approach", description: "A technology strategy built around each business's unique goals and requirements." },
                { title: "Long-Term Partnership", description: "We focus on building lasting relationships rather than treating projects as one-time engagements." },
                { title: "Quality, Security & Scalability", description: "Strong emphasis on reliable, secure, maintainable, and scalable solutions." },
                { title: "Technology + Talent", description: "A dual commitment to growing businesses and nurturing tomorrow's technology professionals." },
                { title: "Transparent Engagement", description: "Clear communication, accountability, and transparency throughout every stage of engagement." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-grid bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Our Technology &amp; Service Ecosystem</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">An end-to-end ecosystem for business transformation and talent development.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {ecosystem.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-grid bg-paper p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="rounded-[2rem] border border-grid bg-white p-6 sm:p-10 lg:p-12">
            {/* Section header */}
            <div className="text-center">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-blueline font-medium">Meet Our Leadership</p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">The people driving Upstairs Techno forward.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-base leading-relaxed text-slate">
                Experienced leaders united by a shared vision — empowering businesses through technology and developing the next generation of tech professionals.
              </p>
            </div>

            {/* ── Founders Tier ── */}
            <div className="mt-12">
              <p className="text-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-blueline/70 font-medium">Founders</p>
              <div className="mt-8 flex flex-col items-center gap-10 sm:gap-12 md:flex-row md:justify-center md:items-start md:gap-16 lg:gap-24">
                {/* Founder */}
                <div className="group flex flex-col items-center text-center max-w-xs">
                  <div className="relative h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-full border-[3px] border-grid shadow-[0_8px_32px_-8px_rgba(14,21,36,0.20)] ring-4 ring-white transition-all duration-500 group-hover:border-blueline group-hover:ring-blueline/15 group-hover:shadow-[0_12px_48px_-12px_rgba(37,87,255,0.30)]">
                    <Image
                      src={founders[0].image}
                      alt={`${founders[0].name} – ${founders[0].title}`}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 192px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <span className="inline-block rounded-full bg-blueline/10 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-blueline font-semibold">
                      {founders[0].title}
                    </span>
                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-ink">{founders[0].name}</h3>
                  </div>
                </div>

                {/* Co-Founder */}
                <div className="group flex flex-col items-center text-center max-w-xs">
                  <div className="relative h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-full border-[3px] border-grid shadow-[0_8px_32px_-8px_rgba(14,21,36,0.20)] ring-4 ring-white transition-all duration-500 group-hover:border-blueline group-hover:ring-blueline/15 group-hover:shadow-[0_12px_48px_-12px_rgba(37,87,255,0.30)]">
                    <Image
                      src={founders[1].image}
                      alt={`${founders[1].name} – ${founders[1].title}`}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 192px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <span className="inline-block rounded-full bg-blueline/10 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-blueline font-semibold">
                      {founders[1].title}
                    </span>
                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-ink">{founders[1].name}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-auto mt-14 mb-12 h-px w-full max-w-md bg-gradient-to-r from-transparent via-grid to-transparent" />

            {/* ── Leadership Team Tier ── */}
            <div>
              <p className="text-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-blueline/70 font-medium">Leadership Team</p>
              <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
                {leadership.map((leader) => (
                  <div
                    key={leader.name}
                    className="group flex flex-col items-center rounded-[1.75rem] border border-grid bg-paper p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-10px_rgba(37,87,255,0.14)] w-full max-w-xs"
                  >
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full border-2 border-grid shadow-[0_4px_20px_-4px_rgba(14,21,36,0.16)] ring-2 ring-white transition-all duration-300 group-hover:border-blueline group-hover:ring-blueline/15 group-hover:shadow-[0_8px_28px_-6px_rgba(37,87,255,0.22)]">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} – ${leader.title}`}
                        fill
                        sizes="128px"
                        className={`object-cover ${leader.objectPosition || "object-center"} transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>
                    <h3 className="mt-5 font-display text-lg sm:text-xl font-semibold text-ink">{leader.name}</h3>
                    <p className="mt-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-blueline">{leader.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Our Journey</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A conceptual path from foundation to future-ready impact.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {journeySteps.map((step) => (
                <span key={step} className="rounded-full border border-grid bg-paper px-4 py-2 text-sm text-slate">
                  {step}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Get in Touch</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s start a conversation about your next technology or talent-development opportunity.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <a href="https://upstairstechno.com" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-grid bg-paper p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">Website</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">upstairstechno.com</p>
              </a>
              <a href="mailto:info@upstairstechno.com" className="rounded-[1.75rem] border border-grid bg-paper p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">Email</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">info@upstairstechno.com</p>
              </a>
              <a href="tel:9156996309" className="rounded-[1.75rem] border border-grid bg-paper p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">Phone</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">+91 91569 96309</p>
              </a>
              <div className="rounded-[1.75rem] border border-grid bg-paper p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">Headquarters</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">Baramati, Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-[2rem] border border-grid bg-white p-8 text-center sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Let&apos;s Build the Future Together</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Whether you&apos;re looking to transform your business with technology or build the next generation of technology talent, Upstairs Techno is ready to work with you.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
