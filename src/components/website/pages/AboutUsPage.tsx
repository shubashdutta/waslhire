// "use client";

// import React, { useState, useRef } from "react";
// import Link from "next/link";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import {
//   Building2,
//   ShieldCheck,
//   Target,
//   Eye,
//   CheckCircle2,
//   ArrowRight,
//   Globe,
//   Users,
//   Sparkles,
//   Award,
//   ChevronRight,
//   FileCheck,
//   PlaneTakeoff,
//   UserCheck,
//   Compass,
//   Briefcase,
//   Scale,
// } from "lucide-react";

// export default function AboutUsPage() {
//   const [activeTab, setActiveTab] = useState<"story" | "scale" | "ethics">(
//     "story",
//   );

//   // Parallax Scroll Setup
//   const heroRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <main className="w-full min-h-screen bg-white text-slate-800 selection:bg-[#9B0A30] selection:text-white overflow-hidden">
//       {/* ==================== 1. PARALLAX HERO SECTION ==================== */}
//       <section
//         ref={heroRef}
//         className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
//       >
//         <motion.div
//           style={{ y: bgY }}
//           className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
//         >
//           <div
//             className="w-full h-full bg-cover bg-center opacity-30 scale-105"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`,
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-slate-950/30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B0A30]/25 rounded-full blur-[160px] pointer-events-none" />
//         </motion.div>

//         {/* Hero Content Layer */}
//         <motion.div
//           style={{ y: textY, opacity: opacityHero }}
//           className="relative z-10 max-w-7xl mx-auto w-full"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             {/* Left Hero Content */}
//             <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-rose-300 backdrop-blur-md">
//                 <Sparkles className="w-4 h-4 text-[#9B0A30]" />
//                 <span>Premier International Manpower Agency</span>
//               </div>

//               <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
//                 Empowering Industry. <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B0A30] via-rose-400 to-rose-200">
//                   Elevating Talent.
//                 </span>
//               </h1>

//               <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
//                 WASL HIRE bridges top-tier global talent pools with leading GCC
//                 enterprises through ethical recruitment, rigorous trade testing,
//                 and full legal compliance.
//               </p>

//               <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
//                 <Link
//                   href="/contact-us"
//                   className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9B0A30] text-white font-bold text-sm hover:bg-[#7a0726] transition-all duration-300 shadow-xl shadow-[#9B0A30]/40 hover:scale-105 active:scale-95"
//                 >
//                   <span>Partner With Us</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>

//                 <Link
//                   href="/jobs"
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white text-sm font-medium backdrop-blur-md transition-all"
//                 >
//                   <span>Explore Vacancies</span>
//                 </Link>
//               </div>
//             </div>

//             <div className="lg:col-span-5 grid grid-cols-2 gap-4">
//               <div className="col-span-2 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl hover:border-[#9B0A30]/40 transition-all">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="w-10 h-10 rounded-xl bg-[#9B0A30] flex items-center justify-center text-white">
//                     <Globe className="w-5 h-5" />
//                   </div>
//                   <span className="text-xs font-mono text-rose-300 tracking-wider">
//                     GLOBAL CORRIDORS
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-black text-white">
//                   10+ Nations Sourcing
//                 </h3>
//                 <p className="text-xs text-slate-300 mt-1">
//                   Nepal, India, Bangladesh, Sri Lanka & Philippines.
//                 </p>
//               </div>

//               <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#9B0A30]/40 transition-all">
//                 <Users className="w-7 h-7 text-rose-300 mb-2" />
//                 <h4 className="text-2xl font-bold text-white">15,000+</h4>
//                 <p className="text-[11px] text-slate-300">Placed Workers</p>
//               </div>

//               <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#9B0A30]/40 transition-all">
//                 <Award className="w-7 h-7 text-amber-300 mb-2" />
//                 <h4 className="text-2xl font-bold text-white">99%</h4>
//                 <p className="text-[11px] text-slate-300">Retention Rate</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       <section className="py-24 bg-slate-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-widest">
//               Our Identity
//             </span>
//             <h2 className="mt-2 text-2xl sm:text-5xl font-bold text-slate-900 tracking-tight">
//               Driven by Excellence, Proven by Impact
//             </h2>
//           </div>

