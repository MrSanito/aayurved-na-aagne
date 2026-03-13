"use client";

import Image from "next/image";

export default function WeightGainReasons() {
  return (
    <section className="py-12 bg-beige/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 font-poppins">
          વજન વધવા પાછળના કારણો?
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl relative rounded-2xl overflow-hidden shadow-xl bg-white p-2">
            <img 
              src="/images/weight-gain-reasons.png" 
              alt="Reasons for Weight Gain" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
