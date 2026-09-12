import type { BlogPost, CaseStudy, Job } from "./types";

export const seedBlogPosts: BlogPost[] = [
  {
    id: "bp-1",
    slug: "designing-for-scale-without-losing-speed",
    title: "Designing for Scale Without Losing Speed",
    summary:
      "How we structure platform architecture reviews so enterprise clients can grow tenfold without a rebuild.",
    content:
      "Most platforms don't fail at launch — they fail at their second growth curve. We walk through the review cadence we run with every enterprise client: load modelling before feature freeze, a quarterly capacity audit, and a rollback plan that's rehearsed, not just written down.",
    category: "Engineering",
    readingTime: 6,
    coverImage: "/Upstairs_Logo.jpeg",
    publishedAt: "2026-06-12",
    author: "Priya Nadkarni",
  },
  {
    id: "bp-2",
    slug: "the-real-cost-of-technical-debt",
    title: "The Real Cost of Technical Debt",
    summary:
      "A framework for putting a number on the debt in your codebase — and a business case for paying it down.",
    content:
      "Technical debt is easy to describe and hard to price. We use a three-axis model — blast radius, remediation cost, and interest rate — to help engineering leads make the case to the board in language finance already trusts.",
    category: "Strategy",
    readingTime: 8,
    coverImage: "/The Real Cost of Technical Debt.png",
    publishedAt: "2026-05-28",
    author: "Marcus Webb",
  },
  {
    id: "bp-3",
    slug: "shipping-ai-features-enterprises-can-trust",
    title: "Shipping AI Features Enterprises Can Trust",
    summary:
      "Guardrails, evals, and rollout gates: the checklist we run before any AI feature reaches production.",
    content:
      "Enterprise buyers don't ask if a model is impressive. They ask what happens when it's wrong. Here's the eval suite, human-in-the-loop gate, and rollback tooling we require before an AI feature ships to a regulated client.",
    category: "AI & ML",
    readingTime: 7,
    coverImage: "/Shipping AI Features Enterprises Can Trust.png",
    publishedAt: "2026-05-09",
    author: "Sana Iqbal",
  },
  {
    id: "bp-4",
    slug: "a-field-guide-to-vendor-migrations",
    title: "A Field Guide to Vendor Migrations",
    summary:
      "Fourteen migrations, one playbook: how to move off a legacy vendor without a weekend of downtime.",
    content:
      "Every migration project starts the same way: a spreadsheet of what could go wrong. We share the dual-write pattern, traffic-shadowing approach, and stakeholder sign-off checklist that's carried us through fourteen zero-downtime vendor migrations.",
    category: "Engineering",
    readingTime: 5,
    coverImage: "/A Field Guide to Vendor Migrations.png",
    publishedAt: "2026-04-22",
    author: "Marcus Webb",
  },
];

export const seedCaseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "meridian-bank-core-modernization",
    title: "Modernizing a 30-Year-Old Core Banking System",
    client: "Meridian Bank",
    industry: "Financial Services",
    summary:
      "Replaced a mainframe core with a modular platform, live-migrating 4.2M accounts with zero customer-facing downtime.",
    challenge:
      "Meridian's core ran on a 30-year-old mainframe that no new engineer could safely modify, and every product launch took two quarters longer than competitors.",
    solution:
      "We built a parallel, event-sourced core alongside the mainframe, shadowed live traffic for six months, then cut over account-by-account with automatic reconciliation and rollback.",
    results: [
      "4.2M accounts migrated with zero downtime",
      "New product launch time cut from 6 months to 3 weeks",
      "62% reduction in core infrastructure cost",
    ],
    technologies: ["Kotlin", "Kafka", "Kubernetes", "PostgreSQL"],
    coverImage: "/median Banking.png",
    publishedAt: "2026-03-15",
  },
  {
    id: "cs-2",
    slug: "harborline-logistics-realtime-tracking",
    title: "Real-Time Fleet Visibility Across 40 Countries",
    client: "Harborline Logistics",
    industry: "Supply Chain",
    summary:
      "Built a global real-time tracking platform processing 18M telemetry events a day across a 22,000-vehicle fleet.",
    challenge:
      "Harborline's dispatchers were making routing decisions on data that was up to 40 minutes stale, costing an estimated $9M a year in fuel and missed SLAs.",
    solution:
      "We designed a streaming ingestion pipeline with regional edge processing, cutting telemetry latency to under 4 seconds, and shipped a dispatcher console built around exception-based decision making.",
    results: [
      "Telemetry latency cut from 40 minutes to under 4 seconds",
      "$7.2M in annual fuel savings",
      "99.98% platform uptime across 40 countries",
    ],
    technologies: ["Go", "Apache Flink", "React", "TimescaleDB"],
    coverImage: "/Harboeline.png",
    publishedAt: "2026-02-02",
  },
  {
    id: "cs-3",
    slug: "clearview-health-patient-portal",
    title: "A Patient Portal Built Around Trust",
    client: "Clearview Health Network",
    industry: "Healthcare",
    summary:
      "Redesigned and rebuilt a patient portal used by 1.1M patients, with HIPAA-grade security and a 4.8-star rating.",
    challenge:
      "Clearview's legacy portal had a 61% task-abandonment rate on appointment booking, and a security audit had flagged access-control gaps.",
    solution:
      "We rebuilt the portal on a zero-trust access model, redesigned the booking flow around patient research, and ran a phased rollout with clinician feedback loops.",
    results: [
      "Task-abandonment rate dropped from 61% to 14%",
      "Zero critical findings in the follow-up security audit",
      "4.8-star average rating across 38,000 reviews",
    ],
    technologies: ["Next.js", "Node.js", "AWS", "OAuth2"],
    coverImage: "/clearview.png",
    publishedAt: "2026-01-19",
  },
];

