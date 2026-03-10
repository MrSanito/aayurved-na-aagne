"use client";

export default function Certifications() {
  const certs = [
    { src: "/images/certs/vegan.jpeg", alt: "Vegan" },
    { src: "/images/certs/no-animal-testing.jpeg", alt: "Not Tested on Animals" },
    { src: "/images/certs/gmp-certified.jpeg", alt: "GMP Certified" },
    { src: "/images/certs/gluten-free.jpeg", alt: "Gluten Free" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-center text-lg sm:text-xl font-bold text-gray-500 uppercase tracking-widest mb-8">
          પ્રમાણિત અને 100% સુરક્ષિત
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 mix-blend-multiply">
          {certs.map((cert, idx) => (
            <div 
              key={idx} 
              className="w-20 h-20 sm:w-28 sm:h-28 relative grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
              title={cert.alt}
            >
              <img 
                src={cert.src} 
                alt={cert.alt}
                className="w-full h-full object-contain drop-shadow-sm" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-full text-xs text-center text-gray-400 p-2 font-poppins">${cert.alt}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
