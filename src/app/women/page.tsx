"use client"

import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const assetPath = "/assets/women";

const images = {
  hero: `${assetPath}/hero.png`,
  realProblems: `${assetPath}/real_problems.jpg`,
  commonIssues: `${assetPath}/common_issues.jpg`,
  statistics: `${assetPath}/statistics.jpg`,
  indiaStats: `${assetPath}/india_stats.jpg`,
  // Missing downloads, keeping external
  pcos: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi457-Lc_Y_eGCzLxzkC0us55DOp2Dmq9Hh42eqtRgtH6GU3eiqSd34ZCLlfROxVhSbw6RcKP2tlhDP22RvxW0SgO41-MQZ3h5x8caMyurWeOTCw8i-wWqd_en6UrIPGsmiscGli3AX9JyN985qi3acKYJhvaLwonrPTW2CQbNQPBPWzeH0cZVoH09wGdAT/s1280/1003056941.jpg",
  cancerRisk: `${assetPath}/cancer_risk.jpg`,
  pcosIndia: `${assetPath}/pcos_india.jpg`,
  celebrity: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzT6_E9QQueM62BH_K8-9RO8A2KLsndmaWBkidM83IQrlGMZdHlQ24j-B3z6n2MP9ySzutzpQ7Xig7_lAjY7JTpM3HDUS6PH3FwHqHMqLteZ7T43ANaUxRQ3mZJg1zKIq8XkAp6lHm63knS4PXDpjGxTldoF_MS8NESMG6oS-lYsbcmHfoTxN2oRU5Bhe/s1280/1003056943.jpg",
  ayurvedicCourse: `${assetPath}/ayurvedic_course.jpg`,
  shewellDrink: `${assetPath}/shewell_drink.jpg`,
  shewellTablet: `${assetPath}/shewell_tablet.jpg`,
  berryDrink: `${assetPath}/berry_drink.jpg`,
  saptamrut: `${assetPath}/saptamrut.jpg`,
  intimateWash: `${assetPath}/intimate_wash.jpg`,
  sanitaryPads: `${assetPath}/sanitary_pads.jpg`,
  resultGif1: `${assetPath}/result_gif1.gif`,
  thyroidTypes: `${assetPath}/thyroid_types.jpg`,
  thyroidSymptoms: `${assetPath}/thyroid_symptoms.jpg`,
  thyroidStats: `${assetPath}/thyroid_stats.jpg`,
  thyroidMarket: `${assetPath}/thyroid_market.jpg`,
  thyroidSolution: `${assetPath}/thyroid_solution.jpg`,
  thyrocareDrink: `${assetPath}/thyrocare_drink.jpg`,
  kanchanar: `${assetPath}/kanchanar.jpg`,
  resultGif2: `${assetPath}/result_gif2.gif`,
  obesity: `${assetPath}/obesity.jpg`,
  obesityMarket: `${assetPath}/obesity_market.jpg`,
  obesityCrisis: `${assetPath}/obesity_crisis.jpg`,
  beautilook: `${assetPath}/beautilook.jpg`,
  resultGif3: `${assetPath}/result_gif3.gif`,
  thyroidResultImage1: "/thyroid%20results/WhatsApp%20Image%202026-04-03%20at%2010.00.43%20PM.jpeg",
  thyroidResultVideo1: "/thyroid%20results/WhatsApp%20Video%202026-04-03%20at%2010.00.42%20PM.mp4",
  thyroidResultVideo2: "/thyroid%20results/WhatsApp%20Video%202026-04-03%20at%2010.00.43%20PM%20(1).mp4",
  thyroidResultVideo3: "/thyroid%20results/WhatsApp%20Video%202026-04-03%20at%2010.00.43%20PM.mp4",
  pcodVideo1: "/pcod/WhatsApp%20Video%202026-04-05%20at%2011.06.57%20AM%20(1).mp4",
  pcodVideo2: "/pcod/WhatsApp%20Video%202026-04-05%20at%2011.06.57%20AM.mp4",
  pcodVideo3: "/pcod/WhatsApp%20Video%202026-04-05%20at%2011.06.58%20AM%20(1).mp4",
  pcodVideo4: "/pcod/WhatsApp%20Video%202026-04-05%20at%2011.06.58%20AM.mp4",
  pcodVideo5: "/pcod/WhatsApp%20Video%202026-04-05%20at%2011.06.59%20AM%20(1).mp4",
  pcodVideo6: "/pcod/WhatsApp%20Video%202026-04-05%20at%2011.06.59%20AM.mp4",
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
      <div className="md:w-1/3 mb-6 md:mb-0 shrink-0">
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
  <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow relative mt-6">
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
    href="https://wa.me/919687105624?text=હું++સ્ત્રી+સ્વાસ્થ્ય+કોર્ષ+વિશે+જાણવા+ઈચ્છું+છું" 
    className={`flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all hover:scale-[1.05] active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>{text}</span>
  </Link>
);

export default function WomenHealthAwareness() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-stone-100 py-12 md:py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-beige rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>
        <Section className="relative z-10 text-center">
          <Heading level={1} className="text-herbal mb-6">
            "સ્ત્રી સ્વાસ્થ્ય જાગૃતિ: PCOS થી થાઈરોઈડ સુધીની સંપૂર્ણ સમજ"
          </Heading>
          <ImageBox 
            src={images.hero} 
            alt="સ્ત્રી સ્વાસ્થ્ય જાગૃતિ" 
            className="max-w-md mx-auto"
          />
          <Paragraph className="text-xl md:text-2xl font-medium text-stone-700 mt-8 max-w-3xl mx-auto">
            PCOS, PCOD, અનિયમિત માસિક કે વજન વધવા જેવી સમસ્યાઓ હવે તમારી ખુશી આડે નહીં આવે. જાણો, સમજો અને આયુર્વેદિક રીતે સ્વસ્થ બનો.
          </Paragraph>
        </Section>
      </div>

      {/* Real Problems Section */}
      <Section className="bg-white rounded-3xl mt-12 shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal mb-8">સ્ત્રીઓના જીવનમાં વાસ્તવિક સમસ્યાઓ</Heading>
        <ImageBox 
          src={images.realProblems} 
          alt="સ્ત્રીઓના જીવનમાં વાસ્તવિક સમસ્યાઓ" 
        />
        <div className="space-y-6 mt-10">
          <div className="flex items-center justify-center gap-3 bg-stone-50 p-6 rounded-2xl border border-stone-100 my-8">
             <span className="text-2xl">🌸</span>
             <Heading level={3} className="my-0 text-herbal">સ્ત્રીઓના સ્વાસ્થ્યનું મહત્વ</Heading>
          </div>
          
          <Paragraph className="text-center italic font-medium text-lg">સમજ, જાગૃતિ અને યોગ્ય નિરાકરણ</Paragraph>
          <Paragraph className="text-center">સ્ત્રી એટલે શક્તિ, પરંતુ આજના વ્યસ્ત જીવનમાં ઘણી સ્ત્રીઓ પોતાનું સ્વાસ્થ્ય અવગણે છે… નાની નાની સમસ્યાઓ ધીમે ધીમે મોટી બીમારીઓનું રૂપ લઈ લે છે 😔</Paragraph>
          
          <ul className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-100 mt-6 max-w-2xl mx-auto">
            <li className="flex gap-3"><span className="text-herbal font-bold">✓</span> <Paragraph className="mb-0">સ્ત્રીઓના શરીર અને હોર્મોન્સ ખૂબ જ સંવેદનશીલ હોય છે</Paragraph></li>
            <li className="flex gap-3"><span className="text-herbal font-bold">✓</span> <Paragraph className="mb-0">જીવનના દરેક તબક્કે (કિશોરાવસ્થા, ગર્ભાવસ્થા, મેનોપોઝ) શરીરમાં બદલાવ આવે છે</Paragraph></li>
            <li className="flex gap-3"><span className="text-herbal font-bold">✓</span> <Paragraph className="mb-0">યોગ્ય જાગૃતિ અને કાળજી વગર સ્વાસ્થ્ય બગડી શકે છે</Paragraph></li>
          </ul>

          <div className="bg-red-50/50 border-l-4 border-red-500 p-6 my-10 rounded-r-2xl">
            <Heading level={3} className="text-red-700 mt-0">⚠️ આજકાલ સામાન્ય બની ગયેલી સમસ્યાઓ</Heading>
            <ImageBox 
              src={images.commonIssues} 
              alt="સામાન્ય સમસ્યાઓ" 
            />
            <ul className="space-y-3 mt-6 font-medium text-stone-700">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">🔸</span> <span>**થાયરોઇડ સમસ્યા** - વજન વધવું, થાક, હોર્મોનલ અસંતુલન.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">🔸</span> <span>**PCOS / PCOD** - અનિયમિત પિરિયડ, વજન વધારો, હોર્મોનલ ડિસ્ટર્બન્સ.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">🔸</span> <span>** મોટાપો ( Obasity )** - મોટોપો ડાયબિટીસ અને હ્રદય રોગનું મૂળ છે. ડિપ્રેસન અને ચિંતા નું પણ મૂળ કારણ છે.</span></li>
            </ul>
            <div className="mt-8 pt-4 border-t border-red-100">
              <Paragraph className="mb-2 font-bold text-stone-800">👉 આ બધી સમસ્યાઓ એકબીજાથી જોડાયેલી હોય છે</Paragraph>
              <Paragraph className="mb-0 font-bold text-stone-800">👉 સમયસર ધ્યાન ન આપીએ તો ભવિષ્યમાં ગંભીર બીમારીઓ બની શકે છે</Paragraph>
            </div>
          </div>
          
          <InfoBox type="green">
            <Paragraph className="font-bold text-herbal text-xl mb-2">🌿 આયુર્વેદિક ઉકેલ – સ્વસ્થ જીવન તરફ એક પગલું</Paragraph>
            <Paragraph className="text-sm md:text-base opacity-80 mt-2 mb-0">સંપૂર્ણ આયુર્વેદિક માર્ગદર્શિકા સાથે આજે જ શરૂઆત કરો.</Paragraph>
          </InfoBox>
        </div>
      </Section>

      {/* Reality & Statistics Section */}
      <Section className="bg-beige/30 rounded-[3rem] mt-12 border border-beige">
        <Heading level={2} className="text-center text-herbal-dark">વાસ્તવિકતા અને આંકડાઓ</Heading>
        <ImageBox 
          src={images.statistics} 
          alt="આંકડાઓ" 
        />
        <Paragraph className="text-center mt-6 max-w-3xl mx-auto font-medium">
          આ સમસ્યાઓ માત્ર કલ્પના નથી, પરંતુ રામાજની કઠોર વાસ્તવિકતા છે. સંશોધનો મુજબ, લાખો સ્ત્રીઓ આ સમસ્યાઓથી પીડાઈ રહી છે, અને આ આંકડા ચિંતાજનક છે. સાચી સમજ અને સમયસર પગલાં અનિવાર્ય છે.
        </Paragraph>

        <Heading level={2} className="text-center mt-16 text-herbal-dark">ભારત અને દુનિયામાં આંકડાઓની સ્થિતિ</Heading>
        <ImageBox 
          src={images.indiaStats} 
          alt="આંકડાઓની સ્થિતિ" 
        />
        <Paragraph className="text-center max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mt-6">
          આ આંકડાઓ સાબિત કરે છે કે સ્ત્રીઓનું સ્વારથ્ય કેટલું સંવેદનશીલ છે. 4 માંથી 1 સ્ત્રી મોટાપાથી અને 3 માંથી 1 ગર્ભાવસ્થા દરમિયાન તકલીફથી પીડાય છે. આ માત્ર આંકડા નથી, પરંતુ આપણી આસપાસની સ્ત્રીઓની કહાની છે.
        </Paragraph>
      </Section>

      {/* PCOS / PCOD Section */}
      <Section>
        <Heading level={1} className="text-herbal">PCOS/PCOD: ચિંતાજનક આંકડાઓ અને સમજણ</Heading>
        <ImageBox 
          src={images.pcos} 
          alt="PCOS/PCOD" 
        />
        <div className="bg-herbal text-white p-6 rounded-2xl text-center my-8 shadow-md">
           <Paragraph className="font-bold text-xl mb-0 text-white">PCOS/PCOD: સ્ત્રી સ્વાસ્થ્યની એક ગંભીર વાસ્તવિકતા</Paragraph>
        </div>
        <Paragraph className="text-center italic text-stone-600 mb-10">આજના સમયમાં બદલાતી જીવનશૈલીને કારણે સ્ત્રીઓમાં હોર્મોનલ સમસ્યાઓ વધી રહી છે. ચાલો જાણીએ તેના વિશેના કેટલાક ચોંકાવનારા આંકડા અને મુખ્ય લક્ષણો.</Paragraph>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 my-10">
          <Heading level={3} className="text-herbal mt-0 border-b border-stone-100 pb-4">PCOS ના મુખ્ય લક્ષણો :-</Heading>
          <Paragraph className="font-medium text-stone-600 mt-4">જો તમને નીચે મુજબના ચિહ્નો દેખાય, તો તેને નજરઅંદાજ ન કરો:</Paragraph>
          <ol className="list-decimal list-inside space-y-4 mt-6 font-medium text-stone-700 bg-stone-50 p-6 rounded-2xl">
            <li className="pb-2 border-b border-stone-200"><strong className="text-stone-900">અનિયમિત માસિક:</strong> પીરિયડ્સ સમયસર ન આવવા અથવા ખૂબ ઓછો/વધારે રક્તસ્ત્રાવ થવો.</li>
            <li className="pb-2 border-b border-stone-200"><strong className="text-stone-900">સફેદ ડિસ્ચાર્જ:</strong> અસામાન્ય સફેદ પાણી પડવાની સમસ્યા.</li>
            <li className="pb-2 border-b border-stone-200"><strong className="text-stone-900">ગર્ભાવસ્થામાં તકલીફ:</strong> કન્સીવ કરવામાં (ગર્ભધારણ) મુશ્કેલી આવવી.</li>
            <li><strong className="text-stone-900">શારીરિક ફેરફાર:</strong> ચહેરા પર વધારાના વાળ ઉગવા અથવા અચાનક વજન વધવું.</li>
          </ol>
          <Paragraph className="mt-8 font-bold text-herbal text-xl text-center">સ્વસ્થ નારી, સ્વસ્થ પરિવાર!</Paragraph>
        </div>

        <Heading level={2} className="text-center text-herbal-dark">*PCOD અને PCOS ના કારણે થતી મુખ્ય સમસ્યાઓ *</Heading>
        <div className="grid md:grid-cols-2 gap-4 my-8">
           {[
             "૧. અનિયમિત માસિક: માસિક સમયસર ન આવવું અથવા વધુ/ઓછો રક્તસ્ત્રાવ થવો.",
             "૨. વજન વધવું: અચાનક વજન વધવું અને તેને ઘટાડવામાં મુશ્કેલી પડવી.",
             "૩. અણગમતા વાળ: ચહેરા અને શરીર પર પુરુષોની જેમ વધુ વાળ ઉગવા.",
             "૪. ખીલ અને વાળ ખરવા: ચહેરા પર જીદ્દી ખીલ થવા અને માથાના વાળ પાતળા થઈને ખરવા.",
             "૫. ગર્ભધારણમાં મુશ્કેલી: પ્રેગ્નન્સી રાખવામાં સમસ્યા થવી (Infertility)"
           ].map((text, i) => (
             <div key={i} className="bg-green-50/50 p-5 rounded-2xl border border-green-100 font-medium text-stone-800 shadow-sm transition-transform hover:translate-y-[-2px]">{text}</div>
           ))}
        </div>

        <Heading level={2} className="text-center mt-16 text-herbal">મહિલાઓમાં વધી રહ્યો છે ઓવરી કેન્સર અને હોર્મોનલ સમસ્યાઓનો ખતરો</Heading>
        <ImageBox src={images.cancerRisk} alt="Cancer risk" />
        
        <Heading level={2} className="text-center text-stone-800">Pcod અને pcos ના ભારતમાં વધતા જતા કેસો :-</Heading>
        <ImageBox src={images.pcosIndia} alt="PCOS cases India" />
        
        <Heading level={2} className="text-center text-stone-800">સૅલીબ્રિટીઓની pcod અને pcos ની સાથેની સ્ટ્રગલ સ્ટોરી </Heading>
        <ImageBox src={images.celebrity} alt="Celebrity struggle" />
      </Section>

      {/* Ayurvedic Course Section */}
      <Section className="bg-stone-900 text-white rounded-[4rem] px-6 md:px-16 py-16 mt-12 mb-16 shadow-lg">
        <Heading level={2} className="text-white text-center mb-8 mt-0 border-b border-stone-800 pb-6">PCOD / PCOS માટે નો સંપૂર્ણ આયુર્વેદિક કોર્સ :- </Heading>
        <ImageBox src={images.ayurvedicCourse} alt="Ayurvedic Course" className="bg-white p-2 rounded-2xl" />
        
        {/* Shewell Care Drink */}
        <ProductCard title="૧. શીવેલ કેર ડ્રિંક (Shewell Care Drink)" image={images.shewellDrink}>
           <Paragraph className="text-herbal font-bold">હોર્મોનલ સંતુલન માટે અંતિમ સમાધાન</Paragraph>
           <Paragraph className="text-stone-700">હોર્મોન્સનું અસંતુલન PCOD અને PCOSનું મુખ્ય કારણ છે. અમારું ‘શીવેલ કેર’ (પીવા માટે અને ગોળી સ્વરૂપે) એક એવું વિશેષ મિશ્રણ છે જે કુદરતી રીતે હોર્મોન્સને સંતુલિત કરવામાં મદદ કરે છે.</Paragraph>
           <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
             <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* લાભ: અનિયમિત માસિકને નિયમિત બનાવે છે અને હોર્મોન્સને નિયંત્રિત કરે છે.</Paragraph>
           </div>
        </ProductCard>

        {/* Shewell Tablet */}
        <ProductCard title="2. શીવેલ ટેબ્લેટ (Shewell tablet)" image={images.shewellTablet}>
           <Paragraph className="text-herbal font-bold">હોર્મોનલ સંતુલન માટે અંતિમ સમાધાન</Paragraph>
           <Paragraph className="text-stone-700">અમારું ‘શીવેલ કેર’ ટેબ્લેટ કુદરતી રીતે હોર્મોન્સને સંતુલિત કરવામાં અને સ્ત્રીઓના આંતરિક સ્વાસ્થ્યને સુધારવામાં મદદરૂપ છે.</Paragraph>
           <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
             <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* લાભ: અનિયમિત માસિકને નિયમિત બનાવે છે અને હોર્મોન્સને નિયંત્રિત કરે છે.</Paragraph>
           </div>
        </ProductCard>

        {/* Teamex Berry Drink */}
        <ProductCard title="૨. ટીમિક બેરી ડ્રિંક (Teamex Berry Drink)" image={images.berryDrink}>
           <Paragraph className="text-herbal font-bold">કુદરતી એન્ટીઑકિસડન્ટનો પાવરહાઉસ</Paragraph>
           <Paragraph className="text-stone-700">તણાવ અને શરીરમાં બળતરા (inflammation) PCODની સમસ્યાને વધારે છે. ટીમિક બેરી ડ્રિંક એન્ટીઑકિસડન્ટોથી ભરપૂર છે, જે તમારા શરીરને ડિટોક્સ કરવામાં મદદ કરે છે.</Paragraph>
           <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
             <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* લાભ: મેટાબોલિઝમ સુધારે છે અને તણાવ ઓછો કરે છે.</Paragraph>
           </div>
        </ProductCard>

        {/* Saptamrut Loh */}
        <ProductCard title="૩. સપ્તામૃત લોહ (Saptamrut Loh)" image={images.saptamrut}>
           <Paragraph className="text-herbal font-bold">કુદરતી આયર્નનો સ્રોત</Paragraph>
           <Paragraph className="text-stone-700">અનિયમિત અને વધુ રક્તસ્ત્રાવને કારણે ઘણી સ્ત્રીઓમાં આયર્નની ઉણપ જોવા મળે છે. સપ્તામૃત લોહ આયર્નનો કુદરતી સ્ત્રોત છે, જે તમને દિવસભર ઊર્જા પૂરી પાડે છે.</Paragraph>
           <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
             <Paragraph className="font-bold text-stone-900 mb-0 text-sm">* લાભ: લોહીમાં હિમોગ્લોબિનનું પ્રમાણ વધારે છે.</Paragraph>
           </div>
        </ProductCard>

        {/* Intimate Wash */}
        <ProductCard title="૪. શીવેલ ઇન્ટિમેટે વોશ (Shewell intimateWash )" image={images.intimateWash}>
           <Paragraph className="text-herbal font-bold">સંપૂર્ણ પીરિયડ કેર</Paragraph>
           <Paragraph className="text-stone-700">PCODમાં વ્યક્તિગત સ્વચ્છતા વધુ મહત્વની બને છે. ‘શીવેલ ઇન્ટિમેટ વોશ’ માસિક ધર્મ દરમિયાન સંપૂર્ણ સ્વચ્છતા અને સુરક્ષા પૂરી પાડે છે.</Paragraph>
        </ProductCard>

        {/* Sanitary Pads */}
        <ProductCard title="5.શીવેલ (Shewell) સેનિટરી પેડ્સ" image={images.sanitaryPads}>
           <Paragraph className="text-herbal font-bold">તમારા આરામદાયક પ્રવાસની શરૂઆત</Paragraph>
           <Paragraph className="text-stone-700">માસિક ધર્મના તે મુશ્કેલ દિવસોમાં હવે મેળવો સંપૂર્ણ આઝાદી અને અપ્રતિમ આરામ. શીવેલ સેનિટરી પેડ્સ ખાસ કરીને સ્ત્રીઓની જરૂરિયાતોને ધ્યાનમાં રાખીને બનાવવામાં આવ્યા છે.</Paragraph>
        </ProductCard>
        
        <div className="bg-stone-800 p-6 md:p-10 rounded-3xl mt-12 border border-stone-700">
           <Heading level={3} className="text-white text-center mt-0 mb-8">PCOD અને PCOS ના શાનદાર પરિણામો</Heading>
           <ImageBox src={images.resultGif1} alt="Result GIF" className="bg-white p-2 rounded-2xl mx-auto" />
           <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-1/2 mx-auto mt-8" />
        </div>
      </Section>

      {/* Results & Reviews */}
      <Section className="bg-white rounded-[3rem] border border-stone-100 shadow-sm mb-16 px-6 py-12 md:p-16">
        <Heading level={2} className="text-center text-herbal mt-0">PCOD અને PCOS ના રિઝલ્ટ & રિવ્યૂ </Heading>
        
        {/* Videos First */}
        <div className="mt-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <VideoBox src={images.pcodVideo1} />
            <VideoBox src={images.pcodVideo2} />
            <VideoBox src={images.pcodVideo3} />
            <VideoBox src={images.pcodVideo4} />
            <VideoBox src={images.pcodVideo5} />
            <VideoBox src={images.pcodVideo6} />
          </div>
          <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-1/2 mx-auto mt-8" />
        </div>

        {/* Written Reviews After */}
        <div className="mt-16 border-t border-stone-200 pt-12">
          <Heading level={3} className="text-herbal text-center mb-4">ગ્રાહકોના રિવ્યુ</Heading>
          <Paragraph className="text-center text-stone-500 italic mb-10">અમારા સંતુષ્ટ ગ્રાહકો શું કહે છે?</Paragraph>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewCard 
              name="ગીતાબેન" 
              location="અમદાવાદ" 
              review="મને ઘણા સમયથી પિરિયડ્સની સમસ્યા હતી, પણ આયુર્વેદિક કોર્સ લીધા પછી તે બિલકુલ નિયમિત થઈ ગયું છે. ખૂબ ખૂબ આભાર!" 
            />
            <ReviewCard 
              name="પૂજા પંચાલ" 
              location="સુરત" 
              review="મારી સ્કિન પર ખીલ થતા હતા અને વજન ઓછું નહોતું થતું. બે મહિનામાં મારું વજન પણ કંટ્રોલમાં છે અને ખીલ ગાયબ છે." 
            />
          </div>
        </div>
      </Section>

      {/* Thyroid Section */}
      <Section className="bg-stone-50 rounded-[3rem] px-6 py-12 md:p-16 border border-stone-200">
        <Heading level={1} className="text-herbal-dark">થાઇરોઇડ :-</Heading>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 my-8">
           <Paragraph className="mb-0 text-stone-800 text-lg">થાઇરોઇડ એ ગળાના ભાગમાં આવેલી એક નાની, પતંગિયા આકારની ગ્રંથિ છે, જે આપણા શરીરના મેટાબોલિઝમ (ચયાપચય) ને નિયંત્રિત કરે છે. જ્યારે આ ગ્રંથિ જરૂરિયાત કરતા વધુ કે ઓછું હોર્મોન ઉત્પન્ન કરે, ત્યારે શરીરમાં અનેક સમસ્યાઓ સર્જાય છે.</Paragraph>
        </div>
        
        <Heading level={2} className="text-center text-stone-900 mt-12">થાઇરોઇડના મુખ્ય પ્રકારો અને લક્ષણો</Heading>
        <Paragraph className="text-center">થાઇરોઇડની સમસ્યા મુખ્યત્વે બે પ્રકારની હોય છે:</Paragraph>
        <ImageBox src={images.thyroidTypes} alt="Thyroid types" width={500} />
        
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-herbal/10 rounded-full flex items-center justify-center text-herbal font-bold text-xl mb-4">૧</div>
            <Heading level={3} className="mt-0 text-herbal-dark">હાઇપોથાઇરોડિઝમ (Hypothyroidism)</Heading>
            <Paragraph className="text-stone-600">આમાં ગ્રંથિ પૂરતા પ્રમાણમાં હોર્મોન બનાવી શકતી નથી.</Paragraph>
            <div className="bg-stone-50 p-4 rounded-xl mt-4 border border-stone-100">
              <Paragraph className="font-medium text-sm mb-0"><strong className="text-herbal">લક્ષણો:</strong> અચાનક વજન વધવું, થાક લાગવો, કબજિયાત, વધુ પડતી ઠંડી લાગવી, ત્વચા સૂકી થવી અને વાળ ખરવા.</Paragraph>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-herbal/10 rounded-full flex items-center justify-center text-herbal font-bold text-xl mb-4">૨</div>
            <Heading level={3} className="mt-0 text-herbal-dark">હાઇપરથાઇરોડિઝમ (Hyperthyroidism)</Heading>
            <Paragraph className="text-stone-600">આમાં ગ્રંથિ જરૂર કરતા વધારે હોર્મોન બનાવે છે.</Paragraph>
             <div className="bg-stone-50 p-4 rounded-xl mt-4 border border-stone-100">
              <Paragraph className="font-medium text-sm mb-0"><strong className="text-herbal">લક્ષણો:</strong> વજન વધારો (ક્યારેક ઘટાડો), ગભરામણ, હૃદયના ધબકારા વધવા, મૂડમાં ફેરફાર.</Paragraph>
            </div>
          </div>
        </div>

        <Heading level={2} className="text-herbal text-center mt-16">🔍 થાઈરોઈડના મુખ્ય લક્ષણો અને તેના દ્વારા થતી તકલીફો :</Heading>
        <ImageBox src={images.thyroidSymptoms} alt="Thyroid Symptoms" />
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 my-8">
          <Paragraph className="font-medium text-lg text-stone-800 mb-6 border-b border-stone-100 pb-4">જો તમે નીચેનામાંથી કોઈ પણ લક્ષણો અનુભવો છો, તો તે થાઈરોઈડની નિશાની હોઈ શકે છે:</Paragraph>
          <ul className="space-y-4 font-medium text-stone-700">
            <li className="flex gap-3"><span className="text-xl">⚖️</span> <span><strong className="text-stone-900">વજનમાં અચાનક ફેરફાર</strong> - વધારે પડતો થાઇરોઇડ (Hyper) વજન ઘટાડે છે, જ્યારે ઓછો થાઇરોઇડ (Hypo) વજનમાં ઝડપી વધારો કરે છે.</span></li>
            <li className="flex gap-3"><span className="text-xl">😫</span> <span><strong className="text-stone-900">થાક અને નબળાઈ</strong> - પૂરતી ઊંઘ લીધા પછી પણ આખો દિવસ આળસ આવવી અને શરીરમાં શક્તિનો અભાવ અનુભવવો.</span></li>
            <li className="flex gap-3"><span className="text-xl">🧘♀️</span> <span><strong className="text-stone-900">મૂડમાં ઉતાર-ચઢાવ</strong> - વધારે પડતી ચિંતા, ગભરામણ અથવા કારણ વગર ઉદાસી (ડિપ્રેશન) જેવું લાગવું.</span></li>
            <li className="flex gap-3"><span className="text-xl">💇♂️</span> <span><strong className="text-stone-900">વાળ અને ત્વચાની સમસ્યા</strong> - વાળનું અતિશય ખરવું અને ત્વચા એકદમ સૂકી (Dry skin) થઈ જવી.</span></li>
            <li className="flex gap-3"><span className="text-xl">🩸</span> <span><strong className="text-stone-900">માસિક ધર્મમાં અનિયમિતતા</strong> - મહિલાઓમાં પીરિયડ્સ સમયસર ન આવવા અથવા તેમાં ખૂબ વધારે કે ઓછો દુખાવો થવો.</span></li>
          </ul>
          <div className="mt-8 pt-6 border-t border-stone-100 text-center">
            <Paragraph className="italic font-bold text-herbal text-xl mb-0">"થાઈરોઈડને છુપાવો નહીં, તેને આયુર્વેદથી હરાવો!"</Paragraph>
          </div>
        </div>

        <InfoBox type="green">
          <Heading level={3} className="text-herbal-dark mt-0 mb-4">આયુર્વેદનો ફાયદો</Heading>
          <Paragraph className="text-stone-800">એલોપેથી દવાઓ ઘણીવાર માત્ર હોર્મોન્સને મેનેજ કરે છે, જ્યારે આયુર્વેદ સમસ્યાના મૂળ (Root Cause) પર કામ કરે છે.</Paragraph>
          <ul className="space-y-3 mt-6 text-left max-w-lg mx-auto">
            <li className="flex gap-2"><span className="text-herbal font-bold">✓</span> <span className="font-medium"><strong>હોર્મોનલ બેલેન્સ:</strong> કુદરતી જડીબુટ્ટીઓ દ્વારા હોર્મોન્સનું કુદરતી રીતે નિયમન.</span></li>
            <li className="flex gap-2"><span className="text-herbal font-bold">✓</span> <span className="font-medium"><strong>ઝીરો સાઈડ ઈફેક્ટ:</strong> શરીરને નુકસાન કર્યા વગર ધીમી પણ અસરકારક સારવાર.</span></li>
            <li className="flex gap-2"><span className="text-herbal font-bold">✓</span> <span className="font-medium"><strong>સંપૂર્ણ વેલનેસ:</strong> પાચન અને રોગપ્રતિકારક શક્તિમાં સુધારો.</span></li>
          </ul>
        </InfoBox>

        <ImageBox src={images.thyroidStats} alt="Stats Graph Thyroid" />
        
        <div className="text-center mt-12 bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
           <Heading level={2} className="text-herbal-dark mt-0">ભારતમાં વધતી થાઈરોઈડની સમસ્યા: શું તમે સુરક્ષિત છો? 📈</Heading>
           <ImageBox src={images.thyroidMarket} alt="Thyroid Market Graph" />
           <Paragraph className="max-w-2xl mx-auto font-medium text-stone-700 mt-6">તાજેતરના આંકડાઓ મુજબ, ભારતમાં થાઈરોઈડની સમસ્યા ધરાવતા લોકોની સંખ્યામાં ચિંતાજનક વધારો થઈ રહ્યો છે. ૨૦૧૮ થી ૨૦૩૦ સુધીનો ગ્રાફ સ્પષ્ટ દર્શાવે છે કે થાઈરોઈડ ટેસ્ટિંગ માર્કેટ $૧૪૨ મિલિયનથી વધીને $૨૫૫ મિલિયન સુધી પહોંચવાની ધારણા છે.</Paragraph>
        </div>

        {/* Thyroid Solution Products */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-herbal/20 mt-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-60"></div>
            <Heading level={2} className="text-center text-herbal mt-0 relative z-10">થાઇરોઇડ નું કાયમી સોલ્યૂશન :- </Heading>
            <ImageBox src={images.thyroidSolution} alt="Thyroid Solution" className="relative z-10" />
            
            <ProductCard title="થાઇરોકેર વેલનેસ ડ્રિન્ક :-" image={images.thyrocareDrink}>
               <Paragraph className="font-bold text-herbal">થાયરોકેર વેલનેસ ડ્રિંક: થાયરોઇડ સ્વાસ્થ્ય માટે કુદરતી સુરક્ષા</Paragraph>
               <Paragraph>થાયરોકેર વેલનેસ ડ્રિંક એ ખાસ કરીને થાયરોઇડ ગ્રંથિની કાર્યક્ષમતા વધારવા અને તમારા શરીરને ઊર્જાવાન રાખવા માટે બનાવવામાં આવ્યું છે.</Paragraph>
            </ProductCard>

            <ProductCard title="કાંચનાર ગુગ્ગલુ ટેબ્લેટ :- " image={images.kanchanar}>
               <Paragraph className="font-bold text-herbal">થાઈરોઈડ સ્વાસ્થ્ય માટે કુદરતી વરદાન</Paragraph>
               <Paragraph>તે ખાસ કરીને થાઈરોઈડ ગ્રંથિના કાર્યને સંતુલિત કરવા અને શરીરમાં રહેલી બિનજરૂરી ગાંઠોને કુદરતી રીતે ઓગાળવામાં મદદરૂપ થાય છે.</Paragraph>
            </ProductCard>

            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 mt-12 text-center">
              <Heading level={2} className="text-herbal-dark mt-0">થાઇરોઇડ ના રિઝલ્ટ & રિવ્યૂ </Heading>
              
              {/* Videos and Result Images First */}
              <div className="mt-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <VideoBox src={images.thyroidResultVideo1} />
                  <VideoBox src={images.thyroidResultVideo2} />
                  <VideoBox src={images.thyroidResultVideo3} />
                  <ImageBox src={images.thyroidResultImage1} alt="Thyroid Result" className="my-0" />
                </div>
                <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-1/2 mx-auto mt-8" />
              </div>

              {/* Written Reviews After */}
              <div className="mt-16 border-t border-stone-200 pt-12">
                <Heading level={3} className="text-herbal text-center mb-8">સંતુષ્ટ ગ્રાહકોના અભિપ્રાય (Reviews)</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <ReviewCard 
                    name="રંજનબેન વૈદ્ય" 
                    location="રાજકોટ" 
                    review="થાઈરોઈડને લીધે વજન ખૂબ વધી ગયું હતું, પણ આયુર્વેદિક દવા અને ડાયેટથી મારું વજન ઘટવા લાગ્યું છે અને થાઈરોઈડ રિપોર્ટ પણ નોર્મલ છે." 
                  />
                  <ReviewCard 
                    name="મીના શાહ" 
                    location="વડોદરા" 
                    review="મારા વાળ બહુ ખરતા હતા અને થાક લાગતો. બે મહિનામાં એનર્જી લેવલ સારુ થયું છે. કાંચનાર ગુગ્ગલુ બહુ જ અસરકારક છે." 
                  />
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* Obesity Section */}
      <Section className="mt-12">
        <Heading level={1} className="text-herbal">મોટાપો અને સ્ત્રી સ્વાસ્થ્ય :-</Heading>
        <ImageBox src={images.obesity} alt="Obesity Awareness" />
        
        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center my-10">
          <Paragraph className="font-bold text-2xl mb-4 text-stone-900">મોટાપો: માત્ર વજન નહીં, સ્વાસ્થ્યનો પડકાર</Paragraph>
          <Paragraph className="text-lg text-stone-600 mb-0">વધતું વજન એ માત્ર શારીરિક દેખાવની સમસ્યા નથી, પરંતુ તે અનેક ગંભીર બીમારીઓનું પ્રવેશદ્વાર છે. આયુર્વેદની મદદથી તમે કુદરતી રીતે ફિટ બની શકો છો.</Paragraph>
        </div>

        <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100 my-10 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 text-9xl opacity-5">⚠️</div>
           <Heading level={3} className="text-red-700 mt-0 relative z-10 border-b border-red-200 pb-4 inline-block">મોટાપાને કારણે થતી સમસ્યાઓ</Heading>
           <ul className="space-y-4 font-medium text-stone-800 mt-8 relative z-10 text-lg">
             <li className="flex items-center gap-3 bg-white/60 p-4 rounded-xl"><span className="text-red-500 font-bold">1.</span> <span><strong className="text-stone-900">સાંધાનો દુખાવો:</strong> ઘૂંટણ અને કમર પર વધારાનું દબાણ આવવું.</span></li>
             <li className="flex items-center gap-3 bg-white/60 p-4 rounded-xl"><span className="text-red-500 font-bold">2.</span> <span><strong className="text-stone-900">શ્વાસ લેવામાં તકલીફ:</strong> સામાન્ય ચાલવામાં પણ હાંફ ચઢવો.</span></li>
             <li className="flex items-center gap-3 bg-white/60 p-4 rounded-xl"><span className="text-red-500 font-bold">3.</span> <span><strong className="text-stone-900">હોર્મોનલ અસંતુલન:</strong> ખાસ કરીને સ્ત્રીઓમાં PCOD/PCOS નું જોખમ.</span></li>
             <li className="flex items-center gap-3 bg-white/60 p-4 rounded-xl"><span className="text-red-500 font-bold">4.</span> <span><strong className="text-stone-900">હૃદય અને પાચન:</strong> બ્લડ પ્રેશર અને પાચનશક્તિ નબળી પડવી.</span></li>
           </ul>
        </div>

        <div className="bg-green-50/50 p-8 md:p-10 rounded-3xl border border-green-100 my-12">
          <Heading level={2} className="text-herbal mt-0 text-center mb-8">🌿 આયુર્વેદિક સમાધાન (The Solution)</Heading>
          <Paragraph className="text-center font-bold text-lg mb-8 text-stone-800 bg-white p-4 rounded-2xl shadow-sm">જીમ કે કડક ડાયેટિંગ વગર પણ વજન ઘટાડવું શક્ય છે:</Paragraph>
          <ul className="space-y-4 font-medium">
            <li className="flex gap-3"><span className="text-herbal font-bold text-xl">✓</span> <span><strong className="text-stone-900">મેટાબોલિઝમ બૂસ્ટ:</strong> આયુર્વેદિક ઔષધિઓ દ્વારા શરીરની ચરબી ઓગળવાની પ્રક્રિયા ઝડપી બનાવો.</span></li>
            <li className="flex gap-3"><span className="text-herbal font-bold text-xl">✓</span> <span><strong className="text-stone-900">કુદરતી ડિટોક્સ:</strong> શરીરના ઝેરી તત્વોને બહાર કાઢી સ્ફૂર્તિ મેળવો.</span></li>
            <li className="flex gap-3"><span className="text-herbal font-bold text-xl">✓</span> <span><strong className="text-stone-900">સંતુલિત આહાર:</strong> ભૂખ્યા રહ્યા વગર સાચો ખોરાક પસંદ કરવાની સમજ.</span></li>
          </ul>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-md border border-stone-100 mb-12 text-center relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-herbal/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <Heading level={3} className="mt-0 text-3xl font-black text-stone-800 relative z-10 block mb-6">✨ અમારો ઉદ્દેશ્ય</Heading>
          <Paragraph className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto relative z-10">અમે તમને વજન ઘટાડવા માટે માત્ર દવાઓ નહીં, પણ એક સ્વસ્થ જીવનશૈલી આપવા માંગીએ છીએ.</Paragraph>
          <div className="inline-block bg-herbal/10 px-8 py-4 rounded-full border border-herbal/20 relative z-10">
            <Paragraph className="font-bold text-herbal italic mb-0 text-lg">"ચરબી ઘટાડો, આત્મવિશ્વાસ વધારો – આજે જ તમારી સફર શરૂ કરો."</Paragraph>
          </div>
          <ImageBox src={images.obesityMarket} alt="Obesity Market Stats" className="relative z-10 mt-12" />
        </div>

        <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem] shadow-sm border border-stone-200 mb-12">
            <Heading level={2} className="text-herbal-dark mt-0 text-center">ભારતમાં સ્થૂળતા નું સંકટ :- </Heading>
            <ImageBox src={images.obesityCrisis} alt="Obesity Crisis" />
            <Paragraph className="font-medium text-stone-700 bg-white p-6 rounded-2xl border border-stone-100 mt-6 shadow-sm">
              <strong className="text-stone-900">ભારતમાં તોળાતું સ્થૂળતાનું સંકટ:</strong> 'ટાઈમ્સ ઓફ ઈન્ડિયા' ના અહેવાલ મુજબ, ભારતમાં મેદસ્વીતા (Obesity) ખૂબ જ ઝડપથી વધી રહી છે અને તે ભવિષ્યમાં મોટા 'હેલ્થ ક્રાઈસિસ' નું રૂપ લઈ શકે છે.
            </Paragraph>
        </div>

        {/* Beautilook Product */}
        <Heading level={2} className="text-center text-herbal mt-16">અમારું પ્રીમિયમ સોલ્યુશન</Heading>
        <ProductCard title="Beautilook :- " image={images.beautilook}>
           <Paragraph className="font-bold text-herbal text-xl leading-snug">હવે વજન ઘટાડો કુદરતી રીતે, કોઈ પણ કસરત કે ડાયટ વગર! ✨</Paragraph>
           <Paragraph className="text-lg text-stone-600">બ્યુટીલુક લાવ્યું છે ભારતની નંબર ૧ આયુર્વેદિક ફોર્મ્યુલા, જે માત્ર ૯૦ દિવસમાં તમને આપશે મનગમતું ફિગર!</Paragraph>
           <div className="mt-8">
             <Paragraph className="font-bold text-stone-800 mb-4 border-b border-stone-200 pb-2 inline-block">Beautilook અદભુત રિઝલ્ટ :</Paragraph>
             <ImageBox src={images.resultGif3} alt="Result GIF" width={400} className="mx-0 shadow-sm p-1 bg-stone-50" />
           </div>
        </ProductCard>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24 max-w-5xl">
        <div className="bg-gradient-to-br from-herbal to-herbal-dark p-12 md:p-20 rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          
          <Heading level={1} className="text-white relative z-10 mb-10 leading-tight">
            "સ્વસ્થ અને સુંદર જીવનની શરૂઆત આજે જ કરો. સાચું આયુર્વેદ, સાચું માર્ગદર્શન!"
          </Heading>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
             <div className="bg-white/10 p-2 rounded-3xl backdrop-blur-sm border border-white/20">
               <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto px-10 py-5 text-lg" />
             </div>
             
             <div className="mt-8 bg-white text-herbal-dark px-10 py-6 rounded-3xl shadow-xl transition-transform hover:scale-105 inline-block">
               <Paragraph className="text-xl md:text-3xl font-black mb-0">📞 કોલ કરો: 96871 05624</Paragraph>
             </div>
             
             <Paragraph className="text-white/80 mt-6 text-sm md:text-base italic max-w-lg mx-auto">
               વજન ઘટાડવા, થાઈરોઈડ કે PCOS સંબંધિત કોઈ પણ પ્રશ્ન માટે અમારો સંપર્ક કરો. અમે હંમેશા તમારી મદદ માટે તૈયાર છીએ.
             </Paragraph>
          </div>
        </div>
      </Section>
    </main>
  );
}
