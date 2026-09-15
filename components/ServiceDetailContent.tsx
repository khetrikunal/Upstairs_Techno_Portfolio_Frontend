import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, Building2, Check, Cloud, Cpu, Globe, GraduationCap, HardDrive, Monitor, Network, Server, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/data/services";

interface ServiceDetailContentProps {
  service: Service;
  sectionLabel: string;
  sectionHref: string;
}

const itConsultingObjectives = [
  "Help clients identify inefficiencies and modernization opportunities in their current technology environment.",
  "Provide an actionable, prioritized technology roadmap aligned with business goals.",
  "Reduce technology risk through sound architecture, security, and governance practices.",
  "Support clients through implementation, not just advisory recommendations.",
];

const itConsultingIndustries = [
  { title: "Small and medium businesses", description: "IT strategy, cybersecurity, automation, and infrastructure planning." },
  { title: "Startups", description: "CTO as a Service, architecture, and technology stack selection." },
  { title: "Manufacturing companies", description: "ERP consulting, automation, infrastructure, and analytics." },
  { title: "Healthcare organizations", description: "Security assessment, compliance readiness, and infrastructure modernization." },
  { title: "Financial services", description: "Architecture, compliance, cybersecurity, and data strategy." },
  { title: "Retail and e-commerce", description: "CRM, e-commerce integration, automation, and cloud enablement." },
  { title: "Educational institutions", description: "IT strategy, network planning, and cybersecurity." },
  { title: "Real estate companies", description: "CRM, automation, dashboards, and cloud collaboration." },
  { title: "Professional services firms", description: "Process automation, software selection, and security." },
  { title: "Government and public-sector organizations", description: "RFP support, PMO, architecture, infrastructure, and security." },
];

