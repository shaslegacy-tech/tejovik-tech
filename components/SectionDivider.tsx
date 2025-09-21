"use client";

import { motion } from "framer-motion";

type Props = {
  height?: number;
  flip?: boolean;
  variant?: "wave" | "curve";
  opacity?: number;
  className?: string;
};

export default function SectionWaveDivider({
  height = 120,
  flip = false,
  variant = "wave",
  opacity = 1,
  className = "",
}: Props) {
  const wavePath =
    "M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,101.3C672,96,768,128,864,144C960,160,1056,160,1152,160C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  const curvePath =
    "M0,192 C480,320 960,64 1440,192 L1440,320 L0,320 Z";

  const path = variant === "curve" ? curvePath : wavePath;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative w-full ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`w-full ${flip ? "rotate-180" : ""}`}
        style={{ height }}
      >
        <path
          d={path}
          fill="url(#gradient)"
          fillOpacity="0.9"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff512f" />
            <stop offset="100%" stopColor="#dd2476" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow overlay (theme-aware) */}
      <div className="absolute inset-0 -z-10 blur-2xl">
        <div className="h-full w-full 
          bg-gradient-to-r 
          from-[#ff512f]/30 via-[#dd2476]/30 to-[#ff512f]/30 
          dark:from-[#ff512f]/15 dark:via-[#dd2476]/15 dark:to-[#ff512f]/15" 
        />
      </div>
    </motion.div>
  );
}
