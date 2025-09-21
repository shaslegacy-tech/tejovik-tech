"use client";
import { motion } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import BrandIcon from "@/icons/BrandIcon";
import Image from "next/image";
import KnowMoreButton from "@/components/KnowMoreButton";
import { Lightbulb, ShieldCheck, Rocket, Users, Shield, Eye, Layers, Globe, Twitter, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      <HeroSection />
      <OurStory />
      <CoreValues />
      <MissionVisionSection />
      <TeamSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}

// -------------------- Hero Section --------------------
function HeroSection() {
   return (
      <section className="relative overflow-hidden py-28 md:py-36 flex items-center justify-center text-center">
      {/* Background Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(120deg, #0a0a0a, #111111, #0f0f0f)",
            "linear-gradient(120deg, #111111, #0a0a0a, #1a1a1a)",
            "linear-gradient(120deg, #0f0f0f, #1a1a1a, #111111)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Soft gradient auras */}
      <div className="absolute top-[-15rem] left-[-10rem] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[150px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-15rem] right-[-10rem] w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[150px] -z-10 animate-pulse-slow" />

      {/* BrandIcon Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08, scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center -z-0"
      >
        <BrandIcon className="h-[22rem] w-[22rem]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Hero Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          {["About", "TejoVik"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-block bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] bg-clip-text text-transparent mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light"
        >
          Crafting <span className="relative inline-block">
            <span className="relative z-10 text-white font-medium">creativity</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff512f] to-[#dd2476] rounded-full" />
          </span>{" "}
          &amp; <span className="relative inline-block">
            <span className="relative z-10 text-white font-medium">precision</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#dd2476] to-[#ff512f] rounded-full" />
          </span>{" "}
          into every solution we build.
        </motion.p>

        {/* Premium Glass Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/about"
            className="relative inline-flex items-center px-6 py-3 rounded-full 
              border border-transparent bg-white/5 backdrop-blur-md 
              text-white font-medium text-sm md:text-base
              hover:border-[#ff512f] hover:shadow-[0_0_20px_rgba(221,36,118,0.4)]
              transition-all duration-500 group"
          >
            Know More
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

            {/* Gradient Border Glow */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] opacity-60 group-hover:opacity-100 transition-all duration-500 -z-10" />
          </Link>
        </motion.div>
      </div>
    </section>
    );
}

