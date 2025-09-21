// AboutUs.tsx
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import KnowMoreButton from "@/components/KnowMoreButton";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[100px]" />
      </div>

      <div className="container grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <LottiePlayer src={LOTTIES.aboutus} />
        </motion.div>

        {/* Right: About Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <SectionTitle title="About" highlight="Us" />

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-[Inter] leading-relaxed mb-8">
            We are a passionate team dedicated to crafting scalable, secure, and premium digital solutions. 
            Our goal is to empower businesses with technology that accelerates growth and builds long-term success.
          </p>

          <div className="space-y-6">
            <TiltCard title="Our Mission">
              To deliver high-quality, innovative digital products that not only solve today’s challenges 
              but also lay the foundation for future opportunities.
            </TiltCard>

            <TiltCard title="Our Vision">
              To become a trusted global partner in technology, enabling businesses of all sizes to thrive 
              in the digital era through creativity, transparency, and innovation.
            </TiltCard>

            {/* Read More / Know More link */}
            <KnowMoreButton href="/about" label="Read More" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function TiltCard({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

  // Soft gradient glow instead of heavy shadows
  const glowX = useTransform(x, [0, 1], [-12, 12]);
  const glowY = useTransform(y, [0, 1], [12, -12]);
  const glow = useTransform([glowX, glowY], (values: number[]) => {
    const [gx, gy] = values;
    return `
      ${gx}px ${gy}px 25px rgba(221,36,118,0.25),
    ${-gx}px ${-gy}px 25px rgba(255,81,47,0.2)
    `;
  });
  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;
    x.set(posX);
    y.set(posY);
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
      style={{ rotateX, rotateY, boxShadow: glow }}
      className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
    >
      {/* Gradient shimmer line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] opacity-0 group-hover:opacity-100 animate-gradient" />

      <h3 className="text-base md:text-lg font-semibold font-[Outfit] text-brand-gradient mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-[Inter]">{children}</p>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none" />
    </motion.div>
  );
}
