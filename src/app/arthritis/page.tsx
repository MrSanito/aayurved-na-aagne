"use client"

import Link from "next/link";
import React from "react";
import SocialLinks from "@/components/sections/SocialLinks";

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

/* ════════════════ REUSABLE PRIMITIVES ════════════════ */

const Wrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-3xl mx-auto px-5 ${className}`}>{children}</div>
);

const Img = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <img src={src} alt={alt} loading="lazy" className={`w-full rounded-2xl ${className}`} />
);

const Tag = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${className}`}>
    {children}
  </span>
);

const WaBtn = ({ text = "અત્યારે જ ઓર્ડર કરો", className = "", href }: { text?: string; className?: string; href?: string }) => (
  <Link
    href={href || "https://wa.me/919687105624?text=હું++આર્થરાઇટિસ+સોલ્યુશન+વિશે+જાણવા+ઈચ્છું+છું"}
    target="_blank" rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3.5 px-7 rounded-xl transition-all duration-200 active:scale-95 ${className}`}
  >
    <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    {text}
  </Link>
);

const Divider = () => <div className="w-16 h-1 bg-gold/40 rounded-full mx-auto my-10" />;

/* ════════════════ PRODUCT SECTION COMPONENT ════════════════ */

const ProductSection = ({
  tag, title, subtitle, bannerImg, img1, img2, howImg,
  features, howToUse, ctaText, children,
  dark = false,
}: {
  tag: string; title: string; subtitle: string;
  bannerImg: string; img1: string; img2?: string; howImg: string;
  features: { title: string; desc: string }[];
  howToUse: React.ReactNode;
  ctaText?: string; children?: React.ReactNode;
  dark?: boolean;
}) => {
  const bg = dark ? "bg-stone-900 text-white" : "bg-white";
  const cardBg = dark ? "bg-white/5 border-white/10" : "bg-stone-50 border-stone-100";
  const titleColor = dark ? "text-white" : "text-herbal-dark";
  const subtitleColor = dark ? "text-stone-300" : "text-stone-600";

  return (
    <section className={`${bg} py-14 md:py-20`}>
      <Wrap>
        <Tag className={dark ? "bg-white/10 text-gold" : "bg-herbal/10 text-herbal"}>{tag}</Tag>
        <h2 className={`text-2xl md:text-3xl font-bold mt-4 mb-2 ${titleColor}`}>{title}</h2>
        <p className={`text-lg mb-8 ${subtitleColor}`}>{subtitle}</p>

        <Img src={bannerImg} alt={title} className="mb-8" />

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Img src={img1} alt={`${tag} 1`} />
          {img2 && <Img src={img2} alt={`${tag} 2`} />}
        </div>

        {children}

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((f, i) => (
            <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${cardBg}`}>
              <span className="text-gold text-lg mt-0.5">✦</span>
              <div>
                <strong className={dark ? "text-white" : "text-stone-800"}>{f.title}:</strong>{" "}
                <span className={dark ? "text-stone-300" : "text-stone-600"}>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <Img src={howImg} alt="How to use" className="mb-6" />

        {/* How to Use */}
        <div className={`p-6 rounded-2xl border ${dark ? "bg-white/5 border-white/10" : "bg-herbal/5 border-herbal/10"}`}>
          <h3 className={`text-lg font-bold mb-3 ${dark ? "text-gold" : "text-herbal-dark"}`}>
            ઉપયોગ / સેવન કરવાની રીત (How to Use):
          </h3>
          <div className={`text-base leading-relaxed ${dark ? "text-stone-200" : "text-stone-700"}`}>
            {howToUse}
          </div>
        </div>

        {ctaText && (
          <div className="mt-8 text-center">
            <WaBtn text={ctaText} className="w-full md:w-auto" />
          </div>
        )}
      </Wrap>
    </section>
  );
};

/* ════════════════ MAIN PAGE ════════════════ */

