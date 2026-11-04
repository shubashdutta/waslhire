"use client";

import { useEffect, useRef, useState } from "react";
import {
  FileText,
  UserCheck,
  ShieldCheck,
  Briefcase,
  ClipboardCheck,
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Submit Requirement",
    description:
      "Employers specify job roles, skills, and numbers required for their open positions.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Rigorous Vetting",
    description:
      "Our expert team screens, interviews, and runs technical skill tests to shortlist elite talent.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Compliance & Visas",
    description:
      "We handle documentation, legal compliance, medicals, and travel arrangements end-to-end.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Deployment & Success",
    description:
      "Candidates arrive on-site fully prepared and ready to contribute from day one.",
    icon: Briefcase,
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9B0A30]/10 border border-[#9B0A30]/20 text-[10px] font-bold tracking-widest uppercase text-[#9B0A30] mb-4">
            <ClipboardCheck className="w-3 h-3" />
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            How WASL HIRE Works
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A transparent, fast, and compliant 4-step recruitment workflow
            designed to connect global employers with elite talent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-[#9B0A30]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex  justify-between items-center gap-2 mb-2">
                  <div className=" flex justify-between  items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#9B0A30] text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold text-[#9B0A30] tracking-widest uppercase">
                      Step {step.step}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#9B0A30]/10 flex items-center justify-center mb-5 text-[#9B0A30]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Icon */}

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
