"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/women/constants";

export const Amla = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૪. આમળા કેન્ડી (Amla Candy)</Heading>
    <ImageBox src={images.amla} alt="Amla Candy" width={400} />
    <Paragraph>
      વિટામિન સી થી ભરપૂર આમળા કેન્ડી જે પાચન તંત્ર સુધારે છે અને રોગપ્રતિકારક શક્તિ વધારે છે.
    </Paragraph>
    <WhatsAppButton message="I want to order Amla Candy" />
  </Section>
);
