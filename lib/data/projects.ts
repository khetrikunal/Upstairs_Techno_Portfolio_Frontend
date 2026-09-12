// ─────────────────────────────────────────────────────────────────────────────
// Upstairs Techno — Real Project Portfolio
// ─────────────────────────────────────────────────────────────────────────────

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  other?: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  businessProblem: string;
  solution: string;
  technologies: string[];        // flat list for pills/badges
  techStack?: TechStack;         // structured for detail page
  features: string[];
  status: "Completed" | "In Progress" | "Live";
  industry: string;
  projectType: string;
  duration?: string;
  year?: string;
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  icon: string;
  featured?: boolean;
  impact: string[];
}

export type ProjectCategory =
  | "E-commerce"
  | "ERP"
  | "Healthcare"
  | "Procurement"
  | "Fitness & Events"
  | "Real Estate"
  | "Manufacturing ERP"
  | "Education ERP";

export interface ProjectCategoryMeta {
  id: ProjectCategory;
  emoji: string;
  label: string;
  description: string;
  color: string;
}

export const PROJECT_CATEGORIES: ProjectCategoryMeta[] = [
  { id: "E-commerce",       emoji: "🛒", label: "E-commerce",        description: "Online retail and B2B/B2C commerce platforms",        color: "#2557FF" },
  { id: "ERP",              emoji: "🏢", label: "ERP",               description: "Enterprise resource planning systems",                color: "#7C3AED" },
  { id: "Healthcare",       emoji: "🏥", label: "Healthcare",        description: "Hospital management and telemedicine platforms",       color: "#DC2626" },
  { id: "Procurement",      emoji: "📋", label: "Procurement",       description: "Purchase-to-pay and procurement platforms",           color: "#059669" },
  { id: "Fitness & Events", emoji: "🏃", label: "Fitness & Events",  description: "Fitness challenges and event registration platforms", color: "#EA580C" },
  { id: "Real Estate",      emoji: "🏠", label: "Real Estate",       description: "Real estate sales, CRM, and operations platforms",   color: "#0891B2" },
  { id: "Manufacturing ERP",emoji: "🏭", label: "Manufacturing ERP", description: "Custom manufacturing and order management ERP",      color: "#C98A3E" },
  { id: "Education ERP",    emoji: "🎓", label: "Education ERP",     description: "School and institution management systems",          color: "#D97706" },
];