const itConsultingTools = [
  { label: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { label: "Other Tools", items: ["Enterprise architecture and process-mapping tools", "Vulnerability and security-assessment tools", "Project and portfolio management platforms", "Business intelligence and reporting tools"] },
];

const itConsultingServices = [
  {
    title: "Business Analysis Consulting",
    overview: "We study how a client currently operates and identify inefficiencies, duplicated effort, and opportunities for improvement.",
    whatWeOffer: [
      "Stakeholder interviews with owners, managers, and employees",
      "Documentation of current business processes",
      "Identification of duplicate work and manual activity",
      "Preparation of business requirements documents",
      "Process maps and workflow diagrams",
      "Definition of functional and technical requirements",
      "Recommendations for software or automation solutions",
    ],
    deliverables: ["Current-state process documentation", "Business requirements document", "Process maps and workflow diagrams", "Solution recommendations"],
    benefits: ["Clear visibility into operational inefficiencies", "A documented basis for future technology investment", "Reduced risk of building the wrong solution"],
  },
  {
    title: "IT Strategy and Roadmap Development",
    overview: "We create a 1–5 year technology plan that aligns systems, budget, and priorities with business goals.",
    whatWeOffer: [
      "Current IT environment assessment",
      "Future-state technology vision",
      "Recommended systems and platforms",
      "Implementation priorities and timeline",
      "Budget estimates and risk analysis",
      "Hiring and outsourcing recommendations",
      "Key performance indicators",
    ],
    deliverables: ["IT strategy document", "Multi-year roadmap with milestones", "Budget and risk summary"],
    benefits: ["A single, prioritized plan replacing ad-hoc technology decisions", "Improved budget predictability", "Reduced risk from unmanaged technical debt"],
  },
  {
    title: "Digital Transformation Consulting",
    overview: "We help traditional businesses use technology to improve operations and replace paper-based and manual processes with digital systems.",
    whatWeOffer: [
      "Moving paper-based processes online",
      "CRM or ERP implementation",
      "Customer portal development",
      "Approval-workflow automation",
      "Analytics dashboards",
      "Integration of multiple business systems",
      "Applied use of artificial intelligence where it has clear business benefit",
    ],
    deliverables: ["Digital transformation roadmap", "Prioritized initiative backlog", "Implementation plan"],
    benefits: ["Faster, more consistent operations", "Better customer experience", "Improved management visibility through data"],
  },
  {
    title: "Software Architecture Consulting",
    overview: "We design how software systems should be built and connected, with senior technical leadership guiding every decision.",
    whatWeOffer: [
      "Review of existing application architecture",
      "Design of scalable systems",
      "Database and API selection",
      "Cloud architecture planning",
      "Monolith versus microservices evaluation",
      "Security and access-control design",
      "Architecture diagrams and technical-debt review",
      "Development and deployment standards",
    ],
    deliverables: ["Architecture assessment report", "Target architecture diagrams", "Technology standards document"],
    benefits: ["Reduced long-term technical debt", "Systems built to scale with the business", "Lower integration and security risk"],
  },
  {
    title: "Technology Stack Selection Advisory",
    overview: "We help clients choose the right technology by comparing platforms against cost, integration, security, and scalability criteria.",
    whatWeOffer: [
      "Comparison of cloud platforms, languages, and databases",
      "CRM and ERP product comparison",
      "Project-management and collaboration tool evaluation",
      "Cybersecurity product comparison",
      "Hosting and infrastructure options review",
    ],
    deliverables: ["Technology comparison matrix", "Recommendation report covering total cost of ownership, implementation time, integration capability, security, scalability, vendor support, and exit risk"],
    benefits: ["Objective, criteria-based technology decisions", "Reduced risk of vendor lock-in", "Faster procurement decisions"],
  },
  {
    title: "Process Automation Consulting",
    overview: "We identify repetitive manual work and automate it using workflow platforms, robotic process automation, APIs, scripts, or custom software.",
    whatWeOffer: [
      "Automatic invoice processing",
      "Employee onboarding workflows",
      "Sales lead assignment automation",
      "Email and report automation",
      "Approval systems",
      "Customer support ticket routing",
      "Data synchronization between CRM and accounting systems",
      "Automated dashboards",
    ],
    deliverables: ["Automation opportunity assessment", "Automated workflow implementation", "Documentation and training"],
    benefits: ["Reduced manual effort and error rates", "Faster turnaround on routine processes", "Freed staff time for higher-value work"],
  },
  {
    title: "Security and Compliance Consulting",
    overview: "We assess a client’s security posture and help reduce risk while preparing the organization for audits and operational resilience.",
    whatWeOffer: [
      "Security maturity and vulnerability assessment",
      "Identity and access management review",
      "Backup and disaster-recovery planning",
      "Security policy development",
      "Employee security-awareness training",
      "Incident-response planning",
      "Vendor risk assessment",
      "Compliance readiness support",
      "Cloud security review",
    ],
    deliverables: ["Security assessment report", "Prioritized remediation plan", "Security policies and awareness training materials"],
    benefits: ["Reduced likelihood and impact of security incidents", "Improved audit and compliance readiness", "Clearer accountability for security responsibilities"],
  },
  {
    title: "Project and Program Management Services",
    overview: "We manage technology projects for clients who do not have experienced internal project managers.",
    whatWeOffer: [
      "Project planning and scope definition",
      "Budget and timeline management",
      "Vendor coordination",
      "Risk and issue management",
      "Status reporting and stakeholder communication",
      "Testing coordination and change management",
      "Go-live planning and post-implementation review",
    ],
    deliverables: ["Project plan and schedule", "Risk and issue register", "Regular status reports", "Post-implementation review"],
    benefits: ["Higher likelihood of on-time, on-budget delivery", "Clear accountability and communication", "Reduced project risk"],
  },
  {
    title: "CTO as a Service",
    overview: "A monthly retainer offering for startups and smaller organizations that cannot yet justify a full-time Chief Technology Officer.",
    whatWeOffer: [
      "Technology strategy and product roadmap review",
      "Technical hiring support",
      "Vendor evaluation and architecture decisions",
      "Security oversight",
      "Engineering team management",
      "Technology budgeting",
      "Investor or board-level technical reporting",
      "Due-diligence support",
    ],
    deliverables: ["Monthly advisory sessions", "Technology roadmap", "Board or investor technical reports"],
    benefits: ["Senior technical leadership without full-time cost", "Improved investor confidence", "Better technical hiring and vendor decisions"],
  },
  {
    title: "Technology Assessment",
    overview: "We review a client’s full technology environment and produce an improvement plan that often leads to larger implementation work.",
    whatWeOffer: [
      "Application and infrastructure review",
      "Networking and cybersecurity review",
      "Cloud usage and data/reporting review",
      "IT policy, vendor, and license review",
      "Business continuity and productivity tools review",
    ],
    deliverables: ["Technology assessment report", "Risk-prioritized improvement plan"],
    benefits: ["A clear, independent view of current technology health", "A prioritized basis for future investment", "Low-risk entry point for a longer-term engagement"],
  },
  {
    title: "IT Infrastructure Planning",
    overview: "We design or improve a client’s IT foundation, from networking to backup and business continuity.",
    whatWeOffer: [
      "Office network and Wi-Fi design",
      "Server, storage, and cloud infrastructure planning",
      "Endpoint management",
      "Backup and disaster-recovery design",
      "Data center planning and internet connectivity",
      "Monitoring and identity management",
      "Business continuity planning",
    ],
    deliverables: ["Infrastructure design document", "Implementation plan", "Business continuity plan"],
    benefits: ["A stable, scalable IT foundation", "Reduced downtime risk", "Clear continuity planning in case of disruption"],
  },
];

const aiObjectives = [
  "Identify high-value, well-defined automation opportunities before proposing a solution.",
  "Deliver working pilots quickly, then scale successful pilots into production systems.",
  "Keep a qualified human in the approval loop for high-risk decisions involving medical, hiring, lending, insurance, legal, or safety-related use cases.",
  "Build AI governance, data privacy, and security into every engagement from the outset.",
];

const aiIndustries = [
  { title: "Real Estate", description: "Lead qualification, follow-up, and property-enquiry bots." },
  { title: "Clinics & Hospitals", description: "Appointment booking, FAQs, and document workflows." },
  { title: "E-commerce", description: "Customer support, recommendations, and order updates." },
  { title: "Education", description: "Student enquiries, admissions, and lesson-content assistants." },
  { title: "Recruitment Agencies", description: "CV screening, candidate communication, and scheduling." },
  { title: "Law & Accounting Firms", description: "Document search, summarization, and extraction with human review." },
  { title: "Manufacturing", description: "Quality inspection, maintenance alerts, and inventory forecasting." },
  { title: "Logistics", description: "Shipment updates, invoice processing, and route reporting." },
  { title: "Marketing Agencies", description: "Content workflows, reporting, and lead management." },
];

const aiTools = [
  { label: "AI Platforms", items: ["Large Language Models (LLMs)", "Generative AI platforms", "Vector Databases", "Retrieval-Augmented Generation (RAG)"] },
  { label: "Automation Tools", items: ["n8n", "Make", "Zapier", "Python", "JavaScript", "SQL", "Data-pipeline tooling"] },
];

const aiServices = [
  {
    title: "AI Chatbots",
    overview: "Website, WhatsApp, Instagram, or support chatbots connected to a client’s FAQs, knowledge bases, and business documents.",
    whatWeOffer: ["FAQ and document integration", "Multi-channel deployment across web, WhatsApp, and Instagram", "Escalation to a human agent"],
    deliverables: ["Configured chatbot", "Knowledge-base integration", "Deployment and monitoring setup"],
    industries: ["Clinics", "Schools", "Real-estate firms", "E-commerce businesses", "Hotels"],
    benefits: ["Faster response times", "24/7 availability for common queries", "Reduced customer-support workload"],
  },
  {
    title: "AI Agents",
    overview: "AI systems that can search information, make decisions, create tickets, send emails, or update CRM systems autonomously within defined rules and safeguards.",
    whatWeOffer: ["Task automation through LLM-driven agents", "CRM and ticketing-system integration", "Decision logic and guardrails"],
    deliverables: ["Deployed AI agent workflow", "Integration documentation"],
    industries: ["Sales teams", "Customer support", "Recruitment agencies"],
    benefits: ["Reduced manual data entry", "Faster case handling", "Consistent decision logic"],
  },
  {
    title: "Generative AI Integration",
    overview: "Connecting language models to internal documents, CRM systems, email, and existing business software.",
    whatWeOffer: ["Document and knowledge-base connection", "CRM and email integration", "Prompt design and evaluation"],
    deliverables: ["Integrated Generative AI workflow", "Prompt and evaluation documentation"],
    industries: ["Medium-sized companies", "Law firms", "Consultancies"],
    benefits: ["Faster access to internal knowledge", "Reduced time spent searching documents"],
  },
  {
    title: "Machine Learning Solutions",
    overview: "Machine-learning solutions for forecasting, recommendations, fraud detection, scoring, classification, and other data-driven business problems.",
    whatWeOffer: ["Model development and training", "Evaluation and validation", "Production deployment"],
    deliverables: ["Trained ML model", "Evaluation report", "Deployment pipeline"],
    industries: ["Finance", "Retail", "Logistics", "Manufacturing"],
    benefits: ["Improved forecasting accuracy", "Reduced fraud and risk exposure"],
  },
  {
    title: "Business Process Automation",
    overview: "Automating repetitive business processes such as data entry, reporting, invoicing, approvals, and administrative workflows.",
    whatWeOffer: ["Process mapping and automation design", "Workflow implementation", "Monitoring and error handling"],
    deliverables: ["Automated workflow", "Process documentation"],
    industries: ["Almost every business and industry"],
    benefits: ["Time and cost savings", "Fewer manual errors", "More efficient business operations"],
  },
  {
    title: "AI Workflow Automation",
    overview: "Connecting business applications and tools using APIs, webhooks, and automation platforms such as n8n, Make, and Zapier.",
    whatWeOffer: ["Multi-tool workflow design", "API and webhook integration", "Testing and monitoring"],
    deliverables: ["Connected automated workflow", "Support documentation"],
    industries: ["SMEs using multiple disconnected tools"],
    benefits: ["Reduced tool switching", "Fewer manual handoffs", "Faster cross-system data flow"],
  },
  {
    title: "Natural Language Processing (NLP) Solutions",
    overview: "AI solutions for extracting information from documents, classifying messages, summarizing calls, and analyzing sentiment.",
    whatWeOffer: ["Document data extraction", "Message classification", "Call summarization", "Sentiment analysis"],
    deliverables: ["NLP pipeline", "Accuracy evaluation report"],
    industries: ["Legal", "Healthcare", "Customer support", "Finance"],
    benefits: ["Faster document processing", "Consistent classification", "Faster insight generation"],
  },
  {
    title: "Computer Vision Solutions",
    overview: "Computer-vision solutions for inspection, OCR, object detection, attendance, safety monitoring, and visual analysis.",
    whatWeOffer: ["Image and video model development", "OCR and object-detection pipelines", "Integration with cameras or scanning hardware"],
    deliverables: ["Trained computer-vision model", "Integrated monitoring solution"],
    industries: ["Factories", "Warehouses", "Construction", "Security companies"],
    benefits: ["Faster inspection", "Reduced manual review", "Improved safety monitoring"],
  },
  {
    title: "AI Analytics & Reporting",
    overview: "AI-powered dashboards, natural-language business analytics, sales forecasting, and automated business reporting.",
    whatWeOffer: ["Natural-language query dashboards", "Automated report generation", "Forecasting models"],
    deliverables: ["Analytics dashboard", "Automated reporting workflow"],
    industries: ["Retailers", "Distributors", "Marketing agencies", "Management teams"],
    benefits: ["Faster access to business insights", "Reduced manual reporting effort", "Better data-driven decision making"],
  },
  {
    title: "Custom AI Application Development",
    overview: "Complete web or mobile applications with AI capabilities built directly into the product.",
    whatWeOffer: ["Full-stack application development", "AI feature integration", "Cloud deployment"],
    deliverables: ["Deployed AI-enabled application", "Technical documentation"],
    industries: ["Startups", "Enterprises"],
    benefits: ["Differentiated AI-native products", "Faster time to market", "Scalable AI-enabled applications"],
  },
];

const futureScopeRoles = [
  "Data Scientist",
  "MLOps Engineer",
  "QA / Test Engineer",
  "Cloud / DevOps Engineer",
  "Cybersecurity Engineer",
  "UI/UX Designer",
  "Domain Expert",
  "Account / Customer Success Manager",
  "Finance / Legal Advisor",
];

const managedItObjectives = [
  "Deliver predictable, proactive IT support rather than reactive break-fix service.",
  "Detect and resolve issues before they cause downtime.",
  "Protect client data through disciplined backup, security, and access-control practices.",
  "Provide clients with transparent monthly reporting and regular business reviews.",
];

const managedItIndustries: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Accounting and Finance Firms", description: "Reliable support, secure data handling, and dependable uptime for critical operations.", icon: Briefcase },
  { title: "Law Firms", description: "Stable systems that support casework, document access, and secure communication.", icon: ShieldCheck },
  { title: "Clinics and Small Hospitals", description: "Support that keeps daily operations running with strong data protection and responsiveness.", icon: HardDrive },
  { title: "Manufacturing and Engineering Companies", description: "Operational continuity for facilities, devices, and remote collaboration tools.", icon: Building2 },
  { title: "Schools, Coaching Institutes, and Colleges", description: "Consistent support for staff, students, and learning platforms.", icon: Users },
  { title: "Real-Estate Companies", description: "Dependable systems for sales, communications, and property-management workflows.", icon: Globe },
  { title: "Logistics and Transportation Companies", description: "Connectivity and monitoring that keep mobile and team-based operations reliable.", icon: Network },
  { title: "Hotels and Restaurants", description: "IT support that keeps guest services, POS, and back-office tools dependable.", icon: Briefcase },
  { title: "E-commerce and Digital Agencies", description: "Fast support for online operations, collaboration tools, and always-on services.", icon: Monitor },
  { title: "Construction Companies", description: "Support for field teams, shared systems, and project-management platforms.", icon: Wrench },
  { title: "NGOs and Professional Associations", description: "Managed IT support that helps mission-focused organizations run with confidence.", icon: BadgeCheck },
];

const managedItTools = [
  { label: "Service Operations", items: ["Professional Services Automation (PSA) platforms", "Remote Monitoring and Management (RMM) platforms"] },
  { label: "Security & Access", items: ["Endpoint Protection / EDR", "Email Security", "Multi-Factor Authentication (MFA)", "Password Management"] },
  { label: "Business Continuity", items: ["Backup and Disaster-Recovery Platforms", "Network-Monitoring Platforms"] },
];

