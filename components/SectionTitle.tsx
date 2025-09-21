"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title, highlight }: { title: string; highlight?: string }) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-4 font-[Outfit] text-gradient-shimmer"
      >
        {title}{" "}
        {highlight && <span className="text-brand-gradient">{highlight}</span>}
      </motion.h2>
      {/* Gradient half-border */}
      <div className="w-24 h-[3px] bg-gradient-to-r from-[#ff512f] to-[#dd2476] rounded-full mb-12"/>
    </div>
  );
}
