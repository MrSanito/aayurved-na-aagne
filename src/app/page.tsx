import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Methods from "@/components/sections/Methods";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import Benefits from "@/components/sections/Benefits";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Transformations />
      <Testimonials />
      <About />
      <Methods />
      <Benefits />
      <InstagramFeed />
      <ContactCTA />
      <Footer />
    </main>
  );
}
