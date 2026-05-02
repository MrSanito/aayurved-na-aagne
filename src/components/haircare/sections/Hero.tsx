"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Hero = () => (
  <Section className="pt-8 md:pt-12">
    <div className="flex justify-center mb-8">
      <img src={images.logo} alt="Aayurved Na Aangne" className="h-16 md:h-20" />
    </div>
    <Heading level={1} className="text-herbal">
      તમારા વાળ ખરવાની સમસ્યાનું આયુર્વેદિક સમાધાન
    </Heading>
    <ImageBox src={images.hairfall1} alt="Hair Fall" />
    <Paragraph className="text-center font-bold text-xl md:text-2xl text-herbal mt-8">
      શું તમે પણ હેર ફોલથી પરેશાન છો?
    </Paragraph>
  </Section>
);
