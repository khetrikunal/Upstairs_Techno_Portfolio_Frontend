"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Upload,
  X,
  User,
  Phone,
  GraduationCap,
  Code,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const CONTACT_EMAIL = "contact@upstairstechno.com";

interface EducationItem {
  schoolOrCollege: string;
  boardOrUniversity: string;
  passingYear: string;
  percentageOrCgpa: string;
}

const STEPS = [
  { id: 1, name: "Personal", icon: User },
  { id: 2, name: "Contact", icon: Phone },
  { id: 3, name: "Education", icon: GraduationCap },
  { id: 4, name: "Technical", icon: Code },
  { id: 5, name: "Preferences", icon: Briefcase },
  { id: 6, name: "Resume & Consent", icon: ShieldCheck },
];

export default function InternshipApplicationFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: "",
    dob: "",
    gender: "Prefer not to say",
    photoUrl: "",

    // Step 2: Contact
    email: "",
    mobile: "",
    altMobile: "",
    city: "",
    state: "",
    country: "India",

    // Step 3: Education
    educationLevel: "Undergraduate",
    course: "",
    specialization: "",
    college: "",
    graduationYear: "2026",
    currentSemester: "",
    cgpa: "",
    hscSchool: "",
    hscBoard: "",
    hscYear: "",
    hscPercentage: "",
    sscSchool: "",
    sscBoard: "",
    sscYear: "",
    sscPercentage: "",
    additionalEducation: [] as EducationItem[],

    // Step 4: Technical
    technicalSkills: "",
    programmingLanguages: "",
    frameworks: "",
    aiSkills: "",
    dbSkills: "",
    tools: "",
    projects: "",
    github: "",
    linkedin: "",
    portfolio: "",

    // Step 5: Preferences
    domain: "Full-Stack Software Engineering",
    role: "Software Engineering Intern",
    internshipType: "Remote" as "Remote" | "On-site" | "Hybrid",
    preferredDuration: "6 Months",
    startDate: "",
    preferredLocation: "",
    whyJoin: "",
    careerGoals: "",
    experience: "",

    // Step 6: Resume & Declaration
    resumeFileName: "",
    resumeFileData: "",
    consent: false,
  });

  // Resume File Upload State
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setErrors((prev) => ({ ...prev, resumeFileName: "Please upload a valid PDF or DOC/DOCX file" }));
      return;
    }

    // Validate size (10 MB limit)
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resumeFileName: "File size exceeds 10MB limit" }));
      return;
    }

    setIsUploading(true);
    setUploadProgress(20);

    const reader = new FileReader();
    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };
    reader.onload = () => {
      setUploadProgress(100);
      setTimeout(() => {
        setIsUploading(false);
        updateField("resumeFileName", file.name);
        updateField("resumeFileData", reader.result as string);
      }, 300);
    };
    reader.onerror = () => {
      setIsUploading(false);
      setErrors((prev) => ({ ...prev, resumeFileName: "Failed to read file" }));
    };
    reader.readAsDataURL(file);
  };

  const removeResume = () => {
    updateField("resumeFileName", "");
    updateField("resumeFileData", "");
    setUploadProgress(0);
  };

  // Step Validation logic
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
        newErrors.fullName = "Full Name is required (at least 2 characters)";
      }
    }

    if (step === 2) {
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Valid email address is required";
      }
      if (!formData.mobile.trim() || formData.mobile.trim().length < 8) {
        newErrors.mobile = "Mobile number is required (at least 8 digits)";
      }
    }

    if (step === 3) {
      if (!formData.educationLevel.trim()) {
        newErrors.educationLevel = "Education level is required";
      }
      if (!formData.course.trim()) {
        newErrors.course = "Course/Degree is required";
      }
      if (!formData.college.trim()) {
        newErrors.college = "College/University name is required";
      }
    }

    if (step === 4) {
      if (!formData.technicalSkills.trim()) {
        newErrors.technicalSkills = "Please enter at least one technical skill";
      }
    }

    if (step === 5) {
      if (!formData.domain.trim()) {
        newErrors.domain = "Preferred domain is required";
      }
      if (!formData.whyJoin.trim() || formData.whyJoin.trim().length < 10) {
        newErrors.whyJoin = "Please share why you want to join (at least 10 characters)";
      }
    }

    if (step === 6) {
      if (!formData.resumeFileName) {
        newErrors.resumeFileName = "Resume upload is required";
      }
      if (!formData.consent) {
        newErrors.consent = "You must confirm that the information provided is accurate";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateStep(6)) {
      return;
    }

    setIsSubmitting(true);

    // Build a mailto body with the form data
    const subject = encodeURIComponent(`Internship Application — ${formData.fullName} (${formData.domain})`);
    const body = encodeURIComponent(
      [
        `=== INTERNSHIP APPLICATION ===`,
        `Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Mobile: ${formData.mobile}`,
        `City: ${formData.city}, ${formData.state}`,
        ``,
        `=== EDUCATION ===`,
        `Level: ${formData.educationLevel}`,
        `Course: ${formData.course}${formData.specialization ? ` (${formData.specialization})` : ""}`,
        `College: ${formData.college}`,
        `Graduation Year: ${formData.graduationYear}`,
        `CGPA/Percentage: ${formData.cgpa}`,
        ``,
        `=== TECHNICAL SKILLS ===`,
        `Skills: ${formData.technicalSkills}`,
        `Languages: ${formData.programmingLanguages}`,
        `Frameworks: ${formData.frameworks}`,
        `GitHub: ${formData.github}`,
        `LinkedIn: ${formData.linkedin}`,
        `Portfolio: ${formData.portfolio}`,
        ``,
        `=== INTERNSHIP PREFERENCES ===`,
        `Domain: ${formData.domain}`,
        `Mode: ${formData.internshipType}`,
        `Duration: ${formData.preferredDuration}`,
        `Start Date: ${formData.startDate}`,
        ``,
        `=== MOTIVATION ===`,
        formData.whyJoin,
        ``,
        `Resume File: ${formData.resumeFileName}`,
      ].join("\n")
    );

    // Open mail client — applicant sends their own email
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    // Show success state after a short delay
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          {/* Back link */}
          <a
            href="/career/services/internship"
            className="inline-flex items-center gap-2 text-sm font-mono text-blueline hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Internship Details
          </a>

          {submitted ? (
            /* Success Screen */
            <div className="rounded-3xl border border-blueline/30 bg-paper p-8 sm:p-14 shadow-2xl text-center my-8">
              <div className="w-20 h-20 rounded-full bg-blueline/10 text-blueline flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Your internship application has been submitted successfully. Our team will review your profile and contact you via email/phone if your application is shortlisted.
              </p>

              <div className="rounded-2xl bg-paper-dim/60 p-6 max-w-xl mx-auto text-left font-mono text-xs sm:text-sm text-slate mb-8 space-y-2">
                <p><span className="font-bold text-ink">Applicant:</span> {formData.fullName}</p>
                <p><span className="font-bold text-ink">Email:</span> {formData.email}</p>
                <p><span className="font-bold text-ink">Domain:</span> {formData.domain}</p>
                <p><span className="font-bold text-ink">Resume:</span> {formData.resumeFileName}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/career"
                  className="inline-flex items-center gap-2 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-lg hover:bg-blueline-soft transition-colors"
                >
                  Return to Career Hub
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-grid bg-paper px-6 py-3.5 text-base font-semibold text-ink hover:bg-paper-dim transition-colors"
                >
                  Home Page
                </a>
              </div>
            </div>
          ) : (
            /* Form Container */
            <div className="rounded-3xl border border-grid bg-paper shadow-xl overflow-hidden">
              {/* Header Banner */}
              <div className="bg-ink text-paper p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid-dark opacity-70" />
                <div className="relative">
                  <span className="font-mono text-xs uppercase tracking-widest text-blueline-soft font-semibold block mb-2">
                    Upstairs Techno · Engineering Internship
                  </span>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-paper">
                    Internship Application Form
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-paper/70">
                    Complete the multi-step application below to join our team as an Engineering Intern.
                  </p>
                </div>
              </div>

              {/* Progress Step Indicator Bar */}
              <div className="border-b border-grid bg-paper-dim/30 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="flex items-center justify-between min-w-[500px]">
                  {STEPS.map((step) => {
                    const Icon = step.icon;
                    const isActive = step.id === currentStep;
                    const isPassed = step.id < currentStep;

                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => {
                          if (step.id < currentStep || validateStep(currentStep)) {
                            setCurrentStep(step.id);
                          }
                        }}
                        className={`flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold transition-colors py-1 px-2.5 rounded-lg ${
                          isActive
                            ? "bg-blueline text-paper shadow-sm"
                            : isPassed
                            ? "text-blueline hover:bg-blueline/10"
                            : "text-slate opacity-60"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>
                          {step.id}. {step.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-10">
                {serverError && (
                  <div className="mb-8 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 p-4 text-sm font-medium">
                    {serverError}
                  </div>
                )}

                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="border-b border-grid pb-4 mb-6">
                      <h2 className="font-display text-xl font-bold text-ink">Personal Information</h2>
                      <p className="text-xs sm:text-sm text-slate">Basic identity and personal details.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Date of Birth</label>
                        <input
                          type="date"
                          value={formData.dob}
                          onChange={(e) => updateField("dob", e.target.value)}
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Gender</label>
                        <select
                          value={formData.gender}
                          onChange={(e) => updateField("gender", e.target.value)}
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Non-binary">Non-binary</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">
                        Profile Photo URL <span className="text-slate font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={formData.photoUrl}
                        onChange={(e) => updateField("photoUrl", e.target.value)}
                        placeholder="https://example.com/photo.jpg"
                        className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-grid pb-4 mb-6">
                      <h2 className="font-display text-xl font-bold text-ink">Contact Information</h2>
                      <p className="text-xs sm:text-sm text-slate">How can our recruitment team reach you?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="you@domain.com"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => updateField("mobile", e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                        {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Alternate Mobile</label>
                        <input
                          type="tel"
                          value={formData.altMobile}
                          onChange={(e) => updateField("altMobile", e.target.value)}
                          placeholder="Optional"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Current City</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => updateField("city", e.target.value)}
                          placeholder="e.g. Bangalore"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">State & Country</label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => updateField("state", e.target.value)}
                          placeholder="e.g. Karnataka, India"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Education Details */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="border-b border-grid pb-4">
                      <h2 className="font-display text-xl font-bold text-ink">Education Details</h2>
                      <p className="text-xs sm:text-sm text-slate">Your current and historical academic background.</p>
                    </div>

                    {/* Current/Highest Education */}
                    <div className="rounded-2xl border border-grid/80 bg-paper-dim/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-blueline" />
                        Current / Highest Education
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">
                            Education Level <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.educationLevel}
                            onChange={(e) => updateField("educationLevel", e.target.value)}
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          >
                            <option value="Undergraduate">Undergraduate (B.Tech/B.E./B.Sc/BCA)</option>
                            <option value="Postgraduate">Postgraduate (M.Tech/MCA/M.Sc)</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Doctorate">Doctorate/Ph.D.</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">
                            Course / Degree <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.course}
                            onChange={(e) => updateField("course", e.target.value)}
                            placeholder="e.g. B.Tech Computer Science"
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          />
                          {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">
                            College / University <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.college}
                            onChange={(e) => updateField("college", e.target.value)}
                            placeholder="e.g. National Institute of Technology"
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          />
                          {errors.college && <p className="text-xs text-red-500 mt-1">{errors.college}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">Specialization / Branch</label>
                          <input
                            type="text"
                            value={formData.specialization}
                            onChange={(e) => updateField("specialization", e.target.value)}
                            placeholder="e.g. Artificial Intelligence & Data Science"
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">Graduation Year</label>
                          <input
                            type="text"
                            value={formData.graduationYear}
                            onChange={(e) => updateField("graduationYear", e.target.value)}
                            placeholder="e.g. 2026"
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">Current Semester / Year</label>
                          <input
                            type="text"
                            value={formData.currentSemester}
                            onChange={(e) => updateField("currentSemester", e.target.value)}
                            placeholder="e.g. 6th Semester / 3rd Year"
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1">CGPA / Percentage</label>
                          <input
                            type="text"
                            value={formData.cgpa}
                            onChange={(e) => updateField("cgpa", e.target.value)}
                            placeholder="e.g. 8.7 / 10"
                            className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 12th / HSC Details */}
                    <div className="rounded-2xl border border-grid/80 bg-paper-dim/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-base text-ink">12th / HSC Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={formData.hscSchool}
                          onChange={(e) => updateField("hscSchool", e.target.value)}
                          placeholder="School / Junior College Name"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                        <input
                          type="text"
                          value={formData.hscBoard}
                          onChange={(e) => updateField("hscBoard", e.target.value)}
                          placeholder="Board (e.g. CBSE / State Board)"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                        <input
                          type="text"
                          value={formData.hscYear}
                          onChange={(e) => updateField("hscYear", e.target.value)}
                          placeholder="Passing Year (e.g. 2022)"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                        <input
                          type="text"
                          value={formData.hscPercentage}
                          onChange={(e) => updateField("hscPercentage", e.target.value)}
                          placeholder="Percentage (e.g. 89.4%)"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                      </div>
                    </div>

                    {/* 10th / SSC Details */}
                    <div className="rounded-2xl border border-grid/80 bg-paper-dim/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-base text-ink">10th / SSC Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={formData.sscSchool}
                          onChange={(e) => updateField("sscSchool", e.target.value)}
                          placeholder="School Name"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                        <input
                          type="text"
                          value={formData.sscBoard}
                          onChange={(e) => updateField("sscBoard", e.target.value)}
                          placeholder="Board (e.g. ICSE / CBSE)"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                        <input
                          type="text"
                          value={formData.sscYear}
                          onChange={(e) => updateField("sscYear", e.target.value)}
                          placeholder="Passing Year (e.g. 2020)"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                        <input
                          type="text"
                          value={formData.sscPercentage}
                          onChange={(e) => updateField("sscPercentage", e.target.value)}
                          placeholder="Percentage (e.g. 92%)"
                          className="rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Technical & Professional Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="border-b border-grid pb-4 mb-6">
                      <h2 className="font-display text-xl font-bold text-ink">Technical & Professional Information</h2>
                      <p className="text-xs sm:text-sm text-slate">Demonstrate your skills, projects, and online presence.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">
                        Technical Skills <span className="text-red-500">*</span> <span className="text-slate font-normal">(Comma-separated)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.technicalSkills}
                        onChange={(e) => updateField("technicalSkills", e.target.value)}
                        placeholder="e.g. JavaScript, React, Node.js, Python, PostgreSQL, Docker"
                        className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                      />
                      {errors.technicalSkills && <p className="text-xs text-red-500 mt-1">{errors.technicalSkills}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Programming Languages</label>
                        <input
                          type="text"
                          value={formData.programmingLanguages}
                          onChange={(e) => updateField("programmingLanguages", e.target.value)}
                          placeholder="Python, C++, TypeScript, Java"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Frameworks & Technologies</label>
                        <input
                          type="text"
                          value={formData.frameworks}
                          onChange={(e) => updateField("frameworks", e.target.value)}
                          placeholder="Next.js, FastAPI, PyTorch, TailwindCSS"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">AI / ML Skills</label>
                        <input
                          type="text"
                          value={formData.aiSkills}
                          onChange={(e) => updateField("aiSkills", e.target.value)}
                          placeholder="LangChain, OpenAI API, Vector DBs, Fine-tuning"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Databases & Tools</label>
                        <input
                          type="text"
                          value={formData.dbSkills}
                          onChange={(e) => updateField("dbSkills", e.target.value)}
                          placeholder="PostgreSQL, MongoDB, Redis, Git, Linux"
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">Key Projects Highlight</label>
                      <textarea
                        rows={3}
                        value={formData.projects}
                        onChange={(e) => updateField("projects", e.target.value)}
                        placeholder="Briefly describe 1-2 major projects you built..."
                        className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">GitHub Profile URL</label>
                        <input
                          type="url"
                          value={formData.github}
                          onChange={(e) => updateField("github", e.target.value)}
                          placeholder="https://github.com/username"
                          className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">LinkedIn Profile URL</label>
                        <input
                          type="url"
                          value={formData.linkedin}
                          onChange={(e) => updateField("linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">Portfolio Website</label>
                        <input
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => updateField("portfolio", e.target.value)}
                          placeholder="https://myportfolio.dev"
                          className="w-full rounded-xl border border-grid bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-blueline"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Internship Preferences */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="border-b border-grid pb-4 mb-6">
                      <h2 className="font-display text-xl font-bold text-ink">Internship Preferences</h2>
                      <p className="text-xs sm:text-sm text-slate">Tell us about your desired role and domain.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">
                          Preferred Internship Domain <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.domain}
                          onChange={(e) => updateField("domain", e.target.value)}
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors font-medium"
                        >
                          <option value="Full-Stack Software Engineering">Full-Stack Software Engineering</option>
                          <option value="AI & Machine Learning Engineering">AI & Machine Learning Engineering</option>
                          <option value="Backend Systems & Cloud Engineering">Backend Systems & Cloud Engineering</option>
                          <option value="Mobile App Development (React Native/Flutter)">Mobile App Development</option>
                          <option value="DevOps & Infrastructure Automation">DevOps & Infrastructure</option>
                          <option value="UI/UX & Product Engineering">UI/UX & Product Engineering</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">
                          Internship Mode / Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.internshipType}
                          onChange={(e) => updateField("internshipType", e.target.value as any)}
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors font-medium"
                        >
                          <option value="Remote">Remote (Work from Anywhere)</option>
                          <option value="On-site">On-site (Engineering Hub)</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Preferred Duration</label>
                        <select
                          value={formData.preferredDuration}
                          onChange={(e) => updateField("preferredDuration", e.target.value)}
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        >
                          <option value="3 Months">3 Months</option>
                          <option value="6 Months">6 Months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-ink mb-1.5">Earliest Available Start Date</label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => updateField("startDate", e.target.value)}
                          className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">
                        Why do you want to join this internship? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.whyJoin}
                        onChange={(e) => updateField("whyJoin", e.target.value)}
                        placeholder="Explain your motivation, interest in Upstairs Techno, and what you hope to achieve..."
                        className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors resize-none"
                      />
                      {errors.whyJoin && <p className="text-xs text-red-500 mt-1">{errors.whyJoin}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">
                        Career Goals & Previous Experience <span className="text-slate font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.experience}
                        onChange={(e) => updateField("experience", e.target.value)}
                        placeholder="Share any past internships, freelance work, or long-term career aspirations..."
                        className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Step 6: Resume Upload & Consent Declaration */}
                {currentStep === 6 && (
                  <div className="space-y-8">
                    <div className="border-b border-grid pb-4">
                      <h2 className="font-display text-xl font-bold text-ink">Resume & Final Consent</h2>
                      <p className="text-xs sm:text-sm text-slate">Upload your resume and confirm declaration.</p>
                    </div>

                    {/* Resume Upload Box */}
                    <div className="rounded-2xl border-2 border-dashed border-blueline/40 bg-blueline/[0.02] p-8 text-center">
                      {formData.resumeFileName ? (
                        <div className="flex items-center justify-between gap-4 rounded-xl bg-paper border border-grid p-4 text-left max-w-md mx-auto shadow-sm">
                          <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-blueline shrink-0" />
                            <div>
                              <p className="font-semibold text-sm text-ink truncate max-w-[220px]">
                                {formData.resumeFileName}
                              </p>
                              <p className="text-xs text-emerald-600 font-mono font-medium">Ready for upload</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeResume}
                            className="p-2 rounded-lg hover:bg-paper-dim text-slate hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 text-blueline mx-auto mb-3" />
                          <h3 className="font-display font-bold text-base text-ink mb-1">
                            Upload your Resume / CV <span className="text-red-500">*</span>
                          </h3>
                          <p className="text-xs sm:text-sm text-slate mb-4">
                            Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                          </p>

                          <label className="inline-flex items-center gap-2 rounded-full bg-blueline px-6 py-3 text-sm font-bold text-paper cursor-pointer shadow-md hover:bg-blueline-soft transition-colors">
                            <Upload className="w-4 h-4" />
                            <span>Select File</span>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                          </label>

                          {isUploading && (
                            <div className="mt-4 max-w-xs mx-auto">
                              <div className="h-2 w-full bg-paper-dim rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blueline transition-all duration-200"
                                  style={{ width: `${uploadProgress}%` }}
                                />
                              </div>
                              <p className="text-xs text-slate font-mono mt-1">Uploading... {uploadProgress}%</p>
                            </div>
                          )}
                        </div>
                      )}
                      {errors.resumeFileName && (
                        <p className="text-xs text-red-500 font-medium mt-3">{errors.resumeFileName}</p>
                      )}
                    </div>

                    {/* Declaration Checkbox */}
                    <div className="rounded-2xl border border-grid bg-paper-dim/30 p-6 space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) => updateField("consent", e.target.checked)}
                          className="w-5 h-5 rounded border-grid text-blueline focus:ring-blueline mt-0.5 shrink-0"
                        />
                        <span className="text-sm font-medium text-ink leading-relaxed">
                          I confirm that the information provided above is accurate and complete. I acknowledge that Upstairs Techno will process my application details in accordance with standard hiring procedures.
                        </span>
                      </label>
                      {errors.consent && <p className="text-xs text-red-500 font-medium">{errors.consent}</p>}
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="mt-10 pt-6 border-t border-grid flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-2 rounded-full border border-grid bg-paper px-6 py-3 text-sm font-semibold text-ink hover:bg-paper-dim transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Previous Step
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < STEPS.length ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-full bg-blueline px-7 py-3 text-sm font-bold text-paper shadow-md hover:bg-blueline-soft transition-colors"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 rounded-full bg-blueline px-9 py-4 text-base font-extrabold text-paper shadow-xl hover:bg-blueline-soft disabled:opacity-60 transition-all"
                    >
                      {isSubmitting ? "Opening Email Client…" : "Submit Application →"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
