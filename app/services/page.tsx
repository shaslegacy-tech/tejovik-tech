// app/services/page.tsx
"use client";
import { motion } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import SectionTitle from "@/components/SectionTitle";

const CORE_SERVICES = [
  {
    title: "Web Development",
    desc: "Custom websites & web apps built with scalability, security, and performance in mind.",
    icon: "🌐",
  },
  {
    title: "Mobile Applications",
    desc: "Native & cross-platform apps delivering smooth user experiences on iOS & Android.",
    icon: "📱",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud-native solutions with CI/CD, monitoring, and optimization for reliability.",
    icon: "☁️",
  },
  {
    title: "UI/UX Design",
    desc: "User-first design with modern aesthetics, seamless navigation, and accessibility.",
    icon: "🎨",
  },
  {
    title: "AI & Automation",
    desc: "AI-driven insights & workflow automation to scale business efficiency.",
    icon: "🤖",
  },
  {
    title: "Consulting & Strategy",
    desc: "Guidance through digital transformation with precision & transparency.",
    icon: "💡",
  },
];

const PROCESS = [
  { step: "1. Discovery", detail: "We understand your goals, challenges, and business requirements." },
  { step: "2. Design", detail: "Crafting intuitive UI/UX and scalable system architecture." },
  { step: "3. Development", detail: "Agile development with clean, efficient, and secure code." },
  { step: "4. Deployment", detail: "Seamless delivery to production with CI/CD pipelines." },
  { step: "5. Support", detail: "Ongoing monitoring, updates, and enhancements." },
];

const VALUES = [
  { icon: "🔒", title: "Security", desc: "Enterprise-grade security in every layer of development." },
  { icon: "⚡", title: "Scalability", desc: "Future-proof systems that grow with your business." },
  { icon: "✨", title: "Innovation", desc: "Cutting-edge solutions using latest technologies." },
  { icon: "🤝", title: "Transparency", desc: "Open communication and collaborative approach." },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[120px]" />
      </div>

      {/* Hero Section */}
       <section className="relative py-28 overflow-hidden">
            {/* Gradient background */}
            {/* <div className="absolute inset-0 -z-10">
              <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[160px]" />
              <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[140px]" />
            </div> */}
      
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
              {/* Left: Hero Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold font-[Outfit] bg-clip-text text-transparent bg-gradient-to-r from-[#ff512f] to-[#dd2476] leading-tight">
                  Premium Software <br /> Development Services
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                  From web to mobile, AI to cloud — we craft scalable, secure, and premium digital solutions 
                  that empower businesses worldwide.
                </p>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-semibold shadow-lg transition"
                >
                  Explore Services
                </motion.a>
              </motion.div>
      
              {/* Right: Hero Animation */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-md mx-auto"
              >
                <LottiePlayer src={LOTTIES.services} />
              </motion.div>
            </div>
          </section>
      

      {/* Core Services */}
        <section className="container mx-auto px-6 pb-28">
          <SectionTitle title="Our" highlight="Services" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 
                            bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:scale-[1.02] 
                            transition-all duration-500 overflow-hidden shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold font-[Outfit] text-brand-gradient mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
    
          {/* Development Process */}
        <section className="container mx-auto px-6 pb-28 text-center">
          <SectionTitle title="Our" highlight="Process" />
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {PROCESS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <h4 className="font-semibold font-[Outfit] text-brand-gradient mb-2">{item.step}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

         {/* Why Choose Us */}
          <section className="container mx-auto px-6 pb-28 text-center">
            <SectionTitle title="Why" highlight="Choose Us" />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {VALUES.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-lg hover:scale-[1.05] transition"
                >
                  <div className="text-3xl mb-3">{val.icon}</div>
                  <h4 className="font-semibold text-lg text-brand-gradient">{val.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

      {/* CTA Section */}
      <section className="py-28 text-center container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build with <span className="text-brand-gradient">TejoVik?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s transform your ideas into scalable, future-proof digital products.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Project
          </a>
        </motion.div>
      </section>
    </main>
  );
}
