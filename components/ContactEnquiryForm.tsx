"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const CONTACT_EMAIL = "contact@upstairstechno.com";

export default function ContactEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^[+\d][\d\s().-]{7,}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(String(form.get("subject") ?? "Website enquiry"));
    const body = encodeURIComponent([
      `Name: ${form.get("fullName")}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${form.get("company") || "Not provided"}`,
      `Service: ${form.get("service")}`,
      "",
      String(form.get("message")),
    ].join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Your enquiry is ready to send</h2>
        <p className="mt-2 text-slate">Your email app should open with the enquiry details. Our team will respond as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-700">{error}</p>}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Company / Organization" name="company" />
        <label className="sm:col-span-2 text-sm font-semibold text-ink">Subject / Service
          <select name="service" className="mt-2 w-full rounded-xl border border-grid bg-paper px-4 py-3 font-normal outline-none focus:border-blueline">
            <option>General enquiry</option><option>IT Consulting</option><option>Software Development</option><option>AI & Automation</option><option>BTDS assessment</option><option>Internship</option>
          </select>
        </label>
        <label className="sm:col-span-2 text-sm font-semibold text-ink">Message / Requirement
          <textarea name="message" required minLength={10} rows={6} className="mt-2 w-full resize-none rounded-xl border border-grid bg-paper px-4 py-3 font-normal outline-none focus:border-blueline" />
        </label>
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition hover:bg-blueline disabled:cursor-wait disabled:opacity-70">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Preparing enquiry</> : <><Send className="h-4 w-4" /> Submit Enquiry</>}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="text-sm font-semibold text-ink">{label}{required && <span className="ml-1 text-red-600">*</span>}
    <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-grid bg-paper px-4 py-3 font-normal outline-none focus:border-blueline" />
  </label>;
}