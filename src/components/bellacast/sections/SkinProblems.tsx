import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

export function SkinProblems() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <SectionHeader 
              subtitle="Common Issues" 
              title={<span>ત્વચાની સમસ્યાઓ: <br/><span className="text-stone-400">કારણો અને ઉકેલ</span></span>} 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "ખીલ (Acne)", desc: "તેલ અને બેક્ટેરિયાને કારણે થતી સૌથી સામાન્ય સમસ્યા.", color: "bg-red-50 border-red-100", icon: "🔴" },
                { title: "પિગમેન્ટેશન", desc: "ત્વચા પર કાળા ડાઘ અને અસમાન રંગની સમસ્યા.", color: "bg-amber-50 border-amber-100", icon: "🟤" },
                { title: "વધતી ઉંમર", desc: "કરચલીઓ અને ત્વચાનું લૂઝ પડવું.", color: "bg-stone-50 border-stone-200", icon: "⌛" },
                { title: "બ્લેકહેડ્સ", desc: "છિદ્રોમાં ગંદકી જમા થવાને કારણે થતી સમસ્યા.", color: "bg-blue-50 border-blue-100", icon: "⚫" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`p-8 rounded-[2rem] border ${item.color} space-y-3 transition-all`}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h4 className="font-black text-stone-900 text-lg">{item.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gold/10 border-2 border-gold/20 p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-gold/20 group-hover:scale-110 transition-transform"><Award size={60} /></div>
              <p className="text-stone-900 text-lg font-bold leading-relaxed relative z-10">
                <span className="text-gold font-black underline decoration-2 underline-offset-4">બેલાકાસ્ટ પર્સનલ કેર</span> સાથે તમારી ત્વચાની દરેક સમસ્યાનો લાવો કુદરતી અંત.
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-[650px] rounded-[4rem] overflow-hidden border-[15px] border-stone-50 shadow-2xl"
          >
            <img src="/assets/bellacast/Slide11.jpg" alt="Problems" className="w-full h-full object-contain bg-stone-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
