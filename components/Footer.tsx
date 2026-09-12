"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/projects" },
  { name: "Code Nova", href: "/education/coding-competition" },
  { name: "Career", href: "/career" },
];

const SERVICE_LINKS = [
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Education", href: "/what-we-do/services/education" },
  { name: "BTDS", href: "/services/btds" },
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

  return (
    <footer className="bg-ink text-paper/70 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blueline/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-paper/10">
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

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/upstairstechno/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @upstairstechno"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/50 hover:border-blueline hover:text-blueline transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/upstairstechno/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper/50 hover:text-blueline-soft transition-colors duration-200 font-mono"
              >
                @upstairstechno
              </a>
            </div>
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
                  href="tel:9370465576"
                  className="flex items-start gap-2.5 text-sm text-paper/60 hover:text-blueline-soft transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-blueline/60 group-hover:text-blueline" />
                  <span>+91 93704 65576</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-paper/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blueline/60" />
                  <span>Baramati, Pune<br />Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/30">
          <p>&copy; {currentYear} Upstairs Techno. All rights reserved.</p>
          <p className="font-mono tracking-wide">Baramati · Pune · Maharashtra · India</p>
        </div>
      </div>
    </footer>
  );
}
