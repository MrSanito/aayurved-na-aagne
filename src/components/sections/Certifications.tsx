"use client";

export default function Certifications() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-center text-lg sm:text-xl font-bold text-gray-500 uppercase tracking-widest mb-12 font-poppins">
          પ્રમાણિત અને 100% સુરક્ષિત
        </h3>
        
        <div className="flex flex-col items-center">
          {/* Combined Badges Image */}
          <div className="w-full max-w-4xl h-auto relative rounded-xl hover:scale-102 transition-all duration-300">
            <img 
              src="/images/certs/combined-badges.jpg" 
              alt="Ayurveda Certifications" 
              className="w-full h-auto object-contain mix-blend-multiply shadow-md rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
