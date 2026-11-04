"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";
import logo from "@/src/assets/images/Logo.png";
import Image from "next/image";

// Inline Brand Icons
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const QUICK_LINKS = [
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Global Coverage", href: "/#global-reach" },
  { label: "Recruitment Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
];

const SPECIALTIES = [
  "International Recruitment",
  "Manpower Supply",
  "Skilled Workforce Sourcing",
  "Executive Placement",
  "Visa & Compliance Support",
  "Hospitality Staffing",
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-6">
            <Image alt="logo" src={logo} height={100} width={200} />

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Your premier international recruitment and manpower agency.
              Connecting top-tier global talent with industry-leading employers
              across the UAE and worldwide.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#9B0A30] flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9B0A30] flex-shrink-0" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#9B0A30] flex-shrink-0" />
                <span>info@waslhire.ae</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/waslhire.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#9B0A30] hover:border-[#9B0A30] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#9B0A30] hover:border-[#9B0A30] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#9B0A30] hover:border-[#9B0A30] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#9B0A30] hover:border-[#9B0A30] transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#9B0A30] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9B0A30]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Specialties
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SPECIALTIES.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 hover:text-white transition-colors duration-200 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Stay Updated
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Subscribe to get recruitment insights and workforce market
              updates.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#9B0A30] transition-colors pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#9B0A30] text-white flex items-center justify-center hover:bg-[#7a0726] transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 WASL HIRE. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
