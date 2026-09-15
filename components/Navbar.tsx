"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { services } from "@/lib/data/services";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/projects" },
  { name: "Code Nova", href: "/education/coding-competition" },
  { name: "Career", href: "/career" },
];

const MOBILE_LINKS = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/projects" },
  { name: "Code Nova", href: "/education/coding-competition" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  // On the home page top, the background is dark (video hero).
  // Everywhere else (subpages or when scrolled), the background is light.
  const isDarkHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isDarkHero
          ? "bg-transparent py-4 md:py-6"
          : "bg-paper/95 backdrop-blur-md border-b border-grid shadow-sm py-3.5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo & Company Name */}
        <a
          href="/"
          className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
        >
          <img
            src="/Upstairs_Logo.jpeg"
            alt="Upstairs Techno logo"
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 rounded-full object-cover border border-paper/20 bg-paper shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`font-display font-extrabold text-lg sm:text-xl md:text-2xl lg:text-[25px] tracking-tight transition-colors duration-300 ${
              isDarkHero ? "text-paper" : "text-ink"
            }`}
          >
            Upstairs Techno
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          className="hidden lg:flex items-center gap-5 xl:gap-7 ml-6 xl:ml-10"
          onMouseLeave={() => setMenuOpen(false)}
        >
          {LINKS.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setMenuOpen(link.name === "What We Do")}
            >
              <a
                href={link.href}
                className={`relative text-[13px] xl:text-[14px] font-semibold py-1.5 transition-colors duration-300 group ${
                  (link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href.split("#")[0]) &&
                      link.href.split("#")[0] !== "/")
                    ? "text-blueline"
                    : isDarkHero
                      ? "text-paper/90 hover:text-white"
                      : "text-ink/80 hover:text-blueline"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-blueline transition-all duration-300 ${
                    (link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href.split("#")[0]) &&
                        link.href.split("#")[0] !== "/")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>

              <AnimatePresence>
                {menuOpen && link.name === "What We Do" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3.5 w-[680px] rounded-2xl border border-grid bg-paper shadow-2xl p-6 grid grid-cols-2 gap-2.5"
                  >
                    {services.map((s) => (
                      <a
                        key={s.title}
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3.5 hover:bg-paper-dim transition-colors duration-200"
                      >
                        <s.icon className="w-5 h-5 text-blueline mt-0.5 shrink-0" />
                        <span>
                          <span className="block font-display text-[15px] sm:text-base font-semibold text-ink">
                            {s.title}
                          </span>
                          <span className="block text-xs sm:text-sm text-slate mt-0.5 leading-snug">
                            {s.shortDescription}
                          </span>
                        </span>
                      </a>
                    ))}
                    <a
                      href="/#case-studies"
                      className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-ink text-paper p-4 hover:bg-blueline transition-colors"
                    >
                      <span>
                        <span className="block font-display text-base font-semibold">
                          Featured: Meridian Bank
                        </span>
                        <span className="block text-xs sm:text-sm text-paper/70 mt-0.5">
                          4.2M accounts, zero downtime
                        </span>
                      </span>
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="https://job.upstairstechno.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-blueline px-4.5 py-2 lg:px-5 lg:py-2.5 text-xs lg:text-sm font-bold text-paper shadow-md shadow-blueline/20 transition-all duration-300 hover:bg-blueline-soft hover:shadow-lg hover:shadow-blueline/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Apply for Job
            <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`lg:hidden relative z-50 p-2.5 rounded-full transition-colors cursor-pointer ${
            isDarkHero && !mobileMenuOpen
              ? "text-paper hover:bg-paper/10"
              : "text-ink hover:bg-paper-dim"
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Fullscreen Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-0 z-40 bg-paper min-h-screen w-full flex flex-col pt-28 px-6 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 my-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline mb-2">
                Navigation
              </p>
              {MOBILE_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  className={`flex items-center justify-between py-3.5 border-b border-grid text-xl sm:text-2xl font-display font-bold transition-colors active:bg-paper-dim rounded-lg px-2 min-h-[50px] ${(link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href.split("#")[0]) &&
                      link.href.split("#")[0] !== "/")
                      ? "text-blueline"
                      : "text-ink hover:text-blueline"
                    }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-blueline" />
                </motion.a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-grid flex flex-col gap-3">
              {/* Apply for Job */}
              <a
                href="https://job.upstairstechno.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-blueline px-6 py-3.5 text-base font-bold text-paper shadow-lg hover:bg-blueline-soft transition-colors min-h-[48px]"
              >
                Apply for Job
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-full border border-grid bg-paper px-6 py-3 text-sm font-semibold text-ink hover:bg-paper-dim transition-colors min-h-[44px]"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
