"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  MapPin,
  Users,
  Building2,
  ShieldCheck,
  PlaneTakeoff,
  Clock,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Award,
  Briefcase,
  HeadphonesIcon,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";

export type RegionKey = "all" | "gcc" | "europe" | "asia";

export interface DestinationCountry {
  id: string;
  name: string;
  code: string;
  region: Exclude<RegionKey, "all">;
  regionLabel: string;
  flag: string;
  deploymentTime: string;
  complianceTag: string;
  activeOpenings: number;
  topSectors: string[];
  highlight: string;
}

export interface SourcingCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}

export interface GlobalSectorItem {
  icon: LucideIcon;
  title: string;
  corridors: string;
  roles: string[];
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=80";

const IMPACT_STATS = [
  {
    icon: Globe2,
    value: "12+",
    label: "Destination Countries",
    accent: "bg-[#9B0A30]/10 text-[#9B0A30]",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Workers Deployed",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Building2,
    value: "150+",
    label: "Global Partner Employers",
    accent: "bg-[#102B46]/10 text-[#102B46]",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Legal & Embassy Compliance",
    accent: "bg-amber-50 text-amber-600",
  },
];

const REGION_TABS: { key: RegionKey; label: string }[] = [
  { key: "all", label: "All Regions" },
  { key: "gcc", label: "GCC & Middle East" },
  { key: "europe", label: "Europe" },
  { key: "asia", label: "Asia-Pacific" },
];

const DESTINATION_COUNTRIES: DestinationCountry[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    code: "UAE",
    region: "gcc",
    regionLabel: "GCC & Middle East",
    flag: "🇦🇪",
    deploymentTime: "20–30 Days",
    complianceTag: "MOHRE & Embassy Verified",
    activeOpenings: 85,
    topSectors: [
      "Hospitality",
      "Facility Management",
      "Construction & MEP",
      "Retail",
    ],
    highlight:
      "Direct liaison desk in Dubai supporting fast-track bulk mobilization.",
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    code: "KSA",
    region: "gcc",
    regionLabel: "GCC & Middle East",
    flag: "🇸🇦",
    deploymentTime: "25–35 Days",
    complianceTag: "Qiwa & Musaned Compliant",
    activeOpenings: 120,
    topSectors: [
      "Hotels & Resorts",
      "Infrastructure",
      "Logistics",
      "Food & Beverage",
    ],
    highlight:
      "High-volume recruitment for Vision 2030 hospitality and mega-projects.",
  },
  {
    id: "qatar",
    name: "Qatar",
    code: "QAT",
    region: "gcc",
    regionLabel: "GCC & Middle East",
    flag: "🇶🇦",
    deploymentTime: "25–35 Days",
    complianceTag: "QVC & Labor Approved",
    activeOpenings: 45,
    topSectors: [
      "Hospitality",
      "Security & FM",
      "Civil Engineering",
      "Transport",
    ],
    highlight:
      "Seamless Qatar Visa Center (QVC) medical and biometric coordination.",
  },
  {
    id: "oman",
    name: "Oman",
    code: "OMN",
    region: "gcc",
    regionLabel: "GCC & Middle East",
    flag: "🇴🇲",
    deploymentTime: "20–30 Days",
    complianceTag: "ROP & Embassy Attested",
    activeOpenings: 40,
    topSectors: [
      "Fine Dining & F&B",
      "Hospitality",
      "Manufacturing",
      "Maintenance",
    ],
    highlight:
      "Trusted placement partner for luxury resorts and restaurant groups.",
  },
  {
    id: "kuwait",
    name: "Kuwait",
    code: "KWT",
    region: "gcc",
    regionLabel: "GCC & Middle East",
    flag: "🇰🇼",
    deploymentTime: "25–40 Days",
    complianceTag: "PAM & Embassy Verified",
    activeOpenings: 30,
    topSectors: [
      "Retail & Malls",
      "Hospitality",
      "Warehousing",
      "Technical Trades",
    ],
    highlight:
      "End-to-end documentation, PCC verification, and visa stamping support.",
  },
  {
    id: "bahrain",
    name: "Bahrain",
    code: "BHR",
    region: "gcc",
    regionLabel: "GCC & Middle East",
    flag: "🇧🇭",
    deploymentTime: "20–30 Days",
    complianceTag: "LMRA Compliant",
    activeOpenings: 25,
    topSectors: [
      "Hospitality",
      "Facility Services",
      "Food Production",
      "Retail",
    ],
    highlight:
      "Rapid LMRA work permit processing for service and technical teams.",
  },
  {
    id: "romania",
    name: "Romania",
    code: "ROU",
    region: "europe",
    regionLabel: "Europe",
    flag: "🇷🇴",
    deploymentTime: "45–75 Days",
    complianceTag: "IGI Work Permit & VFS",
    activeOpenings: 50,
    topSectors: [
      "Construction",
      "Welding & Fabrication",
      "Hospitality",
      "Warehousing",
    ],
    highlight:
      "Dedicated European documentation desk for IGI approvals and embassy slots.",
  },
  {
    id: "croatia",
    name: "Croatia",
    code: "HRV",
    region: "europe",
    regionLabel: "Europe",
    flag: "🇭🇷",
    deploymentTime: "45–70 Days",
    complianceTag: "EU Work & Residence Permit",
    activeOpenings: 35,
    topSectors: [
      "Seasonal & Year-Round Hotels",
      "Civil Works",
      "Culinary",
      "Logistics",
    ],
    highlight:
      "Pre-screened hospitality and skilled trade professionals for Adriatic hubs.",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    code: "MYS",
    region: "asia",
    regionLabel: "Asia-Pacific",
    flag: "🇲🇾",
    deploymentTime: "30–45 Days",
    complianceTag: "FWCMS & Calling Visa",
    activeOpenings: 60,
    topSectors: [
      "Electronics Manufacturing",
      "Plantation & Agro",
      "Hospitality",
      "Packaging",
    ],
    highlight:
      "Structured bulk mobilization with full FWCMS and BioMedical compliance.",
  },
];

