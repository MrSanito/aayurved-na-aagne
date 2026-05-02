import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
import { slideImages } from "../../../app/bellacast/constants";

interface HeroProps {
  activeSlide: number;
}

export function Hero({ activeSlide }: HeroProps) {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden bg-white border-b border-stone-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-herbal/5 rounded-full blur-3xl -mr-48 -mt-48 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48 opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-herbal/5 border border-herbal/10 px-5 py-2.5 rounded-full">
            <Leaf className="w-4 h-4 text-herbal" />
            <span className="text-herbal font-outfit font-bold text-[10px] md:text-xs tracking-widest uppercase">100% Natural • GMP Certified</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-black text-stone-900 leading-tight font-heading">
              બેલાકાસ્ટ <span className="text-herbal italic">પર્સનલ કેર</span>
            </h1>
            <p className="text-xl md:text-3xl text-gold font-bold font-outfit">કુદરતનો સાથ, તમારી સુંદરતાનો વિશ્વાસ</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-3xl mx-auto aspect-[16/10] md:aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group my-12"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={slideImages[activeSlide]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-contain bg-stone-50"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {slideImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    activeSlide === i ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