//           {/* Tab Pill Selector */}
//           <div className="flex justify-center mb-12">
//             <div className="inline-flex p-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
//               {[
//                 { id: "story", label: "Our Story" },
//                 { id: "scale", label: "Global Scale" },
//                 { id: "ethics", label: "Ethical Code" },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id as any)}
//                   className={`px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-[#9B0A30] text-white shadow-md shadow-[#9B0A30]/30"
//                       : "text-slate-600 hover:text-slate-900"
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Animated Tab Content Panel */}
//           <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl max-w-5xl mx-auto">
//             <AnimatePresence mode="wait">
//               {activeTab === "story" && (
//                 <motion.div
//                   key="story"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
//                 >
//                   <div className="space-y-4">
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Connecting Talent with Transformation
//                     </h3>
//                     <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                       WASL HIRE was established to solve critical international
//                       manpower shortages across the Middle East. We streamline
//                       complex cross-border recruitment into a transparent,
//                       client-aligned workflow.
//                     </p>
//                     <div className="flex items-center gap-3 text-xs font-semibold text-[#9B0A30] pt-2">
//                       <CheckCircle2 className="w-4 h-4" /> Registered & Licensed
//                       Ministry Partner
//                     </div>
//                   </div>
//                   <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
//                     <img
//                       src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
//                       alt="Team"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </motion.div>
//               )}

//               {activeTab === "scale" && (
//                 <motion.div
//                   key="scale"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
//                 >
//                   <div className="space-y-4">
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       GCC Operational Footprint
//                     </h3>
//                     <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                       With administrative hubs in Dubai and testing facilities
//                       across South Asia, we deploy skilled, semi-skilled, and
//                       professional labor pools within strict client timelines.
//                     </p>
//                     <div className="flex items-center gap-3 text-xs font-semibold text-[#9B0A30] pt-2">
//                       <CheckCircle2 className="w-4 h-4" /> End-to-End Flight &
//                       Visa Logistics
//                     </div>
//                   </div>
//                   <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
//                     <img
//                       src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80"
//                       alt="Construction"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </motion.div>
//               )}

//               {activeTab === "ethics" && (
//                 <motion.div
//                   key="ethics"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
//                 >
//                   <div className="space-y-4">
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Zero Recruitment Fee Policy
//                     </h3>
//                     <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                       We enforce strict ethical recruitment standards,
//                       protecting candidate welfare and eliminating illegal
//                       placement fees to foster high long-term retention.
//                     </p>
//                     <div className="flex items-center gap-3 text-xs font-semibold text-[#9B0A30] pt-2">
//                       <CheckCircle2 className="w-4 h-4" /> 100% International
//                       Labor Standard Compliant
//                     </div>
//                   </div>
//                   <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
//                     <img
//                       src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
//                       alt="Ethics"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-widest">
//             Core Architecture
//           </span>
//           <h2 className="mt-2 text-3xl  font-bold text-slate-900 tracking-tight">
//             Our Purpose & Pillars
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* Main Mission Box */}
//           <div className="lg:col-span-8 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 p-8 sm:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group hover:border-[#9B0A30]/40 border border-transparent transition-all">
//             <div className="w-14 h-14 rounded-2xl bg-[#9B0A30] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <Target className="w-7 h-7" />
//             </div>
//             <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
//               Primary Mission
//             </span>
//             <h3 className="text-2xl sm:text-3xl font-bold mt-1 mb-4">
//               Empowering Employers & Talent Alike
//             </h3>
//             <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//               To build a seamless, ethical recruitment bridge connecting
//               high-demand enterprise sectors across the GCC with pre-screened,
//               medically fit, and technically proven professionals.
//             </p>
//           </div>

//           {/* Vision Box */}
//           <div className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-xl flex flex-col justify-between hover:border-[#9B0A30]/40 transition-all">
//             <div>
//               <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mb-6">
//                 <Compass className="w-6 h-6" />
//               </div>
//               <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-wider">
//                 Vision
//               </span>
//               <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
//                 Global Benchmark
//               </h3>
//               <p className="text-slate-600 text-xs leading-relaxed">
//                 To stand as the most trusted manpower partner in the Middle East
//                 through continuous digital screening innovation.
//               </p>
//             </div>
//           </div>

//           {/* Compliance Box */}
//           <div className="lg:col-span-6 bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-xl hover:border-[#9B0A30]/40 transition-all">
//             <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mb-4">
//               <ShieldCheck className="w-6 h-6" />
//             </div>
//             <h3 className="text-lg font-bold text-slate-900 mb-2">
//               Government Compliance
//             </h3>
//             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//               Full alignment with MOHRE guidelines, embassy attestations, and
//               regional employment laws.
//             </p>
//           </div>

