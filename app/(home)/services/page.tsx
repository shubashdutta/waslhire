"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  UserCheck,
  FileCheck2,
  PlaneTakeoff,
  GraduationCap,
  ArrowUpRight,
  ChevronRight,
  Search,
  Building2,
  UtensilsCrossed,
  Factory,
  Sprout,
  Truck,
  HardHat,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  turnaround: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  category: "Hospitality & Food" | "Industrial & Infra" | "Operations & Care";
  imageUrl: string;
  rolesSample: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CORE_SERVICES: ServiceItem[] = [
  {
    id: "overseas-recruitment",
    title: "Overseas Manpower Recruitment",
    description:
      "Connecting skilled, semi-skilled, and professional Nepali talent with vetted international employers across the GCC and beyond.",
    turnaround: "2–4 Weeks Sourcing",
    deliverables: ["Talent pool mapping", "Employer demand alignment"],
    icon: Globe2,
    href: "/job-demands",
  },
  {
    id: "candidate-screening",
    title: "Candidate Screening & Selection",
    description:
      "Structured interviews, background verification, and trade/skill assessments so employers receive deployment-ready candidates.",
    turnaround: "Trade & Skill Verified",
    deliverables: [
      "Technical & trade evaluation",
      "Shortlist & interview coordination",
    ],
    icon: UserCheck,
    href: "/about-us",
  },
  {
    id: "documentation-legal",
    title: "Documentation & Legal Processing",
    description:
      "End-to-end handling of contracts, embassy attestation, labor approvals, and compliance paperwork with zero guesswork.",
    turnaround: "100% Compliance",
    deliverables: [
      "Employment contract review",
      "Attestation & regulatory clearance",
    ],
    icon: FileCheck2,
    href: "/contact-us",
  },
  {
    id: "visa-travel",
    title: "Visa Processing & Travel Arrangement",
    description:
      "Coordinating medical clearances, visa stamping, flight ticketing, and arrival schedules for smooth international onboarding.",
    turnaround: "Coordinated Departure",
    deliverables: ["Visa & medical tracking", "Flight & arrival itinerary"],
    icon: PlaneTakeoff,
    href: "/contact-us",
  },
  {
    id: "pre-departure-orientation",
    title: "Pre-Departure Orientation",
    description:
      "Practical briefing on workplace expectations, cultural norms, safety standards, and remittance guidance before takeoff.",
    turnaround: "Deployment Ready",
    deliverables: ["Workplace & safety briefing", "Cultural & legal readiness"],
    icon: GraduationCap,
    href: "/about-us",
  },
];

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "facilities-management",
    name: "Facilities Management",
    category: "Operations & Care",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "FM Technicians, Supervisors, Housekeeping Leads",
    icon: Building2,
  },
  {
    id: "hospitality",
    name: "Hospitality",
    category: "Hospitality & Food",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "Chefs, F&B Service, Front Office, Housekeeping",
    icon: UtensilsCrossed,
  },
  {
    id: "manufacturing-factory",
    name: "Manufacturing and Factory",
    category: "Industrial & Infra",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "Machine Operators, Quality Control, Production Staff",
    icon: Factory,
  },
  {
    id: "agriculture-farming",
    name: "Agriculture and Farming",
    category: "Hospitality & Food",
    imageUrl:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "Agri Technicians, Greenhouse & Farm Specialists",
    icon: Sprout,
  },
  {
    id: "logistics",
    name: "Logistics",
    category: "Operations & Care",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "Warehouse Associates, Forklift Operators, Fleet",
    icon: Truck,
  },
  {
    id: "construction-infrastructure",
    name: "Construction and Infrastructure",
    category: "Industrial & Infra",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "MEP Engineers, Masons, Welders, Site Foremen",
    icon: HardHat,
  },
  {
    id: "security-services",
    name: "Security Services",
    category: "Operations & Care",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "Licensed Security Guards, Access Control Officers",
    icon: ShieldCheck,
  },
  {
    id: "health-care",
    name: "Health Care",
    category: "Operations & Care",
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    rolesSample: "Nurses, Caregivers, Lab & Support Technicians",
    icon: HeartPulse,
  },
];

