import React from "react";
import { Section, Heading, ImageBox, Paragraph, ProductCard, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const Boswellia = () => {
  return (
    <Section>
      <Heading level={2} className="text-center text-herbal">૩. બોસ્વેલિયા કરક્યુમિન (Boswellia Curcumin)</Heading>
      <ImageBox src={img.boswelliaBanner} alt="Boswellia Banner" />

      <ProductCard title="Boswellia Curcumin - કુદરતી એન્ટી-ઈન્ફ્લેમેટરી" image={img.boswellia1}>
        <Paragraph className="font-bold text-herbal text-xl leading-snug">કુદરતી રીતે સોજો ઘટાડો! ✨</Paragraph>
        <Paragraph className="text-lg text-stone-600">બોસ્વેલિયા અને હળદર (Curcumin) નું આ મિશ્રણ શરીરમાં થતા કોઈ પણ પ્રકારના સોજા અને દુખાવાને રોકવા માટે શ્રેષ્ઠ છે.</Paragraph>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-center gap-2">✅ જૂના દુખાવામાં રાહત</li>
          <li className="flex items-center gap-2">✅ સાંધાના સોજામાં ઘટાડો</li>
          <li className="flex items-center gap-2">✅ રોગપ્રતિકારક શક્તિમાં સુધારો</li>
        </ul>
      </ProductCard>

      <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 my-12">
        <Heading level={3} className="text-herbal-dark mt-0">ઉપયોગ કેવી રીતે કરવો?</Heading>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Paragraph className="text-lg">
            ૧ કેપ્સ્યુલ સવારે અને ૧ રાત્રે જમ્યા પછી લેવાથી શરીરમાં સોજો આવવાની પ્રક્રિયા કુદરતી રીતે અટકી જાય છે.
          </Paragraph>
          <img src={img.boswelliaHow} alt="How to use Boswellia" className="rounded-2xl shadow-md border-4 border-white" />
        </div>
      </div>

      <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
    </Section>
  );
};
