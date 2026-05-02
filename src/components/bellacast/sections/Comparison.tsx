import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { comparisonData } from "../../../app/bellacast/constants";

export function Comparison() {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-herbal/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeader 
            dark
            subtitle="The Better Choice" 
            title={<span>બેલાકાસ્ટ શા માટે? <br/><span className="text-stone-500">સાચી પસંદગીના ફાયદા</span></span>} 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-herbal/20 border border-herbal/30 p-10 rounded-[3rem] space-y-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-herbal rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white">બેલાકાસ્ટ પર્સનલ કેર</h4>
              </div>
              <ul className="space-y-6">
                {comparisonData.bella.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-center group"
                  >
                    <div className="w-6 h-6 rounded-full bg-herbal/30 border border-herbal flex items-center justify-center text-herbal group-hover:scale-125 transition-transform">
                      <Check className="w-3.5 h-3.5 stroke-[4px]" />
                    </div>
                    <span className="text-stone-200 font-medium text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-stone-700 rounded-2xl flex items-center justify-center">
                  <Zap className="text-white w-6 h-6 opacity-40" />
                </div>
                <h4 className="text-2xl font-black text-stone-500">અન્ય કેમિકલ પ્રોડક્ટ્સ</h4>
              </div>
              <ul className="space-y-6">
                {comparisonData.others.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                      <X className="w-3.5 h-3.5 stroke-[4px]" />
                    </div>
                    <span className="text-stone-500 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
