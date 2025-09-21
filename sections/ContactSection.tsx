"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Check, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Fake loading → then success
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Show toast
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSuccess(false);
      }, 3000);
    }, 1500);
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#ff512f]/20 to-[#dd2476]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-[#dd2476]/20 to-[#ff512f]/20 blur-[120px]" />
      </div>

      <div className="container grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Get in" highlight="Touch" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 font-[Inter]">
            We’d love to hear from you. Tell us about your project or idea, and
            we’ll get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-2">
            <p className="font-medium text-gray-800 dark:text-gray-200">
              📧 hello@tejovik.com
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              📞 +91 (555) 123-4567
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5 relative"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md 
                       focus:ring-2 focus:ring-[#ff512f] outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md 
                       focus:ring-2 focus:ring-[#dd2476] outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md 
                       focus:ring-2 focus:ring-[#ff512f] outline-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="relative w-full py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
                       hover:shadow-[0_0_20px_rgba(221,36,118,0.6)] 
                       transition-transform duration-300 hover:scale-[1.03] 
                       flex items-center justify-center"
          >
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : success ? (
              <Check className="h-6 w-6" />
            ) : (
              "Send Message"
            )}
          </button>

          {/* Success Toast */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl 
                           bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-medium shadow-lg"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
