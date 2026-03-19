import { FaExclamationTriangle } from "react-icons/fa";

export default function DiseasesWarning() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="flex items-center justify-center gap-3 text-red-600 bg-red-50 p-4 rounded-2xl border border-red-100">
            <FaExclamationTriangle className="shrink-0" size={24} />
            <p className="text-lg sm:text-xl leading-relaxed font-bold">
              જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો જેવી કે….
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.55 PM.jpeg",
                alt: "Ideal Body Weight Chart",
                label: "આદર્શ વજન અને ઊંચાઈનું કોષ્ટક"
              },
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.56 PM.jpeg",
                alt: "Obesity Diseases",
                label: "ઓબેસિટીના કારણે થતી બીમારીઓ"
              },
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.55 PM (2).jpeg",
                alt: "Surgery and Meds Risks",
                label: "ઓપરેશન અને દવાઓના જોખમો"
              }
            ].map((img, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white p-2 transition-transform duration-300 group-hover:scale-[1.02] w-full aspect-4/3 flex items-center justify-center">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-gray-700 font-semibold text-base sm:text-lg">
                  {img.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium pt-4 italic border-t border-gray-100 mt-8">
            – પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
          </p>
        </div>
      </div>
    </section>
  );
}
