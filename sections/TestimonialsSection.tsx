"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "@/components/SectionTitle";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    feedback:
      "They transformed our vision into a scalable product. Their creativity and dedication are unmatched.",
    image: "",
  },
  {
    name: "Michael Lee",
    role: "Founder, StartupX",
    feedback:
      "Working with this team was a breeze. Professional, innovative, and always on time.",
    image: "/assets/images/testimonials/michael.jpg",
  },
  {
    name: "Emily Davis",
    role: "Product Manager, Innovate Ltd",
    feedback:
      "Their solutions helped us scale effortlessly while keeping costs under control. Highly recommend for anyone serious about digital growth.",
    image: "/assets/images/testimonials/emily-davis.jpg",
  },
  {
    name: "David Kim",
    role: "CTO, FinEdge",
    feedback:
      "Top-notch development and support. They truly act like an extension of our team.",
    image: "",
  },
  {
    name: "Rachel Adams",
    role: "Head of Design, Creatix",
    feedback:
      "Beautiful, functional, and fast delivery. Couldn’t ask for more.",
    image: "/assets/images/testimonials/rachel.jpg",
  },
];

// helper → get initials from name
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* Background branding glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-0 w-[36rem] h-[36rem] rounded-full 
                        bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full 
                        bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[100px]" />
      </div>

      <div className="container mb-14">
        <SectionTitle title="What Our" highlight="Clients Say" />
      </div>

      <div className="container relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          pagination={{
            el: ".testimonial-pagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} !w-3 !h-3 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] opacity-40"></span>`,
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            // 1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                 onClick={() => setSelected(t)}
                className="relative group h-full flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                           bg-white/80 dark:bg-gray-900/80 backdrop-blur-md 
                           shadow-lg cursor-pointer hover:shadow-xl transition-all duration-500"
              >
                {/* Gradient hover line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
                                from-[#ff512f] via-[#dd2476] to-[#ff512f] 
                                opacity-0 group-hover:opacity-100 animate-gradient" />

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative group/avatar">
                  {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-md 
                                   dark:border-gray-800 group-hover/avatar:scale-110 transition-all duration-500"
                      />
                    ) : (
                      <div
                        className="h-16 w-16 flex items-center justify-center rounded-full 
                                   bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                                   text-white font-bold text-lg shadow-md 
                                   group-hover/avatar:scale-110 transition-all duration-500"
                      >
                        {getInitials(t.name)}
                      </div>
                    )}
                    {/* Glow ring on hover */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r 
                                     from-[#ff512f] to-[#dd2476] opacity-0 
                                     group-hover/avatar:opacity-100 blur-md transition duration-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold font-[Outfit]">{t.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
                {/* Feedback text with fixed height */}
                <p className="text-gray-600 dark:text-gray-400 font-[Inter] leading-relaxed mb-6 flex-1 overflow-hidden line-clamp-4">
                    “{t.feedback}”
                </p>

                <span className="text-sm font-medium text-gradient">
                  Read full story →
                </span>
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none rounded-2xl" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows + Pagination */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button className="testimonial-prev w-12 h-12 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                             text-white shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            ←
          </button>
          <div className="testimonial-pagination flex justify-center gap-2" />
          <button className="testimonial-next w-12 h-12 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                             text-white shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            →
          </button>
        </div>

         {/* MODAL */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelected(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-lg w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close button */}
                      <button
                        onClick={() => setSelected(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                      >
                        ✕
                      </button>
        
                      {/* User avatar */}
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={selected.image}
                          alt={selected.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#ff512f]"
                        />
                        <div>
                          <h3 className="text-lg font-semibold font-[Outfit]">{selected.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{selected.role}</p>
                        </div>
                      </div>
        
                      {/* Full feedback */}
                      <p className="text-gray-600 dark:text-gray-300 font-[Inter] leading-relaxed">
                        “{selected.feedback}”
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
      </div>
    </section>
  );
}
