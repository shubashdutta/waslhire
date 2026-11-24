"use client";

import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Award,
  Users,
  ShieldCheck,
  Handshake,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ClientsRes {
  res: any;
}

const ClientPage: FC<ClientsRes> = ({ res }) => {
  console.log("🚀 ~ ClientPage ~ res:", res);
  const [currentPage, setCurrentPage] = useState(
    res?.data?.data?.currentPage || 1,
  );

  const records = res?.data?.data?.records || [];
  const totalRecords = res?.data?.data?.totalRecords || 0;
  const totalPages = res?.data?.data?.totalPages || 1;

  const itemsPerPage = 10;

  const paginatedRecords = records.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Pagination controls
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // Statistics
  const stats = [
    {
      icon: Building2,
      value: `${totalRecords}+`,
      label: "Trusted Partners",
    },
    {
      icon: Globe2,
      value: "GCC",
      label: "Global Reach",
    },
    {
      icon: Users,
      value: "Multiple",
      label: "Industries Served",
    },
    {
      icon: ShieldCheck,
      value: "Trusted",
      label: "Business Network",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-[480px] flex items-center bg-[#091B2D] text-white overflow-hidden">
        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#091B2D] via-[#102B46]/95 to-[#650B29]/80" />

        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/10" />

        <div className="absolute -right-20 -top-20 w-[350px] h-[350px] rounded-full border border-white/10" />

        <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />

        <div className="max-w-7xl w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}

          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <ChevronRight size={15} />

            <span className="text-rose-300 font-semibold">Our Clients</span>
          </nav>

          <div className="max-w-3xl">
            {/* Label */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-300/20 bg-rose-300/10 text-rose-200 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} />
              Our Global Network
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Building Trust.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-white">
                Connecting Businesses.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-slate-300 text-sm sm:text-lg leading-8 max-w-2xl mt-7"
            >
              Strong partnerships create stronger opportunities. Discover the
              organizations that trust WASL HIRE for reliable recruitment and
              workforce solutions across the Middle East and beyond.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#9B0A30] hover:bg-[#7e0827] rounded-xl text-sm font-bold transition-all shadow-lg shadow-rose-950/30"
              >
                Partner With Us
                <ArrowRight size={17} />
              </Link>

              <a
                href="#our-clients"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/20 hover:bg-white/10 rounded-xl text-sm font-semibold transition-all"
              >
                Explore Our Clients
                <ChevronRight size={17} />
              </a>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-16 pt-7 border-t border-white/10 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Handshake size={17} className="text-rose-300" />
              Long-term Partnerships
            </span>

            <span className="flex items-center gap-2">
              <Globe2 size={17} className="text-rose-300" />
              International Network
            </span>

            <span className="flex items-center gap-2">
              <Award size={17} className="text-rose-300" />
              Trusted Workforce Solutions
            </span>
          </div>
        </div>
      </section>

      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 sm:gap-4 p-5 sm:p-7 ${
                  index !== 3 ? "lg:border-r border-slate-100" : ""
                } ${
                  index < 2 ? "border-b lg:border-b-0 border-slate-100" : ""
                }`}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-rose-50 flex items-center justify-center">
                  <Icon className="text-[#9B0A30]" size={23} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#102B46]">
                    {item.value}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-slate-500 font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="our-clients"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24"
      >
        <div className="mb-10">
          <div className="flex items-center gap-2 text-[#9B0A30] text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#9B0A30]" />
            Our Valued Partners
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B46] tracking-tight">
            The Companies
            <br className="hidden sm:block" />
            <span className="text-[#9B0A30]">Behind Our Success.</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-7 mt-4 max-w-xl">
            We are proud to work alongside organizations that value quality,
            reliability, and long-term workforce partnerships.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-slate-100 py-4 mb-7">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Building2 size={17} className="text-[#9B0A30]" />

            <span>
              <strong className="text-[#102B46]">{records.length}</strong>{" "}
              Trusted Companies
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block text-xs font-semibold text-slate-400 uppercase tracking-wider mr-3">
              Our Partner Directory
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev: any) => Math.max(1, prev - 1))
              }
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-[#102B46] hover:text-white hover:border-[#102B46] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev: any) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages || totalPages === 0}
              aria-label="Next page"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#9B0A30] text-white hover:bg-[#7e0827] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {paginatedRecords?.length > 0 ? (
          <>
            {/* Client Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {paginatedRecords.map((v: any, index: number) => (
                  <motion.div
                    layout
                    key={v?.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.035,
                    }}
                    className="group relative bg-white rounded-2xl border border-slate-200 hover:border-rose-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 overflow-hidden"
                  >
                    {/* Top Accent */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#102B46] via-[#9B0A30] to-rose-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    {/* Client Logo */}
                    <div className="relative h-40 sm:h-44 flex items-center justify-center p-7 bg-white">
                      {v?.image?.url ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={v.image.url}
                            alt={
                              v?.image?.title || v?.clientName || "Client logo"
                            }
                            fill
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 20vw"
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center">
                          <Building2 size={36} className="text-slate-300" />
                        </div>
                      )}
                    </div>

                    {/* Client Name */}
                    <div className="relative px-4 py-4 bg-slate-50/80 border-t border-slate-100 group-hover:bg-rose-50/40 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={17}
                          className="text-[#9B0A30] shrink-0 mt-0.5"
                        />

                        <h3 className="text-sm font-bold text-[#102B46] leading-5 line-clamp-2">
                          {v?.clientName || "Our Valued Partner"}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-5 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
              <Building2 size={28} className="text-slate-400" />
            </div>

            <h3 className="text-lg font-bold text-[#102B46]">
              No Clients Available
            </h3>

            <p className="text-sm text-slate-500 mt-2 text-center">
              Our client directory will be updated soon.
            </p>
          </div>
        )}
      </section>

      <section className="relative overflow-hidden bg-[#091B2D]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B46] via-[#102B46] to-[#710C2D]" />

        <div className="absolute -right-20 -top-40 w-96 h-96 rounded-full border border-white/10" />

        <div className="absolute -right-10 -top-32 w-72 h-72 rounded-full border border-white/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-[0.2em] mb-5">
                <Handshake size={17} />
                Let's Build Something Together
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your Business Deserves
                <br className="hidden sm:block" />
                <span className="text-rose-300">The Right Workforce.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-7 mt-5 max-w-xl">
                Join our growing network of business partners. Let WASL HIRE
                help you find the right talent to move your business forward.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-white text-[#9B0A30] font-bold text-sm hover:bg-rose-50 transition-all shadow-2xl"
              >
                Become a Partner
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <span className="text-xs text-slate-400">
                Let's grow together.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientPage;
