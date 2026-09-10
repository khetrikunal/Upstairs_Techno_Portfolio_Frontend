export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  readingTime: number;
  coverImage: string;
  publishedAt: string;
  author: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  coverImage: string;
  publishedAt: string;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  postedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  createdAt: string;
}

export interface JobApplication {
  id: string;
  jobSlug: string;
  name: string;
  email: string;
  linkedin?: string;
  message?: string;
  createdAt: string;
}

export interface CareerService {
  id: string;
  title: string;
  category: string;
  headline: string;
  shortDescription: string;
  overview: string;
  description: string;
  benefits: string[];
  whatYouWillGain: string[];
  eligibility: string[];
  requirements: string[];
  duration: string;
  importantInfo: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  ctaLink: string;
  highlights: string[];
}

export interface EducationDetail {
  schoolOrCollege: string;
  boardOrUniversity?: string;
  passingYear: string;
  percentageOrCgpa: string;
}

export interface InternshipApplication {
  id: string;
  // Personal
  fullName: string;
  dob?: string;
  gender?: string;
  photoUrl?: string;

  // Contact
  email: string;
  mobile: string;
  altMobile?: string;
  city?: string;
  state?: string;
  country?: string;

  // Education
  educationLevel: string;
  course: string;
  specialization?: string;
  college: string;
  graduationYear?: string;
  currentSemester?: string;
  cgpa?: string;
  hscDetails?: EducationDetail;
  sscDetails?: EducationDetail;
  additionalEducation?: EducationDetail[];

  // Technical
  technicalSkills: string[];
  programmingLanguages?: string[];
  frameworks?: string[];
  aiSkills?: string[];
  dbSkills?: string[];
  tools?: string[];
  projects?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;

  // Preferences
  domain: string;
  role?: string;
  internshipType: "Remote" | "On-site" | "Hybrid";
  preferredDuration?: string;
  startDate?: string;
  preferredLocation?: string;
  whyJoin: string;
  careerGoals?: string;
  experience?: string;

  // Resume
  resumeFileName: string;
  resumeFileData?: string;

  // Status & Metadata
  consent: boolean;
  status: "SUBMITTED" | "UNDER_REVIEW" | "SHORTLISTED" | "INTERVIEW" | "SELECTED" | "REJECTED";
  internalNotes?: string;
  createdAt: string;
}

