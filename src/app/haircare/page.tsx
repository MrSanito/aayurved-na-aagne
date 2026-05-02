"use client"

import React from "react";
import SocialLinks from "@/components/sections/SocialLinks";
import { WeightLossCard } from "@/components/sections/WeightLossCard";

// Sections
import { Hero } from "@/components/haircare/sections/Hero";
import { Causes } from "@/components/haircare/sections/Causes";
import { Scale } from "@/components/haircare/sections/Scale";
import { Saptamrut } from "@/components/haircare/sections/Saptamrut";
import { HairTonic } from "@/components/haircare/sections/HairTonic";
import { BiotinGummy } from "@/components/haircare/sections/BiotinGummy";
import { B12Spray } from "@/components/haircare/sections/B12Spray";
import { Shampoo } from "@/components/haircare/sections/Shampoo";
import { Conditioner } from "@/components/haircare/sections/Conditioner";
import { Serum } from "@/components/haircare/sections/Serum";
import { Results } from "@/components/haircare/sections/Results";
import { CTA } from "@/components/haircare/sections/CTA";

export default function HaircarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Causes />
      <Scale />
      <Saptamrut />
      <HairTonic />
      <BiotinGummy />
      <B12Spray />
      <Shampoo />
      <Conditioner />
      <Serum />
      <Results />
      <CTA />
      <WeightLossCard />
      <SocialLinks />
    </main>
  );
}