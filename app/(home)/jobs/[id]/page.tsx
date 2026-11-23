"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Form, Input, Select, Button, message } from "antd";
import {
  Building2,
  MapPin,
  Users,
  DollarSign,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import ApplyJobs from "@/src/components/website/ApplyJobs";

const { Option } = Select;
const { TextArea } = Input;

export interface JobDetailData {
  id: string;
  title: string;
  category: string;
  location: string;
  seatsAvailable: number;
  salaryRange: string;
  jobType: string;
  deadline: string;
  coverImage?: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  benefits: string[];
}

interface JobDetailsProps {
  job?: JobDetailData;
}

const defaultJobData: JobDetailData = {
  id: "job-101",
  title: "Housekeeping Staff",
  category: "Hospitality",
  location: "Saudi Arabia",
  seatsAvailable: 15,
  salaryRange: "SAR 1,100 - SAR 1,300",
  jobType: "Full Time",
  deadline: "Mar 30, 2026",
  coverImage:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80",
  description:
    "WASL HIRE is seeking dedicated and detail-oriented Housekeeping Staff for premier hotels and resorts across Saudi Arabia. Selected candidates will be responsible for maintaining guest rooms, public areas, and back-of-house facilities to international hospitality standards. Ideal candidates are reliable, courteous, and committed to delivering high-quality service in a fast-paced team environment.",
  responsibilities: [
    "Clean and sanitize guest rooms, suites, and public hotel areas daily",
    "Maintain strict hygiene, safety, and housekeeping quality standards",
    "Restock room amenities, linens, and supplies promptly",
    "Report any maintenance or repair issues to floor supervisors immediately",
  ],
  qualifications: [
    "High School Diploma or equivalent",
    "Minimum 1 year of prior hospitality or commercial cleaning experience preferred",
    "Basic communication skills in English or Arabic",
    "Medically fit for international deployment",
  ],
  skills: [
    "Attention to Detail",
    "Time Management",
    "Hospitality Cleaning Standards",
    "Teamwork & Reliability",
  ],
  benefits: [
    "Free Company Accommodation",
    "Duty Meals Provided",
    "Comprehensive Health Insurance",
    "Free Transportation & Visa Processing",
  ],
};

const JobDetails: React.FC<JobDetailsProps> = ({ job = defaultJobData }) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryForm] = Form.useForm();

  const handleEnquirySubmit = (values: any) => {
    setEnquiryLoading(true);
    setTimeout(() => {
      console.log("Enquiry Submitted:", { jobTitle: job.title, ...values });
      message.success(
        "Enquiry sent! One of our recruitment officers will reach out shortly.",
      );
      setEnquiryLoading(false);
      enquiryForm.resetFields();
    }, 800);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-800 pb-24">
      {/* ==================== 1. CLEAN DARK-SLATE HERO WITH VISIBLE BG IMAGE ==================== */}
      <section className="relative bg-slate-950 text-white pt-14 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Crisp Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 scale-105"
          style={{
            backgroundImage: `url('${
              job.coverImage ||
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
            }')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/75" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#9B0A30]/20 blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/jobs" className="hover:text-white transition-colors">
              Jobs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-rose-300 font-semibold">{job.title}</span>
          </nav>

          {/* Left-Aligned Editorial Header + Right Action */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B0A30]/25 border border-[#9B0A30]/50 text-rose-200 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Verified International Demand</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]"
              >
                {job.title}
              </motion.h1>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-slate-100">
                  <Building2 className="w-4 h-4 text-rose-400" />
                  {job.category}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-slate-100">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  {job.location}
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 backdrop-blur-md text-xs sm:text-sm font-semibold text-emerald-300">
                  <Users className="w-4 h-4" />
                  {job.seatsAvailable} Seats Open
                </span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="shrink-0"
            >
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#9B0A30] hover:bg-[#b50d39] text-white font-bold text-sm tracking-wide shadow-2xl shadow-[#9B0A30]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Apply For This Position</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 2. FLOATING OVERLAP KEY METRICS BAR ==================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100"
        >
          {/* Salary */}
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Monthly Salary
              </span>
              <p className="text-base sm:text-lg  font-semibold text-slate-900 mt-0.5">
                {job.salaryRange}
              </p>
            </div>
          </div>

          {/* Job Type */}
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#102B46]/10 text-[#102B46] flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Contract Type
              </span>
              <p className="text-base sm:text-lg font-semibold text-slate-900 mt-0.5">
                {job.jobType}
              </p>
            </div>
          </div>

          {/* Deadline */}
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9B0A30]/10 text-[#9B0A30] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Apply Before
              </span>
              <p className="text-base sm:text-lg font-semibold text-slate-900 mt-0.5">
                {job.deadline}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden"
          >
            {/* Overview */}
            <div className="p-6 sm:p-9 border-b border-slate-100">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-6 rounded-full bg-[#9B0A30]" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  Role Overview
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="p-6 sm:p-9 border-b border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Key Responsibilities
              </h3>
              <ul className="space-y-3.5">
                {job.responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9B0A30] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="p-6 sm:p-9 border-b border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Candidate Qualifications
              </h3>
              <ul className="space-y-3.5">
                {job.qualifications.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#102B46] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Benefits Split */}
            <div className="p-6 sm:p-9 grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50/50">
              {/* Required Skills */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits & Perks */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-4">
                  Benefits & Perks
                </h3>
                <ul className="space-y-2.5">
                  {job.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 sm:px-9 bg-[#102B46] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-base">
                  Interested in this opportunity?
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Submit your CV and passport details in under 2 minutes.
                </p>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#9B0A30] hover:bg-[#b50d39] text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0"
              >
                Apply Now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-4 lg:sticky lg:top-24 space-y-5"
          >
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg shadow-slate-900/5 overflow-hidden">
              {/* Card Header */}
              <div className="bg-[#102B46] px-6 py-5 text-white">
                <h3 className="text-lg font-extrabold">Quick Job Enquiry</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Ask our recruitment team about visa or salary details.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                <Form
                  form={enquiryForm}
                  layout="vertical"
                  onFinish={handleEnquirySubmit}
                  requiredMark={false}
                >
                  <Form.Item
                    label={
                      <span className="text-xs font-bold text-slate-700">
                        Full Name <span className="text-[#9B0A30]">*</span>
                      </span>
                    }
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                    className="mb-3.5"
                  >
                    <Input
                      placeholder="e.g. Ramesh Sharma"
                      className="h-10 rounded-xl bg-slate-50 border-slate-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="text-xs font-bold text-slate-700">
                        Email Address <span className="text-[#9B0A30]">*</span>
                      </span>
                    }
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                    className="mb-3.5"
                  >
                    <Input
                      placeholder="you@example.com"
                      className="h-10 rounded-xl bg-slate-50 border-slate-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="text-xs font-bold text-slate-700">
                        Phone Number <span className="text-[#9B0A30]">*</span>
                      </span>
                    }
                    name="phone"
                    rules={[
                      { required: true, message: "Phone number is required" },
                    ]}
                    className="mb-3.5"
                  >
                    <Input
                      addonBefore={
                        <Select defaultValue="+977" className="w-24">
                          <Option value="+977">🇳🇵 +977</Option>
                          <Option value="+971">🇦🇪 +971</Option>
                          <Option value="+966">🇸🇦 +966</Option>
                          <Option value="+974">🇶🇦 +974</Option>
                        </Select>
                      }
                      placeholder="98XXXXXXXX"
                      className="h-10 rounded-xl bg-slate-50"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="text-xs font-bold text-slate-700">
                        Current Address
                      </span>
                    }
                    name="address"
                    className="mb-3.5"
                  >
                    <Input
                      placeholder="Kathmandu, Nepal"
                      className="h-10 rounded-xl bg-slate-50 border-slate-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="text-xs font-bold text-slate-700">
                        Your Question
                      </span>
                    }
                    name="message"
                    className="mb-5"
                  >
                    <TextArea
                      rows={3}
                      placeholder="Ask about interview dates, overtime, or food/accommodation..."
                      className="rounded-xl bg-slate-50 border-slate-200 hover:border-[#9B0A30] focus:border-[#9B0A30]"
                    />
                  </Form.Item>

                  <button className="w-full h-11 rounded-xl bg-[#9B0A30] hover:bg-[#7a0726] text-white font-bold text-sm shadow-md transition-all border-none">
                    Send Enquiry
                  </button>
                </Form>
              </div>
            </div>

            {/* Trust Badge Footer under Form */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 flex items-center gap-3 text-xs text-slate-600">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800">
                  100% Verified Employer Demand
                </p>
                <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> Average response time: under 4
                  hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==================== 4. APPLICATION MODAL ==================== */}
      <ApplyJobs
        visible={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={job.title}
      />
    </div>
  );
};

export default JobDetails;
