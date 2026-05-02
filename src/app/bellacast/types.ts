import React from "react";

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  img: string;
  tagline: string;
  intro: string;
  why: string;
  whyPoints: string[];
  benefits: string[];
  howToUse: string;
  badge: string;
  category: string;
}

export interface SortedImage {
  src: string;
  isPortrait: boolean;
}

export interface SkinType {
  name: string;
  en: string;
  desc: string;
  icon: string;
  color: string;
  border: string;
}

export interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  dark?: boolean;
}
