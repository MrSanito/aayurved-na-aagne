import React from "react";
import { Section, Heading, ImageBox, Paragraph, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const Stats = () => {
  return (
    <Section className="bg-beige/30 rounded-[3rem] mt-12 border border-beige">
      <Heading level={2} className="text-center text-herbal-dark">સંધિવા (Arthritis): સાંધાના દુખાવાથી મુક્તિ મેળવો</Heading>
      <ImageBox src={img.stats} alt="Stats" className="p-1" />

      <Paragraph className="text-center font-semibold bg-white p-5 rounded-2xl border-l-4 border-herbal shadow-sm">
        આજે ભારતમાં સાંધાનો દુખાવો એક ગંભીર સમસ્યા બની ગઈ છે. અહીં તેના વિશેના કેટલાક ચોંકાવનારા આંકડાઓ છે:
      </Paragraph>

      <div className="space-y-4 my-8">
        {[
          "* ૧૫ કરોડથી વધુ દર્દીઓ: ભારતમાં આજે સંધિવાથી પીડાતા લોકોની સંખ્યા ૧૫ કરોડને વટાવી ગઈ છે.",
          "* દૈનિક ૪૫ લાખ મુલાકાત: દરરોજ આશરે ૪૫ લાખ લોકો સાંધાના દુખાવાની સારવાર માટે ડોક્ટર પાસે જાય છે.",
          "* દરેક ઘરમાં એક દર્દી: સ્થિતિ એવી છે કે લગભગ દરેક બીજા-ત્રીજા ઘરે સંધિવાનો એક દર્દી જોવા મળે છે.",
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-herbal flex items-center justify-center text-white font-bold text-xs">▪</span>
            <span className="text-stone-700">{t}</span>
          </div>
        ))}
      </div>

      <Heading level={3} className="text-herbal text-center">શા માટે આ આંકડા ચિંતાજનક છે?</Heading>
      <Paragraph className="text-center">
        સાંધાનો દુખાવો માત્ર ચાલવામાં તકલીફ નથી આપતો, પણ તે તમારી જીવનશૈલીને મર્યાદિત કરી દે છે. યોગ્ય સમયે સારવાર અને આયુર્વેદિક ઉપચાર દ્વારા આ સમસ્યાને નિયંત્રિત કરી શકાય છે.
      </Paragraph>

      <div className="bg-herbal text-white p-8 rounded-2xl text-center my-8 shadow-md">
        <Paragraph className="font-bold text-xl mb-2 text-white">શું તમે પણ સાંધાના દુખાવાથી પરેશાન છો?</Paragraph>
        <Paragraph className="text-white/80 mb-6">અમારા નિષ્ણાતો સાથે વાત કરો અને કુદરતી રીતે સાજા થવા તરફ ડગલું માંડો.</Paragraph>
        <WhatsAppButton text="અમારા નિષ્ણાત સાથે વાત કરો" className="w-full md:w-auto mx-auto" />
      </div>
    </Section>
  );
};
