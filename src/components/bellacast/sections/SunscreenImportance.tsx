import React from "react";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

export function SunscreenImportance() {
  return (
    <section className="py-32 bg-beige/30 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]-z-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 group">
            <SectionHeader 
              subtitle="Sun Defense" 
              title={<span>સૂર્યથી રક્ષણ: <br/><span className="text-stone-400">ત્વચાની સુરક્ષા કવચ</span></span>} 
            />
            <p className="text-xl text-gold font-black font-outfit underline decoration-herbal decoration-4 underline-offset-8">SPF નો સાથ, સૂર્યના કિરણોથી આજીવન રાહત!</p>
            <p className="text-stone-500 text-lg leading-relaxed">આપણે ગમે તેટલી મોંઘી પ્રોડક્ટ્સ વાપરીએ, પણ જો ત્વચાને સૂર્યના હાનિકારક કિરણોથી ન બચાવીએ, તો બધું જ નકામું છે.</p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                "સમય પહેલા વધતી ઉંમર અટકાવે: UV કિરણો સામે કરચલીઓ ઘટાડે.",
                "ત્વચાના નુકસાનથી બચાવ: સનબર્ન અને કેન્સરના જોખમ ઘટાડે.",
                "એકસરખો ત્વચાનો રંગ: ટેનિંગ અને પિગમેન્ટેશન ઘટાડી રંગ જાળવે.",
                "સ્વાસ્થ્ય જાળવણી: ત્વચાના આવશ્યક પ્રોટીન (કોલેજન) ને સુરક્ષિત રાખે.",
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex gap-4 items-center bg-white p-6 rounded-2xl border border-stone-100 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Sun className="w-4 h-4" />
                  </div>
                  <span className="text-stone-900 font-bold text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[5rem] overflow-hidden border-[20px] border-white shadow-2xl h-[600px]"
          >
            <img src="/assets/bellacast/Slide16.jpg" alt="Sunscreen" className="w-full h-full object-contain p-8 md:p-16 bg-stone-50" />
            <div className="absolute top-10 right-10 w-24 h-24 bg-white/40 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border border-white/40 p-2 text-center animate-pulse">
              <span className="text-herbal font-black text-xl">SPF 50+</span>
              <span className="text-[10px] text-stone-900 font-bold uppercase">Safe Guard</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
