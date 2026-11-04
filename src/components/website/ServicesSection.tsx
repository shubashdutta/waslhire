"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
  bgImage: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "International Recruitment",
    description:
      "Connecting employers with qualified candidates from international talent markets to fulfill specialized staffing demands.",
    tags: ["GLOBAL TALENT", "TAILORED SOURCING"],
    bgImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Manpower Supply",
    description:
      "Workforce sourcing and manpower supply solutions across multiple industries, subject to licensing standards.",
    tags: ["WORKFORCE SUPPLY", "CROSS-INDUSTRY"],
    bgImage:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Skilled Workforce Recruitment",
    description:
      "Sourcing qualified engineers, supervisors, technicians, skilled tradespeople, and certified professionals.",
    tags: ["ENGINEERS & TECHS", "SKILLED TRADES"],
    bgImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "General Labour Supply",
    description:
      "Deploying general workers and site personnel to match project-specific operational requirements.",
    tags: ["GENERAL WORKERS", "PROJECT SUPPORT"],
    bgImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Permanent Staffing",
    description:
      "Identifying, vetting, and hiring talent for long-term organizational success and core corporate growth.",
    tags: ["LONG-TERM TALENT", "CORE PLACEMENT"],
    bgImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Temporary & Contract Staffing",
    description:
      "Agile workforce supply tailored for short-term assignments, seasonal surges, and project demands.",
    tags: ["SEASONAL STAFFING", "FLEXIBLE CONTRACTS"],
    bgImage:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Executive Search",
    description:
      "Targeted headhunting for senior executives, directors, and specialized management positions.",
    tags: ["LEADERSHIP", "HEADHUNTING"],
    bgImage:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "European Recruitment",
    description:
      "Connecting candidates with career opportunities across Portugal, Malta, Serbia, Greece, Moldova, Romania, and Germany.",
    tags: ["EU DESTINATIONS", "CAREER PATHWAYS"],
    bgImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Screening & Selection",
    description:
      "Comprehensive evaluation of resumes, background qualifications, technical skills, and job suitability.",
    tags: ["CV SCREENING", "SKILL VERIFICATION"],
    bgImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "HR & Workforce Consultancy",
    description:
      "Strategic guidance in workforce planning, recruitment coordination, and international talent acquisition.",
    tags: ["WORKFORCE PLANNING", "HR ADVISORY"],
    bgImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[500vh] bg-slate-50 text-slate-900 py-4"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9B0A30]/10 border border-[#9B0A30]/20 text-[11px] font-bold tracking-widest uppercase text-[#9B0A30] w-max shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                WHAT WE DO
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Our Services
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md md:max-w-lg text-base">
              WASL HIRE delivers comprehensive recruitment and workforce
              solutions across industries, connecting global talent with leading
              employers through ethical practices and proven expertise.
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden max-w-7xl mx-auto">
          <motion.div style={{ x }} className="flex gap-8 items-center">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative w-[420px] sm:w-[480px] h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col justify-between p-8 bg-slate-950 border border-slate-800 flex-shrink-0 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 pointer-events-none" />

                {/* Top Tags */}
                <div className="relative z-10 flex flex-wrap gap-2.5">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center mt-auto pb-2">
                  <h3 className="text-3xl font-extrabold text-white mb-3 leading-tight group-hover:text-[#ff3366] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 px-2">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold tracking-wider group-hover:bg-[#9B0A30] group-hover:border-[#9B0A30] transition-all duration-300 shadow-xl uppercase">
                    <span>VIEW MORE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
