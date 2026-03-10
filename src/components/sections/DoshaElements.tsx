

export default function DoshaElements() {
  const doshas = [
    {
      id: "vata",
      name: "વાત (Vata)",
      elements: "વાયુ + આકાશ",
      desc: "વાત પ્રકૃતિવાળા લોકોનું વજન ઝડપથી ઘટે છે પરંતુ પાચન અનિયમિત હોય છે. તેમને ગરમ અને પોષક આહારની જરૂર છે.",
      color: "from-blue-400 to-cyan-200",
      borderColor: "border-blue-200"
    },
    {
      id: "pitta",
      name: "પિત્ત (Pitta)",
      elements: "અગ્નિ + જળ",
      desc: "પિત્ત પ્રકૃતિમાં અગ્નિ તત્વ વધુ હોય છે. પાચન ઝડપી હોય છે પણ એસિડિટી થઈ શકે છે. તેમને ઠંડા આહારની જરૂર છે.",
      color: "from-orange-500 to-yellow-300",
      borderColor: "border-orange-200"
    },
    {
      id: "kapha",
      name: "કફ (Kapha)",
      elements: "પૃથ્વી + જળ",
      desc: "કફ પ્રકૃતિવાળા લોકોનું વજન ઝડપથી વધે છે અને ઘટવામાં સમય લાગે છે. ચરબી જલ્દી જમા થાય છે.",
      color: "from-herbal to-green-300",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-[#0a1912] text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative background blur elements */}
      <div 
        className="absolute top-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-gold/10 rounded-full blur-[100px]"
      />
      <div 
        className="absolute bottom-10 right-10 w-72 md:w-[500px] h-72 md:h-[500px] bg-herbal/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div>
            <h2 className="text-gold font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
              આયુર્વેદિક વિજ્ઞાન (Ayurvedic Science)
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              તમારા શરીરની પ્રકૃતિ ઓળખો
            </h3>
            <div className="w-16 md:w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 md:text-lg leading-relaxed px-4 md:px-0">
              કોઈ પણ કામચલાઉ ડાયેટ કરતા પહેલા તમારા શરીરનો સ્વભાવ જાણવો જરૂરી છે. 
              આયુર્વેદ મુજબ દરેક વ્યક્તિ માટે વજન ઘટાડવાની પ્રક્રિયા અલગ હોય છે.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-8 max-w-6xl mx-auto">
          {doshas.map((dosha, index) => (
            <div
              key={dosha.id}
              className={`relative p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group transition-all duration-500 touch-pan-y`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br transition-opacity duration-500 ${dosha.color}`} />
              
              {/* Dynamic Aura Ring */}
              <div className="relative w-20 md:w-24 h-20 md:h-24 mx-auto mb-6 md:mb-8 pointer-events-none">
                <div 
                  className={`absolute inset-0 rounded-full border-t-2 border-r-2 opacity-50 ${dosha.borderColor}`}
                />
                <div 
                  className={`absolute inset-2 rounded-full border-b-2 border-l-2 opacity-30 ${dosha.borderColor}`}
                />
                <div className={`absolute inset-4 rounded-full bg-gradient-to-br blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500 ${dosha.color}`} />
                <div className="absolute inset-4 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="font-bold text-xl md:text-2xl">{dosha.name.charAt(0)}</span>
                </div>
              </div>

              <div className="text-center relative z-10 pointer-events-none">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">{dosha.name}</h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/90 font-medium mb-6 backdrop-blur-md border border-white/5 shadow-inner">
                  {dosha.elements}
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
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
