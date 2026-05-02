import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { galleryImages } from "../../../app/bellacast/constants";

export function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Visual Journey" 
          title={<span>અમારી પ્રોડક્ટ્સની <br/><span className="text-stone-400">એક ઝલક</span></span>} 
        />
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-700"
            >
              <img 
                src={img.src} 
                alt="Gallery" 
                className={`w-full ${img.height} object-contain transition-transform duration-1000 group-hover:scale-110 p-4 bg-stone-50`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-1">BellaCast Care</p>
                  <p className="font-bold text-sm">Natural Glow Secret</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
