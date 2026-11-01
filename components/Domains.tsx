"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Hotel,
  Sparkles,
  Landmark,
  Home,
  Factory,
  Truck,
  Leaf,
  Globe,
  ShoppingCart,
  Tv,
} from "lucide-react";

export interface DomainItem {
  id: string;
  name: string;
  tagline: string;
  icon: typeof HeartPulse;
  color: string;
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
    name: "Business & Enterprise",
    tagline: "Mission-critical operations, resource planning, and corporate intelligence.",
    icon: Building2,
    color: "#2557FF",
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
  {
    id: "finance-fintech",
    name: "Finance & FinTech",
    tagline: "Banking systems, payment platforms, and financial analytics solutions.",
    icon: Landmark,
    color: "#0EA5E9",
    bgLight: "bg-sky-500/10 text-sky-600",
    solutions: [
      "Banking Software",
      "Payment Gateway Integration",
      "Loan Management System",
      "Accounting & Finance Software",
      "Digital Wallet",
      "Insurance Management System",
      "Financial Analytics Dashboard",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Property listing, transaction management, and CRM for real estate businesses.",
    icon: Home,
    color: "#F59E0B",
    bgLight: "bg-yellow-500/10 text-yellow-600",
    solutions: [
      "Property Management System",
      "Real Estate CRM",
      "Property Listing Portal",
      "Rental Management System",
      "Construction Project Management",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Production planning, quality control, and supply chain for manufacturers.",
    icon: Factory,
    color: "#64748B",
    bgLight: "bg-slate-500/10 text-slate-600",
    solutions: [
      "Manufacturing ERP",
      "Production Planning System",
      "Quality Management System",
      "Inventory & Warehouse Management",
      "Supply Chain Management",
    ],
  },
  {
    id: "logistics-transportation",
    name: "Logistics & Transportation",
    tagline: "Fleet management, route optimization, and delivery tracking platforms.",
    icon: Truck,
    color: "#F97316",
    bgLight: "bg-orange-500/10 text-orange-600",
    solutions: [
      "Fleet Management System",
      "Route Optimization Platform",
      "Delivery Tracking System",
      "Warehouse Management System",
      "Freight Management Software",
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture & AgriTech",
    tagline: "Farm management, supply chain, and precision agriculture platforms.",
    icon: Leaf,
    color: "#22C55E",
    bgLight: "bg-green-500/10 text-green-600",
    solutions: [
      "Farm Management System",
      "Crop Monitoring Platform",
      "Agricultural Supply Chain",
      "Livestock Management",
      "AgriTech Marketplace",
    ],
  },
  {
    id: "government",
    name: "Government & Public Services",
    tagline: "Citizen portals, e-governance platforms, and public service management.",
    icon: Globe,
    color: "#6366F1",
    bgLight: "bg-indigo-500/10 text-indigo-600",
    solutions: [
      "e-Governance Portal",
      "Citizen Service Platform",
      "Public Records Management",
      "Government ERP",
      "Digital Identity System",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    tagline: "Omnichannel retail, inventory automation, and customer loyalty platforms.",
    icon: ShoppingCart,
    color: "#EC4899",
    bgLight: "bg-pink-500/10 text-pink-600",
    solutions: [
      "Retail POS System",
      "Inventory Management",
      "Customer Loyalty Platform",
      "Omnichannel Retail Solution",
      "Retail Analytics Dashboard",
    ],
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    tagline: "Streaming platforms, content management, and digital publishing solutions.",
    icon: Tv,
    color: "#A855F7",
    bgLight: "bg-purple-500/10 text-purple-600",
    solutions: [
      "OTT / Streaming Platform",
      "Content Management System",
      "Digital Publishing Platform",
      "Event Ticketing System",
      "Media Analytics Dashboard",
    ],
  },
];

export default function Domains() {
  const shouldReduceMotion = useReducedMotion();
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section
      id="domains"
      className="relative py-12 sm:py-16 lg:py-20 bg-paper overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Decorative gradient glow blobs */}
      <div className="domains-glow absolute -top-32 -left-32 w-80 h-80 bg-blueline/10 rounded-full blur-3xl pointer-events-none" />
      <div className="domains-glow domains-glow-delayed absolute -bottom-32 -right-32 w-80 h-80 bg-blueline/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="text-center max-w-3xl mx-auto mb-7 sm:mb-9"
        >
          <div className="clay-pill clay-pill-accent mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blueline" />
            Industry Expertise
          </div>
          <h2 className="font-display text-section-heading font-black text-ink tracking-tight text-balance">
            What Domains We Work In
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-blueline/40 via-blueline to-blueline/40" />
          <p className="mt-3 text-sm sm:text-base text-slate leading-relaxed text-balance">
            Tailored software solutions across key industries — built to streamline operations and accelerate digital growth.
          </p>
        </motion.div>

        {/* Domain Tags Grid — names only, no subcategories */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.045 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-24px" }}
        >
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <motion.button
                type="button"
                key={domain.id}
                id={domain.id}
                variants={{
                  hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.015 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                aria-label={`${domain.name}. ${domain.tagline}`}
                aria-pressed={activeDomain === domain.id}
                onClick={() => setActiveDomain((current) => current === domain.id ? null : domain.id)}
                className="group relative flex min-h-28 sm:min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-ink/10 bg-white/90 p-3 text-center shadow-[0_3px_14px_rgba(11,27,58,0.05)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-blueline/60 hover:bg-white hover:shadow-[0_8px_24px_rgba(37,87,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline focus-visible:ring-offset-2"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blueline/[0.07] via-transparent to-blueline/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                {/* Icon badge */}
                <div
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{
                    backgroundColor: `${domain.color}14`,
                    color: domain.color,
                    border: `1.5px solid ${domain.color}30`,
                  }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </div>

                {/* Domain name only */}
                <p className="relative z-10 font-display text-xs sm:text-sm font-bold text-ink leading-snug">
                  {domain.name}
                </p>
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-ink via-[#102c62] to-blueline px-3 py-2 text-[11px] leading-snug text-white transition-all duration-[250ms] ${activeDomain === domain.id ? "opacity-100" : "pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}
                >
                  {domain.tagline}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Restrained ambient accent, disabled for reduced-motion preferences. */}
      <style>{`
        @keyframes domainsGlowDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -8px); }
        }
        .domains-glow { animation: domainsGlowDrift 12s ease-in-out infinite; }
        .domains-glow-delayed { animation-delay: -6s; }
        @media (prefers-reduced-motion: reduce) {
          .domains-glow, .domains-glow-delayed { animation: none; }
        }
      `}</style>
    </section>
  );
}
