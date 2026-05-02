import React from "react";
import { motion } from "framer-motion";
import { SectionHeaderProps } from "../../app/bellacast/types";

export function SectionHeader({ subtitle, title, dark = false }: SectionHeaderProps) {
  return (
    <div className="space-y-4 mb-12 sm:mb-16">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`${dark ? "text-amber-200" : "text-herbal"} font-outfit font-bold tracking-[0.3em] uppercase text-xs md:text-sm block`}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl sm:text-5xl font-extrabold leading-tight font-heading ${dark ? "text-white" : "text-stone-900"}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
