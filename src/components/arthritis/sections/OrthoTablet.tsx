import React from "react";
import { Section, Heading, ImageBox, Paragraph, ProductCard, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const OrthoTablet = () => {
  return (
    <Section>
      <Heading level={2} className="text-center text-herbal">૨. ઓર્થો ટેબ્લેટ્સ (Ortho Tablets)</Heading>
      <ImageBox src={img.orthoTabletBanner} alt="Ortho Tablet Banner" />

      <ProductCard title="Ortho Tablets - સાંધાને અંદરથી મજબૂત બનાવો" image={img.orthoTablet1}>
        <Paragraph className="font-bold text-herbal text-xl leading-snug">મજબૂત સાંધા, સક્રિય જીવન! ✨</Paragraph>
        <Paragraph className="text-lg text-stone-600">આ ટેબ્લેટ્સ હાડકાંને જરૂરી પોષણ આપે છે અને સાંધામાં રહેલી લુબ્રિકેશન (ગ્રીસ) વધારવામાં મદદ કરે છે.</Paragraph>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-center gap-2">✅ હાડકાંને પોષણ આપે</li>
          <li className="flex items-center gap-2">✅ સાંધાની લવચીકતા વધારે</li>
          <li className="flex items-center gap-2">✅ ઘૂંટણના ઘસારામાં રાહત</li>
        </ul>
      </ProductCard>

      <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 my-12">
        <Heading level={3} className="text-herbal-dark mt-0">સેવનની રીત:</Heading>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Paragraph className="text-lg">
            સવાર-સાંજ જમ્યા પછી ૧-૧ ગોળી નવશેકા પાણી સાથે લેવાથી સાંધા અંદરથી મજબૂત થાય છે.
          </Paragraph>
          <img src={img.orthoTabletHow} alt="How to use Ortho Tablet" className="rounded-2xl shadow-md border-4 border-white" />
        </div>
      </div>

      <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
    </Section>
  );
};
