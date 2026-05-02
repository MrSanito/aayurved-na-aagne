"use client";

import React from "react";
import { Hero } from "@/components/arthritis/sections/Hero";
import { Symptoms } from "@/components/arthritis/sections/Symptoms";
import { Stats } from "@/components/arthritis/sections/Stats";
import { Types } from "@/components/arthritis/sections/Types";
import { ProductKit } from "@/components/arthritis/sections/ProductKit";
import { OrthoOil } from "@/components/arthritis/sections/OrthoOil";
import { OrthoTablet } from "@/components/arthritis/sections/OrthoTablet";
import { Boswellia } from "@/components/arthritis/sections/Boswellia";
import { Kaishor } from "@/components/arthritis/sections/Kaishor";
import { D3 } from "@/components/arthritis/sections/D3";
import { Calcium } from "@/components/arthritis/sections/Calcium";
import { SuccessStories } from "@/components/arthritis/sections/SuccessStories";
import { CTA } from "@/components/arthritis/sections/CTA";
import { WeightLossCard } from "@/components/sections/WeightLossCard";
import { Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => (
  <div className="bg-stone-50 py-16 border-t border-stone-200">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-black text-stone-900 mb-8">સોશિયલ મીડિયા પર અમને ફોલો કરો</h3>
      <div className="flex justify-center gap-8">
        <Link 
          href="https://www.instagram.com/aayurvedna_aangne_results" 
          target="_blank" 
          className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-pink-600 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-stone-100"
        >
          <Instagram size={32} />
        </Link>
        <Link 
          href="#" 
          className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-stone-100"
        >
          <Youtube size={32} />
        </Link>
        <Link 
          href="#" 
          className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-stone-100"
        >
          <Facebook size={32} />
        </Link>
      </div>
    </div>
  </div>
);

export default function ArthritisPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans pt-16 md:pt-20">
      <Hero />
      <Symptoms />
      <Stats />
      <Types />
      <ProductKit />
      
      <div className="bg-stone-50 py-12">
        <h2 className="text-3xl md:text-5xl font-black text-center text-herbal mb-4">અમારી પ્રોડક્ટ્સ</h2>
        <div className="w-24 h-1.5 bg-herbal mx-auto rounded-full"></div>
      </div>

      <OrthoOil />
      <OrthoTablet />
      <Boswellia />
      <Kaishor />
      <D3 />
      <Calcium />
      
      <SuccessStories />
      <CTA />
      
      <WeightLossCard />
      <SocialLinks />

    </main>
  );
}