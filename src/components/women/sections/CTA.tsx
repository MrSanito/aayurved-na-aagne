"use client";

import React from "react";
import { Section, Heading, Paragraph, WhatsAppButton } from "../UI";

export const CTA = () => (
  <Section className="bg-herbal text-white rounded-t-[3rem] mt-16 pb-24">
    <div className="text-center">
      <Heading level={2} className="text-white mt-8">તમારા સ્વાસ્થ્યની સંભાળ હવે આયુર્વેદ સાથે</Heading>
      <Paragraph className="text-white/90 text-xl">
        વધારે માહિતી કે ઓર્ડર માટે આજે જ અમારો સંપર્ક કરો.
      </Paragraph>
      <WhatsAppButton text="વોટ્સએપ પર વાત કરો" className="mt-8" />
    </div>
  </Section>
);
