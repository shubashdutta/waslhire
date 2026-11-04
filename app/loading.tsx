"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/src/assets/images/Logo.png";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center pointer-events-none overflow-hidden">
          {/* 4 Vertical Split Columns with Gaps/Borders */}
          <motion.div className="absolute inset-0 flex gap-[1px] " exit="exit">
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 h-full bg-white"
            />
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 h-full bg-white"
            />
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 h-full bg-white"
            />
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 h-full bg-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 flex flex-col items-center pointer-events-auto"
          >
            <div>
              <Image alt="Logo" src={logo} height={200} width={200} />
            </div>

            <div className="text-xs uppercase tracking-[0.3em] text-[#9B0A30] font-semibold mb-6">
              Loading...
            </div>

            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="h-1 bg-[#9B0A30] rounded-full"
                  initial={{ width: "12px", opacity: 0.3 }}
                  animate={{
                    width: ["12px", "48px", "12px"],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
