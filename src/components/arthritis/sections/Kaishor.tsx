import React from "react";
import { Section, Heading, ImageBox, Paragraph, ProductCard, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const Kaishor = () => {
  return (
    <Section>
      <Heading level={2} className="text-center text-herbal">૪. કાઈશોર ગૂગળ (Kaishor Guggul)</Heading>
      <ImageBox src={img.kaishorBanner} alt="Kaishor Banner" />

      <ProductCard title="Kaishor Guggul - યુરિક એસિડનું નિયંત્રણ" image={img.kaishor1}>
        <Paragraph className="font-bold text-herbal text-xl leading-snug">લોહીની શુદ્ધિ અને સાંધાનું સ્વાસ્થ્ય! ✨</Paragraph>
        <Paragraph className="text-lg text-stone-600">આ આયુર્વેદિક ટેબ્લેટ યુરિક એસિડ ઘટાડવા અને લોહીને શુદ્ધ કરવા માટે જાણીતી છે, જે ગાઉટ અને સંધિવામાં ખૂબ અસરકારક છે.</Paragraph>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-center gap-2">✅ યુરિક એસિડ ઘટાડે</li>
          <li className="flex items-center gap-2">✅ રક્તશુદ્ધિમાં મદદરૂપ</li>
          <li className="flex items-center gap-2">✅ ત્વચાના રોગોમાં પણ ફાયદાકારક</li>
        </ul>
      </ProductCard>

      <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 my-12">
        <Heading level={3} className="text-herbal-dark mt-0">સેવનની રીત:</Heading>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Paragraph className="text-lg">
            ૨-૨ ગોળી સવાર-સાંજ હુંફાળા પાણી સાથે લેવાથી સાંધાના અસહ્ય દુખાવામાં કાયમી રાહત મળે છે.
          </Paragraph>
          <img src={img.kaishorHow} alt="How to use Kaishor" className="rounded-2xl shadow-md border-4 border-white" />
        </div>
      </div>

      <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
    </Section>
  );
};
