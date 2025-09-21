"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ExternalLink, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import KnowMoreButton from "@/components/KnowMoreButton";

const projects = [
  {
    title: "AI Dashboard",
    type: "Web App",
    description: "An AI-powered analytics dashboard with real-time insights.",
    image: "/projects/edu.jpg",
    link: "#",
  },
  {
    title: "E-Commerce Store",
    type: "Website",
    description: "A scalable, modern e-commerce platform with payment integration.",
    image: "/projects/ecommerce.jpg",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    type: "Mobile App",
    description: "A secure and fast mobile banking solution for iOS & Android.",
    image: "/projects/banking.jpg",
    link: "#",
  },
  {
    title: "Portfolio Platform",
    type: "Web App",
    description: "A platform for creatives to showcase their work beautifully.",
    image: "/projects/portfolio.jpg",
    link: "#",
  },
  {
    title: "Healthcare System",
    type: "Software",
    description: "Enterprise-level healthcare management software.",
    image: "/projects/healthcare.jpg",
    link: "#",
  },
  {
    title: "SaaS CRM",
    type: "Web App",
    description: "Customer relationship management SaaS product.",
    image: "/projects/saas.jpg",
    link: "#",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-0 w-[36rem] h-[36rem] rounded-full 
                        bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full 
                        bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[100px]" />
      </div>

      <div className="container relative">
        {/* Section Title */}
        <SectionTitle title="Our" highlight="Projects" />

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !w-3 !h-3 md:!w-3.5 md:!h-3.5 rounded-full transition-all " +
              "bg-gradient-to-r from-gray-300 to-gray-400 opacity-70 hover:opacity-100 hover:scale-110",
            bulletActiveClass:
              "!opacity-100 !scale-125 !bg-gradient-to-r !from-[#ff512f] !to-[#dd2476] shadow-[0_0_12px_rgba(221,36,118,0.6)] animate-pulse-gradient",
          }}

          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }, // ✅ 4 cards on desktop
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <FlipCard project={p} onOpenModal={setSelected} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Premium Navigation Arrows */}
        <button className="custom-prev absolute top-1/2 -left-6 z-10 w-12 h-12 rounded-full 
                           bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white shadow-lg 
                           flex items-center justify-center hover:scale-110 transition">
          <ChevronLeft size={22} />
        </button>
        <button className="custom-next absolute top-1/2 -right-6 z-10 w-12 h-12 rounded-full 
                           bg-gradient-to-r from-[#dd2476] to-[#ff512f] text-white shadow-lg 
                           flex items-center justify-center hover:scale-110 transition">
          <ChevronRight size={22} />
        </button>
        <KnowMoreButton
          href="/projects"
          label="View All Projects"
          className="mt-12 mx-auto block"
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl
                         bg-white dark:bg-gray-900 p-6"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-[#dd2476]"
              >
                <X size={24} />
              </button>
              <img src={selected.image} alt={selected.title} className="w-full rounded-xl mb-6" />
              <h3 className="text-2xl font-bold font-[Outfit] mb-2">{selected.title}</h3>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide 
                               bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white rounded-full mb-4">
                {selected.type}
              </span>
              <p className="text-gray-600 dark:text-gray-400 font-[Inter] mb-6">
                {selected.description}
              </p>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-full 
                           bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-medium shadow-md hover:scale-105 transition"
              >
                Visit Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FlipCard({ project, onOpenModal }: any) {
  return (
    <div className="group perspective h-80 w-full">
      <div
        className="relative h-full w-full transform-style-preserve-3d transition-transform duration-700 
                   ease-[cubic-bezier(0.4,0.2,0.2,1.0)] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 p-6 rounded-2xl border border-gray-200 dark:border-gray-700
                        bg-white/90 dark:bg-gray-900/90 shadow-lg
                        hover:shadow-[0_0_40px_rgba(221,36,118,0.35)]
                        backface-hidden flex flex-col justify-center text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide 
                           bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white rounded-full mb-4">
            {project.type}
          </span>
          <h3 className="text-xl font-semibold font-[Outfit] mb-2 
                         bg-gradient-to-r from-[#ff512f] to-[#dd2476] bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-[Inter]">
            {project.description}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 
                        [transform:rotateY(180deg)] backface-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/40">
            <a href={project.link} target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition">
              <ExternalLink className="text-[#ff512f]" />
            </a>
            <button onClick={() => onOpenModal(project)}
               className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition">
              <Eye className="text-[#dd2476]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
