"use client";

import React from "react";
import { Section, Heading, VideoBox, ImageBox } from "../UI";
import { womenResults, images } from "../../../app/women/constants";

export const Results = () => (
  <Section>
    <Heading className="text-center">ગ્રાહકોના અનુભવો</Heading>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <VideoBox src={womenResults.vid1} />
      <VideoBox src={womenResults.vid2} />
    </div>

    <ImageBox src={images.results} alt="Overall Results" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
      <VideoBox src={womenResults.vid3} />
      <div className="space-y-4">
        <ImageBox src={womenResults.img1} alt="Result 1" className="my-0" />
        <ImageBox src={womenResults.img2} alt="Result 2" className="my-0" />
      </div>
    </div>
  </Section>
);
