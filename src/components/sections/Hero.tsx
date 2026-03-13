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
