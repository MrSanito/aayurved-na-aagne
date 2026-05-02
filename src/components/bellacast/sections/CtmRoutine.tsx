import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";

export function CtmRoutine() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Beauty Routine" 
          title={<span>ડેઇલી સ્કીનકેર રૂટિન: <span className="text-stone-400">CTM પદ્ધતિ</span></span>} 
        />
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img src="/assets/bellacast/Slide15.jpg" alt="CTM" className="w-full h-full object-contain bg-stone-50" />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          <div className="space-y-8">
            <p className="text-stone-600 text-xl leading-relaxed">ત્વચાને સુંદર અને તેજસ્વી રાખવા માટે માત્ર મોંઘી પ્રોડક્ટ્સ નહીં, પણ સાચી પદ્ધતિ જરૂરી છે. નિષ્ણાતો દ્વારા પ્રમાણિત CTM પદ્ધતિ તમારી ત્વચાને સંતુલિત રાખવાનો શ્રેષ્ઠ રસ્તો છે.</p>
            
            <div className="space-y-4">
              {[
                { id: "C", title: "Cleanse (સફાઈ)", desc: "સૌ પ્રથમ ત્વચાને ઊંડાણપૂર્વક સાફ કરો જેથી ધૂળ અને ગંદકી દૂર થાય.", color: "bg-herbal" },
                { id: "T", title: "Tone (ટોનિંગ)", desc: "ત્વચાના છિદ્રોને કડક કરવા અને pH લેવલ જાળવવા ટોનરનો ઉપયોગ કરો.", color: "bg-gold" },
                { id: "M", title: "Moisturize (ભેજ)", desc: "ત્વચાની નમી જાળવી રાખવા અને તેને મુલાયમ બનાવવા મોઇશ્ચરાઇઝર લગાવો.", color: "bg-stone-900" },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-6 items-center p-6 bg-stone-50 rounded-3xl border border-stone-100 hover:border-herbal/20 transition-all cursor-default"
                >
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-outfit font-black text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-black text-stone-900 text-lg mb-1">{step.title}</h4>
                    <p className="text-stone-500 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