//           {/* Industry Box */}
//           <div className="lg:col-span-6 bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-xl hover:border-[#9B0A30]/40 transition-all">
//             <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mb-4">
//               <Building2 className="w-6 h-6" />
//             </div>
//             <h3 className="text-lg font-bold text-slate-900 mb-2">
//               Multi-Industry Coverage
//             </h3>
//             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//               Specialized manpower deployment for Construction, Hospitality,
//               Healthcare, Manufacturing, and Logistics.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-slate-50 border-y border-gray-200 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-widest">
//               Execution Standard
//             </span>
//             <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">
//               Our 4-Stage Deployment Pipeline
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               {
//                 step: "01",
//                 icon: UserCheck,
//                 title: "Sourcing & Screening",
//                 desc: "Rigorous document verification & candidate shortlisting.",
//               },
//               {
//                 step: "02",
//                 icon: FileCheck,
//                 title: "Trade Testing",
//                 desc: "Practical hands-on technical skill evaluation in accredited centers.",
//               },
//               {
//                 step: "03",
//                 icon: ShieldCheck,
//                 title: "Visa & Attestation",
//                 desc: "Complete embassy clearance, medical checkup, and legal processing.",
//               },
//               {
//                 step: "04",
//                 icon: PlaneTakeoff,
//                 title: "Deployment & Support",
//                 desc: "Flight scheduling, reception in UAE, and post-arrival orientation.",
//               },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm relative group hover:border-[#9B0A30] hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className=" flex justify-between items-center">
//                     <span className="text-3xl font-black text-[#9B0A30]/30 group-hover:text-[#9B0A30] transition-colors">
//                       {item.step}
//                     </span>
//                     <div className="my-4">
//                       <Icon className="w-6 h-6 text-[#9B0A30]" />
//                     </div>
//                   </div>

//                   <h4 className="text-base font-bold text-slate-900 mb-1">
//                     {item.title}
//                   </h4>
//                   <p className="text-xs text-slate-600 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
//         <div className="rounded-[2.5rem] bg-gradient-to-r from-[#9B0A30] via-[#7a0726] to-[#59041b] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
//           <div className="relative z-10 max-w-3xl mx-auto space-y-6">
//             <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
//               Ready to Accelerate Your Workforce?
//             </h2>
//             <p className="text-rose-100 text-sm sm:text-base font-light">
//               Partner with WASL HIRE to secure pre-vetted, highly qualified
//               international talent tailored to your corporate expansion goals.
//             </p>

//             <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
//               <Link
//                 href="/contact-us"
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#9B0A30] text-sm font-bold shadow-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
//               >
//                 <span>Request Manpower</span>
//                 <ChevronRight className="w-4 h-4" />
//               </Link>

//               <Link
//                 href="/jobs"
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/20 hover:bg-black/30 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all"
//               >
//                 <span>Browse Vacancies</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Target,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  Sparkles,
  Award,
  ChevronRight,
  FileCheck,
  PlaneTakeoff,
  UserCheck,
  Compass,
} from "lucide-react";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<"story" | "scale" | "skill">(
    "story",
  );

  // Parallax Scroll Setup
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="w-full min-h-screen bg-white text-slate-800 selection:bg-[#9B0A30] selection:text-white overflow-hidden">
      {/* ==================== 1. PARALLAX HERO SECTION ==================== */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        >
          <div
            className="w-full h-full bg-cover bg-center opacity-30 scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B0A30]/25 rounded-full blur-[160px] pointer-events-none" />
        </motion.div>

        {/* Hero Content Layer */}
        <motion.div
          style={{ y: textY, opacity: opacityHero }}
          className="relative z-10 max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-rose-300 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#9B0A30]" />
                <span>Premier International Manpower Agency</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                Empowering Industry. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B0A30] via-rose-400 to-rose-200">
                  Elevating Talent.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
                WASL HIRE bridges top-tier global talent pools with leading GCC
                enterprises through streamlined recruitment, rigorous trade
                testing, and full legal compliance.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9B0A30] text-white font-bold text-sm hover:bg-[#7a0726] transition-all duration-300 shadow-xl shadow-[#9B0A30]/40 hover:scale-105 active:scale-95"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white text-sm font-medium backdrop-blur-md transition-all"
                >
                  <span>Explore Vacancies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl hover:border-[#9B0A30]/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#9B0A30] flex items-center justify-center text-white">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-rose-300 tracking-wider">
                    GLOBAL CORRIDORS
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">
                  10+ Nations Sourcing
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Nepal, India, Bangladesh, Sri Lanka & Philippines.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#9B0A30]/40 transition-all">
                <Users className="w-7 h-7 text-rose-300 mb-2" />
                <h4 className="text-2xl font-bold text-white">15,000+</h4>
                <p className="text-[11px] text-slate-300">Placed Workers</p>
              </div>

              <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#9B0A30]/40 transition-all">
                <Award className="w-7 h-7 text-amber-300 mb-2" />
                <h4 className="text-2xl font-bold text-white">99%</h4>
                <p className="text-[11px] text-slate-300">Retention Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-slate-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-widest">
              Our Identity
            </span>
            <h2 className="mt-2 text-2xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Driven by Excellence, Proven by Impact
            </h2>
          </div>

          {/* Tab Pill Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
              {[
                { id: "story", label: "Our Story" },
                { id: "scale", label: "Global Scale" },
                { id: "skill", label: "Trade & Skill Testing" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#9B0A30] text-white shadow-md shadow-[#9B0A30]/30"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Tab Content Panel */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === "story" && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Connecting Talent with Transformation
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      WASL HIRE was established to solve critical international
                      manpower shortages across the Middle East. We streamline
                      complex cross-border recruitment into a transparent,
                      client-aligned workflow.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-semibold text-[#9B0A30] pt-2">
                      <CheckCircle2 className="w-4 h-4" /> Registered & Licensed
                      Recruitment Partner
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "scale" && (
                <motion.div
                  key="scale"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      GCC Operational Footprint
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      With administrative coordination across the GCC and
                      sourcing networks across South and Southeast Asia, we
                      deploy skilled, semi-skilled, and professional labor pools
                      within strict client timelines.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-semibold text-[#9B0A30] pt-2">
                      <CheckCircle2 className="w-4 h-4" /> End-to-End Flight &
                      Visa Logistics
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80"
                      alt="Construction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "skill" && (
                <motion.div
                  key="skill"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Practical Trade & Skill Verification
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Every candidate undergoes practical trade evaluations,
                      technical interviews, and background checks aligned with
                      employer job specifications so teams perform from day one.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-semibold text-[#9B0A30] pt-2">
                      <CheckCircle2 className="w-4 h-4" /> Role-Specific Skill &
                      Safety Screening
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                      alt="Skill Assessment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-widest">
            Core Architecture
          </span>
          <h2 className="mt-2 text-3xl  font-bold text-slate-900 tracking-tight">
            Our Purpose & Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Mission Box */}
          <div className="lg:col-span-8 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 p-8 sm:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group hover:border-[#9B0A30]/40 border border-transparent transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#9B0A30] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
              Primary Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1 mb-4">
              Empowering Employers & Talent Alike
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To build a seamless, reliable recruitment bridge connecting
              high-demand enterprise sectors across the GCC with pre-screened,
              medically fit, and technically proven professionals.
            </p>
          </div>

          {/* Vision Box */}
          <div className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-xl flex flex-col justify-between hover:border-[#9B0A30]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-wider">
                Vision
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                Global Benchmark
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                To stand as a trusted manpower partner for international
                workforce mobilization through structured screening and fast
                deployment.
              </p>
            </div>
          </div>

          {/* Compliance Box */}
          <div className="lg:col-span-6 bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-xl hover:border-[#9B0A30]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Government Compliance
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Full alignment with labor regulations, embassy attestations, and
              regional employment documentation.
            </p>
          </div>

          {/* Industry Box */}
          <div className="lg:col-span-6 bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-xl hover:border-[#9B0A30]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Multi-Industry Coverage
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Specialized manpower deployment for Construction, Hospitality,
              Healthcare, Manufacturing, and Logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#9B0A30] uppercase tracking-widest">
              Execution Standard
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">
              Our 4-Stage Deployment Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: UserCheck,
                title: "Sourcing & Screening",
                desc: "Rigorous document verification & candidate shortlisting.",
              },
              {
                step: "02",
                icon: FileCheck,
                title: "Trade Testing",
                desc: "Practical hands-on technical skill evaluation in accredited centers.",
              },
              {
                step: "03",
                icon: ShieldCheck,
                title: "Visa & Attestation",
                desc: "Complete embassy clearance, medical checkup, and legal processing.",
              },
              {
                step: "04",
                icon: PlaneTakeoff,
                title: "Deployment & Support",
                desc: "Flight scheduling, reception abroad, and post-arrival onboarding.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm relative group hover:border-[#9B0A30] hover:shadow-xl transition-all duration-300"
                >
                  <div className=" flex justify-between items-center">
                    <span className="text-3xl font-black text-[#9B0A30]/30 group-hover:text-[#9B0A30] transition-colors">
                      {item.step}
                    </span>
                    <div className="my-4">
                      <Icon className="w-6 h-6 text-[#9B0A30]" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#9B0A30] via-[#7a0726] to-[#59041b] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Ready to Accelerate Your Workforce?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base font-light">
              Partner with WASL HIRE to secure pre-vetted, highly qualified
              international talent tailored to your corporate expansion goals.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#9B0A30] text-sm font-bold shadow-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Manpower</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/20 hover:bg-black/30 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all"
              >
                <span>Browse Vacancies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
