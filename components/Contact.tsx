"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const CONTACT_EMAIL = "contact@upstairstechno.com";
const CONTACT_PHONE = "9370465576";
const CONTACT_PHONE_DISPLAY = "+91 93704 65576";

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

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
            Get In Touch
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink text-balance">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed max-w-xl mx-auto">
            We reply within one business day. Reach out via WhatsApp, phone, or
            email and we&apos;ll get back to you promptly.
          </p>
        </motion.div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/91${CONTACT_PHONE}?text=Hello%20Upstairs%20Techno!%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0 }}
            className="group flex flex-col rounded-2xl border border-grid bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)] hover:border-[#25D366]/40"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0 mb-4">
              <span className="font-bold text-sm">WA</span>
            </div>
            <span className="block text-xs font-mono text-slate uppercase tracking-wider mb-1">
              WhatsApp Chat
            </span>
            <span className="font-bold text-ink group-hover:text-[#25D366] transition-colors text-base">
              {CONTACT_PHONE_DISPLAY}
            </span>
            <span className="mt-2 text-xs text-slate leading-relaxed">
              Quick responses via WhatsApp
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${CONTACT_PHONE}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="group flex flex-col rounded-2xl border border-grid bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)] hover:border-blueline/40"
          >
            <div className="w-10 h-10 rounded-xl bg-blueline/10 text-blueline flex items-center justify-center group-hover:bg-blueline group-hover:text-white transition-colors shrink-0 mb-4">
              <Phone className="w-4 h-4" />
            </div>
            <span className="block text-xs font-mono text-slate uppercase tracking-wider mb-1">
              Phone Inquiry
            </span>
            <span className="font-bold text-ink group-hover:text-blueline transition-colors text-base">
              {CONTACT_PHONE_DISPLAY}
            </span>
            <span className="mt-2 text-xs text-slate leading-relaxed">
              Call us directly
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="group flex flex-col rounded-2xl border border-grid bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)] hover:border-blueline/40"
          >
            <div className="w-10 h-10 rounded-xl bg-blueline/10 text-blueline flex items-center justify-center group-hover:bg-blueline group-hover:text-white transition-colors shrink-0 mb-4">
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
            className="flex flex-col rounded-2xl border border-grid bg-white p-6 sm:p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-blueline/10 text-blueline flex items-center justify-center shrink-0 mb-4">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="block text-xs font-mono text-slate uppercase tracking-wider mb-1">
              Location
            </span>
            <span className="font-semibold text-ink text-sm">
              Baramati, Pune
            </span>
            <span className="text-xs text-slate">Maharashtra, India</span>

            {/* Instagram */}
            <div className="mt-auto pt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/upstairstechno"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @upstairstechno"
                data-cursor="Instagram"
                className="rounded-full border border-grid p-2.5 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline flex items-center justify-center"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/upstairstechno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate hover:text-blueline transition-colors"
              >
                @upstairstechno
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
