"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Rocket, Shield, Cpu, Code } from "lucide-react";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";
import GlowTiltCard from "@/components/GlowTiltCard";
import KnowMoreButton from "@/components/KnowMoreButton";

const features = [
  {
    icon: Rocket,
    title: "Custom Software Development",
    desc: "Robust backends, APIs, and dashboards tailored to your workflows.",
  },
  {
    icon: Shield,
    title: "Websites & Web Apps",
    desc: "Modern, responsive websites and PWAs built with best practices.",
  },
  {
    icon: Cpu,
    title: "Mobile Applications",
    desc: "iOS & Android apps with smooth UX and maintainable codebases.",
  },
  {
    icon: Code,
    title: "Support & Maintenance",
    desc: "SLAs, monitoring, and continuous improvements."
  },
];

export default function ServicesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Animated radial background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-3xl animate-pulse" />
      </div>

      <div className="container grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Lottie */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <LottiePlayer src={LOTTIES.services} />
        </motion.div>

        {/* RIGHT: Features */}
        <div>
          <SectionTitle title="Our" highlight="Services" />

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <GlowTiltCard
                key={f.title}
                title={f.title}
                desc={f.desc}
                Icon={f.icon}
                index={i}
              />
            ))}
          </div>
          <KnowMoreButton href="/services" label="Explore Services" className="mt-8" />
        </div>
      </div>
    </section>
  );
}

// function TiltCard({ title, desc, Icon, index }: any) {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0.5);
//   const y = useMotionValue(0.5);

//   const rotateX = useTransform(y, [0, 1], [15, -15]);
//   const rotateY = useTransform(x, [0, 1], [-15, 15]);

//   // Dynamic shadow offset with gradient glow + depth
//   const shadowX = useTransform(x, [0, 1], [-20, 20]);
//   const shadowY = useTransform(y, [0, 1], [20, -20]);
//   const shadow = useTransform([shadowX, shadowY], (values: number[]) => {
//     const [latestX, latestY] = values;
//     return `
//        ${latestX}px ${latestY}px 35px rgba(221, 36, 118, 0.25),
//     ${-latestX}px ${-latestY}px 35px rgba(255, 81, 47, 0.2)
//     `;
//   });
  

//   function handleMouseMove(e: React.MouseEvent) {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const posX = (e.clientX - rect.left) / rect.width;
//     const posY = (e.clientY - rect.top) / rect.height;
//     x.set(posX);
//     y.set(posY);
//   }

//   function handleMouseLeave() {
//     x.set(0.5);
//     y.set(0.5);
//   }

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY, boxShadow: shadow }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       viewport={{ once: true }}
//       className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:scale-[1.03] transition-all duration-500 overflow-hidden"
//     >
//       {/* Gradient shimmer effect */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] opacity-0 group-hover:opacity-100 animate-gradient" />

//       {/* Icon inside gradient ring */}
//       <div className="mb-4">
//         <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#ff512f] to-[#dd2476] p-[2px] group-hover:scale-110 transition-transform duration-500">
//           <span className="flex h-full w-full items-center justify-center rounded-lg bg-white dark:bg-gray-900">
//             <Icon className="h-7 w-7 text-[#ff512f]" />
//           </span>
//         </span>
//       </div>

//       <h3 className="text-lg font-semibold mb-2 font-[Outfit]">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-400 font-[Inter]">{desc}</p>

//       {/* Card shimmer overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none" />

//       {/* Inner glow effect on hover */}
//       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#ff512f]/10 via-[#dd2476]/10 to-transparent pointer-events-none" />
//     </motion.div>
//   );
// }
