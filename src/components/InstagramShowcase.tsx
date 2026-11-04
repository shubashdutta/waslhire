"use client";

import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "animate.css";
import instagram from "@/src/assets/images/InstgramShowCase.png";

export interface InstagramShowcaseProps {
  instagramUrl?: string;
}

const DEFAULT_INSTAGRAM_URL = "https://www.instagram.com/waslgroup/?hl=en";

const InstagramShowcase = ({
  instagramUrl = DEFAULT_INSTAGRAM_URL,
}: InstagramShowcaseProps = {}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation once when visible
        }
      },
      { threshold: 0.2 }, // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`relative w-full max-w-md mx-auto ${
              isVisible ? "animate__animated animate__fadeInLeft" : "opacity-0"
            }`}
          >
            <div className="relative w-full aspect-[9/16] overflow-hidden">
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[110px] h-[16px] rounded-full z-20" />

              <div className="absolute inset-[10px] overflow-hidden">
                <Image
                  src={instagram}
                  alt="WASL HIRE Instagram Feed"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col gap-6 items-start ${
              isVisible ? "animate__animated animate__fadeInRight" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9B0A30]/10 border border-[#9B0A30]/20 text-xs font-semibold tracking-widest uppercase text-[#9B0A30]">
              <Camera className="w-4 h-4" />
              Social Community
            </div>

            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Check out our Instagram for daily updates
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Stay connected with our latest international recruitment projects,
              visa updates, behind-the-scenes content, and daily job
              announcements.
            </p>

            <a
              href={DEFAULT_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold transition-all duration-300 hover:bg-[#9B0A30] shadow-lg hover:shadow-[#9B0A30]/30 mt-2"
            >
              <Camera className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
