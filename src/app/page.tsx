import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import BlogContent from "@/components/sections/BlogContent";
import Certifications from "@/components/sections/Certifications";
import ProductShowcase from "@/components/sections/ProductShowcase";
import About from "@/components/sections/About";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import DoshaElements from "@/components/sections/DoshaElements";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BlogContent />
      <Certifications />
      <ProductShowcase />
      <DoshaElements />
      <Transformations />
      <Testimonials />
      {/* <About /> */}
       <InstagramFeed />
      <ContactCTA />
      <Footer />
    </main>
  );
}
