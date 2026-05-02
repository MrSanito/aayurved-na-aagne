"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/women/constants";

export const Raktavardhak = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૨. રક્તવર્ધક લોહ (Raktavardhak Lauh)</Heading>
    <ImageBox src={images.raktavardhak} alt="Raktavardhak Lauh" width={400} />
    <Paragraph>
      લોહીની ઉણપ (Anemia) દૂર કરવા માટેનું શ્રેષ્ઠ આયુર્વેદિક ટોનિક.
    </Paragraph>
    <div className="bg-stone-50 p-6 rounded-2xl mt-4">
      <Paragraph className="font-bold">ફાયદા:</Paragraph>
      <ul className="list-disc list-inside space-y-2 text-stone-700">
        <li>હિમોગ્લોબિન લેવલ વધારે છે</li>
        <li>ચહેરા પર કુદરતી નિખાર લાવે છે</li>
        <li>થાક અને સુસ્તી દૂર કરે છે</li>
      </ul>
    </div>
    <WhatsAppButton message="I want to order Raktavardhak Lauh" />
  </Section>
);
