import { FaExclamationTriangle } from "react-icons/fa";
import BmiCalculator from "@/components/BmiCalculator";

export default function DiseasesWarning() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          
          {/* Blog Section 1: Ideal Weight Chart */}
          <div className="space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?
            </h2>
            <div className="relative overflow-hidden mx-auto">
              <img 
                src="/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.55 PM.jpeg" 
                alt="Ideal Body Weight Chart" 
                className="w-full max-h-[400px] object-contain mx-auto" 
              />
            </div>
          </div>

          <div className="space-y-8 py-8">
            <p className="text-xl text-red-600 font-bold text-center leading-relaxed">
              જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો જેવી કે….
            </p>

            <div className="relative mx-auto">
              <img 
                src="/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.56 PM.jpeg" 
                alt="Obesity Related Diseases" 
                className="w-full max-h-[400px] object-contain mx-auto" 
              />
            </div>

            <p className="text-lg text-gray-800 leading-relaxed font-bold text-center">
              – પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
