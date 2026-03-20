import { FaStar, FaQuoteRight, FaUser } from "react-icons/fa";

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
    <section className="py-24 md:py-32 bg-stone-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-herbal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="text-herbal font-outfit font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight font-heading">
            ગ્રાહકો ના પ્રતિભાવો
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 hover:border-herbal/20 hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden"
            >
              <FaQuoteRight className="absolute -top-4 -right-4 text-stone-50 w-32 h-32 -rotate-12 transition-transform duration-700 group-hover:rotate-0" />
              
              <div className="flex gap-1 mb-8 text-gold relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} size={20} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="mb-10 text-stone-600 text-lg md:text-xl font-medium leading-relaxed italic relative z-10">
                "{t.review}"
              </blockquote>
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:bg-herbal group-hover:text-white transition-colors duration-500 shadow-inner">
                  <FaUser size={24} />
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-lg font-heading">{t.name}</div>
                  <div className="text-sm text-stone-400 font-bold uppercase tracking-widest font-outfit">Verified Buyer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
