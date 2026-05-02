"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Shampoo = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૫. હર્બલ શેમ્પૂ (Herbal Shampoo)</Heading>
    <ImageBox src={images.shampoo} alt="Herbal Shampoo" width={400} />
    <Paragraph>
      કેમિકલ વગરનું શુદ્ધ હર્બલ શેમ્પૂ જે વાળને ડેમેજ કર્યા વગર સ્કેલ્પને સાફ કરે છે.
    </Paragraph>
    <WhatsAppButton message="I want to order Herbal Shampoo" />
  </Section>
);
