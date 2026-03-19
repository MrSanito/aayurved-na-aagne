"use client";

import { FaShieldAlt, FaAward } from "react-icons/fa";

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-4">
            <h3 className="text-herbal font-bold tracking-[0.2em] uppercase text-sm sm:text-base flex items-center justify-center gap-2">
              <FaShieldAlt className="text-gold" />
              પ્રમાણિત અને 100% સુરક્ષિત
            </h3>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
              ગુજરાત સરકાર દ્વારા માન્યતા પ્રાપ્ત <br className="hidden sm:block" />
              <span className="text-gold">(Weight Control Product)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center pt-4">
            {/* Gujarat Govt Recognition */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-gold/20 to-herbal/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="/images/certs/gujarat-govt-recognition.jpeg" 
                  alt="Gujarat Government Recognition" 
                  className="w-full h-auto rounded-xl shadow-inner transition-transform duration-500 group-hover:scale-[1.03]" 
                />
              </div>
              <p className="mt-4 text-gray-600 font-bold flex items-center justify-center gap-2">
                <FaAward className="text-gold" />
                Gujarat Govt. Certified
              </p>
            </div>

            {/* Combined Badges */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-herbal/20 to-gold/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex items-center justify-center min-h-[300px]">
                <img 
                  src="/images/certs/combined-badges.jpg" 
                  alt="Ayurveda Certifications" 
                  className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]" 
                />
              </div>
              <p className="mt-4 text-gray-600 font-bold flex items-center justify-center gap-2">
                <FaShieldAlt className="text-herbal" />
                Global Trust Standards
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
