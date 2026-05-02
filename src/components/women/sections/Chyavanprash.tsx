"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/women/constants";

export const Chyavanprash = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૫. સુગર-ફ્રી ચ્યવનપ્રાશ (Sugar-Free Chyavanprash)</Heading>
    <ImageBox src={images.chyavanprash} alt="Chyavanprash" width={400} />
    <Paragraph>
      શક્તિ અને સ્ફૂર્તિ માટે સર્વોત્તમ આયુર્વેદિક હેલ્થ સપ્લિમેન્ટ.
    </Paragraph>
    <WhatsAppButton message="I want to order Sugar-Free Chyavanprash" />
  </Section>
);
