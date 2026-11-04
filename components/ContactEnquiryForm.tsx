"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export const enquiryTypes = [
  "Software Development",
  "IT Consulting",
  "AI & Automation",
  "Digital Marketing",
  "Internship & Career Opportunities",
  "Training & Education",
  "Business Partnership",
  "General Enquiry",
  "Other",
] as const;

export default function ContactEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [enquiryType, setEnquiryType] = useState<string>("General Enquiry");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").replace(/[\s().-]/g, "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address, such as name@example.com.");
      return;
    }
    if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
      setError("Include a country code and enter 8–15 digits, for example +91 98765 43210.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(form.get("fullName") ?? "").trim(),
          email,
          phone,
          company: String(form.get("company") ?? "").trim(),
          enquiryType: String(form.get("enquiryType") ?? ""),
          subject: String(form.get("subject") ?? "").trim(),
          message: String(form.get("message") ?? "").trim(),
          privacyConsent: form.get("privacyConsent") === "on",
          website: String(form.get("website") ?? ""),
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please try again.");
      setSubmitted(true);
      formElement.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-emerald-600/20 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-700" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Message sent</h3>
        <p className="mt-2 text-slate">Your enquiry has been delivered to our team. Thank you for getting in touch.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-5 font-semibold text-blueline underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline">Send another message</button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="scroll-mt-28 space-y-5" aria-describedby="form-integration-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" autoComplete="name" required />
        <Field label="Email Address" name="email" type="email" autoComplete="email" required />
        <Field label="Phone Number (include country code)" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required />
        <Field label="Company / Organization" name="company" autoComplete="organization" />
        <label className="block text-sm font-semibold text-ink sm:col-span-2">Enquiry Type <span className="text-red-700" aria-hidden="true">*</span>
          <select id="contact-enquiry-type" name="enquiryType" required value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)} className="clay-input mt-2" aria-label="Enquiry type">
            {enquiryTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <Field label="Subject" name="subject" required className="sm:col-span-2" />
        <label className="block text-sm font-semibold text-ink sm:col-span-2">Message <span className="text-red-700" aria-hidden="true">*</span>
          <textarea name="message" required minLength={10} maxLength={5000} rows={6} className="clay-input mt-2 resize-y" placeholder="Tell us a little about what you need…" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-slate">
        <input name="privacyConsent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-blueline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline" />
        <span>I agree to the processing of my information as described in the <a href="/privacy-policy" className="font-semibold text-blueline underline underline-offset-2">Privacy Policy</a>. <span className="text-red-700" aria-hidden="true">*</span></span>
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p id="form-integration-note" className="text-sm leading-relaxed text-slate">If online delivery is temporarily unavailable, email us at <a className="font-semibold text-blueline underline underline-offset-2" href="mailto:contact@upstairstechno.com">contact@upstairstechno.com</a>.</p>
      {error && <p role="alert" aria-live="assertive" className="rounded-xl border border-red-700/20 bg-red-50 p-4 text-sm text-red-800">{error}</p>}
      <button type="submit" disabled={isSubmitting} className="clay-btn clay-btn-primary min-h-[52px] px-8 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</> : <><Send className="h-4 w-4" aria-hidden="true" /> Send Message</>}
      </button>
      <p className="text-xs text-slate">Fields marked * are required.</p>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, className = "", autoComplete, placeholder }: { label: string; name: string; type?: string; required?: boolean; className?: string; autoComplete?: string; placeholder?: string }) {
  const id = `contact-${name}`;
  return <label htmlFor={id} className={`block text-sm font-semibold text-ink ${className}`}>{label}{required && <span className="ml-1 text-red-700" aria-hidden="true">*</span>}
    <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className="clay-input mt-2" />
  </label>;
}
