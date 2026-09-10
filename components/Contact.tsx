"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Phone, Mail } from "lucide-react";

const CONTACT_EMAIL = "contact@upstairstechno.com";

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

function FloatingField({
  name,
  label,
  type = "text",
  textarea = false,
  required = true,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        required={required}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        className="peer w-full rounded-xl border border-grid bg-paper px-4 pt-5 pb-2 text-base outline-none transition-colors duration-300 focus:border-blueline resize-none min-h-[52px]"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3.5 text-base text-slate transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blueline peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
            Get In Touch
          </p>
          <h2 className="font-display text-section-heading font-bold text-ink text-balance">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed max-w-md">
            We reply within one business day. If it&apos;s urgent, mention it in your
            message or message us on WhatsApp and we&apos;ll prioritize accordingly.
          </p>

          <div className="mt-8 sm:mt-10 space-y-4 text-base sm:text-lg text-slate">
            <a
              href="https://wa.me/919370465576?text=Hello%20Upstairs%20Techno!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-[#25D366] group w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                <span className="font-bold text-sm">WA</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate uppercase tracking-wider">WhatsApp Chat</span>
                <span className="font-bold text-ink group-hover:text-[#25D366] transition-colors">+91 93704 65576</span>
              </div>
            </a>

            <a
              href="tel:9156996309"
              className="flex items-center gap-3 transition-colors hover:text-blueline group w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-blueline/10 text-blueline flex items-center justify-center group-hover:bg-blueline group-hover:text-white transition-colors shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-mono text-slate uppercase tracking-wider">Phone Support</span>
                <span className="font-bold text-ink group-hover:text-blueline transition-colors">+91 91569 96309</span>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 transition-colors hover:text-blueline group w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-blueline/10 text-blueline flex items-center justify-center group-hover:bg-blueline group-hover:text-white transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-mono text-slate uppercase tracking-wider">Email Inquiry</span>
                <span className="font-semibold text-ink group-hover:text-blueline transition-colors">{CONTACT_EMAIL}</span>
              </div>
            </a>

            <div className="flex items-start gap-3 pt-2 text-sm text-slate">
              <MapPin className="w-5 h-5 mt-0.5 text-blueline shrink-0" />
              <span>440 Ascent Avenue, Suite 1200, Chicago, IL 60601</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3.5">
            <a
              href="https://www.instagram.com/upstairstechno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @upstairstechno"
              data-cursor="Instagram"
              className="rounded-full border border-grid p-3 text-slate transition-all duration-300 hover:border-blueline hover:text-blueline hover:-translate-y-0.5 min-w-[44px] min-h-[44px] flex items-center justify-center group"
            >
              <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/upstairstechno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-slate hover:text-blueline transition-colors"
            >
              @upstairstechno
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-grid bg-white p-8 sm:p-12 h-full"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blueline/10 text-blueline">
                <Check className="w-7 h-7" />
              </span>
              <p className="font-display text-2xl font-bold text-ink">Message sent</p>
              <p className="text-base sm:text-lg text-slate">
                Thanks for reaching out — we&apos;ll follow up within one business day.
              </p>
            </motion.div>
          ) : (
            <form
              action={`mailto:${CONTACT_EMAIL}`}
              method="post"
              encType="text/plain"
              onSubmit={() => setSent(true)}
              className="space-y-4 rounded-2xl border border-grid bg-white p-6 sm:p-8 md:p-10 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingField name="name" label="Full name" />
                <FloatingField name="email" label="Work email" type="email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingField name="company" label="Company" required={false} />
                <FloatingField name="budget" label="Budget range" required={false} />
              </div>
              <FloatingField name="message" label="What are you building?" textarea />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-paper px-7 py-4 text-base sm:text-lg font-bold transition-all duration-300 hover:bg-blueline min-h-[52px] shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
