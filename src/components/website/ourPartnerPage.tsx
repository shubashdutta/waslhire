"use client";

import React from "react";

const PARTNERS = [
  {
    name: "jobscater",
    logoUrl: "https://np.jobscater.com/logo.png",
  },
  {
    name: "kumari job",
    logoUrl: "https://www.kumarijob.com/soft-assets/images/logo.svg",
  },
  {
    name: "Kathmandu Expo",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yw-snzvr1dB99MdyTeuZDtJJtizIhJhTmfWDX1eQooWLO1yMOjmOyHqb&s=10",
  },
  {
    name: "Valley Builders",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U4KEE74W9Msljtwevv_kp0GqOifPQ4bmXEiubxUsC2PE-5PhM91IQDo&s=10",
  },
  {
    name: "Home Experts",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcoJ3Yw5mPv6dNRgi8dhSaJPS6Imi5Ro1RpmUap5SANcgU0kPcDLVOR2r&s=10",
  },
];

export default function PartnersShowcase() {
  return (
    <section className="bg-white border-t border-slate-200/80 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12 px-6">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ff6b00] bg-orange-50 px-3.5 py-1.5 rounded-full inline-block">
          Our Ecosystem
        </span>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Trusted Strategic & Operational Partners
        </h3>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap items-center gap-5 py-6 group-hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-6 cursor-pointer transition-all duration-300 transform hover:scale-105 group/item shrink-0"
            >
              <img
                src={partner?.logoUrl}
                alt={partner.name}
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-300 select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