const managedItServices = [
  {
    title: "IT Infrastructure Management",
    overview: "Managing computers, servers, cloud accounts, printers, firewalls, and business applications.",
    whatWeOffer: ["Device and account management", "Firewall and application oversight"],
    deliverables: ["Managed infrastructure inventory", "Monthly status report"],
    benefits: ["A stable IT environment"],
  },
  {
    title: "Server Administration",
    overview: "Windows/Linux server management, updates, user permissions, storage, and performance tuning.",
    whatWeOffer: ["Patch and update management", "User permission administration", "Storage and performance monitoring"],
    deliverables: ["Server health reports", "Patch compliance log"],
    benefits: ["Fewer server failures", "Better server reliability"],
  },
  {
    title: "Network Management",
    overview: "Managing routers, switches, Wi-Fi, VPNs, firewalls, and internet connectivity.",
    whatWeOffer: ["Network configuration and monitoring", "VPN and firewall management"],
    deliverables: ["Network diagram", "Uptime and performance reports"],
    benefits: ["Reliable and secure connectivity"],
  },
  {
    title: "Help Desk Support",
    overview: "Handling user problems through phone, email, chat, or ticketing systems.",
    whatWeOffer: ["Ticket intake and triage", "Password resets", "Software installations", "Basic troubleshooting"],
    deliverables: ["Ticket resolution log", "Monthly support summary"],
    benefits: ["Employees get quick assistance", "Reduced downtime caused by common IT issues"],
  },
  {
    title: "System Monitoring",
    overview: "Monitoring devices, servers, backups, disk space, CPU, memory, availability, and outages.",
    whatWeOffer: ["24/7 or business-hours monitoring", "Automated alerting"],
    deliverables: ["Monitoring dashboard access", "Alert and incident log"],
    benefits: ["Problems are detected before failure", "Faster incident response", "Reduced unexpected downtime"],
  },
  {
    title: "Backup and Disaster Recovery",
    overview: "Automated backups, off-site copies, restoration tests, and recovery planning to protect critical business information.",
    whatWeOffer: ["Automated backup configuration", "Periodic restore testing", "Disaster-recovery planning"],
    deliverables: ["Backup policy document", "Restore test report", "Disaster-recovery plan"],
    benefits: ["Protection from ransomware and hardware failure", "Improved business continuity", "Faster recovery after major incidents"],
  },
  {
    title: "Cybersecurity Management",
    overview: "Managing endpoint protection, EDR, MFA, patching, email security, vulnerability checks, and security-awareness programs.",
    whatWeOffer: ["Endpoint protection deployment", "MFA and conditional access", "Vulnerability scanning", "Security-awareness training"],
    deliverables: ["Security posture report", "Training completion records"],
    benefits: ["Lower cyber risk", "Improved security awareness", "Stronger protection for business systems and data"],
  },
  {
    title: "Performance Optimization",
    overview: "Removing unnecessary software, improving networks, upgrading systems, and optimizing cloud usage.",
    whatWeOffer: ["System cleanup and tuning", "Cloud usage optimization"],
    deliverables: ["Optimization report", "Before/after performance metrics"],
    benefits: ["Better employee productivity", "Improved system performance", "More efficient technology spending"],
  },
  {
    title: "Software Maintenance",
    overview: "Managing software updates, licenses, Microsoft 365/Google Workspace administration, and application support.",
    whatWeOffer: ["License and update management", "Microsoft 365 administration", "Google Workspace administration", "Application support"],
    deliverables: ["License inventory", "Update compliance report"],
    benefits: ["Fewer compatibility problems", "Fewer security problems", "Better software lifecycle management"],
  },
  {
    title: "IT Asset Management",
    overview: "Maintaining an accurate inventory of laptops, desktops, servers, licenses, warranties, and accessories.",
    whatWeOffer: ["Asset inventory tracking", "Warranty tracking", "License tracking"],
    deliverables: ["Asset register", "Quarterly asset report"],
    benefits: ["Better cost control", "Better accountability", "Improved visibility into technology assets"],
  },
];

const managedItBusinessOutcomes = [
  "Proactive issue detection",
  "Reduced downtime",
  "Stronger cybersecurity",
  "Reliable backups",
  "Faster employee support",
  "Better technology performance",
  "Better IT cost control",
  "Transparent reporting",
  "Predictable monthly IT management",
];

const managedItGrowthRoadmap = [
  {
    title: "Initial Growth Team",
    roles: ["Service Desk Manager", "Level 1 Technicians", "Senior Infrastructure Engineer", "Security Engineer / Virtual CISO", "Field-Support Technician", "Account Manager", "Sales Development Representative", "Project Manager", "Finance / Administration Staff"],
  },
  {
    title: "Larger Managed Services Operation",
    roles: ["Service Delivery Manager", "NOC/SOC Staff", "Cloud Engineer", "Microsoft 365 / Azure Specialist", "Backup / Disaster Recovery Specialist", "Compliance Consultant", "vCIO", "Dedicated Sales and Marketing Team"],
  },
];

const softwareDevelopmentObjectives = [
  "Deliver software that solves a specific, well-understood business problem.",
  "Maintain architecture and code-quality standards led by senior technical staff.",
  "Convert every project into an ongoing maintenance or support relationship where appropriate.",
  "Build recurring revenue through dedicated-team and retainer engagements.",
];

const softwareDevelopmentIndustries: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Startups", description: "MVP development, SaaS, mobile apps, APIs.", icon: Sparkles },
  { title: "Small Businesses", description: "CRM, ERP, websites, e-commerce, automation.", icon: Briefcase },
  { title: "Medium Companies", description: "Custom software, integrations, modernization.", icon: Building2 },
  { title: "Enterprises", description: "Legacy modernization, cloud migration, security, APIs.", icon: ShieldCheck },
  { title: "Agencies", description: "White-label development and maintenance.", icon: Monitor },
  { title: "Manufacturers", description: "ERP, inventory, production, dashboards.", icon: Wrench },
  { title: "Healthcare Companies", description: "Patient systems, portals, integrations.", icon: HardDrive },
  { title: "Logistics Companies", description: "Tracking, fleet systems, route management.", icon: Network },
  { title: "Retail Companies", description: "E-commerce, POS, inventory, CRM.", icon: Globe },
  { title: "Education Companies", description: "Learning platforms, student portals, payment systems.", icon: Users },
];

