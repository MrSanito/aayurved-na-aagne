import React from "react";
import { Section, Heading, ImageBox, Paragraph, ProductCard, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const Calcium = () => {
  return (
    <Section>
      <Heading level={2} className="text-center text-herbal">૬. કેલ્શિયમ ચ્યુએબલ ટેબ્લેટ્સ (Calcium Tablets)</Heading>
      <ImageBox src={img.calciumBanner} alt="Calcium Banner" />

      <ProductCard title="Calcium Tablets - સંપૂર્ણ હાડકાં સુરક્ષા" image={img.calcium1}>
        <Paragraph className="font-bold text-herbal text-xl leading-snug">જીવનભર મજબૂત હાડકાં! ✨</Paragraph>
        <Paragraph className="text-lg text-stone-600">આ ટેબ્લેટ્સ હાડકાંની ઘનતા (Density) જાળવવામાં અને ઓસ્ટિઓપોરોસિસ જેવી બીમારીઓ સામે રક્ષણ આપવામાં મદદ કરે છે.</Paragraph>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-center gap-2">✅ હાડકાંની ઘનતા વધારે</li>
          <li className="flex items-center gap-2">✅ ફ્રેક્ચરનું જોખમ ઘટાડે</li>
          <li className="flex items-center gap-2">✅ સરળતાથી પચી જાય</li>
        </ul>
      </ProductCard>

      <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 my-12">
        <Heading level={3} className="text-herbal-dark mt-0">સેવનની રીત:</Heading>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Paragraph className="text-lg">
            જમ્યાના એક કલાક પછી દિવસમાં ૧ અથવા ૨ ગોળી ચાવીને અથવા ગળીને લેવાથી કેલ્શિયમનું સ્તર સંતુલિત રહે છે.
          </Paragraph>
          <img src={img.calciumHow} alt="How to use Calcium" className="rounded-2xl shadow-md border-4 border-white" />
        </div>
      </div>

      <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
    </Section>
  );
};
