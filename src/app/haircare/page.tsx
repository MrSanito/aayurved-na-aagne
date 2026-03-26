"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

// ─── Reusable image component ────────────────────────────────────────────────
function HairImage({ src, alt = "", className = "max-w-full" }: { src: string, alt?: string, className?: string }) {
  return (
    <div className="flex justify-center my-10">
      <img
        src={src}
        alt={alt}
        className={`w-full ${className} h-auto block rounded-2xl shadow-2xl border border-stone-100 transition-all duration-500 hover:scale-[1.01] hover:shadow-emerald-900/10`}
      />
    </div>
  );
}

export default function HairCarePage() {
  const WHATSAPP_LINK = "https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B9%E0%AB%87%E0%AA%B2%20%E0%AA%95%E0%AB%87%E0%AA%B0%20%E0%AA%B5%E0%AA%BF%E0%AA%B7%E0%AB%87%20%E0%AA%9C%E0%AA%BE%E0%AA%A3%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82";

  return (
    <main className="min-h-screen bg-stone-50/30">
      <Navbar />
      
      {/* Premium Header Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-linear-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gold/40 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 font-outfit tracking-tight">આયુર્વેદના આંગણે</div>
          <p className="text-lg md:text-2xl font-light italic opacity-90 font-body">વાળ ખરવાની ચિંતા છોડો, આયુર્વેદ સાથે નાતો જોડો</p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl -mt-10 mb-20 relative z-20">
        <article className="bg-white rounded-3xl shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
          
          {/* Main Container */}
          <div className="p-6 md:p-12 lg:p-16">
            
            {/* Title Block */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight font-heading">
                ખરતા વાળનું કાયમી ઉપાય
              </h1>
              <div className="flex items-center gap-2 text-stone-500 font-medium">
                <FaCalendarAlt className="text-emerald-600" />
                <span>March 24, 2026</span>
              </div>
            </div>

            {/* Opening Quote */}
            <blockquote className="bg-emerald-50 border-l-8 border-emerald-700 p-8 md:p-10 rounded-r-2xl mb-12 italic text-emerald-900 text-xl md:text-2xl font-medium leading-relaxed">
              "શું તમે પણ ખરતા વાળ, ખોડો, પાતળા વાળ, અકાળે થયેલ સફેદ વાળ થી પરેશાન છો?"
            </blockquote>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-stone-700 font-body mb-12">
              <p>રાસાયણિક શેમ્પૂ અને તેલ ક્યારેક ફાયદા કરતા નુકસાન વધુ કરે છે.</p>
              <p>અમારું 'આયુર્વેદના આંગણે' હેર સોલ્યુશન પ્રાચીન જડીબુટ્ટીઓ અર્કથી બનેલું છે. આ માત્ર ઉપરછલ્લો ઈલાજ નથી, પણ મૂળમાંથી વાળને મજબૂતી આપે છે.</p>
            </div>

            {/* Image 1 */}
            <HairImage 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2eNvLsZKhfJp7zANYAl2dWaIAC_CgPkvUxMfcAe4q3SvBHz5T6w6WJQUo0jVHF9DIsMFGmtiLUlOG6-HbAmUDgkBETgscg0WoTNKLPuq0fI-FOvt2fh51yR_9Cb__I8fNxL0agBtBqpX0GOFJTqH_ayIufD3I80tWeLdGgjQSYYRQ6ZYvLGHTenP4G_bW/s1280/1003077581.jpg"
              alt="હેર કેર સોલ્યુશન"
            />

            {/* Section 1 */}
            <section className="mt-16 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading">
                કાંસકામાં આવતા વાળ જોઈને ચિંતા થાય છે? હવે અટકાવો કાયમી ધોરણે!
              </h2>

              <p className="text-lg md:text-xl text-stone-700 mb-8">
                તમારા ખરતા વાળનું આયુર્વેદિક અને કુદરતી નિવારણ અહીં છે.
              </p>

              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 mb-10 shadow-inner">
                <p className="font-bold text-stone-900 mb-6 text-lg md:text-xl">
                  વાળ ખરવા એ માત્ર એક સમસ્યા નથી, તે તમારા આત્મવિશ્વાસને પણ અસર કરે છે.
                </p>
                <p className="text-stone-700 text-lg leading-relaxed">
                  બદલાતી જીવનશૈલી, પ્રદૂષણ અને કેમિકલયુક્ત પ્રોડક્ટ્સ તમારા વાળને મૂળમાંથી નબળા બનાવે છે. જો તમારા કાંસકામાં પણ આ રીતે વાળ ગુચ્છામાં આવતા હોય, તો તેને અવગણશો નહીં.
                </p>
              </div>

              <div className="bg-emerald-900 text-white p-8 md:p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold">અમારું ૧૦૦% આયુર્વેદિક સોલ્યુશન:</h3>
                <ul className="space-y-4">
                  {[
                    "વાળનું ખરવાનું 90 દિવસમાં ઓછું કરે છે.",
                    "સ્કેલ્પને ઊંડાણપૂર્વક પોષણ આપે છે.",
                    "નવા વાળ ઉગાડવામાં મદદરૂપ થાય છે."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg md:text-xl">
                      <FaCheckCircle className="mt-1.5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2 - Why Hair Falls */}
            <section className="mt-20 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading">
                તમારા વાળ કેમ ખરે છે? જાણો સાચું કારણ!
              </h2>

              <p className="text-lg md:text-xl text-stone-700 mb-10 leading-relaxed">
                માત્ર મોંઘા શેમ્પૂ બદલવાથી વાળ ખરતા અટકશે નહીં. પહેલાં એ જાણવું જરૂરી છે કે સમસ્યા અંદરથી છે કે બહારથી.
              </p>

              <HairImage 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikLERvkSU-G2sJbrVP0lKs3Uc-I-N4pt8vE9YpoxJU_B0haBlWboCTzuXDndY0D7syESghTQWb63GD6yHCdwc6fxLCb0nQdtMbN67z8h71SfoZVpnirGB4R-24d-FXtF9Gp2d-I52uiD6PPRhIttCSvXMdwWRafc-4USb3qlngrZcrYeivpoR8W5OYdnRm/s1280/1003077582.jpg"
                alt="વાળ ખરવાના કારણો"
              />

              <p className="text-lg md:text-xl text-stone-600 italic leading-relaxed text-center max-w-2xl mx-auto mt-8">
                ઘણીવાર આપણે મોંઘા શેમ્પૂ અને કન્ડિશનર બદલતા રહીએ છીએ, છતાં વાળ ખરવાનું બંધ થતું નથી. કારણ કે આપણે તેના 'મૂળ કારણ' સુધી પહોંચતા નથી. ચાલો જાણીએ કે તમારા વાળ કેમ ખરે છે અને આયુર્વેદ તેમાં કેવી રીતે મદદ કરી શકે છે.
              </p>
            </section>

            {/* Section 3 - Hair Nutrition */}
            <section className="mt-20 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading">
                વાળનો સાચો ખોરાક: જાણો કયા વિટામિન્સ છે જરૂરી!
              </h2>

              <HairImage 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5HN9Rp78mbAAJ-2QoT42_LCtoAVYy4qKg8L3yhWoHosif_Dv5CIAMN4u3huvLzlko_Ig7wT9Pldp4RoX-kWqp_BkoLG0HlbBxio7S42ytqP9gTXx7lrDT1boBD-nTY7Vs5tqzKwFwyt9kOoNhZ1njGeXKZ1d19OLn0VBdD98lhfG5vGnLXWQirnG4Qu4t/s1280/1003077583.jpg"
                alt="વિટામિન્સ અને પોષણ"
              />

              <p className="text-lg md:text-xl text-stone-700 mb-10 text-center">
                જેમ શરીરને ટકવા માટે ખોરાકની જરૂર છે, તેમ તમારા વાળને પણ જીવંત, લાંબા અને મજબૂત રહેવા માટે ખાસ પોષક તત્વોની જરૂર પડે છે.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                  <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-emerald-600 rounded-full inline-block"></span>
                    વિટામિન્સનો પાવર :
                  </h3>
                  <p className="mb-6 text-stone-600 italic">અમારા આયુર્વેદિક તેલમાં કુદરતી રીતે આ તત્વોનો સમાવેશ થાય છે જે તમારા વાળના મૂળ સુધી પહોંચે છે:</p>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <strong className="text-emerald-900">વિટામિન A & C:</strong>
                      <span className="text-stone-600">સ્કેલ્પમાં કુદરતી ઓઈલ જાળવી રાખે છે અને વાળને તૂટતા અટકાવે છે.</span>
                    </li>
                    <li className="flex flex-col">
                      <strong className="text-emerald-900">B7 (Biotin) & B12:</strong>
                      <span className="text-stone-600">નવા વાળ ઉગાડવા માટે અને વાળની જાડાઈ વધારવા માટે સૌથી મહત્વપૂર્ણ.</span>
                    </li>
                    <li className="flex flex-col">
                      <strong className="text-emerald-900">વિટામિન D & E:</strong>
                      <span className="text-stone-600">સૂર્યપ્રકાશ અને પોષણની ગેરહાજરીમાં થતા નુકસાન સામે રક્ષણ આપે છે.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                  <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-emerald-600 rounded-full inline-block"></span>
                    જરૂરી મિનરલ્સ અને પ્રોટીન :
                  </h3>
                  <p className="mb-6 text-stone-600 italic">વાળની આંતરિક રચનાને મજબૂત કરવા માટે:</p>
                  <ul className="space-y-4">
                    <li className="flex flex-col text-stone-600">
                      <span className="flex items-center gap-2"><strong className="text-emerald-900">Iron (આયર્ન):</strong> વાળના મૂળ સુધી ઓક્સિજન પહોંચાડે છે.</span>
                    </li>
                    <li className="flex flex-col text-stone-600">
                      <span className="flex items-center gap-2"><strong className="text-emerald-900">Zinc (ઝિંક):</strong> હેર ટિશ્યુના રિપેરિંગમાં મદદ કરે છે.</span>
                    </li>
                    <li className="flex flex-col text-stone-600">
                      <span className="flex items-center gap-2"><strong className="text-emerald-900">Protein (પ્રોટીન):</strong> વાળ મુખ્યત્વે પ્રોટીનના બનેલા હોય છે, જે તેમને મજબૂતી આપે છે.</span>
                    </li>
                    <li className="flex flex-col text-stone-600">
                      <span className="flex items-center gap-2"><strong className="text-emerald-900">Essential Fatty Acids:</strong> વાળમાં કુદરતી ચમક અને નરમાશ લાવે છે.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-linear-to-r from-emerald-100 to-teal-50 p-8 rounded-3xl border-2 border-emerald-200/50 shadow-lg">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6 font-heading">"આયુર્વેદના આંગણે" કેમ પસંદ કરવું?</h3>
                <p className="text-emerald-800 font-bold text-xl mb-4 italic">"અમે માત્ર તેલ નથી આપતા, અમે તમારા વાળને જરૂરી સંપૂર્ણ આહાર આપીએ છીએ."</p>
                <p className="text-stone-700 leading-relaxed text-lg">
                  અમારું મિશ્રણ એવી રીતે તૈયાર કરવામાં આવ્યું છે કે તે આ તમામ વિટામિન્સ અને મિનરલ્સનું પોષણ સીધું તમારા વાળના મૂળમાં પહોંચાડે છે. કેમિકલ મુક્ત પદ્ધતિથી બનેલું આ સોલ્યુશન તમારા વાળને અંદરથી પોષણ આપી બહારથી સુંદર બનાવે છે.
                </p>
              </div>
            </section>

            {/* Section 4 - Hair Loss Stages */}
            <section className="mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading">
                શું તમારા વાળ પણ ખરવા લાગ્યા છે? જાણો હેર લોસના 7 મહત્વના તબક્કા
              </h2>

              <HairImage 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1BMQ1T17qol1LCTkx3Li1pHupvc6-DsVJa_GiImicIwC_2KWpJpPQj3WU_Mes05yaJK0LbyNS_bzkXK4vnQ6SUYfXwUoLxA9F9euz0xuQImVU_pxQfXF7MsDvVUbkOKjVks4WD2vFYZrcfbzfZ1iEIq9mir-NQbyGWtMvl5zuTpOXoRf7caSq-vkpbd6k/s1280/1003077584.jpg"
                alt="હેર લોસ સ્ટેજ"
              />

              <p className="text-lg md:text-xl text-stone-700 mb-10 leading-relaxed">
                વાળ ખરવા એ માત્ર વૃદ્ધાવસ્થાની નિશાની નથી, પણ તે બદલાતી જીવનશૈલી અને આનુવંશિક કારણોનું પરિણામ હોઈ શકે છે. પુરુષોમાં જોવા મળતી ટાલ (Male Pattern Baldness) ને સમજવા માટે 'નોરવુડ સ્કેલ' (Norwood Scale) ખૂબ જ ઉપયોગી છે.
              </p>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-xl mb-12">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-emerald-900 text-white font-outfit">
                      <th className="p-6 text-lg">સ્ટેજ</th>
                      <th className="p-6 text-lg">શું થાય છે?</th>
                      <th className="p-6 text-lg">હાલત</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-700 divide-y divide-stone-100">
                    {[
                      { s: "સ્ટેજ 1", d: "શરૂઆત, દેખીતી રીતે જણાતી નથી.", h: "સામાન્ય" },
                      { s: "સ્ટેજ 2", d: "કપાળના ખૂણે હળવાશ.", h: "શરૂઆત" },
                      { s: "સ્ટેજ 3", d: "'M' આકાર સ્પષ્ટ અને વાળ પાતળા.", h: "ચિંતાજનક" },
                      { s: "સ્ટેજ 4", d: "પાછળના ભાગે (Vertex) ટાલ.", h: "મધ્યમ" },
                      { s: "સ્ટેજ 5", d: "આગળ અને પાછળની ટાલ વચ્ચેનો ગેપ ઘટે.", h: "ગંભીર" },
                      { s: "સ્ટેજ 6", d: "ઉપરના ભાગમાં ખૂબ ઓછા વાળ.", h: "ખૂબ ગંભીર" },
                      { s: "સ્ટેજ 7", d: "સંપૂર્ણ ટાલ, માત્ર કાનની ઉપર વાળ", h: "અંતિમ" }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'}>
                        <td className="p-6 font-bold text-emerald-950 whitespace-nowrap">{row.s}</td>
                        <td className="p-6">{row.d}</td>
                        <td className="p-6">
                           <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${
                             idx < 2 ? 'bg-emerald-100 text-emerald-800' :
                             idx < 4 ? 'bg-amber-100 text-amber-800' :
                             'bg-rose-100 text-rose-800'
                           }`}>
                             {row.h}
                           </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-8 border-gold p-8 rounded-r-2xl mb-12 shadow-md">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">શું તમે સ્ટેજ 2 કે 3 પર છો?</h3>
                <p className="text-xl text-stone-700 mb-6">તમે હજુ પણ તમારા વાળ બચાવી શકો છો.</p>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">શા માટે આ સ્ટેજ સમજવા જરૂરી છે? 🧐</h3>
                <p className="text-lg text-stone-700 mb-6">
                  તમે જેટલા વહેલા સ્ટેજ પર હેર લોસને ઓળખી લેશો, તેને રોકવો એટલો જ સરળ રહેશે. જો તમે સ્ટેજ 2 કે 3 પર છો, તો યોગ્ય ટ્રીટમેન્ટ અને આહારથી તમે તમારા વાળ પાછા મેળવી શકો છો અથવા ખરતા અટકાવી શકો છો.
                </p>
                <p className="font-black text-emerald-900 text-xl text-center md:text-left">
                  યાદ રાખો: સમયસર લીધેલો નિર્ણય તમારા લુક અને આત્મવિશ્વાસને બચાવી શકે છે!
                </p>
              </div>

              <p className="text-lg md:text-xl text-stone-700 mb-6">અમે તમને કેવી રીતે મદદ કરી શકીએ?</p>
              <p className="text-stone-600 mb-8 italic text-lg leading-relaxed">
                અમારી ક્લિનિક/પ્રોડક્ટ્સ તમને આ સમસ્યામાંથી બહાર લાવવા માટે આધુનિક ટેકનોલોજી અને કુદરતી ઉપચારોનું મિશ્રણ પ્રદાન કરે છે:
              </p>
              
              <div className="bg-emerald-50 p-6 rounded-2xl mb-10 border border-emerald-100 flex items-center gap-4">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 shrink-0 animate-pulse"></span>
                  <p className="text-emerald-950 font-medium">નેચરલ સોલ્યુશન્સ: વાળને જડમૂળથી મજબૂત બનાવતા તેલ અને શેમ્પૂ.</p>
              </div>

              <p className="bg-amber-100 text-amber-900 p-6 rounded-2xl text-center font-bold text-2xl shadow-lg animate-bounce">
                આજે જ તમારા વાળનું પરીક્ષણ કરાવો!
              </p>
              <p className="text-center italic text-stone-500 mt-6 text-xl">શું તમે સ્ટેજ 2 કે 3 પર છો? મુંજવશો નહીં,</p>
            </section>

            {/* Section 5 - Products */}
            <section className="mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading text-center">
                ખરતા અને સફેદ વાળને કહો અલવિદા! મેળવો મજબૂત અને કાળા વાળ કુદરતી રીતે 🌿
              </h2>

              <HairImage 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIvWvb31MrndYiL3N1PpZChL0inZCvdvZ7Ain2Xwk-xeLZHInhOisKekwI-0mN6Yoe5slCZ6e2ifgyNHWjXYZiidZk0RGaU7BRfrDpTEZZgZuvflKGnQLFdV55Z3_TEIyNc3TY5Orn7QYahzpU1eCjDc0lQ3BrzUl365fmGEXKOkcnh7BB_GJPV6ozjwmf/s1280/1003077585.jpg"
                alt="પ્રોડક્ટ્સ રેંજ"
              />

              <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
                <p className="text-xl md:text-2xl font-bold text-stone-900 leading-tight">
                  શું તમે વાળ ખરવા (Hair Fall), ટાલ પડવી (Hair Loss) અથવા નાની ઉંમરે સફેદ થતા વાળ (Grey Hair) થી પરેશાન છો?
                </p>
                <p className="text-lg text-stone-700 italic">
                  હવે ચિંતા છોડો! અમે લાવ્યા છીએ ખાસ Unique Formulation જે તમારા વાળને જડમૂળથી પોષણ આપી તેને ફરી જીવંત કરશે.
                </p>
              </div>

              <div className="bg-white rounded-3xl border-2 border-stone-100 shadow-2xl overflow-hidden mb-12">
                <div className="bg-emerald-900 p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">અમારી ખાસ હેર કેર રેન્જ:</h3>
                  <p className="text-emerald-200">અમારી પ્રોડક્ટ્સ વિજ્ઞાન અને આયુર્વેદનો અદભૂત સંગમ છે, જે દરેક સમસ્યા માટે ચોક્કસ ઉકેલ આપે છે:</p>
                </div>
                <div className="p-8 md:p-12">
                   <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                      {[
                        { t: "Biotin Gummy", d: "સ્વાદિષ્ટ ગમીઝ જે વાળને અંદરથી મજબૂતી આપે છે." },
                        { t: "B12 Spray", d: "વિટામિનની ઉણપ દૂર કરી વાળના ગ્રોથમાં મદદરૂપ." },
                        { t: "Saptamrut Loh", d: "આયુર્વેદિક શક્તિ જે વાળનું કુદરતી કાળાપણું જાળવી રાખે છે." },
                        { t: "Hair Tonic", d: "સ્કેલ્પમાં બ્લડ સર્ક્યુલેશન વધારે અને નવા વાળ ઉગાડવામાં મદદ કરે." },
                        { t: "Argan Biotin Shampoo", d: "પ્રદૂષણથી રક્ષણ અને વાળને આપે રેશમી ચમક." },
                        { t: "Hair Conditioner", d: "ગૂંચવાયેલા અને શુષ્ક વાળને બનાવે મુલાયમ." },
                        { t: "7 in 1 Argan & Tea Tree", d: "એક જ ઓઈલમાં 7 શક્તિશાળી તત્વોનો મેળ." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 border-b border-stone-100 pb-4">
                           <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">{i+1}</span>
                           <div className="flex flex-col">
                              <strong className="text-emerald-950 text-lg">{item.t}</strong>
                              <span className="text-stone-600 italic leading-snug">{item.d}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100 mb-12 shadow-sm text-center md:text-left group transition-all duration-500 hover:shadow-xl">
                 <h3 className="text-2xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-200 pb-4 inline-block">શા માટે અમારી પ્રોડક્ટ્સ પસંદ કરવી? ✅</h3>
                 <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4"><span className="text-2xl">🌱</span></div>
                       <p className="font-bold text-stone-900 mb-2">સંપૂર્ણ સુરક્ષિત</p>
                       <p className="text-stone-600 text-sm">કોઈ હાનિકારક કેમિકલનો ઉપયોગ નહીં.</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4"><span className="text-2xl">⚡</span></div>
                       <p className="font-bold text-stone-900 mb-2">ઝડપી પરિણામ</p>
                       <p className="text-stone-600 text-sm">નિયમિત ઉપયોગથી થોડા જ દિવસોમાં તફાવત દેખાશે.</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4"><span className="text-2xl">📦</span></div>
                       <p className="font-bold text-stone-900 mb-2">ઓલ-ઈન-વન સોલ્યુશન</p>
                       <p className="text-stone-600 text-sm">હેર લોસથી લઈને ગ્રે હેર સુધીની તમામ સમસ્યાનો અંત.</p>
                    </div>
                 </div>
              </div>

              <blockquote className="text-center italic text-stone-700 text-2xl font-medium bg-stone-100 p-8 rounded-3xl mb-12 border-x-4 border-emerald-600">
                "સુંદર વાળ એ માત્ર દેખાવ નથી, પણ તમારો આત્મવિશ્વાસ છે."
              </blockquote>

              <p className="bg-linear-to-r from-emerald-800 to-teal-900 text-white p-10 rounded-3xl text-center font-bold text-2xl shadow-2xl leading-relaxed">
                તમારા વાળની જરૂરિયાત મુજબ આજે જ તમારી પસંદગીની પ્રોડક્ટ ઓર્ડર કરો અને મેળવો ઘટાદાર અને સ્વસ્થ વાળ!
              </p>
            </section>

            {/* Section 6 - Biotin */}
            <section className="mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading">
                બાયોટિન: નવા અને મજબૂત વાળ ઉગાડવાનું ગુપ્ત રહસ્ય!
              </h2>

              <HairImage 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIvWvb31MrndYiL3N1PpZChL0inZCvdvZ7Ain2Xwk-xeLZHInhOisKekwI-0mN6Yoe5slCZ6e2ifgyNHWjXYZiidZk0RGaU7BRfrDpTEZZgZuvflKGnQLFdV55Z3_TEIyNc3TY5Orn7QYahzpU1eCjDc0lQ3BrzUl365fmGEXKOkcnh7BB_GJPV6ozjwmf/s1280/1003077585.jpg"
                alt="બાયોટિન ફોર્મ્યુલેશન"
              />

              <p className="text-lg md:text-xl text-stone-700 mb-10 leading-relaxed text-center font-medium">
                શું તમે જાણો છો કે તમારા વાળનો મુખ્ય ભાગ કેરાટિન (Keratin) નામના પ્રોટીનથી બનેલો છે? અને આ પ્રોટીન બનાવવા માટે શરીરને સૌથી વધુ જરૂર બાયોટિન (Biotin) ની હોય છે.
              </p>

              <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-100 shadow-xl mb-12">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6 underline decoration-gold decoration-4 underline-offset-8">બાયોટિન એટલે શું? બાયોટિન કેવી રીતે કામ કરે છે?</h3>
                <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                  બાયોટિન એ વિટામિન B7 છે. આ એક 'વોટર સોલ્યુબલ' વિટામિન છે, જેનો અર્થ છે કે શરીર તેને સંગ્રહિત કરી શકતું નથી, તેથી તેને દરરોજ યોગ્ય આહાર અથવા પોષણ દ્વારા લેવું જરૂરી છે
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                   <div className="bg-stone-50 p-8 rounded-2xl flex flex-col items-center text-center shadow-inner">
                      <div className="text-4xl mb-4">🔬</div>
                      <p className="font-medium text-stone-700 leading-relaxed">તે શરીરમાં કેરાટિન પ્રોટીનનું ઉત્પાદન વધારે છે.</p>
                   </div>
                   <div className="bg-stone-50 p-8 rounded-2xl flex flex-col items-center text-center shadow-inner">
                      <div className="text-4xl mb-4">🌱</div>
                      <p className="font-medium text-stone-700 leading-relaxed">વાળના ફોલિકલ્સ (મૂળ) ને સક્રિય કરી નવા વાળ ઉગાડવામાં મદદ કરે છે.</p>
                   </div>
                   <div className="bg-stone-50 p-8 rounded-2xl flex flex-col items-center text-center shadow-inner sm:col-span-2">
                      <div className="text-4xl mb-4">💪</div>
                      <p className="font-medium text-stone-700 leading-relaxed">પાતળા વાળને જાડા અને ભરાવદાર બનાવે છે.</p>
                   </div>
                </div>
              </div>

              <div className="bg-stone-900 text-white p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <p className="text-lg md:text-xl text-stone-300 leading-relaxed">
                  ઘણીવાર આહારમાંથી પૂરતું બાયોટિન વાળના મૂળ સુધી પહોંચી શકતું નથી. અમારું આયુર્વેદિક કોર્ષ કુદરતી જડીબુટ્ટીઓથી સમૃદ્ધ છે જે સ્કેલ્પના રંધ્રો દ્વારા સીધું શોષાઈને વાળને 'બાયોટિનજેવું પોષણ' આપે છે.
                </p>
                <p className="text-2xl font-black text-gold italic border-l-4 border-gold pl-6 py-2">
                  "તમારા વાળને આપો બાયોટિનની શક્તિ અને મેળવો મજબૂત, ચમકદાર વાળ!"
                </p>
                <p className="text-lg pt-4 text-emerald-200">
                  "શું તમે જાણો છો? બાયોટિનની ઉણપ માત્ર વાળ જ નહીં, પણ નખને પણ નબળા પાડે છે. અમારું સોલ્યુશન તમારા વાળના સ્વાસ્થ્યને સંપૂર્ણ સુરક્ષા આપે છે."
                </p>
              </div>
            </section>

            {/* Section 7 - Biotin Deficiency */}
            <section className="mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 pb-4 border-b-4 border-gold/30 font-heading">
                શું તમારા શરીરમાં બાયોટિનની ઉણપ છે? આ લક્ષણોને અવગણશો નહીં! ⚠️
              </h2>

              <HairImage 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcdm9RESWP0-Dg38DeSmRG7XYOsRrXVVIVowC-2luEPp8Cf4K-NKr0lOEh-lOL0F7K-1OB0YqSC01869VsxWcGKe3FPYXgkM5-M4J58g7B0dvQI6FZF7a8vP36b0XgMbv1TOenpywpEVFfXIsVn1B0V0SxbD7kCFnbNQT4o-neurMYyhw_f2hPE9JCPMqh/s1280/1003077587.jpg"
                alt="બાયોટિનની ઉણપનાં લક્ષણો"
              />

              <p className="text-lg md:text-xl text-stone-700 mb-12 leading-relaxed text-center italic max-w-2xl mx-auto">
                બાયોટિન (વિટામિન B7) એ માત્ર એક વિટામિન નથી, પણ તમારા વાળ, ત્વચા અને નખ માટેનું મુખ્ય પોષક તત્વ છે. જ્યારે શરીરમાં તેની ઉણપ સર્જાય છે, ત્યારે તેની સીધી અસર તમારા લુક અને આત્મવિશ્વાસ પર પડે છે.
              </p>

              <div className="grid gap-8">
                 {[
                   { t: "1. વાળ ખરવા અને ડેમેજ થવા (Hair Fall / Hair Damage) 💇♀️", d: "બાયોટિનની કમીથી વાળ નબળા અને બરડ બની જાય છે.", l: ["ખૂબ જ પ્રમાણમાં વાળ ખરવા.", "વાળના છેડા ફાટી જવા (Split ends).", "વાળની કુદરતી ચમક ઓછી થવી."] },
                   { t: "2. ત્વચાની ચમક ઘટવી (Skin Collagen) ✨", d: "બાયોટિન ત્વચામાં કોલેજન જાળવી રાખવામાં મદદ કરે છે. તેની ઉણપથી:", l: ["ત્વચા ફિક્કી અને નિર્જીવ દેખાવા લાગે છે.", "વહેલી ઉંમરે કરચલીઓ દેખાઈ શકે છે.", "ત્વચા શુષ્ક (Dry skin) થઈ જાય છે."] },
                   { t: "3. નખ નબળા પડવા (Nail Health) 💅", d: "શું તમારા નખ વારંવાર તૂટી જાય છે?", l: ["બાયોટિનની ઉણપ નખને નબળા અને પાતળા બનાવે છે.", "નખનો વિકાસ ધીમો પડી જાય છે અને તેની સપાટી ખરબચડી બને છે."] }
                 ].map((card, i) => (
                    <div key={i} className="bg-emerald-50/50 p-8 rounded-3xl border-2 border-emerald-100 shadow-lg hover:shadow-emerald-200/40 transition-all group">
                       <h4 className="text-xl md:text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-700 transition-colors">{card.t}</h4>
                       <p className="text-stone-700 mb-6 font-medium">{card.d}</p>
                       <ul className="space-y-4">
                          {card.l.map((li, liIdx) => (
                             <li key={liIdx} className="flex items-center gap-3 text-stone-600">
                                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                                {li}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>

              <div className="mt-16 bg-white p-12 rounded-3xl border-2 border-stone-200 shadow-2xl text-center flex flex-col items-center">
                 <h3 className="text-3xl font-black text-emerald-900 mb-8 font-heading">ઉકેલ શું છે? ✅</h3>
                 <p className="text-lg md:text-xl text-stone-700 mb-8 leading-relaxed max-w-xl">
                   બાયોટિનની ઉણપને દૂર કરવા માટે માત્ર બાહ્ય તેલ કે ક્રીમ પૂરતા નથી, તમારે શરીરને અંદરથી પોષણ આપવું પડશે.
                 </p>
                 <div className="w-24 h-1 bg-gold mb-8 rounded-full"></div>
                 <p className="text-2xl md:text-3xl font-bold font-heading text-emerald-800 italic leading-relaxed">
                   "આજે જ તમારા શરીરની જરૂરિયાત સમજો અને ફરી મેળવો એ જ જૂની ચમક!"
                 </p>
              </div>
            </section>

            {/* Product Gallery */}
            <section className="mt-24 mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center font-heading underline decoration-gold decoration-4 underline-offset-8">આમારી પ્રોડક્ટ્સ</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguzMIs2KTZ1yA3IBinQAj_z3OGftwFkhnRxFsckHsj0Pnb6pCX49dNyueoGnFBh149J6Gkbkq15j5jGIpFgxWcOldqPKD1eJbme2AIF8KMH5rdrBJBa5ucDzUnCq65AMOw9i3oHxBiId3zdYOYJjgNgY-n7M4-uo79Edewpnm3tJVUYsf8gwiCCMm0R2HJ/s1280/1003077586.jpg',
                   'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGVKDhftorD-jF3WhMWqJWNdJB9Gzy01-sCtA8i8nmPbddkoUvy68hJy2oulRGFvy5ZEY374RABNgKfXTwF38eOz-8dmIiSoDnbi1iafYLhDIPXQLCGapHLDC2wSTOnCFen_vOyvvB4wHGYDroZ8chZ7RcRAnrMPGWZx_pvTUryXG57mFAiLivgrS1LB6X/s1280/1003080746.jpg', // Replaced middle one with certification since it fits better or just keep user ones
                   'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf8EVdXqW8rIjv_kzTb7ZgJe64Dfy3-JyudLj7hFSQfA9__K7AMD9muvt-aJM4ejebxA_0HEkh7seIwd7mQJT78DalUkByG_17vPa0cHjhRGCRh0BBDUJpVQ64oQERgPPg1w2Rx3LZ0Gj5tBMcQNzJJ0DECGAy2SzXAYJ6LI9eOhkBjyPewGAWS4V-sc60/s1280/1003077589.jpg'
                 ].map((src, i) => (
                    <div key={i} className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
                       <img src={src} alt={`Product ${i+1}`} className="w-full h-auto grayscale-20 group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                 ))}
              </div>
            </section>

            {/* Extra Gallery Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
               {[
                 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxQwrjMy-qNTDMLEOPboT0xe_hLLXmycbg6O76GhOiZknOdOyY7E9OuTwg2RHFuppPZcBBcX6h5IBe4ayeP7H-gO6zPvOP-Qbtcj1vgS0Wc7DJSMXtqgVQqfujifbn0goAhzMPRnmJSvxTC4WOYVuhhBaYmzq_ML9RUNHi8okanT769nd-0XbCEIx5ULgF/s1280/1003077590.jpg',
                 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDRgF7jbkN0KNuxxNjLLtRBnx_yROwJ2hfQZxW6WUnndG4eurRYb8A3XrojlaRAP450IBROos5WyoAuNM6Pa0SLGKfsHTiCcJkAr3D1JDccz7X3wuFTdAvcejbJiHYbSVMPR_7UkrlgA7oHMH8pcqGDVrIMrftT6dS-qiCbmQPgNNc51earOirnkZSzht5/s1280/1003077591.jpg',
                 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaGEA_TJ-q-rpSujZMudIGnqsWktEL-RRrZQVNtar03-aPnxCOMyu4gJmWQemhMirvmhyphenhyphenT66uF0k67tsnYRghbWt_OB7fcABKRU-k1_fStqElKGR4gUSrTqHp-hkeCEfdTC-XFYeAT8h5YV-cXiY66YWAFcxHQx2cZyPnuZxwEK8C5BthU9hOYtcbpSUKm/s1280/1003077593.jpg'
               ].map((src, i) => (
                  <div key={i} className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
                     <img src={src} alt={`Gallery ${i+1}`} className="w-full h-auto" />
                  </div>
               ))}
            </div>

            {/* Benefits Bento Grid Style */}
            <section className="mt-24 mb-12">
               <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center font-heading">અમારા ફાયદા:</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'વાળ ખરતા અટકાવે: મૂળને પોષણ આપીને વાળનું ખરવાનું બંધ કરે છે.',
                    'ખોડાથી મુક્તિ: સ્કેલ્પને ચોખ્ખું અને હેલ્ધી રાખે છે.',
                    'કુદરતી ચમક: પાતળા વાળને ઘટ્ટ અને રેશમી બનાવે છે.',
                    'કોઈ આડઅસર નહીં: ૧૦૦% નેચરલ અને કેમિકલ મુક્ત.',
                    'કોઈ હાનિકારક કેમિકલ વગર, માત્ર જડીબુટ્ટીઓની શક્તિ.',
                    'પાતળા વાળને ફરીથી ઘટ્ટ અને મજબૂત બનાવો.'
                  ].map((text, i) => (
                     <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all border-l-8 border-l-emerald-700 flex flex-col justify-center">
                        <p className="text-lg text-emerald-900 font-bold leading-relaxed">
                           <span className="text-emerald-500 mr-2 text-2xl font-black">✓</span>
                           {text}
                        </p>
                     </div>
                  ))}
               </div>
               
               <div className="bg-emerald-900 text-gold p-10 rounded-3xl mt-12 text-center font-black text-2xl md:text-3xl shadow-2xl tracking-tight leading-relaxed">
                 7. હજારો બહેનો અને ભાઈઓ એ અમારા આયુર્વેદિક કોર્ષ થી ફાયદો મેળવ્યો છે
               </div>
            </section>

            {/* Certification Section */}
            <section className="mt-32 mb-12 text-center">
              <h2 className="text-3xl font-bold text-emerald-900 mb-12 font-heading tracking-widest uppercase underline decoration-gold underline-offset-8">Our Certification :-</h2>
              <div className="flex justify-center flex-col items-center gap-10">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEc9r0YjlslgT7HJkArSJoINKZKPNN3Ar7e7j2HYzDZli7mKqd5GTHU-7fNArQL4rA38KgBQ5y5KwRvsAT8qeBhiYlkNI_AFoSgvuD-RA8iwHJcEC1taOHkcBylGSFtD4KWJJL-LRWwo2tYlbgich1q5GyJPj2fSJbeLXu2XCU_-oR2lk0iYhMYR1lTDM5/s1280/1003080746.jpg"
                  alt="સર્ટિફિકેશન"
                  className="rounded-3xl shadow-2xl border-stone-200 border-4 max-w-2xl w-full"
                />
              </div>
            </section>

            {/* Final CTA */}
            <div className="mt-32 relative group">
               <div className="absolute -inset-2 bg-linear-to-r from-gold via-emerald-600 to-teal-900 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
               <div className="relative bg-emerald-900 text-white p-10 md:p-20 rounded-4xl text-center shadow-2xl overflow-hidden border border-emerald-800">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] opacity-20 pointer-events-none"></div>
                  
                  <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight tracking-tight relative z-10">
                    ખરતા વાળને કાયમી અલવિદા કહેવા માટે અત્યારે જ અમારો સંપર્ક કરો!
                  </h2>

                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank"
                    className="inline-flex items-center gap-4 bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/40 relative z-10"
                  >
                    <FaWhatsapp className="text-4xl" />
                    <span>96871 05624</span>
                  </a>

                  <p className="mt-12 text-xl md:text-2xl text-emerald-200 font-light italic opacity-80 relative z-10">
                    તમારા વાળની સુંદરતા અને આત્મવિશ્વાસ બચાવવા માટે આજે જ સંપર્ક કરો!
                  </p>
               </div>
            </div>

            {/* Footer Testimonial */}
            <section className="mt-32 text-center py-16 px-6 bg-stone-50 rounded-3xl border border-stone-100 italic relative">
               <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-emerald-100 pointer-events-none -z-10">“</span>
               <h3 className="text-2xl md:text-3xl font-black text-emerald-950 mb-6 leading-relaxed">
                 "આજે જ તમારા વાળની સમસ્યાનું આયુર્વેદિક ઉકેલ શોધો"
               </h3>
               <p className="text-xl text-stone-500 font-medium">
                 આયુર્વેદના આંગણે - તમારા વાળની સુંદરતા, તમારો ગર્વ
               </p>
            </section>

          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
