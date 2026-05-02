import React from "react";
import { Section, Heading, ImageBox, Paragraph, ProductCard, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const OrthoOil = () => {
  return (
    <Section>
      <Heading level={2} className="text-center text-herbal">૧. આયુર્વેદિક ઓર્થો ઓઈલ (Ortho Oil)</Heading>
      <ImageBox src={img.orthoOilBanner} alt="Ortho Oil Banner" />

      <ProductCard title="Ortho Oil - સાંધાના દુખાવાનું રામબાણ ઈલાજ" image={img.orthoOil1}>
        <Paragraph className="font-bold text-herbal text-xl leading-snug">દુખાવાને કાયમી અલવિદા કહો! ✨</Paragraph>
        <Paragraph className="text-lg text-stone-600">આ તેલ ખાસ પ્રકારની જડીબુટ્ટીઓમાંથી બનાવવામાં આવ્યું છે જે સાંધાના સોજા અને દુખાવામાં ઝડપથી રાહત આપે છે.</Paragraph>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-center gap-2">✅ ગઠિયા (Arthritis) માં ફાયદાકારક</li>
          <li className="flex items-center gap-2">✅ સ્નાયુઓના દુખાવામાં રાહત</li>
          <li className="flex items-center gap-2">✅ સોજો ઘટાડવામાં મદદરૂપ</li>
        </ul>
      </ProductCard>

      <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 my-12">
        <Heading level={3} className="text-herbal-dark mt-0">તેલનો ઉપયોગ કેવી રીતે કરવો?</Heading>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Paragraph className="text-lg">
            દુખાવાવાળી જગ્યા પર હળવા હાથે માલિશ કરો જેથી તેલ અંદર સુધી ઉતરે. દિવસમાં ૨-૩ વાર ઉપયોગ કરવાથી ઝડપી પરિણામ મળે છે.
          </Paragraph>
          <img src={img.orthoOilHow} alt="How to use Ortho Oil" className="rounded-2xl shadow-md border-4 border-white" />
        </div>
      </div>

      <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
    </Section>
  );
};
