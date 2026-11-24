"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Search,
  MapPin,
  Briefcase,
  Users,
  Clock,
  DollarSign,
  ArrowRight,
  Filter,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import JobsHeroSectionImage from "@/src/assets/images/JobsHeroSectionImage.png";
import ApplyJobs from "../ApplyJobs";

// ==============================
// TYPES
// ==============================

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  description: string;
  employment_type: string;
  experience_level: string;
  location: string;
  salary_range: string;
  seats: number;
  application_deadline?: string;
  created_date?: string;
  benefits?: string[];
  qualifications?: string[];
  keyResponsibilities?: string[];
  skillsAndTechnologies?: string[];
}

interface ApiResponse {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  next: number | null;
  pagingCounter: number;
  perPage: number;
  prev: number | null;
  recordShown: number;
  records: Job[];
}

interface JobsData {
  apiRes: ApiResponse;
}

export default function JobsPage({ apiRes }: JobsData) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const heroRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  const jobs = apiRes?.records || [];

  const categories = useMemo(() => {
    const departments = jobs.map((job) => job.department).filter(Boolean);

    return ["All", ...Array.from(new Set(departments))];
  }, [jobs]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const filteredJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      const matchesCategory =
        selectedCategory === "All" || job.department === selectedCategory;

      const search = searchQuery.toLowerCase().trim();

      const matchesSearch =
        job.title?.toLowerCase().includes(search) ||
        job.location?.toLowerCase().includes(search) ||
        job.department?.toLowerCase().includes(search) ||
        job.employment_type?.toLowerCase().includes(search) ||
        job.description?.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });

    // Sort jobs
    return [...filtered].sort((a, b) => {
      if (sortOrder === "newest") {
        return (
          new Date(b.created_date || 0).getTime() -
          new Date(a.created_date || 0).getTime()
        );
      }

      if (sortOrder === "oldest") {
        return (
          new Date(a.created_date || 0).getTime() -
          new Date(b.created_date || 0).getTime()
        );
      }

      if (sortOrder === "salary") {
        const salaryA = Number(
          a.salary_range?.match(/[\d,]+/g)?.[0]?.replace(/,/g, "") || 0,
        );

        const salaryB = Number(
          b.salary_range?.match(/[\d,]+/g)?.[0]?.replace(/,/g, "") || 0,
        );

        return salaryB - salaryA;
      }

      return 0;
    });
  }, [jobs, selectedCategory, searchQuery, sortOrder]);

  const handleOpenModal = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setIsModalOpen(true);
  };

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortOrder("newest");
  };

  const currentPage = apiRes?.currentPage || 1;
  const hasNext = apiRes?.hasNext || false;
  const hasPrevious = apiRes?.hasPrevious || false;

  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-800 selection:bg-[#9B0A30] selection:text-white">
      <section
        ref={heroRef}
        className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        >
          <div
            className="w-full h-full bg-cover bg-center opacity-40 scale-105"
            style={{
              backgroundImage: `url(${JobsHeroSectionImage.src})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-700/40 to-slate-800/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-950/20 to-transparent" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B0A30]/25 rounded-full blur-[150px] pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: opacityHero }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-rose-300 backdrop-blur-md mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#9B0A30]" />

            <span>Global Career Portals</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Find Your Next International <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B0A30] via-rose-400 to-rose-200">
              Career Opportunity
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Explore active job vacancies across the UAE, Middle East, and
            selected European destinations tailored to your professional
            experience.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-gray-100">
            {/* SEARCH */}

            <div className="relative w-full flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

              <input
                type="text"
                placeholder="Search by job title, keyword, or country (e.g., UAE, Qatar, Engineer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#9B0A30] focus:ring-1 focus:ring-[#9B0A30] transition-all"
              />
            </div>

            {/* SORT */}

            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Sort By:
              </span>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-slate-700 text-sm focus:outline-none focus:border-[#9B0A30] w-full md:w-48"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="salary">Salary: High to Low</option>
              </select>
            </div>
          </div>

          {/* DYNAMIC CATEGORIES */}

          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Categories:
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#9B0A30] text-white shadow-md shadow-[#9B0A30]/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* JOB COUNT */}

        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold text-slate-500">
            Showing{" "}
            <span className="text-slate-900 font-bold">
              {filteredJobs.length}
            </span>{" "}
            available positions
          </p>
        </div>

        {/* NO JOBS */}

        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />

            <h3 className="text-lg font-bold text-slate-800">
              No jobs found matching your criteria
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Try searching with different keywords or clearing filters.
            </p>

            <button
              onClick={handleResetFilters}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#9B0A30] text-white text-xs font-bold shadow-md hover:bg-[#7a0726]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* JOB CARDS */

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-[2rem] p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#9B0A30]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* CATEGORY & TYPE */}

                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#9B0A30]/10 text-[#9B0A30] text-[11px] font-bold uppercase tracking-wider">
                      {job.department}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                      {job.employment_type}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#9B0A30] transition-colors mb-3">
                    {job.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {job.description
                      ?.replace(/<[^>]*>/g, " ")
                      .replace(/\s+/g, " ")
                      .trim()}
                  </p>

                  {/* JOB DETAILS */}

                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-gray-100 mb-6">
                    <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                      <MapPin className="w-4 h-4 text-[#9B0A30] flex-shrink-0" />

                      <span className="truncate">{job.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                      <Users className="w-4 h-4 text-[#9B0A30] flex-shrink-0" />

                      <span>{job.seats} Vacancies</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                      <Clock className="w-4 h-4 text-[#9B0A30] flex-shrink-0" />

                      <span>{job.experience_level}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-800 text-xs font-bold">
                      <DollarSign className="w-4 h-4 text-emerald-600 flex-shrink-0" />

                      <span className="truncate">{job.salary_range}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-all"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleOpenModal(job.title)}
                    className="w-full py-3 rounded-xl bg-[#9B0A30] hover:bg-[#7a0726] text-white text-xs font-bold text-center shadow-md shadow-[#9B0A30]/20 transition-all flex items-center justify-center gap-1"
                  >
                    <span>Apply Now</span>

                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 flex items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing page{" "}
            <span className="font-bold text-slate-800">{currentPage}</span>
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={!hasPrevious}
              className="p-2.5 rounded-xl border border-gray-200 bg-white text-slate-400 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="w-10 h-10 rounded-xl bg-[#9B0A30] text-white text-xs font-bold flex items-center justify-center shadow-md">
              {currentPage}
            </span>

            <button
              disabled={!hasNext}
              className="p-2.5 rounded-xl border border-gray-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ApplyJobs
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJobTitle}
      />
    </main>
  );
}
