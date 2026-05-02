"use client";

import React from "react";
import { Section, Heading, VideoBox, ImageBox } from "../UI";
import { haircareResults } from "../../../app/haircare/constants";

export const Results = () => (
  <Section>
    <Heading className="text-center">અમારા ગ્રાહકોના અદભૂત પરિણામો</Heading>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <VideoBox src={haircareResults.vid1} />
      <VideoBox src={haircareResults.vid2} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
      <ImageBox src={haircareResults.img1} alt="Result 1" className="my-0" />
      <ImageBox src={haircareResults.img2} alt="Result 2" className="my-0" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <VideoBox src={haircareResults.vid3} />
      <VideoBox src={haircareResults.vid4} />
      <VideoBox src={haircareResults.vid5} />
    </div>
  </Section>
);
