"use client";

import { MessageCircle, Users } from "lucide-react";
import BmiCalculator from "@/components/BmiCalculator";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-24 md:pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div
          className="space-y-6 z-10"
        >
          <span className="text-gold font-poppins font-semibold tracking-wider uppercase text-xs sm:text-sm">
            AAYURVED NA AANGNE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
            આયુર્વેદ દ્વારા કુદરતી રીતે <span className="text-herbal block mt-2">વજન ઘટાડો</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. 
            અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full">
            <a
              href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
              target="_blank"
              className="btn bg-herbal text-white border-none hover:bg-green-800 rounded-full px-8 py-3 h-auto flex items-center justify-center gap-3 w-full sm:w-fit shadow-lg shadow-herbal/30 text-sm sm:text-base font-semibold"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              Personal Coaching
            </a> 
            <a
              href="https://chat.whatsapp.com/HmzbYQBxadJ3olIPYhi70Y"
              target="_blank"
              className="btn bg-white text-herbal border-2 border-herbal hover:bg-beige rounded-full px-8 py-3 h-auto flex items-center justify-center gap-3 w-full sm:w-fit shadow-md text-sm sm:text-base font-semibold"
            >
              <Users size={20} className="sm:w-6 sm:h-6" />
              Join Group for Tips
            </a>
          </div>
        </div>

        <div
          className="relative min-h-[350px] sm:min-h-[450px] lg:h-[550px] w-full mt-6 lg:mt-0"
        >
          <div className="absolute inset-0 bg-beige/50 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
          {/* Authentic Ayurveda Stock Image */}
          <div 
            className="w-full h-full bg-cover bg-center rounded-3xl shadow-2xl relative z-10 flex items-end justify-start sm:justify-end p-4 sm:p-6 lg:p-8" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1645088520336-62d94324e869?q=80&w=1200&auto=format&fit=crop")' }}
          >
            <div
              className="w-full sm:w-auto"
            >
              <BmiCalculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
