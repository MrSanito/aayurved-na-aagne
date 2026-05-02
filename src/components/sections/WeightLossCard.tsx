"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WeightLossCard() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-herbal/10 to-gold/10 rounded-[3rem] p-8 md:p-12 border border-herbal/20 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-inner flex-shrink-0">
            🥗
          </div>
          <div className="flex-grow text-center md:text-left space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-stone-900">વજન ઘટાડવા વિશે વધુ જાણો (Weight Loss Guide)</h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              આયુર્વેદિક રીતે વજન ઘટાડવા માટેની સંપૂર્ણ માહિતી અને પ્રોડક્ટ્સ વિશે જાણવા માટે અહીં ક્લિક કરો.
            </p>
            <Link 
              href="/women" 
              className="inline-flex items-center gap-3 bg-herbal text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-herbal-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-herbal/20"
            >
              વધુ જાણો (Know More)
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
