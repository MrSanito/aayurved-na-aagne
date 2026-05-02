import React from "react";
import { Section, Heading, ImageBox, Paragraph } from "../UI";
import { img } from "@/app/arthritis/constants";

export const Hero = () => {
  return (
    <div className="bg-white border-b border-stone-100 py-12 md:py-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>
      <Section className="relative z-10 text-center">
        <Heading level={1} className="text-herbal mb-6">
          સંધિવા (Arthritis): સાંધાના દુખાવાથી મુક્તિ મેળવો
        </Heading>
        <ImageBox src={img.hero} alt="Arthritis" className="max-w-md mx-auto p-1" />
        <Paragraph className="text-xl md:text-2xl font-medium text-stone-700 mt-8 max-w-3xl mx-auto">
          આર્થરાઇટિસ (Arthritis) એટલે સાંધાનો સોજો. આ કોઈ એક બીમારી નથી, પરંતુ સાંધાના દુખાવા અને તેના રોગોને દર્શાવતો એક સમૂહ છે. જ્યારે સાંધામાં રહેલી ગાદી ઘસાઈ જાય અથવા રોગપ્રતિકારક શક્તિમાં ફેરફાર થાય, ત્યારે આ સમસ્યા ઉદભવે છે.
        </Paragraph>
      </Section>
    </div>
  );
};
