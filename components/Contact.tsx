"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

const CONTACT_EMAIL = "info@upstairstechno.com";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" /></svg>;
}

function FacebookIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.02 4.388 11.019 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.976h-1.513c-1.49 0-1.956.93-1.956 1.885v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.092 24 18.093 24 12.073Z" /></svg>;
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="clay-pill clay-pill-accent mb-3">
            Get In Touch
          </div>
          <h2 className="font-display text-section-heading font-black text-ink text-balance">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed max-w-xl mx-auto">
            We reply within one business day. Reach out by email or through our enquiry form and we&apos;ll get back to you promptly.
          </p>
        </motion.div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">

          {/* Email */}
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="group flex flex-col clay-card clay-card-hover p-6 sm:p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-blueline/10 text-blueline flex items-center justify-center group-hover:bg-blueline group-hover:text-white transition-colors shrink-0 mb-4 shadow-sm">
              <Mail className="w-4 h-4" />
            </div>
            <span className="block text-xs font-mono text-slate uppercase tracking-wider mb-1">
              Email Inquiry
            </span>
            <span className="font-semibold text-ink group-hover:text-blueline transition-colors text-sm break-all">
              {CONTACT_EMAIL}
            </span>
            <span className="mt-2 text-xs text-slate leading-relaxed">
              We reply within one business day
            </span>
          </motion.a>

          {/* Location & Social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="flex flex-col clay-card p-6 sm:p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-blueline/10 text-blueline flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="block text-xs font-mono text-slate uppercase tracking-wider mb-1">
              Location
            </span>
            <span className="font-semibold text-ink text-sm">
              Baramati, Pune
            </span>
            <span className="text-xs text-slate">Maharashtra, India</span>

            {/* Social profiles */}
            <nav aria-label="Upstairs Techno social media" className="mt-auto pt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/upstairstechno"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @upstairstechno"
                data-cursor="Instagram"
                className="rounded-full border border-grid p-2.5 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline hover:bg-blueline/5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline/40"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/upstairs-techno"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upstairs Techno on LinkedIn"
                className="rounded-full border border-grid p-2.5 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline hover:bg-blueline/5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline/40"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1ddAxoNp3L/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upstairs Techno on Facebook"
                className="rounded-full border border-grid p-2.5 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline hover:bg-blueline/5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueline/40"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
