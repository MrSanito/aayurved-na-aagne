import React from "react";
import { Section, Heading, Paragraph, WhatsAppButton } from "../UI";

export const CTA = () => {
  return (
    <Section className="pb-24 max-w-5xl">
      <div className="bg-gradient-to-br from-herbal to-herbal-dark p-12 md:p-20 rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
        <Heading level={1} className="text-white relative z-10 mb-10 leading-tight">
          &quot;સ્વસ્થ અને સક્રિય જીવનની શરૂઆત આજે જ કરો. સાચું આયુર્વેદ, સાચું માર્ગદર્શન!&quot;
        </Heading>
        <div className="flex flex-col items-center gap-6 relative z-10">
          <div className="bg-white/10 p-2 rounded-3xl backdrop-blur-sm border border-white/20">
            <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto px-10 py-5 text-lg" />
          </div>
          <div className="mt-8 bg-white text-herbal-dark px-10 py-6 rounded-3xl shadow-xl transition-transform hover:scale-105 inline-block">
            <Paragraph className="text-xl md:text-3xl font-black mb-0">📞 કોલ કરો: 96871 05624</Paragraph>
          </div>
          <Paragraph className="text-white/80 mt-6 text-sm md:text-base italic max-w-lg mx-auto">
            સાંધાનો દુખાવો, ગઠિયો કે અન્ય સ્વાસ્થ્ય સંબંધિત કોઈ પણ પ્રશ્ન માટે અમારો સંપર્ક કરો. અમે હંમેશા તમારી મદદ માટે તૈયાર છીએ.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};
