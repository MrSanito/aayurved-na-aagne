"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const B12Spray = () => (
  <Section>
    <Heading level={2} className="text-herbal border-b-2 border-herbal/20 pb-2">૪. વિટામિન B12 સ્પ્રે (Vitamin B12 Spray)</Heading>
    <ImageBox src={images.b12spray} alt="Vitamin B12 Spray" width={400} />
    <Paragraph>
      B12 ની ઉણપ વાળ ખરવાનું એક મોટું કારણ છે. આ સ્પ્રે સીધું લોહીમાં ભળીને ઝડપી અસર આપે છે.
    </Paragraph>
    <WhatsAppButton message="I want to order Vitamin B12 Spray" />
  </Section>
);
