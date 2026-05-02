"use client";

import React, { useState, useEffect } from "react";

// Sections
import { Hero } from "@/components/bellacast/sections/Hero";
import { ScientificApproach } from "@/components/bellacast/sections/ScientificApproach";
import { InternalFactors } from "@/components/bellacast/sections/InternalFactors";
import { ExternalFactors } from "@/components/bellacast/sections/ExternalFactors";
import { SkinProblems } from "@/components/bellacast/sections/SkinProblems";
import { AboutBrand } from "@/components/bellacast/sections/AboutBrand";
import { ProductCollection } from "@/components/bellacast/sections/ProductCollection";
import { CtmRoutine } from "@/components/bellacast/sections/CtmRoutine";
import { SunscreenImportance } from "@/components/bellacast/sections/SunscreenImportance";
import { Comparison } from "@/components/bellacast/sections/Comparison";
import { Gallery } from "@/components/bellacast/sections/Gallery";
import { SuccessStories } from "@/components/bellacast/sections/SuccessStories";
import { WeightLossCard } from "@/components/sections/WeightLossCard";
import { FollowUs } from "@/components/bellacast/sections/FollowUs";

// Constants
import { slideImages } from "./constants";

export default function BellaCast() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-outfit selection:bg-herbal/10 selection:text-herbal pt-16 md:pt-20">
      <main>
        <Hero activeSlide={activeSlide} />
        <ScientificApproach />
        <InternalFactors />
        <ExternalFactors />
        <SkinProblems />
        <AboutBrand />
        <ProductCollection />
        <CtmRoutine />
        <SunscreenImportance />
        <Comparison />
        <Gallery />
        <SuccessStories />
        <WeightLossCard />
        <FollowUs />
      </main>
    </div>
  );
}