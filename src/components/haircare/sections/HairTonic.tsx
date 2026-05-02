"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const HairTonic = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૨. હેર ટોનિક (Hair Tonic)</Heading>
    <ImageBox src={images.hairTonic} alt="Hair Tonic" width={400} />
    <Paragraph>
      આ ટોનિક સ્કેલ્પમાં બ્લડ સર્ક્યુલેશન વધારે છે અને નવા વાળ ઉગાડવામાં મદદ કરે છે.
    </Paragraph>
    <div className="bg-stone-50 p-6 rounded-2xl mt-4">
      <Paragraph className="font-bold">વિશેષતા:</Paragraph>
      <ul className="list-disc list-inside space-y-2 text-stone-700">
        <li>નોન-સ્ટીકી ફોર્મ્યુલા</li>
        <li>ઝડપી પરિણામ</li>
        <li>બધા જ પ્રકારના વાળ માટે અનુકૂળ</li>
      </ul>
    </div>
    <WhatsAppButton message="I want to order Hair Tonic" />
  </Section>
);
