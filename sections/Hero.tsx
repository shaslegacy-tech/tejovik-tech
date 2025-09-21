"use client";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-20 relative py-24">
      {/* LEFT Content */}
      <div className="space-y-6 text-center md:text-left relative">
        {/* Gradient glow behind heading */}
        <div
          className="absolute -top-10 -left-20 w-72 h-72 
                        bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] 
                        blur-3xl opacity-30 animate-pulse rounded-full"
        ></div>

        {/* Hero heading with shimmer */}
        <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-tight">
          TejoVik builds <span className="text-gradient-shimmer">software</span>
          , websites & apps
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 relative">
          From idea to launch, we deliver fast, reliable and scalable solutions—
          with ongoing support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start relative">
          {/* Primary shimmer button */}
          <Link href="/contact" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] 
                       text-white font-semibold shadow-lg hover:shadow-xl transition-all button-gradient-shimmer">
            Start a Project
          </Link>

          {/* Secondary shimmer filled button */}
         <a
          href="#services"
          className="px-5 py-3 rounded-2xl font-medium 
                    text-gray-800 dark:text-gray-200
                    border border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-900
                    hover:bg-gradient-to-r hover:from-[#ff512f] hover:via-[#dd2476] hover:to-[#ff512f]
                    hover:text-white 
                    transition-all shadow-sm hover:shadow-md secondary-button-gradient-shimmer"
        >
          Our Services
        </a>
        </div>
      </div>

      {/* RIGHT Content */}
      <div className="relative max-w-md md:ml-auto">
        {/* Rotating gradient glow */}
        <div
          className="absolute inset-0 rounded-full 
                        bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] 
                        blur-3xl opacity-40 animate-spin-slow"
        ></div>

        {/* Foreground Lottie */}
        <div className="relative">
          <LottiePlayer src={LOTTIES.hero} />
        </div>
      </div>
    </section>
  );
}
