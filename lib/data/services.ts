import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  about: string[];
  icon: LucideIcon;
  subServices: { title: string; description: string }[];
  process: string[];
  technologies: string[];
  projects: {
    title: string;
    industry: string;
    description: string;
    technologies: string[];
    caseStudySlug?: string;
  }[];
  results: string[];
  differentiators: { title: string; description: string; icon: LucideIcon }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription:
      "Align technology strategy with business goals using expert guidance, transformation planning, and cloud advisory services.",
    intro:
      "Enterprise IT leadership for companies that need digital momentum without the complexity of a slow, internal transformation.",
    about: [
      "IT Consulting is the bridge between business goals and the operational systems that support them. We help leadership teams make investment decisions, define technical strategy, and select the right execution path so every engineering dollar moves the business forward.",
      "From strategic roadmaps to cloud vendor evaluation and CTO-as-a-Service advisory, our consulting practice helps growing organizations operate with the confidence of a mature technology partner.",
    ],
    icon: Briefcase,
    subServices: [
      { title: "Business Analysis", description: "Translate business ambitions into measurable technical outcomes and prioritized initiatives." },
      { title: "Digital Transformation", description: "Design the migration path that modernizes your systems without breaking operations." },
      { title: "IT Strategy", description: "Build a technology roadmap that supports growth, reliability, and market differentiation." },
      { title: "Cloud Consulting", description: "Choose the right cloud architecture, security posture, and migration model for your business." },
      { title: "CTO as a Service", description: "Access senior technical leadership for planning, risk review, and engineering governance." },
    ],
    process: ["Discovery", "Planning", "Assessment", "Roadmapping", "Execution Support", "Review", "Ongoing Advisory"],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Enterprise Architecture"],
    projects: [
      {
        title: "Fintech Cloud Strategy Roadmap",
        industry: "Financial Services",
        description:
          "Built a multi-cloud transformation plan that trimmed time-to-market by 35% and created a reusable migration playbook.",
        technologies: ["AWS", "Azure", "Terraform"],
      },
      {
        title: "CTO Advisory for SaaS Portfolio",
        industry: "B2B SaaS",
        description:
          "Delivered senior technical governance, release cadence optimization, and go-to-market readiness for three high-growth products.",
        technologies: ["OKRs", "Roadmapping", "Stakeholder Alignment"],
      },
    ],
    results: [
      "Faster decision-making with a documented technology roadmap.",
      "Clear investment priorities for product, infrastructure, and security.",
      "Reduced vendor risk with a neutral cloud evaluation process.",
    ],
    differentiators: [
      { title: "Business-first analysis", description: "We start with your customer problem, not the latest technology hype.", icon: Sparkles },
      { title: "Vendor-agnostic advice", description: "Recommendations are chosen for the right outcome, not a preferred cloud provider.", icon: ShieldCheck },
      { title: "Practical delivery plans", description: "Roadmaps are built to be executed, not shelved as theoretical strategy documents.", icon: ArrowRight },
    ],
    faqs: [
      { question: "How long does an IT consulting engagement usually last?", answer: "Typical engagements run from 8 to 16 weeks, depending on discovery scope and the size of the organization." },
      { question: "Can you support existing internal IT teams?", answer: "Yes. We partner with in-house teams to augment strategy, review architecture, and help scale delivery without replacing existing operations." },
      { question: "Do you advise on cloud cost optimization?", answer: "Absolutely. Cloud efficiency is a core part of our strategy work, including cost forecasting and shared responsibility design." },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development Services",
    shortDescription:
      "Custom software built around your business, from discovery and development through deployment, modernization, and ongoing support.",
    intro:
      "Upstairs Techno's Software Development division designs, builds, and maintains custom software for startups, small businesses, and medium-to-large enterprises.",
    about: [
      "The division emphasizes proof of work, a repeatable sales process, and recurring maintenance and support contracts rather than relying only on one-time projects.",
      "We support clients across the complete software lifecycle, from discovery and development to deployment, maintenance, modernization, and ongoing support.",
    ],
    icon: Code2,
    subServices: [
      { title: "Custom Software", description: "Solutions designed around your specific business process and operating model." },
      { title: "Web & Mobile Apps", description: "Responsive digital products for customers, teams, and internal operations." },
      { title: "Enterprise Systems", description: "Secure, scalable software with controlled access, integrations, and reporting." },
      { title: "Maintenance & Modernization", description: "Ongoing support, enhancements, and legacy system improvements for long-term value." },
    ],
    process: ["Discovery", "Requirements", "Design", "Development", "Testing", "Deployment", "Maintenance", "Modernization"],
    technologies: ["React", "Angular", "Vue", "Node.js", "Python", "Java", ".NET", "PHP", "PostgreSQL", "MySQL", "AWS", "Azure", "Google Cloud"],
    projects: [
      {
        title: "Custom Business Portal",
        industry: "Small Business",
        description:
          "Delivered a tailored business portal with workflow automation, dashboards, and secure access for day-to-day operations.",
        technologies: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "SaaS Platform Buildout",
        industry: "Startups",
        description:
          "Built a subscription-oriented product with authentication, billing, admin tools, and a scalable cloud deployment model.",
        technologies: ["Vue", "Python", "AWS"],
      },
    ],
    results: [
      "Software shaped around the client’s real operational needs.",
      "More efficient workflows through automation and better integration.",
      "Long-term partnerships through maintenance, support, and modernization engagements.",
    ],
    differentiators: [
      { title: "Business-first delivery", description: "We start with a specific problem and build software around that outcome.", icon: Sparkles },
      { title: "Senior-led quality", description: "Architecture and engineering standards are guided by experienced technical leadership.", icon: ShieldCheck },
      { title: "Lifecycle support", description: "Projects are positioned for ongoing enhancement, maintenance, and modernization.", icon: ArrowRight },
    ],
    faqs: [
      { question: "What kinds of software do you build?", answer: "We develop custom portals, web applications, mobile apps, SaaS products, CRM/ERP systems, APIs, and e-commerce solutions tailored to client needs." },
      { question: "Do you support projects beyond launch?", answer: "Yes. We provide ongoing maintenance, support, modernization, and enhancement services as part of long-term delivery relationships." },
      { question: "Can you work with existing systems?", answer: "Yes. We regularly integrate with existing platforms and modernize legacy environments without disrupting day-to-day operations." },
    ],
  },
  {
    slug: "btds",
    title: "BTDS",
    shortDescription:
      "A structured engineering talent pipeline that transforms fresh graduates into industry-ready software professionals.",
    intro:
      "UpStairs' Talent Development Division (TDD) is not a traditional internship program — it's a continuous engineering talent pipeline.",
    about: [
      "We take students fresh out of college and, through structured training, mentoring, and real project experience, turn them into industry-ready software professionals.",
      "Every candidate enters with a clear path forward: progress through skill-based stages, contribute to real internal and client projects, and graduate ready to join our company or be placed with a partner organization.",
    ],
    icon: GraduationCap,
    subServices: [
      { title: "Student Acquisition", description: "Build a continuous pipeline through partnerships, campus drives, seminars, and digital outreach." },
      { title: "Enrollment & Assessment", description: "Evaluate students through registration, aptitude, technical, communication, and interview stages." },
      { title: "Foundation & Specialization", description: "Create a strong base in software fundamentals before advancing into full stack specialization." },
      { title: "Projects & Placement", description: "Expose candidates to real projects and performance-based employment or partner placement opportunities." },
    ],
    process: ["Acquire", "Assess", "Train", "Specialize", "Build", "Evaluate", "Deliver", "Certify", "Grow"],
    technologies: ["Angular", "React", "Next.js", ".NET", "ASP.NET Core", "SQL Server", "MySQL", "Docker", "CI/CD", "Azure"],
    projects: [
      {
        title: "Engineering Talent Pipeline",
        industry: "Education & Technology",
        description:
          "Prepared students through structured training, mentoring, and project-based learning to develop practical engineering capability.",
        technologies: ["Full Stack", "Mentoring", "Evaluation"],
      },
      {
        title: "Internship-to-Delivery Readiness",
        industry: "Colleges & Businesses",
        description:
          "Created a staged development journey that helps candidates transition from learning to real project contribution.",
        technologies: ["Agile", "Scrum", "Project Delivery"],
      },
    ],
    results: [
      "A continuous pipeline of trained and evaluated engineering talent.",
      "Clear pathways for students, colleges, and business partners.",
      "Strong preparation for real project work and future employment opportunities.",
    ],
    differentiators: [
      { title: "Industry-ready growth", description: "The model is designed to turn fresh graduates into practical software professionals through structured support.", icon: Sparkles },
      { title: "Mentored delivery", description: "Candidates learn through guided instruction, project work, and continuous evaluation rather than passive training alone.", icon: BookOpen },
      { title: "Business and college alignment", description: "The program builds value for students, partner colleges, and organizations that need dependable engineering talent.", icon: LayoutGrid },
    ],
    faqs: [
      { question: "Who is BTDS designed for?", answer: "BTDS is designed for students from relevant engineering and computer-science backgrounds who want practical training and professional growth." },
      { question: "How does the program work?", answer: "Candidates move through acquisition, assessment, technical foundation, specialization, projects, evaluation, and eventually internship or placement opportunities." },
      { question: "What kinds of outcomes does BTDS support?", answer: "It supports practical software capability, project experience, mentorship, and performance-based employment or placement opportunities." },
    ],
  },
  {
    slug: "education",
    title: "Education",
    shortDescription:
      "Empowering students and professionals with future-ready technology skills through AI courses, monthly coding competitions, internships, workshops, and corporate training.",
    intro:
      "Empowering Students and Professionals With Future-Ready Technology Skills — The Education Division of Upstairs Techno.",
    about: [
      "The Education Division of Upstairs Techno provides practical technology education for students, freshers, professionals, schools, colleges, and enterprise organizations.",
      "From school AI initiatives and college ML curricula to monthly coding competitions, hands-on internships, specialized workshops, and corporate tech training — we build the next generation of software pioneers.",
    ],
    icon: GraduationCap,
    subServices: [
      { title: "AI Courses", description: "Structured AI, ML, Data Science & Generative AI courses for School & College students." },
      { title: "Monthly Coding Competition", description: "3-round monthly competitive programming challenges (Aptitude, Basic Coding, Advanced Coding) with rewards." },
      { title: "Internship", description: "Real enterprise projects, hands-on mentorship, skill development, and experience letters." },
      { title: "Workshops", description: "Short-term practical masterclasses on AI, Web Dev, DevOps, Cloud, and emerging technologies." },
      { title: "Corporate Training", description: "Customized technical training programs for companies in AI, Cloud, Software Architecture & Security." },
    ],
    process: ["Assess Requirements", "Curate Curriculum", "Hands-on Training", "Real Projects", "Evaluate & Certify"],
    technologies: ["Python", "Generative AI", "PyTorch", "C++", "Java", "Next.js", "Docker", "Cloud & DevOps"],
    projects: [
      {
        title: "Monthly Coding Championship",
        industry: "Education & Competitive Coding",
        description: "National-level 3-round monthly competition testing aptitude, fundamental coding, and advanced algorithmic optimization.",
        technologies: ["Aptitude", "Data Structures", "Algorithms"],
      },
      {
        title: "GenAI Academy for Universities",
        industry: "Academic Upskilling",
        description: "Hands-on AI course curriculum teaching LLM engineering, RAG pipelines, and Vector DBs to 1,200+ engineering students.",
        technologies: ["Python", "LangChain", "OpenAI API", "Pinecone"],
      },
    ],
    results: [
      "Industry-recognized technical certifications and skill verification.",
      "Monthly rewards, cash prizes, and direct fast-track interview PPOs for competition winners.",
      "Practical production project experience for interns and corporate trainees.",
    ],
    differentiators: [
      { title: "3-Round Monthly Competition", description: "Structured aptitude and coding challenges every month with verified rewards.", icon: Sparkles },
      { title: "Industry-aligned AI Courses", description: "Tailored AI learning paths for school and college student cohorts.", icon: BookOpen },
      { title: "Direct Enterprise Pathway", description: "Top performers get direct entry to internships and full-time hiring pools.", icon: LayoutGrid },
    ],
    faqs: [
      { question: "What offerings are included in the Education division?", answer: "The Education division includes AI Courses, Monthly Coding Competitions, Internships, Workshops, and Corporate Training." },
      { question: "How often is the Coding Competition conducted?", answer: "The Coding Competition is conducted every month in 3 distinct rounds (Aptitude, Basic Coding, Advanced Coding)." },
      { question: "How can my company request Corporate Training?", answer: "You can request custom corporate training for your organization through our Corporate Training portal or contact us directly." },
    ],
  },
  {
    slug: "freelancer-it",
    title: "Freelancer & IT Services",
    shortDescription:
      "Get your IT projects delivered by skilled freelancers and technology professionals from our verified network, with Upstairs Techno managing project coordination, quality, and final delivery.",
    intro:
      "Upstairs Techno connects businesses with skilled freelancers, developers, designers, testers, IT professionals, and technology partners to help execute projects efficiently and cost-effectively.",
    about: [
      "We match businesses with the right IT talent from our network of freelancers, developers, designers, testers, and technology professionals — with Upstairs Techno coordinating the project, monitoring quality, and managing final delivery.",
      "Whether you need a single specialist or an entire project team, we provide flexible engagement models tailored to your requirements and budget.",
    ],
    icon: Users,
    subServices: [
      { title: "Freelance Developers", description: "Frontend, backend, full-stack, mobile, and specialized developers." },
      { title: "UI/UX Designers", description: "Web, mobile, SaaS, dashboard, and product design professionals." },
      { title: "AI & Automation Experts", description: "AI developers, automation specialists, chatbot developers, and integration professionals." },
      { title: "QA & Testing", description: "Manual, automation, API, and performance testing professionals." },
      { title: "Cloud & DevOps", description: "AWS, Azure, deployment, CI/CD, and infrastructure professionals." },
      { title: "Dedicated Developers", description: "Hire skilled IT professionals for short-term or long-term requirements." },
    ],
    process: ["Submit Project", "Talent Matching", "Project Development", "Quality Check & Delivery"],
    technologies: ["React", "Node.js", "Python", "AWS", "Azure", "Flutter", "Figma", "Docker", "CI/CD"],
    projects: [
      {
        title: "Dedicated Dev Team for SaaS Startup",
        industry: "SaaS",
        description: "Matched a startup with a full-stack team of 4 developers and 1 QA, delivered MVP in 3 months.",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: "UI/UX Redesign via Freelancer Network",
        industry: "E-Commerce",
        description: "Connected an e-commerce brand with a senior UI/UX designer, completing a full design overhaul in 6 weeks.",
        technologies: ["Figma", "Design System"],
      },
    ],
    results: [
      "Faster project execution through pre-vetted IT talent matching.",
      "Reduced hiring overhead with flexible project-based engagement models.",
      "Upstairs Techno-coordinated quality monitoring and final delivery.",
    ],
    differentiators: [
      { title: "One point of contact", description: "The client communicates with Upstairs Techno rather than managing multiple freelancers.", icon: ShieldCheck },
      { title: "Project coordination", description: "We manage milestones, communication, quality checks, and final delivery end-to-end.", icon: Sparkles },
      { title: "Flexible engagement", description: "From a single developer to a full dedicated team — scaled to your exact requirements.", icon: LayoutGrid },
    ],
    faqs: [
      { question: "Can I hire a single freelancer?", answer: "Yes. Businesses can request individual professionals based on their project requirements." },
      { question: "Does Upstairs Techno manage the project?", answer: "Yes. Upstairs Techno coordinates the project, communication, milestones, quality checks, and final delivery." },
      { question: "Can freelancers join the network?", answer: "Yes. Freelancers and IT professionals can submit their profiles for consideration through our network registration form." },
    ],
  },
];

export function getService(slug: string) {
  const normalizedSlug = slug?.toLowerCase();
  return services.find((service) => service.slug === normalizedSlug);
}
