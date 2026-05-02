"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const BiotinGummy = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૩. બાયોટિન ગમીઝ (Biotin Gummies)</Heading>
    <ImageBox src={images.biotinGummy} alt="Biotin Gummies" width={400} />
    <Paragraph>
      સ્વાદિષ્ટ અને પૌષ્ટિક બાયોટિન ગમીઝ જે તમારા વાળને અંદરથી મજબૂત બનાવે છે.
    </Paragraph>
    <div className="bg-stone-50 p-6 rounded-2xl mt-4">
      <Paragraph className="font-bold">શા માટે પસંદ કરવું?</Paragraph>
      <ul className="list-disc list-inside space-y-2 text-stone-700">
        <li>ખાઈ શકાય તેવી ટેસ્ટી ગમીઝ</li>
        <li>વાળની સાથોસાથ નખ અને સ્કીન માટે પણ બેસ્ટ</li>
        <li>કોઈ પણ સાઈડ ઈફેક્ટ વગર</li>
      </ul>
    </div>
    <WhatsAppButton message="I want to order Biotin Gummies" />
  </Section>
);
