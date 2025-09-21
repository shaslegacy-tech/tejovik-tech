"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KnowMoreButton({
  href,
  label = "Know More",
  className = "",
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className={`relative inline-block items-center text-sm md:text-base font-semibold bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] 
                      bg-clip-text text-transparent no-underline transition-all duration-300 relative overflow-hidden group ${className}`}
      >
        {/* Text */}
        <span className="z-10">{label}</span>

        {/* Arrow */}
        <span className="ml-2 inline-block transition-transform duration-300 z-10">
          &rarr;
        </span>

        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                         transition-all duration-500 group-hover:w-full" />

        {/* Shimmer overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                         opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none" />
      
      </Link>
    </motion.div>
  );
}