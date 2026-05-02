import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";

export function InternalFactors() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-herbal/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader 
            subtitle="Inside Matters" 
            title={<span>ત્વચાનું સ્વાસ્થ્ય: <span className="text-stone-400">આંતરિક પરિબળો</span></span>} 
          />
          <p className="text-stone-500 text-lg leading-relaxed">
            સુંદર અને ચમકદાર ત્વચા મેળવવા માટે માત્ર ક્રીમ કે લોશન પૂરતા નથી. શું તમે જાણો છો કે તમારી ત્વચા અંદરથી કેવી રીતે પ્રભાવિત થાય છે?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🧬", title: "આનુવંશિકતા", en: "Genetics", desc: "તમારા જનીનો નક્કી કરે છે કે તમારી ત્વચાની પ્રકૃતિ કેવી હશે." },
              { icon: "⚗️", title: "હોર્મોન્સ", en: "Hormones", desc: "શરીરમાં હોર્મોનલ ફેરફારોને કારણે ખીલની સમસ્યા થઈ શકે છે." },
              { icon: "🏥", title: "તબીબી સ્થિતિ", en: "Medical Status", desc: "સ્વાસ્થ્ય સંબંધિત અમુક સમસ્યાઓ ત્વચાને અસર કરી શકે છે." },
              { icon: "😰", title: "માનસિક તણાવ", en: "Stress", desc: "વધુ પડતો સ્ટ્રેસ ત્વચાને નિસ્તેજ અને થાકેલી બનાવી દે છે." },
              { icon: "😴", title: "ઊંઘનો અભાવ", en: "Sleep Deprival", desc: "અપૂરતી ઊંઘને કારણે આંખો નીચે કુંડાળા દેખાઈ શકે છે." },
              { icon: "🥗", title: "આહાર", en: "Diet", desc: "તમે જે ખાઓ છો તેની અસર તમારી ત્વચા પર સીધી દેખાય છે." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-stone-50 p-6 rounded-3xl border border-stone-100 hover:border-herbal/20 transition-all duration-300 shadow-sm"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-stone-900 text-base mb-1">{item.title}</h4>
                <p className="text-herbal font-outfit text-[10px] uppercase font-black tracking-widest mb-3">{item.en}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img src="/assets/bellacast/Slide9.jpg" alt="Internal Factors" className="w-full h-full object-contain p-8 md:p-16 bg-stone-50" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10">
              <p className="text-white text-xl font-bold leading-relaxed">
                તમારા શરીરની અંદરથી કાળજી લો, <br/>અને બહાર કુદરતી નિખાર મેળવો!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
