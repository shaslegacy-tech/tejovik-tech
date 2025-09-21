"use client";
import BrandIcon from "@/icons/BrandIcon";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(120deg, #0a0a0a, #111111, #0f0f0f)",
            "linear-gradient(120deg, #111111, #0a0a0a, #1a1a1a)",
            "linear-gradient(120deg, #0f0f0f, #1a1a1a, #111111)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Brand glowing accents */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#ff512f]/25 to-[#dd2476]/25 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[180px]" />

      {/* Premium top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] opacity-70" />

      {/* Footer content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
  <div className="flex items-center gap-3 mb-4 relative">
    {/* Animated Glow Aura */}
    <motion.div
      className="absolute inset-0 blur-xl rounded-full bg-gradient-to-r from-[#ff512f]/50 to-[#dd2476]/50 -z-10"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Brand Icon */}
    <BrandIcon className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,81,47,0.6)]" />

    {/* Official Logo (untouched brand colors) */}
    <img
      src="/logo1.svg"
      alt="TejoVik"
      className="h-12 w-auto drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]"
    />
  </div>

  <p className="text-sm text-gray-400">
    Crafting modern tech solutions with creativity & precision.
  </p>
</div>


          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@tejovik.com" className="hover:text-white transition">contact@tejovik.com</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TejoVik Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
