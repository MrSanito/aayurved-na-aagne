"use client"

import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const assetPath = "/assets/haircare";

const images = {
  logo: `${assetPath}/logo.png`,
  hairfall1: `${assetPath}/hairfall1.jpg`,
  hairfall2: `${assetPath}/hairfall2.jpg`,
  vitamins: `${assetPath}/vitamins.jpg`,
  norwood: `${assetPath}/norwood.jpg`,
  blackHair: `${assetPath}/blackHair.jpg`,
  products: `${assetPath}/products.jpg`,
  biotinDeficiency: `${assetPath}/biotinDeficiency.jpg`,
  biotinGummy: `${assetPath}/biotinGummy.jpg`,
  b12spray: `${assetPath}/b12spray.jpg`,
  saptamrut: `${assetPath}/saptamrut.jpg`,
  hairTonic: `${assetPath}/hairTonic.jpg`,
  shampoo: `${assetPath}/shampoo.jpg`,
  conditioner: `${assetPath}/conditioner.jpg`,
  conditionerResult: `${assetPath}/conditionerResult.jpg`,
  hairOil: `${assetPath}/hairOil.jpg`,
  hairOilResult: `${assetPath}/hairOilResult.jpg`,
  serum: `${assetPath}/serum.jpg`,
  gif1: `${assetPath}/gif1.gif`,
  result1: `${assetPath}/result1.jpg`,
  gif2: `${assetPath}/gif2.gif`,
  cert1: `${assetPath}/cert1.png`,
  gif3: `${assetPath}/gif3.gif`,
  cert2: `${assetPath}/cert2.png`,
  gif4: `${assetPath}/gif4.gif`,
  cert3: `${assetPath}/cert3.png`,
  gif5: `${assetPath}/gif5.gif`,
  certification: `${assetPath}/certification.jpg`,
};

const haircareResults = {
  img1: "/haircareresults/WhatsApp Image 2026-03-31 at 12.30.35 PM.jpeg",
  img2: "/haircareresults/WhatsApp Image 2026-03-31 at 12.30.45 PM (1).jpeg",
  img3: "/haircareresults/WhatsApp Image 2026-03-31 at 12.30.45 PM.jpeg",
  vid1: "/haircareresults/WhatsApp Video 2026-03-31 at 12.29.37 PM.mp4",
  vid2: "/haircareresults/WhatsApp Video 2026-03-31 at 12.29.39 PM.mp4",
  vid3: "/haircareresults/WhatsApp Video 2026-03-31 at 12.29.41 PM.mp4",
  vid4: "/haircareresults/WhatsApp Video 2026-03-31 at 12.29.42 PM.mp4",
  vid5: "/haircareresults/WhatsApp Video 2026-03-31 at 12.30.34 PM.mp4",
};

// UI Components
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-4xl mx-auto px-4 py-12 md:py-16 ${className}`}>
    {children}
  </section>
);

const Heading = ({ children, level = 2, className = "" }: { children: React.ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const baseClasses = "font-bold tracking-tight leading-tight";
  const colorClass = className.includes("text-") ? "" : "text-stone-900";
  
  if (level === 1) return <h1 className={`${baseClasses} ${colorClass} text-3xl md:text-4xl text-center mb-8 ${className}`}>{children}</h1>;
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

const VideoBox = ({ src, className = "" }: { src: string; className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    <div className={`relative group rounded-4xl overflow-hidden shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-herbal/10 transition-all duration-700 hover:-translate-y-2 border border-white bg-black aspect-9/16 ${className}`}>
      <video 
        ref={videoRef}
        src={src} 
        playsInline
        className="w-full h-full object-contain"
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
            <FaPlay className="ml-1 text-xl" />
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest font-outfit">
              Video Story
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ title, image, children }: { title: string; image: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden my-12 transition-all hover:shadow-md">
    <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
      <h3 className="text-xl md:text-2xl font-bold text-herbal-dark">{title}</h3>
    </div>
    <div className="p-6 md:p-8 md:flex gap-10 items-start">
      <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-inner border border-stone-100" />
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

const ReviewCard = ({ name, location, review, rating = 5 }: { name: string; location: string; review: string; rating?: number }) => (
  <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow relative">
    <div className="flex text-amber-400 mb-3">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-xl">★</span>
      ))}
    </div>
    <p className="text-stone-700 italic mb-6 leading-relaxed">"{review}"</p>
    <div className="flex items-center gap-3 border-t border-stone-50 pt-4">
      <div className="w-10 h-10 rounded-full bg-herbal/10 flex items-center justify-center text-herbal font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-stone-900 text-sm">{name}</p>
        <p className="text-stone-500 text-xs">{location}</p>
      </div>
    </div>
  </div>
);

const WhatsAppButton = ({ text = "અત્યારે જ ઓર્ડર કરો", className = "" }: { text?: string, className?: string }) => (
  <Link 
    href="https://wa.me/919687105624?text=હું++આયુર્વેદિક+હેર+કેર+કોર્ષ+ઓર્ડર+કરવા+ઈચ્છું+છું" 
    className={`flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all hover:scale-[1.05] active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>{text}</span>
  </Link>
);


