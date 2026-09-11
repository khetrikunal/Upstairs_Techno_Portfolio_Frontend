"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function BTDSApplicationForm() {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApplicationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="mt-8 rounded-[2rem] border border-grid bg-paper p-6 sm:p-8">
      {applicationSubmitted ? (
        <div className="text-center py-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blueline/10 text-blueline">
            <Check className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Application Submitted Successfully</h3>
          <p className="mt-3 text-base leading-relaxed text-slate max-w-lg mx-auto">
            Thank you for applying to BTDS The Talent Development Division (TDD). Our team will review your application and contact you regarding the next steps.
          </p>
        </div>
      ) : (
        <form onSubmit={handleApplicationSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Full Name</label>
              <input name="fullName" required className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Email Address</label>
              <input type="email" name="email" required className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Phone Number</label>
              <input type="tel" name="phone" required className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Highest Qualification</label>
              <input name="qualification" required className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">College / Institution</label>
              <input name="college" required className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Graduation Year</label>
              <input name="graduationYear" required className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Primary Technology Interest</label>
              <input name="technologyInterest" className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Current Technical Skill Level</label>
              <input name="skillLevel" className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">GitHub Profile</label>
              <input name="github" className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">LinkedIn Profile</label>
              <input name="linkedin" className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Preferred Training Area</label>
              <input name="preferredTrainingArea" className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-ink">Resume</label>
              <input type="file" name="resume" accept=".pdf,.doc,.docx" className="w-full rounded-2xl border border-grid bg-white px-4 py-3 text-base outline-none focus:border-blueline min-h-[50px]" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-base font-semibold text-ink">Why do you want to join BTDS?</label>
            <textarea name="motivation" rows={4} className="w-full rounded-2xl border border-grid bg-white px-4 py-3.5 text-base outline-none focus:border-blueline resize-none" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-base sm:text-lg font-bold text-paper transition duration-300 hover:bg-blueline min-h-[52px] shadow-md cursor-pointer">
            Submit Application
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      )}
    </div>
  );
}
