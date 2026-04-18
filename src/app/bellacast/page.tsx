"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Droplets, 
  Sun, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  Star,
  Check,
  X,
  FlaskConical,
  Award,
  Target,
  Info,
  Wind,
  Zap,
  Moon,
  Plus,
  Minus
} from "lucide-react";

interface Product {
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

const products: Product[] = [
  {
    id: 1,
    name: "BellaCast Sunscreen Gel",
    subtitle: "સૂર્યના તાપ સામે ત્વચાનું સુરક્ષા કવચ",
    img: "/assets/bellacast/1003138271.jpg",
    tagline: "SPF નો સાથ, સૂર્યના કિરણોથી આજીવન રાહત!",
    intro: "BellaCast Sunscreen Gel ખાસ કરીને ભારતીય ત્વચા અને વાતાવરણને ધ્યાનમાં રાખીને બનાવવામાં આવ્યું છે. તે માત્ર ત્વચાને તડકાથી જ નથી બચાવતું, પણ તેને કુદરતી રીતે નિખારે પણ છે.",
    why: "શા માટે પસંદ કરવું BellaCast Sunscreen Gel?",
    whyPoints: [
      "SPF 50 PA++++ પ્રોટેક્શન: UVA અને UVB કિરણો સામે સંપૂર્ણ રક્ષણ.",
      "નો-વ્હાઇટ કાસ્ટ: લગાવ્યા પછી ચહેરા પર કોઈ સફેદ ડાઘ કે પરત છોડતું નથી.",
      "નૉન-ગ્રીસી ફોર્મ્યુલા: ત્વચા પર બિલકુલ ચીકાશ નથી લાગતી અને ઝડપથી શોષાઈ જાય છે.",
      "વૉટર-રેઝિસ્ટન્ટ: પરસેવો કે પાણીની અસર થતી નથી, જે તેને આઉટડોર પ્રવૃત્તિઓ માટે બેસ્ટ બનાવે છે.",
    ],
    benefits: [
      "ટેનિંગથી બચાવ: સૂર્યપ્રકાશથી થતી કાળાશ અને સનબર્નને અટકાવે છે.",
      "એન્ટી-એજિંગ: કરચલીઓ અને વધતી ઉંમરના ચિહ્નોને ઘટાડવામાં મદદરૂપ.",
      "ત્વચાનું હાઇડ્રેશન: કુદરતી તત્વોથી ભરપૂર હોવાથી ત્વચાને મુલાયમ અને હાઇડ્રેટેડ રાખે છે.",
      "દરેક ત્વચા માટે: ઓઈલી, ડ્રAY કે સેન્સિટિવ એમ દરેક પ્રકારની સ્કીન માટે સુરક્ષિત છે.",
    ],
    howToUse: "તડકામાં બહાર નીકળવાના ૧૫ મિનિટ પહેલાં ચહેરા અને ગરદન પર સમાન રીતે લગાવો. વધુ સારા પરિણામ માટે દર ૨-૩ કલાકે ફરીથી લગાવો.",
    badge: "SPF 50 PA++++",
    category: "skin",
  },
  {
    id: 2,
    name: "BellaCast Age Revival Face Wash",
    subtitle: "યુવાન અને ચમકતી ત્વચાનું રહસ્ય",
    img: "/assets/bellacast/1003138247.jpg",
    tagline: "ઉંમર ઘટાડો, ત્વચા ખીલવો!",
    intro: "શું તમે વધતી ઉંમરના ચિહ્નો અને નિસ્તેજ ત્વચાથી પરેશાન છો? BellaCast Age Revival Face Wash તમારી ત્વચાને ઊંડાણથી સાફ કરી તેને નવું જીવન અને કુદરતી નિખાર આપે છે.",
    why: "શા માટે આ ફેસ વોશ શ્રેષ્ઠ છે?",
    whyPoints: [
      "એન્ટી-એજિંગ ફોર્મ્યુલા: કરચલીઓ, ફાઈન લાઈન્સ અને ડાર્ક સ્પોર્ટ્સ ઘટાડવામાં મદદરૂપ.",
      "ડીપ ક્લીન્ઝિંગ: ત્વચાના કુદરતી ભેજને જાળવી રાખીને ધૂળ, પ્રદૂષણ અને વધારાનું તેલ દૂર કરે છે.",
      "ત્વચામાં નવી ઉર્જા: તે ત્વચાને રિફ્રેશ કરે છે અને થાકેલી ત્વચાને ખીલવે છે.",
      "નેચરલ ગ્લો: પિગમેન્ટેશન અને ટેનિંગ સામે લડીને ત્વચાને સમાન ટોન અને ગ્લો આપે છે.",
    ],
    benefits: [
      "ખીલ અને કાળા ડાઘમાં રાહત આપે છે.",
      "વધારાના તેલ (Excess Oil) ને નિયંત્રિત કરે છે.",
      "ત્વચાને મુલાયમ, નરમ અને તાજગીભરી બનાવે છે.",
      "દરેક પ્રકારની ત્વચા (All Skin Types) માટે અનુકૂળ.",
    ],
    howToUse: "૧. થોડી માત્રામાં ફેસ વોશ લો અને ભીના ચહેરા પર હળવા હાથે મસાજ કરો. ૨. સ્વચ્છ પાણીથી ચહેરો ધોઈ લો અને નરમ ટુવાલથી કોરો કરો. વધુ સારા પરિણામ માટે દિવસમા 2 વખત ઉપયોગ કરો.",
    badge: "Anti-Aging",
    category: "skin",
  },
  {
    id: 3,
    name: "BellaCast Vitamin C Face Wash",
    subtitle: "ત્વચાનો અસલી નિખાર અને કુદરતી ચમક",
    img: "/assets/bellacast/1003138248.jpg",
    tagline: "વિટામિનની શક્તિ, ત્વચાની ચમક!",
    intro: "શું તમે પ્રદૂષણ અને તડકાને લીધે ત્વચાની કુદરતી ચમક ગુમાવી રહ્યા છો? BellaCast Vitamin C Face Wash માં રહેલા શક્તિશાળી નેચરલ ઘટકો તમારી ત્વચાને અંદરથી સાફ કરી તેને ઇન્સ્ટન્ટ ગ્લો અને તાજગી આપે છે.",
    why: "શા માટે પસંદ કરવું BellaCast Vitamin C Face Wash?",
    whyPoints: [
      "સ્કિન બ્રાઇટનિંગ: વિટામિન C ત્વચાને કુદરતી રીતે ચમકદાર અને તેજસ્વી બનાવે છે.",
      "પ્રદૂષણ સામે રક્ષણ: ધૂળ અને હાનિકારક વાતાવરણની અસરથી ત્વચાને બચાવે છે.",
      "પિગમેન્ટેશનમાં રાહત: કાળા ડાઘ અને પિગમેન્ટેશન ઘટાડીને ત્વચાને એકસમાન બનાવે છે.",
      "નરમ અને મુલાયમ ત્વચા: કરચલીઓ ઘટાડવામાં અને ત્વચાને સ્મૂધ રાખવામાં મદદરૂપ.",
    ],
    benefits: [
      "સૂર્યપ્રકાશથી થતા નુકસાન (Sun Damage) ને રિપેર કરે છે.",
      "ખીલના ડાઘ અને ઝીણી કરચલીઓ દૂર કરવામાં અસરકારક.",
      "ત્વચાને ગહન રીતે સાફ (Deep Cleanse) કરે છે પણ કુદરતી ભેજ જાળવી રાખે છે.",
      "દરેક પ્રકારની ત્વચા (All Skin Types) માટે એકદમ સુરક્ષિત.",
    ],
    howToUse: "૧. ભીના ચહેરા પર થોડું ફેસ વોશ લગાવો. ૨. હળવા હાથે ગોળાકાર ગતિમાં મસાજ કરો. ૩. સ્વચ્છ પાણીથી ધોઈ લો અને ચહેરો કોરો કરી લો. શ્રેષ્ઠ પરિણામ માટે દિવસમાં બે વાર (સવાર-સાંજ) ઉપયોગ કરો.",
    badge: "Vitamin C",
    category: "skin",
  },
  {
    id: 4,
    name: "BellaCast Keratin Shampoo",
    subtitle: "મજબૂત, રેશમી અને ચમકદાર વાળનું રહસ્ય",
    img: "/assets/bellacast/1003138253.jpg",
    tagline: "કેરાટિનની શક્તિ, વાળની સ્વસ્થ ચમક!",
    intro: "શું તમે ખરતા વાળ અને બેજાન વાળથી પરેશાન છો? BellaCast Keratin Shampoo તમારા વાળને મૂળમાંથી પોષણ આપી તેને કુદરતી રીતે મુલાયમ અને મજબૂત બનાવે છે.",
    why: "શા માટે પસંદ કરવું BellaCast Keratin Shampoo?",
    whyPoints: [
      "હેર ડેમેજ રિપેર: પ્રદૂષણ અને કેમિકલથી થયેલા નુકસાનને રિપેર કરી વાળને સ્વસ્થ બનાવે છે.",
      "હેર ફોલ કંટ્રોલ: વાળના મૂળને મજબૂત કરી વાળ ખરતા અટકાવવામાં મદદ કરે છે.",
      "નેચરલ ગ્લો અને સ્મૂધનેસ: વાળમાંથી ફ્રીઝ (વાળનું ગૂંચવાવું) અને ડ્રાયનેસ દૂર કરી તેને રેશમી બનાવે છે.",
      "પોષણયુક્ત ફોર્મ્યુલા: વાળ અને સ્કાલ્પને ઊંડાણથી સાફ કરી પૂરતું મોઇશ્ચર પૂરું પાડે છે.",
    ],
    benefits: [
      "વાળના વિકાસ (Hair Growth) ને વેગ આપે છે.",
      "વાળમાં કુદરતી ભેજનું સંતુલન જાળવી રાખે છે.",
      "દરેક પ્રકારના વાળ (All Hair Types) માટે અનુકૂળ.",
      "રોજિંદા ઉપયોગ માટે એકદમ સુરક્ષિત અને અસરકારક.",
    ],
    howToUse: "૧. વાળને ભીના કરો અને જરૂરી માત્રામાં શેમ્પૂ લો. ૨. હળવા હાથે સ્કાલ્પ પર મસાજ કરી ફીણ બનાવો. ૩. સ્વચ્છ પાણીથી વાળને બરાબર ધોઈ લો. વધુ સારા પરિણામ માટે નિયમિત ઉપયોગ કરો.",
    badge: "Keratin",
    category: "hair",
  },
  {
    id: 5,
    name: "BellaCast Argan Biotin Shampoo",
    subtitle: "ઘાટા, મજબૂત અને રેશમી વાળ માટે",
    img: "/assets/bellacast/1003138254.jpg",
    tagline: "આર્ગન + બાયોટિન = ઘટ્ટ, મજબૂત વાળ!",
    intro: "શું તમે વાળ ખરવા અને પાતળા વાળની સમસ્યાથી પરેશાન છો? BellaCast Argan Biotin Shampoo એ આર્ગન ઓઈલ અને બાયોટિનનું એક શક્તિશાળી મિશ્રણ છે, જે તમારા વાળને મૂળથી પોષણ આપી તેને કુદરતી રીતે ઘટ્ટ અને મજબૂત બનાવે છે.",
    why: "શા માટે પસંદ કરવું BellaCast Argan Biotin Shampoo?",
    whyPoints: [
      "બાયોટિનની શક્તિ: વાળને ખરતા અટકાવે છે અને તેની લંબાઈ અને મજબૂતીમાં વધારો કરે છે.",
      "આર્ગન ઓઈલનું પોષણ: વાળને અંદરથી હાઇડ્રેટ કરી તેને કુદરતી ચમક (Shine) આપે છે.",
      "હેર ડેમેજ રિપેર: વાળના ડેમેજને રિપેર કરી તેને ફરીથી જીવંત અને સ્વસ્થ બનાવે છે.",
      "ઇન્સ્ટન્ટ વોલ્યુમ: પાતળા વાળને તુરંત ઘટ્ટ અને બાઉન્સી લુક આપવામાં મદદરૂપ.",
    ],
    benefits: [
      "વાળ ખરતા (Hair Loss) અટકાવવામાં ખૂબ જ અસરકારક.",
      "વાળની ઇલાસ્ટિસિટી (Elasticity) સુધારે છે, જેથી વાળ તૂટતા નથી.",
      "ખોડો (Dandruff) ઘટાડવામાં અને સ્કાલ્પને સાફ રાખવામાં મદદરૂપ.",
      "વાળને રેશમી અને નરમ બનાવે છે, કોઈ પણ સાઈડ ઈફેક્ટ વગર.",
    ],
    howToUse: "૧. વાળને ભીના કરો અને જરૂરી માત્રામાં શેમ્પૂ લો. ૨. હળવા હાથે સ્કાલ્પ અને વાળમાં મસાજ કરો. ૩. સ્વચ્છ પાણીથી વાળને બરાબર ધોઈ લો.",
    badge: "Argan + Biotin",
    category: "hair",
  },
  {
    id: 6,
    name: "BellaCast Anti-Hair Fall Shampoo",
    subtitle: "વાળ ખરવાની સમસ્યાને કહો અલવિદા",
    img: "/assets/bellacast/1003138252.jpg",
    tagline: "ખરતા વાળ અટકાવો, આત્મવિશ્વાસ વધારો!",
    intro: "શું તમારા વાળ સતત ખરી રહ્યા છે? BellaCast Anti-Hair Fall Shampoo ખાસ કરીને નબળા અને ખરતા વાળને મજબૂતી આપવા માટે બનાવવામાં આવ્યું છે.",
    why: "શા માટે પસંદ કરવું BellaCast Anti-Hair Fall Shampoo?",
    whyPoints: [
      "હેર ફોલ કંટ્રોલ: સ્કાલ્પમાં બ્લડ સર્ક્યુલેશન વધારીને વાળ ખરતા અટકાવે છે.",
      "મજબૂત મૂળ: વાળના મૂળને મજબૂત બનાવે છે, જેથી વાળ તૂટવાનું ઓછું થાય છે.",
      "નેચરલ શાઈન: વાળની કુદરતી નરમાશ અને ચમક જાળવી રાખે છે.",
      "સ્વસ્થ સ્કાલ્પ: સ્કાલ્પને ગંદકી અને ધૂળથી મુક્ત રાખી તેને હેલ્ધી બનાવે છે.",
    ],
    benefits: [
      "વાળને વધુ ઘાટા, મજબૂત અને મુલાયમ બનાવે છે.",
      "શુષ્ક અને બેજાન વાળમાં નવું જીવન ભરે છે.",
      "વાળના કુદરતી બંધારણને રિપેર કરવામાં મદદરૂપ.",
      "દરેક પ્રકારના વાળ માટે અને રોજિંદા ઉપયોગ માટે સુરક્ષિત.",
    ],
    howToUse: "૧. વાળને ભીના કરો અને જરૂરી માત્રામાં શેમ્પૂ લો. ૨. સ્કાલ્પ પર હળવા હાથે મસાજ કરો. ૩. સ્વચ્છ પાણીથી વાળને બરાબર ધોઈ લો.",
    badge: "Anti-Fall",
    category: "hair",
  },
  {
    id: 7,
    name: "BellaCast Hair Conditioner",
    subtitle: "વાળને મળે રેશમી મુલાયમતા અને પોષણ",
    img: "/assets/bellacast/1003136697.jpg",
    tagline: "સ્પા જેવી નરમાશ, ઘરે જ!",
    intro: "શું શેમ્પૂ કર્યા પછી તમારા વાળ શુષ્ક અને ગૂંચવાયેલા રહે છે? BellaCast Conditioner ખાસ કરીને વાળને ઇન્સ્ટન્ટ સ્મૂધનેસ અને મજબૂતી આપવા માટે બનાવવામાં આવ્યું છે.",
    why: "શા માટે પસંદ કરવું BellaCast Conditioner?",
    whyPoints: [
      "ઇન્સ્ટન્ટ સ્મૂધનેસ: વાળને તુરંત નરમ અને રેશમી બનાવે છે.",
      "ગૂંચમુક્ત વાળ (Frizz Control): હવામાં રહેલા ભેજને કારણે થતા ફ્રીઝી વાળને નિયંત્રિત કરે છે.",
      "મજબૂતી અને પોષણ: બાયોટિન વાળના બંધારણને સુધારે છે અને તેને તૂટતા અટકાવે છે.",
      "નેચરલ શાઈન: વાળની ખોવાયેલી ચમક પાછી લાવે છે અને તેને તેજસ્વી બનાવે છે.",
    ],
    benefits: [
      "વાળને ગૂંચમુક્ત (Detangles) કરી તૂટતા અટકાવે છે.",
      "વાળમાં લાંબા સમય સુધી ભેજ જાળવી રાખે છે.",
      "કેમિકલ ટ્રીટમેન્ટ કે કલર કરેલા વાળ માટે પણ સંપૂર્ણ સુરક્ષિત.",
      "દરેક પ્રકારના વાળ માટે ઉત્તમ પરિણામ.",
    ],
    howToUse: "૧. શેમ્પૂ કર્યા પછી, ભીના વાળની લંબાઈ પર (મૂળમાં નહીં) કન્ડિશનર લગાવો. ૨. ૨-૩ મિનિટ સુધી રહેવા દો. ૩. ત્યારબાદ સાદા પાણીથી વાળ ધોઈ લો.",
    badge: "Conditioner",
    category: "hair",
  },
  {
    id: 8,
    name: "BellaCast 7-in-1 હેર ઓઈલ",
    subtitle: "ચમકદાર અને મજબૂત વાળનું રહસ્ય",
    img: "/assets/bellacast/1003138264.jpg",
    tagline: "7 ઓઈલ, 1 ઉકેલ!",
    intro: "શું તમે વાળ ખરવા અને ડેન્ડ્રફ જેવી સમસ્યાઓથી પરેશાન છો? BellaCast 7-in-1 હેર ઓઈલ એ 7 કુદરતી હર્બલ તેલોનું અનોખું મિશ્રણ છે, જે તમારા વાળને મૂળથી પોષણ આપી તેને રેશમી અને મજબૂત બનાવે છે.",
    why: "શા માટે BellaCast જ પસંદ કરવું?",
    whyPoints: [
      "Argan અને Tea Tree Oil જેવા શુદ્ધ તત્વો.",
      "કોઈ પણ હાનિકારક કેમિકલ વગર.",
      "7 કુદરતી હર્બલ તેલોનું અનોખું મિશ્રણ.",
      "ત્વચા અને વાળ બંને માટે ઉત્તમ.",
    ],
    benefits: [
      "વાળનો સર્વાંગી વિકાસ: વાળની લંબાઈ અને મજબૂતીમાં વધારો કરે છે.",
      "ડેન્ડ્રફથી છુટકારો: ખોડો અટકાવે છે અને સ્કાલ્પને હાઇડ્રેટેડ રાખે છે.",
      "અકાળે સફેદ થતા વાળ અટકાવે: વાળને કુદરતી રીતે કાળા રાખવામાં મદદરૂપ.",
      "તણાવમાં રાહત: માથામાં માલિશ કરવાથી સ્ટ્રેસ ઓછો થાય છે.",
    ],
    howToUse: "જરૂર મુજબ તેલ હથેળીમાં લો. વાળના મૂળ અને સ્કાલ્પ પર સમાન રીતે લગાવો. હળવા હાથે માલિશ કરો જેથી તેલ ઊંડાણ સુધી પહોંચે.",
    badge: "7-in-1",
    category: "hair",
  },
  {
    id: 9,
    name: "BellaCast હેર ટોનિક",
    subtitle: "વાળ ખરવાની સમસ્યાને કહો બાય-બાય",
    img: "/assets/bellacast/1003168529.jpg",
    tagline: "આયુર્વેદિક શક્તિ, કુદરતી ઉકેલ!",
    intro: "કુદરતી જડીબુટ્ટીઓના અર્કથી બનેલું BellaCast હેર ટોનિક તમારા વાળને મૂળથી નવું જીવન આપે છે. આ કોઈ સામાન્ય તેલ નથી, પણ એક શક્તિશાળી ફોર્મ્યુલા છે.",
    why: "શુદ્ધ આયુર્વેદિક ઘટકો:",
    whyPoints: [
      "બ્રાહ્મી: મગજ અને વાળ બંનેને પોષણ.",
      "જાસૂદ: વાળ ખરતા અટકાવે.",
      "ચિત્રક: રક્ત સંચાર સુધારે.",
      "જટામાંસી અને ભૃંગરાજ: વાળ ઉગાડવામાં ઉત્કૃષ્ટ.",
    ],
    benefits: [
      "વાળનો વિકાસ: તંદુરસ્ત વાળના વિકાસમાં મદદ.",
      "સ્કાલ્પનું પોષણ: ઠંડક આપે છે અને ઊંડાણપૂર્વક પોષણ.",
      "વાળ ખરતા અટકાવે: ડેન્ડ્રફ સામે રક્ષણ.",
      "નવા વાળ ઉગાડે: કુદરતી રીતે ફરીથી ઉગાડવામાં મદદ.",
    ],
    howToUse: "હેર ટોનિકને માથાના અસરગ્રસ્ત ભાગ પર સીધું લગાવો. તમારી આંગળીઓના ટેરવાં વડે 15 થી 20 મિનિટ સુધી હળવું માલિશ કરો. શ્રેષ્ઠ પરિણામ માટે નિયમિતપણે સમગ્ર માથા પર લગાવો.",
    badge: "Ayurvedic",
    category: "hair",
  },
];

const resultImages = [
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.17.02 PM (1).jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.17.02 PM (2).jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.17.02 PM.jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.17.03 PM.jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.25.48 PM.jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.25.49 PM.jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.25.50 PM.jpeg",
  "/bellavita results/WhatsApp Image 2026-04-18 at 5.26.43 PM.jpeg",
];

const arthritisResults = {
  vid1: "/arthiritis results/WhatsApp Video 2026-04-15 at 1.50.55 PM.mp4",
  vid2: "/arthiritis results/WhatsApp Video 2026-04-15 at 12.27.08 PM.mp4",
  vid3: "/arthiritis results/WhatsApp Video 2026-04-15 at 12.28.48 PM.mp4",
};

const VideoBox = ({ src, className = "" }: { src: string; className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative group rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white bg-black ${isLandscape ? 'aspect-video' : 'aspect-9/16'} ${className}`}>
      <video 
        ref={videoRef}
        src={`${src}#t=0.001`} 
        playsInline
        preload="metadata"
        className="w-full h-full object-contain"
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          if (v.videoWidth > v.videoHeight) {
            setIsLandscape(true);
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
        controls={isPlaying}
      /> 
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 cursor-pointer flex items-center justify-center"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500 border border-white/30">
            <Zap className="ml-0.5 text-xl fill-current" />
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest font-outfit">
              Result Video
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

interface SortedImage {
  src: string;
  isPortrait: boolean;
}


interface SkinType {
  name: string;
  en: string;
  desc: string;
  icon: string;
  color: string;
  border: string;
}

const skinTypes: SkinType[] = [
  { name: "સામાન્ય ત્વચા", en: "Normal Skin", desc: "જે બહુ તેલી પણ નથી અને બહુ સૂકી પણ નથી.", icon: "✨", color: "from-blue-50 to-indigo-50", border: "border-blue-100" },
  { name: "તૈલી ત્વચા", en: "Oily Skin", desc: "જેમાં ચહેરા પર સતત ચીકાશ અને તેલ જોવા મળે છે.", icon: "💧", color: "from-yellow-50 to-amber-50", border: "border-yellow-100" },
  { name: "સૂકી ત્વચા", en: "Dry Skin", desc: "જે વારંવાર ખેંચાયેલી અને સૂકી લાગે છે.", icon: "🌿", color: "from-green-50 to-emerald-50", border: "border-green-100" },
  { name: "સંવેદનશીલ ત્વચા", en: "Sensitive Skin", desc: "જેમાં ખંજવાળ કે લાલાશ જેવી સમસ્યાઓ જલ્દી થાય છે.", icon: "🌸", color: "from-rose-50 to-pink-50", border: "border-rose-100" },
  { name: "મિશ્ર ત્વચા", en: "Combination", desc: "જેમાં અમુક ભાગ તેલી હોય અને અમુક ભાગ સૂકો હોય.", icon: "🔆", color: "from-orange-50 to-amber-50", border: "border-orange-100" },
];

const comparisonData = [
  { feature: "ઘટકો", market: "હાનિકારક કેમિકલ્સ", bellacast: "100% શુદ્ધ હર્બલ અર્ક" },
  { feature: "LLP", market: "LLP નો ઉપયોગ", bellacast: "સંપૂર્ણ LLP મુક્ત" },
  { feature: "પ્રિઝર્વેટિવ્સ", market: "હાનિકારક પેરાબેન", bellacast: "नेચરલ અને પેરાબેન ફ્રી" },
  { feature: "સર્ટિફિકેશન", market: "ઘણી ઉત્પાદનો સર્ટિફાઈડ નથી", bellacast: "GMP સર્ટિફાઈડ અને લેબ ટેસ્ટેડ" },
  { feature: "પરિણામ", market: "માત્ર ત્વચાની సફાઈ", bellacast: "સફાઈ + ઊંડું પોષણ" },
];

const slideImages = [
  "/assets/bellacast/Slide1.jpg",
  "/assets/bellacast/Slide2.jpg",
  "/assets/bellacast/Slide3.jpg",
];

function SectionHeader({ subtitle, title, dark = false }: { subtitle: string; title: React.ReactNode; dark?: boolean }) {
  return (
    <div className="space-y-4 mb-12 sm:mb-16">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`${dark ? "text-amber-200" : "text-herbal"} font-outfit font-bold tracking-[0.3em] uppercase text-xs md:text-sm block`}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl sm:text-5xl font-extrabold leading-tight font-heading ${dark ? "text-white" : "text-stone-900"}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div 
      layout
      className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-herbal/10 transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden bg-stone-50">
        <motion.img
          src={product.img}
          alt={product.name}
          className="object-contain h-full w-full p-8 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-outfit font-black text-herbal shadow-sm border border-herbal/10">
            {product.badge}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium italic opacity-90">{product.tagline}</p>
        </div>
      </div>
      
      <div className="p-8 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-herbal transition-colors duration-300">{product.name}</h3>
          <p className="text-gold font-bold text-sm mt-1">{product.subtitle}</p>
        </div>
        
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 italic">
          "{product.intro}"
        </p>

        <motion.div animate={{ height: expanded ? "auto" : 0 }} className="overflow-hidden">
          <div className="pt-4 space-y-6 border-t border-stone-100">
            <div className="space-y-3">
              <h4 className="font-bold text-herbal text-sm flex items-center gap-2">
                <Target className="w-4 h-4" /> {product.why}
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {product.whyPoints.map((p: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xs text-stone-600 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-herbal mt-0.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-gold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> મુખ્ય ફાયદાઓ:
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {product.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xs text-stone-600 leading-relaxed">
                    <Star className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0 fill-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-herbal" /> કેવી રીતે વાપરવું?
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">{product.howToUse}</p>
            </div>
          </div>
        </motion.div>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full py-3 rounded-xl font-outfit font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
            expanded ? "bg-stone-100 text-stone-600" : "bg-herbal text-white hover:bg-herbal-dark shadow-lg shadow-herbal/20"
          }`}
        >
          {expanded ? "ઓછું જુઓ" : "વધુ જાણો"}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}

export default function BellaCast() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [sortedResults, setSortedResults] = useState<SortedImage[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaPromises = resultImages.map(src => {
      return new Promise<SortedImage>((resolve) => {
        if (src.toLowerCase().endsWith('.mp4')) {
          const video = document.createElement('video');
          video.src = src;
          video.onloadedmetadata = () => {
            resolve({ src, isPortrait: video.videoHeight > video.videoWidth });
          };
          video.onerror = () => resolve({ src, isPortrait: true });
        } else {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            resolve({ src, isPortrait: img.naturalHeight > img.naturalWidth });
          };
          img.onerror = () => resolve({ src, isPortrait: true });
        }
      });
    });

    Promise.all(mediaPromises).then(results => {
      const sorted = [...results].sort((a, b) => {
        if (a.isPortrait && !b.isPortrait) return -1;
        if (!a.isPortrait && b.isPortrait) return 1;
        return 0;
      });
      setSortedResults(sorted);
    });
  }, []);

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden bg-white border-b border-stone-100">
        {/* Background Blurs like Arthritis page */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-herbal/5 rounded-full blur-3xl -mr-48 -mt-48 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48 opacity-60"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-herbal/5 border border-herbal/10 px-5 py-2.5 rounded-full">
              <Leaf className="w-4 h-4 text-herbal" />
              <span className="text-herbal font-outfit font-bold text-[10px] md:text-xs tracking-widest uppercase">100% Natural • GMP Certified</span>
            </div>
            
            {/* Main Titles */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-black text-stone-900 leading-tight font-heading">
                બેલાકાસ્ટ <span className="text-herbal italic">પર્સનલ કેર</span>
              </h1>
              <p className="text-xl md:text-3xl text-gold font-bold font-outfit">કુદરતનો સાથ, તમારી સુંદરતાનો વિશ્વાસ</p>
            </div>

            {/* Slider - Centered and Enlarged */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-3xl mx-auto aspect-[16/10] md:aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group my-12"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={slideImages[activeSlide]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-contain bg-stone-50"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 transition-all duration-300 rounded-full ${i === activeSlide ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setActiveSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveSlide((prev) => (prev + 1) % slideImages.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Paragraph Text */}
            <p className="text-stone-700 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              બેલાકાસ્ટ પર્સનલ કેર લાવ્યું છે ખાસ તમારી ત્વચા માટે શુદ્ધ અને અસરકારક પ્રોડક્ટ્સ. અમે માનીએ છીએ કે સાચી સુંદરતા કુદરતી પોષણમાં જ છુપાયેલી છે.
            </p>

            {/* Bottom Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              {[
                { icon: <Droplets className="w-5 h-5" />, text: "કુદરતી પોષણ" },
                { icon: <Sparkles className="w-5 h-5" />, text: "ગ્લોઈંગ સ્કીન" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "કેમિકલ મુક્ત" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 border border-stone-100 px-6 py-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                  <div className="text-herbal">{item.icon}</div>
                  <span className="text-stone-900 font-extrabold text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SKIN PROTECTION SECTION ===== */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="Skin Protection" 
            title={<span>ત્વચાની સુરક્ષા, <span className="text-stone-400">સ્વાસ્થ્યની ઓળખ</span></span>} 
          />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-stone-50"
            >
              <img
                src="/assets/bellacast/Slide2.jpg"
                alt="Skin Protection"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-herbal/40 to-transparent"></div>
            </motion.div>

            <div className="space-y-10">
              <p className="text-stone-600 text-lg md:text-xl leading-relaxed">
                તમારી ત્વચા તમારા શરીરનું સૌથી મોટું અંગ છે, તેને યોગ્ય પોષણ આપો! જેમ આપણે શરીરના અન્ય અંગોનું ધ્યાન રાખીએ છીએ, તેમ ત્વચાને પણ વિશેષ સંભાળ અને સાચી માવજતની જરૂર હોય છે.
              </p>
              
              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  { icon: <Wind className="w-6 h-6" />, title: "ઊંડાણપૂર્વક સફાઈ", desc: "ત્વચાને ધૂળ અને પ્રદૂષણથી બચાવી તેને સ્વસ્થ રાખો." },
                  { icon: <Droplets className="w-6 h-6" />, title: "કુદરતી હાઈડ્રેશન", desc: "ત્વચાની નમી જાળવી રાખી તેને મુલાયમ બનાવો." },
                  { icon: <Star className="w-6 h-6" />, title: "યોગ્ય સંભાળ", desc: "કુદરતી અને સાચી પ્રોડક્ટ્સ પસંદ કરી ત્વચાને ચમકદાર બનાવો." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start bg-white p-6 rounded-3xl border border-stone-100 shadow-sm"
                  >
                    <div className="w-14 h-14 bg-herbal/10 rounded-2xl flex items-center justify-center text-herbal flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKIN TYPES SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeader 
              subtitle="Skin Intelligence" 
              title={<span>તમારી ત્વચાને જાણો, <br/>સાચી સંભાળ માણો</span>} 
            />
            <p className="text-stone-500 text-lg">શું તમે જાણો છો તમારી ત્વચાનો પ્રકાર કયો છે? દરેક વ્યક્તિની ત્વચા અલગ હોય છે અને તેની જરૂરિયાતો પણ અલગ હોય છે.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skinTypes.map((type, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 text-center flex flex-col items-center gap-4 bg-gradient-to-b ${type.color} ${type.border}`}
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-0.5">{type.name}</h4>
                  <p className="text-stone-400 font-outfit text-xs font-bold uppercase tracking-wider mb-3">{type.en}</p>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-beige/30 border border-beige rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <p className="text-stone-900 text-xl font-bold relative z-10">
              તમારી ત્વચાના પ્રકાર મુજબ સાચું પોષણ પસંદ કરો અને <span className="text-herbal">કુદરતી નિખાર</span> મેળવો!
            </p>
          </div>
        </div>
      </section>

      {/* ===== SKIN TYPE DETAILS ===== */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 space-y-24">
          {[
            {
              title: "સામાન્ય ત્વચા (Normal Skin): સંતુલિત અને સ્વસ્થ",
              desc: "જ્યારે તમારી ત્વચા કુદરતી રીતે જ સંતુલિત હોય! સામાન્ય ત્વચા એ એક આદર્શ પ્રકાર છે, જેમાં તેલ અને ભેજનું પ્રમાણ એકદમ સંતુલિત હોય છે. આવી ત્વચાને જાળવી રાખવી સરળ છે પરંતુ તેની નિયમિત સંભાળ પણ એટલી જ જરૂરી છે.",
              img: "/assets/bellacast/Slide4.jpg",
              badge: "Balanced",
              reverse: false
            },
            {
              title: "તૈલી ત્વચા (Oily Skin): સમસ્યા અને સમાધાન",
              desc: "વધારાની ચીકાશ અને ખીલથી મેળવો છુટકારો! જ્યારે ત્વચામાં રહેલી ગ્રંથીઓ જરૂરિયાત કરતાં વધુ 'સીબમ' (તેલ) ઉત્પન્ન કરે છે, ત્યારે ત્વચા તૈલી બને છે. આવી ત્વચાને ખાસ કાળજી અને યોગ્ય સફાઈની જરૂર હોય છે.",
              img: "/assets/bellacast/Slide5.jpg",
              badge: "Oil Control",
              reverse: true
            },
            {
              title: "સૂકી ત્વચા (Dry Skin): ભેજ અને પોષણની જરૂરિયાત",
              desc: "તમારી ત્વચાની કુદરતી નમી પાછી મેળવો! જ્યારે ત્વચામાં પૂરતા પ્રમાણમાં તેલ (સીબમ) ઉત્પન્ન થતું નથી, ત્યારે તે ભેજ ગુમાવે છે અને સૂકી બની જાય છે. આવી ત્વચાને સતત હાઇડ્રેશન અને વિશેષ માવજતની જરૂર હોય છે.",
              img: "/assets/bellacast/Slide6.jpg",
              badge: "Deep Hydration",
              reverse: false
            },
            {
              title: "સંવેદનશીલ ત્વચા (Sensitive Skin): ખાસ સંભાળ",
              desc: "તમારી કોમળ ત્વચા માટે પસંદ કરો અત્યંત સૌમ્ય સારવાર! સંવેદનશીલ ત્વચા ખૂબ જ નાજુક હોય છે અને તે બહારના વાતાવરણ કે કેમિકલ સામે જલ્દી પ્રતિક્રિયા આપે છે.",
              img: "/assets/bellacast/Slide7.jpg",
              badge: "Gentle Care",
              reverse: true
            },
            {
              title: "મિશ્ર ત્વચા (Combination Skin): બે પ્રકારનું સંતુલન",
              desc: "તૈલી અને સૂકી ત્વચાનું મિશ્રણ – સમજવી છે જરૂરી! મિશ્ર ત્વચા એ સૌથી સામાન્ય પ્રકાર છે, જેમાં ચહેરાના અલગ-અલગ ભાગો પર અલગ-અલગ લક્ષણો જોવા મળે છે. આવી ત્વચાને સમજવી થોડી મુશ્કેલ છે.",
              img: "/assets/bellacast/Slide8.jpg",
              badge: "Dual Care",
              reverse: false
            }
          ].map((item, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl ${item.reverse ? 'lg:order-2' : ''}`}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-contain bg-stone-50 transition-transform duration-1000 hover:scale-105" />
                <div className="absolute top-6 left-6 bg-herbal text-white px-5 py-2 rounded-full font-outfit font-black text-xs shadow-lg uppercase tracking-widest">
                  {item.badge}
                </div>
              </motion.div>
              <div className={`space-y-6 ${item.reverse ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-extrabold text-stone-900 leading-tight">{item.title}</h3>
                <p className="text-stone-500 text-lg leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-4 text-herbal font-bold">
                  <div className="w-10 h-10 rounded-full bg-herbal/10 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Expert Recommended Care</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INTERNAL FACTORS ===== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-herbal/5 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeader 
              subtitle="Inside Matters" 
              title={<span>ત્વચાનું સ્વાસ્થ્ય: <span className="text-stone-400">આંતરિક પરિબળો</span></span>} 
            />
            <p className="text-stone-500 text-lg leading-relaxed">
              સુંદર અને ચમકદાર ત્વચા મેળવવા માટે માત્ર ક્રીમ કે લોશન પૂરતા નથી. શું તમે જાણો છો કે તમારી ત્વચા અંદરથી કેવી રીતે પ્રભાવિત થાય છે?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🧬", title: "આનુવંશિકતા", en: "Genetics", desc: "તમારા જનીનો નક્કી કરે છે કે તમારી ત્વચાની પ્રકૃતિ કેવી હશે." },
                { icon: "⚗️", title: "હોર્મોન્સ", en: "Hormones", desc: "શરીરમાં હોર્મોનલ ફેરફારોને કારણે ખીલની સમસ્યા થઈ શકે છે." },
                { icon: "🏥", title: "તબીબી સ્થિતિ", en: "Medical Status", desc: "સ્વાસ્થ્ય સંબંધિત અમુક સમસ્યાઓ ત્વચાને અસર કરી શકે છે." },
                { icon: "😰", title: "માનસિક તણાવ", en: "Stress", desc: "વધુ પડતો સ્ટ્રેસ ત્વચાને નિસ્તેજ અને થાકેલી બનાવી દે છે." },
                { icon: "😴", title: "ઊંઘનો અભાવ", en: "Sleep Deprival", desc: "અપૂરતી ઊંઘને કારણે આંખો નીચે કુંડાળા દેખાઈ શકે છે." },
                { icon: "🥗", title: "આહાર", en: "Diet", desc: "તમે જે ખાઓ છો તેની અસર તમારી ત્વચા પર સીધી દેખાય છે." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-stone-50 p-6 rounded-3xl border border-stone-100 hover:border-herbal/20 transition-all duration-300 shadow-sm"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-stone-900 text-base mb-1">{item.title}</h4>
                  <p className="text-herbal font-outfit text-[10px] uppercase font-black tracking-widest mb-3">{item.en}</p>
                  <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img src="/assets/bellacast/Slide9.jpg" alt="Internal Factors" className="w-full h-full object-contain bg-stone-50" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10">
                <p className="text-white text-xl font-bold leading-relaxed">
                  તમારા શરીરની અંદરથી કાળજી લો, <br/>અને બહાર કુદરતી નિખાર મેળવો!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== EXTERNAL FACTORS ===== */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeader 
              subtitle="External Shield" 
              title={<span>ત્વચાનું રક્ષણ: <span className="text-stone-400">બાહ્ય પરિબળો</span></span>} 
            />
            <p className="text-stone-600 text-lg">શું તમારી ત્વચા બહારના વાતાવરણ સામે સુરક્ષિત છે? આપણી ત્વચા દરરોજ અનેક બાહ્ય પડકારોનો સામનો કરે છે.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[550px] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl"
            >
              <img src="/assets/bellacast/Slide10.jpg" alt="External Factors" className="w-full h-full object-contain bg-stone-50" />
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Wind className="w-6 h-6" />, title: "પ્રદૂષણ (Pollution)", desc: "હવામાં રહેલા ઝેરી તત્વો અને અશુદ્ધ પાણી ત્વચાના છિદ્રોને બંધ કરી દે છે." },
                { icon: <FlaskConical className="w-6 h-6" />, title: "હાનિકારક કેમિકલ્સ", desc: "પેરાબેન (Paraben) અને અન્ય કઠોર કેમિકલ્સ ત્વચાના કુદરતી અવરોધને તોડે છે." },
                { icon: <Sun className="w-6 h-6" />, title: "UV કિરણો", desc: "સૂર્યના હાનિકારક અલ્ટ્રાવાયોલેટ કિરણો ત્વચા પર ટેનિંગ અને અકાળે કરચલીઓ લાવે છે." },
                { icon: <Zap className="w-6 h-6" />, title: "હવામાન ફેરફાર", desc: "અત્યંત ઠંડી કે ગરમી ત્વચાના ભેજનું સંતુલન બગાડે છે અને તેને નબળી પાડે છે." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-6 items-center bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-stone-900 text-xl mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
              
              <div className="bg-herbal p-8 rounded-[2rem] text-white shadow-xl shadow-herbal/20">
                <p className="text-lg font-bold leading-relaxed">
                  બહારના પ્રદૂષણ સામે રક્ષણ મેળવવા માટે હંમેશા કુદરતી અને સલામત સ્કીનકેર અપનાવો.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKIN PROBLEMS ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <SectionHeader 
                subtitle="Common Issues" 
                title={<span>ત્વચાની સમસ્યાઓ: <br/><span className="text-stone-400">કારણો અને ઉકેલ</span></span>} 
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "ખીલ (Acne)", desc: "તેલ અને બેક્ટેરિયાને કારણે થતી સૌથી સામાન્ય સમસ્યા.", color: "bg-red-50 border-red-100", icon: "🔴" },
                  { title: "પિગમેન્ટેશન", desc: "ત્વચા પર કાળા ડાઘ અને અસમાન રંગની સમસ્યા.", color: "bg-amber-50 border-amber-100", icon: "🟤" },
                  { title: "વધતી ઉંમર", desc: "કરચલીઓ અને ત્વચાનું લૂઝ પડવું.", color: "bg-stone-50 border-stone-200", icon: "⌛" },
                  { title: "બ્લેકહેડ્સ", desc: "છિદ્રોમાં ગંદકી જમા થવાને કારણે થતી સમસ્યા.", color: "bg-blue-50 border-blue-100", icon: "⚫" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`p-8 rounded-[2rem] border ${item.color} space-y-3 transition-all`}
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <h4 className="font-black text-stone-900 text-lg">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gold/10 border-2 border-gold/20 p-8 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-gold/20 group-hover:scale-110 transition-transform"><Award size={60} /></div>
                <p className="text-stone-900 text-lg font-bold leading-relaxed relative z-10">
                  <span className="text-gold font-black underline decoration-2 underline-offset-4">બેલાકાસ્ટ પર્સનલ કેર</span> સાથે તમારી ત્વચાની દરેક સમસ્યાનો લાવો કુદરતી અંત.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[650px] rounded-[4rem] overflow-hidden border-[15px] border-stone-50 shadow-2xl"
            >
              <img src="/assets/bellacast/Slide11.jpg" alt="Problems" className="w-full h-full object-contain bg-stone-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT BRAND ===== */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group h-[300px] md:h-[500px]"
            >
              <img src="/assets/bellacast/Slide12.jpg" alt="Brand" className="w-full h-full object-contain bg-stone-50 transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900 to-transparent p-12">
                <h4 className="text-white font-outfit font-black text-4xl tracking-tight leading-none">
                  PURE RESULTS <br/><span className="text-gold">GUARANTEED</span>
                </h4>
              </div>
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-gold font-outfit font-bold tracking-[0.4em] uppercase text-sm">Our Philosophy</span>
                <h2 className="text-4xl sm:text-6xl font-black font-heading leading-tight">બેલાકાસ્ટ પર્સનલ કેર <br/><span className="text-gold opacity-50">પ્રીમિયમ આયુર્વેદિક</span></h2>
              </div>
              
              <div className="space-y-8 text-stone-300 text-xl leading-relaxed font-medium">
                <p>બેલાકાસ્ટ પર્સનલ કેર એક પ્રીમિયમ સ્કીનકેર બ્રાન્ડ છે જે કુદરતી તત્વોના સથવારે તમારી ત્વચાને શ્રેષ્ઠ પોષણ આપવા માટે કટિબદ્ધ છે.</p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { icon: <FlaskConical />, text: "GMP Certified" },
                    { icon: <Leaf />, text: "100% Natural" },
                    { icon: <Award />, text: "Lab Tested" },
                    { icon: <ShieldCheck />, text: "Safe & Pure" }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-gold">{p.icon}</div>
                      <span className="font-bold text-sm text-white">{p.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <SectionHeader 
              subtitle="Our Collection" 
              title={<span>કુદરતી નિખાર અને <span className="text-stone-400">સંપૂર્ણ સંભાળ</span></span>} 
            />
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                { key: "all", label: "બધી પ્રોડક્ટ્સ", icon: <Sparkles className="w-4 h-4" /> },
                { key: "skin", label: "સ્કીન કેર", icon: <Droplets className="w-4 h-4" /> },
                { key: "hair", label: "હેર કેર", icon: <Moon className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-3 rounded-2xl font-outfit font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.key 
                      ? "bg-herbal text-white shadow-xl shadow-herbal/20 scale-105" 
                      : "bg-white text-stone-500 hover:text-herbal border border-stone-100"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product: Product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-24 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-12 border border-stone-100 shadow-xl">
             <div className="space-y-6">
                <h3 className="text-3xl font-black text-stone-900 leading-tight">અમારી પ્રોડક્ટ્સ વિશે <span className="text-gold">ખાસ શું છે?</span></h3>
                <p className="text-stone-500 text-lg leading-relaxed">હર કેરથી લઈને સ્કીન કેર સુધી, અમારી દરેક પ્રોડક્ટ કુદરતી ઘટકો અને આધુનિક વિજ્ઞાનનો અદ્ભુત સંગમ છે. અમારી પ્રોડક્ટ્સ પેરાબેન-ફ્રી છે અને ત્વચા પર અત્યંત સૌમ્ય છે.</p>
                <div className="bg-herbal/5 p-6 rounded-2xl border-l-4 border-herbal">
                  <p className="text-herbal font-bold italic">"આજે જ તમારા સ્કીનકેર રૂટિનમાં બેલાકાસ્ટનો સમાવેશ કરો અને અનુભવો કુદરતી બદલાવ!"</p>
                </div>
             </div>
             <div className="relative h-80 rounded-[2rem] overflow-hidden">
                <img src="/assets/bellacast/Slide13.jpg" className="w-full h-full object-contain bg-stone-50" />
             </div>
          </div>
        </div>
      </section>

      {/* ===== CTM ROUTINE ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="Beauty Routine" 
            title={<span>ડેઇલી સ્કીનકેર રૂટિન: <span className="text-stone-400">CTM પદ્ધતિ</span></span>} 
          />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="/assets/bellacast/Slide15.jpg" alt="CTM" className="w-full h-full object-contain bg-stone-50" />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>

            <div className="space-y-8">
              <p className="text-stone-600 text-xl leading-relaxed">ત્વચાને સુંદર અને તેજસ્વી રાખવા માટે માત્ર મોંઘી પ્રોડક્ટ્સ નહીં, પણ સાચી પદ્ધતિ જરૂરી છે. નિષ્ણાતો દ્વારા પ્રમાણિત CTM પદ્ધતિ તમારી ત્વચાને સંતુલિત રાખવાનો શ્રેષ્ઠ રસ્તો છે.</p>
              
              <div className="space-y-4">
                {[
                  { id: "C", title: "Cleanse (સફાઈ)", desc: "સૌ પ્રથમ ત્વચાને ઊંડાણપૂર્વક સાફ કરો જેથી ધૂળ અને ગંદકી દૂર થાય.", color: "bg-herbal" },
                  { id: "T", title: "Tone (ટોનિંગ)", desc: "ત્વચાના છિદ્રોને કડક કરવા અને pH લેવલ જાળવવા ટોનરનો ઉપયોગ કરો.", color: "bg-gold" },
                  { id: "M", title: "Moisturize (ભેજ)", desc: "ત્વચાની નમી જાળવી રાખવા અને તેને મુલાયમ બનાવવા મોઇશ્ચરાઇઝર લગાવો.", color: "bg-stone-900" },
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex gap-6 items-center p-6 bg-stone-50 rounded-3xl border border-stone-100 hover:border-herbal/20 transition-all cursor-default"
                  >
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-outfit font-black text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {step.id}
                    </div>
                    <div>
                      <h4 className="font-black text-stone-900 text-lg mb-1">{step.title}</h4>
                      <p className="text-stone-500 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUNSCREEN IMPORTANCE ===== */}
      <section className="py-32 bg-beige/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]-z-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 group">
              <SectionHeader 
                subtitle="Sun Defense" 
                title={<span>સૂર્યથી રક્ષણ: <br/><span className="text-stone-400">ત્વચાની સુરક્ષા કવચ</span></span>} 
              />
              <p className="text-xl text-gold font-black font-outfit underline decoration-herbal decoration-4 underline-offset-8">SPF નો સાથ, સૂર્યના કિરણોથી આજીવન રાહત!</p>
              <p className="text-stone-500 text-lg leading-relaxed">આપણે ગમે તેટલી મોંઘી પ્રોડક્ટ્સ વાપરીએ, પણ જો ત્વચાને સૂર્યના હાનિકારક કિરણોથી ન બચાવીએ, તો બધું જ નકામું છે.</p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "સમય પહેલા વધતી ઉંમર અટકાવે: UV કિરણો સામે કરચલીઓ ઘટાડે.",
                  "ત્વચાના નુકસાનથી બચાવ: સનબર્ન અને કેન્સરના જોખમ ઘટાડે.",
                  "એકસરખો ત્વચાનો રંગ: ટેનિંગ અને પિગમેન્ટેશન ઘટાડી રંગ જાળવે.",
                  "સ્વાસ્થ્ય જાળવણી: ત્વચાના આવશ્યક પ્રોટીન (કોલેજન) ને સુરક્ષિત રાખે.",
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex gap-4 items-center bg-white p-6 rounded-2xl border border-stone-100 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <Sun className="w-4 h-4" />
                    </div>
                    <span className="text-stone-900 font-bold text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[5rem] overflow-hidden border-[20px] border-white shadow-2xl h-[600px]"
            >
              <img src="/assets/bellacast/Slide16.jpg" alt="Sunscreen" className="w-full h-full object-contain bg-stone-50" />
              <div className="absolute top-10 right-10 w-24 h-24 bg-white/40 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border border-white/40 p-2 text-center animate-pulse">
                <span className="text-herbal font-black text-xl">SPF 50+</span>
                <span className="text-[10px] text-stone-900 font-bold uppercase">Safe Guard</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <SectionHeader 
              subtitle="The BellaCast Edge" 
              title={<span>બેલાકાસ્ટ vs સામાન્ય પ્રોડક્ટ્સ: <br/><span className="text-stone-400">શા માટે અમે શ્રેષ્ઠ છીએ?</span></span>} 
            />
            <p className="text-stone-500 text-lg leading-relaxed">મોટાભાગની માર્કેટ પ્રોડક્ટ્સ માત્ર ઉપરછલ્લી સફાઈ કરે છે, જ્યારે બેલાકાસ્ટ તમારી ત્વચાને અંદરથી પોષણ આપે છે. શું તમે જાણો છો કે તમારી સ્કીનકેર પ્રોડક્ટ્સ ખરેખર સુરક્ષિત છે?</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-stone-50 shadow-2xl mb-16 h-80">
              <img src="/assets/bellacast/Slide14.jpg" className="w-full h-full object-contain bg-stone-50" />
              <div className="absolute inset-0 bg-herbal/10"></div>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-stone-100 shadow-2xl shadow-stone-200/50">
              <div className="min-w-[800px] md:min-w-full">
                <table className="w-full text-left">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="p-10 text-lg font-black font-outfit uppercase tracking-widest">વિશેષતા</th>
                    <th className="p-10 text-center bg-stone-800/50">
                       <span className="flex flex-col items-center gap-2">
                          <X className="text-red-400 w-8 h-8" />
                          <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">સામાન્ય પ્રોડક્ટ્સ</span>
                       </span>
                    </th>
                    <th className="p-10 text-center bg-herbal">
                       <span className="flex flex-col items-center gap-2">
                          <Check className="text-white w-8 h-8" />
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">BellaCast</span>
                       </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="group hover:bg-stone-50 transition-colors">
                      <td className="p-8 font-black text-stone-900 font-heading">{row.feature}</td>
                      <td className="p-8 text-center text-stone-500 font-medium">
                        <span className="inline-flex items-center gap-2 text-red-500/70">
                          <Minus className="w-4 h-4" /> {row.market}
                        </span>
                      </td>
                      <td className="p-8 text-center bg-herbal/5">
                         <span className="inline-flex items-center gap-2 text-herbal font-black">
                            <Plus className="w-4 h-4" /> {row.bellacast}
                         </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8 items-center bg-herbal text-white p-12 rounded-[4rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-md">
                <FlaskConical size={40} className="text-gold" />
             </div>
             <div className="space-y-4">
               <h4 className="text-2xl font-black">નિષ્ણાતો દ્વારા તૈયાર કરાયેલ</h4>
               <p className="text-white/80 text-lg leading-relaxed">અમારી પ્રોડક્ટ્સ ડોક્ટર્સ અને વૈજ્ઞાનિકો દ્વારા ફોર્મ્યુલેટ કરવામાં આવી છે, જેથી તમને મળે સુરક્ષિત અને ચોક્કસ પરિણામ. તમારી ત્વચા કિંમતી છે, તેની પસંદગીમાં બાંધછોડ ન કરો.</p>
               <p className="text-gold font-black text-xl italic uppercase tracking-wider">આજે જ બેલાકાસ્ટ અપનાવો!</p>
             </div>
          </div>
        </div>
      </section>

      {/* ===== ACTUAL RESULTS GALLERY ===== */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="Real Benefits" 
            title={<span>વાસ્તવિક પરિણામો: <span className="text-stone-400">અમારા ખુશ ગ્રાહકો</span></span>} 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {(sortedResults.length > 0 ? sortedResults : resultImages.map(src => ({ src, isPortrait: true }))).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-3xl overflow-hidden shadow-lg border-4 border-white group bg-white ${
                  item.isPortrait ? 'aspect-[9/16]' : 'aspect-video md:col-span-2'
                }`}
              >
                {item.src.toLowerCase().endsWith('.mp4') ? (
                  <video 
                    src={item.src} 
                    className="w-full h-full object-contain"
                    playsInline
                    muted
                    loop
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={`Result ${i + 1}`} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-[3rem] border border-stone-100 shadow-xl text-center">
             <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-gold" />
                ))}
             </div>
             <p className="text-stone-900 text-xl font-bold">હજારો લોકોનો અતૂટ વિશ્વાસ અને શ્રેષ્ઠ અનુભવ!</p>
             <p className="text-stone-500 mt-2">ગ્રાહકોના સંતોષકારક પરિણામો જ અમારી પર્સનલ કેરની અસલી ઓળખ છે.</p>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            subtitle="Testimonials" 
            title={<span>ગ્રાહકોનો વિશ્વાસ: <span className="text-stone-400">સફળ પરિણામો</span></span>} 
          />

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Written Reviews */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-stone-900 mb-8 flex items-center gap-3">
                <Star className="text-gold fill-gold" /> લેખિત પ્રતિસાદ
              </h3>
              <div className="grid gap-6">
                {[
                  { name: "રવીના પટેલ", review: "બેલાકાસ્ટ હેર ઓઈલ વાપર્યા પછી મારા વાળ ખરતા સાવ બંધ થઈ ગયા છે. ખૂબ જ સરસ પ્રોડક્ટ છે!", rating: 5, date: "૨ અઠવાડિયા પહેલા" },
                  { name: "અંજના શાહ", review: "સનસ્ક્રીન જેલ બિલકુલ ચીકણું નથી અને તડકામાં રક્ષણ આપે છે. સ્કીન પર સફેદ ડાઘ નથી પડતા.", rating: 5, date: "૧ મહિના પહેલા" },
                  { name: "મીરા મહેતા", review: "વિટામિન સી ફેસ વોશથી ચહેરા પર કુદરતી નિખાર આવ્યો છે. પેરાબેન ફ્રી હોવાથી વિશ્વાસપાત્ર છે.", rating: 5, date: "૩ અઠવાડિયા પહેલા" },
                  { name: "કાવ્યા પ્રજાપતિ", review: "મારી સ્કીન ઓઈલી છે, પણ બેલાકાસ્ટની પ્રોડક્ટ્સ વાપર્યા પછી સ્કીન ટેક્સચર ઘણું સુધર્યું છે.", rating: 4, date: "૫ દિવસ પહેલા" },
                ].map((testimonial, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-stone-300"}`} />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{testimonial.date}</span>
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed mb-6 italic">"{testimonial.review}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-herbal/10 flex items-center justify-center text-herbal font-black text-xs">
                        {testimonial.name[0]}
                      </div>
                      <span className="font-black text-stone-900">{testimonial.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Reviews */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-stone-900 mb-8 flex items-center gap-3">
                <Zap className="text-herbal" /> વિડિયો પ્રતિસાદ (Arthritis Results)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <VideoBox src={arthritisResults.vid1} />
                <VideoBox src={arthritisResults.vid2} />
                <VideoBox src={arthritisResults.vid3} />
                
                <div className="bg-stone-900 p-8 rounded-[2rem] text-center text-white">
                  <p className="text-gold font-black mb-2 uppercase tracking-widest text-xs">Join our community</p>
                  <p className="font-bold text-lg mb-4">તમતારો અનુભવ અમારી સાથે શેર કરો!</p>
                  <button className="bg-white text-stone-950 font-black px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-gold transition-colors">
                    અમારો સંપર્ક કરો
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-stone-950 text-white py-24 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tighter flex items-center justify-center gap-4">
                <Leaf className="text-herbal" fill="currentColor" size={32} />
                બેલાકાસ્ટ <span className="text-herbal">પર્સનલ કેર</span>
              </h2>
              <p className="text-gold font-bold italic text-xl tracking-wide">કુદરતનો સાથ, તમારી સુંદરતાનો વિશ્વાસ</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["GMP Certified", "Lab Tested", "Paraben Free", "100% Natural", "Dermatologist Approved"].map((tag, i) => (
                <span key={i} className="bg-stone-900 border border-white/10 px-6 py-3 rounded-full text-[10px] font-outfit font-black uppercase tracking-[0.2em] text-white/60 hover:text-herbal hover:border-herbal/50 transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6">
               <div className="flex gap-8 text-white/30 text-xs font-outfit font-black uppercase tracking-widest">
                  <a href="#" className="hover:text-herbal transition-colors">Instagram</a>
                  <a href="#" className="hover:text-herbal transition-colors">Facebook</a>
                  <a href="#" className="hover:text-herbal transition-colors">WhatsApp</a>
               </div>
               <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest">
                © 2024 BellaCast Personal Care. All rights reserved. • Made for healthy skin
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}