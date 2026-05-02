import React from "react";
import { motion } from "framer-motion";
import { Wind, FlaskConical, Sun, Zap } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

export function ExternalFactors() {
  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader 
            subtitle="External Shield" 
            title={<span>ત્વચાનું રક્ષણ: <span className="text-stone-400">બાહ્ય પરિબળો</span></span>} 
          />
          <p className="text-stone-600 text-lg">શું તમારી ત્વચા બહારના વાતાવરણ સામે સુરક્ષિત છે? આપણી ત્વચા દરરોજ અનેક બાહ્ય પડકારોનો સામનો કરે છે.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-[550px] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl"
          >
            <img src="/assets/bellacast/Slide10.jpg" alt="External Factors" className="w-full h-full object-contain bg-stone-50" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Wind className="w-6 h-6" />, title: "પ્રદૂષણ (Pollution)", desc: "હવામાં રહેલા ઝેરી તત્વો અને અશુદ્ધ પાણી ત્વચાના છિદ્રોને બંધ કરી દે છે." },
              { icon: <FlaskConical className="w-6 h-6" />, title: "હાનિકારક કેમિકલ્સ", desc: "પેરાબેન (Paraben) અને અન્ય કઠોર કેમિકલ્સ ત્વચાના કુદરતી અવરોધને તોડે છે." },
              { icon: <Sun className="w-6 h-6" />, title: "UV કિરણો", desc: "સૂર્યના હાનિકારક અલ્ટ્રાવાયોલેટ કિરણો ત્વચા પર ટેનિંગ અને અકાળે કરચલીઓ લાવે છે." },
              { icon: <Zap className="w-6 h-6" />, title: "હવામાન ફેરફાર", desc: "અત્યંત ઠંડી કે ગરમી ત્વચાના ભેજનું સંતુલન બગાડે છે અને તેને નબળી પાડે છે." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex gap-6 items-center bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-xl mb-1">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="bg-herbal p-8 rounded-[2rem] text-white shadow-xl shadow-herbal/20">
              <p className="text-lg font-bold leading-relaxed">
                બહારના પ્રદૂષણ સામે રક્ષણ મેળવવા માટે હંમેશા કુદરતી અને સલામત સ્કીનકેર અપનાવો.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
