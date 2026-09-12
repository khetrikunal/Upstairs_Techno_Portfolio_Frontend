/**
 * Partners & Projects Data
 *
 * This is the single source of truth for all partner companies and the
 * projects Upstairs Techno has delivered for them.
 *
 * To add a new partner: append an entry to the PARTNERS array.
 * To add a project to an existing partner: append to that partner's `projects` array.
 * To add project details later: fill in the optional fields (thumbnail, technologies, etc.)
 */

export type PartnerProject = {
  /** Unique identifier for the project */
  id: string;
  /** Display title of the project */
  title: string;
  /** Short one-to-two sentence description shown on the card */
  shortDescription: string;
  /** Optional: path to thumbnail image (relative to /public), e.g. "/partners/projects/pk-portfolio.jpg" */
  thumbnail?: string;
  /** Optional: technologies used, shown as pills */
  technologies?: string[];
  /** Optional: notable features/modules (especially useful for ERP/platform projects) */
  features?: string[];
  /** Optional: longer freeform details paragraph */
  details?: string;
  /** Optional: live project URL — shown as "View Project" button only when set */
  projectLink?: string;
};

export type Partner = {
  /** URL-safe slug used in /partners/[slug] routes */
  slug: string;
  /** Full company name */
  name: string;
  /** Path to logo image (relative to /public), e.g. "/partners/vittho.jpeg" */
  logo: string;
  /** Optional: industry or business type, shown on cards & detail page */
  industry?: string;
  /** Short description shown on the partner card on the homepage & /partners page */
  shortDescription: string;
  /** Ordered list of projects delivered for this partner */
  projects: PartnerProject[];
};

// ---------------------------------------------------------------------------
// Partner Data
// ---------------------------------------------------------------------------

export const PARTNERS: Partner[] = [
  {
    slug: "1824-vituraya-ventures",
    name: "1824 Vituraya Ventures",
    logo: "/Partners/vittho.jpeg",
    shortDescription: "Projects delivered by Upstairs Techno",
    projects: [
      {
        id: "vv-project-1",
        title: "Project 1",
        shortDescription: "Details will be provided soon.",
        // Fill in details later:
        // thumbnail: "/partners/projects/vv-project-1.jpg",
        // technologies: [],
        // features: [],
        // details: "",
        // projectLink: "",
      },
      {
        id: "vv-project-2",
        title: "Project 2",
        shortDescription: "Details will be provided soon.",
      },
      {
        id: "vv-project-3",
        title: "Project 3",
        shortDescription: "Details will be provided soon.",
      },
      {
        id: "vv-project-4",
        title: "Project 4",
        shortDescription: "Details will be provided soon.",
      },
    ],
  },

  {
    slug: "pk-corporate",
    name: "PK Corporate",
    logo: "/Partners/Pk Corporate.jpeg",
    industry: "T-Shirt Manufacturing",
    shortDescription: "T-Shirt Manufacturing",
    projects: [
      {
        id: "pk-portfolio-website",
        title: "Portfolio Website",
        shortDescription:
          "A professional portfolio website designed and developed for PK Corporate to showcase their brand, products, and services online.",
        // thumbnail: "/partners/projects/pk-portfolio.jpg",  // add when available
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        details:
          "A fully responsive, performance-optimized website built to establish PK Corporate's digital presence. The site presents the company's T-Shirt manufacturing capabilities, product catalogue, and contact information in a clean, professional format.",
        // projectLink: "",  // add live URL when available
      },
      {
        id: "pk-erp-system",
        title: "ERP System",
        shortDescription:
          "A comprehensive Enterprise Resource Planning system built to streamline PK Corporate's manufacturing operations, inventory management, and business workflows.",
        // thumbnail: "/partners/projects/pk-erp.jpg",  // add when available
        technologies: ["React", "Node.js", "PostgreSQL", "Express"],
        features: [
          "Inventory & Stock Management",
          "Order Processing & Tracking",
          "Production Planning",
          "Supplier & Vendor Management",
          "Financial Reporting & Accounts",
          "HR & Attendance Management",
          "Sales & Customer Management",
        ],
        details:
          "A full-featured ERP platform tailored to the T-Shirt manufacturing workflow. The system integrates production planning with inventory control, order tracking, and financial reporting — giving PK Corporate a single source of truth for all business operations.",
        // projectLink: "",  // add when available
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Look up a partner by slug. Returns undefined if not found. */
export function getPartnerBySlug(slug: string): Partner | undefined {
  return PARTNERS.find((p) => p.slug === slug);
}

/** All slugs — used for generateStaticParams in dynamic routes. */
export function getAllPartnerSlugs(): string[] {
  return PARTNERS.map((p) => p.slug);
}
