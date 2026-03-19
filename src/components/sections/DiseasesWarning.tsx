import { FaExclamationTriangle } from "react-icons/fa";
import BmiCalculator from "@/components/BmiCalculator";

export default function DiseasesWarning() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl space-y-16">
        
        {/* 1. Weight Gain Reasons */}
        <div className="space-y-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            વજન વધવા પાછળના કારણો ?
          </h2>
          <div className="relative overflow-hidden mx-auto">
            <img 
              src="/images/weight-gain-reasons.png" 
              alt="Weight Gain Reasons" 
              className="w-full max-h-[400px] object-contain mx-auto" 
            />
          </div>
        </div>

        {/* 2. Height and Weight Chart */}
        <div className="space-y-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?
          </h2>
          <div className="py-4">
            <img 
              src="/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.56 PM.jpeg" 
              alt="Lifestyle" 
              className="w-full max-h-[300px] object-contain rounded-xl mx-auto"
            />
          </div>
        </div>


        {/* Supporting Text */}
        <div className="space-y-8 py-8">
          <h2 className="text-lg sm:text-xl text-red-600 font-bold text-center leading-relaxed italic">
            - જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો જેવી કે….
          </h2>

          <BmiCalculator />

          <p className="text-base text-gray-800 leading-relaxed font-bold text-center">
            – પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
          </p>
        </div>

      </div>
    </section>
  );
}
