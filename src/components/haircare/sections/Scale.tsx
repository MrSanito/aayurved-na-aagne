"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Scale = () => (
  <Section className="bg-herbal/5 rounded-3xl my-8">
    <Heading className="text-center">તમારી ટાલ (Baldness) કયા સ્ટેજ પર છે?</Heading>
    <ImageBox src={images.norwood} alt="Norwood Scale" />
    <Paragraph className="text-center italic">
      જો તમે સ્ટેજ ૧ થી ૪ માં હોવ તો આયુર્વેદિક ઉપચારથી વાળ પાછા આવવાની શક્યતા ખૂબ વધારે છે.
    </Paragraph>
  </Section>
);
