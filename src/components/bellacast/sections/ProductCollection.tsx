import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Droplets, Moon } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { ProductCard } from "../ProductCard";
import { WhatsAppButton } from "../../WhatsAppButton";
import { products } from "../../../app/bellacast/constants";
import { Product } from "../../../app/bellacast/types";

export function ProductCollection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <SectionHeader 
            subtitle="Our Collection" 
            title={<span>કુદરતી નિખાર અને <span className="text-stone-400">સંપૂર્ણ સંભાળ</span></span>} 
          />
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              { key: "all", label: "બધી પ્રોડક્ટ્સ", icon: <Sparkles className="w-4 h-4" /> },
              { key: "skin", label: "સ્કીન કેર", icon: <Droplets className="w-4 h-4" /> },
              { key: "hair", label: "હેર કેર", icon: <Moon className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-3 rounded-2xl font-outfit font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.key 
                    ? "bg-herbal text-white shadow-xl shadow-herbal/20 scale-105" 
                    : "bg-white text-stone-500 hover:text-herbal border border-stone-100"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: Product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-24 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-12 border border-stone-100 shadow-xl">
           <div className="space-y-6">
              <h3 className="text-3xl font-black text-stone-900 leading-tight">અમારી પ્રોડક્ટ્સ વિશે <span className="text-gold">ખાસ શું છે?</span></h3>
              <p className="text-stone-500 text-lg leading-relaxed">હર કેરથી લઈને સ્કીન કેર સુધી, અમારી દરેક પ્રોડક્ટ કુદરતી ઘટકો અને આધુનિક વિજ્ઞાનનો અદ્ભુત સંગમ છે. અમારી પ્રોડક્ટ્સ પેરાબેન-ફ્રી છે અને ત્વચા પર અત્યંત સૌમ્ય છે.</p>
              <div className="bg-herbal/5 p-6 rounded-2xl border-l-4 border-herbal">
                <p className="text-herbal font-bold italic">"આજે જ તમારા સ્કીનકેર રૂટિનમાં બેલાકાસ્ટનો સમાવેશ કરો અને અનુભવો કુદરતી બદલાવ!"</p>
              </div>
           </div>
           <div className="relative">
              <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full py-6 text-xl" />
           </div>
        </div>
      </div>
    </section>
  );
}
