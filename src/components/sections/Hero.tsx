"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-24 md:pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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
              href="https://api.whatsapp.com/message/JBAPTQYQ6RH6K1?autoload=1&app_absent=0"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-h-[350px] sm:min-h-[450px] lg:h-[550px] w-full mt-6 lg:mt-0"
        >
          <div className="absolute inset-0 bg-beige/50 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
          {/* Authentic Ayurveda Stock Image */}
          <div 
            className="w-full h-full bg-cover bg-center rounded-3xl shadow-2xl relative z-10" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1645088520336-62d94324e869?q=80&w=1200&auto=format&fit=crop")' }}
          >
          </div>
        </motion.div>
      </div>
    </section>
  );
}
