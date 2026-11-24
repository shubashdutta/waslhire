"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Search,
  UserCheck,
  Award,
  Stethoscope,
  PlaneTakeoff,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  FileCheck2,
  Briefcase,
  HeadphonesIcon,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type AudienceTab = "employer" | "candidate";

export interface RecruitmentStep {
  stepNumber: string;
  phase: string;
  title: string;
  duration: string;
  summary: string;
  icon: LucideIcon;
  deliverables: string[];
  owner: string;
}

export interface ComplianceDocument {
  title: string;
  description: string;
  issuedBy: string;
  icon: LucideIcon;
}

export interface ProcessFaq {
  question: string;
  answer: string;
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80";

const PROCESS_METRICS = [
  {
    icon: Layers,
    value: "6-Stage",
    label: "Structured Mobilization Pipeline",
    accent: "bg-[#9B0A30]/10 text-[#9B0A30]",
  },
  {
    icon: Clock,
    value: "21–35 Days",
    label: "Average GCC Deployment Cycle",
    accent: "bg-[#102B46]/10 text-[#102B46]",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "DoFE & Embassy Verified",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: UserCheck,
    value: "3-Tier",
    label: "Technical & Medical Screening",
    accent: "bg-amber-50 text-amber-600",
  },
];

const EMPLOYER_STEPS: RecruitmentStep[] = [
  {
    stepNumber: "01",
    phase: "Demand & Legalization",
    title: "Demand Letter Attestation & Labor Approval",
    duration: "Days 1–5",
    summary:
      "We review your manpower requisition, salary structure, and contract terms, then coordinate Chamber of Commerce, Embassy, and Nepal DoFE pre-approval.",
    icon: FileText,
    deliverables: [
      "Demand Letter & Power of Attorney verification",
      "Employment Contract & Guarantee Letter review",
      "Department of Foreign Employment (DoFE) prior approval",
    ],
    owner: "Legal & Embassy Compliance Desk",
  },
  {
    stepNumber: "02",
    phase: "Sourcing & Pre-Screening",
    title: "Nationwide Talent Mobilization & CV Shortlisting",
    duration: "Days 6–10",
    summary:
      "Through our active candidate database, regional outreach partners, and verified job boards, we source and pre-screen applicants against your exact job matrix.",
    icon: Search,
    deliverables: [
      "Passport validity & age/experience verification",
      "Initial HR & language communication screening",
      "Curated shortlist dossier shared with client HR",
    ],
    owner: "Talent Acquisition Team",
  },
  {
    stepNumber: "03",
    phase: "Trade Testing & Interviews",
    title: "Practical Skill Assessment & Final Client Selection",
    duration: "Days 11–15",
    summary:
      "Candidates undergo hands-on trade tests at accredited workshops in Kathmandu before attending live in-person or video interviews with your hiring managers.",
    icon: Award,
    deliverables: [
      "Video-recorded practical trade test evaluations",
      "Organized in-person or Zoom/Teams interview panels",
      "Signed selection list & offer letter issuance",
    ],
    owner: "Trade Testing & Client Coordination Unit",
  },
  {
    stepNumber: "04",
    phase: "Medical & Biometrics",
    title: "GAMCA / Approved Medicals & Police Clearance",
    duration: "Days 16–20",
    summary:
      "Selected candidates complete GCC-approved medical examinations, Police Clearance Certificates (PCC), and biometric enrollment (QVC / VFS / BioMedical).",
    icon: Stethoscope,
    deliverables: [
      "GAMCA / country-specific medical fitness reports",
      "Verified Police Clearance Certificate (PCC)",
      "Biometric & visa center appointment completion",
    ],
    owner: "Medical & Documentation Coordinators",
  },
  {
    stepNumber: "05",
    phase: "Visa Stamping & Labor Sticker",
    title: "Work Visa Issuance & Final DoFE Labor Permit",
    duration: "Days 21–28",
    summary:
      "Once the employment visa is issued by the host country, we secure mandatory worker insurance, welfare fund registration, and final DoFE labor approval.",
    icon: FileCheck2,
    deliverables: [
      "Employment visa stamping / e-Visa verification",
      "Foreign employment life & medical insurance",
      "Final DoFE labor permit clearance",
    ],
    owner: "Visa & Government Liaison Officers",
  },
  {
    stepNumber: "06",
    phase: "Orientation & Deployment",
    title: "Pre-Departure Briefing, Ticketing & Site Arrival",
    duration: "Days 29–35",
    summary:
      "Candidates attend mandatory cultural, safety, and contract orientation before flight boarding—with full arrival coordination shared with your site team.",
    icon: PlaneTakeoff,
    deliverables: [
      "PDOS cultural, workplace safety & labor law briefing",
      "Confirmed flight itinerary & airport send-off",
      "Post-arrival check-in via Dubai / destination liaison",
    ],
    owner: "Mobilization & Post-Arrival Support Desk",
  },
];

const CANDIDATE_STEPS: RecruitmentStep[] = [
  {
    stepNumber: "01",
    phase: "Registration & Counseling",
    title: "Profile Submission & Career Guidance",
    duration: "Day 1",
    summary:
      "Submit your CV and valid passport online or at our Kathmandu office. Our counselors match your skills with verified international employer demands.",
    icon: UserCheck,
    deliverables: [
      "Free career counseling & transparent salary breakdown",
      "Passport & experience document check",
      "Matching with active DoFE-approved demands",
    ],
    owner: "Candidate Relations Desk",
  },
  {
    stepNumber: "02",
    phase: "Skill & Trade Evaluation",
    title: "Pre-Interview Preparation & Trade Testing",
    duration: "Days 2–5",
    summary:
      "Demonstrate your practical skills at our partner trade testing centers and receive interview coaching so you perform with confidence.",
    icon: Award,
    deliverables: [
      "Hands-on skill evaluation in your trade",
      "Interview etiquette & role briefing",
      "Shortlisting for direct employer interview",
    ],
    owner: "Technical Assessment Panel",
  },
  {
    stepNumber: "03",
    phase: "Employer Interview & Offer",
    title: "Direct Interview & Offer Letter Signing",
    duration: "Days 6–10",
    summary:
      "Meet directly with international hiring managers via video call or in person. Upon selection, review and sign your official employment offer letter.",
    icon: Briefcase,
    deliverables: [
      "Direct interview with foreign employer",
      "Clear explanation of salary, food, housing & overtime",
      "Signed offer letter confirmation",
    ],
    owner: "Recruitment Operations",
  },
  {
    stepNumber: "04",
    phase: "Medical & Police Clearance",
    title: "Health Checkup & PCC Documentation",
    duration: "Days 11–16",
    summary:
      "Complete your authorized medical test and apply for your Police Clearance Certificate with step-by-step guidance from our documentation team.",
    icon: Stethoscope,
    deliverables: [
      "Authorized medical examination booking",
      "Police Clearance Certificate (PCC) support",
      "Biometric registration (QVC / VFS where required)",
    ],
    owner: "Documentation Support Team",
  },
  {
    stepNumber: "05",
    phase: "Visa & Final Labor Approval",
    title: "Visa Processing, Insurance & DoFE Permit",
    duration: "Days 17–26",
    summary:
      "We submit your complete file for employer visa issuance, arrange mandatory worker insurance, and obtain your final DoFE labor approval.",
    icon: ShieldCheck,
    deliverables: [
      "Official work visa processing",
      "Worker insurance & Social Security Fund enrollment",
      "Final DoFE labor approval sticker",
    ],
    owner: "Visa & Compliance Desk",
  },
  {
    stepNumber: "06",
    phase: "Orientation & Departure",
    title: "Pre-Departure Orientation & Flight Boarding",
    duration: "Days 27–35",
    summary:
      "Attend your Pre-Departure Orientation Training (PDOS), collect your flight ticket and travel dossier, and receive airport departure assistance.",
    icon: PlaneTakeoff,
    deliverables: [
      "Mandatory PDOS training certificate",
      "Confirmed air ticket & complete travel folder",
      "Airport send-off & post-arrival helpline",
    ],
    owner: "Departure & Welfare Team",
  },
];

const REQUIRED_DOCUMENTS: ComplianceDocument[] = [
  {
    title: "Demand Letter & Power of Attorney",
    description:
      "Outlines job categories, headcount, basic salary, working hours, accommodation, food, and medical terms.",
    issuedBy: "Hiring Employer (Attested)",
    icon: FileText,
  },
  {
    title: "Standard Employment Contract",
    description:
      "Bilingual or English employment agreement compliant with host-country labor laws and Nepal DoFE standards.",
    issuedBy: "Hiring Employer & Candidate",
    icon: FileCheck2,
  },
  {
    title: "Guarantee Letter",
    description:
      "Formal undertaking guaranteeing worker welfare, timely salary disbursement, and repatriation coverage.",
    issuedBy: "Hiring Employer",
    icon: ShieldCheck,
  },
  {
    title: "Commercial Registration & ID",
    description:
      "Valid company trade license / CR copy and authorized signatory identification for embassy verification.",
    issuedBy: "Employer Corporate Registry",
    icon: Building2,
  },
];

const FAQS: ProcessFaq[] = [
  {
    question:
      "How long does it take to mobilize workers from Nepal to the GCC?",
    answer:
      "Once the attested Demand Letter receives DoFE prior approval, typical deployment to the UAE, Saudi Arabia, Qatar, Oman, Kuwait, or Bahrain takes 21 to 35 days depending on visa issuance and medical/biometric slot availability.",
  },
  {
    question: "Can employers conduct interviews in person in Kathmandu?",
    answer:
      "Yes. We arrange full interview logistics in Kathmandu—including hotel conference rooms, trade-testing workshops, pre-screened candidate pools, and airport/hotel hospitality for visiting HR and technical delegations.",
  },
  {
    question: "How does WASL HIRE verify technical skills before interviews?",
    answer:
      "Every technical, hospitality, or construction candidate undergoes a practical trade evaluation at accredited testing centers in Nepal, with recorded skill videos and assessment scorecards shared prior to final client interviews.",
  },
  {
    question: "What happens if a deployed worker fails medical or probation?",
    answer:
      "All candidates pass GAMCA or country-approved medical screening prior to departure. In addition, our employer agreements include a clear replacement guarantee clause during the initial probation period.",
  },
];

export default function RecruitmentProcessPage() {
  const [audience, setAudience] = useState<AudienceTab>("employer");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeSteps =
    audience === "employer" ? EMPLOYER_STEPS : CANDIDATE_STEPS;

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-[#9B0A30] selection:text-white pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-slate-950 text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#102B46]/92 via-slate-950/80 to-[#9B0A30]/75" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-[#9B0A30]/25 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-rose-300 font-semibold">
              Recruitment Process
            </span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B0A30]/25 border border-[#9B0A30]/50 text-rose-200 text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
              <span>Transparent & Compliant Mobilization</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
            >
              Our End-to-End{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-white">
                Recruitment Process
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              A structured 6-stage workflow engineered for zero-surprise
              international hiring—covering demand attestation, trade testing,
              medical clearance, visa processing, and pre-departure orientation.
            </motion.p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#9B0A30] hover:bg-[#b50d39] text-white font-bold text-sm shadow-xl shadow-[#9B0A30]/35 transition-all hover:-translate-y-0.5"
              >
                <span>Submit Manpower Demand</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white font-semibold text-sm transition-all"
              >
                <span>Apply as a Candidate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING OVERLAPPING KEY METRICS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        >
          {PROCESS_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="p-6 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${metric.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#102B46] tracking-tight">
                    {metric.value}
                  </p>
                  <span className="text-xs font-semibold text-slate-500">
                    {metric.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. INTERACTIVE 6-STAGE WORKFLOW (EMPLOYER VS CANDIDATE VIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-6 rounded-full bg-[#9B0A30]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B0A30]">
                Step-by-Step Workflow
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight">
              6-Stage Recruitment & Mobilization Roadmap
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Switch views to inspect every milestone, timeline, and compliance
              deliverable from an employer or candidate perspective.
            </p>
          </div>

          {/* Audience Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs self-start">
            <button
              type="button"
              onClick={() => setAudience("employer")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                audience === "employer"
                  ? "bg-[#102B46] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#102B46]"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Employers</span>
            </button>

            <button
              type="button"
              onClick={() => setAudience("candidate")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                audience === "candidate"
                  ? "bg-[#9B0A30] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#9B0A30]"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Candidates</span>
            </button>
          </div>
        </div>

        {/* 6-Step Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="group bg-white rounded-3xl border border-slate-200/85 p-7 shadow-sm hover:shadow-xl hover:border-[#9B0A30]/35 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle Step Watermark */}
                  <span className="absolute -top-3 right-5 text-7xl font-black text-slate-100/80 select-none pointer-events-none group-hover:text-rose-50 transition-colors">
                    {step.stepNumber}
                  </span>

                  <div className="relative z-10">
                    {/* Top Row: Icon + Timeline Pill */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#102B46] text-[#E6A23C] group-hover:bg-[#9B0A30] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#9B0A30]" />
                        {step.duration}
                      </span>
                    </div>

                    {/* Phase Tag & Title */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B0A30]">
                      Stage {step.stepNumber} • {step.phase}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#102B46] mt-1 mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {step.summary}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      {step.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Owner Footer */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Handled By:</span>
                    <span className="text-[#102B46] font-bold">
                      {step.owner}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. EMPLOYER DOCUMENTATION & COMPLIANCE CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#102B46] rounded-[2.25rem] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#9B0A30]/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Intro */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Employer Documentation</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Required Documents to Initiate Demand Approval
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To ensure 100% legal mobilization under Nepal&apos;s Department
                of Foreign Employment (DoFE) and host-country embassy rules,
                partner employers provide four standard documents. Our
                compliance team assists with templates and attestation guidance.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#9B0A30] hover:bg-[#b50d39] text-white text-xs sm:text-sm font-bold transition-all"
                >
                  <span>Request Document Templates</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 2x2 Document Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {REQUIRED_DOCUMENTS.map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/8 border border-white/12 backdrop-blur-md p-6 hover:bg-white/12 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#9B0A30] text-white flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-white mb-1.5">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {doc.description}
                    </p>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300">
                      Issued By: {doc.issuedBy}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY ASSURANCE & FAQ ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Quality Guarantees */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B0A30]">
                Risk-Free Hiring
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B46] mt-1">
                Our Quality & Welfare Guarantees
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B46]">
                    Ethical & Transparent Recruitment
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Strict adherence to DoFE regulations, clear contract terms,
                    and zero hidden surprises for employers or workers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B46]">
                    Probation Replacement Assurance
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Every deployment is backed by our employer service
                    commitment and rapid replacement support if required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#102B46]/10 text-[#102B46] flex items-center justify-center shrink-0">
                  <HeadphonesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B46]">
                    Dedicated Account Manager
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Single-point status reporting from demand submission to
                    airport arrival and onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right FAQs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B0A30]">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B46] mt-1">
                Recruitment Process FAQs
              </h2>
            </div>

            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-[#102B46]">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-[#9B0A30] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#9B0A30] via-[#7a0726] to-slate-950 p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ready to Start Your Hiring Pipeline?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base font-light leading-relaxed">
              Share your manpower requirements with our team and receive a
              tailored mobilization schedule within 24 hours.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#9B0A30] text-sm font-bold shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
              >
                <span>Submit Manpower Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/global-reach"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold transition-all"
              >
                <span>Explore Global Reach</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
