"use client";

import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";
import { FaLeaf, FaInfinity, FaUserMd, FaUtensils, FaDumbbell, FaFireAlt, FaSmileBeam, FaShieldAlt } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";

export default function WeightLossLogic() {
  const benefits = [
    { title: "સંપૂર્ણ આયુર્વેદિક", desc: "કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી", icon: <FaLeaf className="text-herbal" size={24} /> },
    { title: "કાયમી વજન ઘટાડો", desc: "પાચન શક્તિ વધારીને વજન ઓછું કરશે", icon: <FaInfinity className="text-blue-600" size={24} /> },
    { title: "ડોક્ટર સર્ટિફાઇડ", desc: "આયુર્વેદિક ડોકટરો દ્વારા પ્રમાણિત કીટ", icon: <FaUserMd className="text-red-500" size={24} /> },
    { title: "કોઈ ડાયેટિંગ નહીં", desc: "ભૂખ્યા રહેવાની કે ડાયેટ કરવાની જરૂર નથી", icon: <FaUtensils className="text-orange-500" size={24} /> },
    { title: "કોઈ કસરત જરૂર નથી", desc: "GYM , YOGA કે વધારાની મહેનતની જરૂર નથી", icon: <FaDumbbell className="text-gray-600" size={24} /> },
    { title: "હઠીલી ચરબી દુર", desc: "ફાંદ , હિપ્સ , થાઈસ, અને છાતીની ચરબી દુર કરશે", icon: <FaFireAlt className="text-red-600" size={24} /> },
    { title: "ઉપયોગમાં સરળ", desc: "ટેબલેટ (ગોળીઓ) આવશે, ઉપયોગમાં ખૂબ જ સરળ", icon: <FaSmileBeam className="text-yellow-500" size={24} /> },
    { title: "પાચન સમસ્યામાં રાહત", desc: "ગેસ, એસીડીટી, કબજિયાત દુર કરશે", icon: <GiStomach className="text-green-600" size={24} /> },
    { title: "ગંભીર બીમારીથી બચાવ", desc: "વધારે વજનથી થતી 40+ બીમારીઓથી બચાવશે", icon: <FaShieldAlt className="text-indigo-600" size={24} /> }
  ];

  return (
    <section className="py-16 bg-beige/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Section 1: Methods and Failure */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <XCircle className="text-red-500 shrink-0" size={36} />
              વજન ઘટાડવા માટે ના ઉપાયો ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-red-100 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  અત્યારે વજન ઓછું કરવા માટે લોકો ઘણાં પ્રયત્નો કરતા હોય છે જેમ કે..
                </p>
                <div className="flex flex-wrap gap-3">
                  {["GYM", "ડાયેટ", "YOGA", "એક સમય જમવાનું બંધ"].map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-red-50 text-red-700 rounded-full font-bold text-sm">
                      {i + 1}. {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">
                  તેમજ કેમિકલ યુક્ત કે સ્ટીરોઇડ વાળી દવાઓ પણ લેય છે.
                </p>
                <div className="p-4 bg-red-50 rounded-2xl border-l-4 border-red-500">
                  <p className="text-red-800 font-medium">
                    પરંતુ તેઓ વજન ઓછું કરવામાં નિષ્ફળ જાય છે અથવા વજન ઓછું તો કરી લે છે પણ બંધ કર્યા પછી તેમનું વજન ફરીથી વધી જાય છે કારણ કે તેઓ વજન ઓછું કરવા માટે સાચો રસ્તો નથી આપનાવતા…
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <CheckCircle2 className="text-herbal" size={32} />
                  વજન ઘટાડવા માટેનો સાચો રસ્તો ક્યો છે ??
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="p-5 bg-white rounded-2xl shadow-sm border border-beige flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-beige flex items-center justify-center font-bold text-herbal shrink-0">1</span>
                    <p>માત્ર ચરબી ઓગાળીને વજન ઘટાડવો એટલે કે <strong>કામચલાઉ સોલ્યુશન</strong> (GYM – ડાયેટ – YOGA – કસરત – કેમિકલ યુક્ત દવાઓ – સર્જરી વગેરે ..જેમાં માત્ર ચરબી દૂર થાય..)</p>
                  </div>
                  <div className="p-5 bg-white rounded-2xl shadow-md border-2 border-herbal/20 flex gap-4 ring-4 ring-herbal/5">
                    <span className="w-8 h-8 rounded-full bg-herbal text-white flex items-center justify-center font-bold shrink-0">2</span>
                    <p>આયુર્વેદ મુજબ વજન વધવાના મુખ્ય કારણ નું સોલ્યુશન કરીને વજન ઘટાડવો એટલે <strong>કાયમી સૉલ્યુશન..</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Why it increases again */}
          <div className="bg-herbal rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  તમે ક્યો રસ્તો અપનાવશો કાયમી કે કામચલાઉ ?
                </h2>
                <p className="text-herbal-light text-lg opacity-90 leading-relaxed">
                  મોટાં ભાગના લોકો ઝડપથી વજન ઘટાડવા માટે કામચલાઉ રસ્તાઓ આપનાવે છે. પરંતુ તેઓ જેટલા દિવસ નિયમિત ઉપયોગ કરે ત્યાં સુધી જ શરીરમાં ફરક દેખાય છે. જેવું બંધ કરી દે એટલે તેમનું વજન ફરીથી વધવા લાગે છે.
                </p>
                <div className="space-y-3">
                  <p className="font-bold text-xl mb-4">સાથે બીજી પણ ઘણી બધી તકલીફો થાય છે જેમકે…</p>
                  {["કમજોરી આવવ", "ચક્કર આવવા", "ચામડી લુઝ પડવી"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-gold truncate rounded-full"></div>
                      <span>{i + 1}. {t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 space-y-6">
                <h3 className="text-2xl font-bold">પરંતુ જો તમે કાયમી સોલ્યુશન તરફ જવા માંગતા હોવ...</h3>
                <p className="text-lg">તો વજન વધવા પાછળ નું મુખ્ય કારણ જાણવું જરૂરી છે ..</p>
                <div className="p-4 bg-gold/20 rounded-xl border-l-4 border-gold text-gold-light">
                  વજન વધવાનું મુખ્ય કારણ વ્યક્તિની ડાયજેસ્ટીવ સિસ્ટમ એટલે <strong>પચન સાયકલ</strong> નિયમિત ન હોય તે છે.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Deep Dive into Root Cause */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">વજન વધવાનું મુખ્ય કારણ કયું છે ?</h2>
              <div className="w-24 h-1 bg-herbal mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center space-y-4">
                <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mx-auto text-herbal">
                  <Zap size={32} />
                </div>
                <h4 className="text-xl font-bold">અનીયમીત પાચન</h4>
                <p className="text-gray-600">જે વ્યક્તિની પાચન સાયકલ અનીયમીત હોય તેને જમેલા ખોરાકનું સીધું ચરબીમાં રૂપાંતર થઈ જાય છે.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center space-y-4">
                <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mx-auto text-herbal">
                  <Activity size={32} />
                </div>
                <h4 className="text-xl font-bold">મેટાબોલિઝ્મ</h4>
                <p className="text-gray-600">જેમનું વજન નથી વધતું તેમનું પાચન તંત્ર નિયમિત છે, જેથી તે જે કંઈ પણ જમે છે તેનું પાચન થઈ જાય છે.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center space-y-4">
                <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mx-auto text-herbal">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-xl font-bold">કાયમી સૉલ્યુશન</h4>
                <p className="text-gray-600">સૌથી પહેલા તમારા ડાયજેસ્ટીવ સિસ્ટમને પ્રોપર કરવી જ પડશે, નહીતર વજન ફરીથી પાછું વધી જશે.</p>
              </div>
            </div>

            <div className="bg-beige p-8 sm:p-12 rounded-4xl border border-herbal/10 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">વજન ઘટાડવા છતાં કેમ ફરીથી વધી જાય છે ??</h3>
              <p className="text-gray-700 leading-relaxed">
                માર્કેટમાં મળતી 90 થી 95 ટકા દવાઓ કે ટ્રીટમેન્ટ માત્ર ને માત્ર જૂની ચરબી ઓગાળવાનું કાર્ય કરે છે નવી ચરબી બને છે એના પર કોઈ પણ પ્રકારનું કાર્ય કરતી નથી. એટલે કે ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ પર કાર્ય કરતી નથી.
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-herbal shadow-sm">
                <p className="text-herbal font-bold italic">
                  જો તમારે વજન ઓછું કરવું જ હોય તો કાયમી માટે ઓછું કરવું (પરમેનેન્ટ) જોઈએ કારણ કે કામ ચલાઉ સોલ્યુશન અપનાવશો તો ફરીથી વજન વધી જશે.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: The 90 Day Solution */}
          <div className="text-center space-y-8 py-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">કાયમ માટે (પરમેનેન્ટ) વજન ઘટાડવા માટે શું કરવું ?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  કાયમ માટે (પરમેનેન્ટ) વજન ઘટાડવા માટેની અમારી આયુર્વેદિક કીટ આવશે, જે મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ પર કાર્ય કરે છે.
                </p>
                <div className="p-4 bg-green-50 rounded-2xl border-l-4 border-herbal text-green-900 font-medium">
                  જેનો 90 દિવસનો કોર્સ પૂરો કરશો એટલે તમારું વજન તો ઓછું થશે જ, સાથે – સાથે શરીરમાં એક્સ્ટ્રા ચરબીને દૂર કરશે.
                </div>
                <ul className="space-y-4">
                  {[
                    "ફાંદ, હિપ્સ, થાઇસ, અને છાતીની ચરબી દુર કરશે",
                    "આ કીટની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી",
                    "પાચન તંત્રને એકદમ નિયમિત કરી આપશે"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="text-herbal shrink-0" size={24} />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-herbal/10 rounded-[2.5rem] blur-xl group-hover:bg-herbal/20 transition-all"></div>
                <div className="relative bg-white p-8 rounded-4xl shadow-xl border border-beige space-y-6">
                  <h4 className="text-2xl font-bold text-herbal">અમારી આયુર્વેદિક કીટ કઈ રીતે કાર્ય કરશે ?</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>સૌથી પહેલા તમારી પચન સાયકલ ને નિયમિત કરશે જેથી તમારું શરીર નકામી અને વધારાની ચરબી નહિ બનાવે.</p>
                    <p>આયુર્વેદિક રીતે શરીરમાં જમા થયેલી નકામી ચરબીને ઓગાળીને દૂર કરશે.</p>
                    <p>ઓગળેલી ચરબીને મળ અને મૂત્ર સ્વરૂપે શરીરમાંથી બહાર કાઢશે અને તમારું પેટ સાફ કરશે..</p>
                  </div>
                  <a 
                    href="#order"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-herbal text-white rounded-xl font-bold hover:bg-green-800 transition-colors shadow-lg shadow-herbal/30"
                  >
                    ઑર્ડર માટે અહીંયા ક્લિક કરો
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Kit Benefits */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 uppercase tracking-wide">
              આયુર્વેદીક કીટ થી થતા ફાયદાઓ
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50 flex gap-4">
                  <div className="w-12 h-12 bg-beige/50 rounded-xl flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">{benefit.title}</h5>
                    <p className="text-sm text-gray-600 font-hindi leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center py-10">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto">
              જો તમે પણ સંપુર્ણ આયુર્વેદિક રીતે વજન ઓછું કરવા માંગતા હોવ તો આજે જ ટ્રાય કરો આયુર્વેદિક કીટ….
            </p>
            <a 
              href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82" 
              className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-white rounded-full font-bold text-xl hover:bg-gold-dark transition-all shadow-xl shadow-gold/30 hover:scale-105 active:scale-95"
            >
              Order Now
              <ArrowRight size={24} />
            </a>
            <p className="mt-6 text-herbal font-bold">માત્ર 90 દિવસમાં તમને બનાવશે ફેટ માંથી ફીટ</p>
          </div>

        </div>
      </div>
    </section>
  );
}
