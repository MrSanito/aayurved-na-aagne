"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Conditioner = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૬. હર્બલ કન્ડિશનર (Herbal Conditioner)</Heading>
    <ImageBox src={images.conditioner} alt="Herbal Conditioner" width={400} />
    <Paragraph>
      વાળને રેશમી અને મુલાયમ બનાવવા માટે બેસ્ટ આયુર્વેદિક કન્ડિશનર.
    </Paragraph>
    <ImageBox src={images.conditionerResult} alt="Conditioner Result" />
    <WhatsAppButton message="I want to order Herbal Conditioner" />
  </Section>
);
