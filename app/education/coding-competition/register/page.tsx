"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Loader2,
  Sparkles,
  Trophy,
} from "lucide-react";

const CONTACT_EMAIL = "contact@upstairstechno.com";

export default function CodingCompetitionRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institutionOrSchool: "",
    educationLevel: "College" as "School" | "College" | "Professional",
    academicYear: "2026",
    preferredLanguage: "Python 3",
    preferredSlot: "Morning Window (10:00 AM IST)",
    referralCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = "Valid mobile number is required";
    }
    if (!formData.institutionOrSchool.trim()) {
      newErrors.institutionOrSchool = "School/College name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Code Nova Registration — ${formData.fullName}`);
    const body = encodeURIComponent(
      [
        `=== CODE NOVA REGISTRATION ===`,
        `Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Institution: ${formData.institutionOrSchool}`,
        `Education Level: ${formData.educationLevel}`,
        `Academic Year: ${formData.academicYear}`,
        `Preferred Language: ${formData.preferredLanguage}`,
        `Preferred Slot: ${formData.preferredSlot}`,
        `Referral Code: ${formData.referralCode || "None"}`,
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(true);
      setRegistrationId(`REG-${Date.now().toString().slice(-6)}`);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-paper text-ink pt-28 sm:pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
          <a
            href="/education/coding-competition"
            className="inline-flex items-center gap-2 text-sm font-mono text-blueline hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Competition Details
          </a>

          {submitted ? (
            <div className="rounded-3xl border border-blueline/30 bg-paper p-8 sm:p-14 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full bg-blueline/10 text-blueline flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="font-mono text-xs font-bold text-blueline uppercase tracking-widest block mb-2">
                Registration Confirmed
              </span>

              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                You Are Registered!
              </h1>

              <p className="text-slate text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                Your seat for the Monthly Coding Competition has been reserved. Problem link and login credentials will be sent to <span className="font-semibold text-ink">{formData.email}</span>.
              </p>

              <div className="rounded-2xl bg-paper-dim/60 p-6 max-w-md mx-auto text-left font-mono text-xs sm:text-sm text-slate mb-8 space-y-2">
                <p><span className="font-bold text-ink">Registration ID:</span> {registrationId}</p>
                <p><span className="font-bold text-ink">Participant:</span> {formData.fullName}</p>
                <p><span className="font-bold text-ink">Institution:</span> {formData.institutionOrSchool}</p>
                <p><span className="font-bold text-ink">Language:</span> {formData.preferredLanguage}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/education/coding-competition"
                  className="inline-flex items-center gap-2 rounded-full bg-blueline px-7 py-3.5 text-base font-bold text-paper shadow-lg hover:bg-blueline-soft transition-colors"
                >
                  View Competition Rules
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
            <div className="rounded-3xl border border-grid bg-paper shadow-xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-ink text-paper p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid-dark opacity-70" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blueline/40 bg-blueline/10 px-3.5 py-1 text-xs font-mono text-blueline-soft mb-3 uppercase">
                    <Trophy className="w-3.5 h-3.5" /> 3 Rounds • Monthly Contest
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-paper">
                    Register for Coding Competition
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-paper/70">
                    Fill out the registration details below to compete and claim your rewards.
                  </p>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                {serverError && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 p-4 text-sm font-medium">
                    {serverError}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="e.g. Jordan Lee"
                    className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
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
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">
                      School / College / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institutionOrSchool}
                      onChange={(e) => updateField("institutionOrSchool", e.target.value)}
                      placeholder="e.g. St. Xavier's High School / IIT Bombay"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                    />
                    {errors.institutionOrSchool && (
                      <p className="text-xs text-red-500 mt-1">{errors.institutionOrSchool}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Participant Category</label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => updateField("educationLevel", e.target.value)}
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors font-medium"
                    >
                      <option value="School">School Student (8th - 12th)</option>
                      <option value="College">College Student / Fresh Graduate</option>
                      <option value="Professional">Working Professional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Preferred Programming Language</label>
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => updateField("preferredLanguage", e.target.value)}
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors font-medium"
                    >
                      <option value="Python 3">Python 3</option>
                      <option value="C++17 / C++20">C++17 / C++20</option>
                      <option value="Java 17">Java 17</option>
                      <option value="JavaScript / TypeScript">JavaScript / TypeScript</option>
                      <option value="Go">Go</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Referral / Promo Code</label>
                    <input
                      type="text"
                      value={formData.referralCode}
                      onChange={(e) => updateField("referralCode", e.target.value)}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-grid bg-paper px-4 py-3 text-base outline-none focus:border-blueline transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-grid flex items-center justify-between">
                  <p className="text-xs text-slate">
                    By registering, you agree to the contest rules and fair participation policies.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-blueline px-8 py-3.5 text-base font-extrabold text-paper shadow-lg hover:bg-blueline-soft disabled:opacity-60 transition-all shrink-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Registering...
                      </>
                    ) : (
                      <>
                        Confirm Registration <Sparkles className="w-5 h-5" />
                      </>
                    )}
                  </button>
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