const softwareDevelopmentTools = [
  { label: "Front-end", items: ["React", "Angular", "Vue"] },
  { label: "Back-end", items: ["Node.js", "Python", "Java", ".NET", "PHP"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL"] },
  { label: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { label: "Mobile", items: ["Flutter", "React Native", "Native Android", "Native iOS"] },
  { label: "DevOps & Testing", items: ["GitHub / GitLab", "Postman", "Playwright", "Cypress", "Selenium"] },
];

const softwareDevelopmentServices = [
  {
    title: "Custom Software Development",
    overview: "Software built around a client's specific business process, from discovery through deployment and maintenance.",
    whatWeOffer: ["Internal business portals", "Booking and inventory systems", "Workflow automation", "Reporting dashboards", "Employee and customer management systems"],
    deliverables: ["Requirements and design documentation", "Deployed application", "Test results", "Maintenance plan"],
    benefits: ["Software tailored precisely to the client's process", "Reduced reliance on spreadsheets and manual work"],
  },
  {
    title: "Web Application Development",
    overview: "Development of admin dashboards, customer portals, SaaS platforms, marketplaces, booking platforms, and learning management systems.",
    whatWeOffer: ["Custom web application design and development", "API integration", "Responsive and accessible interfaces"],
    deliverables: ["Deployed web application", "Source code", "Technical documentation"],
    benefits: ["A scalable and maintainable web platform", "Better digital experiences for customers and employees"],
  },
  {
    title: "Mobile Application Development",
    overview: "Android, iOS, and cross-platform applications with supporting backend systems and administration tools.",
    whatWeOffer: ["Native or cross-platform application development", "Backend, database, and authentication", "Payment, map, and notification integrations", "App-store publishing and maintenance"],
    deliverables: ["Published mobile application", "Admin dashboard", "Support documentation"],
    benefits: ["A polished mobile presence for customers or staff", "Convenient access to business services and workflows"],
  },
  {
    title: "Enterprise Software Development",
    overview: "Software built to enterprise standards, including security controls, high availability, audit logs, and role-based access.",
    whatWeOffer: ["Role-based access control", "Audit logging", "Integration with existing enterprise systems", "Performance testing"],
    deliverables: ["Enterprise-grade application", "Security and performance test results", "Formal project documentation"],
    benefits: ["Systems designed to meet enterprise security and compliance expectations", "Better control over users, data, and business processes"],
  },
  {
    title: "SaaS Product Development",
    overview: "Helping founders and companies build subscription-based products, including billing, multi-tenancy, and ongoing feature development.",
    whatWeOffer: ["Product discovery", "Authentication and subscription billing", "Multi-tenant architecture", "Admin panel", "Analytics", "Notifications", "API development", "Cloud deployment"],
    deliverables: ["Launched SaaS product", "Technical documentation", "Ongoing development roadmap"],
    benefits: ["A scalable subscription product", "A long-term development relationship", "Infrastructure designed to support future product growth"],
  },
  {
    title: "CRM and ERP Development",
    overview: "Building, customizing, or integrating CRM and ERP platforms, including migrating business data from spreadsheets or legacy software.",
    whatWeOffer: ["Custom CRM/ERP development or platform customization", "System integration", "Data migration", "Dashboards and reporting"],
    deliverables: ["Configured CRM/ERP system", "Migrated data", "Training documentation"],
    benefits: ["Consolidated and accurate business data", "Reduced dependence on spreadsheets", "Better visibility into business operations"],
  },
  {
    title: "API Development and Integration",
    overview: "Connecting disparate business systems including payment gateways, accounting software, CRM-to-ERP platforms, e-commerce-to-inventory systems, shipping services, and AI services.",
    whatWeOffer: ["Payment gateway integration", "Accounting and CRM/ERP integration", "SMS, email, and shipping API integration", "AI service integration"],
    deliverables: ["Integrated APIs", "Integration documentation"],
    benefits: ["Systems communicate automatically", "Reduced manual data re-entry", "Faster and more reliable cross-system workflows"],
  },
  {
    title: "E-commerce Solutions",
    overview: "Shopify, WooCommerce, or custom e-commerce platforms with payment, inventory, and shipping integrations.",
    whatWeOffer: ["Platform selection and build-out", "Payment and shipping integration", "Order and inventory management", "Mobile shopping experience"],
    deliverables: ["Live e-commerce store", "Integration documentation", "Performance documentation"],
    benefits: ["A reliable online sales channel", "Secure and convenient customer shopping experience", "Better integration between orders, inventory, payments, and shipping"],
  },
  {
    title: "Maintenance and Support",
    overview: "Ongoing bug fixing, monitoring, security updates, backups, performance optimization, and new feature development after a project is delivered.",
    whatWeOffer: ["Bug fixing and performance optimization", "Server monitoring and security updates", "Database maintenance", "Monthly reporting"],
    deliverables: ["Monthly maintenance report", "Ticket resolution log"],
    benefits: ["A stable and continuously improving application", "Faster resolution of technical issues", "Better long-term application reliability"],
  },
  {
    title: "Legacy System Modernization",
    overview: "Improving or replacing old software without unnecessarily disrupting the business, including application, database, language, infrastructure, and UI modernization.",
    whatWeOffer: ["Legacy code and database migration", "Rebuilding desktop software as web applications", "Cloud migration", "APIs around legacy systems", "Security and library upgrades"],
    deliverables: ["Modernization assessment", "Migration plan", "Modernized application"],
    benefits: ["Reduced risk from unsupported systems", "Improved performance", "Improved security", "Better maintainability"],
  },
];

const softwareDevelopmentLifecycle = ["Discovery", "Requirements", "Design", "Development", "Testing", "Deployment", "Maintenance", "Modernization"];

const softwareDevelopmentOutcomes = [
  "Custom solutions for specific business processes",
  "Reduced manual work",
  "Better system integration",
  "Scalable digital platforms",
  "Improved maintainability",
  "Modernized legacy systems",
  "Ongoing technical support",
  "Better operational visibility",
];

const softwareDevelopmentGrowthRoadmap = [
  {
    title: "Initial Growth Team",
    roles: ["Full-time Project Manager", "Full-time QA Engineer", "Dedicated UI/UX Designer", "Additional Developers", "Sales Development Representative", "Customer Support / Maintenance Engineer"],
  },
  {
    title: "At Scale",
    roles: ["Engineering Manager", "Delivery Manager", "Additional Technical Leads", "Dedicated Business Analysts", "Dedicated DevOps Staff", "Dedicated Security Staff", "Account Manager", "Finance / HR Support"],
  },
];

const cloudObjectives = [
  "Design cloud architectures that are scalable, secure, and cost-efficient.",
  "Execute migrations with minimal downtime.",
  "Continuously monitor and reduce cloud spend through FinOps practices.",
  "Provide support coverage appropriate to each client's operational needs.",
];

const cloudIndustries: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Healthcare", description: "Reliable cloud environments for critical systems and growing clinical operations.", icon: HardDrive },
  { title: "Finance", description: "Scalable infrastructure with strong security and operational resilience.", icon: Briefcase },
  { title: "E-commerce", description: "Cloud platforms that support modern commerce, integrations, and peak traffic.", icon: Globe },
  { title: "SaaS Startups", description: "Flexible cloud foundations for product delivery, automation, and rapid growth.", icon: Sparkles },
];

const cloudTools = [
  { label: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { label: "Infrastructure & Containers", items: ["Docker", "Kubernetes"] },
  { label: "DevOps", items: ["CI/CD Pipelines", "Infrastructure as Code"] },
  { label: "Cloud Operations", items: ["Cloud Cost-Management Tooling"] },
];

const cloudServices = [
  {
    title: "Cloud Architecture and Design",
    overview: "Designing cloud infrastructure and advising on multi-cloud strategy for scalability, reliability, and long-term growth.",
    whatWeOffer: ["Cloud architecture design", "Multi-cloud and hybrid-cloud planning", "Scalability and resilience design"],
    deliverables: ["Architecture diagrams", "Design documentation"],
    benefits: ["A cloud foundation that scales with the business", "Better infrastructure planning", "Improved scalability and resilience"],
  },
  {
    title: "Cloud Migration",
    overview: "Planning and executing cloud migration projects with minimal downtime and controlled business disruption.",
    whatWeOffer: ["Migration assessment and planning", "Data and workload migration", "Cutover and validation"],
    deliverables: ["Migration plan", "Post-migration validation report"],
    benefits: ["Reduced on-premises infrastructure cost and risk", "A structured transition to cloud infrastructure", "Better scalability and flexibility"],
  },
  {
    title: "DevOps and CI/CD Implementation",
    overview: "Implementing CI/CD pipelines, automated deployments, and containerization to make software delivery faster and more reliable.",
    whatWeOffer: ["CI/CD pipeline design", "Containerization with Docker and Kubernetes", "Deployment automation"],
    deliverables: ["Configured CI/CD pipeline", "Deployment documentation"],
    benefits: ["Faster software releases", "More reliable deployments", "Reduced manual deployment effort", "Improved development and operations workflows"],
  },
  {
    title: "Cloud Security",
    overview: "Security assessments, compliance support, and implementation of cloud security best practices.",
    whatWeOffer: ["Cloud security assessment", "Access-control configuration", "Encryption configuration", "Compliance support"],
    deliverables: ["Security audit report", "Remediation plan"],
    benefits: ["Reduced cloud security risk", "Better protection of cloud workloads and data", "Improved security visibility"],
  },
  {
    title: "Cost Optimization (FinOps)",
    overview: "Monitoring cloud spending, identifying unnecessary costs, and recommending practical measures to improve cloud cost efficiency.",
    whatWeOffer: ["Cloud spend analysis", "Waste identification", "Resource rightsizing", "Reserved-capacity recommendations"],
    deliverables: ["Cost optimization report", "Savings implementation plan"],
    benefits: ["Measurable reduction in cloud spend", "Better cloud resource utilization", "Improved cost visibility", "More predictable cloud expenditure"],
  },
  {
    title: "Multi-Cloud Solutions",
    overview: "Designing hybrid and multi-cloud architectures that reduce unnecessary vendor lock-in while optimizing workload placement and performance.",
    whatWeOffer: ["Multi-cloud architecture design", "Cross-cloud networking strategy", "Cross-cloud data strategy"],
    deliverables: ["Multi-cloud architecture plan"],
    benefits: ["Reduced vendor lock-in risk", "Optimized workload placement", "Greater infrastructure flexibility"],
  },
  {
    title: "Cloud Support",
    overview: "Providing ongoing cloud troubleshooting and maintenance with business-hours or 24x7 support coverage depending on the client's operational requirements.",
    whatWeOffer: ["Business-hours support", "24x7 support options", "Incident response", "Troubleshooting", "Ongoing cloud maintenance"],
    deliverables: ["Support SLA", "Incident reports"],
    benefits: ["Reduced downtime", "Faster incident resolution", "Continuous operational support"],
  },
];

const cloudLifecycle = ["Architecture", "Migration", "DevOps", "Security", "FinOps", "Multi-Cloud", "Support"];

const cloudOutcomes = [
  "Scalable cloud infrastructure",
  "Controlled migration",
  "Improved reliability",
  "Better cloud security",
  "Reduced infrastructure risk",
  "Improved cloud cost visibility",
  "Reduced unnecessary cloud spending",
  "Faster software delivery",
  "Flexible multi-cloud strategies",
  "Ongoing cloud support",
];

const cloudSupportModel = [
  { title: "Business-Hours Support", detail: "1–2 people", description: "For business-hours-only coverage." },
  { title: "24x7 Coverage — Five Days", detail: "3 people", description: "For 24x7 coverage across five days." },
  { title: "Full 24x7 Coverage — Seven Days", detail: "6 people", description: "For full 24x7 coverage across seven days." },
];

const digitalMarketingObjectives = [
  "Agree on measurable deliverables, reporting frequency, and realistic timelines rather than guaranteeing rankings or virality.",
  "Connect every marketing activity to a business result such as enquiries, customers, or revenue.",
  "Build a repeatable client-onboarding and reporting process.",
  "Grow client accounts through demonstrated results rather than vanity metrics.",
];

const digitalMarketingIndustries = [
  { category: "Local Businesses", items: ["Dentists", "Salons", "Gyms", "Restaurants", "Clinics", "Coaching Centres", "Hotels"] },
  { category: "High-Value Services", items: ["Real Estate", "Interior Design", "Legal Services", "Financial Advisors", "Education Consultants"] },
  { category: "E-commerce Brands", items: ["Fashion", "Beauty", "Food", "Home Products", "Specialty Products"] },
  { category: "B2B Companies", items: ["Software Companies", "Manufacturers", "Recruitment Firms", "Professional Services"] },
  { category: "Personal Brands", items: ["Consultants", "Trainers", "Doctors", "Speakers", "Coaches"] },
];

const digitalMarketingTools = [
  { label: "Analytics", items: ["Google Analytics", "Google Search Console", "Reporting Tools", "Dashboarding Tools"] },
  { label: "Advertising", items: ["Google Advertising Platform", "Meta Advertising Platform", "Campaign Tracking"] },
  { label: "SEO", items: ["SEO Tools", "Keyword Research Tools", "Local SEO Insights"] },
  { label: "CRM & Email", items: ["Email Automation Platforms", "CRM Automation Platforms", "Lead Management Tools"] },
];

const digitalMarketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    overview: "Improving website visibility through technical SEO, local SEO, keyword research, on-page optimization, and link-building strategies.",
    whatWeOffer: ["Technical and on-page SEO", "Local SEO", "Google Business Profile optimization", "Keyword research", "Link building"],
    deliverables: ["SEO audit", "Monthly ranking and traffic report"],
    industries: ["Clinics", "Schools", "Real estate", "Hotels", "E-commerce", "Local businesses"],
    benefits: ["Increased organic traffic", "Improved search visibility", "Improved rankings", "Increased enquiries"],
  },
  {
    title: "SEM / PPC Advertising",
    overview: "Running Google Search, Display, YouTube, and Shopping campaigns focused on measurable advertising performance.",
    whatWeOffer: ["Campaign strategy and setup", "Bid and budget management", "Conversion tracking"],
    deliverables: ["Campaign reports", "Cost-per-lead tracking", "ROAS tracking"],
    industries: ["E-commerce", "Education", "Real estate", "Service businesses"],
    benefits: ["Predictable and measurable lead-generation campaigns", "Better visibility into advertising performance", "Data-driven budget optimization"],
  },
  {
    title: "Social Media Marketing",
    overview: "Managing social media presence across Instagram, Facebook, LinkedIn, YouTube, and other relevant platforms.",
    whatWeOffer: ["Content calendar creation", "Content publishing", "Community management", "Paid social campaigns"],
    deliverables: ["Content calendar", "Monthly engagement report"],
    industries: ["Restaurants", "Fashion brands", "Coaches", "Retailers", "B2B companies"],
    benefits: ["Increased reach", "Improved engagement", "Audience growth", "Stronger social presence"],
  },
  {
    title: "Content Marketing",
    overview: "Creating blogs, website copy, case studies, videos, reels, and educational content designed to attract and engage target audiences.",
    whatWeOffer: ["Blog and website content", "Case studies", "Video scripting", "Reel scripting"],
    deliverables: ["Content calendar", "Published content assets"],
    industries: ["Almost every business"],
    benefits: ["Increased traffic", "Increased engagement", "Lead-generation opportunities", "Stronger brand authority"],
  },
  {
    title: "Email Marketing",
    overview: "Creating newsletters, promotional campaigns, abandoned-cart emails, and automated email sequences.",
    whatWeOffer: ["Email sequence design", "Audience segmentation", "Marketing automation", "Performance tracking"],
    deliverables: ["Email templates", "Campaign performance report"],
    industries: ["E-commerce", "SaaS", "Education", "Consultants"],
    benefits: ["Improved email engagement", "Increased click-through opportunities", "Increased repeat-sales opportunities", "Better customer communication"],
  },
  {
    title: "Performance Marketing",
    overview: "Marketing campaigns focused on measurable leads or revenue rather than awareness alone.",
    whatWeOffer: ["Full-funnel campaign design", "Budget allocation", "Campaign testing", "Lead-quality tracking"],
    deliverables: ["Performance dashboard", "Monthly ROI report"],
    industries: ["E-commerce", "Real estate", "Finance", "Education", "Healthcare"],
    benefits: ["Improved cost-per-acquisition visibility", "Better lead quality tracking", "More measurable revenue outcomes", "Data-driven campaign optimization"],
  },
  {
    title: "Online Reputation Management",
    overview: "Managing online reviews, responses, complaints, business listings, and brand mentions.",
    whatWeOffer: ["Review monitoring", "Review response management", "Listing management", "Complaint escalation"],
    deliverables: ["Reputation report", "Response log"],
    industries: ["Hotels", "Clinics", "Restaurants", "Professionals", "Local businesses"],
    benefits: ["Improved online reputation", "Increased review activity", "Better visibility into customer sentiment", "More consistent responses to customer feedback"],
  },
  {
    title: "Lead Generation",
    overview: "Building lead-generation systems using landing pages, forms, WhatsApp campaigns, lead advertisements, funnels, and CRM follow-up.",
    whatWeOffer: ["Landing page design", "Funnel design", "Lead ad campaigns", "CRM follow-up automation"],
    deliverables: ["Live landing pages", "Lead funnel", "CRM setup"],
    industries: ["Real estate", "Insurance", "Education", "Home services", "B2B"],
    benefits: ["Increased qualified-lead opportunities", "Improved appointment-generation process", "Better lead follow-up", "Reduced manual lead management"],
  },
  {
    title: "Marketing Analytics",
    overview: "Tracking campaigns, dashboards, attribution, and customer behavior to provide clearer visibility into marketing performance.",
    whatWeOffer: ["Dashboard setup", "Attribution modeling", "Campaign performance analysis"],
    deliverables: ["Analytics dashboard", "Monthly insights report"],
    industries: ["Growing businesses", "Performance marketing clients"],
    benefits: ["Clearer visibility into marketing ROI", "Better campaign decision-making", "Improved understanding of customer behavior", "More informed marketing investments"],
  },
  {
    title: "Brand Promotion",
    overview: "Planning and supporting brand identity campaigns, influencer marketing, PR activities, events, and partnerships.",
    whatWeOffer: ["Brand campaign planning", "Influencer coordination", "PR coordination", "Event support", "Partnership support"],
    deliverables: ["Brand campaign plan", "Post-campaign report"],
    industries: ["Startups", "Consumer brands", "Local businesses"],
    benefits: ["Increased brand awareness", "Increased reach", "Stronger brand visibility", "Increased branded-search opportunities"],
  },
];

const marketingFunnel = [
  { stage: "Awareness", description: "Visibility, discovery, and initial interest." },
  { stage: "Interest", description: "Educational content and engagement." },
  { stage: "Consideration", description: "Evaluation, trust-building, and proof points." },
  { stage: "Lead", description: "Conversion-focused campaigns and follow-up." },
  { stage: "Customer", description: "Retention, advocacy, and repeat engagement." },
];

const digitalMarketingOutcomes = [
  "Increased online visibility",
  "More qualified enquiries",
  "Better lead-generation processes",
  "Improved conversion opportunities",
  "Better customer engagement",
  "Stronger online reputation",
  "Improved marketing ROI visibility",
  "Better campaign decision-making",
  "Increased repeat-customer opportunities",
];

const digitalMarketingGrowthRoadmap = [
  {
    title: "Growing Team",
    roles: ["Copywriter", "Video Editor / Content Creator", "Web Developer", "Email / CRM Specialist", "Marketing Analyst", "Business Development Executive", "Reputation Manager", "Finance / Operations Administrator"],
  },
  {
    title: "At 10+ Clients",
    roles: ["Sales", "Account Management", "SEO", "Paid Media", "Content & Social", "Design & Video", "Web / Technical", "Analytics", "Finance & Operations"],
  },
];

const btdsPipelineSteps = [
  {
    title: "01 — Student Acquisition",
    summary: "We build a continuous student pipeline through college partnerships, MoUs, campus recruitment, faculty coordination, educational seminars, workshops, digital marketing, and campus drives.",
    bullets: ["College partnerships", "MoUs", "Campus recruitment", "Faculty coordination", "Workshops", "Digital marketing"],
  },
  {
    title: "02 — Enrollment & Assessment",
    summary: "Interested students move through registration, aptitude, technical, communication, and interview stages before being placed into an appropriate batch.",
    bullets: ["Registration", "Aptitude assessment", "Technical assessment", "Communication assessment", "Personal interview"],
  },
  {
    title: "03 — Foundation Training",
    summary: "Every participant begins with a common technical and professional foundation that supports future growth.",
    bullets: ["Programming fundamentals", "Problem solving", "Git & GitHub", "Databases", "SQL", "Communication", "Agile practices"],
  },
  {
    title: "04 — Full Stack Specialization",
    summary: "Students receive structured exposure to the modern software stack through focused technology categories.",
    bullets: ["Frontend: Angular, React, Next.js", "Backend: .NET, ASP.NET Core, REST APIs", "Databases: SQL Server, MySQL", "Cloud & DevOps: Docker, CI/CD, Azure"],
  },
  {
    title: "05 — Real Project Experience",
    summary: "Learning is applied through practical projects such as ERP, LMS, hospital, inventory, CRM, HRMS, and AI-driven solutions.",
    bullets: ["ERP systems", "Learning management systems", "Hospital management systems", "Inventory and CRM projects", "AI applications"],
  },
  {
    title: "06 — Staged Internship Pipeline",
    summary: "Candidates grow through foundation learning, internal tasks, peer review, product development, and high-priority delivery support.",
    bullets: ["Foundation learning", "Internal tasks", "Peer review", "Internal product development", "Client project support", "High-priority delivery"],
  },
  {
    title: "07 — Continuous Evaluation",
    summary: "Progress is monitored through attendance, discipline, technical skill, assignments, communication, code quality, teamwork, and project ownership.",
    bullets: ["Attendance", "Discipline", "Technical skills", "Assignments", "Communication", "Code quality", "Teamwork", "Project ownership"],
  },
  {
    title: "08 — Live Project Exposure",
    summary: "Students gradually advance from internal tools to company products and, where appropriate, live client-facing work under structured supervision.",
    bullets: ["Internal tools", "Company products", "Live client projects"],
  },
  {
    title: "09 — Certification",
    summary: "Successful candidates receive program documentation based on completion, performance, and applicable program requirements.",
    bullets: ["Internship certificate", "Project certificate", "Performance report", "Technical skill assessment", "Recommendation letter"],
  },
  {
    title: "10 — Employment & Placement",
    summary: "Top-performing candidates may be considered for employment with UpStairs or placement with partner organizations through performance-based pathways.",
    bullets: ["Join UpStairs", "Partner placement", "Performance-based employment and placement opportunities"],
  },
];

const btdsTechnologyGroups = [
  { title: "Frontend", items: ["Angular", "React", "Next.js"] },
  { title: "Backend", items: [".NET", "ASP.NET Core", "REST APIs"] },
  { title: "Database", items: ["SQL Server", "MySQL"] },
  { title: "Cloud & DevOps", items: ["Docker", "CI/CD", "Azure"] },
  { title: "Development Tools", items: ["Git", "GitHub", "Jira"] },
  { title: "Methodologies", items: ["Agile", "Scrum"] },
];

const btdsStudentBenefits = [
  { title: "Industry-Oriented Full Stack Development", description: "Structured technical training focused on practical software development skills." },
  { title: "Professional Mentoring", description: "One-on-one mentoring and career guidance." },
  { title: "Live Project Exposure", description: "Opportunities to work on practical projects and understand real development workflows." },
  { title: "Technical Evaluation", description: "Structured technical assessments and skill evaluation." },
  { title: "Skill Certification", description: "Program certificates and performance documentation based on successful completion." },
  { title: "Soft Skills Development", description: "Training in communication, teamwork, professional ethics, and workplace behavior." },
  { title: "Placement Assistance", description: "Career guidance and consideration for employment or partner placement opportunities based on eligibility and performance." },
];

const btdsCollegeBenefits = [
  { title: "Reliable Internship Partner", description: "A structured internship and talent-development program for students." },
  { title: "Final-Year & Major Project Support", description: "Support for final-year and major project development." },
  { title: "Technology Seminars", description: "Ongoing seminars and workshops covering AI, cloud computing, DevOps, and full stack development." },
  { title: "Industry Connection", description: "A structured bridge between academic learning and industry requirements." },
  { title: "Career Pipeline", description: "A pathway connecting graduates with industry-oriented opportunities." },
];

const btdsBusinessBenefits = [
  { title: "Engineering Talent Pipeline", description: "A continuous pipeline of trained and evaluated engineering candidates." },
  { title: "Reduced Hiring & Onboarding Effort", description: "Reduce the time required to identify and prepare suitable entry-level engineering talent." },
  { title: "Increased Project Capacity", description: "Access to trained candidates who can contribute under appropriate supervision." },
  { title: "Evaluated Engineers", description: "Candidates are assessed through technical evaluations, assignments, projects, communication assessments, and performance tracking." },
  { title: "Reduced Recruitment Dependency", description: "Build a more structured talent pipeline instead of relying entirely on traditional hiring channels." },
  { title: "Better Talent Visibility", description: "Businesses can evaluate candidates based on demonstrated skills and project experience." },
];

export default function ServiceDetailContent({ service, sectionLabel, sectionHref }: ServiceDetailContentProps) {
  const isItConsulting = service.slug === "it-consulting";
  const isSoftwareDevelopment = service.slug === "software-development";
  const isBtds = service.slug === "btds";
  const isAiAutomation = service.slug === "ai-automation";
  const isManagedIt = service.slug === "managed-it";
  const isCloudServices = service.slug === "cloud-services";
  const isDigitalMarketing = service.slug === "digital-marketing";

  return (
    <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
      <article className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-slate">
          <Link href="/" className="transition-colors hover:text-blueline">
            Home
          </Link>
          <span>/</span>
          <Link href={sectionHref} className="transition-colors hover:text-blueline">
            {sectionLabel}
          </Link>
          <span>/</span>
          <span className="font-semibold text-ink">{service.title}</span>
        </div>

        <div className="mt-6 sm:mt-8 rounded-[2rem] border border-grid bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-40px_rgba(14,21,36,0.30)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-blueline font-medium">
                {isBtds ? "BTDS" : isItConsulting ? "IT Consulting Division" : isSoftwareDevelopment ? "Software Development Division" : service.title}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight text-balance">
                {isBtds
                  ? "BTDS – The Talent Development Division (TDD)"
                  : isItConsulting
                    ? "IT Consulting Services"
                    : isSoftwareDevelopment
                      ? "Software Development Services"
                      : service.title}
              </h1>
              <p className="mt-3 font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-blueline font-medium">
                {isBtds ? "Building Future Engineers. Strengthening Business. Creating Sustainable Growth." : null}
              </p>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate">
                {isBtds
                  ? "A structured engineering talent pipeline that transforms fresh graduates into industry-ready software professionals through training, mentoring, evaluation, and real project experience."
                  : isItConsulting
                    ? "Strategic technology consulting that transforms technology challenges into measurable business outcomes."
                    : isSoftwareDevelopment
                      ? "Custom software built around your business, designed to scale with your growth."
                      : service.intro}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={isBtds ? "/contact-us?subject=BTDS%20assessment" : "/#contact"} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                {isBtds ? "Enquire About Assessment" : isItConsulting ? "Talk to Our Experts" : isSoftwareDevelopment ? "Start Your Project" : "Get Started"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={isBtds ? "#partner-btds" : "/#contact"} className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                {isBtds ? "Partner With Us" : "Contact Us"}
              </Link>
            </div>
          </div>
        </div>

        {isBtds ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A continuous engineering talent pipeline for students, colleges, and businesses.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  UpStairs&apos; Talent Development Division (TDD) is not a traditional internship program — it is a continuous engineering talent pipeline. We take students fresh out of college and, through structured training, mentoring, and real project experience, turn them into industry-ready software professionals.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Students", description: "Practical training and real project experience.", icon: Users },
                { title: "Colleges", description: "A structured and reliable industry internship partnership.", icon: GraduationCap },
                { title: "Businesses", description: "Access to trained and evaluated engineering talent.", icon: Briefcase },
              ].map((audience) => (
                <div key={audience.title} className="rounded-[2rem] border border-grid bg-white p-8">
                  <audience.icon className="h-8 w-8 text-blueline" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{audience.description}</p>
                </div>
              ))}
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Why We Built BTDS</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Closing the gap between education and industry-ready engineering capability.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Every year, thousands of students complete degrees in BCA, BCS, MCA, MSc Computer Science, BE/B.Tech, Polytechnic Diploma, and ITI (Computer) — but most graduate without practical, industry-ready experience. Companies spend months training new hires, colleges look for reliable internship partners, and students actively search for internships that actually prepare them for the industry.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate">
                  BTDS was built to close that gap — for students, for colleges, and for businesses that need dependable engineering talent.
                </p>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">How BTDS Works</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A 10-step talent development pipeline.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {btdsPipelineSteps.map((step) => (
                  <div key={step.title} className="rounded-2xl border border-grid bg-paper p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">{step.title.split(" — ")[0]}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title.split(" — ")[1]}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{step.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">What Students Gain</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Practical growth, professional guidance, and relevant experience.</h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {btdsStudentBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl border border-grid bg-paper p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">What Colleges Gain</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A reliable bridge between academic learning and industry readiness.</h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {btdsCollegeBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl border border-grid bg-paper p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">What Businesses Gain</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A structured talent pipeline with more visibility and less guesswork.</h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {btdsBusinessBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl border border-grid bg-paper p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">BTDS Talent Development Model</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Learn, practice, build, evaluate, deliver, and grow.</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {[
                  { title: "Learn", description: "Build foundational technical knowledge." },
                  { title: "Practice", description: "Complete assignments and internal tasks." },
                  { title: "Build", description: "Create real software projects." },
                  { title: "Evaluate", description: "Assess technical and professional performance." },
                  { title: "Deliver", description: "Contribute to internal or appropriate client work." },
                  { title: "Grow", description: "Advance toward leadership, mentoring, employment, or partner opportunities." },
                ].map((stage, index) => (
                  <div key={stage.title} className="flex min-w-[180px] flex-col items-center rounded-2xl border border-grid bg-paper p-5 text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blueline/10 text-sm font-semibold text-blueline">{index + 1}</div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technology Stack</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">The tools and platforms used throughout the program.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {btdsTechnologyGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Who Can Apply?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Eligible candidates may come from relevant academic and technical backgrounds.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {['BCA', 'BCS', 'MCA', 'MSc Computer Science', 'BE/B.Tech', 'Polytechnic Diploma', 'ITI (Computer)'].map((item) => (
                  <span key={item} className="rounded-full border border-grid bg-paper px-4 py-2 text-sm text-slate">{item}</span>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Program Journey</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">A clear path from application to professional growth.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Apply', 'Assessment', 'Batch Allocation', 'Foundation Training', 'Specialization', 'Projects', 'Evaluation', 'Internship', 'Certification', 'Employment / Placement Opportunity'].map((step) => (
                  <span key={step} className="rounded-full border border-grid bg-paper px-4 py-2 text-sm text-slate">{step}</span>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Our Promise</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">BTDS exists to build a standardized engineering culture, a strong alumni network, and a scalable talent pipeline.</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Every student who joins has a real shot at becoming a productive, industry-ready software professional, and every partner — whether college or business — gets dependable, well-trained talent.
              </p>
            </section>

            <section id="partner-btds" className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Partner With BTDS</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Colleges and businesses can collaborate to create structured pathways for student development and engineering talent growth.</h2>
                  <p className="mt-6 text-lg leading-relaxed text-slate">
                    Whether you are a college looking for a reliable internship partner or a business seeking trained engineering talent, BTDS creates a practical bridge between learning and delivery.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                    Partner With Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Apply for BTDS</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Ready to build your engineering career with practical training, mentoring, and real project experience?</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  BTDS admission begins with an assessment. Contact our team to understand the eligibility requirements and assessment process before progressing to the program.
                </p>
                <Link href="/contact-us?subject=BTDS%20assessment" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Enquire About the Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </>
        ) : isItConsulting ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Technology guidance shaped around business outcomes.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Upstairs Techno&apos;s IT Consulting division helps organizations diagnose technology problems, define a clear roadmap, and modernize their systems. Rather than selling generic technology services, this division packages its offerings around measurable outcomes such as lower operating costs, faster operations, reduced risk, and improved customer experience.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Objectives</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Practical goals for every engagement.</h2>
                <div className="mt-8 space-y-4">
                  {itConsultingObjectives.map((objective) => (
                    <div key={objective} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Why IT Consulting</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A grounded, senior-led approach.</h2>
                <div className="mt-8 space-y-4">
                  {[
                    { title: "Business-first analysis", description: "Advice begins with the real pain points behind the technology challenge." },
                    { title: "Structured execution", description: "Every recommendation includes clear next steps, ownership, and delivery milestones." },
                    { title: "Risk-aware modernization", description: "Security, governance, and operational continuity shape every roadmap." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-grid bg-paper p-5">
                      <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Industries We Serve</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A consulting practice that adapts to the realities of each sector.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {itConsultingIndustries.map((industry) => (
                  <div key={industry.title} className="rounded-2xl border border-grid bg-paper p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{industry.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies &amp; Tools Used</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">The platforms and tools that support modern delivery.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {itConsultingTools.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.label}</h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Services Offered</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A portfolio of consulting services under one division.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate">Each engagement is designed to deliver a practical roadmap, measurable outcomes, and a clear path to implementation.</p>
              </div>
              <div className="mt-8 space-y-4">
                {itConsultingServices.map((item, index) => (
                  <details key={item.title} className="group rounded-2xl border border-grid bg-paper p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">Service {index + 1}</p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.overview}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-grid bg-white px-3 py-2 text-xs font-medium text-ink">
                        Expand
                      </span>
                    </summary>
                    <div className="mt-6 grid gap-6 lg:grid-cols-3">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">What We Offer</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.whatWeOffer.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Deliverables</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.deliverables.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Benefits for Clients</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.benefits.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Employee Requirements</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A flexible staffing model for an evolving consulting division.</h2>
                <p className="mt-5 text-sm leading-relaxed text-slate">
                  The IT Consulting division is designed to scale with recurring demand. The organization can expand its team with senior delivery staff, analysts, architects, and support specialists as client needs grow, while maintaining the professional standards expected from a modern consulting practice.
                </p>
              </div>
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Future Scope</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Planned growth for the division.</h2>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate">
                  {[
                    "A second Project Manager",
                    "Business Analyst",
                    "Additional Solutions Architects",
                    "Cloud and Infrastructure Engineers",
                    "1–2 dedicated Cybersecurity Consultants",
                    "1–2 Automation or Software Engineers",
                    "Customer Success or Support Manager",
                    "Dedicated Finance and Administration employee",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-blueline/5 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to modernize?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s identify your technology challenges and turn them into measurable business outcomes.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Talk to Our Experts
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                  Contact Us
                </Link>
              </div>
            </section>
          </>
        ) : isAiAutomation ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">AI that is focused on measurable business outcomes.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Upstairs Techno&apos;s AI &amp; Automation division builds AI-powered chatbots, agents, and automations that deliver measurable business outcomes such as reduced response time, lower error rates, improved operational efficiency, or more qualified leads. The division deliberately avoids selling every AI capability to every client and instead focuses on one industry, one business problem, and one measurable result at a time.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Objectives</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Practical goals for every engagement.</h2>
                <div className="mt-8 space-y-4">
                  {aiObjectives.map((objective) => (
                    <div key={objective} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Business Outcomes</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">From pilot to production with clear value.</h2>
                <div className="mt-8 space-y-4">
                  {[
                    { title: "Faster response handling", description: "AI assistants and automations reduce queue time and improve customer experience." },
                    { title: "Lower operational cost", description: "We remove repetitive work so teams spend less time on manual processes." },
                    { title: "Safer AI adoption", description: "Governance, oversight, and approval points keep AI usage controlled and trustworthy." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-grid bg-paper p-5">
                      <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Industries We Serve</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">AI solutions tailored to the realities of each sector.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {aiIndustries.map((industry) => (
                  <div key={industry.title} className="rounded-2xl border border-grid bg-paper p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{industry.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies &amp; Tools Used</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">The platforms and tools that power practical automation.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {aiTools.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.label}</h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Services Offered</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A structured portfolio of AI and automation capabilities.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate">Each service is designed to deliver a clear outcome, a practical build plan, and a measurable path to adoption.</p>
              </div>
              <div className="mt-8 space-y-4">
                {aiServices.map((item) => (
                  <details key={item.title} className="group rounded-2xl border border-grid bg-paper p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.overview}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-grid bg-white px-3 py-2 text-xs font-medium text-ink">
                        Expand
                      </span>
                    </summary>
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">What We Offer</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.whatWeOffer.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Deliverables</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.deliverables.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Industries We Serve</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.industries.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Benefits for Clients</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.benefits.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Future Scope / Growing AI Team</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A roadmap for team growth as AI demand expands.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {futureScopeRoles.map((role) => (
                  <div key={role} className="rounded-2xl border border-grid bg-paper p-5">
                    <div className="flex items-center gap-3">
                      <Cpu className="h-5 w-5 text-blueline" />
                      <h3 className="font-display text-lg font-semibold text-ink">{role}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-blueline/5 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to explore AI?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s map the right AI opportunity for your business and build it with clear outcomes.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Discuss Your AI Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                  Contact Us
                </Link>
              </div>
            </section>
          </>
        ) : isManagedIt ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Proactive, predictable, and continuous IT management.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Upstairs Techno&apos;s Managed IT Services division manages a client&apos;s technology continuously for a monthly fee rather than only responding when something breaks. The team monitors systems, prevents failures, provides help-desk support, protects data, manages cybersecurity, and advises clients on technology decisions.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Objectives</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Professional outcomes for every managed service engagement.</h2>
                <div className="mt-8 space-y-4">
                  {managedItObjectives.map((objective) => (
                    <div key={objective} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Why Managed IT Services</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A business-ready support model for modern teams.</h2>
                <div className="mt-8 space-y-4">
                  {managedItBusinessOutcomes.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-grid bg-paper p-4">
                      <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-blueline" />
                      <p className="text-sm leading-relaxed text-slate">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Industries We Serve</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Support that adapts to the operating reality of each sector.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {managedItIndustries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div key={industry.title} className="rounded-2xl border border-grid bg-paper p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blueline">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-ink">{industry.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate">{industry.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies &amp; Tools Used</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">The platforms and practices that power reliable managed support.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {managedItTools.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.label}</h3>
                    <div className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <div key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Services Offered</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A complete set of managed IT services under one support model.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate">Every service is designed to keep clients secure, productive, and supported through proactive operations and clear reporting.</p>
              </div>
              <div className="mt-8 space-y-4">
                {managedItServices.map((item, index) => (
                  <details key={item.title} className="group rounded-2xl border border-grid bg-paper p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">Service {index + 1}</p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.overview}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-grid bg-white px-3 py-2 text-xs font-medium text-ink">
                        Expand
                      </span>
                    </summary>
                    <div className="mt-6 grid gap-6 lg:grid-cols-3">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">What We Offer</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.whatWeOffer.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Deliverables</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.deliverables.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Benefits for Clients</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.benefits.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Future Scope</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A professional growth roadmap for a scaling Managed IT division.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {managedItGrowthRoadmap.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
                    <div className="mt-5 space-y-3">
                      {group.roles.map((role) => (
                        <div key={role} className="flex gap-2 rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          <Server className="mt-0.5 h-4 w-4 shrink-0 text-blueline" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-blueline/5 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to discuss your IT requirements?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s talk about how Upstairs Techno can support your business with proactive managed IT services.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                  Contact Us
                </Link>
              </div>
            </section>
          </>
        ) : isSoftwareDevelopment ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Software that supports growth, operations, and long-term delivery.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Upstairs Techno&apos;s Software Development division designs, builds, and maintains custom software for startups, small businesses, and medium-to-large enterprises. The division emphasizes proof of work, a repeatable sales process, and recurring maintenance and support contracts rather than relying only on one-time projects.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Objectives</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A practical delivery model for business software.</h2>
                <div className="mt-8 space-y-4">
                  {softwareDevelopmentObjectives.map((objective) => (
                    <div key={objective} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Software Development Lifecycle</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">From discovery to modernization.</h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  {softwareDevelopmentLifecycle.map((step) => (
                    <span key={step} className="rounded-full border border-grid bg-paper px-3 py-2 text-sm text-slate">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Industries We Serve</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Software delivery tailored to different business environments.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {softwareDevelopmentIndustries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div key={industry.title} className="rounded-2xl border border-grid bg-paper p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blueline">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-ink">{industry.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate">{industry.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies &amp; Tools Used</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A modern stack for building, integrating, and supporting digital products.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {softwareDevelopmentTools.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.label}</h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Services Offered</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A full software delivery portfolio under one division.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate">Each service is designed to support both launch and lifecycle value through delivery, maintenance, and future growth.</p>
              </div>
              <div className="mt-8 space-y-4">
                {softwareDevelopmentServices.map((item, index) => (
                  <details key={item.title} className="group rounded-2xl border border-grid bg-paper p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">Service {index + 1}</p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.overview}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-grid bg-white px-3 py-2 text-xs font-medium text-ink">
                        Expand
                      </span>
                    </summary>
                    <div className="mt-6 grid gap-6 lg:grid-cols-3">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">What We Offer</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.whatWeOffer.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Deliverables</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.deliverables.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Benefits for Clients</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.benefits.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Business Outcomes</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Software that supports operational performance and long-term growth.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {softwareDevelopmentOutcomes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-grid bg-paper p-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blueline" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Future Scope</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A team-growth roadmap for a scaling software division.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {softwareDevelopmentGrowthRoadmap.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
                    <div className="mt-5 space-y-3">
                      {group.roles.map((role) => (
                        <div key={role} className="flex gap-2 rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-blueline" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-blueline/5 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to discuss your software requirements?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s talk about the right software solution for your business.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                  Contact Us
                </Link>
              </div>
            </section>
          </>
        ) : isCloudServices ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Cloud services shaped around architecture, migration, security, and ongoing operations.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Upstairs Techno&apos;s Cloud Services division designs, migrates, secures, and optimizes cloud infrastructure across AWS, Microsoft Azure, and Google Cloud, helping clients avoid unnecessary vendor lock-in while controlling costs and improving reliability.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Objectives</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Practical cloud outcomes for growing organizations.</h2>
                <div className="mt-8 space-y-4">
                  {cloudObjectives.map((objective) => (
                    <div key={objective} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Cloud Lifecycle</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">From architecture to support.</h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  {cloudLifecycle.map((step) => (
                    <span key={step} className="rounded-full border border-grid bg-paper px-3 py-2 text-sm text-slate">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Industries We Serve</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Cloud delivery grounded in the realities of each sector.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {cloudIndustries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div key={industry.title} className="rounded-2xl border border-grid bg-paper p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blueline">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-ink">{industry.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate">{industry.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies &amp; Tools Used</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A practical technology stack for cloud delivery and operations.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {cloudTools.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.label}</h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Cloud Services</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A complete set of cloud services for modern infrastructure teams.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate">Each service is designed to support a practical cloud roadmap with clear deliverables and business value.</p>
              </div>
              <div className="mt-8 space-y-4">
                {cloudServices.map((item, index) => (
                  <details key={item.title} className="group rounded-2xl border border-grid bg-paper p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">Service {index + 1}</p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.overview}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-grid bg-white px-3 py-2 text-xs font-medium text-ink">
                        Expand
                      </span>
                    </summary>
                    <div className="mt-6 grid gap-6 lg:grid-cols-3">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">What We Offer</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.whatWeOffer.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Deliverables</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.deliverables.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Benefits for Clients</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.benefits.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Business Outcomes</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Cloud environments that support growth, resilience, and visibility.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cloudOutcomes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-grid bg-paper p-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blueline" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Future Scope</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A scalable team model for a growing Cloud Services division.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-grid bg-paper p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">Growing Team</h3>
                  <div className="mt-5 space-y-3">
                    {[
                      "Cloud Security Specialists",
                      "Migration Specialists",
                      "FinOps Analysts",
                      "Solutions Architects for Pre-Sales",
                      "Project Managers",
                      "Customer Success Managers",
                      "Additional Support Engineers",
                    ].map((role) => (
                      <div key={role} className="flex gap-2 rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                        <Cloud className="mt-0.5 h-4 w-4 shrink-0 text-blueline" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-grid bg-paper p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">Support Staffing Model</h3>
                  <div className="mt-5 space-y-4">
                    {cloudSupportModel.map((support) => (
                      <div key={support.title} className="rounded-2xl border border-grid bg-white p-4">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="font-display text-lg font-semibold text-ink">{support.title}</h4>
                          <span className="rounded-full bg-blueline/10 px-3 py-1 text-sm font-medium text-blueline">{support.detail}</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate">{support.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-blueline/5 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to discuss your cloud requirements?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s talk about the right cloud strategy for your business.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Talk to a Cloud Expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                  Contact Us
                </Link>
              </div>
            </section>
          </>
        ) : isDigitalMarketing ? (
          <>
            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Division Overview</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Digital marketing built around measurable business growth.</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Upstairs Techno&apos;s Digital Marketing division combines SEO, paid advertising, social media, content, email, and analytics to help businesses attract attention, generate leads, increase sales, and build an online reputation through practical, measurable marketing programs.
                </p>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Objectives</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Measurable outcomes over vanity metrics.</h2>
                <div className="mt-8 space-y-4">
                  {digitalMarketingObjectives.map((objective) => (
                    <div key={objective} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blueline/10 text-blueline">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Industries We Serve</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Focused support for a broad range of business models.</h2>
                <div className="mt-8 space-y-4">
                  {digitalMarketingIndustries.map((group) => (
                    <div key={group.category} className="rounded-2xl border border-grid bg-paper p-4">
                      <h3 className="font-display text-lg font-semibold text-ink">{group.category}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies &amp; Tools Used</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A practical toolkit for modern marketing execution.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {digitalMarketingTools.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{group.label}</h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Digital Marketing Services</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Ten services designed to support different parts of the buyer journey.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate">Each service is presented in an expandable format so the page stays readable while still giving clients a complete picture.</p>
              </div>
              <div className="mt-8 space-y-4">
                {digitalMarketingServices.map((item, index) => (
                  <details key={item.title} className="group rounded-2xl border border-grid bg-paper p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blueline">Service {index + 1}</p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.overview}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-grid bg-white px-3 py-2 text-xs font-medium text-ink">
                        Expand
                      </span>
                    </summary>
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">What We Offer</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.whatWeOffer.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">Deliverables</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.deliverables.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="mt-6 font-display text-lg font-semibold text-ink">Industries We Serve</h4>
                        <p className="mt-3 text-sm leading-relaxed text-slate">{item.industries.join(", ")}</p>
                        <h4 className="mt-6 font-display text-lg font-semibold text-ink">Benefits for Clients</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate">
                          {item.benefits.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blueline" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Marketing Funnel</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Different services can support different stages of the customer journey.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {marketingFunnel.map((step) => (
                  <div key={step.stage} className="rounded-2xl border border-grid bg-paper p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{step.stage}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Business Outcomes</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Practical marketing outcomes that support growth and decision-making.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {digitalMarketingOutcomes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-grid bg-paper p-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blueline" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Future Scope</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">A team-growth roadmap for a scaling digital marketing division.</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {digitalMarketingGrowthRoadmap.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-grid bg-paper p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
                    <div className="mt-5 space-y-3">
                      {group.roles.map((role) => (
                        <div key={role} className="flex gap-2 rounded-full border border-grid bg-white px-3 py-2 text-sm text-slate">
                          <Globe className="mt-0.5 h-4 w-4 shrink-0 text-blueline" />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-blueline/5 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to discuss your marketing requirements?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Let&apos;s talk about the right digital marketing approach for your business.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
                  Start Your Marketing Campaign
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
                  Contact Us
                </Link>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Service Overview</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{service.title}</h2>
                <div className="mt-6 space-y-4 text-slate">
                  {service.about.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">What We Offer</p>
                <div className="mt-6 space-y-3">
                  {service.subServices.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-grid bg-paper p-4">
                      <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Process</p>
                <div className="mt-6 space-y-4">
                  {service.process.map((step, index) => (
                    <div key={step} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-slate">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Results</p>
                <div className="mt-6 space-y-4">
                  {service.results.map((result) => (
                    <div key={result} className="flex gap-3 rounded-2xl bg-paper p-4">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-blueline" />
                      <p className="text-sm leading-relaxed text-slate">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] border border-grid bg-white p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Technologies</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-grid bg-paper px-4 py-2 text-sm text-slate">
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="mt-12 rounded-[2rem] border border-grid bg-paper p-8 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueline">Ready to start</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Let&apos;s talk about the right next step for your technology environment.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-blueline">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-grid bg-white px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:border-blueline hover:text-blueline">
              Contact Us
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
