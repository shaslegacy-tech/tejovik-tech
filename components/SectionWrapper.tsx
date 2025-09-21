// components/SectionWrapper.tsx
"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "transparent";
}

export default function SectionWrapper({
  id,
  children,
  className,
  variant = "transparent",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        variant === "light" && "bg-white dark:bg-gray-950",
        variant === "dark" && "bg-gray-900 dark:bg-black",
        className
      )}
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-3xl animate-pulse" />
      </div>

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/10 to-transparent dark:from-black/40 -z-0" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/10 to-transparent dark:from-black/40 -z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
