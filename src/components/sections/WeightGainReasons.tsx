import { FaUtensils, FaRegClock, FaWeight, FaLeaf } from "react-icons/fa";

export default function WeightGainReasons() {
  return (
    <section className="py-12 bg-beige/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 font-poppins">
          વજન વધવા પાછળના કારણો?
        </h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.54 PM.jpeg",
                alt: "Lifestyle and Diet",
                label: "ખોટી જીવનશૈલી અને ફાસ્ટ ફૂડની અસર",
                icon: <FaUtensils className="text-orange-500" />
              },
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.54 PM (1).jpeg",
                alt: "Time and Health",
                label: "સમય અને સ્વાસ્થ્યની કિંમત",
                icon: <FaRegClock className="text-blue-500" />
              },
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.55 PM (1).jpeg",
                alt: "Fat Accumulation",
                label: "શરીરમાં જમા થતી હાનિકારક ચરબી",
                icon: <FaWeight className="text-red-500" />
              },
              {
                src: "/AfterHeroSection/WhatsApp Image 2026-03-17 at 1.07.56 PM (1).jpeg",
                alt: "Natural Solutions",
                label: "કુદરતી ઉપાયો: જીમ, ડાયેટ અને યોગા",
                icon: <FaLeaf className="text-herbal" />
              }
            ].map((img, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white p-2 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] w-full aspect-video flex items-center justify-center">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 group-hover:border-gold/30 transition-colors">
                  <span className="text-xl">{img.icon}</span>
                  <p className="text-gray-800 font-bold text-lg">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
