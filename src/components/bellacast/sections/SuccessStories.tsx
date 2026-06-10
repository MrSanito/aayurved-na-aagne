import React from "react";
import { SectionHeader } from "../SectionHeader";
import { VideoBox } from "../VideoBox";
import { resultImages } from "../../../app/bellacast/constants";

export function SuccessStories() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Real Results" 
          title={<span>અમારા ગ્રાહકોના <br/><span className="text-stone-400">અનુભવો</span></span>} 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {resultImages.map((src, idx) => {
            if (src.endsWith(".mp4")) {
              return <VideoBox key={idx} src={src} />;
            }
            return (
              <div key={idx} className="relative rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white bg-black aspect-[9/16]">
                <img src={src} alt="Success Story" className="w-full h-full object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
