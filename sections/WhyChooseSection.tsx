"use client";
import { motion } from "framer-motion";
import { Users, Eye, Layers, Headphones } from "lucide-react";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import SectionTitle from "@/components/SectionTitle";
import GlowTiltCard from "@/components/GlowTiltCard";

const points = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled professionals with deep technical and creative expertise.",
  },
  {
    icon: Eye,
    title: "Vision Driven",
    desc: "We align with your vision to craft purposeful, impactful solutions.",
  },
  {
    icon: Layers,
    title: "Robust Process",
    desc: "Streamlined workflows ensure quality, speed, and consistency.",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    desc: "From strategy to post-launch, we stay by your side.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Soft gradient glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-0 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[100px]" />
      </div>

      <div className="container grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Cards */}
        <div>
          <SectionTitle title="Why" highlight="Choose Us" />

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <GlowTiltCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                Icon={p.icon}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Lottie */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <LottiePlayer src={LOTTIES.support} />
        </motion.div>
      </div>
    </section>
  );
}