const SOURCING_CAPABILITIES: SourcingCapability[] = [
  {
    icon: Award,
    title: "Accredited Trade Testing Centers",
    desc: "Practical skill evaluations in Kathmandu and regional hubs ensure candidates meet exact technical benchmarks before interviews.",
    tag: "Quality Verified",
  },
  {
    icon: FileCheck2,
    title: "Dedicated Embassy & Visa Desk",
    desc: "In-house specialists manage demand attestation, medical clearances, biometric scheduling, and work permit approvals.",
    tag: "Zero-Delay Processing",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Cultural & Safety Briefing",
    desc: "Every deployed candidate completes workplace safety, host-country labor law, and cultural readiness orientation.",
    tag: "Job-Ready Workforce",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Post-Arrival Employer Support",
    desc: "Our Kathmandu HQ and Dubai liaison office stay connected post-deployment to ensure smooth onboarding and retention.",
    tag: "Ongoing Liaison",
  },
];

const GLOBAL_SECTORS: GlobalSectorItem[] = [
  {
    icon: Sparkles,
    title: "Hospitality & F&B",
    corridors: "UAE • Saudi Arabia • Oman • Qatar • Croatia",
    roles: [
      "Waiters & Servers",
      "Housekeeping Staff",
      "Commis Chefs",
      "Baristas",
    ],
  },
  {
    icon: Building2,
    title: "Engineering & Construction",
    corridors: "Saudi Arabia • UAE • Romania • Qatar",
    roles: [
      "Civil Technicians",
      "Welders & Fabricators",
      "Electricians",
      "MEP Fitters",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Facility Management & Security",
    corridors: "UAE • Qatar • Bahrain • Kuwait",
    roles: [
      "HVAC Technicians",
      "Cleaners & Janitors",
      "Security Guards",
      "Building Operators",
    ],
  },
  {
    icon: Briefcase,
    title: "Warehousing & Logistics",
    corridors: "UAE • Saudi Arabia • Romania • Malaysia",
    roles: [
      "Forklift Operators",
      "Warehouse Pickers",
      "Inventory Helpers",
      "Heavy Drivers",
    ],
  },
];

export default function GlobalReachPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>("all");

  const filteredCountries = useMemo(() => {
    if (selectedRegion === "all") return DESTINATION_COUNTRIES;
    return DESTINATION_COUNTRIES.filter((c) => c.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-[#9B0A30] selection:text-white pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-slate-950 text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#102B46]/90 via-slate-950/80 to-[#9B0A30]/75" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-[#9B0A30]/25 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-rose-300 font-semibold">Global Reach</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B0A30]/25 border border-[#9B0A30]/50 text-rose-200 text-xs font-bold tracking-wider uppercase">
              <Globe2 className="w-3.5 h-3.5 text-rose-400" />
              <span>International Recruitment Corridors</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
            >
              Connecting Skilled Talent Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-white">
                Global Markets
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              From our sourcing headquarters in Kathmandu to enterprise partners
              across the GCC, Europe, and Asia-Pacific, WASL HIRE delivers
              vetted, compliant, and deployment-ready workforces at scale.
            </motion.p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#9B0A30] hover:bg-[#b50d39] text-white font-bold text-sm shadow-xl shadow-[#9B0A30]/35 transition-all hover:-translate-y-0.5"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white font-semibold text-sm transition-all"
              >
                <span>Explore Active Demands</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING OVERLAPPING KEY IMPACT STATS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        >
          {IMPACT_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-6 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${stat.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#102B46] tracking-tight">
                    {stat.value}
                  </p>
                  <span className="text-xs font-semibold text-slate-500">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. INTERACTIVE DESTINATION CORRIDORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-6 rounded-full bg-[#9B0A30]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B0A30]">
                Deployment Destinations
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl  text-[#102B46] tracking-tight">
              Active International Hiring Corridors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Filter by region to explore our verified employer partnerships,
              typical mobilization timelines, and high-demand sectors.
            </p>
          </div>

          {/* Region Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {REGION_TABS.map((tab) => {
              const active = selectedRegion === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedRegion(tab.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                    active
                      ? "bg-[#9B0A30] text-white border-[#9B0A30] shadow-md shadow-[#9B0A30]/20"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#9B0A30]/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Country Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCountries.map((country) => (
              <motion.div
                key={country.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="group bg-white rounded-3xl border border-slate-200/85 p-6 shadow-sm hover:shadow-xl hover:border-[#9B0A30]/35 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-2xl shrink-0">
                        {country.flag}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B0A30]">
                          {country.regionLabel}
                        </span>
                        <h3 className="text-lg font-extrabold text-[#102B46] group-hover:text-[#9B0A30] transition-colors">
                          {country.name}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/70 text-[11px] font-bold text-emerald-700 shrink-0">
                      {country.activeOpenings}+ Open
                    </span>
                  </div>

                  {/* Highlight */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {country.highlight}
                  </p>

                  {/* Sectors */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {country.topSectors.map((sector, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-700"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata + Action Footer */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#102B46]" />
                      Avg. Mobilization:{" "}
                      <strong className="text-slate-800">
                        {country.deploymentTime}
                      </strong>
                    </span>
                    <span className="font-mono font-bold text-slate-400">
                      {country.code}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {country.complianceTag}
                    </span>

                    <Link
                      href="/jobs"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#9B0A30] hover:text-[#102B46] transition-colors"
                    >
                      <span>View Jobs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. SOURCING & TRADE TESTING NETWORK (2-COLUMN SPLIT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white rounded-[2rem] border border-slate-200/90 p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B46]/10 text-[#102B46] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#9B0A30]" />
              <span>Dual-Hub Operations</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight">
              Seamless Mobilization From Kathmandu to Destination Sites
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our recruitment infrastructure bridges South Asian talent pools
              with international employer expectations—combining hands-on trade
              testing in Nepal with on-the-ground client coordination in the
              UAE.
            </p>

            {/* Hub Badges */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#102B46] text-[#E6A23C] flex items-center justify-center shrink-0 font-bold text-xs">
                  KTM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B46]">
                    Kathmandu Sourcing & Testing Headquarters
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Candidate mobilization, trade testing, medical coordination
                    & DoFE compliance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#9B0A30] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                  DXB
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B46]">
                    Dubai GCC Employer Liaison Desk
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct client consultations, demand alignment & post-arrival
                    workforce support.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#102B46] hover:bg-[#9B0A30] text-white text-xs sm:text-sm font-bold transition-all"
              >
                <span>See Our 4-Phase Process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Capability Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SOURCING_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 hover:bg-white hover:shadow-lg hover:border-[#9B0A30]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#102B46] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTOR-WISE GLOBAL DEMAND MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B0A30]">
            Cross-Border Expertise
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight">
            Industries We Supply Worldwide
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Tailored manpower recruitment across core high-growth international
            sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/85 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#102B46] text-[#E6A23C] flex items-center justify-center mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#102B46]">
                    {sector.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#9B0A30] mt-1">
                    {sector.corridors}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {sector.roles.map((role, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9B0A30] shrink-0" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#102B46] hover:text-[#9B0A30] transition-colors"
                >
                  <span>Explore Sector Staffing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#9B0A30] via-[#7a0726] to-slate-950 p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Expanding Your Workforce Across Borders?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base font-light leading-relaxed">
              Partner with WASL HIRE for compliant, pre-tested, and reliable
              manpower deployment to the GCC, Europe, and Asia-Pacific.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#9B0A30] text-sm font-bold shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
              >
                <span>Request Manpower</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/clients"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold transition-all"
              >
                <span>Our Global Clients</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
