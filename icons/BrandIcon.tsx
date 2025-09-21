"use client";
import { motion } from "framer-motion";

export default function BrandIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glow Aura (dark mode only) */}
      <span className="absolute inset-0 rounded-full bg-brand-600/30 blur-2xl dark:animate-pulse dark:block hidden" />

    <motion.svg
      whileHover={{ rotate: 3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TejoVik brand icon"
    >
      <defs>
        <linearGradient id="tvGrad" x1="0%" y1="0%" x2="200%" y2="0%">
          <stop offset="0%" stopColor="#ff512f">
            <animate attributeName="offset" values="-1;1" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#dd2476">
            <animate attributeName="offset" values="0;2" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#ff512f">
            <animate attributeName="offset" values="1;3" dur="6s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <radialGradient id="tvGlow" cx="50%" cy="50%" r="60%">
          <stop offset="60%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* soft plate */}
      <path
        d="M20 6h24c3.1 0 5.9 1.7 7.3 4.4l9.2 17.2c1.4 2.7 1.4 5.9 0 8.6l-9.2 17.2C50 56.3 47.1 58 44 58H20c-3.1 0-5.9-1.7-7.3-4.4L3.6 36.2c-1.4-2.7-1.4-5.9 0-8.6L12.7 10.4C14.1 7.7 16.9 6 20 6Z"
        fill="url(#tvGrad)"
        opacity="0.12"
      />

      {/* monogram T */}
       <g fill="url(#tvGrad)">
        <path d="M12 20c0-1.657 1.343-3 3-3h34c1.657 0 3 1.343 3 3s-1.343 3-3 3H35v23c0 1.657-1.343 3-3 3s-3-1.343-3-3V23H15c-1.657 0-3-1.343-3-3Z" />
        <path d="M46 26L26 46" stroke="url(#tvGrad)" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* glow */}
      <circle cx="32" cy="32" r="28" fill="url(#tvGlow)" opacity="0.15" />
    </motion.svg>
    </div>
  );
}
