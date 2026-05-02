"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Saptamrut = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૧. સપ્તામૃત લોહ (Saptamrut Lauh)</Heading>
    <ImageBox src={images.saptamrut} alt="Saptamrut Lauh" width={400} />
    <Paragraph>
      આ વાળ માટેનું બેસ્ટ આયુર્વેદિક ટોનિક છે જે લોહી શુદ્ધ કરે છે અને વાળના મૂળ સુધી પોષણ પહોંચાડે છે.
    </Paragraph>
    <div className="bg-stone-50 p-6 rounded-2xl mt-4">
      <Paragraph className="font-bold">ફાયદા:</Paragraph>
      <ul className="list-disc list-inside space-y-2 text-stone-700">
        <li>વાળ ખરતા અટકાવે છે</li>
        <li>વાળને કાળા અને ઘટ્ટ બનાવે છે</li>
        <li>આંખોની રોશની પણ વધારે છે</li>
      </ul>
    </div>
    <WhatsAppButton message="I want to order Saptamrut Lauh" />
  </Section>
);
