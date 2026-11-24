"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  FileCheck2,
  Globe2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

interface MediaAsset {
  url?: string;
  title?: string;
  caption?: string;
  alt?: string;
}

export interface ServiceDetailData {
  object?: string;
  id?: string;
  name?: string;
  slug?: string;
  subtitle?: string;
  description?: string;
  displayPosition?: number;
  icon?: MediaAsset;
  mainImage?: MediaAsset;
  imageOne?: MediaAsset;
  imageTwo?: MediaAsset;
  imageThree?: MediaAsset;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonicalUrl?: string;
  };
  created_date?: string;
  updated_date?: string;
}

interface ApiRes {
  Data: ServiceDetailData | null | undefined;
}

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Ethical & Compliant Recruitment",
    desc: "Transparent documentation and strict compliance with international labor standards and government protocols.",
  },
  {
    icon: Users,
    title: "Multi-Stage Candidate Screening",
    desc: "Rigorous trade testing, skill verification, and background assessment matched to employer specifications.",
  },
  {
    icon: FileCheck2,
    title: "End-to-End Visa & Mobilization",
    desc: "Complete coordination of demand attestation, medical clearances, visa processing, and pre-departure orientation.",
  },
  {
    icon: Globe2,
    title: "Global Employer Partnerships",
    desc: "Reliable workforce deployment across GCC, European, and international industrial sectors.",
  },
];

const ServicesDetailsPage: FC<ApiRes> = ({ Data }) => {
  if (!Data || !Data.name) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-[#102B46] mb-2">
            Service Not Found
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            We couldn&apos;t load the requested service details right now.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9B0A30] text-white text-sm font-semibold hover:bg-[#820828] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const iconSrc = Data.icon?.url;
  const mainImageSrc = Data?.mainImage?.url;

  const galleryImages = [Data.imageOne, Data.imageTwo, Data.imageThree]
    .map((img, index) => ({
      src: img?.url,
      alt: img?.alt || img?.title || `${Data.name} showcase ${index + 1}`,
      caption: img?.caption || img?.title || "",
    }))
    .filter((img): img is { src: string; alt: string; caption: string } =>
      Boolean(img.src),
    );

  const formattedDate = Data.updated_date
    ? Data.updated_date.split(" ")[0]
    : Data.created_date?.split(" ")[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Hero Header */}
      <section className="relative bg-[#102B46] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102B46] via-[#102B46]/95 to-[#9B0A30]/45" />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#E6A23C]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-[#9B0A30]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-[#E6A23C] font-medium">{Data.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Badge with Service Icon */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E6A23C] text-xs font-semibold tracking-wide uppercase mb-5">
                {iconSrc ? (
                  <Image
                    src={iconSrc}
                    alt={Data.icon?.alt || Data.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>Specialized Recruitment Solution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                {Data.name}
              </h1>

              {Data.subtitle && (
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                  {Data.subtitle}
                </p>
              )}
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#9B0A30] hover:bg-[#820828] text-white text-sm font-semibold shadow-lg transition-all"
              >
                Request Manpower
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all"
              >
                Explore Job Demands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Primary Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Image Card */}
            {mainImageSrc && (
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200/70">
                <div className="relative w-full h-[280px] sm:h-[420px]">
                  <Image
                    src={mainImageSrc}
                    alt={Data.mainImage?.alt || Data.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102B46]/90 via-[#102B46]/40 to-transparent p-5 sm:p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {iconSrc && (
                      <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center p-2 shrink-0">
                        <Image
                          src={iconSrc}
                          alt={Data.icon?.alt || Data.name}
                          width={28}
                          height={28}
                          className="w-full h-full object-contain brightness-0 invert"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6A23C] block">
                        WASL HIRE Service
                      </span>
                      <p className="text-white font-bold text-sm sm:text-base">
                        {Data.name}
                      </p>
                    </div>
                  </div>

                  {formattedDate && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs text-slate-200 border border-white/15">
                      <Calendar className="w-3.5 h-3.5 text-[#E6A23C]" />
                      Updated {formattedDate}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Service Overview (Rich HTML Description) */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-200/70">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1.5 h-7 rounded-full bg-[#9B0A30]" />
                <h2 className="text-2xl font-bold text-[#102B46]">
                  Service Overview
                </h2>
              </div>

              {Data.description ? (
                <div
                  className="text-slate-600 leading-relaxed space-y-4
                    [&_p]:text-base [&_p]:leading-7
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                    [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#102B46] [&_h2]:pt-2
                    [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#102B46] [&_h3]:pt-2
                    [&_strong]:text-[#102B46] [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
              ) : (
                <p className="text-slate-600 leading-relaxed">
                  {Data.subtitle}
                </p>
              )}
            </div>

            {/* Operations & Gallery Showcase (imageOne, imageTwo, imageThree) */}
            {galleryImages.length > 0 && (
              <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-200/70">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-7 rounded-full bg-[#E6A23C]" />
                    <h2 className="text-2xl font-bold text-[#102B46]">
                      Recruitment & Mobilization in Action
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200/70 bg-slate-100 aspect-[4/3] shadow-sm"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {img.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102B46]/90 to-transparent p-3">
                          <p className="text-xs font-medium text-white">
                            {img.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Value Pillars */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-200/70">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-7 rounded-full bg-[#9B0A30]" />
                <h2 className="text-2xl font-bold text-[#102B46]">
                  Why Partner With Us
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {VALUE_PILLARS.map((pillar, idx) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#9B0A30]/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#102B46] text-[#E6A23C] flex items-center justify-center mb-3.5">
                        <PillarIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#102B46] mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Quick Summary Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/70">
              <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center p-2.5 shrink-0">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={Data.icon?.alt || Data.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Briefcase className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service Category
                  </p>
                  <h3 className="text-base font-bold text-[#102B46] leading-snug">
                    {Data.name}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9B0A30] mt-0.5 shrink-0" />
                  <span>Skilled, semi-skilled & general workforce supply</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9B0A30] mt-0.5 shrink-0" />
                  <span>Verified trade testing & client interview support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9B0A30] mt-0.5 shrink-0" />
                  <span>Full documentation, visa & deployment handling</span>
                </li>
              </ul>
            </div>

            {/* Direct CTA Card */}
            <div className="rounded-3xl bg-[#102B46] text-white p-7 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#9B0A30]/35 blur-2xl pointer-events-none" />
              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E6A23C]/20 text-[#E6A23C] text-xs font-bold uppercase tracking-wider mb-4">
                  Employer Desk
                </span>
                <h3 className="text-xl font-bold mb-2">
                  Hire Through {Data.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Submit your manpower demand letter or connect with our
                  recruitment consultants for a tailored staffing timeline.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#9B0A30] hover:bg-[#820828] text-white text-sm font-semibold shadow-lg transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Consult Our Team
                  </Link>
                  <Link
                    href="/services"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetailsPage;
