"use client";

import React from "react";
import { Section, Heading, Paragraph, WhatsAppButton } from "../UI";

export const CTA = () => (
  <Section className="bg-herbal text-white rounded-t-[3rem] mt-16 pb-24">
    <div className="text-center">
      <Heading level={2} className="text-white mt-8">શું તમે તૈયાર છો?</Heading>
      <Paragraph className="text-white/90 text-xl">
        તમારા વાળને નવું જીવન આપવા માટે આજે જ અમારો સંપર્ક કરો.
      </Paragraph>
      <WhatsAppButton text="અત્યારે જ વોટ્સએપ કરો" className="mt-8" />
      <Paragraph className="text-white/80 mt-8 text-sm italic">
        વધારે માહિતી કે ઓર્ડર માટે આજે જ અમારો સંપર્ક કરો.
      </Paragraph>
    </div>
  </Section>
);
