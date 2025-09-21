"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Rocket, Shield, Cpu, Code } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-12 w-12 text-[#ff512f]" />,
    title: "Fast Delivery",
    desc: "We build and deploy projects quickly without sacrificing quality.",
  },
  {
    icon: <Shield className="h-12 w-12 text-[#dd2476]" />,
    title: "Secure Solutions",
    desc: "Industry best practices ensure your product is safe and reliable.",
  },
  {
    icon: <Cpu className="h-12 w-12 text-[#ff512f]" />,
    title: "Scalable Tech",
    desc: "Built to handle growth with modern, scalable architecture.",
  },
  {
    icon: <Code className="h-12 w-12 text-[#dd2476]" />,
    title: "Clean Code",
    desc: "Readable, maintainable, and future-proof code structure.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-[#ff512f] to-[#dd2476] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#dd2476] to-[#ff512f] rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-[-200px] left-1/3 w-[700px] h-[700px] bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] rounded-full blur-3xl opacity-20 animate-gradient"></div>

      {/* Heading */}
      <SectionTitle title="Our" highlight="Services" />

      {/* Features Grid */}
      <div className="relative z-10 container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl shadow-[0_8px_40px_rgba(221,36,118,0.25)] 
                       hover:shadow-[0_12px_50px_rgba(221,36,118,0.35)] hover:scale-105 transition-all duration-500"
          >
            <div className="mb-6">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 font-[Outfit]">{f.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 font-[Inter]">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
