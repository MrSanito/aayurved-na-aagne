import { FaExclamationTriangle } from "react-icons/fa";
import BmiCalculator from "@/components/BmiCalculator";

export default function DiseasesWarning() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Blog Section 1: Ideal Weight Chart */}
          <div className="space-y-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-2 border border-gray-100 max-w-xl mx-auto group">
              <img 
                src="/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.55 PM.jpeg" 
                alt="Ideal Body Weight Chart" 
                className="w-full max-h-[400px] object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

          {/* Blog Section 2: Obesity Diseases */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-red-600 bg-red-50/50 p-6 rounded-3xl border border-red-100 text-center md:text-left">
              <FaExclamationTriangle className="shrink-0 animate-pulse" size={32} />
              <p className="text-xl md:text-2xl leading-relaxed font-bold">
                જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો જેવી કે….
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-2 border border-gray-100 max-w-xl mx-auto group">
              <img 
                src="/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.56 PM.jpeg" 
                alt="Obesity Related Diseases" 
                className="w-full max-h-[400px] object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>

            <p className="text-xl text-gray-800 leading-relaxed font-bold text-center italic">
              – પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
            </p>

            <div className="pt-8 max-w-xl mx-auto">
              <BmiCalculator />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
