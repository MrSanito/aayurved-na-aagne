import { FaCamera, FaCheckCircle, FaImages } from "react-icons/fa";

export default function Transformations() {
  const images = [
    "/content/prodcut result.jpeg",
    "/assets/1001965731.jpg",
    "/assets/1001972842.jpg",
    "/assets/1001972854.jpg",
    "/assets/1001972865.jpg",
    "/assets/1001965644.jpg",
    "/assets/1001972839.jpg"
  ];

  return (
    <section id="transformations" className="py-24 md:py-32 bg-herbal text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaCamera className="text-gold" size={24} />
            <span className="text-sm font-bold text-gold tracking-[0.3em] uppercase font-outfit">
              Success Stories
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight font-heading">
            અમારી આયુર્વેદીક કીટ ના <span className="text-white/80 italic font-light font-outfit block mt-2 text-2xl md:text-3xl tracking-widest uppercase">Result & Review</span>
          </h3>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-10"></div>
          <p className="text-beige/80 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            માત્ર 90 દિવસમાં સેંકડો લોકોએ આયુર્વેદના માધ્યમથી પોતાનું વજન ઘટાડીને સ્વાસ્થ્ય પાછું મેળવ્યું છે.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-2 border border-white/10"
            >
              <div className="relative h-80 md:h-96 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-center gap-2 text-white font-bold bg-herbal/95 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl font-outfit text-sm uppercase tracking-widest">
                    <FaCheckCircle className="text-gold" />
                    <span>Amazing Result</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
