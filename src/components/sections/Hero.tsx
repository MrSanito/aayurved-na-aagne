"use client";

import { FaLeaf, FaCertificate, FaShieldAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative m-0 bg-white pt-16 pb-0 text-center sm:text-left md:min-h-screen md:flex md:items-center md:pt-20 md:pb-12">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 z-10">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gold font-outfit font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              AAYURVED NA AANGNE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-stone-900 tracking-tight mt-4">
              આયુર્વેદ દ્વારા <span className="text-stone-700">કુદરતી રીતે</span> 
              <span className="text-herbal block mt-2 text-5xl sm:text-6xl lg:text-8xl">વજન ઘટાડો</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-lg leading-relaxed font-medium">
              શરીરમાં જમા થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે...
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            {[
              { icon: <FaLeaf className="text-herbal" />, text: "100% આયુર્વેદિક" },
              { icon: <FaCertificate className="text-gold" />, text: "પ્રમાણિત રિઝલ્ટ" },
              { icon: <FaShieldAlt className="text-blue-600" />, text: "કોઈ સાઈડ ઇફેક્ટ નથી" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-stone-50 px-5 py-2.5 rounded-full border border-stone-100 shadow-sm transition-transform hover:scale-105">
                {badge.icon}
                <span className="text-sm font-bold text-stone-800 font-heading">{badge.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a 
              href="https://wa.me/message/JBAPTQYQ6RH6K1" 
              className="flex sm:inline-flex items-center justify-center gap-4 px-10 py-5 bg-herbal text-white rounded-full font-bold text-xl hover:bg-herbal-dark transition-all shadow-xl shadow-herbal/20 hover:scale-105 active:scale-95 w-full sm:w-auto font-outfit"
            >
              <FaWhatsapp size={26} />
              વજન ઘટાડવા માટે સંપર્ક કરો
            </a>
          </div>
        </div>

        <div className="relative w-full mt-0 lg:mt-0">
          <div className="hidden pb-0 md:absolute inset-0 bg-beige/50 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
          {/* Authentic Ayurveda Stock Image */}
          <img 
            src="https://images.unsplash.com/photo-1645088520336-62d94324e869?q=80&w=1200&auto=format&fit=crop"
            alt="Authentic Ayurveda"
            className="w-full h-auto rounded-3xl md:shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
