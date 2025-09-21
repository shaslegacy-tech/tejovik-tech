"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GlowTiltCard({
  title,
  desc,
  Icon,
  index = 0,
}: {
  title: string;
  desc: string;
  Icon?: React.ElementType;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const shadowX = useTransform(x, [0, 1], [-20, 20]);
  const shadowY = useTransform(y, [0, 1], [20, -20]);

  const shadow = useTransform([shadowX, shadowY], (values: number[]) => {
    const [sx, sy] = values;
    return `
      ${sx}px ${sy}px 35px rgba(221, 36, 118, 0.2),
      ${-sx}px ${-sy}px 35px rgba(255, 81, 47, 0.2)
    `;
  });
//   const glow = useTransform([glowX, glowY], (values: number[]) => {
//     const [gx, gy] = values;
//     return `
//       ${gx}px ${gy}px 25px rgba(221,36,118,0.25),
//     ${-gx}px ${-gy}px 25px rgba(255,81,47,0.2)
//     `;
//   });
  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, boxShadow: shadow }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:scale-[1.03] transition-all duration-500 overflow-hidden"
>
      {/* Gradient shimmer line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] opacity-0 group-hover:opacity-100 animate-gradient" />

      {/* Icon (optional) */}
      {Icon && (
        <div className="mb-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white">
            <Icon className="h-6 w-6" />
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold mb-2 font-[Outfit]">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 font-[Inter]">{desc}</p>

      {/* Hover shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none" />
    </motion.div>
  );
}