export const ALL_PROJECTS: Project[] = [
  // ── 1. ManuFlow ────────────────────────────────────────────────────────────
  {
    id: "proj-001",
    slug: "manuflow",
    name: "ManuFlow",
    tagline: "Streamlined Manufacturing Operations, End to End.",
    category: "Manufacturing ERP",
    shortDescription:
      "An integrated manufacturing operations platform designed to bring order, visibility, and efficiency to production workflows.",
    description:
      "ManuFlow is a manufacturing management platform built to digitize and centralize production operations. It provides a unified view of the shop floor, materials, production orders, and delivery — replacing disconnected manual processes with a single, coordinated system.",
    businessProblem:
      "Manufacturing businesses relied on manual tracking, paper-based records, and disconnected spreadsheets to manage production orders, inventory, and dispatch — leading to errors, delays, and poor operational visibility.",
    solution:
      "ManuFlow centralizes all manufacturing workflows into one platform. Production managers get real-time visibility into orders, materials, and output. The system automates status tracking and reduces the manual coordination overhead between departments.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
    },
    features: [
      "Production Order Management",
      "Raw Material Tracking",
      "Shop Floor Monitoring",
      "Dispatch & Delivery Management",
      "Inventory Management",
      "Reporting & Analytics Dashboard",
    ],
    status: "Completed",
    industry: "Manufacturing",
    projectType: "Web Application",
    accentColor: "#C98A3E",
    icon: "🏭",
    featured: true,
    impact: [
      "Replaced paper-based production tracking with a centralized digital system",
      "Improved operational visibility across production, inventory, and dispatch",
      "Reduced coordination overhead between departments",
      "Enabled faster decision-making through real-time dashboards",
    ],
  },

  // ── 2. MediConnect ─────────────────────────────────────────────────────────
  {
    id: "proj-002",
    slug: "mediconnect",
    name: "MediConnect",
    tagline: "Connecting Patients with Doctors, Anytime, Anywhere.",
    category: "Healthcare",
    shortDescription:
      "A healthcare telemedicine platform with doctor discovery, appointment booking, video consultations, prescriptions, and medicine ordering.",
    description:
      "MediConnect is a comprehensive telemedicine and healthcare platform that bridges the gap between patients and healthcare providers. It allows patients to discover doctors by specialty, book appointments, attend video consultations, receive digital prescriptions, and order medicines — all in one place.",
    businessProblem:
      "Patients faced long wait times, geographical limitations, and fragmented processes for accessing healthcare — from finding a specialist to getting a prescription filled. There was no integrated digital solution combining discovery, consultation, and post-consultation care.",
    solution:
      "MediConnect integrates the entire patient journey into a single digital platform. Doctor discovery with specialty filters, calendar-based appointment booking, secure video consultations, digital prescription management, and medicine ordering create a seamless end-to-end healthcare experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "Razorpay"],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      other: ["WebRTC (Video Consultation)", "Razorpay (Payments)"],
    },
    features: [
      "Doctor Discovery & Specialty Search",
      "Appointment Booking & Calendar Management",
      "Video Consultation (Telemedicine)",
      "Digital Prescription Management",
      "Medicine Ordering",
      "Online Payments",
      "Patient Medical History",
      "Doctor Dashboard",
    ],
    status: "Completed",
    industry: "Healthcare",
    projectType: "Web Application",
    accentColor: "#DC2626",
    icon: "🏥",
    featured: true,
    impact: [
      "Enabled patients to consult doctors remotely without travel",
      "Reduced appointment no-shows through digital booking and reminders",
      "Digitized the prescription and medicine ordering workflow",
      "Provided doctors with a centralized dashboard for managing consultations",
    ],
  },

  // ── 3. MediCore HMS ────────────────────────────────────────────────────────
  {
    id: "proj-003",
    slug: "medicore-hms",
    name: "MediCore HMS",
    tagline: "Smart Hospital Management Made Simple.",
    category: "Healthcare",
    shortDescription:
      "A comprehensive Hospital Management System covering patient registration, OPD, IPD, bed management, appointments, and billing.",
    description:
      "MediCore HMS is a full-featured Hospital Management System designed for hospitals, clinics, and multi-specialty healthcare centres. It digitizes the complete patient journey — from initial registration through OPD and IPD admission, bed allocation, diagnostics, and discharge billing.",
    businessProblem:
      "Hospitals managing patients across OPD, IPD, and billing through manual registers and disconnected software faced duplication of data, billing errors, delayed discharge processes, and poor visibility into bed occupancy and department workflows.",
    solution:
      "MediCore HMS provides an integrated platform where patient data flows seamlessly from registration to OPD consultation, IPD admission, bed management, diagnostics, and final billing — eliminating duplication and creating a single patient record accessible across departments.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    techStack: {
      frontend: ["React"],
      backend: ["Spring Boot"],
      database: ["PostgreSQL"],
      other: ["JWT (Authentication)"],
    },
    features: [
      "Patient Registration & Medical Records",
      "OPD (Outpatient Department) Management",
      "IPD (Inpatient Department) Management",
      "Bed Management & Availability Tracking",
      "Appointment Scheduling",
      "Department & Doctor Management",
      "Billing & Invoice Generation",
      "Discharge Summary",
    ],
    status: "Completed",
    industry: "Healthcare",
    projectType: "Web Application",
    accentColor: "#DC2626",
    icon: "🩺",
    featured: false,
    impact: [
      "Centralized patient records across OPD, IPD, and billing departments",
      "Reduced billing errors through automated charge capture",
      "Real-time bed occupancy visibility improved patient flow management",
      "Faster discharge processing through integrated billing and discharge summaries",
    ],
  },

  // ── 4. ProcureFlow ─────────────────────────────────────────────────────────
  {
    id: "proj-004",
    slug: "procureflow",
    name: "ProcureFlow",
    tagline: "Enterprise Procurement, Fully Automated.",
    category: "Procurement",
    shortDescription:
      "An enterprise Purchase-to-Pay procurement platform covering purchase requests, budget validation, RFQs, vendor quotations, purchase orders, GRNs, invoice matching, and payment release.",
    description:
      "ProcureFlow is a complete Purchase-to-Pay (P2P) procurement management platform built for enterprises that need full control over their procurement lifecycle. The system covers every stage from purchase request initiation through budget validation, RFQ creation, vendor quotation comparison, purchase order management, goods receipt, invoice matching, and payment release.",
    businessProblem:
      "Enterprise procurement teams were managing purchase requests, vendor communications, purchase orders, and invoice approvals through emails, spreadsheets, and disconnected systems — causing delays, budget overruns, and zero audit trail across the procurement cycle.",
    solution:
      "ProcureFlow digitizes the entire Purchase-to-Pay cycle with structured workflows, automated budget checks, multi-vendor RFQ management, three-way invoice matching, and role-based approval flows — giving procurement teams full control and auditability.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    techStack: {
      frontend: ["React"],
      backend: ["Spring Boot"],
      database: ["PostgreSQL"],
      other: ["JWT (Authentication & Role-based Access)"],
    },
    features: [
      "Purchase Request Management",
      "Budget Validation & Control",
      "RFQ (Request for Quotation) Management",
      "Vendor Quotation Comparison",
      "Purchase Order (PO) Management",
      "Goods Receipt Note (GRN)",
      "Three-Way Invoice Matching",
      "Payment Release Workflow",
      "Vendor Management",
      "Approval Workflows & Role-based Access",
      "Procurement Analytics & Reporting",
    ],
    status: "Completed",
    industry: "Enterprise / Manufacturing",
    projectType: "Web Application",
    accentColor: "#059669",
    icon: "📋",
    featured: true,
    impact: [
      "Eliminated manual email-based procurement workflows",
      "Automated budget validation preventing unauthorized spending",
      "Three-way invoice matching reduced payment discrepancies",
      "Complete audit trail across the Purchase-to-Pay cycle",
      "Improved vendor management and quotation comparison",
    ],
  },

  // ── 5. PK Corporate ERP ────────────────────────────────────────────────────
  {
    id: "proj-005",
    slug: "pk-corporate-erp",
    name: "PK Corporate ERP",
    tagline: "Custom ERP Built for Apparel Manufacturing.",
    category: "Manufacturing ERP",
    shortDescription:
      "A custom apparel manufacturing and order management ERP with customer management, GST pricing, payments, design tracking, production, dispatch, and role-based access.",
    description:
      "PK Corporate ERP is a custom-built enterprise resource planning system developed for PK Corporate, a T-shirt manufacturing business. The system covers the complete manufacturing workflow — from customer order intake and design approval through production, quality check, dispatch, and financial reporting with GST-compliant invoicing.",
    businessProblem:
      "PK Corporate managed customer orders, production schedules, design approvals, dispatch records, and billing through manual logs and spreadsheets. This led to production delays, order tracking errors, and challenges in generating accurate GST-compliant invoices.",
    solution:
      "PK Corporate ERP brings all business operations into a single, role-based platform. Sales teams manage orders and customer communications. Production teams track manufacturing stages. Finance handles GST invoicing and payment tracking. Management gets full visibility through dashboards.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
    },
    features: [
      "Customer Management",
      "Order Management & Tracking",
      "Design & Artwork Approval Workflow",
      "GST-Compliant Pricing & Invoicing",
      "Production Tracking",
      "Quality Management",
      "Dispatch & Delivery Management",
      "Payment Tracking",
      "Role-Based Access Control",
      "Business Dashboard & Reports",
    ],
    status: "Completed",
    industry: "Apparel Manufacturing",
    projectType: "Web Application",
    accentColor: "#7C3AED",
    icon: "👔",
    featured: false,
    impact: [
      "Centralized all order and production data in one system",
      "GST-compliant invoicing reduced billing errors",
      "Design approval workflow eliminated miscommunication between sales and production",
      "Real-time order status visibility for management and customers",
    ],
  },

  // ── 6. School ERP ──────────────────────────────────────────────────────────
  {
    id: "proj-006",
    slug: "school-erp",
    name: "School ERP",
    tagline: "Smart School Management Made Simple.",
    category: "Education ERP",
    shortDescription:
      "A comprehensive school management platform covering student management, attendance, examinations, timetable, fees, and teacher management.",
    description:
      "School ERP is a complete institution management system designed to digitize and streamline the administrative, academic, and financial operations of schools. The platform provides dedicated modules for every stakeholder — administrators, teachers, students, and parents — making day-to-day school management efficient and paperless.",
    businessProblem:
      "Schools managing student records, attendance, examination results, fee collection, and timetables through manual registers and disconnected spreadsheets faced data inconsistencies, delayed reporting, and high administrative overhead.",
    solution:
      "School ERP consolidates all school operations into a single, role-based platform. Student records, attendance, examinations, fee management, and timetables are managed digitally — with automated reports and real-time access for teachers, administrators, and parents.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    techStack: {
      frontend: ["React"],
      backend: ["Spring Boot"],
      database: ["PostgreSQL"],
    },
    features: [
      "Student Management & Profiles",
      "Teacher Management",
      "Attendance Tracking",
      "Examination & Results Management",
      "Timetable Management",
      "Fee Management & Payment Tracking",
      "Class & Section Management",
      "Academic Year Management",
      "Reports & Analytics",
      "Role-Based Access (Admin, Teacher, Student, Parent)",
    ],
    status: "Completed",
    industry: "Education",
    projectType: "Web Application",
    accentColor: "#D97706",
    icon: "🎓",
    featured: true,
    impact: [
      "Eliminated paper-based student and attendance records",
      "Automated examination result processing and report card generation",
      "Fee collection tracking reduced revenue leakage",
      "Real-time visibility for parents on student progress and attendance",
    ],
  },

  // ── 7. Tri Motion ──────────────────────────────────────────────────────────
  {
    id: "proj-007",
    slug: "tri-motion",
    name: "Tri Motion",
    tagline: "Fitness Challenges & Events, Powered by Technology.",
    category: "Fitness & Events",
    shortDescription:
      "A fitness challenge and event registration platform with online payments, activity proof submission, and participant verification.",
    description:
      "Tri Motion is a digital platform built for fitness events and challenge management. It enables organizers to create and manage fitness challenges, handle participant registrations with online payments, collect activity proof submissions, and verify participant completion — all in one place.",
    businessProblem:
      "Fitness challenge organizers managed participant registrations, payment collection, and activity verification through manual processes — Google Forms, bank transfers, and WhatsApp groups — leading to administrative chaos and poor participant experience.",
    solution:
      "Tri Motion provides a streamlined digital platform where participants register and pay online, upload proof of activity completion, and receive digital verification. Organizers manage all participants, review submissions, and communicate through one dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Razorpay", "Cloudinary"],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      other: ["Razorpay (Payments)", "Cloudinary (Media Storage)"],
    },
    features: [
      "Event & Challenge Creation",
      "Participant Registration",
      "Online Payment Integration",
      "Activity Proof Submission",
      "Participant Verification & Status Tracking",
      "Organizer Dashboard",
      "Participant Dashboard",
      "Certificate / Completion Management",
    ],
    status: "Completed",
    industry: "Fitness & Sports",
    projectType: "Web Application",
    accentColor: "#EA580C",
    icon: "🏃",
    featured: false,
    impact: [
      "Digitized the entire participant registration and payment process",
      "Eliminated manual activity verification workflows",
      "Improved participant experience with a self-serve portal",
      "Organizers gained real-time visibility into registrations and completions",
    ],
  },

  // ── 8. Real Estate ─────────────────────────────────────────────────────────
  {
    id: "proj-008",
    slug: "real-estate",
    name: "Real Estate Guide",
    tagline: "Complete Real Estate Sales & CRM Operations Platform.",
    category: "Real Estate",
    shortDescription:
      "A real estate sales and CRM operations platform with property inventory, lead management, sales tracking, subscriptions, territory management, and team communication.",
    description:
      "Real Estate Guide is a comprehensive real estate operations platform designed to manage the complete sales lifecycle — from property inventory and lead capture through sales tracking, territory management, and team coordination. It serves as both a CRM and an operational backbone for real estate sales teams.",
    businessProblem:
      "Real estate businesses managed property listings, leads, sales pipelines, and team territories through fragmented tools — spreadsheets, WhatsApp groups, and separate CRM software — resulting in missed leads, poor visibility into the sales pipeline, and coordination failures between field teams.",
    solution:
      "Real Estate Guide consolidates property inventory management, lead capture and assignment, sales pipeline tracking, territory management, and team communication into a single platform — giving management full visibility and giving sales teams everything they need to close deals.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
    },
    features: [
      "Property Inventory Management",
      "Lead Management & Assignment",
      "Sales Pipeline Tracking",
      "Subscription Management",
      "Territory Management",
      "Team Communication",
      "Customer Management",
      "Reporting & Sales Analytics",
      "Role-Based Access Control",
    ],
    status: "Completed",
    industry: "Real Estate",
    projectType: "Web Application",
    accentColor: "#0891B2",
    icon: "🏠",
    featured: false,
    impact: [
      "Centralized property inventory and lead management in one system",
      "Eliminated lead leakage through structured assignment and tracking",
      "Territory management improved field team coordination",
      "Real-time sales pipeline visibility for management",
    ],
  },

  // ── 9. The Royal Mukhwas ───────────────────────────────────────────────────
  {
    id: "proj-009",
    slug: "the-royal-mukhwas",
    name: "The Royal Mukhwas",
    tagline: "Premium Mukhwas & Paan — Online, Your Way.",
    category: "E-commerce",
    shortDescription:
      "A B2C/B2B e-commerce platform for premium mukhwas and paan products with online payments, wholesale ordering, and a complete admin management system.",
    description:
      "The Royal Mukhwas is a dedicated e-commerce platform built for a premium mukhwas and paan brand. It supports both retail (B2C) and wholesale (B2B) ordering with online payment integration, product management, and a comprehensive admin panel for order and inventory management.",
    businessProblem:
      "The Royal Mukhwas was selling through physical stores and manual WhatsApp orders, with no online presence. Wholesale buyers had no structured way to place bulk orders, and the business had no visibility into sales data or inventory levels.",
    solution:
      "A dedicated e-commerce platform was built with a consumer-facing storefront for retail customers and a wholesale ordering portal for B2B buyers. Online payments, order management, and a full admin panel gave the business complete control over their digital sales channel.",
    technologies: ["React", "Node.js", "PostgreSQL", "Razorpay"],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      other: ["Razorpay (Payments)"],
    },
    features: [
      "Product Catalogue & Management",
      "B2C Retail Storefront",
      "B2B Wholesale Ordering",
      "Online Payment Integration",
      "Order Management & Tracking",
      "Inventory Management",
      "Admin Dashboard",
      "Customer Management",
    ],
    status: "Completed",
    industry: "Food & Retail",
    projectType: "E-commerce Web Application",
    accentColor: "#2557FF",
    icon: "🌿",
    featured: false,
    impact: [
      "Established a digital sales channel replacing manual WhatsApp ordering",
      "B2B wholesale portal enabled structured bulk ordering for trade buyers",
      "Online payments improved cash flow with instant payment confirmation",
      "Admin panel gave full visibility into orders, customers, and inventory",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return ALL_PROJECTS.map((p) => p.slug);
}

export function getCategoryMeta(categoryId: ProjectCategory): ProjectCategoryMeta {
  return (
    PROJECT_CATEGORIES.find((c) => c.id === categoryId) ?? {
      id: categoryId,
      emoji: "🗂",
      label: categoryId,
      description: "",
      color: "#2557FF",
    }
  );
}
