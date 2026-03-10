import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Certifications from "@/components/sections/Certifications";
import ProductShowcase from "@/components/sections/ProductShowcase";
import About from "@/components/sections/About";
import Methods from "@/components/sections/Methods";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import DoshaElements from "@/components/sections/DoshaElements";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import Benefits from "@/components/sections/Benefits";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Certifications />
      <ProductShowcase />
      <DoshaElements />
      <Transformations />
      <Testimonials />
      <About />
      <Methods />
      <JourneyTimeline />
      <Benefits />
      <InstagramFeed />
      <ContactCTA />
      <Footer />
    </main>
  );
}
