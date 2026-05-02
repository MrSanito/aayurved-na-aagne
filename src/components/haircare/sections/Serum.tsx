"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Serum = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૭. હેર સીરમ (Hair Serum)</Heading>
    <ImageBox src={images.serum} alt="Hair Serum" width={400} />
    <Paragraph>
      વાળને પોલ્યુશન અને સૂર્યના કિરણોથી બચાવવા માટે અને શાઈન આપવા માટે હેર સીરમનો ઉપયોગ કરો.
    </Paragraph>
    <WhatsAppButton message="I want to order Hair Serum" />
  </Section>
);
