import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

export function FollowUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
            <SectionHeader 
              subtitle="Connect with us" 
              title={<span>સોશિયલ મીડિયા પર <br/><span className="text-stone-400">અમને ફોલો કરો</span></span>} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
               <motion.a 
                href="https://www.instagram.com/aayurvedna_aangne_results" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 p-12 rounded-[3rem] border border-pink-100 flex flex-col items-center gap-6"
               >
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-pink-500 group-hover:rotate-12 transition-transform duration-500">
                    <Instagram size={40} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-stone-900">Instagram</h4>
                    <p className="text-stone-500 font-medium">રોજિંદા સ્કીનકેર ટિપ્સ અને નવા અપડેટ્સ માટે</p>
                  </div>
                  <span className="mt-4 px-8 py-3 bg-white rounded-2xl text-pink-500 font-bold text-sm shadow-sm border border-pink-100 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    Follow @aayurvedna_aangne_results
                  </span>
               </motion.a>

               <motion.a 
                href="https://youtube.com/@aayurvednaaangne" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-stone-50 p-12 rounded-[3rem] border border-red-100 flex flex-col items-center gap-6"
               >
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-red-600 group-hover:-rotate-12 transition-transform duration-500">
                    <Youtube size={40} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-stone-900">YouTube</h4>
                    <p className="text-stone-500 font-medium">વિગતવાર માહિતી અને હેલ્થ ટિપ્સ માટે</p>
                  </div>
                  <span className="mt-4 px-8 py-3 bg-white rounded-2xl text-red-600 font-bold text-sm shadow-sm border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-all">
                    Subscribe Our Channel
                  </span>
               </motion.a>
            </div>
         </div>
      </div>
    </section>
  );
}
