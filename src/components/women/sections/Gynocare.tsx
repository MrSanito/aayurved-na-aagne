"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/women/constants";

export const Gynocare = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૧. ગાયનોકેર સીરપ (Gynocare Syrup)</Heading>
    <ImageBox src={images.gynocare} alt="Gynocare Syrup" width={400} />
    <Paragraph>
      સ્ત્રીઓના હોર્મોનલ અસંતુલન અને માસિક ધર્મને લગતી તમામ સમસ્યાઓ માટે આ રામબાણ ઈલાજ છે.
    </Paragraph>
    <div className="bg-stone-50 p-6 rounded-2xl mt-4">
      <Paragraph className="font-bold">ઉપયોગીતા:</Paragraph>
      <ul className="list-disc list-inside space-y-2 text-stone-700">
        <li>PCOS/PCOD માં રાહત</li>
        <li>અનિયમિત માસિકમાં સુધારો</li>
        <li>શારીરિક નબળાઈ દૂર કરે છે</li>
      </ul>
    </div>
    <WhatsAppButton message="I want to order Gynocare Syrup" />
  </Section>
);
