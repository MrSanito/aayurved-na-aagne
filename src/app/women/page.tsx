"use client"

import React from "react";
import SocialLinks from "@/components/sections/SocialLinks";
import { WeightLossCard } from "@/components/sections/WeightLossCard";

// Sections
import { Hero } from "@/components/women/sections/Hero";
import { Gynocare } from "@/components/women/sections/Gynocare";
import { Raktavardhak } from "@/components/women/sections/Raktavardhak";
import { Calcium } from "@/components/women/sections/Calcium";
import { Amla } from "@/components/women/sections/Amla";
import { Chyavanprash } from "@/components/women/sections/Chyavanprash";
import { Results } from "@/components/women/sections/Results";
import { CTA } from "@/components/women/sections/CTA";

export default function WomenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Gynocare />
      <Raktavardhak />
      <Calcium />
      <Amla />
      <Chyavanprash />
      <Results />
      <CTA />
      <WeightLossCard />
      <SocialLinks />
    </main>
  );
}
