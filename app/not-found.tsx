"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Compass,
  Home,
  ArrowLeft,
  Briefcase,
  Globe2,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";

const QUICK_LINKS = [
  {
    title: "Browse Open Jobs",
    description: "Explore verified overseas vacancies across GCC & Europe",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Global Reach",
    description: "View active hiring corridors and deployment timelines",
    href: "/global-reach",
    icon: Globe2,
  },
  {
    title: "Contact Our Team",
    description: "Speak with recruitment specialists in Kathmandu or Dubai",
    href: "/contact-us",
    icon: PhoneCall,
  },
];

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-[calc(100vh-5rem)] w-full bg-[#F8FAFC] text-slate-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden selection:bg-[#9B0A30] selection:text-white">
      {/* Subtle Ambient Brand Accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[280px] rounded-full bg-[#102B46]/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[260px] rounded-full bg-[#9B0A30]/8 blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-[2rem] border border-slate-200/90 shadow-xl shadow-slate-900/5 p-7 sm:p-12 text-center"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B0A30]/10 border border-[#9B0A30]/20 text-[#9B0A30] text-xs font-bold uppercase tracking-wider mb-5">
            <Compass className="w-3.5 h-3.5" />
            <span>Page Not Found • Error 404</span>
          </div>

          {/* Large Editorial 404 Display */}
          <div className="select-none leading-none font-black tracking-tighter text-6xl sm:text-8xl lg:text-9xl text-[#102B46]">
            4<span className="text-[#9B0A30]">0</span>4
          </div>

          <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight">
            Looks Like This Route Has Moved or Expired
          </h1>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The job listing, page, or link you tried to open isn&apos;t
            available anymore. Head back to the homepage or jump directly to our
            active opportunities below.
          </p>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#9B0A30] hover:bg-[#b50d39] text-white font-bold text-sm shadow-lg shadow-[#9B0A30]/30 transition-all hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-[#102B46] font-bold text-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Helpful Destination Cards */}
          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {QUICK_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200/85 bg-[#F8FAFC] hover:bg-white p-4 transition-all hover:shadow-md hover:border-[#9B0A30]/35 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#102B46] text-white group-hover:bg-[#9B0A30] transition-colors flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#9B0A30] transition-colors" />
                    </div>
                    <h2 className="text-sm font-extrabold text-[#102B46] group-hover:text-[#9B0A30] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
