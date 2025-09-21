"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      {/* Gradient background with soft glows */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ff512f]/10 via-transparent to-[#dd2476]/10" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ff512f]/25 to-[#dd2476]/25 blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[Outfit] mb-6 bg-gradient-to-r from-[#ff512f] to-[#dd2476] bg-clip-text text-transparent">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 font-[Inter]">
          Let’s collaborate to transform your ideas into powerful digital
          solutions with our expert team, premium design, and robust technology.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="#contact"
            className="relative px-8 py-4 text-lg font-medium rounded-full
                       bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white
                       shadow-[0_0_25px_rgba(221,36,118,0.4)]
                       transition-transform transform hover:scale-105"
          >
            Let’s Work Together
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 text-lg font-medium rounded-full border border-gray-300 
                       dark:border-gray-700 text-gray-700 dark:text-gray-200 
                       hover:bg-gradient-to-r hover:from-[#ff512f] hover:to-[#dd2476] 
                       hover:text-white transition-all duration-500"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
