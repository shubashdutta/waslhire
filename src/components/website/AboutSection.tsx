"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import AboutSectionBg from "@/src/assets/images/AboutSectionBgImage.png";

const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Our Vision",
      tag: "Global Reach",
      body: "To become a trusted international recruitment and workforce solutions partner connecting global employers with talented professionals across the Middle East & Europe.",
    },
    {
      icon: ShieldCheck,
      title: "Ethical Practices",
      tag: "100% Compliant",
      body: "We champion complete transparency, candidate welfare, and strict adherence to international labor standards and regional government regulations at every step.",
    },
    {
      icon: Target,
      title: "Our Mission",
      tag: "Talent Mobility",
      body: "To connect businesses with the right workforce and empower individuals with meaningful employment opportunities through reliable and professional recruitment services.",
    },
  ];

  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 text-slate-900 overflow-hidden bg-slate-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none opacity-30"
        style={{
          backgroundImage: `url(${AboutSectionBg.src})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/80 via-white/70 to-slate-100/90 pointer-events-none" />{" "}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B0A30]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9B0A30]/10 border border-[#9B0A30]/20 text-[#9B0A30] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            About WASL HIRE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl  font-bold tracking-tight leading-tight mb-3 text-slate-900"
          >
            Connecting Global Talent with{" "}
            <span className="text-[#9B0A30]">Integrity</span> & Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Headquartered in Sharjah, UAE, we bridge premier international
            businesses with top-tier global talent across the Middle East and 7
            European destinations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative cursor-pointer bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-4 shadow-xl hover:shadow-2xl hover:border-[#9B0A30]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9B0A30] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-[#9B0A30]/10 border border-[#9B0A30]/20 flex items-center justify-center text-[#9B0A30] group-hover:scale-110 group-hover:bg-[#9B0A30] group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#9B0A30] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-slate-900 transition-colors">
                  <span>WASL HIRE Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl font-bold text-slate-900">
              Ready to scale your workforce or career?
            </h4>
            <p className="text-sm text-slate-500">
              Partner with Sharjah's leading international recruitment agency
              today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#9B0A30]" />
              <span>100% Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#9B0A30]" />
              <span>UAE & Europe Network</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#9B0A30] text-white font-bold text-sm rounded-xl shadow-xl shadow-[#9B0A30]/20 hover:bg-[#800828] transition-all duration-200 cursor-pointer flex-shrink-0"
          >
            <span>Explore Global Reach</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
