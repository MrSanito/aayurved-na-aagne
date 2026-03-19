import { FaRecycle, FaBolt, FaUserCheck } from "react-icons/fa";

export default function JourneyTimeline() {
  const steps = [
    {
      day: "પ્રથમ 15 દિવસ",
      title: "શરીરનું ડિટોક્સિફિકેશન",
      desc: "આતરડા અને પેટમાં જામેલો વર્ષો જૂનો કચરો (ટોક્સિન્સ) ધીમે ધીમે બહાર નીકળવાની શરૂઆત થાય છે. પેટ હલકું લાગવા માંડે છે.",
      color: "bg-green-500",
      icon: <FaRecycle className="text-white" size={12} />,
      active: true
    },
    {
      day: "30 થી 45 દિવસ",
      title: "મેટાબોલિઝ્મ અને અગ્નિ પ્રદીપ્ત",
      desc: "તમારું પાચનતંત્ર (જઠરાગ્નિ) સક્રિય થાય છે. નવો જમેલો ખોરાક ચરબી બનવાના બદલે એનેર્જીમાં રૂપાંતર પામવાની શરૂઆત થાય છે.",
      color: "bg-herbal",
      icon: <FaBolt className="text-white" size={12} />,
      active: false
    },
    {
      day: "60 થી 90 દિવસ",
      title: "ચરબી ઓગળવી અને આકાર આવવો",
      desc: "શરીરના હઠીલા ભાગો (ફાંદ, થાઇસ, હિપ્સ) પર જામેલી વધારાની ચરબી ઓગળે છે. વજન ઘટવાની સાથે સાથે શરીર યોગ્ય આકારમાં આવે છે.",
      color: "bg-gold",
      icon: <FaUserCheck className="text-white" size={12} />,
      active: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div>
            <h2 className="text-sm font-bold text-herbal tracking-widest uppercase mb-3 text-center">
              The Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              90 દિવસની આયુર્વેદિક પ્રક્રિયા
            </h3>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 md:text-lg max-w-lg mx-auto px-4 md:px-0">
              અમારી આયુર્વેદિક કીટ કેવી રીતે સ્ટેપ-બાય-સ્ટેપ તમારા શરીરને સુધારે છે અને વજન ઘટાડે છે.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative cursor-default">
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-1 bg-beige transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <div className="w-full h-full bg-herbal" />
          </div>

          <div className="space-y-12 md:space-y-20 relative">
            {steps.map((step, index) => {
              const alignsRight = index % 2 === 1;

              return (
                <div key={index} className="relative flex items-center md:items-start flex-col md:flex-row w-full group">
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 flex ${alignsRight ? "md:justify-start md:ml-auto pl-16 md:pl-12" : "md:justify-end pl-16 md:pl-0 md:pr-12"}`}>
                    <div 
                      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative w-full"
                    >
                      <div className="text-gold font-bold text-sm tracking-wider uppercase mb-2 bg-beige/50 inline-block px-3 py-1 rounded-md">
                        {step.day}
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.desc}</p>
                    </div>
                  </div>

                  {/* Visual Node */}
                  <div className="absolute left-[8px] md:left-1/2 top-8 md:top-8 transform md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full ${step.color} shadow-lg border-2 border-white flex items-center justify-center animate-pulse`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