const INDUSTRY_FILTERS = [
  "All",
  "Hospitality & Food",
  "Industrial & Infra",
  "Operations & Care",
] as const;

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    CORE_SERVICES[0].id,
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sectorSearch, setSectorSearch] = useState("");

  const activeService = useMemo(
    () =>
      CORE_SERVICES.find((s) => s.id === selectedServiceId) || CORE_SERVICES[0],
    [selectedServiceId],
  );

  const filteredIndustries = useMemo(() => {
    return INDUSTRIES_LIST.filter((ind) => {
      const matchesCat =
        selectedCategory === "All" || ind.category === selectedCategory;
      const q = sectorSearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        ind.name.toLowerCase().includes(q) ||
        ind.rolesSample.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, sectorSearch]);

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] text-slate-800 pb-24">
      <section className="relative bg-slate-950 text-white pt-14 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#102B46]/92 via-slate-950/85 to-[#9B0A30]/75" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[300px] bg-[#9B0A30]/30 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-5">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-rose-300 font-semibold">Services</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Ethical & End-to-End Global Placement</span>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.12]"
          >
            Our Recruitment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-white">
              Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            We follow ethical recruitment practices to connect skilled talent
            with trusted global employers—emphasizing transparency, compliance,
            and long-term placement success.
          </motion.p>
        </div>
      </section>

      {/* ==================== 2. OUR CORE SERVICES (5-CARD STAGGERED GRID) ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#9B0A30]">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">
            Our Core Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Comprehensive recruitment support managing every stage of the
            overseas employment journey. Select a stage to inspect deliverables.
          </p>
        </div>

        {/* 3 on top row, 2 centered on second row on desktop */}
        <div className="flex flex-wrap justify-center gap-6">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = service.id === selectedServiceId;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedServiceId(service.id)}
                className={`group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white border-[#9B0A30] shadow-xl ring-2 ring-[#9B0A30]/15"
                    : "bg-[#9B0A30]/[0.04] hover:bg-white border-[#9B0A30]/15 hover:border-[#9B0A30]/40 shadow-2xs hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Top Row: Left Icon + Right Arrow Circle */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#102B46] text-white flex items-center justify-center shadow-sm group-hover:bg-[#9B0A30] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <Link
                      href={service.href}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Explore ${service.title}`}
                      className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#9B0A30] group-hover:border-[#9B0A30] group-hover:text-white group-hover:rotate-45 transition-all duration-300 shadow-2xs"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#9B0A30] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 text-[#102B46]">
                    <Clock className="w-3.5 h-3.5 text-[#9B0A30]" />
                    {service.turnaround}
                  </span>
                  <span className="text-[#9B0A30]">
                    {isSelected ? "Active View" : "View Scope"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Stage Spotlight Bar */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#9B0A30]">
              Stage Spotlight: {activeService.title}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              {activeService.deliverables.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={activeService.href}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#102B46] hover:bg-[#9B0A30] text-white text-xs sm:text-sm font-bold transition-colors shrink-0"
          >
            <span>Proceed with {activeService.title.split(" ")[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ==================== 3. INDUSTRIES WE SUPPORT (8-CARD GRID) ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9B0A30]">
              Sector Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">
              Industries We Support
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5">
              Specialized manpower and workforce solutions tailored to
              high-demand global sectors.
            </p>
          </div>

          {/* Search Sector / Role */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={sectorSearch}
              onChange={(e) => setSectorSearch(e.target.value)}
              placeholder="Search industry or role..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#9B0A30] shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {INDUSTRY_FILTERS.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  active
                    ? "bg-[#9B0A30] text-white shadow-md shadow-[#9B0A30]/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredIndustries.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-14 text-center">
            <p className="text-slate-600 font-medium">
              No matching industries found for &ldquo;{sectorSearch}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSectorSearch("");
              }}
              className="mt-3 text-xs font-bold text-[#9B0A30] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredIndustries.map((industry) => {
                const SectorIcon = industry.icon;
                return (
                  <motion.div
                    layout
                    key={industry.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Link
                      href={`/job-demands?sector=${encodeURIComponent(
                        industry.name,
                      )}`}
                      className="group relative block aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={industry.imageUrl}
                        alt={industry.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                      {/* Top-right quick badge */}
                      <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#9B0A30] group-hover:border-[#9B0A30] transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>

                      {/* Bottom Title & Sample Roles */}
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-rose-200 mb-1">
                          <SectorIcon className="w-3.5 h-3.5 text-rose-300" />
                          <span>{industry.category}</span>
                        </div>
                        <h3 className="text-base font-extrabold leading-snug group-hover:text-rose-200 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                          {industry.rolesSample}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* ==================== 4. BOTTOM PARTNERSHIP CTA ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl bg-gradient-to-r from-[#102B46] via-[#16395c] to-[#9B0A30] p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Need Bulk or Specialized Workforce Deployment?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Partner with WASL HIRE for compliant sourcing, trade screening,
              and timely international mobilization.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/job-demands"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm transition-all"
            >
              <span>Browse Demands</span>
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-[#9B0A30] font-extrabold text-sm shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Request Manpower</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
