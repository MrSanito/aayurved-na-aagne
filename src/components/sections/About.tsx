"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-beige">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[300px] h-[50vw] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: 'url("/assets/1001965644.jpg")' }}
          >
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 px-2 md:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            વજન વધવાનું મુખ્ય કારણ કયું છે?
          </h2>
          <div className="w-20 h-1 bg-herbal rounded-full"></div>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              વજન વધવાનું મુખ્ય કારણ વ્યક્તિની ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ નિયમિત ન હોય જેથી ખાધેલા ખોરાકનું પાચન ન થાય અને પાચન ન થયેલા ખોરાકનું ચરબીમાં રૂપાંતર થતું રહે છે.
            </p>
            <p>
              અને અત્યારે તમારું પાચનતંત્ર નિયમિત નથી જેથી તમે જે કંઈ પણ જમો છો એ ખોરાક પાચન થવાના બદલે ચરબીમાં રૂપાંતર થતું રહે છે અને એ ચરબી તમારા શરીરના જુદા જુદા ભાગમાં જમાં થતી રહે છે.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gold/20 mt-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-herbal"></div>
              <p className="font-semibold text-herbal">
                જો તમારે વજન ઓછું કરવું જ હોય તો કાયમી માટે ઓછું કરવું (પરમેનેન્ટ) જોઈએ કારણ કે કામ ચલાઉ સોલ્યુશન અપનાવશો તો ફરીથી વજન વધી જશે.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
