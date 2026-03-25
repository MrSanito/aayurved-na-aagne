"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  CheckCircle, 
  Phone, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  Zap,
  Leaf,
  Droplets,
  ShieldCheck,
  Award
} from "lucide-react";

const page = () => {
  return (
    <main className="min-h-screen bg-neutral-50 font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-emerald-950 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">૧૦૦% આયુર્વેદિક ઉકેલ</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            "વાળ ખરવાની ચિંતા છોડો, <br />
            <span className="text-emerald-400">આયુર્વેદ સાથે નાતો જોડો."</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvLpPgQIUG9vSkOF1fLxbxg1jhzDlpMjuB6jl7R6RWRp43YCkNc3iwY_6452gVo9-WOv_K8a2vQRHods7KbFX5I9Gbmt1gY48zGTX0ktUGpSmaznpFSOAX0T1HYwzk7Rgn5AvpJoK1KF5mCGsynmD4QgdwCmDmhEtWGB0cmAqkXuyegSg0QpNOpggmcvvT/s1376/1003078797.png"
              alt="Ayurved Hair Solution"
              width={1000}
              height={500}
              className="rounded-2xl shadow-2xl border-4 border-emerald-500/10"
              priority
            />
          </div>

          <p className="text-xl md:text-2xl text-emerald-100 font-semibold mb-8">
            શું તમે પણ ખરતા વાળ, ખોડો, પાતળા વાળ, અકાળે થયેલ સફેદ વાળ થી પરેશાન છો?
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:9687105624" className="btn btn-primary btn-lg shadow-xl shadow-emerald-500/20 group">
              <Phone className="w-5 h-5 mr-2" />
              અત્યારે જ કોલ કરો
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-xl shadow-sm mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <p className="text-lg text-amber-900 leading-relaxed font-medium">
                  રાસાયણિક શેમ્પૂ અને તેલ ક્યારેક ફાયદા કરતા નુકસાન વધુ કરે છે. 
                  અમારું 'આયુર્વેદના આંગણે' હેર સોલ્યુશન પ્રાચીન જડીબુટ્ટીઓ અર્કથી બનેલું છે. 
                  આ માત્ર ઉપરછલ્લો ઈલાજ નથી, પણ મૂળમાંથી વાળને મજબૂતી આપે છે.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">"શું તમે પણ દરરોજ ખરતા વાળથી પરેશાન છો?</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2eNvLsZKhfJp7zANYAl2dWaIAC_CgPkvUxMfcAe4q3SvBHz5T6w6WJQUo0jVHF9DIsMFGmtiLUlOG6-HbAmUDgkBETgscg0WoTNKLPuq0fI-FOvt2fh51yR_9Cb__I8fNxL0agBtBqpX0GOFJTqH_ayIufD3I80tWeLdGgjQSYYRQ6ZYvLGHTenP4G_bW/s1280/1003077581.jpg"
                alt="Hair concerns"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Deep Dive */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-6 leading-tight">
                "કાંસકામાં આવતા વાળ જોઈને ચિંતા થાય છે? <br />
                <span className="text-emerald-700">હવે અટકાવો કાયમી ધોરણે!"</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8">તમારા ખરતા વાળનું આયુર્વેદિક અને કુદરતી નિવારણ અહીં છે.</p>
              
              <ul className="space-y-4">
                {[
                  "વાળ ખરવા એ માત્ર એક સમસ્યા નથી, તે તમારા આત્મવિશ્વાસને પણ અસર કરે છે.",
                  "બદલાતી જીવનશૈલી, પ્રદૂષણ અને કેમિકલયુક્ત પ્રોડક્ટ્સ તમારા વાળને મૂળમાંથી નબળા બનાવે છે.",
                  "વાળનું ખરવાનું 90 દિવસમાં ઓછું કરે છે.",
                  "સ્કેલ્પને ઊંડાણપૂર્વક પોષણ આપે છે.",
                  "નવા વાળ ઉગાડવામાં મદદરૂપ થાય છે."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start p-4 bg-white rounded-xl shadow-sm border border-neutral-200">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikLERvkSU-G2sJbrVP0lKs3Uc-I-N4pt8vE9YpoxJU_B0haBlWboCTzuXDndY0D7syESghTQWb63GD6yHCdwc6fxLCb0nQdtMbN67z8h71SfoZVpnirGB4R-24d-FXtF9Gp2d-I52uiD6PPRhIttCSvXMdwWRafc-4USb3qlngrZcrYeivpoR8W5OYdnRm/s1280/1003077582.jpg"
                  alt="Reasons for hair fall"
                  width={800}
                  height={500}
                />
              </div>
              <div className="p-6 bg-emerald-700 text-white rounded-2xl shadow-xl -translate-y-6 md:-translate-x-12">
                <h3 className="text-xl font-bold mb-2">તમારા વાળ કેમ ખરે છે? જાણો સાચું કારણ!</h3>
                <p className="text-emerald-100">માત્ર મોંઘા શેમ્પૂ બદલવાથી વાળ ખરતા અટકશે નહીં. પહેલાં એ જાણવું જરૂરી છે કે સમસ્યા અંદરથી છે કે બહારથી.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrients Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">"વાળનો સાચો ખોરાક: જાણો કયા વિટામિન્સ છે જરૂરી!"</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5HN9Rp78mbAAJ-2QoT42_LCtoAVYy4qKg8L3yhWoHosif_Dv5CIAMN4u3huvLzlko_Ig7wT9Pldp4RoX-kWqp_BkoLG0HlbBxio7S42ytqP9gTXx7lrDT1boBD-nTY7Vs5tqzKwFwyt9kOoNhZ1njGeXKZ1d19OLn0VBdD98lhfG5vGnLXWQirnG4Qu4t/s1280/1003077583.jpg"
                alt="Hair Vitamins"
                width={1280}
                height={720}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-600 rounded-2xl text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">વિટામિન્સનો પાવર</h3>
              </div>
              <div className="space-y-4 text-emerald-800">
                <p className="font-semibold">અમારા આયુર્વેદિક તેલમાં કુદરતી રીતે આ તત્વોનો સમાવેશ થાય છે:</p>
                <div className="grid gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-bold text-emerald-700">વિટામિન A & C:</span> સ્કેલ્પમાં કુદરતી ઓઈલ જાળવી રાખે છે અને વાળને તૂટતા અટકાવે છે.
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-bold text-emerald-700">B7 (Biotin) & B12:</span> નવા વાળ ઉગાડવા માટે અને વાળની જાડાઈ વધારવા માટે સૌથી મહત્વપૂર્ણ.
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-bold text-emerald-700">વિટામિન D & E:</span> સૂર્યપ્રકાશ અને પોષણની ગેરહાજરીમાં થતા નુકસાન સામે રક્ષણ આપે છે.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-2xl text-white">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">જરૂરી મિનરલ્સ અને પ્રોટીન</h3>
              </div>
              <div className="space-y-4 text-blue-800">
                <p className="font-semibold">વાળની આંતરિક રચનાને મજબૂત કરવા માટે:</p>
                <div className="grid gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                    <span className="font-bold text-blue-700">Iron (આયર્ન):</span> વાળના મૂળ સુધી ઓક્સિજન પહોંચાડે છે.
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                    <span className="font-bold text-blue-700">Zinc (ઝિંક):</span> હેર ટિશ્યુના રિપેરિંગમાં મદદ કરે છે.
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                    <span className="font-bold text-blue-700">Protein (પ્રોટીન):</span> વાળ મુખ્યત્વે પ્રોટીનના બનેલા હોય છે, જે તેમને મજબૂતી આપે છે.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Norwood Scale Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"શું તમારા વાળ પણ ખરવા લાગ્યા છે? જાણો હેર લોસના ૭ મહત્વના તબક્કા"</h2>
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1BMQ1T17qol1LCTkx3Li1pHupvc6-DsVJa_GiImicIwC_2KWpJpPQj3WU_Mes05yaJK0LbyNS_bzkXK4vnQ6SUYfXwUoLxA9F9euz0xuQImVU_pxQfXF7MsDvVUbkOKjVks4WD2vFYZrcfbzfZ1iEIq9mir-NQbyGWtMvl5zuTpOXoRf7caSq-vkpbd6k/s1280/1003077584.jpg"
                alt="Norwood Scale"
                width={1280}
                height={720}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="table w-full bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="p-4 text-lg">સ્ટેજ</th>
                  <th className="p-4 text-lg">શું થાય છે?</th>
                  <th className="p-4 text-lg">હાલત</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                {[
                  ["સ્ટેજ ૧", "શરૂઆત, દેખીતી રીતે જણાતી નથી.", "સામાન્ય"],
                  ["સ્ટેજ ૨", "કપાળના ખૂણે હળવાશ.", "શરૂઆત"],
                  ["સ્ટેજ ૩", "'M' આકાર સ્પષ્ટ અને વાળ પાતળા.", "ચિંતાજનક"],
                  ["સ્ટેજ ૪", "પાછળના ભાગે (Vertex) ટાલ.", "મધ્યમ"],
                  ["સ્ટેજ ૫", "આગળ અને પાછળની ટાલ વચ્ચેનો ગેપ ઘટે.", "ગંભીર"],
                  ["સ્ટેજ ૬", "ઉપરના ભાગમાં ખૂબ ઓછા વાળ.", "ખૂબ ગંભીર"],
                  ["સ્ટેજ ૭", "સંપૂર્ણ ટાલ, માત્ર કાનની ઉપર વાળ", "અંતિમ"],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-700/50 transition-colors">
                    <td className="p-4 font-bold text-emerald-400">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        idx < 2 ? 'bg-emerald-500/20 text-emerald-400' : 
                        idx < 4 ? 'bg-amber-500/20 text-amber-400' : 
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">શા માટે આ સ્ટેજ સમજવા જરૂરી છે? 🧐</h3>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              તમે જેટલા વહેલા સ્ટેજ પર હેર લોસને ઓળખી લેશો, તેને રોકવો એટલો જ સરળ રહેશે. 
              જો તમે સ્ટેજ ૨ કે ૩ પર છો, તો યોગ્ય ટ્રીટમેન્ટ અને આહારથી તમે તમારા વાળ પાછા મેળવી શકો છો અથવા ખરતા અટકાવી શકો છો.
            </p>
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
              <p className="text-xl font-bold text-emerald-400">
                શું તમે સ્ટેજ ૨ કે ૩ પર છો? <br />
                <span className="text-white">તમે હજુ પણ તમારા વાળ બચાવી શકો છો. આજે જ અમારો સંપર્ક કરો!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Range */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-6">
              ખરતા અને સફેદ વાળને કહો અલવિદા! <br />
              <span className="text-emerald-700">મેળવો મજબૂત અને કાળા વાળ કુદરતી રીતે 🌿</span>
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto mb-16">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIvWvb31MrndYiL3N1PpZChL0inZCvdvZ7Ain2Xwk-xeLZHInhOisKekwI-0mN6Yoe5slCZ6e2ifgyNHWjXYZiidZk0RGaU7BRfrDpTEZZgZuvflKGnQLFdV55Z3_TEIyNc3TY5Orn7QYahzpU1eCjDc0lQ3BrzUl365fmGEXKOkcnh7BB_GJPV6ozjwmf/s1280/1003077585.jpg"
                alt="Hair solution showcase"
                width={1280}
                height={720}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Biotin Gummy", desc: "સ્વાદિષ્ટ ગમીઝ જે વાળને અંદરથી મજબૂતી આપે છે.", icon: <Sparkles /> },
              { title: "B12 Spray", desc: "વિટામિનની ઉણપ દૂર કરી વાળના ગ્રોથમાં મદદરૂપ.", icon: <Droplets /> },
              { title: "Saptamrut Loh", desc: "આયુર્વેદિક શક્તિ જે વાળનું કુદરતી કાળાપણું જાળવી રાખે છે.", icon: <ShieldCheck /> },
              { title: "Hair Tonic", desc: "સ્કેલ્પમાં બ્લડ સર્ક્યુલેશન વધારે અને નવા વાળ ઉગાડવામાં મદદ કરે.", icon: <Droplets /> },
              { title: "Argan Biotin Shampoo", desc: "પ્રદૂષણથી રક્ષણ અને વાળને આપે રેશમી ચમક.", icon: <Sparkles /> },
              { title: "7 in 1 Argan & Tea Tree", desc: "એક જ ઓઈલમાં ૭ શક્તિશાળી તત્વોનો મેળ.", icon: <Award /> },
            ].map((p, i) => (
              <div key={i} className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-neutral-100 group">
                <div className="card-body">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="card-title text-emerald-900">{p.title}</h3>
                  <p className="text-neutral-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto mb-16">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguzMIs2KTZ1yA3IBinQAj_z3OGftwFkhnRxFsckHsj0Pnb6pCX49dNyueoGnFBh149J6Gkbkq15j5jGIpFgxWcOldqPKD1eJbme2AIF8KMH5rdrBJBa5ucDzUnCq65AMOw9i3oHxBiId3zdYOYJjgNgY-n7M4-uo79Edewpnm3tJVUYsf8gwiCCMm0R2HJ/s1280/1003077586.jpg"
              alt="Biotin benefits"
              width={1280}
              height={720}
            />
          </div>

          <div className="bg-emerald-900 text-white rounded-[2rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Leaf className="w-48 h-48 rotate-45" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">"બાયોટિન: નવા અને મજબૂત વાળ ઉગાડવાનું ગુપ્ત રહસ્ય!"</h2>
              <div className="space-y-6 text-emerald-100 leading-relaxed text-lg">
                <p>શું તમે જાણો છો કે તમારા વાળનો મુખ્ય ભાગ કેરાટિન (Keratin) નામના પ્રોટીનથી બનેલો છે? અને આ પ્રોટીન બનાવવા માટે શરીરને સૌથી વધુ જરૂર બાયોટિન (Biotin) ની હોય છે.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">બાયોટિન એટલે શું?</h4>
                    <p>બાયોટિન એ વિટામિન B7 છે. આ એક 'વોટર સોલ્યુબલ' વિટામિન છે, જેનો અર્થ છે કે શરીર તેને સંગ્રહિત કરી શકતું નથી, તેથી તેને દરરોજ યોગ્ય આહાર અથવા પોષણ દ્વારા લેવું જરૂરી છે.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">બાયોટિન કેવી રીતે કામ કરે છે?</h4>
                    <ul className="space-y-2">
                       <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> તે શરીરમાં કેરાટિન પ્રોટીનનું ઉત્પાદન વધારે છે.</li>
                       <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> વાળના ફોલિકલ્સને સક્રિય કરી નવા વાળ ઉગાડે છે.</li>
                       <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> પાતળા વાળને જાડા અને ભરાવદાર બનાવે છે.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deficiency Visualized */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-neutral-800 mb-4">શું તમારા શરીરમાં બાયોટિનની ઉણપ છે? આ લક્ષણોને અવગણશો નહીં! ⚠️</h2>
             <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
               <Image
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcdm9RESWP0-Dg38DeSmRG7XYOsRrXVVIVowC-2luEPp8Cf4K-NKr0lOEh-lOL0F7K-1OB0YqSC01869VsxWcGKe3FPYXgkM5-M4J58g7B0dvQI6FZF7a8vP36b0XgMbv1TOenpywpEVFfXIsVn1B0V0SxbD7kCFnbNQT4o-neurMYyhw_f2hPE9JCPMqh/s1280/1003077587.jpg"
                 alt="Biotin deficiency symptoms"
                 width={1280}
                 height={720}
               />
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "વાળ ખરવા અને ડેમેજ થવા",
                items: ["ખૂબ જ પ્રમાણમાં વાળ ખરવા", "વાળના છેડા ફાટી જવા (Split ends)", "વાળની કુદરતી ચમક ઓછી થવી"],
                color: "emerald"
              },
              {
                title: "ત્વચાની ચમક ઘટવી",
                items: ["ત્વચા ફિક્કી અને નિર્જીવ દેખાવા લાગે છે", "વહેલી ઉંમરે કરચલીઓ દેખાઈ શકે છે", "ત્વચા શુષ્ક (Dry skin) થઈ જાય છે"],
                color: "amber"
              },
              {
                title: "નખ નબળા પડવા",
                items: ["ખૂબ જ પ્રમાણમાં વાળ ખરવા", "નખ વારંવાર તૂટી જાય છે", "નખનો વિકાસ ધીમો પડી જાય છે"],
                color: "blue"
              }
            ].map((box, i) => (
              <div key={i} className={`p-8 rounded-3xl border-t-8 shadow-lg ${
                box.color === 'emerald' ? 'bg-emerald-50 border-emerald-500' :
                box.color === 'amber' ? 'bg-amber-50 border-amber-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <h3 className="text-xl font-bold mb-6 text-neutral-800">{box.title}</h3>
                <ul className="space-y-4">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <CheckCircle className={`w-5 h-5 mt-1 shrink-0 ${
                        box.color === 'emerald' ? 'text-emerald-600' :
                        box.color === 'amber' ? 'text-amber-600' :
                        'text-blue-600'
                      }`} />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-12 italic">"આજે જ તમારા શરીરની જરૂરિયાત સમજો અને ફરી મેળવો એ જ જૂની ચમક!"</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
            {[
              "1003077588.jpg", "1003077589.jpg", "1003077590.jpg", 
              "1003077591.jpg", "1003077592.jpg", "1003077593.jpg",
              "1003077594.jpg", "1003077595.jpg", "1003077600.jpg",
              "1003077601.jpg", "1003077602.jpg", "1003077603.jpg",
              "1003077604.jpg", "1003077605.jpg", "1003077606.jpg"
            ].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl shadow-md bg-white p-2">
                <Image
                  src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/${
                    i === 0 ? 'AVvXsEgGVKDhftorD-jF3WhMWqJWNdJB9Gzy01-sCtA8i8nmPbddkoUvy68hJy2oulRGFvy5ZEY374RABNgKfXTwF38eOz-8dmIiSoDnbi1iafYLhDIPXQLCGapHLDC2wSTOnCFen_vOyvvB4wHGYDroZ8chZ7RcRAnrMPGWZx_pvTUryXG57mFAiLivgrS1LB6X' :
                    i === 1 ? 'AVvXsEjf8EVdXqW8rIjv_kzTb7ZgJe64Dfy3-JyudLj7hFSQfA9__K7AMD9muvt-aJM4ejebxA_0HEkh7seIwd7mQJT78DalUkByG_17vPa0cHjhRGCRh0BBDUJpVQ64oQERgPPg1w2Rx3LZ0Gj5tBMcQNzJJ0DECGAy2SzXAYJ6LI9eOhkBjyPewGAWS4V-sc60' :
                    i === 2 ? 'AVvXsEjxQwrjMy-qNTDMLEOPboT0xe_hLLXmycbg6O76GhOiZknOdOyY7E9OuTwg2RHFuppPZcBBcX6h5IBe4ayeP7H-gO6zPvOP-Qbtcj1vgS0Wc7DJSMXtqgVQqfujifbn0goAhzMPRnmJSvxTC4WOYVuhhBaYmzq_ML9RUNHi8okanT769nd-0XbCEIx5ULgF' :
                    i === 3 ? 'AVvXsEhDRgF7jbkN0KNuxxNjLLtRBnx_yROwJ2hfQZxW6WUnndG4eurRYb8A3XrojlaRAP450IBROos5WyoAuNM6Pa0SLGKfsHTiCcJkAr3D1JDccz7X3wuFTdAvcejbJiHYbSVMPR_7UkrlgA7oHMH8pcqGDVrIMrftT6dS-qiCbmQPgNNc51earOirnkZSzht5' :
                    i === 4 ? 'AVvXsEivQxI2PguGbhGmRt2Suzq_yqlVDKd4fHG5n43FltJjE5zGKL6UJbYr9bjS9I4BV7tL6Wi9g3KJYoy4BUFz7AKziD_r6TLCdiSj1vSMSsUXxUYsG3kzrVGa98mu075WPa4_5NKQ7ri1kRRDRlntfeKXCNq9URK1P2f-96RVM8Ghyv5lp8iT_wzBhgDKzrvm' :
                    i === 5 ? 'AVvXsEjaGEA_TJ-q-rpSujZMudIGnqsWktEL-RRrZQVNtar03-aPnxCOMyu4gJmWQemhMirvmhyphenhyphenT66uF0k67tsnYRghbWt_OB7fcABKRU-k1_fStqElKGR4gUSrTqHp-hkeCEfdTC-XFYeAT8h5YV-cXiY66YWAFcxHQx2cZyPnuZxwEK8C5BthU9hOYtcbpSUKm' :
                    i === 6 ? 'AVvXsEiFbCL3OhpBd6vUCWmyIhsYebfn0Rp3WFOgu0vyRHGIy3t3OfhcCE3VP8GroWu8I9xqp5ZKy_xn30A328C7r7UFK3vM7MtUlwSGpBDgOKJ5OonqYbhhSOU5jxR_DONXce5Olj0O8ahiiD6CElYSuvK0xkbVWB2n1K4G_qSUJCjqBbDH7pJt2Ja4XCT3FA_J' :
                    i === 7 ? 'AVvXsEhgEmFBjloB0Tl1wCpwsZZFiNVmlugDqSydT7qr3hD0c7UQg6o5TDFUum67uq3xXt3WwyEIVoi_YmJeclSRn7quE9VCuxnXJvsOwfMhaJ1ekMaw0O7EGkp0UocRh_SRAPwZPJjaOvzeDYwvYghhX7wHyVeVhAiBo52cqmfglivx-05TNJsFsbDNQjKLNcAd' :
                    i === 8 ? 'AVvXsEiau1PhLYXOnwPOpPANsYw3h-Rfhekp2vpvwXFu5ffbRcZftBsgUy_wO4V4s8kxLxI-RFGo-b-LVSaWYvHsJSrOXQe8cV2I5FKVhxTxavB_G-uJbNjZD8Pp3u8gniLKBEc2GcB3JPFK6dhkj5NHyDmF2et9vSsGDV0ENiBMKSizfoiAguXJIoZwq0fjYW1S' :
                    i === 9 ? 'AVvXsEiKDMw5gxJ4OUCOSW_i1ikEeKxo5Lecsr1caH2f0a4464hTVMIIiyaHVmzcilTp6SY1UXU60WfBI-iwGhCftfjKDiQmv9Ed0Htjv-6y1VE3r1QEi_E_g3t1J-6MhDcJ3TM_kzkzcdLlBbxMZFNCQfhrmxi7281BidP1F9GdWtRhz9nb9GbP3SHCdby-hhJw' :
                    i === 10 ? 'AVvXsEjD6j139cRJQ5-Rz5_Ki-MtoXcgaVOwHD5vOfnxwg8vXJSRHB25sxR1Uru5fIRYaRbLNUuIos0XmSKIHo6B0_iqFFZLpRGEE-OwM-DF6uGDThmRKij2ibAgUt8_sfAp2pL3F2s292E_-oNTJFo0s-epZ4BccE-ENTlh9xrOgVITQM0AYx4V0ePZ3jAm9VVE' :
                    i === 11 ? 'AVvXsEiby4Vf0VG_jY06ef0CjyEIkjrzLI5uNlTVQbspln1EG8eiARX9RvH2pQZLl0cvkjyBmCfjWfFml3iCcwV6Z6XnGrUDbR6EprvolXYOvTU3YGDDzLiHU8YQTevYLHfcT-L1y8L0Wx7RXolY2NR0wVAyWGKpC1mtmAnah6slkOeJpEzIry6nrgCbU0oIuGn3' :
                    i === 12 ? 'AVvXsEgqUk8qnZIt3JWjNPaUSCHvaoF_rlR1k6qhXCKih3uB8tkvVeeY7OQAq7Pj0yr59HuUkrXqwJqUMKTsJUZ_1YjP85qU9MU1-PMy4j_NPE71Z8TLxnaEUJsusmHAgzYpJRD0gr0v6wtAHQwHLLpR8sovbLNWRL4bsDG2tlp1SJe0W0uEaB66oMAgZv-3BXYe' :
                    i === 13 ? 'AVvXsEgUBl3jepNkkp3B2ATb2uHKHcsp_Vi3hjxregIFqjUuvmnDpATWkiGbtz0GkH7RjH9uibu5S39yJDvi5Hqi33kEMpUtk7tPTVPzXuCrzooCRkBDyUxQx8e6ybQY8sF2cPe5J-5ipSZPR3RG6p8GB4DN083fAi2Slbe5cFCEnvwOlayCZYW0Ttj-E7IjYf5U' :
                    'AVvXsEga2Y2_GUWz3KzIRCNKiWWZmTwwXz9s4cz5Tr5Aryvhbat8V_Vz_hBpH6fgh-lNBvgDXPVjnKmDPD91U2hHp2x7pd1XDQapDyZFk9zxPTIQYMUR-4NUaDI2d4Pmugwa9U-Hxim0POp5Mm0K0o7BmVvNsC5SA1UNzBEW993l6CpqJvN-Itk0su7_zlVla-Mz'
                  }/s1280/${img}`}
                  alt={`Hair care gallery ${i+1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 bg-emerald-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">અમારા ફાયદા:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { n: "1", t: "વાળ ખરતા અટકાવે", d: "મૂળને પોષણ આપીને વાળનું ખરવાનું બંધ કરે છે." },
                { n: "2", t: "ખોડાથી મુક્તિ", d: "સ્કેલ્પને ચોખ્ખું અને હેલ્ધી રાખે છે." },
                { n: "3", t: "કુદરતી ચમક", d: "પાતળા વાળને ઘટ્ટ અને રેશમી બનાવે છે." },
                { n: "4", t: "કોઈ આડઅસર નહીં", d: "૧૦૦% નેચરલ અને કેમિકલ મુક્ત." },
                { n: "5", t: "કેમિકલ મુક્ત", d: "કોઈ હાનિકારક કેમિકલ વગર, માત્ર જડીબુટ્ટીઓની શક્તિ." },
                { n: "6", t: "મજબૂત વાળ", d: "પાતળા વાળને ફરીથી ઘટ્ટ અને મજબૂત બનાવો." }
              ].map((b, i) => (
                <div key={i} className="flex gap-6 items-start p-6 bg-emerald-900/50 rounded-2xl border border-emerald-500/20">
                  <span className="text-4xl font-black text-emerald-500/30 shrink-0 leading-none">{b.n}</span>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-2">{b.t}</h3>
                    <p className="text-emerald-100/70">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-emerald-400/10 rounded-2xl text-center border border-emerald-400/20">
              <p className="text-xl font-bold text-emerald-300 italic">"હજારો બહેનો અને ભાઈઓ એ અમારા આયુર્વેદિક કોર્ષ થી ફાયદો મેળવ્યો છે"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Certification :-</h2>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16 border-4 border-emerald-100">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEc9r0YjlslgT7HJkArSJoINKZKPNN3Ar7e7j2HYzDZli7mKqd5GTHU-7fNArQL4rA38KgBQ5y5KwRvsAT8qeBhiYlkNI_AFoSgvuD-RA8iwHJcEC1taOHkcBylGSFtD4KWJJL-LRWwo2tYlbgich1q5GyJPj2fSJbeLXu2XCU_-oR2lk0iYhMYR1lTDM5/s1280/1003080746.jpg"
              alt="Certifications"
              width={1280}
              height={720}
            />
          </div>

          <div className="bg-neutral-100 rounded-[3rem] p-12 md:p-20 shadow-inner">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-8 leading-tight">
              "ખરતા વાળને કાયમી અલવિદા કહેવા માટે <br />
              અત્યારે જ અમારો સંપર્ક કરો!"
            </h2>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="tel:9687105624" 
                className="flex items-center gap-4 text-3xl md:text-5xl font-black text-emerald-700 hover:scale-105 transition-transform"
              >
                <div className="p-4 bg-emerald-100 rounded-full">
                  <Phone className="w-10 h-10" />
                </div>
                96871 05624
              </a>
              <p className="text-neutral-500 font-medium">નિષ્ણાત સાથે વાત કરવા માટે ઉપરના નંબર પર કોલ કરો</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;