"use client";

export default function Certifications() {
  const topRow = [
    { src: "/images/certs/ayurveda-100.png", alt: "100% Ayurveda" },
    { src: "/images/certs/fda-approved.png", alt: "FDA Approved" },
    { src: "/images/certs/iso-certified.png", alt: "ISO Certified" },
  ];
  const middleRow = { src: "/images/certs/make-in-india.png", alt: "Make in India" };
  const bottomRow = [
    { src: "/images/certs/gmp-certified.png", alt: "GMP Certified" },
    { src: "/images/certs/ayush-premium.png", alt: "Ayush Premium" },
    { src: "/images/certs/no-side-effects.png", alt: "No Side Effects" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-center text-lg sm:text-xl font-bold text-gray-500 uppercase tracking-widest mb-12">
          પ્રમાણિત અને 100% સુરક્ષિત
        </h3>
        
        <div className="flex flex-col items-center gap-10 lg:gap-14">
          
          {/* Highlighted Images Before Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full mb-8">
            <div className="w-full max-w-md h-auto sm:h-72 relative rounded-xl hover:scale-105 transition-all duration-300">
              <img 
                src="/images/certs/kit-ingredients.jpeg" 
                alt="Kit Ingredients" 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
            <div className="w-full max-w-md h-auto sm:h-72 relative rounded-xl hover:scale-105 transition-all duration-300">
              <img 
                src="/images/certs/gujarat-govt-recognition.jpeg" 
                alt="Gujarat Govt Recognition" 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Top Row */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {topRow.map((cert, idx) => (
              <div key={idx} className="w-24 h-24 sm:w-32 sm:h-32 relative hover:scale-105 transition-all duration-300" title={cert.alt}>
                <img src={cert.src} alt={cert.alt} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>

          {/* Middle Row */}
          <div className="flex justify-center items-center w-full">
            <div className="h-28 sm:h-40 relative hover:scale-105 transition-all duration-300 w-full max-w-sm" title={middleRow.alt}>
              <img src={middleRow.src} alt={middleRow.alt} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {bottomRow.map((cert, idx) => (
              <div key={idx} className="w-24 h-24 sm:w-32 sm:h-32 relative hover:scale-105 transition-all duration-300" title={cert.alt}>
                <img src={cert.src} alt={cert.alt} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
