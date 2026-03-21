"use client";
import { FaLeaf, FaCertificate, FaShieldAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative m-0 bg-white pt-16 pb-0 text-center sm:text-left md:min-h-screen md:flex md:items-center md:pt-20 md:pb-12 overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#86aa54" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "#d4a33a" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

        {/* Left column */}
        <div className="space-y-6 sm:space-y-8 z-10">
          <div className="flex flex-col items-center sm:items-start">

            {/* Eyebrow */}
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-bold tracking-[0.2em] uppercase text-xs sm:text-sm"
              style={{ background: "rgba(134,170,84,0.10)", border: "1px solid rgba(134,170,84,0.25)", color: "#7a5c1e" }}
            >
              <FaLeaf style={{ color: "#86aa54", fontSize: "0.6rem" }} />
              AAYURVED NA AANGNE
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-stone-900 tracking-tight mt-4">
              આયુર્વેદ દ્વારા <span className="text-stone-700">કુદરતી રીતે</span>
              <span className="block mt-2 text-5xl sm:text-6xl lg:text-8xl" style={{ color: "#4a7c1f" }}>
                વજન ઘટાડો
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-lg leading-relaxed font-medium">
              શરીરમાં જમા થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે...
            </p>

            {/* Divider */}
            <div className="mt-5 flex items-center gap-3 self-center sm:self-start">
              <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #86aa54, transparent)" }} />
              <FaLeaf style={{ color: "#86aa54", fontSize: "0.65rem", opacity: 0.5 }} />
              <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, transparent, #d4a33a)" }} />
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            {[
              { icon: <FaLeaf style={{ color: "#4a7c1f" }} />, text: "100% આયુર્વેદિક", accent: "#4a7c1f" },
              { icon: <FaCertificate style={{ color: "#c8860a" }} />, text: "પ્રમાણિત રિઝલ્ટ", accent: "#c8860a" },
              { icon: <FaShieldAlt style={{ color: "#2563eb" }} />, text: "કોઈ સાઈડ ઇફેક્ટ નથી", accent: "#2563eb" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-stone-50 px-5 py-2.5 rounded-full border border-stone-100 shadow-sm transition-transform hover:scale-105"
                style={{ borderLeftColor: badge.accent, borderLeftWidth: 2 }}
              >
                {badge.icon}
                <span className="text-sm font-bold text-stone-800">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="https://wa.me/message/JBAPTQYQ6RH6K1"
              className="flex sm:inline-flex items-center justify-center gap-4 px-10 py-5 text-white rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #5a9416, #3e6e10)",
                boxShadow: "0 12px 32px rgba(74,124,31,0.30)",
              }}
            >
              <FaWhatsapp size={26} />
              વજન ઘટાડવા માટે સંપર્ક કરો
            </a>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative w-full mt-0 lg:mt-0">
          <img
            src="/images/uploaded/hero_new.jpg"
            alt="Ayurveda Weight Loss"
            className="w-full h-auto rounded-3xl md:shadow-2xl relative z-10"
          />

          {/* Stats card overlay */}
          <div
            className="absolute bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl z-20"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 38, height: 38, background: "linear-gradient(135deg,#86aa54,#4a7c1f)" }}
            >
              <FaLeaf style={{ color: "#fff", fontSize: 16 }} />
            </div>
            <div>
              <div className="font-extrabold text-stone-800 text-sm leading-tight">500+ ગ્રાહકો</div>
              <div className="text-stone-400 text-xs mt-0.5">સફળ ઉપચાર • 2024</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}