// -------------------- Mission & Vision --------------------
function MissionVisionSection() {
  return (
    <section id="mission-vision" className="relative py-16 overflow-hidden">
      {/* Animated radial background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-3xl animate-pulse" />
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Our Mission & Vision" highlight="" />
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
            Our mission is to deliver scalable, secure, and innovative digital solutions that solve real-world problems.
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>🚀 Custom software solutions</li>
            <li>🌐 Modern websites & web platforms</li>
            <li>📱 Mobile apps for iOS & Android</li>
            <li>💻 Domains & hosting services</li>
            <li>🤝 Ongoing tech support & consulting</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LottiePlayer src={LOTTIES.services} />
        </motion.div>
      </div>
    </section>
  );
}

// -------------------- Core Values Section --------------------
const values = [
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "Pioneering ideas and solutions that push boundaries in technology.",
  },
  {
    title: "Security",
    icon: Shield,
    desc: "Protecting data and systems with best-in-class security practices.",
  },
  {
    title: "Transparency",
    icon: Eye,
    desc: "Open communication and honesty at every stage of collaboration.",
  },
  {
    title: "Scalability",
    icon: Layers,
    desc: "Designing solutions that adapt and grow with your business needs.",
  },
  {
    title: "Collaboration",
    icon: Users,
    desc: "Working hand-in-hand with clients and teams to achieve goals.",
  },
  {
    title: "Impact",
    icon: Globe,
    desc: "Creating meaningful digital solutions that make a global difference.",
  },
];

function CoreValues() {
  return (
    <section id="core-values" className="relative py-24 overflow-hidden">
          {/* Background gradient glows */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 left-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#ff512f]/15 to-[#dd2476]/15 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#dd2476]/15 to-[#ff512f]/15 blur-[120px]" />
          </div>
    
          <div className="container mx-auto px-6 md:px-12">
            <SectionTitle title="Core" highlight="Values" />
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                             bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm shadow-lg 
                             hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient border shimmer */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] opacity-0 group-hover:opacity-100 animate-gradient" />
    
                  <div className="mb-4">
                    <value.icon className="h-8 w-8 text-[#ff512f] bg-clip-text bg-gradient-to-r from-[#ff512f] to-[#dd2476]" />
                  </div>

                  <h3 className="text-lg font-semibold text-brand-gradient mb-2">{value.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.desc}
                  </p>
    
                  {/* Subtle shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                  opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  );
}

// -------------------- Team Section --------------------
const team = [
  {
    name: "Sonu Ojha",
    role: "Founder & CEO",
    img: "/assets/images/teams/owner-ceo.png",
    bio: "Vision-driven leader shaping TejoVik’s strategy and innovation.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    img: "/assets/images/teams/priya.jpg",
    bio: "Driving technical excellence and scalable product architecture.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Rahul Nair",
    role: "Head of Design",
    img: "/assets/images/teams/amit.jpg",
    bio: "Crafting premium digital experiences with creativity and detail.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sneha Patel",
    role: "Lead Developer",
    img: "/assets/images/teams/sneha.jpg",
    bio: "Building secure, efficient, and modern engineering solutions.",
    socials: { linkedin: "#", twitter: "#" },
  },
];

function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden">
          {/* Background gradient glows */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#ff512f]/15 to-[#dd2476]/15 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-gradient-to-bl from-[#dd2476]/15 to-[#ff512f]/15 blur-[100px]" />
          </div>
    
          <div className="container mx-auto px-6">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-[#ff512f] to-[#dd2476] bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The people behind TejoVik’s innovation and excellence.
              </p>
            </motion.div>
    
            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 
                             bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm 
                             transition-all duration-500 hover:shadow-xl group"
                >
                  {/* Hover gradient border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                                  group-hover:border-gradient-to-r from-[#ff512f] to-[#dd2476] transition-all duration-500" />
    
                  {/* Avatar */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 dark:border-gray-700"
                  />
    
                  {/* Name + Role */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
    
                  {/* Bio */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{member.bio}</p>
    
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mt-4">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0A66C2] transition"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#1DA1F2] transition"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  );
}

// -------------------- Timeline Section --------------------
const timeline = [
  {
    year: "2018",
    title: "Foundation",
    description: "TejoVik was born with the vision of delivering scalable and secure digital solutions.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "We expanded services across borders, building partnerships with global businesses.",
  },
  {
    year: "2022",
    title: "Innovation Lab",
    description: "Launched in-house R&D initiatives to push innovation in AI, cloud, and automation.",
  },
  {
    year: "2024",
    title: "Trusted Partner",
    description: "Recognized as a premium technology partner for enterprises worldwide.",
  },
];

function OurStory() {
  return (
      <section id="our-story" className="relative py-24 overflow-hidden">
            {/* Background glows */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-0 w-[28rem] h-[28rem] rounded-full 
                              bg-gradient-to-tr from-[#ff512f]/10 to-[#dd2476]/10 blur-[100px]" />
              <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full 
                              bg-gradient-to-bl from-[#dd2476]/10 to-[#ff512f]/10 blur-[120px]" />
            </div>
      
            {/* Section Title */}
            <div className="container mx-auto text-center mb-16">
              <SectionTitle title="Our" highlight="Story" />
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A journey of innovation, growth, and building trust with global clients.
              </p>
            </div>
      
            {/* Vertical Timeline */}
            <div className="relative container mx-auto max-w-4xl px-6">
              {/* Central Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[3px] 
                              bg-gradient-to-b from-[#ff512f] via-[#dd2476] to-[#ff512f] 
                              transform -translate-x-1/2" />
      
              <div className="flex flex-col space-y-16 relative z-10">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    } md:gap-10`}
                  >
                    {/* Connector Dot with Glow */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                          scale: [0, 1.2, 1],
                          opacity: 1,
                          boxShadow: [
                            "0 0 0 rgba(0,0,0,0)",
                            "0 0 20px rgba(221,36,118,0.6)",
                            "0 0 12px rgba(255,81,47,0.5)",
                          ],
                        }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                                   border-4 border-white dark:border-gray-900"
                      />
                    </div>
      
                    {/* Timeline Card with hover glow */}
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 0 30px rgba(221,36,118,0.25), 0 0 50px rgba(255,81,47,0.15)",
                      }}
                      transition={{ duration: 0.4 }}
                      className={`relative w-full md:w-[calc(50%-2rem)] p-6 rounded-xl 
                                  bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                                  border border-gray-200 dark:border-gray-700 shadow-sm
                                  transition-all`}
                    >
                      <span className="block text-sm font-semibold text-brand-gradient">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  );
}
// -------------------- Partners Section --------------------
const partners = [
  { name: "Google", logo: "/partners/google.svg" },
  { name: "Microsoft", logo: "/partners/microsoft.svg" },
  { name: "Amazon", logo: "/partners/aws.svg" },
  { name: "Oracle", logo: "/partners/oracle.svg" },
  { name: "Adobe", logo: "/partners/adobe.svg" },
  { name: "Shopify", logo: "/partners/shopify.svg" },
  { name: "Facebook", logo: "/partners/facebook.svg" },
];

function PartnersSection() {
  return (
      <section className="relative py-20 overflow-hidden">
           {/* Background branding gradient */}
           {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ff512f]/15 via-[#dd2476]/15 to-[#ff512f]/15" /> */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-32 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#ff512f]/15 to-[#dd2476]/15 blur-[120px]" />
              <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-gradient-to-bl from-[#dd2476]/15 to-[#ff512f]/15 blur-[100px]" />
            </div>
           <div className="container mx-auto px-6 text-center">
             {/* Heading */}
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
             >
               Trusted By Our <span className="text-brand-gradient">Partners</span>
             </motion.h2>
     
             {/* Subtitle */}
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               viewport={{ once: true }}
               className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
             >
               We collaborate with innovative businesses and enterprises around the
               world to build impactful digital solutions.
             </motion.p>
     
             {/* Infinite Marquee */}
             <div className="relative w-full overflow-hidden">
               <motion.div
                 className="flex gap-16 whitespace-nowrap"
                 animate={{ x: ["0%", "-100%"] }}
                 transition={{
                   repeat: Infinity,
                   ease: "linear",
                   duration: 25, // adjust speed
                 }}
               >
                 {[...partners, ...partners].map((partner, idx) => (
                   <div
                     key={idx}
                     className="flex items-center justify-center flex-shrink-0"
                   >
                     <Image
                       src={partner.logo}
                       alt={partner.name}
                       width={140}
                       height={70}
                       className="opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                     />
                   </div>
                 ))}
               </motion.div>
             </div>
           </div>
         </section>
  );
}

// -------------------- Call to Action Section --------------------
function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#ff512f]/40 via-[#dd2476]/40 to-[#ff512f]/40">
        <div className="absolute inset-0 animate-gradient-slow opacity-90" />
      </div>

      <div className="container mx-auto px-6 text-center relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Let’s Build the Future Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-2xl mx-auto mb-10 text-base md:text-lg"
        >
          Partner with TejoVik to design, build, and scale cutting-edge software
          solutions that create real impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl text-base font-semibold bg-white text-[#dd2476] hover:bg-gray-100 transition shadow-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white hover:opacity-90 transition shadow-lg"
          >
            Work With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}