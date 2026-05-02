import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  Clock, 
  ChevronRight 
} from "lucide-react";
import { Product } from "../../app/bellacast/types";

export function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div 
      layout
      className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-herbal/10 transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden bg-stone-50">
        <motion.img
          src={product.img}
          alt={product.name}
          className="object-contain h-full w-full px-10 py-16 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-outfit font-black text-herbal shadow-sm border border-herbal/10">
            {product.badge}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium italic opacity-90">{product.tagline}</p>
        </div>
      </div>
      
      <div className="p-8 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-herbal transition-colors duration-300">{product.name}</h3>
          <p className="text-gold font-bold text-sm mt-1">{product.subtitle}</p>
        </div>
        
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 italic">
          "{product.intro}"
        </p>

        <motion.div animate={{ height: expanded ? "auto" : 0 }} className="overflow-hidden">
          <div className="pt-4 space-y-6 border-t border-stone-100">
            <div className="space-y-3">
              <h4 className="font-bold text-herbal text-sm flex items-center gap-2">
                <Target className="w-4 h-4" /> {product.why}
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {product.whyPoints.map((p: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xs text-stone-600 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-herbal mt-0.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-gold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> મુખ્ય ફાયદાઓ:
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {product.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xs text-stone-600 leading-relaxed">
                    <Star className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0 fill-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-herbal" /> કેવી રીતે વાપરવું?
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">{product.howToUse}</p>
            </div>
          </div>
        </motion.div>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full py-3 rounded-xl font-outfit font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
            expanded ? "bg-stone-100 text-stone-600" : "bg-herbal text-white hover:bg-herbal-dark shadow-lg shadow-herbal/20"
          }`}
        >
          {expanded ? "ઓછું જુઓ" : "વધુ જાણો"}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}
