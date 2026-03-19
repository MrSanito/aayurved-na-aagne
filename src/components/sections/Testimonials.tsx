import { FaStar, FaQuoteRight, FaUser, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Riteshbhai Patel",
      review: "મેં ઘણા પ્રયત્નો કર્યા હતા, પણ આ આયુર્વેદિક કોર્સથી મારું 8 કિલો વજન ઘટ્યું છે. કોઈ સાઇડ ઈફેક્ટ નથી થઈ અને ડાયજેશન પણ સુધર્યું છે.",
      rating: 5
    },
    {
      name: "Sonalben Shah",
      review: "માત્ર 2 મહિના ના ઉપયોગથી મારી કમરની ચરબી સાવ ઓછી થઈ ગઈ. પહેલા હું થોડું ચાલતી તો થાકી જતી, હવે એકદમ એનર્જી રહે છે.",
      rating: 5
    },
    {
      name: "Ketan Desai",
      review: "ખરેખર ખૂબ જ સરસ પ્રોડક્ટ છે. જીમ ગયા વગર અને કોઈ કડક ડાયેટ વિના જબરદસ્ત રિઝલ્ટ મળ્યું છે.",
      rating: 5
    }
  ];



  return (
    <section className="py-16 md:py-24 bg-beige/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-herbal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ગ્રાહકો ના પ્રતિભાવો
            </h2>
            <div className="w-20 h-1 bg-herbal mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-4xl shadow-sm border border-transparent hover:border-herbal/20 hover:shadow-xl transition-all relative group overflow-hidden"
            >
              <FaQuoteRight className="absolute -top-2 -right-2 text-beige/20 w-24 h-24 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              
              <div className="flex gap-1 mb-6 text-gold relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} size={18} fill="currentColor" />
                ))}
              </div>
              
              <div className="mb-8 min-h-[100px]">
                {t.review.split(' ').map((word, wordIndex) => (
                  <span 
                    key={wordIndex} 
                    className="inline-block mr-1 text-gray-700 italic leading-relaxed" 
                  >
                    {word}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-herbal/10 rounded-full flex items-center justify-center text-herbal shadow-inner border border-herbal/5">
                  <FaUser className="opacity-80" />
                </div>
                <div className="font-bold text-gray-900 tracking-tight">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
