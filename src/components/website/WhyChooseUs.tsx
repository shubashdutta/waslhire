"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const stats = [
  { number: 10, suffix: "+", label: "Years Experience" },
  {
    number: 15000,
    suffix: "+",
    label: "Global Placements",
  },
  {
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Active Support",
  },
];

const AnimatedStat = ({ stat }: { stat: (typeof stats)[number] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      whileInView={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 text-center hover:shadow-md transition-shadow duration-200"
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-[#9B0A30] mb-2">
        {isInView ? (
          <CountUp
            end={stat.number}
            duration={2.5}
            separator=","
            suffix={stat.suffix}
          />
        ) : (
          <span>
            {stat.number.toLocaleString()}
            {stat.suffix}
          </span>
        )}
      </div>

      <div className="text-sm sm:text-base font-medium text-gray-700 uppercase tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why is WASL HIRE <span className="text-[#9B0A30]">#1</span> in
            International Recruitment
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner in global recruitment, connecting talent and
            opportunity with integrity and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
