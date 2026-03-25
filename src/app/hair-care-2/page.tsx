"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function HairCarePage2() {
  const WHATSAPP_LINK = "https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B9%E0%AB%87%E0%AA%B2%20%E0%AA%95%E0%AB%87%E0%AA%B0%20%E0%AA%B5%E0%AA%BF%E0%AA%B7%E0%AB%87%20%E0%AA%9C%E0%AA%BE%E0%AA%A3%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82";

  return (
    <main className="min-h-screen bg-stone-50/50">
      <Navbar />
      
      {/* Hero Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-yellow-400/40 via-transparent to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight drop-shadow-lg">
            "વાળ ખરવાની ચિંતા છોડો, આયુર્વેદ સાથે નાતો જોડો."
          </h1>
          
          <div className="flex justify-center my-10">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvLpPgQIUG9vSkOF1fLxbxg1jhzDlpMjuB6jl7R6RWRp43YCkNc3iwY_6452gVo9-WOv_K8a2vQRHods7KbFX5I9Gbmt1gY48zGTX0ktUGpSmaznpFSOAX0T1HYwzk7Rgn5AvpJoK1KF5mCGsynmD4QgdwCmDmhEtWGB0cmAqkXuyegSg0QpNOpggmcvvT/s1376/1003078797.png" 
              alt="Ayurveda Hair Care"
              className="rounded-3xl shadow-2xl border-4 border-white/20 max-w-full md:max-w-3xl transform transition hover:scale-[1.02] duration-700"
            />
          </div>

          <p className="text-xl md:text-3xl font-bold bg-white/10 backdrop-blur-md inline-block px-8 py-4 rounded-2xl border border-white/20 mt-6">
            શું તમે પણ ખરતા વાળ, ખોડો, પાતળા વાળ, અકાળે થયેલ સફેદ વાળ થી પરેશાન છો?
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl py-20 relative z-20">
        <article className="space-y-24">
          
          {/* Section 1: Introduction */}
          <section className="text-center space-y-10">
            <div className="space-y-6 text-2xl md:text-3xl font-medium leading-relaxed text-stone-700 border-l-8 border-emerald-600 pl-8 text-left bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50">
              <p>રાસાયણિક શેમ્પૂ અને તેલ ક્યારેક ફાયદા કરતા નુકસાન વધુ કરે છે.</p>
              <p className="text-emerald-900 font-bold">અમારું 'આયુર્વેદના આંગણે' હેર સોલ્યુશન પ્રાચીન જડીબુટ્ટીઓ અર્કથી બનેલું છે. આ માત્ર ઉપરછલ્લો ઈલાજ નથી, પણ મૂળમાંથી વાળને મજબૂતી આપે છે.</p>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-stone-900 pt-10">
              "શું તમે પણ દરરોજ ખરતા વાળથી પરેશાન છો?
            </h3>

            <div className="overflow-hidden rounded-4xl shadow-2xl border-2 border-stone-100 group">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2eNvLsZKhfJp7zANYAl2dWaIAC_CgPkvUxMfcAe4q3SvBHz5T6w6WJQUo0jVHF9DIsMFGmtiLUlOG6-HbAmUDgkBETgscg0WoTNKLPuq0fI-FOvt2fh51yR_9Cb__I8fNxL0agBtBqpX0GOFJTqH_ayIufD3I80tWeLdGgjQSYYRQ6ZYvLGHTenP4G_bW/s1280/1003077581.jpg" 
                alt="Hair Fall Problems"
                className="w-full h-auto transform transition duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="text-left space-y-8 mt-12">
               <h3 className="text-2xl md:text-3xl font-black text-emerald-900 italic border-b-4 border-yellow-500 pb-4 inline-block">
                * "કાંસકામાં આવતા વાળ જોઈને ચિંતા થાય છે? હવે અટકાવો કાયમી ધોરણે!"
               </h3>
               <p className="text-2xl text-stone-700 font-medium">તમારા ખરતા વાળનું આયુર્વેદિક અને કુદરતી નિવારણ અહીં છે.</p>
               
               <div className="bg-emerald-50 p-10 rounded-4xl space-y-6 text-xl md:text-2xl text-stone-800 leading-relaxed shadow-inner border border-emerald-100">
                  <p className="font-bold underline decoration-emerald-300 decoration-8 underline-offset-4">વાળ ખરવા એ માત્ર એક સમસ્યા નથી, તે તમારા આત્મવિશ્વાસને પણ અસર કરે છે.</p>
                  <p>બદલાતી જીવનશૈલી, પ્રદૂષણ અને કેમિકલયુક્ત પ્રોડક્ટ્સ તમારા વાળને મૂળમાંથી નબળા બનાવે છે. જો તમારા કાંસકામાં પણ આ રીતે વાળ ગુચ્છામાં આવતા હોય, તો તેને અવગણશો નહીં.</p>
               </div>

               <div className="bg-emerald-900 text-white p-12 rounded-4xl shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <h3 className="text-3xl font-black mb-8 text-yellow-400">અમારું ૧૦૦% આયુર્વેદિક સોલ્યુશન:</h3>
                  <ul className="space-y-6">
                    {[
                      "વાળનું ખરવાનું 90 દિવસમાં ઓછું કરે છે.",
                      "સ્કેલ્પને ઊંડાણપૂર્વક પોષણ આપે છે.",
                      "નવા વાળ ઉગાડવામાં મદદરૂપ થાય છે."
                    ].map((li, i) => (
                      <li key={i} className="flex items-center gap-4 text-2xl">
                         <FaCheckCircle className="text-emerald-400 shrink-0" />
                         <span>{li}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </section>

          {/* Section 2: Why Hair Falls */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 text-center leading-tight">
              "તમારા વાળ કેમ ખરે છે? જાણો સાચું કારણ!"
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-emerald-700 max-w-2xl mx-auto italic">
              માત્ર મોંઘા શેમ્પૂ બદલવાથી વાળ ખરતા અટકશે નહીં. પહેલાં એ જાણવું જરૂરી છે કે સમસ્યા અંદરથી છે કે બહારથી.
            </h3>

            <div className="rounded-4xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikLERvkSU-G2sJbrVP0lKs3Uc-I-N4pt8vE9YpoxJU_B0haBlWboCTzuXDndY0D7syESghTQWb63GD6yHCdwc6fxLCb0nQdtMbN67z8h71SfoZVpnirGB4R-24d-FXtF9Gp2d-I52uiD6PPRhIttCSvXMdwWRafc-4USb3qlngrZcrYeivpoR8W5OYdnRm/s1280/1003077582.jpg" 
                alt="Causes of Hair Fall"
                className="w-full h-auto"
              />
            </div>

            <p className="text-2xl text-stone-700 leading-relaxed text-center max-w-3xl mx-auto font-medium py-10">
              ઘણીવાર આપણે મોંઘા શેમ્પૂ અને કન્ડિશનર બદલતા રહીએ છીએ, છતાં વાળ ખરવાનું બંધ થતું નથી. કારણ કે આપણે તેના 'મૂળ કારણ' સુધી પહોંચતા નથી. ચાલો જાણીએ કે તમારા વાળ કેમ ખરે છે અને આયુર્વેદ તેમાં કેવી રીતે મદદ કરી શકે છે.
            </p>
          </section>

          {/* Section 3: Nutrition */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 text-center leading-tight">
              "વાળનો સાચો ખોરાક: જાણો કયા વિટામિન્સ છે જરૂરી!"
            </h2>

            <div className="rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5HN9Rp78mbAAJ-2QoT42_LCtoAVYy4qKg8L3yhWoHosif_Dv5CIAMN4u3huvLzlko_Ig7wT9Pldp4RoX-kWqp_BkoLG0HlbBxio7S42ytqP9gTXx7lrDT1boBD-nTY7Vs5tqzKwFwyt9kOoNhZ1njGeXKZ1d19OLn0VBdD98lhfG5vGnLXWQirnG4Qu4t/s1280/1003077583.jpg" 
                alt="Hair Nutrition"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white p-12 rounded-4xl shadow-xl shadow-stone-200/50 space-y-10 border border-stone-100">
               <p className="text-2xl text-stone-700 font-medium">જેમ શરીરને ટકવા માટે ખોરાકની જરૂર છે, તેમ તમારા વાળને પણ જીવંત, લાંબા અને મજબૂત રહેવા માટે ખાસ પોષક તત્વોની જરૂર પડે છે.</p>
               
               <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-emerald-800 flex items-center gap-3">
                       <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-black italic shadow-inner">V</span>
                       • વિટામિન્સનો પાવર :-
                    </h3>
                    <p className="text-xl text-stone-600 italic">અમારા આયુર્વેદિક તેલમાં કુદરતી રીતે આ તત્વોનો સમાવેશ થાય છે જે તમારા વાળના મૂળ સુધી પહોંચે છે:</p>
                    <ul className="grid md:grid-cols-1 gap-6 text-xl">
                      {[
                        { t: "વિટામિન A & C:", d: "સ્કેલ્પમાં કુદરતી ઓઈલ જાળવી રાખે છે અને વાળને તૂટતા અટકાવે છે." },
                        { t: "B7 (Biotin) & B12:", d: "નવા વાળ ઉગાડવા માટે અને વાળની જાડાઈ વધારવા માટે સૌથી મહત્વપૂર્ણ." },
                        { t: "વિટામિન D & E:", d: "સૂર્યપ્રકાશ અને પોષણની ગેરહાજરીમાં થતા નુકસાન સામે રક્ષણ આપે છે." }
                      ].map((item, i) => (
                        <li key={i} className="bg-stone-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                           <strong className="text-emerald-950 block mb-2">{item.t}</strong>
                           <span className="text-stone-700">{item.d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-emerald-800 flex items-center gap-3">
                       <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-black italic shadow-inner">M</span>
                       • જરૂરી મિનરલ્સ અને પ્રોટીન :-
                    </h3>
                    <p className="text-xl text-stone-600 italic">વાળની આંતરિક રચનાને મજબૂત કરવા માટે:</p>
                    <ul className="grid md:grid-cols-2 gap-6 text-xl">
                      {[
                        { t: "Iron (આયર્ન):", d: "વાળના મૂળ સુધી ઓક્સિજન પહોંચાડે છે." },
                        { t: "Zinc (ઝિંક):", d: "હેર ટિશ્યુના રિપેરિંગમાં મદદ કરે છે." },
                        { t: "Protein (પ્રોટીન):", d: "વાળ મુખ્યત્વે પ્રોટીનના બનેલા હોય છે." },
                        { t: "Essential Fatty Acids:", d: "વાળમાં કુદરતી ચમક લાવે છે." }
                      ].map((item, i) => (
                        <li key={i} className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 flex flex-col justify-center">
                           <strong className="text-emerald-950 block mb-1">{item.t}</strong>
                           <span className="text-stone-700 text-lg leading-snug">{item.d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               <div className="mt-16 bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-12 rounded-4xl text-center space-y-6 shadow-2xl">
                  <h3 className="text-3xl font-black italic text-yellow-400">"આયુર્વેદના આંગણે" કેમ પસંદ કરવું?</h3>
                  <p className="text-2xl font-bold opacity-90">"અમે માત્ર તેલ નથી આપતા, અમે તમારા વાળને જરૂરી સંપૂર્ણ આહાર આપીએ છીએ."</p>
                  <p className="text-lg md:text-xl font-light opacity-80 max-w-2xl mx-auto border-t border-white/10 pt-6">
                    અમારું મિશ્રણ એવી રીતે તૈયાર કરવામાં આવ્યું છે કે તે આ તમામ વિટામિન્સ અને મિનરલ્સનું પોષણ સીધું તમારા વાળના મૂળમાં પહોંચાડે છે. કેમિકલ મુક્ત પદ્ધતિથી બનેલું આ સોલ્યુશન તમારા વાળને અંદરથી પોષણ આપી બહારથી સુંદર બનાવે છે.
                  </p>
               </div>
            </div>
          </section>

          {/* Section 4: Stages of Hair Loss */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 text-center leading-tight">
              શું તમારા વાળ પણ ખરવા લાગ્યા છે? જાણો હેર લોસના 7 મહત્વના તબક્કા :-
            </h2>

            <div className="rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1BMQ1T17qol1LCTkx3Li1pHupvc6-DsVJa_GiImicIwC_2KWpJpPQj3WU_Mes05yaJK0LbyNS_bzkXK4vnQ6SUYfXwUoLxA9F9euz0xuQImVU_pxQfXF7MsDvVUbkOKjVks4WD2vFYZrcfbzfZ1iEIq9mir-NQbyGWtMvl5zuTpOXoRf7caSq-vkpbd6k/s1280/1003077584.jpg" 
                alt="Hair Loss Stages"
                className="w-full h-auto"
              />
            </div>

            <p className="text-2xl text-stone-700 font-medium text-center max-w-2xl mx-auto leading-relaxed">
              વાળ ખરવા એ માત્ર વૃદ્ધાવસ્થાની નિશાની નથી, પણ તે બદલાતી જીવનશૈલી અને આનુવંશિક કારણોનું પરિણામ હોઈ શકે છે. પુરુષોમાં જોવા મળતી ટાલ (Male Pattern Baldness) ને સમજવા માટે 'નોરવુડ સ્કેલ' (Norwood Scale) ખૂબ જ ઉપયોગી છે.
            </p>

            <div className="overflow-x-auto rounded-3xl border border-stone-200 shadow-2xl bg-white mb-20">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-emerald-900 text-white font-bold">
                    <th className="p-8 text-2xl">| સ્ટેજ |</th>
                    <th className="p-8 text-2xl">શું થાય છે?</th>
                    <th className="p-8 text-2xl">| હાલત |</th>
                  </tr>
                </thead>
                <tbody className="text-xl text-stone-700 font-medium">
                   {[
                     { s: "સ્ટેજ 1", d: "શરૂઆત, દેખીતી રીતે જણાતી નથી.", h: "સામાન્ય" },
                     { s: "સ્ટેજ 2", d: "કપાળના ખૂણે હળવાશ.", h: "શરૂઆત" },
                     { s: "સ્ટેજ 3", d: "'M' આકાર સ્પષ્ટ અને વાળ પાતળા.", h: "ચિંતાજનક" },
                     { s: "સ્ટેજ 4", d: "પાછળના ભાગે (Vertex) ટાલ.", h: "મધ્યમ" },
                     { s: "સ્ટેજ 5", d: "આગળ અને પાછળની ટાલ વચ્ચેનો ગેપ ઘટે.", h: "ગંભીર" },
                     { s: "સ્ટેજ 6", d: "ઉપરના ભાગમાં ખૂબ ઓછા વાળ.", h: "ખૂબ ગંભીર" },
                     { s: "સ્ટેજ 7", d: "સંપૂર્ણ ટાલ, માત્ર કાનની ઉપર વાળ", h: "અંતિમ" }
                   ].map((row, i) => (
                     <tr key={i} className="border-b border-stone-100 hover:bg-emerald-50 transition-colors">
                        <td className="p-8 font-black text-emerald-900 whitespace-nowrap">{row.s}</td>
                        <td className="p-8 leading-relaxed">{row.d}</td>
                        <td className="p-8">
                           <span className={`px-6 py-2 rounded-full text-lg font-black shadow-sm ${
                             i < 2 ? 'bg-emerald-100 text-emerald-800' :
                             i < 4 ? 'bg-yellow-100 text-yellow-800' :
                             'bg-red-100 text-red-800'
                           }`}>
                             {row.h}
                           </span>
                        </td>
                     </tr>
                   ))}
                </tbody>
              </table>
            </div>

            <div className="bg-background border-4 border-yellow-500/30 p-12 rounded-4xl space-y-10 shadow-2xl relative">
               <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-black">?</div>
               <h3 className="text-3xl font-black text-emerald-900">શું તમે સ્ટેજ 2 કે 3 પર છો?</h3>
               <p className="text-2xl text-stone-700 italic border-l-8 border-yellow-500 pl-6">તમે હજુ પણ તમારા વાળ બચાવી શકો છો.</p>
               
               <div className="space-y-6">
                  <h3 className="text-2xl font-black text-stone-900">શા માટે આ સ્ટેજ સમજવા જરૂરી છે? 🧐</h3>
                  <p className="text-xl text-stone-600 leading-relaxed font-body">
                    તમે જેટલા વહેલા સ્ટેજ પર હેર લોસને ઓળખી લેશો, તેને રોકવો એટલો જ સરળ રહેશે. જો તમે સ્ટેજ 2 કે 3 પર છો, તો યોગ્ય ટ્રીટમેન્ટ અને આહારથી તમે તમારા વાળ પાછા મેળવી શકો છો અથવા ખરતા અટકાવી શકો છો.
                  </p>
                  <p className="text-2xl font-black text-emerald-900 pt-6">
                    &gt; યાદ રાખો: સમયસર લીધેલો નિર્ણય તમારા લુક અને આત્મવિશ્વાસને બચાવી શકે છે!
                  </p>
               </div>

               <div className="pt-12 space-y-8">
                  <h3 className="text-3xl font-black text-stone-900 border-b-2 border-stone-200 pb-4">અમે તમને કેવી રીતે મદદ કરી શકીએ?</h3>
                  <p className="text-xl text-stone-700 leading-relaxed">અમારી ક્લિનિક/પ્રોડક્ટ્સ તમને આ સમસ્યામાંથી બહાર લાવવા માટે આધુનિક ટેકનોલોજી અને કુદરતી ઉપચારોનું મિશ્રણ પ્રદાન કરે છે:</p>
                  <ul className="space-y-6">
                    <li className="bg-white p-8 rounded-3xl shadow-md border-l-8 border-emerald-600 flex items-center gap-4 group hover:shadow-xl transition-all">
                       <span className="w-4 h-4 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
                       <span className="text-2xl font-bold text-emerald-950">નેચરલ સોલ્યુશન્સ: વાળને જડમૂળથી મજબૂત બનાવતા તેલ અને શેમ્પૂ.</span>
                    </li>
                  </ul>
                  <p className="text-3xl font-black text-center text-emerald-900 bg-yellow-400 py-8 rounded-3xl shadow-lg border-b-8 border-yellow-600 transform hover:scale-105 transition-all">
                    આજે જ તમારા વાળનું પરીક્ષણ કરાવો!
                  </p>
                  <p className="text-center text-2xl italic text-stone-500 font-medium">શું તમે સ્ટેજ 2 કે 3 પર છો? મુંઝવશો નહીં,</p>
               </div>
            </div>
          </section>

          {/* Section 5: Unique Formulation */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 text-center leading-tight">
              ખરતા અને સફેદ વાળને કહો અલવિદા! મેળવો મજબૂત અને કાળા વાળ કુદરતી રીતે 🌿
            </h2>

            <div className="rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIvWvb31MrndYiL3N1PpZChL0inZCvdvZ7Ain2Xwk-xeLZHInhOisKekwI-0mN6Yoe5slCZ6e2ifgyNHWjXYZiidZk0RGaU7BRfrDpTEZZgZuvflKGnQLFdV55Z3_TEIyNc3TY5Orn7QYahzpU1eCjDc0lQ3BrzUl365fmGEXKOkcnh7BB_GJPV6ozjwmf/s1280/1003077585.jpg" 
                alt="Hair Solutions"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center space-y-8 py-10">
               <p className="text-2xl md:text-3xl font-black text-stone-900 leading-snug">શું તમે વાળ ખરવા (Hair Fall), ટાલ પડવી (Hair Loss) અથવા નાની ઉંમરે સફેદ થતા વાળ (Grey Hair) થી પરેશાન છો?</p>
               <p className="text-2xl text-stone-600 italic">હવે ચિંતા છોડો! અમે લાવ્યા છીએ ખાસ <span className="text-emerald-700 font-bold font-outfit uppercase tracking-wider">Unique Formulation</span> જે તમારા વાળને જડમૂળથી પોષણ આપી તેને ફરી જીવંત કરશે.</p>
            </div>

            <div className="bg-white rounded-4xl border-2 border-stone-100 shadow-3xl overflow-hidden">
               <div className="bg-emerald-900 p-10 text-center text-white">
                  <h3 className="text-3xl font-black ">અમારી ખાસ હેર કેર રેન્જ:</h3>
                  <p className="text-xl text-emerald-200 mt-2">અમારી પ્રોડક્ટ્સ વિજ્ઞાન અને આયુર્વેદનો અદભૂત સંગમ છે, જે દરેક સમસ્યા માટે ચોક્કસ ઉકેલ આપે છે:</p>
               </div>
               <div className="p-10 md:p-16 space-y-8">
                  <ul className="grid md:grid-cols-2 gap-8 text-xl">
                    {[
                      { t: "Biotin Gummy:", d: "સ્વાદિષ્ટ ગમીઝ જે વાળને અંદરથી મજબૂતી આપે છે." },
                      { t: "B12 Spray:", d: "વિટામિનની ઉણપ દૂર કરી વાળના ગ્રોથમાં મદદરૂપ." },
                      { t: "Saptamrut Loh:", d: "આયુર્વેદિક શક્તિ જે વાળનું કુદરતી કાળાપણું જાળવી રાખે છે." },
                      { t: "Hair Tonic:", d: "સ્કેલ્પમાં બ્લડ સર્ક્યુલેશન વધારે અને નવા વાળ ઉગાડવામાં મદદ કરે." },
                      { t: "Argan Biotin Shampoo:", d: "પ્રદૂષણથી રક્ષણ અને વાળને આપે રેશમી ચમક." },
                      { t: "Hair Conditioner:", d: "ગૂંચવાયેલા અને શુષ્ક વાળને બનાવે મુલાયમ." },
                      { t: "7 in 1 Argan & Tea Tree:", d: "એક જ ઓઈલમાં 7 શક્તિશાળી તત્વોનો મેળ." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start border-b border-stone-50 pb-6 last:border-0">
                         <span className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-black shrink-0 shadow-sm">{i+1}</span>
                         <div className="flex flex-col">
                            <strong className="text-stone-900 mb-1">{item.t}</strong>
                            <span className="text-stone-500 font-medium italic">{item.d}</span>
                         </div>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="bg-emerald-50 rounded-4xl p-12 space-y-12 shadow-inner border border-stone-100">
               <h3 className="text-3xl font-black text-stone-900 border-b-4 border-emerald-300 pb-4 inline-block">શા માટે અમારી પ્રોડક્ટ્સ પસંદ કરવી? ✅</h3>
               <div className="grid md:grid-cols-1 gap-8 text-2xl font-bold text-stone-800">
                  <div className="flex items-center gap-6 bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border-l-8 border-emerald-600">
                     <span className="text-4xl">🛡️</span>
                     <span>સંપૂર્ણ સુરક્ષિત: કોઈ હાનિકારક કેમિકલનો ઉપયોગ નહીં.</span>
                  </div>
                  <div className="flex items-center gap-6 bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border-l-8 border-emerald-600 text-left">
                     <span className="text-4xl">⚡</span>
                     <span>ઝડપી પરિણામ: નિયમિત ઉપયોગથી થોડા જ દિવસોમાં તફાવત દેખાશે.</span>
                  </div>
                  <div className="flex items-center gap-6 bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border-l-8 border-emerald-600">
                     <span className="text-4xl">👔</span>
                     <span>ઓલ-ઈન-વન સોલ્યુશન: હેર લોસથી લઈને ગ્રે હેર સુધીની તમામ સમસ્યાનો અંત.</span>
                  </div>
               </div>
               
               <blockquote className="text-center italic text-4xl font-black text-emerald-900 bg-white/50 backdrop-blur-sm p-12 rounded-4xl border-y-2 border-emerald-100 py-16">
                 "સુંદર વાળ એ માત્ર દેખાવ નથી, પણ તમારો આત્મવિશ્વાસ છે."
               </blockquote>
            </div>

            <div className="text-center py-10">
               <p className="text-2xl md:text-3xl font-black text-stone-900 leading-snug">તમારા વાળની જરૂરિયાત મુજબ આજે જ તમારી પસંદગીની પ્રોડક્ટ ઓર્ડર કરો અને મેળવો ઘટાદાર અને સ્વસ્થ વાળ!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
               <div className="rounded-4xl overflow-hidden shadow-2xl border-4 border-white group">
                 <img 
                   src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguzMIs2KTZ1yA3IBinQAj_z3OGftwFkhnRxFsckHsj0Pnb6pCX49dNyueoGnFBh149J6Gkbkq15j5jGIpFgxWcOldqPKD1eJbme2AIF8KMH5rdrBJBa5ucDzUnCq65AMOw9i3oHxBiId3zdYOYJjgNgY-n7M4-uo79Edewpnm3tJVUYsf8gwiCCMm0R2HJ/s1280/1003077586.jpg" 
                   alt="Hair Product"
                   className="w-full h-auto"
                 />
               </div>
               <div className="space-y-8 flex flex-col justify-center text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-emerald-900">મુખ્ય હેડલાઇન: "બાયોટિન: નવા અને મજબૂત વાળ ઉગાડવાનું ગુપ્ત રહસ્ય!"</h2>
                  <p className="text-2xl text-stone-700 leading-relaxed italic">શું તમે જાણો છો કે તમારા વાળનો મુખ્ય ભાગ કેરાટિન (Keratin) નામના પ્રોટીનથી બનેલો છે? અને આ પ્રોટીન બનાવવા માટે શરીરને સૌથી વધુ જરૂર બાયોટિન (Biotin) ની હોય છે.</p>
               </div>
            </div>
          </section>

          {/* Section 6: Biotin Deep Dive */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 border-b-8 border-yellow-400 pb-6 inline-block">૧. બાયોટિન એટલે શું?બાયોટિન કેવી રીતે કામ કરે છે?</h2>
            <div className="bg-white p-12 rounded-4xl shadow-3xl border border-stone-50 space-y-10 text-2xl text-stone-700 leading-relaxed font-medium">
               <p>બાયોટિન એ વિટામિન B7 છે. આ એક 'વોટર સોલ્યુબલ' વિટામિન છે, જેનો અર્થ છે કે શરીર તેને સંગ્રહિત કરી શકતું નથી, તેથી તેને દરરોજ યોગ્ય આહાર અથવા પોષણ દ્વારા લેવું જરૂરી છે</p>
               
               <ul className="space-y-8 text-left py-6">
                  <li className="flex items-center gap-4 bg-emerald-50 p-10 rounded-3xl border-l-12 border-emerald-600 shadow-md">
                     <span className="text-5xl shrink-0">🧬</span>
                     <span className="text-2xl font-bold">તે શરીરમાં કેરાટિન પ્રોટીનનું ઉત્પાદન વધારે છે.</span>
                  </li>
                  <li className="flex items-center gap-4 bg-emerald-50 p-10 rounded-3xl border-l-12 border-emerald-600 shadow-md">
                     <span className="text-5xl shrink-0">🌱</span>
                     <span className="text-2xl font-bold">વાળના ફોલિકલ્સ (મૂળ) ને સક્રિય કરી નવા વાળ ઉગાડવામાં મદદ કરે છે.</span>
                  </li>
                  <li className="flex items-center gap-4 bg-emerald-50 p-10 rounded-3xl border-l-12 border-emerald-600 shadow-md">
                     <span className="text-5xl shrink-0">✨</span>
                     <span className="text-2xl font-bold">પાતળા વાળને જાડા અને ભરાવદાર બનાવે છે.</span>
                  </li>
               </ul>

               <p className="border-t-2 border-stone-100 pt-10 font-bold text-stone-900 italic">ઘણીવાર આહારમાંથી પૂરતું બાયોટિન વાળના મૂળ સુધી પહોંચી શકતું નથી. અમારું આયુર્વેદિક કોર્ષ કુદરતી જડીબુટ્ટીઓથી સમૃદ્ધ છે જે સ્કેલ્પના રંધ્રો દ્વારા સીધું શોષાઈને વાળને 'બાયોટિન જેવું પોષણ' આપે છે.</p>
               <p className="text-3xl font-black text-emerald-900 pt-10 text-center">"તમારા વાળને આપો બાયોટિનની શક્તિ અને મેળવો મજબૂત, ચમકદાર વાળ!"</p>
               <p className="text-center text-xl italic text-stone-500 font-medium bg-stone-50 p-8 rounded-3xl border border-stone-100 leading-relaxed">"શું તમે જાણો છો? બાયોટિનની ઉણપ માત્ર વાળ જ નહીં, પણ નખને પણ નબળા પાડે છે. અમારું સોલ્યુશન તમારા વાળના સ્વાસ્થ્યને સંપૂર્ણ સુરક્ષા આપે છે."</p>
            </div>
          </section>

          {/* Section 7: Biotin Deficiency Warning */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 text-center leading-tight bg-red-50 p-10 rounded-4xl border-l-12 border-red-600 shadow-2xl inline-block w-full">
              શું તમારા શરીરમાં બાયોટિનની ઉણપ છે? આ લક્ષણોને અવગણશો નહીં! ⚠️
            </h2>

            <div className="rounded-4xl overflow-hidden shadow-3xl border-4 border-white">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcdm9RESWP0-Dg38DeSmRG7XYOsRrXVVIVowC-2luEPp8Cf4K-NKr0lOEh-lOL0F7K-1OB0YqSC01869VsxWcGKe3FPYXgkM5-M4J58g7B0dvQI6FZF7a8vP36b0XgMbv1TOenpywpEVFfXIsVn1B0V0SxbD7kCFnbNQT4o-neurMYyhw_f2hPE9JCPMqh/s1280/1003077587.jpg" 
                alt="Deficiency Signs"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white p-12 rounded-4xl shadow-3xl space-y-12 text-2xl text-stone-700 leading-relaxed font-medium">
               <p className="italic text-center font-bold text-stone-900 border-b-2 border-stone-100 pb-12">બાયોટિન (વિટામિન B7) એ માત્ર એક વિટામિન નથી, પણ તમારા વાળ, ત્વચા અને નખ માટેનું મુખ્ય પોષક તત્વ છે. જ્યારે શરીરમાં તેની ઉણપ સર્જાય છે, ત્યારે તેની સીધી અસર તમારા લુક અને આત્મવિશ્વાસ પર પડે છે.</p>
               
               <div className="space-y-20 pt-10">
                  <div className="space-y-8">
                     <h3 className="text-3xl font-black text-red-700 underline decoration-red-200 decoration-8 underline-offset-8">1. વાળ ખરવા અને ડેમેજ થવા (Hair Fall / Hair Damage) 💇♀️</h3>
                     <p className="font-bold text-stone-800">બાયોટિનની કમીથી વાળ નબળા અને બરડ બની જાય છે.</p>
                     <ul className="grid sm:grid-cols-1 gap-6 text-xl bg-stone-50 p-8 rounded-3xl shadow-inner border border-stone-100">
                        <li>• ખૂબ જ પ્રમાણમાં વાળ ખરવા.</li>
                        <li>• વાળના છેડા ફાટી જવા (Split ends).</li>
                        <li>• વાળની કુદરતી ચમક ઓછી થવી.</li>
                     </ul>
                  </div>

                  <div className="space-y-8 text-left">
                     <h3 className="text-3xl font-black text-amber-600 underline decoration-amber-200 decoration-8 underline-offset-8">2. ત્વચાની ચમક ઘટવી (Skin Collagen) ✨</h3>
                     <p className="font-bold text-stone-800">બાયોટિન ત્વચામાં કોલેજન જાળવી રાખવામાં મદદ કરે છે. તેની ઉણપથી:</p>
                     <ul className="grid sm:grid-cols-1 gap-6 text-xl bg-stone-50 p-8 rounded-3xl shadow-inner border border-stone-100">
                        <li>• ત્વચા ફિક્કી અને નિર્જીવ દેખાવા લાગે છે.</li>
                        <li>• વહેલી ઉંમરે કરચલીઓ દેખાઈ શકે છે.</li>
                        <li>• ત્વચા શુષ્ક (Dry skin) થઈ જાય છે.</li>
                     </ul>
                  </div>

                  <div className="space-y-8 text-left">
                     <h3 className="text-3xl font-black text-emerald-700 underline decoration-emerald-200 decoration-8 underline-offset-8">3. નખ નબળા પડવા (Nail Health) 💅</h3>
                     <p className="font-bold text-stone-800">શું તમારા નખ વારંવાર તૂટી જાય છે?</p>
                     <ul className="grid sm:grid-cols-1 gap-6 text-xl bg-stone-50 p-8 rounded-3xl shadow-inner border border-stone-100">
                        <li>• બાયોટિનની ઉણપ નખને નબળા અને પાતળા બનાવે છે.</li>
                        <li>• નખનો વિકાસ ધીમો પડી જાય છે અને તેની સપાટી ખરબચડી બને છે.</li>
                     </ul>
                  </div>
               </div>

               <div className="mt-20 bg-emerald-900 text-white p-12 rounded-4xl text-center space-y-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                  <h3 className="text-4xl font-black text-gold">ઉકેલ શું છે? ✅</h3>
                  <p className="text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic opacity-90">બાયોટિનની ઉણપને દૂર કરવા માટે માત્ર બાહ્ય તેલ કે ક્રીમ પૂરતા નથી, તમારે શરીરને અંદરથી પોષણ આપવું પડશે.</p>
                  <p className="text-3xl font-black text-yellow-400 font-heading pt-10 drop-shadow-lg">
                    "આજે જ તમારા શરીરની જરૂરિયાત સમજો અને ફરી મેળવો એ જ જૂની ચમક!"
                  </p>
               </div>
            </div>
          </section>

          {/* Section 8: Image Gallery Sequence */}
          <section className="space-y-4">
            <h2 className="text-4xl font-black text-stone-900 text-center mb-16">વાસ્તવિક પરિણામો અને આયુર્વેદિક શક્તિ</h2>
            <div className="grid grid-cols-1 gap-12">
               {[
                 "AVvXsEgGVKDhftorD-jF3WhMWqJWNdJB9Gzy01-sCtA8i8nmPbddkoUvy68hJy2oulRGFvy5ZEY374RABNgKfXTwF38eOz-8dmIiSoDnbi1iafYLhDIPXQLCGapHLDC2wSTOnCFen_vOyvvB4wHGYDroZ8chZ7RcRAnrMPGWZx_pvTUryXG57mFAiLivgrS1LB6X/s1280/1003077588.jpg",
                 "AVvXsEjf8EVdXqW8rIjv_kzTb7ZgJe64Dfy3-JyudLj7hFSQfA9__K7AMD9muvt-aJM4ejebxA_0HEkh7seIwd7mQJT78DalUkByG_17vPa0cHjhRGCRh0BBDUJpVQ64oQERgPPg1w2Rx3LZ0Gj5tBMcQNzJJ0DECGAy2SzXAYJ6LI9eOhkBjyPewGAWS4V-sc60/s1280/1003077589.jpg",
                 "AVvXsEjxQwrjMy-qNTDMLEOPboT0xe_hLLXmycbg6O76GhOiZknOdOyY7E9OuTwg2RHFuppPZcBBcX6h5IBe4ayeP7H-gO6zPvOP-Qbtcj1vgS0Wc7DJSMXtqgVQqfujifbn0goAhzMPRnmJSvxTC4WOYVuhhBaYmzq_ML9RUNHi8okanT769nd-0XbCEIx5ULgF/s1280/1003077590.jpg",
                 "AVvXsEhDRgF7jbkN0KNuxxNjLLtRBnx_yROwJ2hfQZxW6WUnndG4eurRYb8A3XrojlaRAP450IBROos5WyoAuNM6Pa0SLGKfsHTiCcJkAr3D1JDccz7X3wuFTdAvcejbJiHYbSVMPR_7UkrlgA7oHMH8pcqGDVrIMrftT6dS-qiCbmQPgNNc51earOirnkZSzht5/s1280/1003077591.jpg",
                 "AVvXsEivQxI2PguGbhGmRt2Suzq_yqlVDKd4fHG5n43FltJjE5zGKL6UJbYr9bjS9I4BV7tL6Wi9g3KJYoy4BUFz7AKziD_r6TLCdiSj1vSMSsUXxUYsG3kzrVGa98mu075WPa4_5NKQ7ri1kRRDRlntfeKXCNq9URK1P2f-96RVM8Ghyv5lp8iT_wzBhgDKzrvm/s1280/1003077592.jpg",
                 "AVvXsEjaGEA_TJ-q-rpSujZMudIGnqsWktEL-RRrZQVNtar03-aPnxCOMyu4gJmWQemhMirvmhyphenhyphenT66uF0k67tsnYRghbWt_OB7fcABKRU-k1_fStqElKGR4gUSrTqHp-hkeCEfdTC-XFYeAT8h5YV-cXiY66YWAFcxHQx2cZyPnuZxwEK8C5BthU9hOYtcbpSUKm/s1280/1003077593.jpg",
                 "AVvXsEiFbCL3OhpBd6vUCWmyIhsYebfn0Rp3WFOgu0vyRHGIy3t3OfhcCE3VP8GroWu8I9xqp5ZKy_xn30A328C7r7UFK3vM7MtUlwSGpBDgOKJ5OonqYbhhSOU5jxR_DONXce5Olj0O8ahiiD6CElYSuvK0xkbVWB2n1K4G_qSUJCjqBbDH7pJt2Ja4XCT3FA_J/s1280/1003077594.jpg",
                 "AVvXsEhgEmFBjloB0Tl1wCpwsZZFiNVmlugDqSydT7qr3hD0c7UQg6o5TDFUum67uq3xXt3WwyEIVoi_YmJeclSRn7quE9VCuxnXJvsOwfMhaJ1ekMaw0O7EGkp0UocRh_SRAPwZPJjaOvzeDYwvYghhX7wHyVeVhAiBo52cqmfglivx-05TNJsFsbDNQjKLNcAd/s1280/1003077595.jpg",
                 "AVvXsEiau1PhLYXOnwPOpPANsYw3h-Rfhekp2vpvwXFu5ffbRcZftBsgUy_wO4V4s8kxLxI-RFGo-b-LVSaWYvHsJSrOXQe8cV2I5FKVhxTxavB_G-uJbNjZD8Pp3u8gniLKBEc2GcB3JPFK6dhkj5NHyDmF2et9vSsGDV0ENiBMKSizfoiAguXJIoZwq0fjYW1S/s1280/1003077600.jpg",
                 "AVvXsEiKDMw5gxJ4OUCOSW_i1ikEeKxo5Lecsr1caH2f0a4464hTVMIIiyaHVmzcilTp6SY1UXU60WfBI-iwGhCftfjKDiQmv9Ed0Htjv-6y1VE3r1QEi_E_g3t1J-6MhDcJ3TM_kzkzcdLlBbxMZFNCQfhrmxi7281BidP1F9GdWtRhz9nb9GbP3SHCdby-hhJw/s1280/1003077601.jpg",
                 "AVvXsEjD6j139cRJQ5-Rz5_Ki-MtoXcgaVOwHD5vOfnxwg8vXJSRHB25sxR1Uru5fIRYaRbLNUuIos0XmSKIHo6B0_iqFFZLpRGEE-OwM-DF6uGDThmRKij2ibAgUt8_sfAp2pL3F2s292E_-oNTJFo0s-epZ4BccE-ENTlh9xrOgVITQM0AYx4V0ePZ3jAm9VVE/s1280/1003077602.jpg",
                 "AVvXsEiby4Vf0VG_jY06ef0CjyEIkjrzLI5uNlTVQbspln1EG8eiARX9RvH2pQZLl0cvkjyBmCfjWfFml3iCcwV6Z6XnGrUDbR6EprvolXYOvTU3YGDDzLiHU8YQTevYLHfcT-L1y8L0Wx7RXolY2NR0wVAyWGKpC1mtmAnah6slkOeJpEzIry6nrgCbU0oIuGn3/s1280/1003077603.jpg",
                 "AVvXsEgqUk8qnZIt3JWjNPaUSCHvaoF_rlR1k6qhXCKih3uB8tkvVeeY7OQAq7Pj0yr59HuUkrXqwJqUMKTsJUZ_1YjP85qU9MU1-PMy4j_NPE71Z8TLxnaEUJsusmHAgzYpJRD0gr0v6wtAHQwHLLpR8sovbLNWRL4bsDG2tlp1SJe0W0uEaB66oMAgZv-3BXYe/s1280/1003077604.jpg",
                 "AVvXsEgUBl3jepNkkp3B2ATb2uHKHcsp_Vi3hjxregIFqjUuvmnDpATWkiGbtz0GkH7RjH9uibu5S39yJDvi5Hqi33kEMpUtk7tPTVPzXuCrzooCRkBDyUxQx8e6ybQY8sF2cPe5J-5ipSZPR3RG6p8GB4DN083fAi2Slbe5cFCEnvwOlayCZYW0Ttj-E7IjYf5U/s1280/1003077605.jpg",
                 "AVvXsEga2Y2_GUWz3KzIRCNKiWWZmTwwXz9s4cz5Tr5Aryvhbat8V_Vz_hBpH6fgh-lNBvgDXPVjnKmDPD91U2hHp2x7pd1XDQapDyZFk9zxPTIQYMUR-4NUaDI2d4Pmugwa9U-Hxim0POp5Mm0K0o7BmVvNsC5SA1UNzBEW993l6CpqJvN-Itk0su7_zlVla-Mz/s1280/1003077606.jpg",
                 "AVvXsEjX4pqpCZdFNWTNpduaQPr_1st1rt83UTx0FKHDAbOWt6JJL8-gsCEIyL2O0R79ywnbzgzUdr-_OfVm7MD4graLFb3AXNivNh65XHZ5z0ZWHXZva7XFD7d5cqKQbAAgbWyCYqyUyBxFvJhGGkzgK6HbLrYnqP-unAf76-A800M8mbc-BGaZyAQpmtdSH-WR/s1280/1003077607.jpg",
                 "AVvXsEhNgx52eDSaBKofRMtoZDvLcgozllWTxM-ZBIBokwzPAl6cAZDZT2dTmkvTBunsWMUOS6dzDm9NYW9RD7lzvtPE4BduAZXby43WepVlPo0eVZsNMoBOdE2vkz8jRYu5VNuZP_fP754sLYnFn6CsaUL2n4CLwZ9-7G21g3STMfUC24leSnccbFnahSgoYocA/s1280/1003077608.jpg",
                 "AVvXsEgz_Im_YHHtVKQkgOHIvDbYLApYXkAZqZdxMo52c1Riq3y3n523aPRUxXk8ECzmbpMlacDnQxeetjO8-Gryf-WYGLAi1gcoPu_ZQYsOkOkJsnukr9-rDxW3ORoVqYOaa-QPf_mXHH9pHcPYeC8jEDZB4J0Ibmmgs3VJECK64k1xTw7JfifmQ7NymTLp2bNZ/s1280/1003077609.jpg",
                 "AVvXsEgZJWLG4INuwN8u8a0b8FLhbXPVSlMidzlZIJH3JkUCVMGBEuMO27SjxePzeecI27X9_eK4G8Pd1gN_picGxQ7wEZeTEzNwKq-FymwYzrwMxoiPYmn4NE8AU-t7lWyx1zExNTj-_9cVOfsNMFBCJ7KegU_joCTthLuIw-tbj71xq7RzHRRQE_XSvDY0mQtT/s1280/1003077610.jpg",
                 "AVvXsEhvtnHum_3JYJ6aYSoWtEjtC4SWF-20Yj-2Sd5NuqIkXD_Y-oZeLsKf2U_0_4YqQ3MsXkkJ9SvHn4H8PyDpX4yartX-3Atg76ZCG6Tos7wvH3o5PqUsBhOfzqN7OYFOOIKngOz6-ttkgkt-PLUfhYk4ET5okvWzLqmAm3csbcz-RuOVucTxCraWYGv9Bh2A/s1280/1003077611.jpg",
                 "AVvXsEgPuvrnih0I25iuaOSDVl5VNRj4i2vZGw5pbHavrUrMrxIkgWWB8H2gyNKhggs6TtDEFMF6NIgnhTdZ-dHHw37_m121w77qtjNKYtcMl2dUw5BRw41qUptssMVYpZjfB2IqgtMGDxGzk6kIzOolG25A_xA7UBvN_dDvqQOKJdDub223K-DVtKpSH9w_se6r/s1280/1003077612.jpg",
                 "AVvXsEgEBy0fa0Wm1u5NBikOKnqEu_xt61aQklbcgwgswRLPJakDmLolhL5ygflG2-W7ZErNzHHgyXaAJT-cuYy8iLBTQs2ED_XhsZWKathMpqC9IrFHu7CXYCOKogw3uvP1IoKbas2XqYC3UYKYH7Ue-mvpmEW-hoYSeNoDDYMjNk5XUDr26BI-M1Ke1XcH6ABB/s1280/1003077613.jpg",
                 "AVvXsEiVcLIv4qo1LSEtwix0lpWBqgh6M8PVrp5qtRXWtos_NTF_F0jdSRD_uJ1oPRG_88Q2pUpHWvUSWQSWY5dpahjTuCVlTo1NvwFGR4zoILcRzniQp4P4J2Cj06KYt2zt_Kf7FXyU2Ut16WHz4qeGvrE8DDx3SrA2YObKK07fqj0LvnhuB0ySzXAYJ6LI9eOhkBjyPewGAWS4V-sc60/s1280/1003077614.jpg",
                 "AVvXsEhojzkjb2LIeVWRsBejBRNKfp17ay0ZotbvOTW4sUT8ADDlHudwwU4eYXHbVWpighHR6v884tqgIJu0PvhLDWi1rSLDeShvCqF9s14bsc1VwZx8Raxsg_xL7FEqTTDj1-Q6l_2ArE7VhE0pllrLBnuByAnnJuXJfSaiHWTClAYMDU9droEXCCjaybCLO9oD/s1280/1003077615.jpg",
                 "AVvXsEjYd4Nw3T0LAL5bCufknUZM9UJ3kPaZlqNmcf9jboIp3syN0IJkNktMSolgg5VxCQXzL2GIUvU4Xf1bPa5-7L5Dt7Q1X0eqYzjuxtZMz1bHV8t8qbdaORfXdF49g0ZnTJ7_7w7ISIYvUHMZK5Odb3OVCnGNY9CKS1OGiS6d4h9ueZlfTXWgxDqLmLYzfOCe/s1280/1003077616.jpg",
                 "AVvXsEgp5gtphTJMhqk6kJBeNpSNAFJ1P6iyIBvGwmCt4QcD0M-ry_1bPlu9qR5MPrSOObssMdTZV91p_7aMBj7xpaUhh8n0d-EXzMbxz6JuCIH6OOL_bqm-SeREaIiiw9oO0GGw90mIO4HQbQAOQI5UM0mPkVWMFsGgD_cVttMicmXxJ57oGWHWi7p75cBpRk-z/s1280/1003077617.jpg",
                 "AVvXsEiDgUveGCZHtfmt6qVoyUiGeUBoch4J4WO81EXgVffqEr5H5RHOSOy7dG5WwuPH19y1UHr_333uJnShz0Tqb78BMQyjsbAO228igXl0rAh-Li50lLZ6zyPLhbJjnKGnhVT6LcvYXz0_pU86JSbth85m37lr8cW5snn4xZHGc8UW6I0UWGEbaER0kTX9CeDZ/s1280/1003077618.jpg",
                 "AVvXsEjYHmzMbTFPGCoLEtOA8GY8tV2OYM-pQCaMCan8bAqDB09IB_yR5SbDg_A62GGbSW8mn9esQiDhzoLnvTLQOB5nB9drKqT042run6SOawf-PlgESaomW2zYVVLVn0-9JuR7IHUvn7_qHt7taMEJA92f-JpCe71TCR27Vld-KdM8TEjTImxFo_c2fCRXcDYa/s1280/1003077619.jpg",
                 "AVvXsEjEfae3XHQZz_r3UTKAwF8YMvys9LxaF4qVjpfXleCHZlZ4Z7H52Pj2WKkL95IPoqoqa2Ky-vauEgy892AW6ltLoIA8V7aDO7LyhvYRTy1RCOLblnqMmZqID0MwHlbaVLSiBY10FbDM7v_tm8XcVAJlYI1I14DYwnopLzt42JVvoC3T506_e2X4M_S9JIau/s1280/1003077620.jpg",
                 "AVvXsEgTjVW6PcTXIEqFDt06RBNpE61uV0EdFuRwKz6H4bzvbjTIG3AWvD0UrvLiTk7RtMyQ5jFOvO_pd57J1-8UdWCCMEFIWHzYmsERnPDlFee4yGbnLTVtnYKNx3FPX9-HWecvZnOVwe8-lj1dTwsHfZfpomwMfAv9FZicAZ6hriTIVRVVCt43jTcW5yWuuJ9K/s1280/1003077621.jpg",
                 "AVvXsEh-n1Zkf3H7M6XTQVQHyVr6yYM6qYjD-EJiZdpe3Mxda0KhMWt65PoAv4amRfEtPgECGpdmJk1v7uJK3cJAjbEJgYxBqJuaBhq-WvMBe_r2BVhgrbNwGNKO55ZR8Rdcoy1USr_c3tsMKTnkEmGmttF9oxB3CGAf8xR4q3VZUnrUSWOR9UQG8Pyl9k-LY8zu/s1280/1003077622.jpg",
                 "AVvXsEh13F8hsAOSfPOTjz4N72LsJ7LHaRX4muQ7HIrgZtuNAjqSFHVJcpzO1zn9mP2Iw3FZxGVXj8an0U0bo8Cxaa0_b-7e3B-4RPLoJLX9Gm0_BhnKKtfEihHDC4WOLn_0FWPtRZgBAWsC5umJdy4jqizOZDKE6ns9s7UAz3Vmt9yl98khjMEyeDCryWDIMDOC/s1280/1003077623.jpg",
                 "AVvXsEgJ6kBMilHGyYit21byrMhnZy89eWZ7L6q5YhhHuOHe83jFG1S3yKYbc86q3e-gegpGvoMjRyDtzsKIMO4-yP6fpTBmyfjHBuTG84rE6qW4DOYzMsVCPplGJwwuIJk8Xvf9_7LgUtHryWtGt4XQIMq-tUXEGurhdnCnYmLazvnyyTYEDcDau2c1m1CDTaxb/s1280/1003077624.jpg",
                 "AVvXsEj7Yv_8lGcodQhibso5T03kOHi2eV7GyjhI3PkgTHXQ9-uKV3cfyby9sSgeeCsGuxtLKao8i02Ph2JUH_r5MPZuHW7Ajb3adktHrqo8-2gILCB4pM6fKvdtzBssheBbDwneGt2HremGAjz6kiyOcbnXoCorJqpZxoO2-ATFKrEEfZu4a7memv2jbVmZbsOQ/s1280/1003077625.jpg",
                 "AVvXsEjkBwv1ZYtyvgz-qpTsGkTDPc8QBybHoH6RBlm-bNau0qokGN2zQiLw3NIEgVLTnPoKjp3V-axgu1WJXSeXWRvjONqWE3DJjIBlkk5j-EgrLRKPbwN3pYeKH09CyhTs4xIUZC7jlFnCf9J-uPxvdOkklU17v9rZ22aNXAvIpEEdS6WgTjiiYYhG9UImkiHN/s1280/1003077626.jpg",
                 "AVvXsEiE5ZSC5sy51q5_YLKFqjqsQVanhqle_ilS5qcMdmHbmypTxbD8t6SQrRCAgKjQc1hkI8QFPli7vW2McdMwBMmc3J1GFZhdQ7Rr160joH1xQwpz7wNcvkvWe0prmfZPExlBi8OcRExmI2NiJXbM90FBIXzNM9vyaLy62aTH0xIcS5bq6_lAiAu7UTTXYh78/s1280/1003077627.jpg",
                 "AVvXsEgG-RgK1mgzlPCVwhJFaHKKXSNnBBmqNTgA0prpCtwFQWwjOfhDHHAKrV_FtXi4QJMowOeGZD36dsNlcWYcrh5n-bPQe_C1f7M-hasSt8wkOR197RDrYXVLEZGhD0AmRYvE1PQ5A7gTLZSEzpgqp4ngZyB58KA0KIKoxonuD2yedvKhjJjBYjniXvpBDq1b/s1280/1003077628.jpg",
                 "AVvXsEisu1YQao9UF24WKKAvkqlMRMggBKSjdEOJui82-6GmzNhNbQCPYXXI3JuLR-K4DEN5Oz1JeimXSHfyBJOmSsqkYhY8llNEc5SZQIjHZLp6EnHByXxmPwglw-vcJJN2zQ7HucZsR9sbnT7YK2NYUh-YURCk4pb2JaAMjaxF1mpAU1DXX7o12DWNkLjhP424/s1280/1003077629.jpg"
               ].map((imgUrl, i) => (
                 <div key={i} className="rounded-4xl overflow-hidden shadow-2xl border-2 border-stone-100/50 bg-white group hover:shadow-emerald-200 transition-all duration-700">
                    <img 
                      src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/${imgUrl}`} 
                      alt={`Impact Step ${i+1}`}
                      className="w-full h-auto transition group-hover:scale-[1.01] duration-700"
                    />
                 </div>
               ))}
               
               {/* GIF and Animation Section */}
               {[
                 { src: "AVvXsEjBaJNc1RyUkt4uLGc3PEphMMIruY74xON8Pv400eSCLOt9jUl6DZWBAuROIHLygmoQsZvn923nWW9onhjBEwvq4XOyuvlJlz8S2fDYK-2eonMeb57MkSdAOCUjeDHooWvR93_RTaosgDZL_TMupPqGh58Mf7SSMaB0cX_FrybBFGHgSRZN2ICff9LwvRdy/s400/1003065750.gif" },
                 { src: "AVvXsEjR3r0AqeXNJMJ0dwmndUdNVp2Q0hA5NhDk3-0walqaMDXNtTNtTfiSbyLJR4DfudtFSRMYGHvDwgqJvOhF_LeuBC-8vGLdwoKTgS2HHG5zB69MQbm6ZOWvqa0USA54kPQ2_7YH4bAUgwIT9iKNB30kJ4mX_ychd_g4lvJZqbWFk5UsNIb_l4WR2SoiozFD/s1280/1003077630.jpg" },
                 { src: "AVvXsEiMHSKL4eNOWo-EnyTeuNC8GdXmZTbeKBRfVA0WeFdbXJOCY7zk6UO9__kAS0jDXLYO_Rkm3ee681eibKkbbuPt9VNbH8kdMHbGIoT9E0fShhfj-JhLuCsp1IEVuU5SuXxAzDs_JmG60pc3JcQvtTzlNY-WTdY_UQFF1nMZd1348kt1evF4RznYhjfs3XQ5/s1600/1003065751.gif" },
                 { src: "AVvXsEipTBaXQh9eH8cQDAoYTeKAOiM3jAXcs6d5DO08FnuwmMRsVdB1-2LcvyOhYgS_KjL8Qc8QlOb4JaumNnGCVhSWejf67V4f6aw4s7uNSJPosd7Nqsgx3-0iTH_6CgjjpPKY62r0kxXcekNg6m5U_54F1cQfTOcB3mtDgslVFKh1NlT8SYmZLJ6RRi5R530k/s1280/1003077631.jpg" },
                 { src: "AVvXsEiDG0xqCqlxtuE_IgqjFG51JsqPvJwjpZN_8rbVmb1qOv8sFITrjrJD8aOUc2WPaMvT2PwvS2Ek83AmSECfp6ELahyphenhyphen5QbDRNA1swJUFTIl6fovMCMSEypz9A_o85e-yVtgfiFLmZxE4_e74-xKoLq024DKj2PaLKs_frL8Nt2lVQVTV9cMHB7hDZnKs2uVd/s1600/1003065749.gif" },
                 { src: "AVvXsEgVkNgdgBTd1rVCJ-yyvFJUI7uzpjgG6pJ1ukELt_fedDtwOwvXn9VX9Gs0xq6VBzG7bL_37i3xNVUoX7xmej579lTblyynXRZwam6C3IENMuZOrZopbx8faXHF7JzvuCcWJD50cTfv_L-XeYpph08zUZ9nJp0zez22Ee2t3xLJgaIgqv4aUjNIiKLl9ORS/s1280/1003077632.jpg" },
                 { src: "AVvXsEgZFpRojvRfHAFqRTHZbkWY4Wo59KT-3CHuB7lLx-N5jCC8Ke9D_rsuQ1T_AC_Cd5VYvz9ZY0rMhhSZ6IYDsZkra4ByXU_D0kFvM5N-BCHtc2P8rleWCWwmbs_gAQ1wQi7EfKOIL8FSWHbJuhl7PoQnDhFFMxgS4HHH7yjVn3nZZXRKglYgXbVYnaEVynMt/s320/1003065748.gif" },
                 { src: "AVvXsEhzX11aHkM7VbgfR4mYp5a9UioaWfR4qcA7D2pAFvir1A5ZGhcQyGDsmr56Cg2E4EEpyFDs54WmC0ivvLYVMyFvvVfQiDxIsyW_HjbF12Mud2KOz0CdHhwRJJkvez5A7SJZg2uYZjfKN1Lc_Gu58RwKPfeAs8raicMaihVdOwCNEw-1ss8OmFC8jEAtnpm_/s1280/1003077633.jpg" },
                 { src: "AVvXsEja7SeelICgNejfvFqNdVGdChyphenhyphenwboe1HMslj-gbNutfhRKJhwFMpLi8AhOB1RUpQopJrcThWUL3kBxlS6gc7A2vf7HbC0F2M4DcaCGzflxxmNZ-wLtyUdgq5LTlWWRKycmANTJocgytomUe5L78tlcpE-CT70tIKqP_P5t59P4t5BHCISLbpxNT77wY9Ua_/s360/1003065747.png" }
               ].map((item, i) => (
                 <div key={i} className="flex justify-center p-6 bg-white rounded-4xl shadow-2xl border border-stone-50 items-center">
                    <img 
                      src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/${item.src}`} 
                      alt={`Visual Result ${i+1}`}
                      className="rounded-3xl max-w-full h-auto shadow-lg"
                    />
                 </div>
               ))}
            </div>
          </section>


          {/* Section 9: Advantages */}
          <section className="bg-emerald-900 text-white p-12 md:p-20 rounded-[4rem] shadow-4xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] -ml-40 -mb-40"></div>
             
             <h3 className="text-4xl md:text-5xl font-black mb-16 italic text-yellow-400 text-center">અમારા ફાયદા:</h3>
             <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-2xl font-bold">
               {[
                 "1 વાળ ખરતા અટકાવે: મૂળને પોષણ આપીને વાળનું ખરવાનું બંધ કરે છે.",
                 "2 ખોડાથી મુક્તિ: સ્કેલ્પને ચોખ્ખું અને હેલ્ધી રાખે છે.",
                 "3 કુદરતી ચમક: પાતળા વાળને ઘટ્ટ અને રેશમી બનાવે છે.",
                 "4 કોઈ આડઅસર નહીં: ૧૦૦% નેચરલ અને કેમિકલ મુક્ત.",
                 "5 કોઈ હાનિકારક કેમિકલ વગર, માત્ર જડીબુટ્ટીઓની શક્તિ.",
                 "6 પાતળા વાળને ફરીથી ઘટ્ટ અને મજબૂત બનાવો.",
                 "7 હજારો બહેનો અને ભાઈઓ એ અમારા આયુર્વેદિક કોર્ષ થી ફાયદો મેળવ્યો છે"
               ].map((benefit, i) => (
                 <li key={i} className="flex gap-6 items-start bg-white/10 p-8 rounded-4xl backdrop-blur-md border border-white/5 hover:bg-white/20 transition-all group">
                    <span className="shrink-0 w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-emerald-900 text-3xl font-black group-hover:scale-110 transition-transform">✓</span>
                    <span className="leading-tight">{benefit}</span>
                 </li>
               ))}
             </ul>
          </section>

          {/* Section 10: Certification */}
          <section className="space-y-12 text-center py-20 border-t-2 border-stone-100">
             <h2 className="text-3xl md:text-5xl font-black text-stone-900 underline decoration-yellow-400 decoration-8 underline-offset-[16px]">Our certification :-</h2>
             <div className="flex justify-center pt-10">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEc9r0YjlslgT7HJkArSJoINKZKPNN3Ar7e7j2HYzDZli7mKqd5GTHU-7fNArQL4rA38KgBQ5y5KwRvsAT8qeBhiYlkNI_AFoSgvuD-RA8iwHJcEC1taOHkcBylGSFtD4KWJJL-LRWwo2tYlbgich1q5GyJPj2fSJbeLXu2XCU_-oR2lk0iYhMYR1lTDM5/s1280/1003080746.jpg" 
                  alt="Certified Solutions"
                  className="rounded-4xl shadow-4xl border-8 border-white max-w-full md:max-w-4xl"
                />
             </div>
             
             <div className="pt-32 space-y-12">
               <h2 className="text-3xl md:text-5xl font-black text-emerald-900 leading-tight">"ખરતા વાળને કાયમી અલવિદા કહેવા માટે અત્યારે જ અમારો સંપર્ક કરો!"</h2>
               <div className="flex flex-col items-center gap-6">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="flex items-center gap-6 bg-emerald-600 hover:bg-emerald-500 text-white px-16 py-8 rounded-3xl text-3xl md:text-4xl font-black shadow-2xl hover:shadow-emerald-500/50 transition-all active:scale-95 group"
                  >
                    <FaWhatsapp className="text-5xl group-hover:rotate-12 transition-transform" />
                    <span>96871 05624</span>
                  </a>
                  <p className="text-2xl text-stone-500 font-medium italic">કોલ અથવા વોટ્સએપ કરો: આયુર્વેદના આંગણે</p>
               </div>
             </div>
          </section>

        </article>
      </div>

      <Footer />
    </main>
  );
}
