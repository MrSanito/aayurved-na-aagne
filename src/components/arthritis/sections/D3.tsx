import React from "react";
import { Section, Heading, ImageBox, Paragraph, ProductCard, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const D3 = () => {
  return (
    <Section>
      <Heading level={2} className="text-center text-herbal">૫. વિટામિન D3 (Vitamin D3)</Heading>
      <ImageBox src={img.d3Banner} alt="D3 Banner" />

      <ProductCard title="Vitamin D3 - હાડકાંનું રક્ષણ" image={img.d31}>
        <Paragraph className="font-bold text-herbal text-xl leading-snug">સૂર્ય જેવી શક્તિ હાડકાં માટે! ✨</Paragraph>
        <Paragraph className="text-lg text-stone-600">કેલ્શિયમના શોષણ માટે વિટામિન D3 અનિવાર્ય છે. તેની ઉણપથી હાડકાં પોચા અને નબળા પડી જાય છે.</Paragraph>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-center gap-2">✅ કેલ્શિયમનું શોષણ વધારે</li>
          <li className="flex items-center gap-2">✅ સ્નાયુઓની મજબૂતી વધારે</li>
          <li className="flex items-center gap-2">✅ હાડકાંના પોલાણને રોકે</li>
        </ul>
      </ProductCard>

      <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 my-12">
        <Heading level={3} className="text-herbal-dark mt-0">ઉપયોગની રીત:</Heading>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Paragraph className="text-lg">
            ૧ ટેબ્લેટ રોજ જમ્યા પછી લેવાથી વિટામિન D3 ની ઉણપ દૂર થાય છે અને હાડકાં સ્વસ્થ રહે છે.
          </Paragraph>
          <img src={img.d3How} alt="How to use D3" className="rounded-2xl shadow-md border-4 border-white" />
        </div>
      </div>

      <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
    </Section>
  );
};
