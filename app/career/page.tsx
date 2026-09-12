import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { listCareerServices, listJobs } from "@/lib/data/repository";
import Careers from "@/components/Careers";
import {
  ArrowRight,
  Award,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Users,
  Briefcase,
  Layers,
  Clock,
  Laptop,
} from "lucide-react";

export const metadata = {
  title: "Career & Job Opportunities | Upstairs Techno",
  description:
    "Build your future with Upstairs Techno. Explore BTDS talent pipeline, real-world engineering internships, and full-time software engineering roles.",
};

const serviceIcons: Record<string, typeof Code2> = {
  btds: GraduationCap,
  "coding-competition": Code2,
  "ai-course": Cpu,
  internship: Layers,
  ojt: Briefcase,
};

export default async function CareerPage() {
  const [allServices, jobs] = await Promise.all([listCareerServices(), listJobs()]);
  const services = allServices.filter((s) => s.id !== "coding-competition");

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative bg-ink text-paper py-20 sm:py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/30 bg-blueline/10 px-4.5 py-2 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-6 font-semibold shadow-sm">
                <Sparkles className="w-4 h-4 text-blueline-soft" />
                <span>Careers &amp; Learning Hub</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight text-paper">
                Build Your Future With Us
              </h1>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl text-paper/85 leading-relaxed max-w-3xl">
                Unlock career-defining opportunities at Upstairs Techno. Whether you are aiming to join our <strong className="text-white">BTDS talent development pipeline</strong>, gain enterprise experience through our <strong className="text-white">Internship program</strong>, accelerate with <strong className="text-white">OJT (On - Job Training)</strong>, or build mission-critical enterprise systems — your growth starts here.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://career.upstairstechno.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-8 py-4 text-base sm:text-lg font-bold text-paper shadow-xl shadow-blueline/30 transition-all duration-300 hover:bg-blueline-soft hover:-translate-y-0.5"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#ojt-program"
                  className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 text-base sm:text-lg font-bold text-paper hover:bg-emerald-500/20 transition-all"
                >
                  💼 OJT (On - Job Training)
                </a>
                <a
                  href="#internship-opportunities"
                  className="inline-flex items-center gap-2.5 rounded-full border border-paper/30 bg-paper/10 px-7 py-4 text-base sm:text-lg font-bold text-paper hover:bg-paper/20 transition-all"
                >
                  🎓 View Internships
                </a>
                <a
                  href="#open-positions"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-6 py-4 text-base sm:text-lg font-semibold text-paper hover:bg-paper/10 transition-colors"
                >
                  Open Roles
                </a>
              </div>
            </div>

            {/* Quick stats strip */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-paper/10">
              <div className="p-5 rounded-2xl bg-paper/[0.03] border border-paper/10">
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-blueline-soft">100%</p>
                <p className="text-sm sm:text-base text-paper/75 font-mono mt-1 font-medium">Real Enterprise Projects</p>
              </div>
              <div className="p-5 rounded-2xl bg-paper/[0.03] border border-paper/10">
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-blueline-soft">1:1</p>
                <p className="text-sm sm:text-base text-paper/75 font-mono mt-1 font-medium">Senior Mentor Ratio</p>
              </div>
              <div className="p-5 rounded-2xl bg-paper/[0.03] border border-paper/10">
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-blueline-soft">70%+</p>
                <p className="text-sm sm:text-base text-paper/75 font-mono mt-1 font-medium">PPO Conversion Rate</p>
              </div>
              <div className="p-5 rounded-2xl bg-paper/[0.03] border border-paper/10">
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-blueline-soft">Verified</p>
                <p className="text-sm sm:text-base text-paper/75 font-mono mt-1 font-medium">Industry Certifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Services & Programs Section */}
        <section id="career-services" className="py-20 sm:py-28 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline font-bold mb-3">
              Career Programs &amp; Opportunities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
              Choose Your Path to Engineering Excellence
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate leading-relaxed">
              Explore our structured learning and practical career development tracks designed to elevate your technical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.id] || Award;
              const isInternship = service.id === "internship";
              const isBtds = service.id === "btds";
              const isOjt = service.id === "ojt";

              return (
                <div
                  key={service.id}
                  className={`flex flex-col justify-between rounded-3xl border transition-all duration-300 p-8 sm:p-10 relative group ${
                    isOjt
                      ? "border-emerald-500/50 bg-gradient-to-b from-emerald-500/[0.04] to-white shadow-xl shadow-emerald-500/5 hover:border-emerald-500"
                      : isInternship
                      ? "border-blueline/50 bg-gradient-to-b from-blueline/[0.04] to-white shadow-xl shadow-blueline/5 hover:border-blueline"
                      : isBtds
                      ? "border-[#C98A3E]/50 bg-gradient-to-b from-[#C98A3E]/[0.04] to-white shadow-xl shadow-[#C98A3E]/5 hover:border-[#C98A3E]"
                      : "border-grid bg-white shadow-md hover:shadow-xl hover:border-blueline/50"
                  }`}
                >
                  {isOjt && (
                    <span className="absolute -top-3.5 right-8 bg-emerald-600 text-paper font-mono text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                      On - Job Training
                    </span>
                  )}
                  {isInternship && (
                    <span className="absolute -top-3.5 right-8 bg-blueline text-paper font-mono text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                      Active Opportunities
                    </span>
                  )}
                  {isBtds && (
                    <span className="absolute -top-3.5 right-8 bg-[#C98A3E] text-paper font-mono text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                      Talent Pipeline
                    </span>
                  )}

                  <div>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                      isOjt
                        ? "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                        : isBtds
                        ? "bg-[#C98A3E]/10 text-[#C98A3E] group-hover:bg-[#C98A3E] group-hover:text-white"
                        : "bg-blueline/10 text-blueline group-hover:bg-blueline group-hover:text-paper"
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <span className={`font-mono text-xs sm:text-sm uppercase tracking-widest font-bold block mb-2 ${
                      isOjt ? "text-emerald-600" : isBtds ? "text-[#C98A3E]" : "text-blueline"
                    }`}>
                      {service.category}
                    </span>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">{service.title}</h3>
                    <p className="text-slate text-base sm:text-[17px] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-3 mb-8 border-t border-grid/60 pt-6">
                      {service.highlights.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink/85">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isOjt ? "text-emerald-500" : isBtds ? "text-[#C98A3E]" : "text-blueline"}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-grid">
                    <a
                      href={isOjt || isInternship ? "https://career.upstairstechno.com" : isBtds ? "/services/btds" : `/career/services/${service.id}`}
                      target={isOjt || isInternship ? "_blank" : undefined}
                      rel={isOjt || isInternship ? "noopener noreferrer" : undefined}
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4.5 text-base sm:text-lg font-bold transition-all duration-300 ${
                        isOjt
                          ? "bg-emerald-600 text-paper shadow-lg hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20"
                          : isInternship
                          ? "bg-blueline text-paper shadow-lg hover:bg-blueline-soft hover:shadow-xl hover:shadow-blueline/20"
                          : isBtds
                          ? "bg-[#C98A3E] text-paper shadow-lg hover:bg-[#a9702b]"
                          : "bg-ink text-paper hover:bg-blueline"
                      }`}
                    >
                      <span>
                        {isOjt ? "Apply Now" : isInternship ? "Apply Now" : isBtds ? "Explore BTDS Program" : service.ctaText}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dedicated OJT (On - Job Training) Section */}
        <section id="ojt-program" className="py-20 sm:py-28 bg-ink text-paper relative overflow-hidden my-12 mx-4 sm:mx-6 lg:mx-8 rounded-3xl border border-emerald-500/40 shadow-2xl">
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2 text-xs sm:text-sm font-mono tracking-widest text-emerald-300 uppercase mb-4 shadow-sm font-semibold">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>On - Job Training (OJT) · Applications Open</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight">
                OJT (On - Job Training) Program
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-paper/85 leading-relaxed">
                Step directly into real enterprise engineering. Our intensive On-Job Training (OJT) program pairs you with senior architects on live production systems — transforming your skills with real client code, industry practices, and direct placement opportunities.
              </p>
            </div>

            {/* OJT Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">Live Production Systems</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Work on commercial client platforms, cloud infrastructure, and live databases from week one.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">1:1 Senior Mentorship</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Daily standups, architecture guidance, and code reviews led directly by Senior Staff Engineers.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">3 to 6 Months Tenure</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Structured sprint roadmap with real milestone deliveries, stipend, and performance rewards.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">Direct Placement</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Verifiable experience credentials and direct conversion to full-time Associate Software Engineer.
                </p>
              </div>
            </div>

            {/* OJT CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <a
                href="https://career.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-9 py-4.5 text-lg font-extrabold text-paper shadow-2xl shadow-emerald-600/40 hover:bg-emerald-500 hover:scale-105 transition-all"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/career/services/ojt"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-8 py-4.5 text-base sm:text-lg font-bold text-paper hover:bg-paper/10 transition-colors"
              >
                View OJT Curriculum &amp; Details
              </a>
            </div>
          </div>
        </section>

        {/* Dedicated Internship Section */}
        <section id="internship-opportunities" className="py-20 sm:py-28 bg-ink text-paper relative overflow-hidden my-12 mx-4 sm:mx-6 lg:mx-8 rounded-3xl border border-blueline/30 shadow-2xl">
          <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-5 py-2 text-xs sm:text-sm font-mono tracking-widest text-blueline-soft uppercase mb-4 shadow-sm font-semibold">
                <GraduationCap className="w-4 h-4 text-blueline-soft" />
                <span>Internships Available · Apply Now</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight">
                Engineering Internship Program
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-paper/85 leading-relaxed">
                We are actively offering high-impact internships across Full-Stack Engineering, Cloud, DevOps, and Applied AI. Gain hands-on production experience, work under direct senior mentorship, and fast-track your path to a full-time engineering career.
              </p>
            </div>

            {/* Internship Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blueline/20 text-blueline-soft flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">Live Production Code</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Write and deploy code for real enterprise client applications. No shadow projects.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blueline/20 text-blueline-soft flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">1:1 Senior Mentorship</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Paired with a dedicated Staff Engineer from Day 1 for daily guidance and weekly reviews.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blueline/20 text-blueline-soft flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">3 to 6 Months Tenure</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  Flexible Remote, Hybrid, or On-site arrangements with monthly stipend and performance bonus.
                </p>
              </div>

              <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blueline/20 text-blueline-soft flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-paper mb-2">PPO Fast-Track</h3>
                <p className="text-sm text-paper/75 leading-relaxed">
                  70%+ of interns receive Pre-Placement Offers (PPOs) for full-time Associate Software Engineer roles.
                </p>
              </div>
            </div>

            {/* Internship CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <a
                href="https://career.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-blueline px-9 py-4.5 text-lg font-extrabold text-paper shadow-2xl shadow-blueline/40 hover:bg-blueline-soft hover:scale-105 transition-all"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/career/services/internship"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-8 py-4.5 text-base sm:text-lg font-bold text-paper hover:bg-paper/10 transition-colors"
              >
                Read Internship Details &amp; FAQs
              </a>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions">
          <Careers jobs={jobs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
