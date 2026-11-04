"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 });

  const innerX = useTransform(x, (v) => v - 6);
  const innerY = useTransform(y, (v) => v - 6);

  const outerX = useTransform(springX, (v) => v - 20);
  const outerY = useTransform(springY, (v) => v - 20);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [x, y]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] top-0 left-0 h-full w-full overflow-hidden"
      style={{ touchAction: "none" }}
    >
      {/* Outer ring — Translucent soft pink/maroon ring, 40px, spring trailing motion */}
      <motion.div
        className="absolute rounded-full bg-[#9B0A30]/25 backdrop-blur-[1px]"
        style={{
          left: outerX,
          top: outerY,
          width: 30,
          height: 30,
        }}
      />

      <motion.div
        className="absolute rounded-full bg-[#9B0A30] shadow-sm"
        style={{
          left: innerX,
          top: innerY,
          width: 12,
          height: 12,
        }}
      />
    </div>
  );
};

export default CustomCursor;
