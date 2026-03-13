"use client";

export default function DiseasesWarning() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
            – જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો જેવી કે….
          </p>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
            <img 
              src="/images/diseases-impact.png" 
              alt="Diseases caused by overweight" 
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium pt-4">
            – પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
          </p>
        </div>
      </div>
    </section>
  );
}