export default function AyurvedicHairCare() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-stone-100 py-12 md:py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-beige rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>
        <Section className="relative z-10 text-center">
          <Heading level={1} className="text-herbal">"વાળ ખરવાની ચિંતા છોડો, આયુર્વેદ સાથે નાતો જોડો."</Heading>
          <div className="mb-10">
            <img src={images.logo} alt="આયુર્વેદના આંગણે" className="mx-auto h-24 md:h-32 w-auto" />
          </div>
          <Heading level={2} className="text-stone-800">શું તમે પણ ખરતા વાળ, ખોડો, પાતળા વાળ, અકાળે થયેલ સફેદ વાળ થી પરેશાન છો?</Heading>
          <div className="max-w-2xl mx-auto space-y-4 text-lg">
            <Paragraph>રાસાયણિક શેમ્પૂ અને તેલ ક્યારેક ફાયદા કરતા નુકસાન વધુ કરે છે.</Paragraph>
            <Paragraph className="font-semibold text-herbal">
              અમારું 'આયુર્વેદના આંગણે' હેર સોલ્યુશન પ્રાચીન જડીબુટ્ટીઓ અર્કથી બનેલું છે. આ માત્ર ઉપરછલ્લો ઈલાજ નથી, પણ મૂળમાંથી વાળને મજબૂતી આપે છે.
            </Paragraph>
          </div>
        </Section>
      </div>

      {/* Section 1: Hair Fall Issues */}
      <Section className="bg-white rounded-3xl mt-12 shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal mb-8">"શું તમે પણ દરરોજ ખરતા વાળથી પરેશાન છો?</Heading>
        <ImageBox src={images.hairfall1} alt="ખરતા વાળ" />
        <Heading level={3} className="text-stone-900 border-l-4 border-herbal pl-4 py-2 my-10">
          * "કાંસકામાં આવતા વાળ જોઈને ચિંતા થાય છે? હવે અટકાવો કાયમી ધોરણે!"
        </Heading>
        <Paragraph className="text-xl">તમારા ખરતા વાળનું આયુર્વેદિક અને કુદરતી નિવારણ અહીં છે.</Paragraph>
        <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-100 my-8">
          <Paragraph>&gt; વાળ ખરવા એ માત્ર એક સમસ્યા નથી, તે તમારા આત્મવિશ્વાસને પણ અસર કરે છે.</Paragraph>
          <Paragraph>&gt; બદલાતી જીવનશૈલી, પ્રદૂષણ અને કેમિકલયુક્ત પ્રોડક્ટ્સ તમારા વાળને મૂળમાંથી નબળા બનાવે છે. જો તમારા કાંસકામાં પણ આ રીતે વાળ ગુચ્છામાં આવતા હોય, તો તેને અવગણશો નહીં.</Paragraph>
          <div className="pt-4 border-t border-stone-200">
            <Paragraph className="font-bold text-herbal">અમારું ૧૦૦% આયુર્વેદિક સોલ્યુશન:</Paragraph>
            <ul className="list-disc list-inside space-y-2 mt-2 text-stone-700">
              <li>વાળનું ખરવાનું 90 દિવસમાં ઓછું કરે છે.</li>
              <li>સ્કેલ્પને ઊંડાણપૂર્વક પોષણ આપે છે.</li>
              <li>નવા વાળ ઉગાડવામાં મદદરૂપ થાય છે.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 2: Reasons */}
      <Section>
        <Heading level={2} className="text-center">"તમારા વાળ કેમ ખરે છે? જાણો સાચું કારણ!"</Heading>
        <div className="bg-herbal text-white p-8 rounded-2xl text-center my-8 shadow-md">
           <Heading level={3} className="text-white mt-0 mb-0">માત્ર મોંઘા શેમ્પૂ બદલવાથી વાળ ખરતા અટકશે નહીં. પહેલાં એ જાણવું જરૂરી છે કે સમસ્યા અંદરથી છે કે બહારથી.</Heading>
        </div>
        <ImageBox src={images.hairfall2} alt="વાળ ખરવાનું કારણ" />
        <Paragraph className="text-center text-lg italic bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
          ઘણીવાર આપણે મોંઘા શેમ્પૂ અને કન્ડિશનર બદલતા રહીએ છીએ, છતાં વાળ ખરવાનું બંધ થતું નથી. કારણ કે આપણે તેના 'મૂળ કારણ' સુધી પહોંચતા નથી. ચાલો જાણીએ કે તમારા વાળ કેમ ખરે છે અને આયુર્વેદ તેમાં કેવી રીતે મદદ કરી શકે છે.
        </Paragraph>
      </Section>

      {/* Section 3: Vitamins */}
      <Section className="bg-white rounded-3xl shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal">"વાળનો સાચો ખોરાક: જાણો કયા વિટામિન્સ છે જરૂરી!"</Heading>
        <ImageBox src={images.vitamins} alt="વિટામિન્સ" />
        <Paragraph>જેમ શરીરને ટકવા માટે ખોરાકની જરૂર છે, તેમ તમારા વાળને પણ જીવંત, લાંબા અને મજબૂત રહેવા માટે ખાસ પોષક તત્વોની જરૂર પડે છે.</Paragraph>
        
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-beige/30 p-6 rounded-2xl border border-beige">
            <Heading level={3} className="text-herbal mb-4 mt-0">વિટામિન્સનો પાવર :-</Heading>
            <div className="space-y-4">
              <Paragraph><strong>વિટામિન A & C:</strong> સ્કેલ્પમાં કુદરતી ઓઈલ જાળવી રાખે છે.</Paragraph>
              <Paragraph><strong>B7 (Biotin) & B12:</strong> નવા વાળ ઉગાડવા માટે મહત્વપૂર્ણ.</Paragraph>
              <Paragraph><strong>વિટામિન D & E:</strong> નુકસાન સામે રક્ષણ આપે છે.</Paragraph>
            </div>
          </div>
          <div className="bg-green-50/30 p-6 rounded-2xl border border-green-100">
            <Heading level={3} className="text-herbal mb-4 mt-0">જરૂરી મિનરલ્સ અને પ્રોટીન :-</Heading>
            <div className="space-y-4">
              <Paragraph><strong>Iron (આયર્ન):</strong> વાળના મૂળ સુધી ઓક્સિજન પહોંચાડે છે.</Paragraph>
              <Paragraph><strong>Zinc (ઝિંક):</strong> હેર ટિશ્યુના રિપેરિંગમાં મદદ કરે છે.</Paragraph>
              <Paragraph><strong>Protein (પ્રોટીન):</strong> વાળને મજબૂતી આપે છે.</Paragraph>
            </div>
          </div>
        </div>

        <InfoBox>
          <Paragraph className="font-bold text-herbal text-xl mb-2">"આયુર્વેદના આંગણે" કેમ પસંદ કરવું?</Paragraph>
          <Paragraph>"અમે માત્ર તેલ નથી આપતા, અમે તમારા વાળને જરૂરી સંપૂર્ણ આહાર આપીએ છીએ."</Paragraph>
          <Paragraph className="text-sm md:text-base opacity-80 mt-2">
            અમારું મિશ્રણ એવી રીતે તૈયાર કરવામાં આવ્યું છે કે તે આ તમામ વિટામિન્સ અને મિનરલ્સનું પોષણ સીધું તમારા વાળના મૂળમાં પહોંચાડે છે. કેમિકલ મુક્ત પદ્ધતિથી બનેલું આ સોલ્યુશન તમારા વાળને અંદરથી પોષણ આપી બહારથી સુંદર બનાવે છે.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* Section 4: Norwood Scale */}
      <Section>
        <Heading level={2} className="text-center">શું તમારા વાળ પણ ખરવા લાગ્યા છે? જાણો હેર લોસના 7 મહત્વના તબક્કા :-</Heading>
        <ImageBox src={images.norwood} alt="નોરવુડ સ્કેલ" />
        <Paragraph className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm text-center mb-8">
          વાળ ખરવા એ માત્ર વૃદ્ધાવસ્થાની નિશાની નથી, પણ તે બદલાતી જીવનશૈલી અને આનુવંશિક કારણોનું પરિણામ હોઈ શકે છે. પુરુષોમાં જોવા મળતી ટાલ (Male Pattern Baldness) ને સમજવા માટે 'નોરવુડ સ્કેલ' (Norwood Scale) ખૂબ જ ઉપયોગી છે.
        </Paragraph>
        
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-stone-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-herbal text-white">
                <th className="px-6 py-4 text-lg font-bold">સ્ટેજ</th>
                <th className="px-6 py-4 text-lg font-bold">શું થાય છે?</th>
                <th className="px-6 py-4 text-lg font-bold text-center">હાલત</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                ["સ્ટેજ 1", "શરૂઆત, દેખીતી રીતે જણાતી નથી.", "સામાન્ય"],
                ["સ્ટેજ 2", "કપાળના ખૂણે હળવાશ.", "શરૂઆત"],
                ["સ્ટેજ 3", "'M' આકાર સ્પષ્ટ અને વાળ પાતળા.", "ચિંતાજનક"],
                ["સ્ટેજ 4", "પાછળના ભાગે (Vertex) ટાલ.", "મધ્યમ"],
                ["સ્ટેજ 5", "આગળ અને પાછળની ટાલ વચ્ચેનો ગેપ ઘટે.", "ગંભીર"],
                ["સ્ટેજ 6", "ઉપરના ભાગમાં ખૂબ ઓછા વાળ.", "ખૂબ ગંભીર"],
                ["સ્ટેજ 7", "સંપૂર્ણ ટાલ, માત્ર કાનની ઉપર વાળ.", "અંતિમ"],
              ].map(([stage, desc, status]) => (
                <tr key={stage} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-stone-900">{stage}</td>
                  <td className="px-6 py-4 text-stone-700">{desc}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      status === "સામાન્ય" ? "bg-green-100 text-green-700" :
                      status === "શરૂઆત" ? "bg-blue-100 text-blue-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
          <Heading level={3} className="text-herbal mt-0">શા માટે આ સ્ટેજ સમજવા જરૂરી છે? 🧐</Heading>
          <Paragraph>
            તમે જેટલા વહેલા સ્ટેજ પર હેર લોસને ઓળખી લેશો, તેને રોકવો એટલો જ સરળ રહેશે. જો તમે સ્ટેજ 2 કે 3 પર છો, તો યોગ્ય ટ્રીટમેન્ટ અને આહારથી તમે તમારા વાળ પાછા મેળવી શકો છો અથવા ખરતા અટકાવી શકો છો.
          </Paragraph>
          <Paragraph className="font-semibold text-herbal-dark">યાદ રાખો: સમયસર લીધેલો નિર્ણય તમારા લુક અને આત્મવિશ્વાસને બચાવી શકે છે!</Paragraph>
        </div>
      </Section>

      {/* Section 5: Solutions Showcase */}
      <Section className="bg-stone-900 text-white rounded-[3rem] px-8 md:px-16 py-16 md:py-24">
        <Heading level={2} className="text-white text-center mb-6 mt-0!">ખરતા અને સફેદ વાળને કહો અલવિદા! મેળવો મજબૂત અને કાળા વાળ કુદરતી રીતે 🌿</Heading>
        <ImageBox src={images.blackHair} alt="કાળા અને મજબૂત વાળ" />
        <Paragraph className="text-white text-center text-xl md:text-2xl mb-12 font-medium opacity-100">
           શું તમે વાળ ખરવા (Hair Fall), ટાલ પડવી (Hair Loss) અથવા નાની ઉંમરે સફેદ થતા વાળ (Grey Hair) થી પરેશાન છો?
        </Paragraph>
        
        <div className="grid md:grid-cols-2 gap-6 my-10">
          {[
            "Biotin Gummy: સ્વાદિષ્ટ ગમીઝ.",
            "B12 Spray: વિટામિનની ઉણપ દૂર કરે.",
            "Saptamrut Loh: કુદરતી કાળાપણું.",
            "Hair Tonic: બ્લડ સર્ક્યુલેશન વધારે.",
            "Argan Biotin Shampoo: રેશમી ચમક.",
            "Hair Conditioner: વાળ બનાવે મુલાયમ.",
            "7 in 1 Argan & Tea Tree: ૭ શક્તિશાળી તત્વો."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-stone-800/50 p-4 rounded-xl border border-stone-700">
               <span className="w-6 h-6 bg-herbal rounded-full flex items-center justify-center text-xs font-bold">✓</span>
               <span className="text-stone-200">{item}</span>
            </div>
          ))}
        </div>
        
        <InfoBox type="green">
          <Paragraph className="font-bold text-herbal mb-2">શા માટે અમારી પ્રોડક્ટ્સ પસંદ કરવી? ✅</Paragraph>
          <ul className="text-stone-700 space-y-1 text-sm md:text-base">
            <li>* સંપૂર્ણ સુરક્ષિત: કોઈ હાનિકારક કેમિકલનો ઉપયોગ નહીં.</li>
            <li>* ઝડપી પરિણામ: નિયમિત ઉપયોગથી થોડા જ દિવસોમાં તફાવત દેખાશે.</li>
            <li>* ઓલ-ઈન-વન સોલ્યુશન: હેર લોસથી લઈને ગ્રે હેર સુધી.</li>
          </ul>
        </InfoBox>
        
        <ImageBox src={images.products} alt="પ્રોડક્ટ્સ" />
      </Section>

      {/* Recommended Stages Section */}
      <Section className="bg-herbal/5 rounded-[2.5rem] border border-herbal/10 px-8 my-12">
        <Heading level={2} className="text-center text-herbal mb-4 mt-0!">તમારો કયો સ્ટેજ છે? જાણો અને શ્રેષ્ઠ ઉકેલ મેળવો 🔎</Heading>
        <Paragraph className="text-center mb-10 text-herbal-dark/70">વાળ ખરવાના તબક્કા અને તે મુજબ શ્રેષ્ઠ આયુર્વેદિક ઉકેલ</Paragraph>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              stage: "સ્ટેજ ૧",
              title: "વાળ ખરવાની શરૂઆત",
              image: images.result1,
              products: ["Hair Oil", "Shampoo", "Biotin"],
              desc: "વાળ ખરવાની હળવી શરૂઆત અને વાળ પાતળા થવાની સમસ્યા.",
              gif: images.gif1
            },
            {
              stage: "સ્ટેજ ૨",
              title: "સામાન્ય ટાલની શરૂઆત",
              image: images.cert1,
              products: ["Oil", "Shampoo", "Biotin", "B12"],
              desc: "કપાળના ખૂણે હળવાશ અને હેરલાઇન પાછળ જવી.",
              gif: images.gif2
            },
            {
              stage: "સ્ટેજ ૩",
              title: "મધ્યમ હેર લોસ",
              image: images.cert2,
              products: ["Serum", "Tonic", "Loh", "Shampoo"],
              desc: "નોંધપાત્ર વાળનું નુકસાન અને વરટેક્સ પર ટાલની અસર.",
              gif: images.gif3
            },
            {
              stage: "સ્ટેજ ૪",
              title: "ગંભીર સમસ્યા",
              image: images.cert3,
              products: ["Full Kit", "Serum", "Tonic", "Loh"],
              desc: "ગંભીર ટાલ અને માથાના મોટા ભાગમાં વાળ ઉતરી જવા.",
              gif: images.gif4
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden flex flex-col items-center p-5 md:p-8 text-center transition-all hover:scale-[1.02] hover:shadow-xl hover:border-herbal/30 group">
              <span className="bg-herbal/10 text-herbal text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase group-hover:bg-herbal group-hover:text-white transition-colors">{item.stage}</span>
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-stone-600 mb-6 leading-relaxed">{item.desc}</p>
              
              <div className="w-full pt-6 border-t border-stone-100 mt-auto">
                <p className="text-xs font-bold text-herbal mb-3 uppercase tracking-wider">Recommended Products:</p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {item.products.map(p => (
                    <span key={p} className="bg-stone-50 text-stone-700 font-medium text-xs px-2.5 py-1 rounded-lg border border-stone-200">{p}</span>
                  ))}
                </div>
                
                <WhatsAppButton className="w-full md:w-auto mx-auto mt-4" />

              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 6: Product Deep Dive (Biotin) */}
      <Section>
        <Heading level={2} className="text-center">"બાયોટિન: નવા અને મજબૂત વાળ ઉગાડવાનું ગુપ્ત રહસ્ય!"</Heading>
        <Paragraph className="text-center italic text-stone-500">
          શું તમે જાણો છો કે તમારા વાળનો મુખ્ય ભાગ કેરાટિન (Keratin) નામના પ્રોટીનથી બનેલો છે? અને આ પ્રોટીન બનાવવા માટે શરીરને સૌથી વધુ જરૂર બાયોટિન (Biotin) ની હોય છે.
        </Paragraph>

        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm my-10">
          <Heading level={3} className="text-herbal mt-0">૧. બાયોટિન એટલે શું? બાયોટિન કેવી રીતે કામ કરે છે?</Heading>
          <Paragraph>બાયોટિન એ વિટામિન B7 છે. આ એક 'વોટર સોલ્યુબલ' વિટામિન છે, જેનો અર્થ છે કે શરીર તેને સંગ્રહિત કરી શકતું નથી.</Paragraph>
          <ul className="space-y-3 mt-4">
            <li className="flex gap-3"><span className="text-herbal font-bold">•</span> તે શરીરમાં કેરાટિન પ્રોટીનનું ઉત્પાદન વધારે છે.</li>
            <li className="flex gap-3"><span className="text-herbal font-bold">•</span> વાળના ફોલિકલ્સ (મૂળ) ને સક્રિય કરે છે.</li>
            <li className="flex gap-3"><span className="text-herbal font-bold">•</span> પાતળા વાળને જાડા અને ભરાવદાર બનાવે છે.</li>
          </ul>
        </div>

        <Heading level={2} className="text-center text-red-600">શું તમારા શરીરમાં બાયોટિનની ઉણપ છે? આ લક્ષણોને અવગણશો નહીં! ⚠️</Heading>
        <ImageBox src={images.biotinDeficiency} alt="બાયોટિનની ઉણપ" />
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-transform">
             <div className="text-3xl mb-4">💇‍♀️</div>
             <Heading level={3} className="mt-0 text-lg">વાળ ખરવા</Heading>
             <Paragraph className="text-sm">બચ્ચાઓમાં પણ વાળ નબળા અને બરડ બની જાય છે.</Paragraph>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-transform">
             <div className="text-3xl mb-4">✨</div>
             <Heading level={3} className="mt-0 text-lg">ત્વચાની ચમક</Heading>
             <Paragraph className="text-sm">ત્વચા ફિક્કી અને નિર્જીવ દેખાવા લાગે છે.</Paragraph>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-transform">
             <div className="text-3xl mb-4">💅</div>
             <Heading level={3} className="mt-0 text-lg">નખ નબળા</Heading>
             <Paragraph className="text-sm">નખ વારંવાર તૂટી જાય છે અને વિકાસ ધીમો પડે છે.</Paragraph>
           </div>
        </div>
      </Section>

      {/* Product Cards Gallery */}
      <Section className="bg-white p-8 md:p-16 rounded-[4rem] shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal mb-16">અમારા ખાસ હેર કેર સોલ્યુશન્સ</Heading>
        
        {/* Biotin Gummy */}
        <ProductCard title="Biotin Gummy :-" image={images.biotinGummy}>
           <Paragraph className="font-bold text-herbal">કુદરતી સુંદરતા હવે સ્વાદ સાથે! ✨</Paragraph>
           <Paragraph>શું તમે વાળ ખરવા, નબળા નખ અથવા નિસ્તેજ ત્વચાથી કંટાળી ગયા છો? હવે મેળવો કુદરતી સોલ્યુશન આ ટેસ્ટી ગમીઝમાં!</Paragraph>
           <div className="grid grid-cols-2 gap-4 text-sm mt-4">
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• 100% ઓર્ગેનિક</div>
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• મલ્ટી-બેનિફિટ્સ</div>
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• મિક્સ બેરી ફ્લેવર</div>
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• કેમિકલ ફ્રી</div>
           </div>
           <div className="bg-herbal/5 p-4 rounded-xl border border-herbal/20 mt-6">
             <Paragraph className="font-bold mb-1">કેવી રીતે ઉપયોગ કરવો? 🍬</Paragraph>
             <Paragraph className="text-sm mb-0">24 કલાક માં 1 થી વધુ ના લેવી</Paragraph>
           </div>
        </ProductCard>

        {/* Vitamin B12 Spray */}
        <ProductCard title="Vitamin B12 Special :-" image={images.b12spray}>
           <Paragraph className="font-bold text-herbal">વાળ ખરવાની સમસ્યાથી પરેશાન છો? હવે મેળવો કુદરતી ઉકેલ! ✨</Paragraph>
           <Paragraph>શરીરમાં Vitamin B12 ની ઉણપ હેર લોસનું મુખ્ય કારણ હોઈ શકે છે. Teamex B12 Oral Spray સાથે વાળને આપો અંદરથી પોષણ.</Paragraph>
           <ul className="space-y-2 text-sm mt-4">
             <li className="flex gap-2"><strong>✓ હેર ગ્રોથ:</strong> નવા વાળ ઉગાડવામાં મદદરૂપ.</li>
             <li className="flex gap-2"><strong>✓ મજબૂત મૂળ:</strong> વાળના મૂળને પોષણ આપે.</li>
             <li className="flex gap-2"><strong>✓ શાકાહારી:</strong> ૧૦૦% શાકાહારી અને સ્ટ્રોબેરી ફ્લેવર.</li>
           </ul>
        </ProductCard>

        {/* Saptamrut Loh */}
        <ProductCard title="Saptamrut Loh tablet :-" image={images.saptamrut}>
           <Paragraph>ખરતા અને સફેદ વાળથી કંટાળી ગયા છો? હવે અપનાવો આયુર્વેદિક ઉકેલ! ✨</Paragraph>
           <Paragraph className="text-sm">વાળના મૂળને મજબૂત કરી ખરતા રોકે છે અને કુદરતી રીતે સફેદ વાળની સમસ્યામાં રાહત આપે છે.</Paragraph>
           <div className="mt-4 p-4 bg-beige/30 rounded-xl border border-beige">
             <Paragraph className="font-bold mb-1 text-sm">કુદરતી ઘટકોની શક્તિ: 🌿</Paragraph>
             <Paragraph className="text-xs mb-0">હરડે, બહેડા, જેઠીમધ - એન્ટી-ઓક્સિડન્ટથી ભરપૂર.</Paragraph>
           </div>
        </ProductCard>

        {/* Hair Toniq */}
        <ProductCard title="Hair Toniq :-" image={images.hairTonic}>
           <Paragraph>Bella Cast Hair Tonic સાથે મેળવો મજબૂત અને ઘાટા વાળ ✨</Paragraph>
           <Paragraph className="text-sm">બ્રાહ્મી, જાસૂદ, જટામાંસી, ભૃંગરાજ અને નગરમોથ જેવા 15+ થી વધુ શુદ્ધ આયુર્વેદિક ઘટકો દ્વારા નિર્મિત.</Paragraph>
           <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold text-stone-600">
              <span className="bg-stone-50 p-2 rounded border border-stone-100">વાળ ખરતા અટકાવે</span>
              <span className="bg-stone-50 p-2 rounded border border-stone-100">નવો ગ્રોથ</span>
              <span className="bg-stone-50 p-2 rounded border border-stone-100">ખોડાથી મુક્તિ</span>
              <span className="bg-stone-50 p-2 rounded border border-stone-100">બે-મોઢાવાળા વાળ</span>
           </div>
        </ProductCard>

        {/* Biotin Shampoo */}
        <ProductCard title="Biotin shampoo :-" image={images.shampoo}>
           <Paragraph>વાળ ખરતા અટકાવો અને મેળવો પાર્લર જેવી સુંદરતા! ✨</Paragraph>
           <Paragraph className="text-sm italic">Bellacast Argan & Biotin Shampoo એ તમારા વાળ માટે એક સંપૂર્ણ હેર સ્પા ટ્રીટમેન્ટ છે.</Paragraph>
           <div className="space-y-2 mt-4 text-sm">
             <Paragraph className="mb-0"><strong>• આર્ગન ઓઈલ:</strong> કુદરતી કુદરતી મોઈશ્ચરાઈઝર.</Paragraph>
             <Paragraph className="mb-0"><strong>• કેરાટિન રિપેર:</strong> સિલ્કી લુક આપે છે.</Paragraph>
             <Paragraph className="mb-0 text-red-600 font-bold">પેરાબેન અને સલ્ફેટ ફ્રી! ✅</Paragraph>
           </div>
        </ProductCard>

        {/* Hair Conditioner */}
        <ProductCard title="Hair Conditioner :-" image={images.conditioner}>
           <Paragraph>શુષ્ક વાળને કહો અલવિદા! Bellacast Conditioner સાથે મેળવો સુપર સોફ્ટ વાળ ✨</Paragraph>
           <ImageBox src={images.conditionerResult} alt="Conditioner Result" />
           <Paragraph className="text-sm">વાળને રેશમ જેવા પોચા અને ચમકદાર બનાવે છે. ગૂંચાતા અટકાવે છે જેથી તૂટવાનું ઓછું થાય.</Paragraph>
        </ProductCard>

        {/* 7in1 Hair Oil */}
        <ProductCard title="7in1 Hair oil :-" image={images.hairOil}>
           <Paragraph className="font-bold">૭ તેલની શક્તિ, હવે એક જ બોટલમાં!</Paragraph>
           <ImageBox src={images.hairOilResult} alt="Hair Oil Result" />
           <div className="grid grid-cols-2 gap-2 text-[10px] md:text-sm mt-4">
             {["૧. આર્ગન ઓઈલ", "૨. વોલનટ ઓઈલ", "૩. બદામ તેલ", "૪. નારિયેળ તેલ", "૫. આમળા તેલ", "૬. ઓલિવ ઓઈલ", "૭. જોજોબા ઓઈલ"].map((t) => (
               <div key={t} className="bg-stone-50 p-2 rounded-lg border border-stone-200 truncate">{t}</div>
             ))}
           </div>
        </ProductCard>

        {/* Hair Growth Serum */}
        <ProductCard title="Hair Growth Serum :-" image={images.serum}>
           <Paragraph className="text-herbal font-bold">વાળ ખરતા અટકાશે અને નવા વાળ ઉગશે!</Paragraph>
           <Paragraph className="text-sm italic">Bellacast Hair Growth Serum: આધુનિક સાયન્સ અને આયુર્વેદનું મિશ્રણ.</Paragraph>
           <div className="space-y-4 mt-6">
             <div className="border-l-4 border-gold pl-4">
               <Paragraph className="mb-0 font-bold text-stone-800">રેડેન્સિલ (Redensyl) & પ્રોકેપિલ (Procapil)</Paragraph>
               <Paragraph className="text-xs italic">વાળના મૂળને ફરીથી સક્રિય કરે છે.</Paragraph>
             </div>
             <Paragraph className="text-sm font-semibold">નોન-ગ્રીસી ફોર્મ્યુલા - આખો દિવસ ચીકાશ વગર!</Paragraph>
           </div>
        </ProductCard>
      </Section>

      {/* Social Proof & Gifs section */}
      <Section className="bg-white rounded-3xl my-12 border border-stone-100 shadow-sm text-center">
        <Heading level={2}>અમે નહિ અમારા પરિણામો બોલે છે</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          <VideoBox src={haircareResults.vid1} />
          <VideoBox src={haircareResults.vid2} />
          <VideoBox src={haircareResults.vid3} />
          <VideoBox src={haircareResults.vid4} />
          <VideoBox src={haircareResults.vid5} />
          <img src={haircareResults.img1} alt="Result 1" className="w-full rounded-xl shadow-md h-full object-cover" />
          <img src={haircareResults.img2} alt="Result 2" className="w-full rounded-xl shadow-md h-full object-cover" />
          <img src={haircareResults.img3} alt="Result 3" className="w-full rounded-xl shadow-md h-full object-cover" />
          
          <div className="flex items-center justify-center p-4 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-md transition-shadow">
            <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full" />
          </div>
        </div>
      </Section>

      {/* Customer Reviews Section */}
      <Section className="bg-stone-50 rounded-[3rem]">
        <Heading level={2} className="text-center text-herbal-dark mb-12">અમારા સંતુષ્ટ ગ્રાહકો શું કહે છે?</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReviewCard 
            name="રમેશભાઈ" 
            location="સુરત" 
            review="મારા વાળ બહુ ખરતા હતા, પણ આ કોર્ષ પછી મને ઘણો ફરક લાગ્યો છે. હવે વાળ મજબૂત લાગે છે." 
          />
          <ReviewCard 
            name="મનીષ પટેલ" 
            location="અમદાવાદ" 
            review="માત્ર ૨ મહિનામાં જ નવા વાળ આવવાની શરૂઆત થઈ ગઈ છે. ખરેખર આ આયુર્વેદિક અસર છે!" 
          />
          <ReviewCard 
            name="સ્નેહાબેન" 
            location="રાજકોટ" 
            review="સફેદ વાળની સમસ્યા માટે આ બેસ્ટ સોલ્યુશન છે. હું બધાને આ વાપરવાની સલાહ આપીશ." 
          />
          <ReviewCard 
            name="અંકિત શાહ" 
            location="વડોદરા" 
            review="ડોક્ટરોએ હાથ જોડી દીધા હતા, પણ આયુર્વેદના આંગણે હેર ઓઈલે કમાલ કરી દીધો. થેન્ક યુ!" 
          />
          <ReviewCard 
            name="વિજયભાઈ" 
            location="જામનગર" 
            review="મારી ટાલમાં નવા વાળ આવવા જોઈને મને મારો ખોવાયેલો આત્મવિશ્વાસ પાછો મળ્યો છે." 
          />
          <ReviewCard 
            name="નેહા રાવલ" 
            location="ભાવનગર" 
            review="શેમ્પૂ અને તેલ બંને બહુ જ મસ્ત છે. વાળમાં બહુ જ સરસ ચમક આવી ગઈ છે." 
          />
        </div>
      </Section>

      {/* Final Benefits */}
      <Section className="bg-beige/40 rounded-[3rem] border border-beige">
        <Heading level={2} className="text-center text-herbal-dark">અમારા કોર્ષ ના મુખ્ય ફાયદા:</Heading>
        <div className="max-w-2xl mx-auto space-y-6 text-lg py-8">
           {[
             "વાળ ખરતા અટકાવે: મૂળને પોષણ આપીને વાળનું ખરવાનું બંધ કરે છે.",
             "ખોડાથી મુક્તિ: સ્કેલ્પને ચોખ્ખું અને હેલ્ધી રાખે છે.",
             "કુદરતી ચમક: પાતળા વાળને ઘટ્ટ અને રેશમી બનાવે છે.",
             "કોઈ આડઅસર નહીં: ૧૦૦% નેચરલ અને કેમિકલ મુક્ત.",
             "પાતળા વાળને ફરીથી ઘટ્ટ અને મજબૂત બનાવો.",
             "હજારો ભાઈ-બહેનોએ આયુર્વેદિક કોર્ષ થી ફાયદો મેળવ્યો છે."
           ].map((text, i) => (
             <div key={i} className="flex gap-6 items-start group">
               <span className="flex-shrink-0 w-8 h-8 rounded-full bg-herbal text-white flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-110">{i + 1}</span>
               <Paragraph className="mb-0 font-medium">{text}</Paragraph>
             </div>
           ))}
        </div>
      </Section>

      {/* Certification Section */}
      <Section className="text-center">
        <Heading level={2} className="text-herbal">Our certification :-</Heading>
        <div className="max-w-md mx-auto">
          <img src={images.certification} alt="Certification" className="w-full rounded-2xl shadow-xl border-4 border-white" />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="bg-gradient-to-br from-herbal to-herbal-dark p-12 md:p-20 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <Heading level={1} className="text-white relative z-10 mb-8">"ખરતા વાળને કાયમી અલવિદા કહેવા માટે અત્યારે જ અમારો સંપર્ક કરો!"</Heading>
          <div className="inline-block bg-white text-herbal-dark px-10 py-6 rounded-3xl shadow-xl transition-all hover:scale-105 relative z-10">
            <Paragraph className="text-2xl md:text-4xl font-black mb-0">📞 કોલ કરો: 96871 05624</Paragraph>
          </div>
          <Paragraph className="text-white/80 mt-8 text-sm italic relative z-10">વધારે માહિતી કે ઓર્ડર માટે આજે જ અમારો સંપર્ક કરો.</Paragraph>
        </div>
      </Section>
    </main>
  );
}