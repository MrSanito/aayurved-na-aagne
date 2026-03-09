"use client";

import { motion } from "framer-motion";

export default function Transformations() {
  // Using all available transformation images
  const images = [
    "/assets/1001965731.jpg",
    "/assets/1001972842.jpg",
    "/assets/1001972854.jpg",
    "/assets/1001972865.jpg",
    "/assets/1001965644.jpg",
    "/assets/1001972839.jpg"
  ];

  return (
    <section id="transformations" className="py-24 bg-herbal text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">
              Success Stories
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              અમારી આયુર્વેદીક કીટ ના RESULT & REVIEW
            </h3>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="mt-6 text-beige text-lg max-w-2xl mx-auto">
              માત્ર 90 દિવસમાં સેંકડો લોકોએ આયુર્વેદના માધ્યમથી પોતાનું વજન ઘટાડીને સ્વાસ્થ્ય પાછું મેળવ્યું છે.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-medium bg-herbal/90 px-4 py-1 rounded-full backdrop-blur-sm">
                    Amazing Result
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
