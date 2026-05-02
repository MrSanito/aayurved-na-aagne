import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { skinTypes } from "../../../app/bellacast/constants";

export function ScientificApproach() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeader 
            subtitle="The Science of Beauty" 
            title={<span>તમારી ત્વચાનો પ્રકાર <br/><span className="text-stone-400">શું તમે જાણો છો?</span></span>} 
          />
          <p className="text-stone-500 text-lg">દરેક ત્વચાની જરૂરિયાત અલગ હોય છે. સાચી પ્રોડક્ટ પસંદ કરવા માટે તમારી ત્વચાને સમજવી ખૂબ જરૂરી છે.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skinTypes.map((type, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${type.color} p-8 rounded-[2.5rem] border ${type.border} shadow-sm hover:shadow-xl transition-all duration-500 group`}
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{type.icon}</div>
              <h4 className="font-black text-stone-900 text-lg mb-1">{type.name}</h4>
              <p className="text-[10px] font-outfit font-black text-herbal/60 uppercase tracking-widest mb-4">{type.en}</p>
              <p className="text-stone-500 text-xs leading-relaxed">{type.desc}</p>
              <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-1 h-1 rounded-full bg-herbal/20"></div>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-herbal/40 uppercase tracking-tighter">Expert Recommended Care</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
