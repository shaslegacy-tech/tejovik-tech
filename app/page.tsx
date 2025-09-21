import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoaderOverlay from "@/components/Loader";
import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseSection from "@/sections/WhyChooseSection";
import ContactSection from "@/sections/ContactSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import BlogSection from "@/sections/BlogSection";

export default function Page() {
  return (
    <>
      {/* <LoaderOverlay /> */}
        <Hero />
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
        <ContactSection />
    </>
  );
}
