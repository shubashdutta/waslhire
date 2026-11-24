"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  Users,
  FileCheck,
  ShieldCheck,
  PlaneTakeoff,
  ArrowRight,
  Building2,
  Award,
} from "lucide-react";

import HowWeWork from "@/src/assets/images/howWeWork.png";

export default function HowWeWorkPage() {
  const [activePhase, setActivePhase] = useState(1);

  // Parallax Scroll Setup for Hero Section
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(heroScrollYProgress, [0, 1], ["0%", "30%"]);

  // Scroll-Driven Horizontal Scroll Setup for Phase Showcase
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: processScrollYProgress } = useScroll({
    target: processRef,
    offset: ["start start", "end end"],
  });

  const horizontalX = useTransform(
    processScrollYProgress,
    [0, 1],
    ["0%", "-75%"],
  );

  // Sync activePhase with scroll progress
  useMotionValueEvent(processScrollYProgress, "change", (latest: number) => {
    const phase = Math.round(latest * 3) + 1;
    setActivePhase(Math.min(Math.max(phase, 1), 4));
  });

  // Scroll to phase position when clicking phase button
  const handlePhaseScroll = (phaseId: number) => {
    if (!processRef.current) return;
    const sectionTop =
      window.scrollY + processRef.current.getBoundingClientRect().top;
    const scrollDistance = Math.max(
      0,
      processRef.current.offsetHeight - window.innerHeight,
    );
    const targetY = sectionTop + (scrollDistance * (phaseId - 1)) / 3;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

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
    <main className="w-full min-h-screen overflow-x-clip bg-[#F4F7FA] text-slate-800 selection:bg-[#9B0A30] selection:text-white">
      <section
        ref={heroRef}
        className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[140%] -top-[20%] pointer-events-none"
        >
          <div
            className="absolute inset-0 w-full h-full bg-contain bg-center opacity-95 scale-105"
            style={{
              backgroundImage: `url(${HowWeWork?.src})`,
            }}
          />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase) => {
            const Icon = phase.icon;
            const isActive = activePhase === phase.id;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => handlePhaseScroll(phase.id)}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#9B0A30] text-white border-[#9B0A30] shadow-xl shadow-[#9B0A30]/30 scale-[1.02]"
                    : "bg-white text-slate-700 border-gray-200 hover:border-[#9B0A30]/40 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#9B0A30]/10 text-[#9B0A30]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? "text-rose-200" : "text-slate-400"
                    }`}
                  >
                    0{phase.id}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">
                    {phase.title.split(":")[1]}
                  </h3>
                  <p
                    className={`text-[11px] mt-1 line-clamp-1 ${
                      isActive ? "text-rose-100" : "text-slate-500"
                    }`}
                  >
                    {phase.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section
        ref={processRef}
        className="relative z-20 w-full bg-[#F4F7FA]"
        style={{ height: `${phases.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-[#F4F7FA]">
          <div className="relative flex-1 overflow-hidden my-3">
            <motion.div
              style={{ x: horizontalX }}
              className="flex h-full w-[400%] will-change-transform"
            >
              {phases.map((phase) => {
                const Icon = phase.icon;

                return (
                  <div
                    key={phase.id}
                    className="flex h-full w-1/4 flex-shrink-0 items-center justify-center px-5 py-8 sm:px-8 lg:px-12"
                  >
                    <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-14">
                      {/* LEFT COLUMN */}
                      <div>
                        <div className="mb-5 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102B46] text-[#E6A23C] shadow-lg sm:h-14 sm:w-14">
                            <Icon size={25} strokeWidth={1.6} />
                          </div>

                          <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9B0A30]">
                              Phase 0{phase.id}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              Recruitment Journey
                            </p>
                          </div>
                        </div>

                        <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-[#102B46] sm:text-3xl lg:text-[42px]">
                          {phase.title}
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                          {phase.subtitle}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="h-1 w-12 rounded-full bg-[#9B0A30]" />

                          <span className="text-xs font-medium text-slate-500">
                            0{phase.id} / 04
                          </span>
                        </div>

                        <Link
                          href="/contact-us"
                          className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#102B46] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#9B0A30]"
                        >
                          Discuss Your Requirements
                          <ArrowRight size={16} />
                        </Link>
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="relative">
                        <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#E6A23C]/15 blur-2xl" />

                        <div className="relative rounded-[1.5rem] border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_15px_50px_rgba(16,43,70,0.07)]">
                          {/* CARD HEADER */}
                          <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                                Process Overview
                              </p>

                              <h3 className="mt-2 text-lg font-semibold text-[#102B46]">
                                Key Activities
                              </h3>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9B0A30]/10 text-[#9B0A30]">
                              <Icon size={21} />
                            </div>
                          </div>

                          {/* PROCESS STEPS */}
                          <div className="space-y-4">
                            {phase.steps.map((step, index) => (
                              <div key={index} className="group flex gap-4">
                                <div className="flex flex-col items-center">
                                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#9B0A30] text-xs font-medium text-white">
                                    0{index + 1}
                                  </div>

                                  {index !== phase.steps.length - 1 && (
                                    <div className="mt-2 h-full min-h-7 w-px bg-slate-200" />
                                  )}
                                </div>

                                <div className="pb-2">
                                  <h4 className="text-sm font-semibold leading-6 text-[#102B46] transition-colors group-hover:text-[#9B0A30] sm:text-base">
                                    {step.title}
                                  </h4>

                                  <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                                    {step.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* CARD FOOTER */}
                          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-4">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                              WASL HIRE
                            </span>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9B0A30]">
                              PHASE 0{phase.id}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
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
