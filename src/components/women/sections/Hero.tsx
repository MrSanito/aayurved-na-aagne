"use client";

import React from "react";
import { Section, Heading, ImageBox } from "../UI";
import { images } from "../../../app/women/constants";

export const Hero = () => (
  <Section className="pt-8 md:pt-12">
    <div className="flex justify-center mb-8">
      <img src={images.logo} alt="Aayurved Na Aangne" className="h-16 md:h-20" />
    </div>
    <Heading level={1} className="text-herbal">
      સ્ત્રીઓના સ્વાસ્થ્ય માટે સંપૂર્ણ આયુર્વેદિક ઉપચાર
    </Heading>
    <ImageBox src={images.hero} alt="Women Health" />
  </Section>
);
