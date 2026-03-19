"use client";

import { FaLeaf, FaCertificate, FaShieldAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex text-center sm:text-left items-center bg-white pt-24 pb-8 md:pt-20 md:pb-12">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gold font-poppins font-semibold tracking-wider uppercase text-xs sm:text-sm">
              AAYURVED NA AANGNE
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-tight text-gray-900 tracking-tight mt-2">
              આયુર્વેદ દ્વારા કુદરતી રીતે <span className="text-herbal block mt-2 text-3xl sm:text-4xl lg:text-5xl">વજન ઘટાડો</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
              આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. 
              આ ચરબી શરીરને બેડોળ બનાવે છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            {[
              { icon: <FaLeaf className="text-herbal" />, text: "100% આયુર્વેદિક" },
              { icon: <FaCertificate className="text-gold" />, text: "પ્રમાણિત રિઝલ્ટ" },
              { icon: <FaShieldAlt className="text-blue-600" />, text: "કોઈ સાઈડ ઇફેક્ટ નથી" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-beige/30 px-4 py-2 rounded-full border border-beige/50 shadow-sm">
                {badge.icon}
                <span className="text-sm font-bold text-gray-800">{badge.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a 
              href="https://wa.me/message/JBAPTQYQ6RH6K1" 
              className="flex sm:inline-flex items-center justify-center gap-3 px-8 py-5 bg-herbal text-white rounded-full font-bold text-lg hover:bg-green-800 transition-all shadow-lg shadow-herbal/20 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <FaWhatsapp size={24} />
              વજન ઘટાડવા માટે સંપર્ક કરો
            </a>
          </div>
        </div>

        <div
          className="relative min-h-[300px] sm:min-h-[450px] lg:h-[550px] w-full mt-2 lg:mt-0"
        >
          <div className="absolute inset-0 bg-beige/50 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
          {/* Authentic Ayurveda Stock Image */}
            <div 
              className="w-full h-full bg-cover bg-center rounded-3xl shadow-2xl relative z-10" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1645088520336-62d94324e869?q=80&w=1200&auto=format&fit=crop")' }}
            >
            </div>
        </div>
      </div>
    </section>
  );
}
