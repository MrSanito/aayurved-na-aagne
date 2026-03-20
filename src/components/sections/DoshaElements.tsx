import { FaWind, FaFireAlt, FaLeaf } from "react-icons/fa";

export default function DoshaElements() {
  const doshas = [
    {
      id: "vata",
      name: "વાત (Vata)",
      elements: "વાયુ + આકાશ",
      desc: "વાત પ્રકૃતિવાળા લોકોનું વજન ઝડપથી ઘટે છે પરંતુ પાચન અનિયમિત હોય છે. તેમને ગરમ અને પોષક આહારની જરૂર છે.",
      color: "from-blue-400 to-cyan-200",
      borderColor: "border-blue-200",
      icon: <FaWind className="text-blue-200" size={32} />
    },
    {
      id: "pitta",
      name: "પિત્ત (Pitta)",
      elements: "અગ્નિ + જળ",
      desc: "પિત્ત પ્રકૃતિમાં અગ્નિ તત્વ વધુ હોય છે. પાચન ઝડપી હોય છે પણ એસિડિટી થઈ શકે છે. તેમને ઠંડા આહારની જરૂર છે.",
      color: "from-orange-500 to-yellow-300",
      borderColor: "border-orange-200",
      icon: <FaFireAlt className="text-orange-200" size={32} />
    },
    {
      id: "kapha",
      name: "કફ (Kapha)",
      elements: "પૃથ્વી + જળ",
      desc: "કફ પ્રકૃતિવાળા લોકોનું વજન ઝડપથી વધે છે અને ઘટવામાં સમય લાગે છે. ચરબી જલ્દી જમા થાય છે.",
      color: "from-herbal to-green-300",
      borderColor: "border-green-200",
      icon: <FaLeaf className="text-green-200" size={32} />
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0a1912] text-white relative overflow-hidden">
      {/* Decorative background blur elements */}
      <div 
        className="absolute top-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-gold/10 rounded-full blur-[100px]"
      />
      <div 
        className="absolute bottom-10 right-10 w-72 md:w-[500px] h-72 md:h-[500px] bg-herbal/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-gold font-outfit font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
            આયુર્વેદિક વિજ્ઞાન (Ayurvedic Science)
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight font-heading">
            તમારા શરીરની પ્રકૃતિ ઓળખો
          </h3>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-10"></div>
          <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-medium">
            કોઈ પણ કામચલાઉ ડાયેટ કરતા પહેલા તમારા શરીરનો સ્વભાવ જાણવો જરૂરી છે...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {doshas.map((dosha) => (
            <div
              key={dosha.id}
              className="relative p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group transition-all duration-500 hover:bg-white/[0.08]"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br transition-opacity duration-500 ${dosha.color}`} />
              
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className={`absolute inset-0 rounded-full border-t-2 border-r-2 opacity-50 ${dosha.borderColor}`} />
                <div className="absolute inset-4 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-2xl">
                  {dosha.icon}
                </div>
              </div>

              <div className="text-center relative z-10">
                <h4 className="text-2xl font-bold mb-3 text-white font-heading">{dosha.name}</h4>
                <div className="inline-block px-5 py-1.5 rounded-full bg-white/10 text-xs text-white font-bold font-outfit tracking-widest uppercase mb-6 border border-white/10 shadow-inner">
                  {dosha.elements}
                </div>
                <p className="text-stone-400 text-base leading-relaxed group-hover:text-stone-200 transition-colors">
                  {dosha.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
