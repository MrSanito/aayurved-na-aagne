"use client";

import { motion } from "framer-motion";
import { BatteryCharging, Heart, Scale, Flame, RefreshCcw } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Scale className="w-8 h-8 text-herbal" />,
      title: "કુદરતી રીતે વજન ઘટાડો",
      desc: "કોઈ પણ આડઅસર વિના કુદરતી ઔષધિઓ દ્વારા વધારાની ચરબી ઘટાડો."
    },
    {
      icon: <Flame className="w-8 h-8 text-herbal" />,
      title: "પાચન શક્તિમાં સુધારો",
      desc: "જઠરાગ્નિ પ્રદીપ્ત કરી ખોરાકનું યોગ્ય પાચન અને પોષણ મેળવો."
    },
    {
      icon: <BatteryCharging className="w-8 h-8 text-herbal" />,
      title: "ઊર્જામાં વધારો",
      desc: "આખો દિવસ શરીરમાં યોગ્ય સ્ફૂર્તિ અને એનર્જી જાળવી રાખો."
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-herbal" />,
      title: "મેટાબોલિઝ્મ બેલેન્સ",
      desc: "મેટાબોલિઝ્મ સિસ્ટમને સક્રિય કરી ચરબી બનવાની પ્રક્રિયા અટકાવો."
    },
    {
      icon: <Heart className="w-8 h-8 text-herbal" />,
      title: "લાંબા ગાળાના પરિણામો",
      desc: "કામચલાઉ નહીં, પરંતુ કાયમી અને ટકાઉ સ્વાસ્થ્ય લાભો મેળવો."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-beige/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">
              સ્વાસ્થ્ય લાભો
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              આયુર્વેદિક પદ્ધતિના મુખ્ય ફાયદા
            </h3>
            <div className="w-20 h-1 bg-herbal mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-transparent group-hover:border-herbal/20">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
