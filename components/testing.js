"use client";
import { motion } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer";
import { LOTTIES } from "@/lib/lotties";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <TeamSection />
      <TimelineSection />
      <PartnersSection />
      <CTASection />

    </main>
  );
}

// -------------------- Hero Section --------------------
function HeroSection() {
  return (
      <section className="relative py-24 bg-light-animated-gradient overflow-hidden">
        {/* Floating glows */}
        <div className="absolute -top-32 left-1/4 w-80 h-80 rounded-full bg-[#ff512f]/12 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#dd2476]/12 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold font-[Outfit] text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] mb-6">
            About TejoVik
          </h1>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm md:text-base">
            TejoVik is a forward-thinking technology company delivering software, websites, mobile apps, 
            domains, and hosting solutions to empower businesses and accelerate growth.
          </p>

          <Link
            href="#services"
            className="inline-block mt-6 px-6 py-3 font-semibold text-white bg-gradient-to-r 
                       from-[#ff512f] via-[#dd2476] to-[#ff512f] rounded-lg hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <LottiePlayer src={LOTTIES.aboutus} />
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

// -------------------- Services Section --------------------
const services = [
  {
    title: "Custom Software Development",
    description:
      "We build scalable, secure, and efficient software tailored to your business needs.",
    icon: "/assets/icons/software.svg",
  },
  {
    title: "Web & Mobile Apps",
    description:
      "Modern web and mobile applications with smooth UI/UX and responsive design.",
    icon: "/assets/icons/apps.svg",
  },
  {
    title: "Domain & Hosting Solutions",
    description:
      "Reliable domain registration, hosting, and ongoing maintenance for your online presence.",
    icon: "/assets/icons/domain.svg",
  },
  {
    title: "Ongoing Support",
    description:
      "24/7 support and updates to ensure your software, apps, and websites run flawlessly.",
    icon: "/assets/icons/support.svg",
  },
];

function ServicesSection() {
  return (
    <section className="relative py-16 bg-light-animated-gradient overflow-hidden">
      {/* Floating glows */}
      <div className="absolute -top-32 left-1/4 w-72 h-72 rounded-full bg-[#ff512f]/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/3 w-60 h-60 rounded-full bg-[#dd2476]/10 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto relative z-10">
        <SectionTitle title="Our Services" highlight="" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-2xl bg-white/60 dark:bg-gray-50/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden"
    >
      {/* Icon */}
      <img src={icon} alt={title} className="h-12 w-12 mb-4" />

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-[#dd2476]">{title}</h3>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-800 text-sm">{description}</p>

      {/* Shimmer line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff512f]/40 via-[#dd2476]/40 to-[#ff512f]/40 opacity-0 group-hover:opacity-100 animate-gradient"></div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
    </motion.div>
  );
}

// -------------------- Team Section --------------------
const teamMembers = [
  {
    name: "Sonu Ojha",
    role: "Founder & CEO",
    photo: "/assets/images/teams/owner-ceo.png",
  },
  {
    name: "Amit Sharma",
    role: "Lead Developer",
    photo: "/assets/images/teams/amit.jpg",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    photo: "/assets/images/teams/priya.jpg",
  },
  {
    name: "Rohit Kumar",
    role: "Project Manager",
    photo: "/assets/images/teams/rohit.jpg",
  },
];

function TeamSection() {
  return (
    <section className="relative py-16 bg-light-team-gradient overflow-hidden">
      {/* Floating glows */}
      <div className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-[#ff512f]/8 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-[#dd2476]/8 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto relative z-10">
        <SectionTitle title="Meet the Team" highlight="" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Photo */}
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold mb-1 text-[#dd2476]">{member.name}</h3>

              {/* Role */}
              <p className="text-gray-700 dark:text-gray-800 text-sm">{member.role}</p>

              {/* Subtle shimmer line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff512f]/30 via-[#dd2476]/30 to-[#ff512f]/30 opacity-0 group-hover:opacity-100 animate-gradient"></div>

              {/* Subtle shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- Timeline Section --------------------
const events = [
  { year: "2018", title: "Company Founded", description: "TejoVik started with a mission to deliver premium software solutions." },
  { year: "2019", title: "First Web App Launch", description: "We launched our first custom web application for a growing business client." },
  { year: "2020", title: "Expanded Services", description: "Added mobile apps, domains, and hosting services to our offerings." },
  { year: "2022", title: "Global Clients", description: "Started serving international clients across multiple industries." },
  { year: "2023", title: "TejoVik Today", description: "A full-fledged tech company delivering software, web, and app solutions with ongoing support." },
];

function TimelineSection() {
  return (
    <section className="relative py-16 bg-light-timeline-gradient overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-[#ff512f]/8 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#dd2476]/8 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto relative z-10">
        <SectionTitle title="Our Journey" highlight="" />

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#ff512f]/50 via-[#dd2476]/50 to-[#ff512f]/50 h-full"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 px-6 mb-12 ${
                index % 2 === 0 ? "md:left-0 text-right md:pr-12" : "md:left-1/2 text-left md:pl-12"
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute top-0 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#ff512f]/80 border-2 border-white shadow-md animate-pulse"></div>

              {/* Card */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 relative group hover:scale-105 transition-transform duration-500">
                <h4 className="text-[#dd2476] font-semibold text-lg">{event.year}</h4>
                <h3 className="text-gray-800 font-semibold text-base mt-1">{event.title}</h3>
                <p className="text-gray-700 mt-2 text-sm">{event.description}</p>

                {/* Shimmer line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff512f]/30 via-[#dd2476]/30 to-[#ff512f]/30 opacity-0 group-hover:opacity-100 animate-gradient"></div>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// -------------------- Partners Section --------------------
const partners = [
  { name: "Partner 1", logo: "/assets/partners/partner1.svg" },
  { name: "Partner 2", logo: "/assets/partners/partner2.svg" },
  { name: "Partner 3", logo: "/assets/partners/partner3.svg" },
  { name: "Partner 4", logo: "/assets/partners/partner4.svg" },
  { name: "Partner 5", logo: "/assets/partners/partner5.svg" },
  { name: "Partner 6", logo: "/assets/partners/partner6.svg" },
];

function PartnersSection() {
  return (
    <section className="relative py-16 bg-light-partners-gradient overflow-hidden">
      {/* Floating glows */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-[#ff512f]/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-[#dd2476]/10 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto relative z-10">
        <SectionTitle title="Our Partners" highlight="" />

        <motion.div
          className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group flex justify-center items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />

              {/* Subtle shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// -------------------- CTA Section --------------------
function CTASection() {
  return (
    <section className="relative py-24 bg-light-cta-gradient overflow-hidden">
      {/* Floating glows */}
      <div className="absolute -top-32 left-1/4 w-80 h-80 rounded-full bg-[#ff512f]/12 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#dd2476]/12 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#dd2476] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Ready to Build Something Amazing?
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-800 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let’s create premium software, websites, and apps tailored to your business needs.
        </motion.p>

        <motion.a
          href="/contact"
          className="relative inline-block px-8 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] hover:scale-105 transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></span>
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
