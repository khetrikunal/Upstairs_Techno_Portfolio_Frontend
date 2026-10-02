"use client";

import { motion, useReducedMotion } from "framer-motion";
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
            Tailored software solutions across key industries — built to streamline operations and accelerate digital growth.
          </p>
        </motion.div>

        {/* Domain Tags Grid — names only, no subcategories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                id={domain.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-grid/70 bg-white p-4 sm:p-5 text-center shadow-sm hover:shadow-md hover:border-blueline/30 transition-all duration-300 cursor-default"
                style={
                  shouldReduceMotion
                    ? {}
                    : {
                        animation: `domainFloat ${2.8 + (idx % 4) * 0.35}s ${idx * 0.18}s ease-in-out infinite`,
                      }
                }
              >
                {/* Icon badge */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${domain.color}14`,
                    color: domain.color,
                    border: `1.5px solid ${domain.color}30`,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Domain name only */}
                <p className="font-display text-sm sm:text-base font-bold text-ink leading-snug">
                  {domain.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Float keyframe */}
      <style>{`
        @keyframes domainFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
