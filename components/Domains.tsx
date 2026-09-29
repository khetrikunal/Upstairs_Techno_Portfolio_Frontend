"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Hotel,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export interface DomainItem {
  id: string;
  name: string;
  tagline: string;
  icon: typeof HeartPulse;
  color: string;
  borderColor: string;
  bgLight: string;
  solutions: string[];
}

export const DOMAINS: DomainItem[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Clinical workflows, hospital administration, and telemedicine platforms.",
    icon: HeartPulse,
    color: "#EF4444",
    borderColor: "border-rose-500/30",
    bgLight: "bg-rose-500/10 text-rose-600",
    solutions: [
      "Hospital Management System (HMS)",
      "Clinic Management System",
      "Patient Management System",
      "Doctor Appointment System",
      "Pharmacy Management System",
      "Laboratory Management System",
      "Telemedicine Platform",
    ],
  },
  {
    id: "education",
    name: "Education",
    tagline: "Academic administration, learning portals, and student lifecycle systems.",
    icon: GraduationCap,
    color: "#D97706",
    borderColor: "border-amber-500/30",
    bgLight: "bg-amber-500/10 text-amber-600",
    solutions: [
      "School ERP",
      "College Management System",
      "LMS — Learning Management System",
      "Online Examination System",
      "Student Management System",
      "Coaching/Class Management Software",
      "E-learning Platform",
      "Student/Parent Portal",
    ],
  },
  {
    id: "commerce-sales",
    name: "Commerce & Sales",
    tagline: "Digital storefronts, marketplace platforms, and omnichannel point-of-sale.",
    icon: ShoppingBag,
    color: "#10B981",
    borderColor: "border-emerald-500/30",
    bgLight: "bg-emerald-500/10 text-emerald-600",
    solutions: [
      "E-commerce Website",
      "E-commerce Mobile App",
      "B2B Marketplace",
      "B2C Marketplace",
      "Multi-Vendor Marketplace",
      "Online Ordering System",
      "POS — Point of Sale System",
      "Billing & Invoicing Software",
      "Product Management System",
      "Subscription Management System",
      "Booking & Appointment System",
    ],
  },
  {
    id: "business-enterprise",
    name: "Business & Enterprise Software",
    tagline: "Mission-critical operations, resource planning, and corporate intelligence.",
    icon: Building2,
    color: "#2557FF",
    borderColor: "border-blueline/30",
    bgLight: "bg-blueline/10 text-blueline",
    solutions: [
      "ERP — Enterprise Resource Planning",
      "CRM — Customer Relationship Management",
      "HRMS — Human Resource Management System",
      "HRM — Human Resource Management",
      "Payroll Management System",
      "Accounting & Finance Software",
      "Inventory Management System",
      "Supply Chain Management System (SCM)",
      "Project Management System",
      "Document Management System (DMS)",
      "Enterprise Asset Management (EAM)",
      "Business Process Management (BPM)",
      "Business Intelligence (BI) Dashboard",
      "Customer Support / Helpdesk Software",
      "Task Management Software",
    ],
  },
  {
    id: "hospitality-travel",
    name: "Hospitality & Travel",
    tagline: "Reservation engines, guest services, and travel management platforms.",
    icon: Hotel,
    color: "#8B5CF6",
    borderColor: "border-purple-500/30",
    bgLight: "bg-purple-500/10 text-purple-600",
    solutions: [
      "Hotel Management System",
      "Restaurant Management System",
      "Restaurant POS",
      "Food Ordering Platform",
      "Travel Booking Platform",
      "Hotel Booking Platform",
      "Event Management System",
    ],
  },
];

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const displayedDomains = selectedDomain
    ? DOMAINS.filter((d) => d.id === selectedDomain)
    : DOMAINS;

  return (
    <section
      id="domains"
      className="relative py-20 sm:py-28 lg:py-32 bg-paper overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-35 pointer-events-none" />

      {/* Decorative gradient glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blueline/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brass/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blueline/30 bg-blueline/5 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-widest text-blueline uppercase mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blueline" />
            Industry Expertise
          </div>
          <h2 className="font-display text-section-heading font-bold text-ink tracking-tight text-balance">
            What Domains We Work In
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate leading-relaxed text-balance">
            We architect and deliver tailored software solutions across key industries — engineered to streamline operations and accelerate digital growth.
          </p>
        </motion.div>

        {/* Continuous Vertical Bouncing / Up-Down Animated Domain Display */}
        <div className="mb-12 sm:mb-16">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-slate mb-5 font-semibold">
            Explore By Domain
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto px-2">
            {/* View All Button */}
            <motion.button
              type="button"
              onClick={() => setSelectedDomain(null)}
              animate={
                shouldReduceMotion
                  ? { y: 0 }
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-display font-bold transition-all shadow-sm cursor-pointer ${
                selectedDomain === null
                  ? "bg-ink text-paper shadow-md shadow-ink/20"
                  : "bg-white text-ink/80 border border-grid hover:border-ink/40"
              }`}
            >
              All Domains (5)
            </motion.button>

            {DOMAINS.map((domain, index) => {
              const Icon = domain.icon;
              const isSelected = selectedDomain === domain.id;
              // Staggered bounce animation parameters for natural dynamic wave
              const bounceDuration = 2.8 + (index % 3) * 0.4;
              const bounceDelay = index * 0.35;

              return (
                <motion.button
                  key={domain.id}
                  type="button"
                  onClick={() =>
                    setSelectedDomain(isSelected ? null : domain.id)
                  }
                  animate={
                    shouldReduceMotion
                      ? { y: 0 }
                      : {
                          y: [0, -8, 0],
                        }
                  }
                  transition={{
                    duration: bounceDuration,
                    delay: bounceDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`group inline-flex items-center gap-2.5 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-display font-bold transition-all shadow-sm cursor-pointer ${
                    isSelected
                      ? "bg-blueline text-paper shadow-lg shadow-blueline/30 scale-105"
                      : "bg-white border border-grid hover:border-blueline/40 hover:shadow-md text-ink"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : domain.bgLight
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span>{domain.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/25 text-white"
                        : "bg-paper-dim text-slate"
                    }`}
                  >
                    {domain.solutions.length}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {displayedDomains.map((domain, idx) => {
            const Icon = domain.icon;
            const isLarge = domain.id === "business-enterprise";

            return (
              <motion.div
                key={domain.id}
                id={domain.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex flex-col rounded-3xl border border-grid/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blueline/40 transition-all duration-300 overflow-hidden ${
                  isLarge && displayedDomains.length > 1
                    ? "lg:col-span-2"
                    : "col-span-1"
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ backgroundColor: domain.color }}
                />

                {/* Card Header with Floating Animated Icon Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    {/* Animated vertical bouncing icon container */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? { y: 0 }
                          : {
                              y: [0, -5, 0],
                            }
                      }
                      transition={{
                        duration: 3 + (idx % 2) * 0.5,
                        delay: idx * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{
                        backgroundColor: `${domain.color}15`,
                        color: domain.color,
                        border: `1.5px solid ${domain.color}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
                        {domain.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-slate mt-0.5">
                        {domain.solutions.length} Software Solutions
                      </p>
                    </div>
                  </div>

                  <span
                    className="hidden sm:inline-flex text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0"
                    style={{
                      backgroundColor: `${domain.color}15`,
                      color: domain.color,
                    }}
                  >
                    Domain
                  </span>
                </div>

                {/* Domain Tagline */}
                <p className="text-sm sm:text-base text-slate leading-relaxed mb-6">
                  {domain.tagline}
                </p>

                {/* Solutions List */}
                <div className="mt-auto pt-5 border-t border-grid/60">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate mb-3.5 font-bold">
                    Solutions We Build
                  </p>

                  <div
                    className={`grid gap-2 ${
                      isLarge && displayedDomains.length > 1
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {domain.solutions.map((solution) => (
                      <div
                        key={solution}
                        className="group/item flex items-start gap-2.5 rounded-xl border border-grid/60 bg-paper/60 hover:bg-paper hover:border-blueline/30 p-2.5 sm:p-3 transition-colors"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5 transition-colors group-hover/item:scale-110"
                          style={{ color: domain.color }}
                        />
                        <span className="text-xs sm:text-[13px] font-semibold text-ink/90 leading-snug group-hover/item:text-ink">
                          {solution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-6 pt-4 flex items-center justify-between">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blueline hover:text-blueline-soft transition-colors"
                  >
                    <span>Build for {domain.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-mono text-slate">
                    Custom Architecture
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
