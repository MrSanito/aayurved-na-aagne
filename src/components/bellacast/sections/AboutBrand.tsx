import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Leaf, Award, ShieldCheck } from "lucide-react";

export function AboutBrand() {
  return (
    <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group h-[300px] md:h-[500px]"
          >
            <img src="/assets/bellacast/Slide12.jpg" alt="Brand" className="w-full h-full object-contain p-8 md:p-16 bg-stone-50 transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900 to-transparent p-12">
              <h4 className="text-white font-outfit font-black text-4xl tracking-tight leading-none">
                PURE RESULTS <br/><span className="text-gold">GUARANTEED</span>
              </h4>
            </div>
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-gold font-outfit font-bold tracking-[0.4em] uppercase text-sm">Our Philosophy</span>
              <h2 className="text-4xl sm:text-6xl font-black font-heading leading-tight">બેલાકાસ્ટ પર્સનલ કેર <br/><span className="text-gold opacity-50">પ્રીમિયમ આયુર્વેદિક</span></h2>
            </div>
            
            <div className="space-y-8 text-stone-300 text-xl leading-relaxed font-medium">
              <p>બેલાકાસ્ટ પર્સનલ કેર એક પ્રીમિયમ સ્કીનકેર બ્રાન્ડ છે જે કુદરતી તત્વોના સથવારે તમારી ત્વચાને શ્રેષ્ઠ પોષણ આપવા માટે કટિબદ્ધ છે.</p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <FlaskConical />, text: "GMP Certified" },
                  { icon: <Leaf />, text: "100% Natural" },
                  { icon: <Award />, text: "Lab Tested" },
                  { icon: <ShieldCheck />, text: "Safe & Pure" }
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-gold">{p.icon}</div>
                    <span className="font-bold text-sm text-white">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