export const seedJobs: Job[] = [
  {
    "id": "job-1",
    "slug": "senior-platform-engineer",
    "title": "Senior Platform Engineer",
    "department": "Engineering",
    "location": "Remote (US/EU/India)",
    "type": "Full-time",
    "summary":
      "Own the infrastructure that powers real-time systems for our largest enterprise clients.",
    "responsibilities": [
      "Design and operate distributed systems handling millions of events per day",
      "Lead incident response and drive postmortems that stick",
      "Partner with client engineering teams during migrations",
    ],
    "requirements": [
      "6+ years building production distributed systems",
      "Deep experience with Kubernetes and streaming infrastructure",
      "Comfortable owning systems end to end, from design to on-call",
    ],
    "postedAt": "2026-07-01",
  },
  {
    "id": "job-btds-1",
    "slug": "btds-trainee-engineer",
    "title": "BTDS Trainee / Associate Software Engineer",
    "department": "BTDS (Talent Development Division)",
    "location": "Pune / Remote (Hybrid)",
    "type": "Training & Placement / Full-time",
    "summary":
      "Join our flagship BTDS (Bridge to Development & Scale) career program. Gain accelerated hands-on training, 1-on-1 mentorship from senior architects, and build live enterprise client projects with guaranteed career progression.",
    "responsibilities": [
      "Work across full-stack development using Next.js, React, Node.js, Python, or Java/Spring",
      "Participate in real production sprints, agile ceremonies, and architecture code reviews",
      "Build scalable REST/GraphQL APIs, microservices, and modern user interfaces",
      "Graduate through skill benchmarks into full-time Engineering roles at Upstairs Techno or partner enterprises",
    ],
    "requirements": [
      "B.Tech, B.E., MCA, B.Sc (CS/IT) or equivalent technical degree (Fresh graduates & final year eligible)",
      "Strong fundamentals in Data Structures, Algorithms, and Object-Oriented Programming",
      "Passion for building production-grade software and continuous learning mindset",
    ],
    "postedAt": "2026-07-28",
  },
  {
    "id": "job-intern-1",
    "slug": "software-engineering-intern",
    "title": "Software Engineering Intern (Full-Stack / Cloud)",
    "department": "Engineering (Internship)",
    "location": "Remote / Hybrid (India)",
    "type": "Internship (3–6 Months)",
    "summary":
      "Gain real-world engineering experience on live production platforms. Work alongside Senior Staff Engineers on cloud modernization, microservices, and responsive web applications with competitive stipend and direct PPO conversion.",
    "responsibilities": [
      "Develop and test front-end and back-end modules for enterprise client platforms",
      "Collaborate with senior leads on API design, database schemas, and CI/CD pipelines",
      "Write clean, well-tested, documented code and actively participate in code reviews",
    ],
    "requirements": [
      "Currently pursuing or recent graduate in Computer Science, IT, or related STEM field",
      "Proficiency in modern JavaScript/TypeScript, React/Next.js, Python, or Node.js",
      "Familiarity with Git, GitHub, REST APIs, and relational databases",
      "Available for 3 to 6 months internship tenure",
    ],
    "postedAt": "2026-07-25",
  },
  {
    "id": "job-intern-2",
    "slug": "ai-ml-intern",
    "title": "AI & Machine Learning Intern",
    "department": "AI & ML (Internship)",
    "location": "Remote (Global)",
    "type": "Internship (3–6 Months)",
    "summary":
      "Work on bleeding-edge Applied AI, Generative AI models, RAG pipelines, and automated intelligence agents for enterprise clients.",
    "responsibilities": [
      "Build and evaluate LLM-backed workflows, retrieval systems, and vector database embeddings",
      "Assist in training, fine-tuning, and benchmarking AI automation models",
      "Integrate intelligent AI endpoints into web and mobile client applications",
    ],
    "requirements": [
      "Hands-on Python experience and familiarity with PyTorch, LangChain, or HuggingFace",
      "Understanding of modern Generative AI, embeddings, and vector search concepts",
      "Available for 3 to 6 months internship tenure",
    ],
    "postedAt": "2026-07-22",
  },
  {
    "id": "job-ojt-1",
    "slug": "ojt-trainee-software-engineer",
    "title": "OJT Trainee (On - Job Training)",
    "department": "Engineering (OJT Program)",
    "location": "Remote / Hybrid (India)",
    "type": "OJT (On - Job Training)",
    "summary":
      "Join our immersive On-Job Training (OJT) program. Ship features to live production systems, gain 1-on-1 mentorship from senior architects, and accelerate directly into a full-time engineering career.",
    "responsibilities": [
      "Work directly on live client codebases using Next.js, React, Node.js, Python, or Cloud services",
      "Collaborate in daily agile sprints, code reviews, and architecture discussions with senior leads",
      "Write clean, test-driven, production-ready code with automated CI/CD deployment",
      "Fast-track your transition into a full-time Associate Software Engineer role",
    ],
    "requirements": [
      "B.Tech, B.E., MCA, BCA, B.Sc (CS/IT) or equivalent technical background (Freshers & graduates welcome)",
      "Good foundational understanding of modern web technologies, databases, and programming logic",
      "Commitment to 3 to 6 months of hands-on daily production sprints",
      "Strong problem-solving curiosity and enthusiasm for real-world software engineering",
    ],
    "postedAt": "2026-08-01",
  },
  {
    "id": "job-2",
    "slug": "product-designer-enterprise",
    "title": "Product Designer, Enterprise Experience",
    "department": "Design",
    "location": "New York, NY / Remote (Hybrid)",
    "type": "Full-time",
    "summary":
      "Shape the products our clients' internal teams use every day — dense, high-stakes, and still delightful.",
    "responsibilities": [
      "Design end-to-end flows for complex enterprise workflows",
      "Run research with power users to validate direction",
      "Maintain and evolve our design system",
    ],
    "requirements": [
      "5+ years designing B2B or enterprise software",
      "Portfolio showing systems thinking, not just visuals",
      "Fluent in Figma and collaborative prototyping",
    ],
    "postedAt": "2026-06-18",
  },
  {
    "id": "job-3",
    "slug": "ai-solutions-engineer",
    "title": "AI Solutions Engineer",
    "department": "AI & ML",
    "location": "Remote (Global)",
    "type": "Full-time",
    "summary":
      "Bridge the gap between our AI platform and what enterprise clients actually need in production.",
    "responsibilities": [
      "Scope and build AI features for enterprise deployments",
      "Design eval suites and rollout gates for model-backed features",
      "Work directly with client engineering and compliance teams",
    ],
    "requirements": [
      "Experience shipping LLM-backed features to production",
      "Comfortable working directly with enterprise clients",
      "Strong instincts for where AI should — and shouldn't — be used",
    ],
    "postedAt": "2026-07-20",
  },
  {
    "id": "job-4",
    "slug": "engagement-manager",
    "title": "Engagement Manager",
    "department": "Delivery",
    "location": "Chicago, IL (Hybrid)",
    "type": "Full-time",
    "summary":
      "Run the client relationship and delivery cadence for two to three concurrent enterprise engagements.",
    "responsibilities": [
      "Own scope, timeline, and delivery quality for client engagements",
      "Translate client priorities into sprint-level plans with engineering leads",
      "Build the kind of trust that turns a project into a multi-year partnership",
    ],
    "requirements": [
      "5+ years in technical delivery or consulting",
      "Track record managing enterprise client relationships",
      "Comfortable being the calm voice in a tense status update",
    ],
    "postedAt": "2026-06-30",
  },
];
