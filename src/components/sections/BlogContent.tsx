"use client";

import BmiCalculator from "@/components/BmiCalculator";
import { FaCheckCircle, FaExclamationTriangle, FaLeaf, FaArrowRight } from "react-icons/fa";

// ─── Reusable image component with flexible sizing ──────────────────────────
function BlogImage({ 
  src, 
  alt = "", 
  linkHref, 
  maxWidth = "max-w-md" 
}: { 
  src: string, 
  alt?: string, 
  linkHref?: string,
  maxWidth?: string
}) {
  const img = (
    <img
      src={src}
      alt={alt}
      className={`w-full ${maxWidth} h-auto block my-8 mx-auto rounded-2xl shadow-xl border border-stone-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
    />
  );
  if (linkHref) {
    return (
      <a href={linkHref} target="_blank" rel="noreferrer" className="block cursor-zoom-in">
        {img}
      </a>
    );
  }
  return img;
}

export default function BlogContent() {
  const ORDER_LINK = "https://wa.me/message/JBAPTQYQ6RH6K1";

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Decorative background elements to "blend" with herbal theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-herbal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* ── Intro Section ─────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય..
          </h2>
          <div className="w-20 h-1.5 bg-herbal mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે
            છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને
            કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…
          </p>
        </div>

        <BlogImage src="/images/blog/hero.jpg" alt="વજન ઘટાડવો" linkHref="/images/blog/hero.jpg" maxWidth="max-w-md" />

        {/* ── Height & Obesity Section ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-24 py-16 bg-stone-50/50 rounded-[3rem] px-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                <FaLeaf size={20} />
              </span>
              ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?
            </h2>
            <BlogImage src="/images/blog/weightChart.jpg" alt="ઊંચાઈ પ્રમાણે વજન" linkHref="/images/blog/weightChart.jpg" maxWidth="max-w-md" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-600 italic leading-snug">
              - જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની
              શકો છો જેવી કે….
            </h2>
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-red-100">
               <BmiCalculator />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-20">
          <BlogImage src="/images/blog/diseases.jpg" alt="ગંભીર બીમારીઓ" linkHref="/images/blog/diseases.jpg" maxWidth="max-w-md" />
          <p className="text-xl font-bold text-center text-gray-900 mt-8 mb-4 px-4 bg-gold/10 py-4 rounded-2xl">
            - પોતાનું વજન શા માટે ઘટાડવા જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
          </p>
        </div>

        {/* ── Methods & Failure Section ──────────────────────────────────────── */}
        <div className="my-24 pt-16 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">• વજન ઘટાડવા માટે ના ઉપાયો ?</h2>
            <p className="text-gray-600">અત્યારે વજન ઓછું કરવા માટે લોકો ઘણાં પ્રયત્નો કરતા હોય છે:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex flex-wrap gap-3">
                {['GYM', 'ડાયેટ', 'YOGA', 'કેમિકલ દવાઓ'].map(item => (
                  <span key={item} className="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold text-gray-700">{item}</span>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                પરંતુ તેઓ વજન ઓછું કરવામાં નિષ્ફળ જાય છે અથવા વજન ઓછું તો કરી લે છે પણ બંધ કર્યા
                પછી તેમનું વજન ફરીથી વધી જાય છે કારણ કે તેઓ વજન ઓછું કરવા માટે <span className="text-red-500 font-bold uppercase underline">સાચો રસ્તો</span> નથી આપનાવતા…
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-herbal/5 rounded-full blur-2xl"></div>
              {/* Remedies image failed to download (404), using a decorative block or placeholder description */}
              <div className="relative bg-stone-50 h-64 rounded-3xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-stone-200">
                <FaExclamationTriangle size={48} className="text-gold mb-4 opacity-50" />
                <p className="text-sm text-stone-500 italic">વજન ઘટાડવાના ખોટા રસ્તાઓ તરફ ન જાવ</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── The Right Way Section ─────────────────────────────────────────── */}
        <div className="my-24 py-20 bg-herbal text-white rounded-[3rem] px-8 sm:px-16 shadow-2xl shadow-herbal/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">• વજન ઘટાડવા માટેનો સાચો રસ્તો ક્યો છે ??</h1>
            <p className="text-lg text-herbal-light/90 mb-10">– આપણું વજન ઘટાડવાના મુખ્ય 2 રસ્તાઓ હોય છે.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <h3 className="text-gold font-bold text-xl mb-4">૧. કામચલાઉ સોલ્યુશન</h3>
                <p className="text-sm leading-relaxed opacity-90">માત્ર ચરબી ઓગાળવી (GYM, ડાયેટ, YOGA, કસરત, દવાઓ). આમાં માત્ર ચરબી દૂર થાય છે, કારણ નહીં.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <h3 className="text-gold font-bold text-xl mb-4">૨. કાયમી સૉલ્યુશન</h3>
                <p className="text-sm leading-relaxed opacity-90">આયુર્વેદ મુજબ વજન વધવાના મુખ્ય કારણ નું સોલ્યુશન કરવું. જે કાયમ માટે અસરકારક રહે છે.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6 italic">તમે ક્યો રસ્તો અપનાવશો?</h2>
              <p className="max-w-2xl mx-auto opacity-90 leading-relaxed mb-8">
                મોટાં ભાગના લોકો ઝડપથી વજન ઘટાડવા માટે કામચલાઉ રસ્તાઓ અપનાવે છે, પરંતુ જેવું બંધ કરી દે એટલે તેમનું વજન ફરીથી વધવા લાગે છે અને કમજોરી, ચક્કર જેવી સમસ્યાઓ થાય છે.
              </p>
              <BlogImage src="/images/blog/sideEffects.jpg" alt="સાઇડ ઈફેક્ટ" maxWidth="max-w-md" />
            </div>
          </div>
        </div>

        {/* ── Main Cause: Digestive System ───────────────────────────────────── */}
        <div className="my-24 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1 bg-gold/10 text-gold font-bold rounded-lg uppercase tracking-wider text-sm">
                Root Cause Analysis
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                • વજન વધવાનું મુખ્ય કારણ કયું છે ?
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                મુખ્ય કારણ છે <span className="font-bold text-gray-900 border-b-4 border-gold/30">ડાયજેસ્ટીવ સિસ્ટમ (પાચન સાયકલ)</span>. 
                જ્યારે પાચન અનિયમિત હોય ત્યારે ખોરાકનું પાચન થવાને બદલે સીધું ચરબીમાં રૂપાંતર થાય છે જે શરીરમાં અલગ અલગ ભાગમાં જમાં થાય છે.
              </p>
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 italic text-stone-600">
                "તેથી જ અમુક લોકો ગમે તેટલું ખાય છતાં વજન વધતું નથી, કારણ કે તેમનું પાચનતંત્ર નિયમિત છે."
              </div>
            </div>
            <div className="flex-1">
              <BlogImage src="/images/blog/digestive.jpg" alt="ડાયજેસ્ટીવ સિસ્ટમ" maxWidth="max-w-md" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
            <BlogImage src="/images/blog/fastFood.jpg" alt="ફાસ્ટ ફૂડ" maxWidth="max-w-md" />
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                જો તમે તમારું વજન કાયમી માટે ઘટાડવા માંગતા હોવ તો તમારે સૌથી પહેલા તમારા ડાયજેસ્ટીવ
                સિસ્ટમને પ્રોપર કરવી જ પડશે. જો તમે GYM, ડાયેટ કે કસરતથી વજન ઘટાડશો તો એ ફરીથી વધી જ જશે.
              </p>
              <BlogImage src="/images/blog/weightGain.jpg" alt="ફરીથી વધી જાય" maxWidth="max-w-md" />
            </div>
          </div>
        </div>

        {/* ── Permanent Solution ─────────────────────────────────────────────── */}
        <div className="my-24 py-20 bg-stone-50 rounded-[3rem] border border-stone-100 flex flex-col items-center">
          <div className="max-w-4xl w-full px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">• કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટે શું કરવું ?</h1>
            
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-stone-200/50 mb-12">
              <p className="text-lg text-gray-600 mb-10 leading-relaxed text-center">
                અમારી આયુર્વેદિક કીટ મેટાબોલિઝ્મ અને ડાયજેસ્ટીવ સિસ્ટમ પર કાર્ય કરે છે. 
                આ કીટની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી અને તે 90 દિવસમાં જબરદસ્ત પરિણામ આપે છે.
              </p>
              
              <h2 className="text-xl font-bold text-herbal mb-8 text-center tracking-wide">આ કીટ કઈ રીતે કાર્ય કરશે?</h2>
              
              <div className="space-y-4">
                {[
                  "પાચન સાયકલ ને નિયમિત કરશે જેથી નવી ચરબી બનતી અટકી જશે.",
                  "શરીરમાં જમા થયેલી નકામી ચરબીને કુદરતી રીતે ઓગાળીને દૂર કરશે.",
                  "ચરબીને મળ અને મૂત્ર સ્વરૂપે શરીરમાંથી બહાર કાઢી પેટ સાફ કરશે."
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-stone-50/50 border border-stone-100 hover:bg-stone-50 hover:border-herbal/20 transition-all duration-300">
                    <span className="w-8 h-8 rounded-full bg-herbal flex items-center justify-center text-white shrink-0 font-bold text-sm">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center py-12 space-y-8">
              <div className="inline-flex items-center gap-2 text-gold font-bold animate-pulse">
                <FaArrowRight /> ઑર્ડર કરવા માટે નીચે ક્લિક કરો <FaArrowRight />
              </div>
              <a
                href={ORDER_LINK}
                target="_blank"
                rel="noreferrer"
                className="block group relative"
              >
                <div className="absolute -inset-4 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500"></div>
                <img 
                  src="/images/blog/orderBtn.jpg" 
                  alt="Order Now" 
                  className="max-w-[320px] mx-auto transition-all duration-500 group-hover:scale-110 group-active:scale-95 relative z-10" 
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
