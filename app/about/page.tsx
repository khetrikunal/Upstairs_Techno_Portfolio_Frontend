import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  Globe,
  Handshake,
  Lightbulb,
  Mail,
  Monitor,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { aboutPageSchema } from "@/lib/schema";

export const metadata = {
  title: "About Us & Corporate Leadership | Upstairs Techno Private Limited",
  description:
    "Explore Upstairs Techno Private Limited, led by Chief Executive Officer (CEO) Kunal Gururaj Khetri and founded by Avinash Narute and Ganesh Kokare. Discover our enterprise engineering, AI solutions, and tech talent programs.",
  keywords: [
    "Kunal Gururaj Khetri",
    "Kunal Khetri",
    "CEO Upstairs Techno",
    "Chief Executive Officer Upstairs Techno",
    "Upstairs Techno Private Limited",
    "Upstairs Techno CEO",
    "Avinash Narute",
    "Ganesh Kokare",
    "Upstairs Techno Leadership",
    "Upstairs Techno Management",
    "Upstairs Techno About Us",
    "Enterprise Software Baramati Pune"
  ],
  alternates: {
    canonical: "https://upstairstechno.com/about",
  },
  openGraph: {
    title: "About Us & Corporate Leadership | Upstairs Techno Private Limited",
    description:
      "Official corporate directory of Upstairs Techno Private Limited. Led by Chief Executive Officer (CEO) Kunal Gururaj Khetri. Discover our leadership structure, mission, and enterprise technology services.",
    url: "https://upstairstechno.com/about",
    siteName: "Upstairs Techno Private Limited",
    images: [
      {
        url: "/Upstairs_Logo.jpeg",
        width: 800,
        height: 600,
        alt: "Upstairs Techno Private Limited Leadership",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Leadership | Upstairs Techno Private Limited",
    description:
      "Meet Kunal Gururaj Khetri, CEO of Upstairs Techno Private Limited, and the leadership team driving enterprise software engineering.",
    images: ["/Upstairs_Logo.jpeg"],
  },
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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

const leadership = [
  {
    id: "kunal-gururaj-khetri",
    name: "Kunal Gururaj Khetri",
    role: "CEO",
    title: "Chief Executive Officer (CEO)",
    fullTitle: "Chief Executive Officer & Director",
    company: "Upstairs Techno Private Limited",
    image: "/CEO.jpeg",
    bio: "Spearheads executive direction, corporate strategy, enterprise partnerships, and engineering innovation across global digital platforms at Upstairs Techno Private Limited.",
    profiles: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kunal-khetri-82410b31b",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/khetrikunal",
        icon: GitHubIcon,
      },
      {
        name: "Email",
        url: "mailto:ceo@upstairstechno.com",
        icon: Mail,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/_kunal.khetri/",
        icon: InstagramIcon,
      },
      {
        name: "Official Portfolio",
        url: "https://ceo.upstairstechno.com",
        icon: ExternalLink,
      },
    ],
  },
];

const founders = [
  {
    name: "Avinash Narute",
    role: "Founder",
    image: "/Founder.jpeg",
    company: "Upstairs Techno Private Limited",
    bio: "Pioneered the founding philosophy and technology solutions framework at Upstairs Techno.",
  },
  {
    name: "Ganesh Kokare",
    role: "Co-Founder",
    image: "/Co-Founder.jpeg",
    company: "Upstairs Techno Private Limited",
    bio: "Co-founded the organization focusing on operational expansion and talent development.",
  },
];

const journeySteps = ["Foundation", "Growth", "Technology Expansion", "Talent Development", "Global Vision"];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 sm:pt-10">
          <div className="rounded-[2rem] border border-grid bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-40px_rgba(14,21,36,0.30)]">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-blueline font-medium">About Upstairs Techno</p>
                <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
                  Building tomorrow&apos;s technology and empowering tomorrow&apos;s talent.
                </h1>
                <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate">
                  Upstairs Techno is a technology-driven company delivering innovative, scalable, and secure digital solutions that help businesses grow and transform.
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

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-8 sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Who We Are</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">A technology company delivering innovative digital solutions while developing the next generation of tech talent.</h2>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="clay-card clay-card-hover p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blueline/10 text-blueline shadow-sm">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{pillar.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate">{pillar.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.points.map((point) => (
                    <span key={point} className="clay-pill">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-8 sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Why We Started</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">Bridging business needs with modern technology while creating real opportunities for future talent.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="clay-card p-6 bg-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline font-bold">For Businesses</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">Reliable technology solutions for growth.</h3>
              </div>
              <div className="clay-card p-6 bg-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline font-bold">For Students</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">Practical experience and career opportunities.</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card-dark p-8 text-paper sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Our Vision</div>
            <h2 className="mt-3 font-display text-3xl font-bold">To build innovative technology solutions that empower businesses, create opportunities, and shape a smarter digital future.</h2>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-8 sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Our Mission</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">To deliver reliable, innovative, and accessible technology solutions that help businesses grow, transform, and succeed in the digital world.</h2>
            <div className="mt-6 clay-card p-6 text-center bg-paper">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-blueline font-bold">Business Growth + Talent Development</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-8 sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Our Core Values</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">The principles that guide every engagement and every relationship.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="clay-card clay-card-hover p-6 bg-paper">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blueline/10 text-blueline shadow-sm">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-8 sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Why Choose Upstairs Techno?</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">A reliable partner for business growth and future-ready talent.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "End-to-End Capability", description: "Consulting, engineering, talent development, and technical education under one roof." },
                { title: "Client-First Approach", description: "A technology strategy built around each business's unique goals and requirements." },
                { title: "Long-Term Partnership", description: "We focus on building lasting relationships rather than treating projects as one-time engagements." },
                { title: "Quality, Security & Scalability", description: "Strong emphasis on reliable, secure, maintainable, and scalable solutions." },
                { title: "Technology + Talent", description: "A dual commitment to growing businesses and nurturing tomorrow's technology professionals." },
                { title: "Transparent Engagement", description: "Clear communication, accountability, and transparency throughout every stage of engagement." },
              ].map((item) => (
                <div key={item.title} className="clay-card clay-card-hover p-6 bg-paper">
                  <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-8 sm:p-10">
            <div className="clay-pill clay-pill-accent mb-3">Our Technology &amp; Service Ecosystem</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">An end-to-end ecosystem for business transformation and talent development.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {ecosystem.map((item) => (
                <div key={item.title} className="clay-card clay-card-hover p-6 text-center bg-paper">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blueline/10 text-blueline shadow-sm">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" aria-labelledby="leadership-title" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="clay-card p-6 sm:p-10 lg:p-12">
            {/* Section header */}
            <header className="text-center">
              <div className="clay-pill clay-pill-accent mb-3">Meet Our Leadership</div>
              <h2 id="leadership-title" className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-black text-ink tracking-tight">
                Corporate Leadership &amp; Executive Management
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-base leading-relaxed text-slate">
                Experienced leaders united by a shared vision — empowering businesses through technology and developing the next generation of tech professionals at <strong className="font-semibold text-ink">Upstairs Techno Private Limited</strong>.
              </p>
            </header>

            {/* ── Founders ── */}
            <section aria-labelledby="founders-heading" className="mt-14 pt-10 border-t border-grid">
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline font-bold">Company Origins</p>
                <h3 id="founders-heading" className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink">
                  Founders
                </h3>
              </div>

              <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10 lg:gap-14">
                {founders.map((founder) => (
                  <article
                    key={founder.name}
                    itemScope
                    itemType="https://schema.org/Person"
                    className="group flex flex-col items-center clay-card clay-card-hover p-7 sm:p-8 text-center w-full max-w-xs"
                  >
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-grid shadow-md">
                      <img
                        itemProp="image"
                        src={founder.image}
                        alt={`${founder.name} - ${founder.role} at Upstairs Techno Private Limited`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        width={128}
                        height={128}
                      />
                    </div>
                    <span
                      itemProp="jobTitle"
                      className="mt-5 inline-block rounded-full bg-blueline/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-blueline font-bold"
                    >
                      {founder.role}
                    </span>
                    <h4
                      itemProp="name"
                      className="mt-3 font-display text-xl sm:text-2xl font-bold text-ink tracking-tight"
                    >
                      {founder.name}
                    </h4>
                    <meta itemProp="worksFor" content={founder.company} />
                    <p itemProp="description" className="mt-2 text-xs text-slate">
                      {founder.bio}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* ── Executive Leadership ── */}
            <section aria-labelledby="executive-leadership-heading" className="mt-12">
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline font-bold">Board &amp; Executive Officers</p>
                <h3 id="executive-leadership-heading" className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink">
                  Executive Leadership
                </h3>
              </div>

              <div className="grid gap-8 max-w-2xl mx-auto">
                {leadership.map((leader) => (
                  <article
                    key={leader.name}
                    id={leader.id}
                    itemScope
                    itemType="https://schema.org/Person"
                    className="group flex flex-col justify-between rounded-[2rem] border border-grid bg-paper p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-10px_rgba(37,87,255,0.14)]"
                  >
                    <div>
                      <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border-2 border-grid shadow-md sm:h-40 sm:w-40">
                        <Image
                          itemProp="image"
                          src={leader.image}
                          alt={`${leader.name} - ${leader.role} at Upstairs Techno Private Limited`}
                          className="h-full w-full object-cover object-[center_30%]"
                          width={160}
                          height={160}
                          sizes="(min-width: 640px) 160px, 144px"
                        />
                      </div>
                      <div className="flex justify-center">
                        <span
                          itemProp="jobTitle"
                          className="inline-block rounded-full bg-blueline/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-blueline font-bold"
                        >
                          {leader.role}
                        </span>
                      </div>

                      <h4
                        itemProp="name"
                        className="mt-5 font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight"
                      >
                        {leader.name}
                      </h4>

                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-slate font-medium">
                        {leader.title}
                      </p>

                      <meta itemProp="worksFor" content={leader.company} />
                      <meta itemProp="affiliation" content={leader.company} />

                      <p
                        itemProp="description"
                        className="mt-4 text-sm sm:text-base leading-relaxed text-slate"
                      >
                        {leader.bio}
                      </p>
                    </div>

                    {/* Professional Profiles */}
                    <nav
                      aria-label={`${leader.name} Professional Profiles`}
                      className="mt-6 pt-6 border-t border-grid/60 flex items-center justify-center flex-wrap gap-2.5"
                    >
                      {leader.profiles.map((profile) => {
                        const isEmail = profile.url.startsWith("mailto:");
                        return (
                          <a
                            key={profile.name}
                            href={profile.url}
                            target={isEmail ? undefined : "_blank"}
                            rel={isEmail ? undefined : "noopener noreferrer"}
                            itemProp="sameAs"
                            title={`${profile.name} - ${leader.name}`}
                            aria-label={
                              isEmail
                                ? `Email ${leader.name} at ${profile.url.replace("mailto:", "")}`
                                : `${leader.name} on ${profile.name}`
                            }
                            className="inline-flex items-center gap-2 rounded-full border border-grid bg-white px-3.5 sm:px-4 py-2 text-xs font-semibold text-slate transition-all duration-200 hover:border-blueline hover:text-blueline hover:bg-blueline/5 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blueline/30"
                          >
                            <profile.icon className="h-4 w-4" />
                            <span>{profile.name}</span>
                          </a>
                        );
                      })}
                    </nav>
                  </article>
                ))}
              </div>
            </section>


          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
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



        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="rounded-[2rem] border border-grid bg-white p-8 text-center sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Let&apos;s Build the Future Together</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Building the Future Together Through Technology.</h2>
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
