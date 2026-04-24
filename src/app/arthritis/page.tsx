"use client"

import Link from "next/link";
import React, { useState, useRef } from "react";
import SocialLinks from "@/components/sections/SocialLinks";
import { Star, Zap, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { FaPlay } from "react-icons/fa";


const a = "/assets/arthritis";
const img = {
  hero: `${a}/hero.jpg`,
  stats: `${a}/stats.jpg`,
  types: `${a}/types.png`,
  osteo: `${a}/osteo.jpg`,
  ra: `${a}/ra.jpg`,
  gout: `${a}/gout.jpg`,
  causes: `${a}/causes.jpg`,
  solution: `${a}/solution.jpg`,
  kitQr: `${a}/kitQr.png`,
  orthoOilBanner: `${a}/orthoOilBanner.jpg`,
  orthoOil1: `${a}/orthoOil1.jpg`,
  orthoOil2: `${a}/orthoOil2.jpg`,
  orthoOilHow: `${a}/orthoOilHow.jpg`,
  orthoTabletBanner: `${a}/orthoTabletBanner.jpg`,
  orthoTablet1: `${a}/orthoTablet1.jpg`,
  orthoTablet2: `${a}/orthoTablet2.jpg`,
  orthoTabletHow: `${a}/orthoTabletHow.jpg`,
  boswelliaBanner: `${a}/boswelliaBanner.jpg`,
  boswellia1: `${a}/boswellia1.jpg`,
  boswellia2: `${a}/boswellia2.jpg`,
  boswellia3: `${a}/boswellia3.jpg`,
  boswelliaHow: `${a}/boswelliaHow.jpg`,
  kaishorBanner: `${a}/kaishorBanner.jpg`,
  kaishor1: `${a}/kaishor1.jpg`,
  kaishor2: `${a}/kaishor2.jpg`,
  kaishorHow: `${a}/kaishorHow.jpg`,
  d3Banner: `${a}/d3Banner.jpg`,
  d31: `${a}/d31.jpg`,
  d32: `${a}/d32.jpg`,
  d3How: `${a}/d3How.jpg`,
  calciumBanner: `${a}/calciumBanner.jpg`,
  calcium1: `${a}/calcium1.jpg`,
  calcium2: `${a}/calcium2.jpg`,
  calcium3: `${a}/calcium3.jpg`,
  calciumHow: `${a}/calciumHow.jpg`,
  footerGif: `${a}/footerGif.gif`,
};

const arthritisResults = {
  vid1: "/arthiritis results/WhatsApp Video 2026-04-15 at 1.50.55 PM.mp4",
  vid2: "/arthiritis results/WhatsApp Video 2026-04-15 at 12.27.08 PM.mp4",
  vid3: "/arthiritis results/WhatsApp Video 2026-04-15 at 12.28.48 PM.mp4",
};

/* ── Reusable UI Components (identical style to women page) ── */

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
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:bg-black/10 transition-all duration-500 cursor-pointer flex items-center justify-center"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500 border border-white/40 shadow-2xl">
            <FaPlay className="ml-1 text-xl" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-outfit font-black text-xs uppercase tracking-[0.2em] mb-1 drop-shadow-lg">Patient Review</p>
            <div className="h-1 w-12 bg-herbal rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
          </div>
        </div>
      )}

      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-white uppercase tracking-widest">Aayurved Results</span>
        </div>
      </div>
    </div>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-4xl mx-auto px-4 py-12 md:py-16 ${className}`}>
    {children}
  </section>
);

const Heading = ({ children, level = 2, className = "" }: { children: React.ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const baseClasses = "font-bold tracking-tight leading-tight";
  const colorClass = className.includes("text-") ? "" : "text-stone-900";
  if (level === 1) return <h1 className={`${baseClasses} ${colorClass} text-3xl md:text-5xl text-center mb-8 ${className}`}>{children}</h1>;
  if (level === 2) return <h2 className={`${baseClasses} ${colorClass} text-2xl md:text-3xl mt-12 mb-6 ${className}`}>{children}</h2>;
  return <h3 className={`${baseClasses} ${colorClass} text-xl md:text-2xl mt-8 mb-4 ${className}`}>{children}</h3>;
};

const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const colorClass = className.includes("text-") ? "" : "text-stone-700";
  return (
    <p className={`${colorClass} leading-relaxed mb-4 text-base md:text-lg ${className}`}>{children}</p>
  );
};

const ImageBox = ({ src, alt, width, className = "" }: { src: string; alt: string; width?: number; className?: string }) => (
  <div className={`flex justify-center my-8 ${className}`}>
    <img src={src} alt={alt} className="max-w-full h-auto rounded-xl shadow-lg border border-stone-100" style={width ? { maxWidth: width } : {}} />
  </div>
);

const ProductCard = ({ title, image, children }: { title: string; image: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden my-12 transition-all hover:shadow-md">
    <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
      <h3 className="text-xl md:text-2xl font-bold text-herbal-dark">{title}</h3>
    </div>
    <div className="p-6 md:p-8 md:flex gap-10 items-start">
      <div className="md:w-1/3 mb-6 md:mb-0 shrink-0">
        <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-inner border border-stone-100 p-1" />
      </div>
      <div className="md:w-2/3 space-y-3">
        {children}
      </div>
    </div>
  </div>
);

const InfoBox = ({ children, type = "default" }: { children: React.ReactNode; type?: "default" | "green" }) => {
  const classes = type === "green"
    ? "bg-green-50 border-green-200 text-green-900"
    : "bg-stone-50 border-stone-200 text-stone-900";
  return (
    <div className={`${classes} border rounded-2xl p-6 md:p-8 my-8 text-center italic font-medium`}>
      {children}
    </div>
  );
};

const WhatsAppButton = ({ text = "અત્યારે જ ઓર્ડર કરો", className = "", href }: { text?: string; className?: string; href?: string }) => (
  <Link
    href={href || "https://wa.me/919687105624?text=હું++આર્થરાઇટિસ+સોલ્યુશન+વિશે+જાણવા+ઈચ્છું+છું"}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all hover:scale-[1.05] active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>{text}</span>
  </Link>
);

/* ── Main Page ── */

export default function ArthritisPage() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen overflow-x-hidden">

      {/* ─── HERO ─── */}
      <div className="bg-white border-b border-stone-100 py-12 md:py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>
        <Section className="relative z-10 text-center">
          <Heading level={1} className="text-herbal mb-6">
            સંધિવા (Arthritis): સાંધાના દુખાવાથી મુક્તિ મેળવો
          </Heading>
          <ImageBox src={img.hero} alt="Arthritis" className="max-w-md mx-auto p-1" />
          <Paragraph className="text-xl md:text-2xl font-medium text-stone-700 mt-8 max-w-3xl mx-auto">
            આર્થરાઇટિસ (Arthritis) એટલે સાંધાનો સોજો. આ કોઈ એક બીમારી નથી, પરંતુ સાંધાના દુખાવા અને તેના રોગોને દર્શાવતો એક સમૂહ છે. જ્યારે સાંધામાં રહેલી ગાદી ઘસાઈ જાય અથવા રોગપ્રતિકારક શક્તિમાં ફેરફાર થાય, ત્યારે આ સમસ્યા ઉદભવે છે.
          </Paragraph>
        </Section>
      </div>

      {/* ─── SYMPTOMS ─── */}
      <Section className="bg-white rounded-3xl mt-12 shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal mb-8">આર્થરાઇટિસના મુખ્ય લક્ષણો</Heading>

        <ul className="space-y-3 mb-10">
          {[
            "1 * સાંધાનો દુખાવો: હલનચલન કરતી વખતે અથવા આરામ કરતી વખતે પણ સાંધામાં સતત દુખાવો રહેવો.",
            "2 * જકડાઈ જવું (Stiffness): ખાસ કરીને સવારના સમયે સાંધા જકડાઈ જાય અને તેને હલાવવામાં મુશ્કેલી પડે.",
            "3 * સોજો: સાંધાની આસપાસ લાલાશ દેખાવી અને સોજો આવવો.",
            "4 * હલનચલનમાં મર્યાદા: સાંધા પૂરી રીતે વળી ન શકવા અથવા ચાલવા-ફરવામાં તકલીફ થવી.",
            "5 * અવાજ આવવો: સાંધા હલાવતી વખતે કટ-કટ જેવો અવાજ આવવો.",
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100 transition-transform hover:translate-y-[-2px] shadow-sm">
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-herbal bg-herbal/10">✓</span>
              <span className="text-stone-700">{t}</span>
            </li>
          ))}
        </ul>

        <Heading level={3} className="text-herbal-dark mt-6">તેના દ્વારા થતી તકલીફો</Heading>
        <ul className="space-y-3 mb-10 bg-stone-50 p-6 rounded-2xl border border-stone-100">
          {[
            "6 * રોજિંદા કાર્યોમાં મુશ્કેલી: દાદર ચડવા, નીચે બેસવા કે વજન ઊંચકવામાં ખૂબ જ તકલીફ પડે છે.",
            "7 * શારીરિક દેખાવમાં ફેરફાર: લાંબા ગાળે આંગળીઓ કે ઘૂંટણનો આકાર બદલાઈ શકે છે (વળી જવા).",
            "8 * વધુ પડતો થાક: શરીરમાં સતત સોજો રહેવાને કારણે જલ્દી થાક લાગે છે.",
            "9 * ઊંઘમાં ખલેલ: રાત્રે સાંધાના દુખાવાને કારણે પૂરતી ઊંઘ આવતી નથી.",
            "10 * માનસિક તાણ: લાંબા સમયની પીડાને કારણે વ્યક્તિ માનસિક રીતે નબળી પડી શકે છે.",
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3 py-2 text-stone-700">
              <span className="shrink-0 mt-1">⚠️</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <InfoBox type="green">
          <Paragraph className="font-bold text-herbal text-xl mb-2">🌿 શું તમારે આર્થરાઇટિસ (સાંધાના દુખાવા) માટે કોઈ અસરકારક આયુર્વેદિક જડીબુટ્ટીઓ કે તેલ વિશે જાણવું છે?</Paragraph>
        </InfoBox>
      </Section>

      {/* ─── STATS ─── */}
      <Section className="bg-beige/30 rounded-[3rem] mt-12 border border-beige">
        <Heading level={2} className="text-center text-herbal-dark">સંધિવા (Arthritis): સાંધાના દુખાવાથી મુક્તિ મેળવો</Heading>
        <ImageBox src={img.stats} alt="Stats" className="p-1" />

        <Paragraph className="text-center font-semibold bg-white p-5 rounded-2xl border-l-4 border-herbal shadow-sm">
          આજે ભારતમાં સાંધાનો દુખાવો એક ગંભીર સમસ્યા બની ગઈ છે. અહીં તેના વિશેના કેટલાક ચોંકાવનારા આંકડાઓ છે:
        </Paragraph>

        <div className="space-y-4 my-8">
          {[
            "* ૧૫ કરોડથી વધુ દર્દીઓ: ભારતમાં આજે સંધિવાથી પીડાતા લોકોની સંખ્યા ૧૫ કરોડને વટાવી ગઈ છે.",
            "* દૈનિક ૪૫ લાખ મુલાકાત: દરરોજ આશરે ૪૫ લાખ લોકો સાંધાના દુખાવાની સારવાર માટે ડોક્ટર પાસે જાય છે.",
            "* દરેક ઘરમાં એક દર્દી: સ્થિતિ એવી છે કે લગભગ દરેક બીજા-ત્રીજા ઘરે સંધિવાનો એક દર્દી જોવા મળે છે.",
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm">
              <span className="shrink-0 w-8 h-8 rounded-full bg-herbal flex items-center justify-center text-white font-bold text-xs">▪</span>
              <span className="text-stone-700">{t}</span>
            </div>
          ))}
        </div>

        <Heading level={3} className="text-herbal text-center">શા માટે આ આંકડા ચિંતાજનક છે?</Heading>
        <Paragraph className="text-center">
          સાંધાનો દુખાવો માત્ર ચાલવામાં તકલીફ નથી આપતો, પણ તે તમારી જીવનશૈલીને મર્યાદિત કરી દે છે. યોગ્ય સમયે સારવાર અને આયુર્વેદિક ઉપચાર દ્વારા આ સમસ્યાને નિયંત્રિત કરી શકાય છે.
        </Paragraph>

        <div className="bg-herbal text-white p-8 rounded-2xl text-center my-8 shadow-md">
          <Paragraph className="font-bold text-xl mb-2 text-white">શું તમે પણ સાંધાના દુખાવાથી પરેશાન છો?</Paragraph>
          <Paragraph className="text-white/80 mb-6">અમારા નિષ્ણાતો સાથે વાત કરો અને કુદરતી રીતે સાજા થવા તરફ ડગલું માંડો.</Paragraph>
          <WhatsAppButton text="અમારા નિષ્ણાત સાથે વાત કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── TYPES ─── */}
      <Section>
        <Heading level={1} className="text-herbal">Types of Arthritis (સંધિવાના પ્રકારો)</Heading>
        <ImageBox src={img.types} alt="Types of Arthritis" />

        <Paragraph className="text-center mb-8">
          ચોક્કસ, તમારી વેબસાઇટ માટે સંધિવાના પ્રકારો (Types of Arthritis) વિશેની ટૂંકી અને સચોટ ગુજરાતી માહિતી નીચે મુજબ છે:
        </Paragraph>

        <div className="bg-herbal text-white p-6 rounded-2xl text-center my-8 shadow-md">
          <Paragraph className="font-bold text-xl mb-0 text-white">સંધિવાના મુખ્ય પ્રકારો (Types of Arthritis)</Paragraph>
        </div>
        <Paragraph className="text-center text-stone-600 mb-10">
          સંધિવા માત્ર એક બીમારી નથી, પરંતુ તેના વિવિધ પ્રકારો છે જે શરીરના અલગ-અલગ સાંધાઓને અસર કરે છે. મુખ્યત્વે આ ત્રણ પ્રકારો સૌથી વધુ જોવા મળે છે:
        </Paragraph>

        <div className="space-y-5 mb-10">
          {[
            { label: "૧. ઓસ્ટિયોઆર્થરાઈટિસ (Osteoarthritis):-", text: "આ સંધિવાનો સૌથી સામાન્ય પ્રકાર છે. તે સામાન્ય રીતે વધતી ઉંમર સાથે સાંધા વચ્ચેના ગાદી જેવા ભાગ (Cartilage) ઘસાઈ જવાને કારણે થાય છે. આમાં ઘૂંટણ અને થાપાના સાંધામાં વધુ દુખાવો થાય છે." },
            { label: "૨. રુમેટોઇડ આર્થરાઈટિસ (Rheumatoid Arthritis):-", text: "આ એક 'ઓટો-ઈમ્યુન' રોગ છે, જેમાં શરીરની રોગપ્રતિકારક શક્તિ ભૂલથી પોતાના જ સાંધાઓ પર હુમલો કરે છે. આનાથી સાંધામાં સોજો, જકડાઈ જવી અને અસહ્ય દુખાવો થાય છે." },
            { label: "૩. ગાઉટ (Gout Arthritis):-", text: "જ્યારે શરીરમાં યુરિક એસિડનું પ્રમાણ વધી જાય છે, ત્યારે તે સાંધામાં સ્ફટિક (Crystals) સ્વરૂપે જમા થાય છે. સામાન્ય રીતે આની શરૂઆત પગના અંગૂઠાના સોજા અને દુખાવાથી થાય છે." },
          ].map((item, i) => (
            <div key={i} className="bg-green-50/50 p-6 rounded-2xl border border-green-100 shadow-sm transition-transform hover:translate-y-[-2px]">
              <strong className="text-herbal-dark block mb-2 text-lg">{item.label}</strong>
              <span className="text-stone-600">{item.text}</span>
            </div>
          ))}
        </div>

        <InfoBox type="green">
          <Paragraph className="font-bold text-herbal text-xl mb-0">🌿 તમારા સાંધાના દુખાવાને ઓળખો અને આજે જ યોગ્ય સારવાર શરૂ કરો.</Paragraph>
        </InfoBox>
      </Section>

      {/* ─── OSTEOARTHRITIS ─── */}
      <Section className="bg-stone-50 rounded-[3rem] px-6 py-12 md:p-16 border border-stone-200">
        <Heading level={2} className="text-herbal-dark">ઓસ્ટિયોઆર્થરાઈટિસ (Osteoarthritis): સાંધાના ઘસારાની સમસ્યા</Heading>
        <ImageBox src={img.osteo} alt="Osteoarthritis" />

        <ul className="space-y-5 mb-10">
          {[
            { b: "સાંધાની રચના:", t: "આપણા શરીરમાં બે હાડકાં જ્યાં જોડાય છે, ત્યાં વચ્ચે 'કાર્ટિલેજ' (Cartilage) નામનું એક નરમ અને ચીકણું પડ હોય છે. તે સાંધાને લુબ્રિકેશન પૂરું પાડે છે અને હાડકાંને એકબીજા સાથે ઘસાતા અટકાવે છે." },
            { b: "સમસ્યા ક્યારે સર્જાય છે?:", t: "જ્યારે આ કાર્ટિલેજ ઘસાઈ જાય અથવા સાંધામાં રહેલું ચીકણું પ્રવાહી (Liquid) ઓછું થઈ જાય, ત્યારે હાડકાં સીધા એકબીજા સાથે ઘસાવા લાગે છે." },
            { b: "લક્ષણો:", t: "આ પ્રક્રિયાને કારણે સાંધામાં અસહ્ય દુખાવો, સોજો અને જકડાઈ જવાની સમસ્યા થાય છે. આ સ્થિતિને જ 'ઓસ્ટિયોઆર્થરાઈટિસ' કહેવામાં આવે છે." },
            { b: "વય મર્યાદા:", t: "આ રોગ મુખ્યત્વે વધતી ઉંમર સાથે સંકળાયેલો છે. સામાન્ય રીતે ૪૫ વર્ષની ઉંમર પછી આ સમસ્યા વધુ જોવા મળે છે, તેથી તેને 'ઘડપણની બીમારી' પણ કહેવામાં આવે છે." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
              <span className="text-herbal mt-0.5 text-xl shrink-0">🔹</span>
              <span className="text-stone-700">* <strong>{item.b}</strong> {item.t}</span>
            </li>
          ))}
        </ul>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 my-8">
          <Heading level={3} className="text-herbal mt-0 border-b border-stone-100 pb-4">મુખ્ય નિશાનીઓ:</Heading>
          <ul className="space-y-3 mt-4">
            {["* ચાલતી વખતે ઘૂંટણમાંથી અવાજ આવવો.", "* સવારે ઉઠતી વખતે સાંધા જકડાઈ જવા.", "* સીડી ચડવા-ઉતરવામાં તકલીફ થવી."].map((t, i) => (
              <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                <span className="text-herbal font-bold">✓</span>{t}
              </li>
            ))}
          </ul>
        </div>

        <InfoBox type="green">
          <Paragraph className="font-bold text-herbal text-xl mb-2">🌿 શું તમે પણ સાંધાના ઘસારાથી ચિંતિત છો?</Paragraph>
          <Paragraph className="text-sm md:text-base opacity-80 mt-2 mb-0">અમારા આયુર્વેદિક ઉપચાર દ્વારા કાર્ટિલેજને પોષણ આપો અને સાંધાની ગતિશીલતા પાછી મેળવો.</Paragraph>
        </InfoBox>
      </Section>

      {/* ─── RHEUMATOID ─── */}
      <Section>
        <Heading level={1} className="text-herbal">રુમેટોઇડ આર્થરાઈટિસ (Rheumatoid Arthritis): જ્યારે શરીર જ બને દુશ્મન</Heading>
        <ImageBox src={img.ra} alt="Rheumatoid Arthritis" />

        <div className="bg-herbal text-white p-6 rounded-2xl text-center my-8 shadow-md">
          <Paragraph className="font-bold text-xl mb-0 text-white">રુમેટોઇડ આર્થરાઈટિસ (RA) એ સામાન્ય સંધિવા કરતા થોડો અલગ અને ગંભીર રોગ છે.</Paragraph>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 my-10">
          <ul className="space-y-5">
            {[
              { b: "રોગપ્રતિકારક શક્તિ (Immune System):", t: "આપણા શરીરમાં સફેદ રક્તકણો (White Cells) હોય છે, જે બહારથી આવતા વાયરસ કે બીમારીઓ સામે લડીને આપણું રક્ષણ કરે છે." },
              { b: "ભૂલ ભરેલો હુમલો:", t: "જ્યારે આ સફેદ રક્તકણો ભૂલથી બહારના દુશ્મનોને બદલે આપણા પોતાના જ સાંધાઓ (Joints) ના પડ પર હુમલો કરવાનું અને તેને નુકસાન પહોંચાડવાનું શરૂ કરી દે છે, ત્યારે તેને રુમેટોઇડ આર્થરાઈટિસ કહેવામાં આવે છે." },
              { b: "અસહ્ય વેદના:", t: "આ સ્થિતિમાં સાંધામાં સતત સોજો રહે છે અને ત્યાં અસહ્ય દુખાવો (Ashaya Pain) થાય છે. જો સમયસર સારવાર ન મળે, તો તે સાંધાના આકારને પણ બદલી શકે છે." },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-stone-700">
                <span className="text-herbal font-bold mt-1">✓</span>
                <span>* <strong className="text-stone-900">{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <Heading level={3} className="text-herbal mt-0">મુખ્ય લક્ષણો:</Heading>
            <ul className="space-y-3 text-stone-700 font-medium">
              {["* સવારે ઉઠતાની સાથે જ સાંધા ખૂબ જ જકડાઈ જવા.", "* એકસાથે બંને હાથ કે બંને પગના સાંધામાં દુખાવો થવો.", "* તાવ જેવો અનુભવ થવો અને સતત થાક લાગવો."].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-herbal font-bold">▪</span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100 flex flex-col justify-center">
            <Heading level={3} className="text-herbal-dark mt-0">શું તમે રુમેટોઇડ આર્થરાઈટિસથી પીડાઓ છો?</Heading>
            <Paragraph className="mb-0">
              અમારો આયુર્વેદિક અભિગમ તમારી રોગપ્રતિકારક શક્તિને સંતુલિત કરવામાં અને સાંધાના સોજાને કુદરતી રીતે ઘટાડવામાં મદદ કરી શકે છે.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* ─── GOUT ─── */}
      <Section className="bg-stone-50 rounded-[3rem] px-6 py-12 md:p-16 border border-stone-200">
        <Heading level={1} className="text-herbal">ગાઉટ (Gout Arthritis): યુરિક એસિડનો દુખાવો</Heading>
        <ImageBox src={img.gout} alt="Gout" />

        <Paragraph className="text-center font-semibold text-lg mb-8">
          ગાઉટ એ સાંધાનો એક વિશિષ્ટ પ્રકારનો દુખાવો છે, જે શરીરમાં થતા રાસાયણિક ફેરફારોને કારણે ઉદભવે છે. તેને આ રીતે સમજી શકાય:
        </Paragraph>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 my-10">
          <ul className="space-y-5">
            {[
              { b: "યુરિક એસિડનો ભરાવો:", t: "જ્યારે લોહીમાં યુરિક એસિડનું પ્રમાણ વધી જાય છે, ત્યારે તે સાંધાના પોલાણમાં સોય જેવા નાના સ્ફટિકો (Crystals) સ્વરૂપે જમા થવા લાગે છે. આ જમા થયેલ યુરિક એસિડને કારણે સાંધામાં અસહ્ય દુખાવો અને સોજો આવે છે, જેને 'ગાઉટ' કહેવામાં આવે છે." },
              { b: "ખોરાકની અસર:", t: "જે લોકો આહારમાં સી-ફૂડ (Sea Food), વધુ પડતું પ્રોટીન અથવા લાલ માસનો ઉપયોગ વધારે કરે છે, તેમનામાં આ સમસ્યા થવાની શક્યતા વધી જાય છે." },
              { b: "શરૂઆતના લક્ષણો:", t: "સામાન્ય રીતે ગાઉટની શરૂઆત પગના અંગૂઠાના સાંધાથી થાય છે. સાંધો એકાએક લાલ થઈ જાય છે, ગરમ લાગે છે અને તેને સ્પર્શતા પણ ખૂબ જ પીડા થાય છે." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-700">
                <span className="text-amber-500 mt-0.5 text-lg shrink-0">➤</span>
                <span>* <strong className="text-stone-900">{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100 shadow-sm">
          <Heading level={3} className="text-herbal mt-0">મુખ્ય કારણો:</Heading>
          <ul className="space-y-3 font-medium text-stone-700">
            {["* શરીરમાં પ્યુરિન (Purine) નામના તત્વનું પાચન બરાબર ન થવું.", "* પાણી ઓછું પીવું અથવા કિડની દ્વારા યુરિક એસિડ બરાબર સાફ ન થવું.", "* આલ્કોહોલ અથવા વધુ ખાંડવાળા પીણાંનું સેવન."].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-herbal font-bold">✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ─── CAUSES ─── */}
      <Section className="bg-stone-900 text-white rounded-[4rem] px-6 md:px-16 py-16 mt-12 mb-16 shadow-lg">
        <Heading level={2} className="text-white text-center mb-8 mt-0 border-b border-stone-800 pb-6">
          સાંધાના દુખાવા (Arthritis) થી પરેશાન છો? જાણો તેના મુખ્ય કારણો અને લક્ષણો
        </Heading>
        <ImageBox src={img.causes} alt="Causes" className="bg-white p-2 rounded-2xl" />

        <Heading level={3} className="text-herbal mt-8 mb-6">સાંધાના દુખાવા થવાના મુખ્ય કારણો:</Heading>
        <div className="space-y-4 mb-10">
          {[
            { b: "ખોટી ખાણી-પીણી:", t: "વધુ પડતું ખાવાની આદત શરીરમાં ઝેરી તત્વો (આમ) પેદા કરે છે, જે ગેસ બનીને સાંધાઓમાં જમા થાય છે અને સોજો લાવે છે." },
            { b: "વધતું વજન:", t: "શરીરનું વધારાનું વજન સીધું તમારા ઘૂંટણ પર દબાણ લાવે છે, જેના કારણે સાંધા ઝડપથી ઘસાય છે અને દુખાવો વધે છે." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-stone-800 border border-stone-700">
              <span className="text-2xl shrink-0">⚠️</span>
              <span className="text-stone-200">* <strong className="text-white">{item.b}</strong> {item.t}</span>
            </div>
          ))}
        </div>

        <Heading level={3} className="text-white text-center mb-6">
          આ લક્ષણોને નજરઅંદાજ ન કરો: જો તમને સાંધામાં નીચે મુજબની સમસ્યા જણાય, તો તે સંધિવા હોઈ શકે છે:
        </Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["* અસહ્ય દુખાવો", "* સાંધામાં લાલાશ આવવી", "* સાંધા ગરમ લાગવા", "* સાંધામાં સોજો આવવો"].map((t, i) => (
            <div key={i} className="p-4 rounded-2xl text-center text-sm font-semibold text-white bg-stone-800 border border-stone-700 hover:-translate-y-1 transition-transform">
              {t}
            </div>
          ))}
        </div>

        <div className="bg-white text-stone-900 p-8 rounded-3xl text-center shadow-2xl">
          <Paragraph className="text-xl font-bold text-herbal-dark mb-4"> &#62; સ્વસ્થ જીવન માટે આજે જ તમારી જીવનશૈલી બદલો!</Paragraph>
          <span className="inline-block px-8 py-3 rounded-full font-bold text-herbal-dark bg-amber-100 border border-amber-200">
            શું તમે સાંધાના દુખાવાનો કાયમી ઉકેલ ઈચ્છો છો?
          </span>
        </div>
      </Section>

      {/* ─── 5-STEP SOLUTION ─── */}
      <Section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-herbal/20 mt-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-60"></div>
        <Heading level={2} className="text-center text-herbal mt-0 relative z-10">
          સાંધાના દુખાવા અને ગઠિયા (Arthritis) થી મુક્તિ મેળવો: <span className="text-amber-600">સંપૂર્ણ સમાધાન!</span>
        </Heading>
        <ImageBox src={img.solution} alt="Solution" className="relative z-10" />

        <Paragraph className="text-center font-semibold text-lg bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-10 shadow-sm">
          સાંધાના દુખાવાને માત્ર દબાવો નહીં, તેને જડમૂળથી દૂર કરો. અમારું વિશેષ સોલ્યૂશન આ 5 રીતે કામ કરીને તમને આપે છે કાયમી રાહત:
        </Paragraph>

        <Heading level={3} className="text-herbal text-center mb-6">અમારું 5-સ્ટેપ સોલ્યૂશન:</Heading>
        <div className="space-y-4 mb-10">
          {[
            { n: "1", b: "ગેસ (વાયુ) પર નિયંત્રણ:", t: "શરીરમાંથી વધારાનો વાયુ દૂર કરી સાંધાના દબાણમાં ઘટાડો કરે છે." },
            { n: "2", b: "હાડકાની મજબૂતી (Bone Strength):", t: "હાડકાંને અંદરથી પોષણ આપીને વધુ મજબૂત બનાવે છે." },
            { n: "3", b: "દુખાવામાં રાહત (Pain Control):", t: "કુદરતી રીતે સોજો ઉતારીને અસહ્ય દુખાવામાંમાંથી મુક્તિ અપાવે છે." },
            { n: "4", b: "સોજા પર નિયંત્રણ (Swelling Control):", t: "સાંધામાં થતી લાલાશ અને સોજો ઘટાડી હલનચલન સરળ બનાવે છે." },
            { n: "5", b: "કાર્ટિલેજ સપોર્ટ (Cartilage Support):", t: "સાંધા વચ્ચેની ગાદી (Cartilage) ને ઘસાતી અટકાવે છે અને રક્ષણ આપે છે." },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="w-10 h-10 rounded-full bg-herbal text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">{s.n}</span>
              <span className="text-stone-700">* <strong className="text-herbal-dark">{s.b}</strong> {s.t}</span>
            </div>
          ))}
        </div>

        <InfoBox type="green">
          <Paragraph className="font-bold text-herbal text-lg mb-0">
            &#62; સાંધાના રોગોમાં માત્ર પેઈનકિલર લેવી પૂરતી નથી, પરંતુ હાડકાં અને કાર્ટિલેજને ફરી જીવંત કરવા જરૂરી છે. અમે તમને આપીએ છીએ કુદરતી અને લાંબા ગાળાની રાહત!
          </Paragraph>
        </InfoBox>

        <div className="mt-10 text-center">
          <WhatsAppButton text="સોલ્યૂશન વિશે વધુ જાણો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── PRODUCTS OVERVIEW ─── */}
      <Section className="mt-12">
        <div className="text-center mb-12">
          <Heading level={1} className="text-herbal">આર્થરાઈટિસ સોલ્યૂશન:</Heading>
          <Paragraph className="text-xl font-bold uppercase tracking-wider text-amber-600">
            સાંધાના દુખાવાની આયુર્વેદિક સારવાર
          </Paragraph>
          <Paragraph className="text-stone-600 max-w-2xl mx-auto">
            હવે સાંધાના દુખાવા અને સોજાને કહો અલવિદા! આયુર્વેદના આંગણે લાવ્યું છે કુદરતી જડીબુટ્ટીઓથી ભરપૂર સંપૂર્ણ હેલ્થ કીટ, જે તમારા હાડકાંને આપે છે નવું જીવન.
          </Paragraph>
        </div>

        <Heading level={3} className="text-herbal mb-6">અમારી શ્રેષ્ઠ પ્રોડક્ટ્સ જે તમને આપશે કાયમી રાહત:</Heading>
        <div className="space-y-4 mb-12">
          {[
            { icon: "🌿", title: "Ortho Oil & Tablets", desc: "દુખાવા પર ઝડપી અસર અને સાંધાની લવચીકતા વધારે છે." },
            { icon: "🌿", title: "Boswellia Capsules", desc: "કુદરતી રીતે સોજો અને બળતરા ઘટાડે છે." },
            { icon: "🌿", title: "Kaishor Guggulu", desc: "લોહીનું શુદ્ધિકરણ કરી સાંધાના ઝેરી તત્વો (યુરિક એસિડ) ઘટાડે છે." },
            { icon: "🌿", title: "D3 Oral Spray", desc: "હાડકાંના બંધારણ માટે જરૂરી વિટામીન-D3 ની પૂર્તિ કરે છે." },
            { icon: "🌿", title: "Calcium Chewable Tablets", desc: "હાડકાંને અંદરથી મજબૂત અને સ્વસ્થ બનાવે છે." },
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-4 bg-green-50/50 p-5 rounded-2xl border border-green-100 shadow-sm transition-transform hover:translate-y-[-2px]">
              <span className="text-2xl shrink-0">{p.icon}</span>
              <Paragraph className="mb-0">
                <strong className="text-herbal-dark">{p.title}:</strong> {p.desc}
              </Paragraph>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-stone-100">
            <Heading level={3} className="text-herbal-dark mt-0 border-b border-stone-100 pb-3 mb-6">આયુર્વેદના આંગણે શા માટે પસંદ કરવું?</Heading>
            <ul className="space-y-4 text-stone-700 font-semibold mb-7">
              {[
                { icon: "🌱", text: "૧૦૦% આયુર્વેદિક અને સુરક્ષિત" },
                { icon: "✅", text: "કોઈ આડઅસર (Side Effects) નહીં" },
                { icon: "🦴", text: "હાડકાં અને કાર્ટિલેજનું સંપૂર્ણ રક્ષણ" },
                { icon: "🏃", text: "ફરીથી સક્રિય જીવન જીવવાની શક્તિ" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <Paragraph className="text-herbal font-bold text-center p-4 rounded-xl bg-green-50 border border-green-100 mb-0">
              હવે જડબાતોડ દુખાવાથી ડરવાની જરૂર નથી, આજે જ તમારી કીટ બુક કરો!
            </Paragraph>
          </div>

          <div className="bg-white p-7 rounded-3xl flex flex-col items-center justify-center shadow-sm border border-amber-100">
            <Paragraph className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-5">
              &#62; વધુ માહિતી અને ઓર્ડર માટે:
            </Paragraph>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 mb-6 shadow-inner">
              <img src={img.kitQr} alt="QR Code" className="w-40 h-40 object-contain rounded-xl" />
            </div>
            <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full" />
          </div>
        </div>
      </Section>

      {/* ─── ORTHO OIL ─── */}
      <Section className="bg-stone-900 text-white rounded-[4rem] px-6 md:px-16 py-16 mt-12 mb-16 shadow-lg">
        <Heading level={2} className="text-white text-center mb-8 mt-0 border-b border-stone-800 pb-6">Ortho Oil</Heading>
        <ProductCard
          title="Teamex Ortho Oil: વર્ષો જૂના સાંધા અને સ્નાયુના દુખાવામાંથી મેળવો કાયમી છુટકારો!"
          image={img.orthoOilBanner}
        >
          <Paragraph className="text-herbal-dark font-bold">&quot;શું તમે ઘૂંટણ, કમર કે સ્નાયુઓના દુખાવાથી પરેશાન છો? Teamex Ortho Oil એ ૯૦થી વધુ આયુર્વેદિક જડીબુટ્ટીઓ અને ૭ કુદરતી તેલનું અનોખું મિશ્રણ છે, જે દુખાવાને જડમૂળથી દૂર કરવામાં મદદ કરે છે.&quot;</Paragraph>
          {[
            { title: "શક્તિશાળી સામગ્રી", desc: "તેમાં મહાનારાયણ તેલ, મહાવિષગર્ભ તેલ અને નિર્ગુડી તેલ જેવા શક્તિશાળી તત્વો છે જે હાડકાંને જોડવામાં અને સ્નાયુઓની જકડન દૂર કરવામાં મદદ કરે છે." },
            { title: "ઝડપી અસર", desc: "આ તેલ શરીરમાં સરળતાથી શોષાઈ જાય છે અને મિનીટોમાં જ રાહત આપે છે." },
            { title: "સંપૂર્ણ આયુર્વેદિક", desc: "બજારમાં મળતા મેન્થોલયુક્ત તેલથી અલગ, આ ૧૦૦% કુદરતી અને સુરક્ષિત છે." },
            { title: "દરેક દુખાવા માટે", desc: "ભલે તે વર્ષો જૂનો સાંધાનો દુખાવો હોય કે જીમ-સ્પોર્ટ્સની ઈજા, આ તેલ રામબાણ ઈલાજ છે." },
          ].map((f, i) => (
            <div key={i} className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
              <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* <strong>{f.title}:</strong> {f.desc}</Paragraph>
            </div>
          ))}
        </ProductCard>

        <ImageBox src={img.orthoOil1} alt="Ortho Oil 1" />
        <ImageBox src={img.orthoOil2} alt="Ortho Oil 2" />
        <ImageBox src={img.orthoOilHow} alt="Ortho Oil How to use" />

        <div className="bg-stone-800 p-6 md:p-8 rounded-3xl border border-stone-700 mt-6">
          <Heading level={3} className="text-white mt-0 mb-4">ઉપયોગ / સેવન કરવાની રીત (How to Use):</Heading>
          <Paragraph className="text-stone-300 mb-2"><strong className="text-white">૧.</strong> દિવસમાં બે વાર દુખાવા વાળા ભાગ પર તેલ લગાવો.</Paragraph>
          <Paragraph className="text-stone-300 mb-0"><strong className="text-white">૨.</strong> ૫ થી ૧૦ મિનિટ સુધી હળવા હાથે ગોળાકાર (Circulate) માલિશ કરો.</Paragraph>
        </div>

        <div className="mt-8 text-center">
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── ORTHO TABLET ─── */}
      <Section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-herbal/20 mt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-60"></div>
        <Heading level={2} className="text-center text-herbal mt-0 relative z-10">Ortho Tablet</Heading>
        <ProductCard
          title="Teamex Ortho Tablet: ૨૨ શક્તિશાળી જડીબુટ્ટીઓ સાથે સાંધાના દુખાવાનો કાયમી ઉકેલ!"
          image={img.orthoTabletBanner}
        >
          <Paragraph className="text-herbal font-bold">સાંધાનો દુખાવો હોય કે ગઠિયાની સમસ્યા, હવે કુદરતી રીતે મેળવો રાહત. Teamex Ortho Tablet એ ૨૨ પ્રકારની દુર્લભ આયુર્વેદિક જડીબુટ્ટીઓનું અદભૂત મિશ્રણ છે, જે તમારા હાડકાં અને સાંધાઓને અંદરથી પોષણ આપે છે.</Paragraph>
          {[
            { title: "કાર્ટિલેજ સપોર્ટ", desc: "ગળો, સલકી ગૂગળ અને હાડસાંકળ જેવી જડીબુટ્ટીઓ સાંધા વચ્ચેની ગાદીને ઘસાતી અટકાવે છે." },
            { title: "દુખાવામાં રાહત", desc: "હળદર, દેવદાર અને આમળા દુખાવો ઘટાડીને હલનચલન સરળ બનાવે છે." },
            { title: "પાચનમાં મદદરૂપ", desc: "આ ટેબ્લેટ પાચનશક્તિ સુધારે છે જેથી સાંધામાં વાયુ (ગેસ) જમા થતો નથી." },
            { title: "હાડકાંની મજબૂતી", desc: "હરડે અને મરી હાડકાંઓને લોખંડ જેવા મજબૂત બનાવવામાં મદદ કરે છે." },
          ].map((f, i) => (
            <div key={i} className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
              <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* <strong>{f.title}:</strong> {f.desc}</Paragraph>
            </div>
          ))}
        </ProductCard>

        <ImageBox src={img.orthoTablet1} alt="Ortho Tablet 1" />
        <ImageBox src={img.orthoTablet2} alt="Ortho Tablet 2" />
        <ImageBox src={img.orthoTabletHow} alt="Ortho Tablet How to use" />

        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 mt-6">
          <Heading level={3} className="text-herbal mt-0 mb-4">ઉપયોગ / સેવન કરવાની રીત (How to Use):</Heading>
          <Paragraph className="font-semibold mb-3">શ્રેષ્ઠ પરિણામ મેળવવા માટે હૂંફાળા પાણી સાથે આ મુજબ લો:</Paragraph>
          <Paragraph className="mb-1">👉 પહેલું અઠવાડિયું: ૨ ટેબ્લેટ, દિવસમાં ૩ વાર.</Paragraph>
          <Paragraph className="mb-1">👉 બીજા અઠવાડિયાથી: ૨ ટેબ્લેટ, દિવસમાં ૨ વાર.</Paragraph>
          <Paragraph className="text-sm italic opacity-70 mb-0">* (નોંધ: જો ગેસની સમસ્યા હોય તો જમ્યા પહેલા લેવી)</Paragraph>
        </div>

        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 mt-6">
          <Paragraph className="font-bold text-stone-900 mb-1">શા માટે આ ટેબ્લેટ છે ખાસ?</Paragraph>
          <Paragraph className="text-stone-600 mb-0">* સંપૂર્ણ સુરક્ષા: ૧૦૦% ઓર્ગેનિક, GMP સર્ટિફાઈડ અને FDA દ્વારા માન્ય.</Paragraph>
        </div>

        <div className="mt-8 text-center">
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── BOSWELLIA ─── */}
      <Section className="bg-stone-900 text-white rounded-[4rem] px-6 md:px-16 py-16 mt-12 mb-16 shadow-lg">
        <Heading level={2} className="text-white text-center mb-8 mt-0 border-b border-stone-800 pb-6">Boswellia Capsules</Heading>
        <ProductCard
          title="Teamex Boswellia: સાંધાના દુખાવા અને સોજા માટે કુદરતી વરદાન!"
          image={img.boswelliaBanner}
        >
          <Paragraph className="text-herbal font-bold">&quot;સદીઓથી એશિયા અને આફ્રિકામાં વપરાતી ચમત્કારિક જડીબુટ્ટી હવે કેપ્સ્યુલ સ્વરૂપે. Teamex Boswellia એ માત્ર સાંધાના દુખાવા માટે જ નહીં, પણ સમગ્ર શરીરના સ્વાસ્થ્ય માટે એક શક્તિશાળી આયુર્વેદિક સોલ્યૂશન છે.&quot;</Paragraph>
          {[
            { title: "સાંધાનું સ્વાસ્થ્ય", desc: "ઓસ્ટિયો અને રુમેટોઈડ આર્થરાઈટિસમાં અત્યંત ફાયદાકારક." },
            { title: "આમ દોષનું પાચન", desc: "શરીરમાંથી 'આમ રસ' (ઝેરી તત્વો) નું પાચન કરી રોગને જડમૂળથી દૂર કરવામાં મદદ કરે છે." },
            { title: "અન્ય સ્વાસ્થ્ય લાભો", desc: "અસ્થમા, ડાયાબિટીસ, કોલેસ્ટ્રોલ અને માનસિક તણાવ ઘટાડવામાં મદદરૂપ." },
            { title: "સ્ત્રી રોગોમાં ઉપયોગી", desc: "પેશાબ અને માસિક ધર્મના પ્રવાહને નિયમિત કરવામાં સહાય કરે છે." },
          ].map((f, i) => (
            <div key={i} className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
              <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* <strong>{f.title}:</strong> {f.desc}</Paragraph>
            </div>
          ))}
        </ProductCard>

        <ImageBox src={img.boswellia1} alt="Boswellia 1" />
        <ImageBox src={img.boswellia2} alt="Boswellia 2" />
        <ImageBox src={img.boswellia3} alt="Boswellia 3" />
        <ImageBox src={img.boswelliaHow} alt="Boswellia How to use" />

        <div className="bg-stone-800 p-6 md:p-8 rounded-3xl border border-stone-700 mt-6">
          <Heading level={3} className="text-white mt-0 mb-4">ઉપયોગ / સેવન કરવાની રીત (How to Use):</Heading>
          <Paragraph className="text-stone-300 mb-0">* રોજની માત્ર ૧ કેપ્સ્યુલ, જમ્યા પહેલા લો.</Paragraph>
        </div>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          {[
            "* ૩૦% AKBA અને ૭૫% Boswellic Acid: આ એક એવું દુર્લભ કોન્સન્ટ્રેટ કોમ્બિનેશન છે જે સોજા અને દુખાવા પર સીધી અસર કરે છે.",
            "* ૧૦૦% શાકાહારી (Vegetarian): શુદ્ધ શાકાહારી કેપ્સ્યુલ્સ જે દરેક માટે સુરક્ષિત છે.",
          ].map((t, i) => (
            <div key={i} className="bg-stone-800 p-5 rounded-2xl border border-stone-700 shadow-sm">
              <Paragraph className="text-stone-200 font-semibold mb-0">{t}</Paragraph>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── KAISHOR GUGGULU ─── */}
      <Section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-herbal/20 mt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-60"></div>
        <Heading level={2} className="text-center text-herbal mt-0 relative z-10">Kaishor Guggulu</Heading>
        <ProductCard
          title="Kaishor Guggulu: સાંધાના દુખાવા અને ત્વચાના રોગો માટે રામબાણ ઈલાજ!"
          image={img.kaishorBanner}
        >
          <Paragraph className="text-herbal font-bold">શરીરમાં પિત્તનું સંતુલન જાળવવા અને લોહીને શુદ્ધ કરવા માટે Kaishor Guggulu એ શ્રેષ્ઠ આયુર્વેદિક ઉપાય છે. તે માત્ર સાંધાના દુખાવામાં રાહત નથી આપતું, પણ શરીરને અંદરથી ડિટોક્સ (Detox) પણ કરે છે.</Paragraph>
          {[
            { title: "પિત્ત દોષનું સંતુલન", desc: "શરીરમાં વધેલા પિત્તને નિયંત્રિત કરી બળતરા અને સોજો ઘટાડે છે." },
            { title: "ડિટોક્સિફિકેશન", desc: "લોહીમાં રહેલા ઝેરી તત્વોને દૂર કરી શરીરને શુદ્ધ કરે છે." },
            { title: "સાંધાના દુખાવામાં રાહત", desc: "સંધિવા (Gout) અને યુરિક એસિડની સમસ્યામાં અત્યંત ગુણકારી છે." },
            { title: "ચમકતી ત્વચા", desc: "એન્ટી-ઓક્સિડન્ટ ગુણોને કારણે ખીલ અને ત્વચાના અન્ય રોગો મટાડી કુદરતી ગ્લો આપે છે." },
            { title: "મેટાબોલિઝમ", desc: "પાચનશક્તિ સુધારે છે અને ચયાપચયની ક્રિયાને વેગ આપે છે." },
          ].map((f, i) => (
            <div key={i} className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
              <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* <strong>{f.title}:</strong> {f.desc}</Paragraph>
            </div>
          ))}
        </ProductCard>

        <ImageBox src={img.kaishor1} alt="Kaishor 1" />
        <ImageBox src={img.kaishor2} alt="Kaishor 2" />
        <ImageBox src={img.kaishorHow} alt="Kaishor How to use" />

        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 mt-6">
          <Heading level={3} className="text-herbal mt-0 mb-4">ઉપયોગ / સેવન કરવાની રીત (How to Use):</Heading>
          <Paragraph className="mb-1">👉 દિવસમાં ૨ વાર ૨-૨ ટેબ્લેટ પાણી સાથે લો.</Paragraph>
          <Paragraph className="text-sm italic opacity-70 mb-0">* (જમ્યા પછી ) *</Paragraph>
        </div>

        <div className="bg-amber-400 p-5 rounded-2xl text-center font-bold text-stone-900 my-8 text-xl shadow-lg">
          ઓર્ડર માટે સંપર્ક કરો: 96871 05624
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {["✅ પાચનતંત્ર મજબૂત બનાવે", "✅ એન્ટી-ઓક્સિડન્ટ ગુણોથી ભરપૂર", "✅ સાંધાની જકડન દૂર કરે", "✅ યુવાન અને સ્વસ્થ ત્વચા આપે"].map((t, i) => (
            <div key={i} className="p-4 rounded-2xl text-center font-semibold text-herbal-dark text-sm bg-green-50/50 border border-green-100 shadow-sm">
              {t}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── VITAMIN D3 SPRAY ─── */}
      <Section className="bg-stone-900 text-white rounded-[4rem] px-6 md:px-16 py-16 mt-12 mb-16 shadow-lg">
        <Heading level={2} className="text-white text-center mb-8 mt-0 border-b border-stone-800 pb-6">Vitamin D3 Spray</Heading>
        <ProductCard
          title="Teamex D3 Oral Spray: વિટામિન-D ની ઉણપનો આધુનિક અને સરળ ઉપાય!"
          image={img.d3Banner}
        >
          <Paragraph className="text-herbal font-bold">&quot;શું તમે જાણો છો? માત્ર કેલ્શિયમ લેવું પૂરતું નથી, તેને શરીરમાં શોષવા માટે વિટામિન-D3 અનિવાર્ય છે. Teamex D3 Daily Oral Spray તમને ગોળીઓ ગળવાની ઝંઝટમાંથી મુક્તિ આપે છે અને સીધું જ લોહીમાં ભળીને તાત્કાલિક અસર કરે છે.&quot;</Paragraph>
          {[
            { title: "નેનો ટેકનોલોજી", desc: "સ્પ્રે કરવાથી તે સીધું મોંની નસો દ્વારા શોષાય છે, જે કેપ્સ્યુલ કરતા અનેકગણી ઝડપી અસર આપે છે." },
            { title: "હાડકાંની મજબૂતી", desc: "કેલ્શિયમના શોષણમાં મદદ કરી હાડકાં અને દાંતને મજબૂત બનાવે છે." },
            { title: "રોગપ્રતિકારક શક્તિ", desc: "તમારી ઇમ્યુનિટી વધારે છે અને વારંવાર બીમાર પડતા અટકાવે છે." },
            { title: "મૂડ અને એનર્જી", desc: "તે માનસિક તણાવ ઘટાડવામાં અને આખો દિવસ સ્ફૂર્તિ જાળવી રાખવામાં મદદરૂપ છે." },
          ].map((f, i) => (
            <div key={i} className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
              <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* <strong>{f.title}:</strong> {f.desc}</Paragraph>
            </div>
          ))}
        </ProductCard>

        <ImageBox src={img.d31} alt="D3 1" />
        <ImageBox src={img.d32} alt="D3 2" />
        <ImageBox src={img.d3How} alt="D3 How to use" />

        <div className="bg-stone-800 p-6 md:p-8 rounded-3xl border border-stone-700 mt-6">
          <Heading level={3} className="text-white mt-0 mb-4">ઉપયોગ / સેવન કરવાની રીત (How to Use):</Heading>
          <Paragraph className="text-stone-300 mb-0">* રોજ સવાર થી સાંજ સુધી જીભ નીચે અથવા ગાલની અંદરની બાજુએ 4 સ્પ્રે કરો.</Paragraph>
        </div>

        <div className="grid grid-cols-2 gap-3 my-8">
          {["✅ હાડકાં અને સ્નાયુઓને શક્તિ આપે", "✅ હૃદય અને રોગપ્રતિકારક તંત્રનું રક્ષણ કરે", "✅ ગમે ત્યારે, ગમે ત્યાં વાપરવામાં સરળ", "✅ કુદરતી રીતે શુદ્ધ અને અસરકારક"].map((t, i) => (
            <div key={i} className="p-4 rounded-2xl text-center font-semibold text-white text-sm bg-stone-800 border border-stone-700 shadow-sm">
              {t}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── CALCIUM ─── */}
      <Section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-herbal/20 mt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-60"></div>
        <Heading level={2} className="text-center text-herbal mt-0 relative z-10">Calcium Chewable Tablets</Heading>
        <ProductCard
          title="Calcium: મજબૂત હાડકાં અને દાંત માટે કુદરતી સુરક્ષા કવચ!"
          image={img.calciumBanner}
        >
          <Paragraph className="text-herbal font-bold">વધતી ઉંમર અને બદલાતી જીવનશૈલીમાં હાડકાંને મજબૂત રાખવા ખૂબ જરૂરી છે.</Paragraph>
          {[
            { title: "ચાવવા યોગ્ય (Chewable)", desc: "ગળવાની ઝંઝટ વગર, ગમે ત્યારે અને ગમે ત્યાં લઈ શકાય છે." },
            { title: "ઝડપી શોષણ", desc: "શરીર આ કેલ્શિયમને ઝડપથી શોષી લે છે, જે હાડકાં પર ત્વરિત અસર કરે છે." },
            { title: "હાડકાંની મજબૂતી", desc: "હાડકાંની ઘનતા (Density) વધારી તેને પોલા થતા અટકાવે છે." },
            { title: "દાંતનું સ્વાસ્થ્ય", desc: "દાંતને મૂળમાંથી મજબૂત બનાવે છે અને સડો અટકાવે છે." },
          ].map((f, i) => (
            <div key={i} className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
              <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* <strong>{f.title}:</strong> {f.desc}</Paragraph>
            </div>
          ))}
        </ProductCard>

        <ImageBox src={img.calcium1} alt="Calcium 1" />
        <ImageBox src={img.calcium2} alt="Calcium 2" />
        <ImageBox src={img.calcium3} alt="Calcium 3" />
        <ImageBox src={img.calciumHow} alt="Calcium How to use" />

        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 mt-6">
          <Heading level={3} className="text-herbal mt-0 mb-4">ઉપયોગ / સેવન કરવાની રીત (How to Use):</Heading>
          <Paragraph className="mb-0">* દિવસમાં ૧ થી ૨ ટેબ્લેટ (ચાવીને અથવા ગળીને લઈ શકાય છે).</Paragraph>
        </div>

        <Paragraph className="text-lg text-center my-8 text-stone-600">
          Calcium Chewable Tablets એ શરીરની કેલ્શિયમની જરૂરિયાતને પૂરી કરી તમને આપે છે અંદરથી મજબૂતી અને નવી ઊર્જા.
        </Paragraph>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {["💪 સાંધાના દુખાવા અને થાકને દૂર કરે છે.", "🦷 દાંત અને પેઢાને મજબૂત બનાવે છે.", "🦴 હાડકાંના બંધારણને લોખંડ જેવું મજબૂત કરે છે.", "🌟 ૧૦૦% સુરક્ષિત અને અસરકારક."].map((t, i) => (
            <div key={i} className="p-4 rounded-2xl text-center font-semibold text-herbal-dark text-sm bg-green-50/50 border border-green-100 shadow-sm">
              {t}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto mx-auto" />
        </div>
      </Section>

      {/* ─── REVIEWS SECTION ─── */}
      <Section className="bg-stone-50 rounded-[3rem] px-6 py-12 md:p-16 border border-stone-200 mt-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <Heading level={2} className="text-center text-herbal mb-12">ગ્રાહકોનો પ્રતિસાદ (Customer Reviews)</Heading>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Written Reviews */}
          <div className="space-y-6">
            <Heading level={3} className="text-herbal-dark mt-0 mb-6 flex items-center gap-3">
              <MessageSquare className="text-herbal" /> લેખિત પ્રતિસાદ
            </Heading>
            <div className="grid gap-4">
              {[
                { name: "રતિલાલ શાહ", text: "વર્ષોથી ઘૂંટણનો દુખાવો હતો, ઓર્થો ઓઈલ અને ટેબ્લેટથી હવે ચાલવામાં ઘણી રાહત છે.", rating: 5, date: "૨ અઠવાડિયા પહેલા" },
                { name: "જે. પી. પટેલ", text: "આયુર્વેદિક કીટ વાપરવા જેવી છે. કોઈ આડઅસર વગર દુખાવો ઓછો થાય છે.", rating: 5, date: "૧ મહિના પહેલા" },
                { name: "વસંતીબેન", text: "કાઈશોર ગૂગળ અને કેલ્શિયમ ટેબ્લેટથી મારા સાંધાની જકડન ઓછી થઈ ગઈ છે. ખૂબ સારો અનુભવ.", rating: 5, date: "૩ અઠવાડિયા પહેલા" },
                { name: "મુકેશભાઈ", text: "યુરિક એસિડ વધી ગયું હતું, પણ બેલાકાસ્ટની સલાહ મુજબ સારવાર લેવાથી હવે સ્ટેબલ છે.", rating: 4, date: "૫ દિવસ પહેલા" },

              ].map((rev, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < rev.rating ? "text-amber-400 fill-amber-400" : "text-stone-200"}`} />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {rev.date}
                    </span>
                  </div>
                  <Paragraph className="text-stone-700 italic text-base md:text-lg mb-4">"{rev.text}"</Paragraph>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-herbal/10 flex items-center justify-center text-herbal font-bold text-xs">
                      {rev.name[0]}
                    </div>
                    <span className="font-bold text-stone-900">{rev.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Reviews */}
          <div className="space-y-6">
            <Heading level={3} className="text-herbal-dark mt-0 mb-6 flex items-center gap-3">
              <Zap className="text-herbal" /> વિડિયો પ્રતિસાદ
            </Heading>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <VideoBox src={arthritisResults.vid1} />
              <VideoBox src={arthritisResults.vid2} />
              <VideoBox src={arthritisResults.vid3} />
              <div className="bg-herbal/5 border border-herbal/10 p-4 md:p-6 rounded-3xl flex flex-col items-center justify-center text-center aspect-9/16">
                <div className="w-12 h-12 rounded-full bg-herbal/10 flex items-center justify-center text-herbal mb-4">
                  <MessageSquare size={24} />
                </div>
                <Paragraph className="text-herbal-dark font-black mb-0 italic text-xs md:text-sm">તમારા સફળ પરિણામો અમારી સાથે શેર કરો!</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section className="pb-24 max-w-5xl">
        <div className="bg-gradient-to-br from-herbal to-herbal-dark p-12 md:p-20 rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <Heading level={1} className="text-white relative z-10 mb-10 leading-tight">
            &quot;સ્વસ્થ અને સક્રિય જીવનની શરૂઆત આજે જ કરો. સાચું આયુર્વેદ, સાચું માર્ગદર્શન!&quot;
          </Heading>
          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="bg-white/10 p-2 rounded-3xl backdrop-blur-sm border border-white/20">
              <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto px-10 py-5 text-lg" />
            </div>
            <div className="mt-8 bg-white text-herbal-dark px-10 py-6 rounded-3xl shadow-xl transition-transform hover:scale-105 inline-block">
              <Paragraph className="text-xl md:text-3xl font-black mb-0">📞 કોલ કરો: 96871 05624</Paragraph>
            </div>
            <Paragraph className="text-white/80 mt-6 text-sm md:text-base italic max-w-lg mx-auto">
              સાંધાનો દુખાવો, ગઠિયો કે અન્ય સ્વાસ્થ્ય સંબંધિત કોઈ પણ પ્રશ્ન માટે અમારો સંપર્ક કરો. અમે હંમેશા તમારી મદદ માટે તૈયાર છીએ.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER GIF ─── */}
      <section className="py-20 flex justify-center bg-stone-50">
        <img
          src={img.footerGif}
          alt="Footer"
          className="max-w-[280px] rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform"
        />
      </section>

      <SocialLinks />
    </main>
  );
}