"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/women/constants";

export const Calcium = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૩. નેચરલ કેલ્શિયમ (Natural Calcium)</Heading>
    <ImageBox src={images.calcium} alt="Natural Calcium" width={400} />
    <Paragraph>
      હાડકાંની મજબૂતી માટે કુદરતી કેલ્શિયમ ટેબલેટ્સ.
    </Paragraph>
    <WhatsAppButton message="I want to order Natural Calcium Tablets" />
  </Section>
);
