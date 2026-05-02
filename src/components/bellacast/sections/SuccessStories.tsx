import React from "react";
import { SectionHeader } from "../SectionHeader";
import { VideoBox } from "../VideoBox";

export function SuccessStories() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Real Results" 
          title={<span>અમારા ગ્રાહકોના <br/><span className="text-stone-400">અનુભવો</span></span>} 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <VideoBox key={num} src={`/assets/bellacast/v${num}.mp4`} />
          ))}
        </div>
      </div>
    </section>
  );
}
