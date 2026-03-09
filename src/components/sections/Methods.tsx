"use client";

import { motion } from "framer-motion";
import { Leaf, Activity, Sparkles, Sprout, ShieldCheck, Flame } from "lucide-react";

export default function Methods() {
  const features = [
    {
      icon: <Activity size={32} className="text-herbal" />,
      title: "મેટાબોલિઝ્મ સિસ્ટમ",
      desc: "મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમને પ્રોપર કરીને વજન ઓછું કરશે જેથી તમારું વજન ફરીથી વધવાની સંભાવના રહેશે નહી."
    },
    {
      icon: <Leaf size={32} className="text-herbal" />,
      title: "સંપૂર્ણ આયુર્વેદિક",
      desc: "સંપૂર્ણ આયુર્વેદિક કીટ છે. તેની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી. ડોકટરોની ટીમ દ્વારા સર્ટિફાઇડ કીટ છે."
    },
    {
      icon: <ShieldCheck size={32} className="text-herbal" />,
      title: "કોઈ ડાયેટ, કોઈ જીમ નહીં",
      desc: "કોઇ પણ પ્રકારની ડાયેટ ફોલો નથી કરવાની કે ભૂખ્યા નથી રહેવાનું અને GYM કે YOGA કરવાના નથી રહેતા."
    },
    {
      icon: <Flame size={32} className="text-herbal" />,
      title: "હઠીલી ચરબી દુર કરે",
      desc: "વજન તો ઓછું થશે જ પણ સાથે ફાંદ, હિપ્સ, થાઈસ, અને છાતીના ભાગમાં જમાં થયેલી હઠીલી ચરબી દૂર કરશે."
    },
    {
      icon: <Sprout size={32} className="text-herbal" />,
      title: "સરળ ઉપયોગ",
      desc: "કીટમાં પાવડર કે લીકવિડ નથી આવતું. આયુર્વેદિક ગોળીઓ આવશે જે ઉપયોગ કરવામાં એકદમ સરળ રહેશે."
    },
    {
      icon: <Sparkles size={32} className="text-herbal" />,
      title: "પાચન રોગોમાં ફાયદો",
      desc: "ગેસ એસીડીટી કબજિયાત અને પાચન સબંધિત પ્રોબ્લેમમાં ફાયદો થશે, વધારે વજનથી થતી 40 થી વધારે બીમારીઓમાંથી બચાવશે."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">
              શરીરના સ્વભાવ મુજબ આયુર્વેદ
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              અમારી આયુર્વેદીક કીટ થી થતા ફાયદાઓ
            </h3>
            <div className="w-24 h-1 bg-herbal mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-beige p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-herbal/20"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-herbal">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
