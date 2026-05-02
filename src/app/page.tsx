import Hero from "@/components/sections/Hero";
import BlogContent from "@/components/sections/BlogContent";
import Certifications from "@/components/sections/Certifications";
import ProductShowcase from "@/components/sections/ProductShowcase";
import About from "@/components/sections/About";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import DoshaElements from "@/components/sections/DoshaElements";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import SocialLinks from "@/components/sections/SocialLinks";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden pt-16 md:pt-20">
      <Hero />
      <BlogContent />
      <Certifications />
      <ProductShowcase />
      <DoshaElements />
      <Transformations />
      <Testimonials />
      {/* <About /> */}
       <SocialLinks />
      <ContactCTA />
    </main>
  );
}
