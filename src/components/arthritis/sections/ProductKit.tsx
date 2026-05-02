import React from "react";
import { Section, Heading, ImageBox, Paragraph, WhatsAppButton } from "../UI";
import { img } from "@/app/arthritis/constants";

export const ProductKit = () => {
  return (
    <Section className="bg-white rounded-[3rem] mt-12 shadow-md border border-stone-100 overflow-hidden">
      <div className="bg-herbal/10 py-10 px-6 text-center border-b border-herbal/10">
        <Heading level={2} className="text-herbal-dark mt-0">સંધિવા અને સાંધાના દુખાવા માટે આયુર્વેદિક કીટ</Heading>
        <Paragraph className="max-w-2xl mx-auto font-medium">અમારી કીટમાં રહેલાં ઉત્પાદનો સાંધાના દુખાવાને જડમૂળથી દૂર કરવામાં અને હાડકાંને મજબૂતી આપવામાં મદદ કરે છે.</Paragraph>
      </div>

      <div className="p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <Heading level={3} className="text-herbal mt-0">આયુર્વેદિક સોલ્યુશન</Heading>
            <Paragraph>
              અમારી પાસે સંધિવાની ચોક્કસ અને અસરકારક આયુર્વેદિક દવાઓ ઉપલબ્ધ છે જે હજારો લોકોએ અપનાવી છે.
            </Paragraph>
            <ImageBox src={img.solution} alt="Solution" className="my-6 shadow-none rounded-2xl" />
          </div>
          <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200 text-center">
            <Heading level={3} className="mt-0">અમારી આયુર્વેદિક કીટ</Heading>
            <ImageBox src={img.kitQr} alt="Kit QR" width={250} className="mx-auto" />
            <Paragraph className="font-bold text-herbal mt-4">૧૦૦% શુદ્ધ અને આયુર્વેદિક</Paragraph>
          </div>
        </div>

        <Heading level={3} className="text-herbal-dark border-b border-stone-100 pb-4 mb-8">કીટમાં સામેલ પ્રોડક્ટ્સ:</Heading>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "🧪", title: "Ortho Oil", desc: "સાંધાના દુખાવા અને સોજામાં તરત જ રાહત આપે છે." },
            { icon: "💊", title: "Ortho Tablets", desc: "સાંધાને અંદરથી પોષણ આપે છે અને ઘસારો રોકે છે." },
            { icon: "🌿", title: "Boswellia Curcumin", desc: "કુદરતી રીતે સોજો ઉતારે છે અને લવચીકતા વધારે છે." },
            { icon: "🍂", title: "Kaishor Guggul", desc: "શરીરમાંથી યુરિક એસિડ ઘટાડવામાં મદદ કરે છે." },
            { icon: "☀️", title: "Vitamin D3 Tablets", desc: "કેલ્શિયમના શોષણમાં મદદ કરી હાડકાં મજબૂત કરે છે." },
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
          <div className="bg-stone-50 p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-stone-200">
            <div className="w-16 h-16 bg-herbal/10 rounded-full flex items-center justify-center text-herbal mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <Heading level={3} className="mt-0 text-herbal">ઝડપી ઓર્ડર કરો</Heading>
            <Paragraph className="mb-8">તમારી વિગતો મોકલીને આજે જ ઓર્ડર કન્ફર્મ કરો અને સાંધાના દુખાવામાંથી મુક્તિ મેળવો.</Paragraph>
            <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};
