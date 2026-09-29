"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUp } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Domains", href: "/#domains" },
  { name: "Code Nova", href: "/#coding-competition" },
  { name: "Career", href: "/#career" },
  { name: "Contact Us", href: "/#contact" },
];

const SERVICE_LINKS = [
  { name: "IT Consulting", href: "/#it-consulting" },
  { name: "Software Development", href: "/#software-development" },
  { name: "Digital Marketing", href: "/#digital-marketing" },
  { name: "AI & Automation", href: "/#ai-automation" },
  { name: "Education", href: "/#education" },
  { name: "Talent Development", href: "/#btds" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Refund & Cancellation Policy", href: "/refund-policy" },
  { name: "Internship Terms", href: "/internship-terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-ink text-paper/70 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blueline/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-paper/10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="relative w-8 h-8">
                <Image
                  src="/Upstairs_Logo.jpeg"
                  alt="Upstairs Techno logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-display text-lg font-bold text-paper tracking-tight">
                Upstairs Techno
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-paper/60 mb-6 max-w-xs">
              Enterprise software, AI solutions, digital marketing, and technology education from Baramati, India.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-paper/40 mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-paper/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-paper/40 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-paper/40 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@upstairstechno.com"
                  className="flex items-start gap-2.5 text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-blueline/60 group-hover:text-blueline" />
                  <span>contact@upstairstechno.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@upstairstechno.com"
                  className="flex items-start gap-2.5 text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-blueline/60 group-hover:text-blueline" />
                  <span>info@upstairstechno.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rajeamarsinha+Colony+Malegaon+Bk+Baramati+Pune+413115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blueline/60 group-hover:text-blueline" />
                  <span>Rajeamarsinha Colony, Malegaon Bk, Baramati, Pune 413115</span>
                </a>
              </li>
            </ul>

            {/* Instagram Icon below Contact */}
            <div className="mt-5 pt-1">
              <a
                href="https://www.instagram.com/upstairstechno/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/60 hover:border-blueline hover:text-blueline-soft hover:bg-blueline/10 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex items-center justify-center text-center text-xs text-paper/30">
          <p>&copy; {currentYear} Upstairs Techno. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blueline text-paper shadow-xl shadow-blueline/30 border border-white/10 transition-all duration-300 hover:bg-blueline-soft hover:scale-105 active:scale-95 cursor-pointer ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 text-paper stroke-[2.5]" />
      </button>
    </footer>
  );
}
