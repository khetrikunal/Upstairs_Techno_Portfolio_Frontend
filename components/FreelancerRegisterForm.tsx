"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

function Field({
  name,
  label,
  type = "text",
  required = true,
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={`fr-${name}`}
        name={name}
        type={textarea ? undefined : type}
        required={required}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        className="peer w-full rounded-xl border border-grid bg-paper px-4 pt-5 pb-2 text-base outline-none transition-colors duration-300 focus:border-blueline resize-none min-h-[52px]"
      />
      <label
        htmlFor={`fr-${name}`}
        className="absolute left-4 top-3.5 text-sm text-slate transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blueline peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium pointer-events-none"
      >
        {label}{required && <span className="text-blueline ml-0.5">*</span>}
      </label>
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  required = true,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={`fr-${name}`}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-grid bg-paper px-4 pt-5 pb-2 text-base outline-none transition-colors duration-300 focus:border-blueline appearance-none min-h-[52px] text-ink"
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <label
        htmlFor={`fr-${name}`}
        className="absolute left-4 top-1.5 text-xs text-blueline font-medium pointer-events-none"
      >
        {label}{required && <span className="ml-0.5">*</span>}
      </label>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate text-xs">▾</span>
    </div>
  );
}

export default function FreelancerRegisterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    await new Promise((r) => setTimeout(r, 1200));
    try {
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 rounded-2xl border border-grid bg-white p-10 sm:p-14">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blueline/10 text-blueline">
          <Check className="w-7 h-7" />
        </span>
        <p className="font-display text-2xl font-bold text-ink">Profile submitted!</p>
        <p className="text-base text-slate max-w-sm">
          Thank you for joining the Upstairs Techno Freelancer Network. Our team will review your profile and contact you when suitable opportunities become available.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-grid bg-white p-6 sm:p-8 shadow-sm"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline font-medium mb-2">
        Freelancer Registration
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="fullname" label="Full Name" />
        <Field name="email" label="Email Address" type="email" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="phone" label="Phone Number" type="tel" />
        <Field name="location" label="Location (City, Country)" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="primarySkills" label="Primary Skills (e.g. React, Python)" />
        <Field name="secondarySkills" label="Secondary Skills" required={false} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          name="experience"
          label="Years of Experience"
          options={["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "10+ years"]}
        />
        <SelectField
          name="availability"
          label="Availability"
          options={["Immediately Available", "Available in 1–2 weeks", "Available in 1 month", "Part-time only"]}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          name="workType"
          label="Preferred Work Type"
          options={["Project-Based", "Part-Time", "Full-Time", "Contract", "Remote"]}
        />
        <Field name="rate" label="Expected Rate (e.g. ₹500/hr or ₹50,000/project)" required={false} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field name="portfolio" label="Portfolio URL" type="url" required={false} />
        <Field name="github" label="GitHub URL" type="url" required={false} />
        <Field name="linkedin" label="LinkedIn URL" type="url" required={false} />
      </div>

      <div className="rounded-xl border border-grid bg-paper px-4 py-3">
        <label htmlFor="fr-resume" className="block text-xs text-blueline font-medium mb-1 font-mono uppercase tracking-wider">
          Resume / CV (PDF, DOC — optional)
        </label>
        <input
          id="fr-resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-slate file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blueline/10 file:text-blueline hover:file:bg-blueline/20 cursor-pointer"
        />
      </div>

      <Field name="bio" label="Short Professional Introduction" textarea required={false} />

      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-paper px-7 py-4 text-base font-bold transition-all duration-300 hover:bg-blueline disabled:opacity-70 min-h-[52px] shadow-md cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Submitting…
          </>
        ) : (
          "Join as a Freelancer"
        )}
      </button>

      <p className="text-xs text-slate text-center leading-relaxed">
        By submitting, you agree that Upstairs Techno may review your profile and contact you regarding suitable project opportunities.
      </p>
    </form>
  );
}