export default function ArthritisPage() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen">

      {/* ─── HERO ─── */}
      <section className="bg-white border-b border-stone-100 py-14 md:py-20">
        <Wrap className="text-center">
          <Tag className="bg-herbal/10 text-herbal mb-4">આયુર્વેદિક સોલ્યુશન</Tag>
          <h1 className="text-3xl md:text-4xl font-bold text-herbal-dark mb-4">Arthritis</h1>
          <Img src={img.hero} alt="Arthritis" className="mb-6 max-w-lg mx-auto" />
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            આર્થરાઇટિસ (Arthritis) એટલે સાંધાનો સોજો. આ કોઈ એક બીમારી નથી, પરંતુ સાંધાના દુખાવા અને તેના
            રોગોને દર્શાવતો એક સમૂહ છે. જ્યારે સાંધામાં રહેલી ગાદી ઘસાઈ જાય અથવા રોગપ્રતિકારક શક્તિમાં
            ફેરફાર થાય, ત્યારે આ સમસ્યા ઉદભવે છે.
          </p>
        </Wrap>
      </section>

      {/* ─── SYMPTOMS ─── */}
      <section className="py-14 md:py-20">
        <Wrap>
          <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark mb-6 border-l-4 border-gold pl-4">
            આર્થરાઇટિસના મુખ્ય લક્ષણો
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "1 * સાંધાનો દુખાવો: હલનચલન કરતી વખતે અથવા આરામ કરતી વખતે પણ સાંધામાં સતત દુખાવો રહેવો.",
              "2 * જકડાઈ જવું (Stiffness): ખાસ કરીને સવારના સમયે સાંધા જકડાઈ જાય અને તેને હલાવવામાં મુશ્કેલી પડે.",
              "3 * સોજો: સાંધાની આસપાસ લાલાશ દેખાવી અને સોજો આવવો.",
              "4 * હલનચલનમાં મર્યાદા: સાંધા પૂરી રીતે વળી ન શકવા અથવા ચાલવા-ફરવામાં તકલીફ થવી.",
              "5 * અવાજ આવવો: સાંધા હલાવતી વખતે કટ-કટ જેવો અવાજ આવવો.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-100">
                <span className="text-gold font-bold shrink-0">✓</span>
                <span className="text-stone-700">{t}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-herbal-dark mb-4">તેના દ્વારા થતી તકલીફો</h3>
          <ul className="space-y-2 mb-8">
            {[
              "6 * રોજિંદા કાર્યોમાં મુશ્કેલી: દાદર ચડવા, નીચે બેસવા કે વજન ઊંચકવામાં ખૂબ જ તકલીફ પડે છે.",
              "7 * શારીરિક દેખાવમાં ફેરફાર: લાંબા ગાળે આંગળીઓ કે ઘૂંટણનો આકાર બદલાઈ શકે છે (વળી જવા).",
              "8 * વધુ પડતો થાક: શરીરમાં સતત સોજો રહેવાને કારણે જલ્દી થાક લાગે છે.",
              "9 * ઊંઘમાં ખલેલ: રાત્રે સાંધાના દુખાવાને કારણે પૂરતી ઊંઘ આવતી નથી.",
              "10 * માનસિક તાણ: લાંબા સમયની પીડાને કારણે વ્યક્તિ માનસિક રીતે નબળી પડી શકે છે.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 py-2">
                <span className="text-gold shrink-0">⚠️</span>
                <span className="text-stone-700">{t}</span>
              </li>
            ))}
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <p className="text-lg font-bold text-herbal-dark mb-0">
              શું તમારે આર્થરાઇટિસ (સાંધાના દુખાવા) માટે કોઈ અસરકારક આયુર્વેદિક જડીબુટ્ટીઓ કે તેલ વિશે જાણવું છે?
            </p>
          </div>
        </Wrap>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-beige/40 py-14 md:py-20">
        <Wrap>
          <Img src={img.stats} alt="Stats" className="mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark text-center mb-4">
            સંધિવા (Arthritis): સાંધાના દુખાવાથી મુુক্তি મેળવો
          </h2>
          <p className="font-semibold text-stone-700 bg-white p-4 rounded-xl border-l-4 border-gold mb-6">
            આજે ભારતમાં સાંધાનો દુખાવો એક ગંભીર સમસ્યા બની ગઈ છે. અહીં તેના વિશેના કેટલાક ચોંકાવનારા આંકડાઓ છે:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "* ૧૫ કરોડથી વધુ દર્દીઓ: ભારતમાં આજે સંધિવાથી પીડાતા લોકોની સંખ્યા ૧૫ કરોડને વટાવી ગઈ છે.",
              "* દૈનિક ૪૫ લાખ મુલાકાત: દરરોજ આશરે ૪૫ લાખ લોકો સાંધાના દુખાવાની સારવાર માટે ડોક્ટર પાસે જાય છે.",
              "* દરેક ઘરમાં એક દર્દી: સ્થિતિ એવી છે કે લગભગ દરેક બીજા-ત્રીજા ઘરે સંધિવાનો એક દર્દી જોવા મળે છે.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-100">
                <span className="text-herbal font-bold">▪</span><span className="text-stone-700">{t}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-herbal text-center mb-3">શા માટે આ આંકડા ચિંતાજનક છે?</h3>
          <p className="text-stone-600 text-center mb-8 leading-relaxed">
            સાંધાનો દુખાવો માત્ર ચાલવામાં તકલીફ નથી આપતો, પણ તે તમારી જીવનશૈલીને મર્યાદિત કરી દે છે.
            યોગ્ય સમયે સારવાર અને આયુર્વેદિક ઉપચાર દ્વારા આ સમસ્યાને નિયંત્રિત કરી શકાય છે.
          </p>

          <div className="bg-herbal text-white p-8 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">શું તમે પણ સાંધાના દુખાવાથી પરેશાન છો?</h3>
            <p className="text-white/80 mb-5">
              અમારા નિષ્ણાતો સાથે વાત કરો અને કુદરતી રીતે સાજા થવા તરફ ડગલું માંડો.
            </p>
            <WaBtn text="અમારા નિષ્ણાત સાથે વાત કરો" />
          </div>
        </Wrap>
      </section>

      {/* ─── TYPES ─── */}
      <section className="bg-white py-14 md:py-20">
        <Wrap>
          <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark border-l-4 border-gold pl-4 mb-4">Types of Arthritis:-</h2>
          <Img src={img.types} alt="Types of Arthritis" className="mb-6" />
          <p className="text-stone-600 text-center mb-8">
            ચોક્કસ, તમારી વેબસાઇટ માટે સંધિવાના પ્રકારો (Types of Arthritis) વિશેની ટૂંકી અને સચોટ ગુજરાતી
            માહિતી નીચે મુજબ છે:
          </p>

          <h3 className="text-xl font-bold text-herbal text-center mb-2">સંધિવાના મુખ્ય પ્રકારો (Types of Arthritis)</h3>
          <p className="text-stone-600 text-center mb-8 max-w-xl mx-auto">
            સંધિવા માત્ર એક બીમારી નથી, પરંતુ તેના વિવિધ પ્રકારો છે જે શરીરના અલગ-અલગ સાંધાઓને અસર કરે છે.
            મુખ્યત્વે આ ત્રણ પ્રકારો સૌથી વધુ જોવા મળે છે:
          </p>

          <div className="space-y-4 mb-8">
            {[
              { color: "border-l-herbal", label: "૧. ઓસ્ટિયોઆર્થરાઈટિસ (Osteoarthritis):-", text: "આ સંધિવાનો સૌથી સામાન્ય પ્રકાર છે. તે સામાન્ય રીતે વધતી ઉંમર સાથે સાંધા વચ્ચેના ગાદી જેવા ભાગ (Cartilage) ઘસાઈ જવાને કારણે થાય છે. આમાં ઘૂંટણ અને થાપાના સાંધામાં વધુ દુખાવો થાય છે." },
              { color: "border-l-gold", label: "૨. રુમેટોઇડ આર્થરાઈટિસ (Rheumatoid Arthritis):-", text: "આ એક 'ઓટો-ઈમ્યુન' રોગ છે, જેમાં શરીરની રોગપ્રતિકારક શક્તિ ભૂલથી પોતાના જ સાંધાઓ પર હુમલો કરે છે. આનાથી સાંધામાં સોજો, જકડાઈ જવી અને અસહ્ય દુખાવો થાય છે." },
              { color: "border-l-herbal-dark", label: "૩. ગાઉટ (Gout Arthritis):-", text: "જ્યારે શરીરમાં યુરિક એસિડનું પ્રમાણ વધી જાય છે, ત્યારે તે સાંધામાં સ્ફટિક (Crystals) સ્વરૂપે જમા થાય છે. સામાન્ય રીતે આની શરૂઆત પગના અંગૂઠાના સોજા અને દુખાવાથી થાય છે." },
            ].map((item, i) => (
              <div key={i} className={`bg-stone-50 border-l-4 ${item.color} p-5 rounded-r-xl`}>
                <p className="mb-0"><strong className="text-herbal-dark block mb-1">{item.label}</strong>
                <span className="text-stone-600">{item.text}</span></p>
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border border-gold/20 rounded-xl p-5 text-center">
            <p className="text-herbal-dark font-bold text-lg mb-0">
              તમારા સાંધાના દુખાવાને ઓળખો અને આજે જ યોગ્ય સારવાર શરૂ કરો.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ─── OSTEOARTHRITIS ─── */}
      <section className="bg-stone-50 py-14 md:py-20">
        <Wrap>
          <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark border-l-4 border-gold pl-4 mb-6">
            ઓસ્ટિયોઆર્થરાઈટિસ (Osteoarthritis): સાંધાના ઘસારાની સમસ્યા
          </h2>
          <Img src={img.osteo} alt="Osteoarthritis" className="mb-6" />
          <ul className="space-y-4 mb-8">
            {[
              { b: "સાંધાની રચના:", t: "આપણા શરીરમાં બે હાડકાં જ્યાં જોડાય છે, ત્યાં વચ્ચે 'કાર્ટિલેજ' (Cartilage) નામનું એક નરમ અને ચીકણું પડ હોય છે. તે સાંધાને લુબ્રિકેશન પૂરું પાડે છે અને હાડકાંને એકબીજા સાથે ઘસાતા અટકાવે છે." },
              { b: "સમસ્યા ક્યારે સર્જાય છે?:", t: "જ્યારે આ કાર્ટિલેજ ઘસાઈ જાય અથવા સાંધામાં રહેલું ચીકણું પ્રવાહી (Liquid) ઓછું થઈ જાય, ત્યારે હાડકાં સીધા એકબીજા સાથે ઘસાવા લાગે છે." },
              { b: "લક્ષણો:", t: "આ પ્રક્રિયાને કારણે સાંધામાં અસહ્ય દુખાવો, સોજો અને જકડાઈ જવાની સમસ્યા થાય છે. આ સ્થિતિને જ 'ઓસ્ટિયોઆર્થરાઈટિસ' કહેવામાં આવે છે." },
              { b: "વય મર્યાદા:", t: "આ રોગ મુખ્યત્વે વધતી ઉંમર સાથે સંકળાયેલો છે. સામાન્ય રીતે ૪૫ વર્ષની ઉંમર પછી આ સમસ્યા વધુ જોવા મળે છે, તેથી તેને 'ઘડપણની બીમારી' પણ કહેવામાં આવે છે." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-herbal mt-0.5">🔹</span>
                <span className="text-stone-700">* <strong>{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>

          <div className="bg-beige/50 p-5 rounded-xl border border-beige mb-6">
            <h3 className="text-lg font-bold text-herbal mb-3">મુખ્ય નિશાનીઓ:</h3>
            <ul className="space-y-2">
              {["* ચાલતી વખતે ઘૂંટણમાંથી અવાજ આવવો.", "* સવારે ઉઠતી વખતે સાંધા જકડાઈ જવા.", "* સીડી ચડવા-ઉતરવામાં તકલીફ થવી."].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-stone-700">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <p className="text-xl font-bold text-herbal-dark mb-1">શું તમે પણ સાંધાના ઘસારાથી ચિંતિત છો?</p>
            <p className="text-stone-600 mb-0">
              અમારા આયુર્વેદિક ઉપચાર દ્વારા કાર્ટિલેજને પોષણ આપો અને સાંધાની ગતિશીલતા પાછી મેળવો.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ─── RHEUMATOID ─── */}
      <section className="bg-white py-14 md:py-20">
        <Wrap>
          <Tag className="bg-herbal text-white mb-4">
            રુમેટોઇડ આર્થરાઈટિસ (Rheumatoid Arthritis): જ્યારે શરીર જ બને દુશ્મન
          </Tag>
          <Img src={img.ra} alt="Rheumatoid Arthritis" className="mb-6" />
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 text-center mb-6 leading-relaxed">
            રુમેટોઇડ આર્થરાઈટિસ (RA) એ સામાન્ય સંધિવા કરતા થોડો અલગ અને ગંભીર રોગ છે. તેને આ રીતે સમજી
            શકાય:
          </h2>
          <ul className="space-y-3 mb-8 bg-stone-50 p-5 rounded-xl border border-stone-100">
            {[
              { b: "રોગપ્રતિકારક શક્તિ (Immune System):", t: "આપણા શરીરમાં સફેદ રક્તકણો (White Cells) હોય છે, જે બહારથી આવતા વાયરસ કે બીમારીઓ સામે લડીને આપણું રક્ષણ કરે છે." },
              { b: "ભૂલ ભરેલો હુમલો:", t: "જ્યારે આ સફેદ રક્તકણો ભૂલથી બહારના દુશ્મનોને બદલે આપણા પોતાના જ સાંધાઓ (Joints) ના પડ પર હુમલો કરવાનું અને તેને નુકસાન પહોંચાડવાનું શરૂ કરી દે છે, ત્યારે તેને રુમેટોઇડ આર્થરાઈટિસ કહેવામાં આવે છે." },
              { b: "અસહ્ય વેદના:", t: "આ સ્થિતિમાં સાંધામાં સતત સોજો રહે છે અને ત્યાં અસહ્ય દુખાવો (Ashaya Pain) થાય છે. જો સમયસર સારવાર ન મળે, તો તે સાંધાના આકારને પણ બદલી શકે છે." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-herbal mt-0.5">✓</span>
                <span className="text-stone-700">* <strong>{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-stone-100">
              <h3 className="text-lg font-bold text-herbal mb-3">મુખ્ય લક્ષણો:</h3>
              <ul className="space-y-2">
                {["* સવારે ઉઠતાની સાથે જ સાંધા ખૂબ જ જકડાઈ જવા.", "* એકસાથે બંને હાથ કે બંને પગના સાંધામાં દુખાવો થવો.", "* તાવ જેવો અનુભવ થવો અને સતત થાક લાગવો."].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-gold mt-0.5">▪</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-herbal/5 border-l-4 border-herbal p-5 rounded-r-xl flex flex-col justify-center">
              <h3 className="text-lg font-bold text-herbal-dark mb-2">શું તમે રુમેટોઇડ આર્થરાઈટિસથી પીડાઓ છો?</h3>
              <p className="text-stone-600 mb-0 leading-relaxed">
                અમારો આયુર્વેદિક અભિગમ તમારી રોગપ્રતિકારક શક્તિને સંતુલિત કરવામાં અને સાંધાના સોજાને
                કુદરતી રીતે ઘટાડવામાં મદદ કરી શકે છે.
              </p>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ─── GOUT ─── */}
      <section className="bg-stone-50 py-14 md:py-20">
        <Wrap>
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark mb-2">ગાઉટ (Gout Arthritis):</h2>
            <Tag className="bg-herbal text-white">યુરિક એસિડનો દુખાવો</Tag>
          </div>
          <Img src={img.gout} alt="Gout" className="mb-6" />
          <p className="text-lg md:text-xl font-semibold text-center text-stone-800 mb-6 leading-relaxed">
            ગાઉટ એ સાંધાનો એક વિશિષ્ટ પ્રકારનો દુખાવો છે, જે શરીરમાં થતા રાસાયણિક ફેરફારોને કારણે ઉદભવે
            છે. તેને આ રીતે સમજી શકાય:
          </p>
          <ul className="space-y-3 bg-white p-5 rounded-xl border border-stone-100 mb-6">
            {[
              { b: "યુરિક એસિડનો ભરાવો:", t: "જ્યારે લોહીમાં યુરિક એસિડનું પ્રમાણ વધી જાય છે, ત્યારે તે સાંધાના પોલાણમાં સોય જેવા નાના સ્ફટિકો (Crystals) સ્વરૂપે જમા થવા લાગે છે. આ જમા થયેલ યુરિક એસિડને કારણે સાંધામાં અસહ્ય દુખાવો અને સોજો આવે છે, જેને 'ગાઉટ' કહેવામાં આવે છે." },
              { b: "ખોરાકની અસર:", t: "જે લોકો આહારમાં સી-ફૂડ (Sea Food), વધુ પડતું પ્રોટીન અથવા લાલ માસનો ઉપયોગ વધારે કરે છે, તેમનામાં આ સમસ્યા થવાની શક્યતા વધી જાય છે." },
              { b: "શરૂઆતના લક્ષણો:", t: "સામાન્ય રીતે ગાઉટની શરૂઆત પગના અંગૂઠાના સાંધાથી થાય છે. સાંધો એકાએક લાલ થઈ જાય છે, ગરમ લાગે છે અને તેને સ્પર્શતા પણ ખૂબ જ પીડા થાય છે." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-0.5">➤</span>
                <span className="text-stone-700">* <strong>{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>

          <div className="bg-beige/50 p-5 rounded-xl border border-beige">
            <h3 className="text-lg font-bold text-herbal mb-3">મુખ્ય કારણો:</h3>
            <ul className="space-y-2">
              {["* શરીરમાં પ્યુરિન (Purine) નામના તત્વનું પાચન બરાબર ન થવું.", "* પાણી ઓછું પીવું અથવા કિડની દ્વારા યુરિક એસિડ બરાબર સાફ ન થવું.", "* આલ્કોહોલ અથવા વધુ ખાંડવાળા પીણાંનું સેવન."].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-stone-700">
                  <span className="w-2 h-2 rounded-full bg-herbal shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      {/* ─── CAUSES ─── */}
      <section className="bg-stone-900 text-white py-14 md:py-20">
        <Wrap>
          <div className="bg-white/10 p-6 rounded-xl text-center mb-8 border border-white/10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-0 leading-relaxed">
              સાંધાના દુખાવા (Arthritis) થી પરેશાન છો? જાણો તેના મુખ્ય કારણો અને લક્ષણો
            </h2>
          </div>
          <Img src={img.causes} alt="Causes" className="mb-8 bg-white p-1 rounded-2xl" />
          <h3 className="text-lg font-bold text-herbal border-b border-gold/30 pb-2 mb-5 inline-block">સાંધાના દુખાવા થવાના મુખ્ય કારણો:</h3>
          <ul className="space-y-4 mb-8">
            {[
              { b: "ખોટી ખાણી-પીણી:", t: "વધુ પડતું ખાવાની આદત શરીરમાં ઝેરી તત્વો (આમ) પેદા કરે છે, જે ગેસ બનીને સાંધાઓમાં જમા થાય છે અને સોજો લાવે છે." },
              { b: "વધતું વજન:", t: "શરીરનું વધારાનું વજન સીધું તમારા ઘૂંટણ પર દબાણ લાવે છે, જેના કારણે સાંધા ઝડપથી ઘસાય છે અને દુખાવો વધે છે." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xl">⚠️</span>
                <span>* <strong>{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-white text-center mb-4">
            આ લક્ષણોને નજરઅંદાજ ન કરો: જો તમને સાંધામાં નીચે મુજબની સમસ્યા જણાય, તો તે સંધિવા હોઈ શકે છે:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["* અસહ્ય દુખાવો", "* સાંધામાં લાલાશ આવવી", "* સાંધા ગરમ લાગવા", "* સાંધામાં સોજો આવવો"].map((t, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl border-t-2 border-gold text-center text-sm font-semibold">{t}</div>
            ))}
          </div>

          <div className="bg-white text-stone-900 p-6 rounded-2xl text-center">
            <p className="text-xl font-bold text-herbal-dark mb-2">&gt; સ્વસ્થ જીવન માટે આજે જ તમારી જીવનશૈલી બદલો!</p>
            <p className="bg-gold text-stone-900 inline-block px-6 py-2 rounded-full font-bold mb-0">
              શું તમે સાંધાના દુખાવાનો કાયમી ઉકેલ ઈચ્છો છો?
            </p>
          </div>
        </Wrap>
      </section>

      {/* ─── 5-STEP SOLUTION ─── */}
      <section className="bg-white py-14 md:py-20">
        <Wrap>
          <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark text-center mb-2 leading-tight">
            સાંધાના દુખાવા અને ગઠિયા (Arthritis) થી મુક્તિ મેળવો: <span className="text-gold">સંપૂર્ણ સમાધાન!</span>
          </h2>
          <Img src={img.solution} alt="Solution" className="my-6" />
          <p className="text-lg text-center font-semibold text-stone-700 bg-stone-50 p-5 rounded-xl border border-stone-100 mb-8">
            સાંધાના દુખાવાને માત્ર દબાવો નહીં, તેને જડમૂળથી દૂર કરો. અમારું વિશેષ સોલ્યુશન આ 5 રીતે કામ
            કરીને તમને આપે છે કાયમી રાહત:
          </p>

          <h3 className="text-xl font-bold text-herbal text-center mb-5">અમારું 5-સ્ટેપ સોલ્યુશન:</h3>
          <div className="space-y-3 mb-8">
            {[
              { n: "1", b: "ગેસ (વાયુ) પર નિયંત્રણ:", t: "શરીરમાંથી વધારાનો વાયુ દૂર કરી સાંધાના દબાણમાં ઘટાડો કરે છે." },
              { n: "2", b: "હાડકાની મજબૂતી (Bone Strength):", t: "હાડકાંને અંદરથી પોષણ આપીને વધુ મજબૂત બનાવે છે." },
              { n: "3", b: "દુખાવામાં રાહત (Pain Control):", t: "કુદરતી રીતે સોજો ઉતારીને અસહ્ય દુખાવામાંમાંથી મુક્તિ અપાવે છે." },
              { n: "4", b: "સોજા પર નિયંત્રણ (Swelling Control):", t: "સાંધામાં થતી લાલાશ અને સોજો ઘટાડી હલનચલન સરળ બનાવે છે." },
              { n: "5", b: "કાર્ટિલેજ સપોર્ટ (Cartilage Support):", t: "સાંધા વચ્ચેની ગાદી (Cartilage) ને ઘસાતી અટકાવે છે અને રક્ષણ આપે છે." },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <span className="bg-herbal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.n}</span>
                <span className="text-stone-700">* <strong>{s.b}</strong> {s.t}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-herbal-dark text-center mb-3">કેમ અમારું સોલ્યુશન શ્રેષ્ઠ છે?</h3>
          <div className="bg-gold/10 border border-gold/20 p-5 rounded-xl text-center italic text-stone-700 mb-8">
            &gt; સાંધાના રોગોમાં માત્ર પેઈનકિલર લેવી પૂરતી નથી, પરંતુ હાડકાં અને કાર્ટિલેજને ફરી જીવંત
            કરવા જરૂરી છે. અમે તમને આપીએ છીએ કુદરતી અને લાંબા ગાળાની રાહત!
          </div>

          <div className="text-center">
            <WaBtn text="સોલ્યુશન વિશે વધુ જાણો" />
          </div>
        </Wrap>
      </section>

      {/* ─── PRODUCTS OVERVIEW ─── */}
      <section className="bg-beige/40 py-14 md:py-20">
        <Wrap>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-herbal-dark mb-2">આર્થરાઈટિસ સોલ્યુશન:</h2>
            <p className="text-xl font-bold text-gold uppercase tracking-wider mb-4">સાંધાના દુખાવાની આયુર્વેદિક સારવાર</p>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              હવે સાંધાના દુખાવા અને સોજાને કહો અલવિદા! આયુર્વેદના આંગણે લાવ્યું છે કુદરતી
              જડીબુટ્ટીઓથી ભરપૂર સંપૂર્ણ હેલ્થ કીટ, જે તમારા હાડકાંને આપે છે નવું જીવન.
            </p>
          </div>

          <h3 className="text-lg font-bold text-herbal mb-4">અમારી શ્રેષ્ઠ પ્રોડક્ટ્સ જે તમને આપશે કાયમી રાહત:</h3>
          <div className="space-y-3 mb-10">
            {[
              { icon: "🌿", title: "Ortho Oil & Tablets", desc: "દુખાવા પર ઝડપી અસર અને સાંધાની લવચીકતા વધારે છે." },
              { icon: "🌿", title: "Boswellia Capsules", desc: "કુદરતી રીતે સોજો અને બળતરા ઘટાડે છે." },
              { icon: "🌿", title: "Kaishor Guggulu", desc: "લોહીનું શુદ્ધિકરણ કરી સાંધાના ઝેરી તત્વો (યુરિક એસિડ) ઘટાડે છે." },
              { icon: "🌿", title: "D3 Oral Spray", desc: "હાડકાંના બંધારણ માટે જરૂરી વિટામીન-D3 ની પૂર્તિ કરે છે." },
              { icon: "🌿", title: "Calcium Chewable Tablets", desc: "હાડકાંને અંદરથી મજબૂત અને સ્વસ્થ બનાવે છે." },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-100">
                <span className="text-2xl shrink-0">{p.icon}</span>
                <p className="text-stone-700 mb-0"><strong className="text-herbal-dark">{p.title}:</strong> {p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-100">
              <h3 className="text-lg font-bold text-herbal-dark mb-4 border-b border-stone-100 pb-3">ટીમેક્સ શા માટે પસંદ કરવું?</h3>
              <ul className="space-y-3 text-stone-700 font-semibold mb-6">
                <li className="flex items-center gap-3">🌱 ૧૦૦% આયુર્વેદિક અને સુરક્ષિત</li>
                <li className="flex items-center gap-3">✅ કોઈ આડઅસર (Side Effects) નહીં</li>
                <li className="flex items-center gap-3">🦴 હાડકાં અને કાર્ટિલેજનું સંપૂર્ણ રક્ષણ</li>
                <li className="flex items-center gap-3">🏃 ફરીથી સક્રિય જીવન જીવવાની શક્તિ</li>
              </ul>
              <p className="text-herbal font-bold text-center bg-herbal/5 p-3 rounded-xl border border-herbal/10">
                હવે જડબાતોડ દુખાવાથી ડરવાની જરૂર નથી, આજે જ તમારી કીટ બુક કરો!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-100 flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">&gt; વધુ માહિતી અને ઓર્ડર માટે:</p>
              <img src={img.kitQr} alt="QR Code" className="w-48 h-48 object-contain rounded-xl mb-5" />
              <WaBtn text="અત્યારે જ ઓર્ડર કરો" className="w-full" />
            </div>
          </div>
        </Wrap>
      </section>

      <Divider />

      {/* ─── ORTHO OIL ─── */}
      <ProductSection
        tag="Ortho oil"
        title="Teamex Ortho Oil: વર્ષો જૂના સાંધા અને સ્નાયુના દુખાવામાંથી મેળવો કાયમી છુટકારો!"
        subtitle={`"શું તમે ઘૂંટણ, કમર કે સ્નાયુઓના દુખાવાથી પરેશાન છો? Teamex Ortho Oil એ ૯૦થી વધુ આયુર્વેદિક જડીબુટ્ટીઓ અને ૭ કુદરતી તેલનું અનોખું મિશ્રણ છે, જે દુખાવાને જડમૂળથી દૂર કરવામાં મદદ કરે છે."`}
        bannerImg={img.orthoOilBanner}
        img1={img.orthoOil1}
        img2={img.orthoOil2}
        howImg={img.orthoOilHow}
        features={[
          { title: "શક્તિશાળી સામગ્રી", desc: "તેમાં મહાનારાયણ તેલ, મહાવિષગર્ભ તેલ અને નિર્ગુડી તેલ જેવા શક્તિશાળી તત્વો છે જે હાડકાંને જોડવામાં અને સ્નાયુઓની જકડન દૂર કરવામાં મદદ કરે છે." },
          { title: "ઝડપી અસર", desc: "આ તેલ શરીરમાં સરળતાથી શોષાઈ જાય છે અને મિનીટોમાં જ રાહત આપે છે." },
          { title: "સંપૂર્ણ આયુર્વેદિક", desc: "બજારમાં મળતા મેન્થોલયુક્ત તેલથી અલગ, આ ૧૦૦% કુદરતી અને સુરક્ષિત છે." },
          { title: "દરેક દુખાવા માટે", desc: "ભલે તે વર્ષો જૂનો સાંધાનો દુખાવો હોય કે જીમ-સ્પોર્ટ્સની ઈજા, આ તેલ રામબાણ ઈલાજ છે." },
        ]}
        howToUse={
          <div className="space-y-2">
            <p className="mb-1"><strong>૧.</strong> દિવસમાં બે વાર દુખાવા વાળા ભાગ પર તેલ લગાવો.</p>
            <p className="mb-0"><strong>૨.</strong> ૫ થી ૧૦ મિનિટ સુધી હળવા હાથે ગોળાકાર (Circulate) માલિશ કરો.</p>
          </div>
        }
        ctaText="અત્યારે જ ઓર્ડર કરો"
      >
        <div className="bg-herbal text-white p-6 rounded-xl text-center mb-8">
          <p className="text-lg font-bold mb-1">&gt; દુખાવાને સહન ન કરો, તેને દૂર કરો!</p>
          <p className="text-white/80 mb-0">&gt; આજે જ ઓર્ડર કરો અને ફરીથી સક્રિય જીવન જીવવાની શરૂઆત કરો.</p>
        </div>
      </ProductSection>

      <Divider />

      {/* ─── ORTHO TABLET ─── */}
      <ProductSection
        tag="Ortho tablet"
        title="Teamex Ortho Tablet: ૨૨ શક્તિશાળી જડીબુટ્ટીઓ સાથે સાંધાના દુખાવાનો કાયમી ઉકેલ!"
        subtitle="સાંધાનો દુખાવો હોય કે ગઠિયાની સમસ્યા, હવે કુદરતી રીતે મેળવો રાહત. Teamex Ortho Tablet એ ૨૨ પ્રકારની દુર્લભ આયુર્વેદિક જડીબુટ્ટીઓનું અદભૂત મિશ્રણ છે, જે તમારા હાડકાં અને સાંધાઓને અંદરથી પોષણ આપે છે."
        bannerImg={img.orthoTabletBanner}
        img1={img.orthoTablet1}
        img2={img.orthoTablet2}
        howImg={img.orthoTabletHow}
        dark
        features={[
          { title: "કાર્ટિલેજ સપોર્ટ", desc: "ગળો, સલકી ગૂગળ અને હાડસાંકળ જેવી જડીબુટ્ટીઓ સાંધા વચ્ચેની ગાદીને ઘસાતી અટકાવે છે." },
          { title: "દુખાવામાં રાહત", desc: "હળદર, દેવદાર અને આમળા દુખાવો ઘટાડીને હલનચલન સરળ બનાવે છે." },
          { title: "પાચનમાં મદદરૂપ", desc: "આ ટેબ્લેટ પાચનશક્તિ સુધારે છે જેથી સાંધામાં વાયુ (ગેસ) જમા થતો નથી." },
          { title: "હાડકાંની મજબૂતી", desc: "હરડે અને મરી હાડકાંઓને લોખંડ જેવા મજબૂત બનાવવામાં મદદ કરે છે." },
        ]}
        howToUse={
          <div className="space-y-2">
            <p className="font-semibold mb-2">શ્રેષ્ઠ પરિણામ મેળવવા માટે હૂંફાળા પાણી સાથે આ મુજબ લો:</p>
            <p className="mb-1">👉 પહેલું અઠવાડિયું: ૨ ટેબ્લેટ, દિવસમાં ૩ વાર.</p>
            <p className="mb-1">👉 બીજા અઠવાડિયાથી: ૨ ટેબ્લેટ, દિવસમાં ૨ વાર.</p>
            <p className="text-sm italic opacity-70 mb-0">* (નોંધ: જો ગેસની સમસ્યા હોય તો જમ્યા પહેલા લેવી)</p>
          </div>
        }
        ctaText="અત્યારે જ ઓર્ડર કરો"
      >
        <div className="bg-gold/10 border border-gold/20 p-5 rounded-xl text-center mb-8">
          <p className="text-lg font-bold text-stone-800 mb-1">શા માટે આ ટેબ્લેટ છે ખાસ?</p>
          <p className="text-stone-600 mb-0">* સંપૂર્ણ સુરક્ષા: ૧૦૦% ઓર્ગેનિક, GMP સર્ટિફાઈડ અને FDA દ્વારા માન્ય.</p>
        </div>
        <div className="bg-herbal-dark text-white p-5 rounded-xl text-center mb-8 border-l-4 border-gold">
          <p className="font-bold mb-0">&gt; હવે દુખાવો નહીં, માત્ર આઝાદી! તમારા સાંધાઓને આપો આયુર્વેદનું સુરક્ષા કવચ.</p>
        </div>
      </ProductSection>

      <Divider />

      {/* ─── BOSWELLIA ─── */}
      <ProductSection
        tag="Boswellia capsules"
        title="Teamex Boswellia: સાંધાના દુખાવા અને સોજા માટે કુદરતી વરદાન!"
        subtitle={`"સદીઓથી એશિયા અને આફ્રિકામાં વપરાતી ચમત્કારિક જડીબુટ્ટી હવે કેપ્સ્યુલ સ્વરૂપે. Teamex Boswellia એ માત્ર સાંધાના દુખાવા માટે જ નહીં, પણ સમગ્ર શરીરના સ્વાસ્થ્ય માટે એક શક્તિશાળી આયુર્વેદિક સોલ્યુશન છે."`}
        bannerImg={img.boswelliaBanner}
        img1={img.boswellia1}
        img2={img.boswellia2}
        howImg={img.boswelliaHow}
        features={[
          { title: "સાંધાનું સ્વાસ્થ્ય", desc: "ઓસ્ટિયો અને રુમેટોઈડ આર્થરાઈટિસમાં અત્યંત ફાયદાકારક." },
          { title: "આમ દોષનું પાચન", desc: "શરીરમાંથી 'આમ રસ' (ઝેરી તત્વો) નું પાચન કરી રોગને જડમૂળથી દૂર કરવામાં મદદ કરે છે." },
          { title: "અન્ય સ્વાસ્થ્ય લાભો", desc: "અસ્થમા, ડાયાબિટીસ, કોલેસ્ટ્રોલ અને માનસિક તણાવ ઘટાડવામાં મદદરૂપ." },
          { title: "સ્ત્રી રોગોમાં ઉપયોગી", desc: "પેશાબ અને માસિક ધર્મના પ્રવાહને નિયમિત કરવામાં સહાય કરે છે." },
        ]}
        howToUse={<p className="mb-0">* રોજની માત્ર ૧ કેપ્સ્યુલ, જમ્યા પહેલા લો.</p>}
        ctaText="અત્યારે જ ઓર્ડર કરો"
      >
        <Img src={img.boswellia3} alt="Boswellia 3" className="mb-6" />
        <div className="bg-stone-50 p-5 rounded-xl border border-stone-100 mb-8">
          <h3 className="text-lg font-bold text-herbal mb-3">શા માટે Teamex Boswellia શ્રેષ્ઠ છે?</h3>
          <p className="text-sm text-stone-500 uppercase tracking-wider mb-4">બજારમાં મળતી સામાન્ય પ્રોડક્ટ્સ કરતા અલગ, અમારી કેપ્સ્યુલ્સમાં છે:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl border-t-4 border-herbal">
              <p className="text-stone-700 font-semibold mb-0">* ૩૦% AKBA અને ૭૫% Boswellic Acid: આ એક એવું દુર્લભ કોન્સન્ટ્રેટ કોમ્બિનેશન છે જે સોજા અને દુખાવા પર સીધી અસર કરે છે.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border-t-4 border-gold">
              <p className="text-stone-700 font-semibold mb-0">* ૧૦૦% શાકાહારી (Vegetarian): શુદ્ધ શાકાહારી કેપ્સ્યુલ્સ જે દરેક માટે સુરક્ષિત છે.</p>
            </div>
          </div>
        </div>
        <div className="text-center bg-herbal/5 p-5 rounded-xl border border-herbal/10 mb-8">
          <p className="font-bold text-herbal-dark mb-0">&gt; તમારા શરીરને આપો કુદરતી પોષણ અને જીવો તણાવમુક્ત જીવન!</p>
        </div>
      </ProductSection>

      <Divider />

      {/* ─── KAISHOR GUGGULU ─── */}
      <ProductSection
        tag="Kaishor gugglu"
        title="Kaishor Guggulu: સાંધાના દુખાવા અને ત્વચાના રોગો માટે રામબાણ ઈલાજ!"
        subtitle="શરીરમાં પિત્તનું સંતુલન જાળવવા અને લોહીને શુદ્ધ કરવા માટે Kaishor Guggulu એ શ્રેષ્ઠ આયુર્વેદિક ઉપાય છે. તે માત્ર સાંધાના દુખાવામાં રાહત નથી આપતું, પણ શરીરને અંદરથી ડિટોક્સ (Detox) પણ કરે છે."
        bannerImg={img.kaishorBanner}
        img1={img.kaishor1}
        img2={img.kaishor2}
        howImg={img.kaishorHow}
        dark
        features={[
          { title: "પિત્ત દોષનું સંતુલન", desc: "શરીરમાં વધેલા પિત્તને નિયંત્રિત કરી બળતરા અને સોજો ઘટાડે છે." },
          { title: "ડિટોક્સિફિકેશન", desc: "લોહીમાં રહેલા ઝેરી તત્વોને દૂર કરી શરીરને શુદ્ધ કરે છે." },
          { title: "સાંધાના દુખાવામાં રાહત", desc: "સંધિવા (Gout) અને યુરિક એસિડની સમસ્યામાં અત્યંત ગુણકારી છે." },
          { title: "ચમકતી ત્વચા", desc: "એન્ટી-ઓક્સિડન્ટ ગુણોને કારણે ખીલ અને ત્વચાના અન્ય રોગો મટાડી કુદરતી ગ્લો આપે છે." },
          { title: "મેટાબોલિઝમ", desc: "પાચનશક્તિ સુધારે છે અને ચયાપચયની ક્રિયાને વેગ આપે છે." },
        ]}
        howToUse={
          <div>
            <p className="mb-1">👉 દિવસમાં ૨ વાર ૨-૨ ટેબ્લેટ પાણી સાથે લો.</p>
            <p className="text-sm italic opacity-70 mb-0">* (જમ્યા પછી ) *</p>
          </div>
        }
        ctaText="અત્યારે જ ઓર્ડર કરો"
      >
        <div className="bg-gold text-stone-900 p-5 rounded-xl text-center font-bold mb-8">
          ઓર્ડર માટે સંપર્ક કરો: 96871 05624
        </div>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">✅ પાચનતંત્ર મજબૂત બનાવે</div>
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">✅ એન્ટી-ઓક્સિડન્ટ ગુણોથી ભરપૂર</div>
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">✅ સાંધાની જકડન દૂર કરે</div>
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">✅ યુવાન અને સ્વસ્થ ત્વચા આપે</div>
        </div>
        <div className="text-center bg-white/5 p-5 rounded-xl border border-gold/20 mb-8">
          <p className="text-gold font-bold mb-0">&gt; કુદરતી રીતે સ્વસ્થ બનો અને આયુર્વેદની શક્તિનો અનુભવ કરો!</p>
        </div>
      </ProductSection>

      <Divider />

      {/* ─── VITAMIN D3 SPRAY ─── */}
      <ProductSection
        tag="Vitamin D3 Spary"
        title="Teamex D3 Oral Spray: વિટામિન-D ની ઉણપનો આધુનિક અને સરળ ઉપાય!"
        subtitle={`"શું તમે જાણો છો? માત્ર કેલ્શિયમ લેવું પૂરતું નથી, તેને શરીરમાં શોષવા માટે વિટામિન-D3 અનિવાર્ય છે. Teamex D3 Daily Oral Spray તમને ગોળીઓ ગળવાની ઝંઝટમાંથી મુક્તિ આપે છે અને સીધું જ લોહીમાં ભળીને તાત્કાલિક અસર કરે છે."`}
        bannerImg={img.d3Banner}
        img1={img.d31}
        img2={img.d32}
        howImg={img.d3How}
        features={[
          { title: "નેનો ટેકનોલોજી", desc: "સ્પ્રે કરવાથી તે સીધું મોંની નસો દ્વારા શોષાય છે, જે કેપ્સ્યુલ કરતા અનેકગણી ઝડપી અસર આપે છે." },
          { title: "હાડકાંની મજબૂતી", desc: "કેલ્શિયમના શોષણમાં મદદ કરી હાડકાં અને દાંતને મજબૂત બનાવે છે." },
          { title: "રોગપ્રતિકારક શક્તિ", desc: "તમારી ઇમ્યુનિટી વધારે છે અને વારંવાર બીમાર પડતા અટકાવે છે." },
          { title: "મૂડ અને એનર્જી", desc: "તે માનસિક તણાવ ઘટાડવામાં અને આખો દિવસ સ્ફૂર્તિ જાળવી રાખવામાં મદદરૂપ છે." },
        ]}
        howToUse={<p className="mb-0">* રોજ સવાર થી સાંજ સુધી જીભ નીચે અથવા ગાલની અંદરની બાજુએ 4 સ્પ્રે કરો.</p>}
        ctaText="અત્યારે જ ઓર્ડર કરો"
      >
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-stone-50 p-4 rounded-xl text-center font-semibold text-herbal-dark border border-stone-100">✅ હાડકાં અને સ્નાયુઓને શક્તિ આપે</div>
          <div className="bg-stone-50 p-4 rounded-xl text-center font-semibold text-herbal-dark border border-stone-100">✅ હૃદય અને રોગપ્રતિકારક તંત્રનું રક્ષણ કરે</div>
          <div className="bg-stone-50 p-4 rounded-xl text-center font-semibold text-herbal-dark border border-stone-100">✅ ગમે ત્યારે, ગમે ત્યાં વાપરવામાં સરળ</div>
          <div className="bg-stone-50 p-4 rounded-xl text-center font-semibold text-herbal-dark border border-stone-100">✅ કુદરતી રીતે શુદ્ધ અને અસરકારક</div>
        </div>
        <div className="text-center bg-herbal/5 p-5 rounded-xl border border-herbal/10 mb-8">
          <p className="font-bold text-herbal-dark mb-0">&gt; હવે વિટામિન-D મેળવવું બન્યું સાવ સરળ! આજે જ અપનાવો D3 Spray.</p>
        </div>
      </ProductSection>

      <Divider />

      {/* ─── CALCIUM ─── */}
      <ProductSection
        tag="Calcium tablet"
        title="Calcium: મજબૂત હાડકાં અને દાંત માટે કુદરતી સુરક્ષા કવચ!"
        subtitle="વધતી ઉંમર અને બદલાતી જીવનશૈલીમાં હાડકાંને મજબૂત રાખવા ખૂબ જરૂરી છે."
        bannerImg={img.calciumBanner}
        img1={img.calcium1}
        img2={img.calcium2}
        howImg={img.calciumHow}
        dark
        features={[
          { title: "ચાવવા યોગ્ય (Chewable)", desc: "ગળવાની ઝંઝટ વગર, ગમે ત્યારે અને ગમે ત્યાં લઈ શકાય છે." },
          { title: "ઝડપી શોષણ", desc: "શરીર આ કેલ્શિયમને ઝડપથી શોષી લે છે, જે હાડકાં પર ત્વરિત અસર કરે છે." },
          { title: "હાડકાંની મજબૂતી", desc: "હાડકાંની ઘનતા (Density) વધારી તેને પોલા થતા અટકાવે છે." },
          { title: "દાંતનું સ્વાસ્થ્ય", desc: "દાંતને મૂળમાંથી મજબૂત બનાવે છે અને સડો અટકાવે છે." },
        ]}
        howToUse={<p className="mb-0">* દિવસમાં ૧ થી ૨ ટેબ્લેટ (ચાવીને અથવા ગળીને લઈ શકાય છે).</p>}
        ctaText="અત્યારે જ ઓર્ડર કરો"
      >
        <Img src={img.calcium3} alt="Calcium 3" className="mb-6" />
        <p className="text-lg text-center mb-6">
          Calcium Chewable Tablets એ શરીરની કેલ્શિયમની જરૂરિયાતને પૂરી કરી તમને આપે છે
          અંદરથી મજબૂતી અને નવી ઊર્જા.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">💪 સાંધાના દુખાવા અને થાકને દૂર કરે છે.</div>
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">🦷 દાંત અને પેઢાને મજબૂત બનાવે છે.</div>
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">🦴 હાડકાંના બંધારણને લોખંડ જેવું મજબૂત કરે છે.</div>
          <div className="bg-white/10 p-4 rounded-xl text-center font-semibold border border-white/10">🌟 ૧૦૦% સુરક્ષિત અને અસરકારક.</div>
        </div>
        <div className="text-center bg-white/5 p-5 rounded-xl border border-gold/20 mb-8">
          <p className="text-gold font-bold mb-0">&gt; તમારા હાડકાંનું ધ્યાન આજે જ રાખો, જેથી આવતીકાલ વધુ સક્રિય હોય!</p>
        </div>
      </ProductSection>

      {/* ─── FOOTER GIF ─── */}
      <section className="py-16 flex justify-center">
        <img src={img.footerGif} alt="Footer" className="rounded-2xl max-w-[280px] border-4 border-white shadow-lg" />
      </section>

      <SocialLinks />
    </main>
  );
}