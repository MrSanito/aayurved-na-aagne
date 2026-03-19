"use client";

import { FaLeaf, FaCertificate, FaShieldAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-24 md:pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div>
            <span className="text-gold font-poppins font-semibold tracking-wider uppercase text-xs sm:text-sm">
              AAYURVED NA AANGNE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              આયુર્વેદ દ્વારા કુદરતી રીતે <span className="text-herbal block mt-2">વજન ઘટાડો</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg leading-relaxed">
              આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. 
              અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
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
              href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
              className="inline-flex items-center gap-3 px-8 py-4 bg-herbal text-white rounded-full font-bold text-lg hover:bg-green-800 transition-all shadow-lg shadow-herbal/20 hover:scale-105 active:scale-95"
            >
              <FaWhatsapp size={24} />
              વજન ઘટાડવા માટે સંપર્ક કરો
            </a>
          </div>
        </div>

        <div
          className="relative min-h-[350px] sm:min-h-[450px] lg:h-[550px] w-full mt-6 lg:mt-0"
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
