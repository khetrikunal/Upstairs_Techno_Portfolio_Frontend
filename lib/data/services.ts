import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Bot,
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
      "Software shaped around the client's real operational needs.",
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
      "Empowering students with future-ready technology skills through Code Nova monthly coding competitions and practical AI courses (Course Upcoming Soon).",
    intro:
      "Empowering Students With Future-Ready Technology Skills — The Education Division of Upstairs Techno.",
    about: [
      "The Education Division of Upstairs Techno provides practical technology education for students, freshers, and aspiring developers.",
      "From Code Nova monthly skill competitions testing aptitude and programming ability to practical AI learning paths (Course Upcoming Soon on edu.upstairstechno.com) — we build the next generation of software professionals.",
    ],
    icon: GraduationCap,
    subServices: [
      { title: "Code Nova (Monthly Coding Competition)", description: "India's monthly 3-round online skill championship (Aptitude, Basic Coding, Advanced Coding) with medals, kits, and paid internship opportunities." },
      { title: "AI Course (Course Upcoming Soon)", description: "Practical AI, Machine Learning, and Generative AI curriculum for School and College student cohorts launching soon on edu.upstairstechno.com." },
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
      "Practical AI knowledge for students and aspiring developers.",
    ],
    differentiators: [
      { title: "3-Round Monthly Competition", description: "Structured aptitude and coding challenges every month with verified rewards.", icon: Sparkles },
      { title: "Industry-aligned AI Courses", description: "Tailored AI learning paths for school and college student cohorts.", icon: BookOpen },
      { title: "Direct Enterprise Pathway", description: "Top performers get direct entry to internships and full-time hiring pools.", icon: LayoutGrid },
    ],
    faqs: [
      { question: "What offerings are included in the Education division?", answer: "The Education division includes AI Courses and Monthly Coding Competitions designed to build practical technology skills." },
      { question: "How often is the Coding Competition conducted?", answer: "The Coding Competition is conducted every month in 3 distinct rounds (Aptitude, Basic Coding, Advanced Coding)." },
      { question: "Who can join the AI courses?", answer: "Our AI courses are designed for school students, college students, and freshers who want to learn practical AI concepts, tools, and applications." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Grow your brand online through data-driven digital marketing strategy, social media marketing, SEO, content marketing, and performance campaigns.",
    intro:
      "Upstairs Techno's Digital Marketing division helps businesses build a powerful online presence, attract qualified leads, and grow revenue through strategic digital channels.",
    about: [
      "We design and execute comprehensive digital marketing strategies that align with your business goals — from building brand awareness to driving measurable conversions and customer retention.",
      "Our approach combines SEO, social media marketing, content marketing, and performance marketing into a unified strategy focused on online brand growth and sustainable business results.",
    ],
    icon: TrendingUp,
    subServices: [
      { title: "Digital Marketing Strategy", description: "Comprehensive strategy covering brand positioning, target audience, channels, and measurable KPIs." },
      { title: "Social Media Marketing", description: "Managing and growing your social media presence across Instagram, LinkedIn, Facebook, and YouTube." },
      { title: "Search Engine Optimization", description: "Technical SEO, on-page optimization, keyword research, and link building to improve organic visibility." },
      { title: "Content Marketing", description: "Creating blogs, videos, reels, and educational content to attract and engage your target audience." },
      { title: "Performance Marketing", description: "Measurable campaigns on Google Ads and Meta Ads focused on leads, conversions, and ROI." },
    ],
    process: ["Strategy & Audit", "Target Audience Research", "Channel Planning", "Content Creation", "Campaign Launch", "Optimization", "Reporting"],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "SEO Tools", "Email Automation", "CRM Platforms", "Content Tools"],
    projects: [
      {
        title: "Brand Growth Campaign",
        industry: "E-Commerce",
        description:
          "Full-funnel digital marketing strategy that increased organic traffic by 60% and improved social media engagement significantly.",
        technologies: ["SEO", "Social Media", "Google Ads"],
      },
      {
        title: "Lead Generation System",
        industry: "B2B Services",
        description:
          "Built a performance marketing system with landing pages, Meta Ads, and CRM follow-up automation to generate qualified leads consistently.",
        technologies: ["Meta Ads", "Email Automation", "CRM"],
      },
    ],
    results: [
      "Increased online visibility and qualified organic traffic.",
      "More measurable leads and inquiries through performance campaigns.",
      "Stronger brand presence across social media and search engines.",
    ],
    differentiators: [
      { title: "Strategy-first approach", description: "Every campaign starts with a clear strategy aligned to your specific business goals and target audience.", icon: Sparkles },
      { title: "Data-driven optimization", description: "Campaigns are continuously monitored and optimized based on real performance data.", icon: ShieldCheck },
      { title: "End-to-end execution", description: "From strategy and content creation to campaign management and reporting — all under one team.", icon: ArrowRight },
    ],
    faqs: [
      { question: "What digital marketing services do you offer?", answer: "We offer digital marketing strategy, social media marketing, SEO, content marketing, performance marketing (Google & Meta Ads), and online brand growth management." },
      { question: "How long before we see results from SEO?", answer: "SEO results typically build over 3–6 months. Performance marketing campaigns can show measurable results much faster, often within the first month." },
      { question: "Do you work with small businesses?", answer: "Yes. We work with startups, SMEs, and growing businesses to create digital marketing strategies appropriate for their budget and goals." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "Transform your business with AI-powered solutions, intelligent workflow automation, and custom AI integrations that increase productivity and reduce manual effort.",
    intro:
      "Upstairs Techno's AI & Automation division builds intelligent, AI-powered solutions that automate business processes, streamline workflows, and deliver measurable productivity gains.",
    about: [
      "We design and develop custom AI solutions tailored to your specific business problems — from intelligent chatbots and AI agents to full business process automation and AI-powered data pipelines.",
      "Our focus is on practical AI adoption: building AI tools that integrate seamlessly into your existing workflows, reduce manual effort, and create clear, measurable business value.",
    ],
    icon: Bot,
    subServices: [
      { title: "AI-Powered Solutions", description: "Custom AI applications including chatbots, AI agents, recommendation systems, and intelligent data processing." },
      { title: "Business Process Automation", description: "Automating repetitive manual workflows and operational tasks to increase efficiency and reduce errors." },
      { title: "Intelligent Workflows", description: "Building smart, condition-based workflow systems that adapt and respond to business events automatically." },
      { title: "AI Integrations", description: "Integrating AI capabilities (OpenAI, Google AI, LangChain) into your existing software and business tools." },
      { title: "Custom AI Solutions", description: "Tailored AI model development, fine-tuning, and deployment for specific business use cases." },
    ],
    process: ["Discovery & Use Case Definition", "AI Strategy & Architecture", "Data Preparation", "Model/Solution Development", "Integration & Testing", "Deployment", "Monitoring & Optimization"],
    technologies: ["Python", "OpenAI", "LangChain", "Google AI", "n8n", "Zapier", "Node.js", "FastAPI", "React", "PostgreSQL", "AWS", "Azure"],
    projects: [
      {
        title: "AI Customer Support Automation",
        industry: "E-Commerce",
        description:
          "Built an AI-powered customer support chatbot that handled 70% of common inquiries automatically, reducing support workload significantly.",
        technologies: ["OpenAI", "LangChain", "Node.js", "React"],
      },
      {
        title: "Business Process Automation Suite",
        industry: "Professional Services",
        description:
          "Automated key business workflows including document processing, email routing, and reporting — saving multiple hours of manual work daily.",
        technologies: ["Python", "n8n", "OpenAI", "PostgreSQL"],
      },
    ],
    results: [
      "Significant reduction in manual, repetitive operational tasks.",
      "Faster business processes with AI-powered decision support.",
      "Improved productivity through intelligent workflow automation.",
    ],
    differentiators: [
      { title: "Practical AI focus", description: "We build AI solutions that solve real business problems with clear, measurable outcomes — not experimental technology demos.", icon: Sparkles },
      { title: "Custom-built for your business", description: "Every AI solution is tailored to your specific workflows, data, and business requirements.", icon: ShieldCheck },
      { title: "Safe and responsible adoption", description: "AI solutions are built with appropriate oversight, governance, and human-in-the-loop controls.", icon: LayoutGrid },
    ],
    faqs: [
      { question: "What kinds of AI solutions do you build?", answer: "We build AI chatbots, AI agents, business process automation, intelligent workflows, AI integrations, and custom AI-powered applications for specific business use cases." },
      { question: "Do I need to have my own data for AI solutions?", answer: "Not always. Many AI solutions use pre-trained models (like OpenAI) that can be integrated without training on your own data. For specialized use cases, we can work with your existing data." },
      { question: "How long does it take to build an AI solution?", answer: "Simple AI integrations and chatbots can be built in 2–4 weeks. More complex AI systems with custom workflows or model development typically take 6–12 weeks." },
    ],
  },
];

export function getService(slug: string) {
  const normalizedSlug = slug?.toLowerCase();
  return services.find((service) => service.slug === normalizedSlug);
}
