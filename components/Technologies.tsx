"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const TECHS = [
  {
    name: "React",
    description: "Building scalable, responsive and component-driven web applications.",
    why: "React allows us to build fast, scalable and maintainable interfaces using reusable components.",
    benefit: "Reusable component architecture, high rendering performance, expansive ecosystem, and strong cross-platform flexibility.",
    expertise: "Extensive track record building production-grade dashboards, enterprise web applications, and custom design systems.",
  },
  {
    name: "Spring Boot",
    description: "Developing secure, scalable and production-ready backend systems.",
    why: "Spring Boot delivers robust enterprise-level architectures, built-in security protocols, and dependable microservices.",
    benefit: "Battle-tested reliability, automated configuration, seamless cloud integration, and enterprise-grade performance.",
    expertise: "Architected high-throughput transactional backends, banking-grade microservices, and secure API gateways.",
  },
  {
    name: "Node.js",
    description: "Building fast APIs, real-time applications and scalable services.",
    why: "Node.js powers lightweight, asynchronous, and event-driven backends ideal for high concurrency and real-time data.",
    benefit: "Non-blocking I/O, unified full-stack JavaScript/TypeScript workflows, fast execution, and huge npm library ecosystem.",
    expertise: "Engineered high-concurrency REST & GraphQL APIs, websockets, streaming services, and serverless microservices.",
  },
  {
    name: ".NET",
    description: "Building enterprise-grade applications, APIs, and cross-platform software solutions.",
    why: ".NET delivers high-performance, scalable, and secure applications for enterprise environments with a unified development platform across web, desktop, and cloud.",
    benefit: "High performance, cross-platform support, rich ecosystem (ASP.NET Core, Blazor, EF Core), strong typing, and enterprise-grade reliability.",
    expertise: "Delivered enterprise web applications, RESTful APIs, and database-driven systems using ASP.NET Core, Entity Framework, and Azure integration.",
  },
  {
    name: "Python",
    description: "Powering AI, automation, data processing and backend solutions.",
    why: "Python is the industry standard for Artificial Intelligence, machine learning models, automation, and analytics pipelines.",
    benefit: "Unrivaled AI/ML framework ecosystem (PyTorch, TensorFlow, LangChain), rapid development, and rich scientific libraries.",
    expertise: "Delivered Generative AI integrations, intelligent document automation, custom ML models, and scalable data backends.",
  },
  {
    name: "PostgreSQL",
    description: "Reliable and scalable data storage for business-critical applications.",
    why: "PostgreSQL is the most dependable, feature-rich relational database for mission-critical and ACID-compliant data storage.",
    benefit: "Rock-solid data integrity, advanced indexing, native JSON support, high extensibility, and horizontal scaling capabilities.",
    expertise: "Designed complex schema structures, enterprise database migrations with zero downtime, and high-availability clusters.",
  },
  {
    name: "AWS",
    description: "Scalable cloud infrastructure, deployment and managed services.",
    why: "AWS provides world-class cloud infrastructure, reliability, and security to run enterprise platforms at global scale.",
    benefit: "Global cloud footprint, managed infrastructure, elastic scalability, automated DevOps pipelines, and strict compliance standards.",
    expertise: "Certified cloud engineers configuring resilient serverless architectures, Kubernetes deployments, and automated CI/CD pipelines.",
  },
];

export default function Technologies() {
  const [active, setActive] = useState<(typeof TECHS)[number] | null>(null);

  return (
    <section id="technologies" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper-dim/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
            THE TOOLKIT
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink">
            The technology behind what we build.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {TECHS.map((tech, i) => (
            <motion.button
              type="button"
              key={tech.name}
              onClick={() => setActive(tech)}
              data-cursor="Details"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-start justify-between rounded-2xl border border-grid bg-white p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blueline/40 min-h-[160px] cursor-pointer"
            >
              <div>
                <span className="font-display text-xl sm:text-2xl font-bold text-ink transition-transform duration-300 group-hover:scale-105 origin-left block">
                  {tech.name}
                </span>
                <p className="mt-2.5 text-sm sm:text-base text-slate leading-relaxed">
                  {tech.description}
                </p>
              </div>
              <span className="mt-4 text-sm sm:text-[15px] text-slate group-hover:text-blueline transition-colors font-semibold">
                View why we use it →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="reg-corners text-ink relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 text-slate hover:text-ink transition-colors p-2 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">{active.name}</h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-blueline mb-1.5 font-semibold">
                    Why we use it
                  </p>
                  <p className="text-base text-slate leading-relaxed">{active.why}</p>
                </div>
                <div>
                  <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-blueline mb-1.5 font-semibold">
                    Benefits
                  </p>
                  <p className="text-base text-slate leading-relaxed">{active.benefit}</p>
                </div>
                <div>
                  <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-blueline mb-1.5 font-semibold">
                    Our expertise
                  </p>
                  <p className="text-base text-slate leading-relaxed">{active.expertise}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
