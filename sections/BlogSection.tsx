"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Designing Premium Digital Experiences",
    excerpt:
      "Explore how branding, gradients, and motion combine to create products that feel timeless and premium.",
    date: "Aug 2025",
    author: "Alex Carter",
  },
  {
    title: "Scaling Modern Applications",
    excerpt:
      "Best practices for building scalable, secure apps that grow with your business.",
    date: "Jul 2025",
    author: "Priya Mehta",
  },
  {
    title: "Why Motion Matters in Branding",
    excerpt:
      "Subtle animations improve engagement and elevate your brand perception dramatically.",
    date: "Jun 2025",
    author: "Daniel Smith",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-28 overflow-hidden">
      {/* Gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-[#ff512f]/15 to-[#dd2476]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#dd2476]/15 to-[#ff512f]/15 blur-[120px]" />
      </div>

      <div className="container">
        <SectionTitle title="Latest" highlight="Insights" />

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl border border-white/20 dark:border-gray-700 
                         bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6
                         shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                {post.date} · {post.author}
              </div>
              <h3 className="text-xl font-semibold font-[Outfit] mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#ff512f] to-[#dd2476]">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-[Inter] mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center text-[#dd2476] font-medium group-hover:underline">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 rounded-xl text-white font-semibold 
                             bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                             hover:shadow-[0_0_20px_rgba(221,36,118,0.6)] 
                             transition-transform duration-300 hover:scale-[1.03]">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
