"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  FileCheck,
  ShieldCheck,
  PlaneTakeoff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Building2,
  Award,
} from "lucide-react";

import HowWeWork from "@/src/assets/images/howWeWork.png";

export default function HowWeWorkPage() {
  const [activePhase, setActivePhase] = useState(1);

  // Parallax Scroll Setup for Hero Section
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const phases = [
    {
      id: 1,
      title: "Phase 01: Requirements & Sourcing",
      subtitle: "Aligning with employer needs & global talent acquisition",
      icon: Users,
      steps: [
        {
          title: "Employer Requirement Analysis",
          desc: "Understanding specific job descriptions, skill sets, and vacancy numbers.",
        },
        {
          title: "Recruitment Planning",
          desc: "Designing targeted sourcing strategies across our global corridors.",
        },
        {
          title: "Candidate Sourcing",
          desc: "Identifying pre-qualified candidates through our verified database.",
        },
      ],
    },
    {
      id: 2,
      title: "Phase 02: Screening & Trade Testing",
      subtitle: "Rigorous evaluation for uncompromised quality",
      icon: FileCheck,
      steps: [
        {
          title: "CV & Profile Screening",
          desc: "Reviewing professional history, credentials, and background suitability.",
        },
        {
          title: "Technical Trade Testing",
          desc: "Conducting hands-on practical skill evaluations in accredited testing centers.",
        },
        {
          title: "Employer Interview Coordination",
          desc: "Facilitating direct virtual or physical interviews with the hiring partners.",
        },
      ],
    },
    {
      id: 3,
      title: "Phase 03: Documentation & Visa Processing",
      subtitle: "Full legal compliance and government attestation",
      icon: ShieldCheck,
      steps: [
        {
          title: "Documentation & Verification",
          desc: "Validating educational and professional certificates legally.",
        },
        {
          title: "Medical Clearances",
          desc: "Ensuring complete health and fitness compliance for employment.",
        },
        {
          title: "Visa & Work Authorization",
          desc: "Managing official embassy approvals and regional labor regulations.",
        },
      ],
    },
    {
      id: 4,
      title: "Phase 04: Deployment & Post-Placement",
      subtitle: "Smooth transition to the workplace",
      icon: PlaneTakeoff,
      steps: [
        {
          title: "Flight Scheduling & Logistics",
          desc: "Organizing secure travel arrangements from home country to the UAE or Europe.",
        },
        {
          title: "On-Site Arrival & Reception",
          desc: "Welcoming candidates and coordinating orientation support.",
        },
        {
          title: "Continuous Post-Placement Follow-up",
          desc: "Maintaining ongoing communication to ensure long-term retention.",
        },
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-800 selection:bg-[#9B0A30] selection:text-white">
      {/* <section
        ref={heroRef}
        className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-95 scale-105 "
            style={{
              backgroundImage: `url(${HowWeWork?.src})`,
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B0A30]/20 rounded-full blur-[150px] pointer-events-none" />
        </motion.div>
      </section> */}

      <section
        ref={heroRef}
        className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[140%] -top-[20%] pointer-events-none"
        >
          <div
            className="absolute inset-0 w-full h-full  bg-contain bg-center opacity-95 scale-105"
            style={{
              backgroundImage: `url(${HowWeWork?.src})`,
            }}
          />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {phases.map((phase) => {
            const Icon = phase.icon;
            const isActive = activePhase === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#9B0A30] text-white border-[#9B0A30] shadow-xl shadow-[#9B0A30]/30 scale-[1.02]"
                    : "bg-white text-slate-700 border-gray-200 hover:border-[#9B0A30]/40 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isActive ? "bg-white/20 text-white" : "bg-[#9B0A30]/10 text-[#9B0A30]"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold ${isActive ? "text-rose-200" : "text-slate-400"}`}
                  >
                    0{phase.id}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">
                    {phase.title.split(":")[1]}
                  </h3>
                  <p
                    className={`text-[11px] mt-1 line-clamp-1 ${isActive ? "text-rose-100" : "text-slate-500"}`}
                  >
                    {phase.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {phases.map((phase) => {
          if (phase.id !== activePhase) return null;
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-gray-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B0A30]/10 text-[#9B0A30] text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-4 h-4" />
                  <span>Phase Overview</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {phase.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  {phase.subtitle}. We follow strict international benchmarks to
                  guarantee that every employer receives peak workforce
                  productivity and every candidate enjoys secure employment.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#9B0A30] text-white text-xs font-bold shadow-md hover:bg-[#7a0726] transition-all"
                  >
                    <span>Start Hiring Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {phase.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-gray-100 p-6 rounded-2xl flex items-start gap-4 transition-all hover:border-[#9B0A30]/30 hover:bg-white shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#9B0A30] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ==================== 3. WHY OUR PROCESS WORKS ==================== */}
      <section className="py-10 bg-slate-700 rounded-2xl text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              Unrivaled Reliability
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Our Process Works So Effectively
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl">
              <ShieldCheck className="w-8 h-8 text-[#9B0A30] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Absolute Transparency
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Zero hidden fees, clear agreements, and open communication
                channels across every stage of deployment.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl">
              <Award className="w-8 h-8 text-[#9B0A30] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Rigorous Quality Checks
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Practical evaluations and structured interviews guarantee that
                candidates match exact technical expectations.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl">
              <Building2 className="w-8 h-8 text-[#9B0A30] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                MOHRE & Legal Compliance
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Full adherence to United Arab Emirates labor standards, embassy
                regulations, and destination guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. CALL TO ACTION ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#9B0A30] via-[#7a0726] to-slate-950 p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ready to Experience Seamless Hiring?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base font-light">
              Let WASL HIRE manage your end-to-end recruitment needs while you
              focus on scaling your enterprise.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#9B0A30] text-sm font-bold shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
              >
                <span>Request Manpower</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
