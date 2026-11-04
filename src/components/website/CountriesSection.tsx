import React from "react";

const CountriesSection = () => {
  const flag = [
    { path: "https://flagcdn.com/w80/ae.png" },
    { path: "https://flagcdn.com/w80/sa.png" },
    { path: "https://flagcdn.com/w80/de.png" },
    { path: "https://flagcdn.com/w80/pt.png" },
    { path: "https://flagcdn.com/w80/mt.png" },
    { path: "https://flagcdn.com/w80/rs.png" },
    { path: "https://flagcdn.com/w80/gr.png" },
    { path: "https://flagcdn.com/w80/md.png" },
    { path: "https://flagcdn.com/w80/ro.png" },
  ];
  return (
    <section className="bg-white border-t border-slate-200/80 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12 px-6">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9B0A30] bg-[#9B0A30]/10 px-3.5 py-1.5 rounded-full inline-block">
          Global Destinations
        </span>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Countries Where We Provide Our Services
        </h3>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap items-center gap-5 py-2 group-hover:[animation-play-state:paused] ">
          {flag?.map((partner, index) => (
            <div
              key={index}
              className="  inline-flex items-center justify-center px-6 cursor-pointer transition-all duration-300 transform hover:scale-105 group/item shrink-0"
            >
              <img
                src={partner?.path}
                alt={"countrys"}
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-300 select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
