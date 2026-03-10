"use client";

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-beige/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            આયુર્વેદિક જડીબુટ્ટીઓ અને <span className="text-herbal">સરકારી માન્યતા</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            અમારી પ્રોડક્ટ્સ શુદ્ધ આયુર્વેદિક જડીબુટ્ટીઓમાંથી બનેલી છે અને તેને સરકારી માન્યતા પણ પ્રાપ્ત છે.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <div className="bg-white rounded-4xl shadow-xl p-4 sm:p-8 lg:p-10 border border-beige/60 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
              અમારી પ્રોડક્ટ કિટ અને સામગ્રી (40+ ઔષધિઓ)
            </h3>
            <div className="relative w-full aspect-square sm:aspect-video lg:h-[600px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              <img 
                src="/images/certs/kit-ingredients.jpeg" 
                alt="Ayurvedic Kit and Ingredients" 
                className="w-full h-full object-contain mix-blend-multiply"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1628173499449-cdbd271f28b2?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-4xl shadow-xl p-4 sm:p-8 lg:p-10 border border-beige/60 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
              ગુજરાત સરકાર દ્વારા માન્યતા પ્રાપ્ત (Weight Control Product)
            </h3>
            <div className="relative w-full aspect-square sm:aspect-video lg:h-[500px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              <img 
                src="/images/certs/gujarat-govt-recognition.jpeg" 
                alt="Gujarat Government Recognition Certificates" 
                className="w-full h-full object-contain mix-blend-multiply"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555890209-d754714dbfb7?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
