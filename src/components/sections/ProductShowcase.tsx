import { FaWhatsapp } from "react-icons/fa";

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 bg-stone-50/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight font-heading">
            આયુર્વેદિક જડીબુટ્ટીઓ  
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-medium">
            અમારી પ્રોડક્ટ્સ શુદ્ધ આયુર્વેદિક જડીબુટ્ટીઓમાંથી બનેલી છે અને તેને સરકારી માન્યતા પણ પ્રાપ્ત છે.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-20">
          <div className="bg-white rounded-[2.5rem] shadow-xl p-6 sm:p-10 border border-stone-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-8 text-center border-b border-stone-50 pb-6 font-heading">
              અમારી પ્રોડક્ટ કિટ અને સામગ્રી (40+ ઔષધિઓ)
            </h3>
            {/* 40+ Herbs Infographic */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-inner border border-stone-50 bg-stone-50">
               <img 
                src="/images/product/ayurvedic_herbs_40.png" 
                alt="Ayurvedic Herbs (40+ Herbs)" 
                className="w-full h-auto block mix-blend-multiply"
              />
            </div>
            <div className="relative w-full aspect-square md:aspect-video lg:h-[650px] rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center mb-10">
              <img 
                src="/content/products.jpeg" 
                alt="Ayurvedic Kit and Ingredients" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/919687105624?text=%E0%AA%AE%E0%AA%A8%E0%AB%87%20%E0%AA%86%E0%AA%AF%E0%AB%80%E0%AA%B0%E0%AB%8D%E0%AA%B5%E0%AB%87%E0%AA%A6%E0%AA%BF%E0%AA%95%20%E0%AA%95%E0%AA%BF%E0%AA%9F%20%E0%AA%B5%E0%AA%BF%E0%AA%B6%E0%AB%87%20%E0%AA%AE%E0%AA%BE%E0%AA%B9%E0%AA%BF%E0%AA%A4%E0%AA%BF%20%E0%AA%9C%E0%AB%8b%E0%AA%87%E0%AA%8F%20%E0%AA%9B%E0%AB%87"
                className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-xl hover:bg-green-600 transition-all shadow-xl hover:scale-105 active:scale-95 font-outfit"
              >
                <FaWhatsapp size={26} />
                પૂછપરછ માટે સંપર્ક કરો
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-12 border border-stone-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center border-b border-stone-50 w-full pb-6 font-heading uppercase tracking-widest font-outfit text-sm">
                3 Month Course
              </h3>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center mb-8">
                <img 
                  src="/content/3 month course.jpeg" 
                  alt="3 Month Course" 
                  className="w-full h-full object-contain"
                />
              </div>
              <a 
                href="https://wa.me/919687105624?text=3%20Month%20Course%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%BF%E0%AA%9F%20%E0%AA%B5%E0%AA%BF%E0%AA%B6%E0%AB%87%20%E0%AA%AE%E0%AA%BE%E0%AA%B9%E0%AA%BF%E0%AA%A4%E0%AA%BF%20%E0%AA%9C%E0%AB%8b%E0%AA%87%E0%AA%8F%20%E0%AA%9B%E0%AB%87"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 active:scale-95 font-outfit uppercase tracking-tighter"
              >
                <FaWhatsapp size={22} />
                3 Month Course
              </a>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-12 border border-stone-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center border-b border-stone-50 w-full pb-6 font-heading uppercase tracking-widest font-outfit text-sm">
                3 Bottle Combo Pack
              </h3>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center mb-8">
                <img 
                  src="/content/3 bottle combo pack have charming body.jpeg" 
                  alt="3 Bottle Combo Pack" 
                  className="w-full h-full object-contain"
                />
              </div>
              <a 
                href="https://wa.me/919687105624?text=3%20Bottle%20Combo%20Pack%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%BF%E0%AA%9F%20%E0%AA%B5%E0%AA%BF%E0%AA%B6%E0%AB%87%20%E0%AA%AE%E0%AA%BE%E0%AA%B9%E0%AA%BF%E0%AA%A4%E0%AA%BF%20%E0%AA%9C%E0%AB%8b%E0%AA%87%E0%AA%8F%20%E0%AA%9B%E0%AB%87"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 active:scale-95 font-outfit uppercase tracking-tighter"
              >
                <FaWhatsapp size={22} />
                Combo Pack
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
