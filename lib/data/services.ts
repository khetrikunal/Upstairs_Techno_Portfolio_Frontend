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
      "We help businesses choose the right technology, plan digital upgrades, and make smart IT decisions.",
    intro:
      "Clear, friendly technology guidance to help your business grow smoothly.",
    about: [
      "IT consulting means helping your business use technology effectively. We guide leadership teams on what software to build or buy, how to move safely to the cloud, and how to spend money wisely so technology actually helps your business grow.",
      "From step-by-step tech roadmaps to choosing the right cloud providers and getting advice from experienced technology leaders, we give you clear direction without confusing technical jargon.",
    ],
    icon: Briefcase,
    subServices: [
      { title: "Business Analysis", description: "We understand your goals and turn them into clear software requirements." },
      { title: "Digital Transformation", description: "We help you modernize older systems without interrupting daily business." },
      { title: "IT Strategy", description: "We create a practical technology plan that supports your long-term growth." },
      { title: "Cloud Consulting", description: "We help you pick the right cloud setup (like AWS or Azure) for speed, safety, and lower costs." },
      { title: "CTO as a Service", description: "Get senior technology advice and leadership whenever you need it." },
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
      "Custom websites, mobile apps, and business software designed specifically for your needs.",
    intro:
      "We design, build, and maintain custom software for startups and growing businesses.",
    about: [
      "We build custom software designed around how your team works. Whether you need an online portal, mobile app, or internal tool, we handle everything from design to launch.",
      "We also provide ongoing maintenance and updates, so your software always stays fast, secure, and reliable.",
    ],
    icon: Code2,
    subServices: [
      { title: "Custom Software", description: "Software built specifically for your unique business processes." },
      { title: "Web & Mobile Apps", description: "Fast, easy-to-use apps for phones, tablets, and computers." },
      { title: "Business Systems", description: "Secure tools to manage data, teams, and day-to-day operations." },
      { title: "Maintenance & Support", description: "Regular updates, bug fixes, and improvements to keep your software running smoothly." },
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
      "A hands-on training program that turns students and fresh graduates into job-ready software developers.",
    intro:
      "A structured talent pipeline that prepares students for real engineering jobs.",
    about: [
      "We guide students and fresh graduates through practical coding, real mentorship, and hands-on projects so they are ready for professional tech roles.",
      "Every student learns step-by-step, works on real projects, and gets opportunities to join our team or work with our partner companies.",
    ],
    icon: GraduationCap,
    subServices: [
      { title: "Student Outreach", description: "Connecting with colleges, students, and freshers through campus drives and seminars." },
      { title: "Assessment", description: "Evaluating candidates on programming basics, aptitude, and problem-solving." },
      { title: "Core Training", description: "Building strong fundamentals in modern web and software development." },
      { title: "Real Projects & Placement", description: "Working on real client projects with opportunities for full-time job placement." },
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
      "Practical coding competitions and beginner-friendly AI courses to build in-demand tech skills.",
    intro:
      "Learn modern technology skills with practical courses and monthly coding challenges.",
    about: [
      "We help school students, college students, and beginners learn real-world technology.",
      "Participate in our monthly Code Nova coding competitions to win prizes, or take our hands-on AI courses to learn the basics of artificial intelligence.",
    ],
    icon: GraduationCap,
    subServices: [
      { title: "Code Nova (Coding Competition)", description: "Monthly 3-round online coding contest (Aptitude, Basic Coding, Advanced Coding) with prizes and internship opportunities." },
      { title: "AI Courses", description: "Beginner-friendly AI and programming courses for school and college students, launching soon." },
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
      "Grow your business online with social media, Google search (SEO), content, and online ads.",
    intro:
      "We help businesses attract customers, build an audience, and increase sales online.",
    about: [
      "We create clear marketing plans that help people discover your business online. From social media posts to Google search ranking and targeted ads, we help bring interested customers to your door.",
      "Everything is tracked with simple reports, so you always know what is working.",
    ],
    icon: TrendingUp,
    subServices: [
      { title: "Marketing Strategy", description: "A step-by-step plan to reach your ideal customers online." },
      { title: "Social Media Marketing", description: "Managing and growing your pages on Instagram, LinkedIn, Facebook, and YouTube." },
      { title: "Search Engine Optimization (SEO)", description: "Helping your website show up higher on Google when people search for your services." },
      { title: "Content Creation", description: "Creating informative posts, videos, reels, and articles to engage your audience." },
      { title: "Online Advertising", description: "Running targeted Google and Meta ads to generate leads and sales within your budget." },
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
      "Smart AI tools and automated workflows that save time and reduce repetitive daily work.",
    intro:
      "We build custom AI chatbots and automated systems to make your business faster and more productive.",
    about: [
      "We build easy-to-use AI tools tailored to your daily work — like smart customer service chatbots, automatic document handling, and workflow connections.",
      "Our focus is practical: we help you automate repetitive tasks so your team can focus on what matters most.",
    ],
    icon: Bot,
    subServices: [
      { title: "AI Chatbots & Assistants", description: "Smart chatbots that answer customer questions 24/7." },
      { title: "Workflow Automation", description: "Connecting your apps so data moves automatically without manual copying." },
      { title: "Task Automation", description: "Automating routine tasks like invoice processing, emails, and reports." },
      { title: "AI Integration", description: "Adding AI capabilities (like ChatGPT or Google AI) into your existing software." },
      { title: "Custom AI Tools", description: "Tailored AI tools built specifically for your business processes." },
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
