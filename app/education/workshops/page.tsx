import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Wrench, Sparkles, Calendar, Users, Code, Cpu } from "lucide-react";

export const metadata = {
  title: "Workshops | Upstairs Techno Education",
  description:
    "Explore practical 1-2 day intensive workshops on Artificial Intelligence, Web Development, DevOps, Cloud Native, and emerging technology skills.",
};

const WORKSHOPS = [
  {
    title: "Generative AI & LLM Masterclass",
    duration: "2-Day Weekend Sprint",
    level: "Intermediate",
    topics: ["OpenAI API & LangChain", "RAG Pipelines", "Vector Databases", "Prompt Engineering"],
  },
  {
    title: "Full-Stack Web Dev with Next.js 15 & React 19",
    duration: "1-Day Intensive Lab",
    level: "Beginner to Intermediate",
    topics: ["App Router Architecture", "Server Actions", "TailwindCSS Styling", "Deployment"],
  },
  {
    title: "Cloud Native & Kubernetes Deployment Sprints",
    duration: "2-Day Hands-on Workshop",
    level: "Advanced",
    topics: ["Docker Containerization", "Kubernetes Manifests", "CI/CD Pipelines", "Monitoring"],
  },
  {
    title: "Competitive Coding & Data Structures Sprint",
    duration: "1-Day Bootcamp",
    level: "All Levels",
    topics: ["Time & Space Complexity", "Dynamic Programming", "Graph Algorithms", "Contest Prep"],
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        <section className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-80" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-4.5 py-1.5 text-xs font-mono tracking-widest text-blueline-soft uppercase mb-6">
              <Wrench className="w-4 h-4 text-blueline-soft" />
              <span>Short-Term Masterclasses</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-paper text-balance leading-tight">
              Hands-On Technical Workshops
            </h1>

            <p className="mt-6 text-base sm:text-lg text-paper/80 leading-relaxed max-w-3xl">
              Short-term, high-intensity learning experiences designed to equip students and developers with immediate practical skills in AI, Web Development, Cloud, and Emerging Technologies.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 mt-16 sm:mt-24 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS.map((ws, i) => (
              <div key={i} className="rounded-3xl border border-grid bg-paper p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs font-bold text-blueline uppercase bg-blueline/10 px-3 py-1 rounded-full">
                      {ws.duration}
                    </span>
                    <span className="font-mono text-xs text-slate">{ws.level}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink mb-4">{ws.title}</h3>

                  <ul className="space-y-2 text-sm text-ink/80 mb-6">
                    {ws.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blueline shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-grid">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blueline hover:underline"
                  >
                    <span>Request Workshop for College / Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
