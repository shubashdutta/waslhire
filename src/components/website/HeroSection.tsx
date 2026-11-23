"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import HerosectionImage from "@/src/assets/images/HeroSectionImage.jpeg";
const Hero = () => {
  const [heroData, setHeroData] = useState<any>(null);
  console.log("🚀 ~ Hero ~ heroData:", heroData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const response = await fetch(
          "https://api.synnetinternational.com/api/v1/home",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch hero content");
        }

        const data = await response.json();
        setHeroData(data);
      } catch (error) {
        console.error(
          "Error fetching hero data, using default fallback:",
          error,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchHeroData();
  }, []);

  const fullTitle =
    heroData?.data?.title || "Strategic Advisory for, Growth & Success.";
  const parts = fullTitle.split(",");
  const mainTitle = parts[0];
  const highlightedTitle = parts.slice(1).join(",");

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c" // Replace with your background image path or import
          alt="Background Office"
          fill
          priority
          className="object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-block bg-[#9B0A30]/30 border border-[#9B0A30]/50 text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
            YOUR GROWTH. OUR STRATEGY. INTEGRATED SUCCESS
          </div>

          <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">
            {mainTitle}
            {highlightedTitle && (
              <span className="text-[#ec3c6b]">{highlightedTitle.trim()}</span>
            )}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {heroData?.data?.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-[#9B0A30] hover:bg-[#800828] text-white font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
            >
              Learn More
              <span className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center gap-8">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                2M+
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Real result clients.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative  w-full max-w-md h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={heroData?.data?.image?.url}
              alt="Consulting Team"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold text-gray-900">
                100% qualified professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
