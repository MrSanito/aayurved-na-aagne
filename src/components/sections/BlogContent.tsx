"use client";

import BmiCalculator from "@/components/BmiCalculator";

// ─── Reusable image component ────────────────────────────────────────────────
function BlogImage({ src, alt = "", linkHref }: { src: string, alt?: string, linkHref?: string }) {
  const img = (
    <img
      src={src}
      alt={alt}
      className="w-full max-w-md h-auto block my-8 mx-auto rounded-2xl shadow-xl border border-stone-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
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
    <section className="py-12 md:py-16 bg-stone-50/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 leading-relaxed text-stone-700 font-sans text-base sm:text-lg">
          
          <div className="border-b-2 border-green-50 pb-4 mb-8">
            <h1 className="text-lg sm:text-xl font-bold text-green-800">
              AAYURVED NA AANGNE
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2 leading-tight">
            વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય..
          </h2>

          <p className="mb-8 mt-6">
            આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે
            છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને
            કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…
          </p>

          <BlogImage src="/images/blog/hero.jpg" alt="વજન ઘટાડવો" linkHref="/images/blog/hero.jpg" />

          {/* ── Section 1 ── */}
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-12 mb-6">ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?</h2>
          <BlogImage src="/images/blog/weightChart.jpg" alt="ઊંચાઈ પ્રમાણે વજન" linkHref="/images/blog/weightChart.jpg" />


          <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100/50 my-8">
              <BmiCalculator />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-red-600 mt-12 mb-6 italic leading-snug">
            - જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો જેવી કે….
          </h2>
          
          <BlogImage src="/images/blog/diseases.jpg" alt="ગંભીર બીમારીઓ" linkHref="/images/blog/diseases.jpg" />

          <p className="font-bold text-stone-900 my-8">
            - પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
          </p>

          {/* ── Section 2 ── */}
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-12 mb-4">• વજન ઘટાડવા માટે ના ઉપાયો ?</h2>
          <p className="mb-6">અત્યારે વજન ઓછું કરવા માટે લોકો ઘણાં પ્રયત્નો કરતા હોય છે જેમ કે..</p>
          <BlogImage src="/images/blog/wrong_methods.jpg" alt="ઉપાયો" linkHref="/images/blog/wrong_methods.jpg" />

          <p className="my-4">
            1. GYM – 2. ડાયેટ – 3. YOGA – 4. એક સમય જમવાનું બંધુ કરી દેય તેમજ કેમિકલ યુક્ત કે
            સ્ટીરોઇડ વાળી દવાઓ પણ લેય છે.
          </p>
          <p className="my-4 italic text-stone-600">
            – પરંતુ તેઓ વજન ઓછું કરવામાં નિષ્ફળ જાય છે અથવા વજન ઓછું તો કરી લે છે પણ બંધ કર્યા
            પછી તેમનું વજન ફરીથી વધી જાય છે કારણ કે તેઓ વજન ઓછું કરવા માટે સાચો રસ્તો નથી
            આપનાવતા…
          </p>

          {/* ── Section 3 ── */}
          <h1 className="text-2xl sm:text-3xl font-bold text-herbal mt-12 mb-6 leading-tight">• વજન ઘટાડવા માટેનો સાચો રસ્તો ક્યો છે ??</h1>
          <p className="mb-4 font-bold text-stone-800">– આપણું વજન ઘટાડવાના મુખ્ય 2 રસ્તાઓ હોય છે.</p>
          <ol className="list-decimal pl-6 space-y-3 mb-8">
            <li>
              માત્ર ચરબી ઓગાળીને વજન ઘટાડવો એટલે કે કામચલાઉ સોલ્યુશન ( GYM – ડાયેટ – YOGA –
              કસરત – કેમિકલ યુક્ત દવાઓ – સર્જરી વગેરે ..જેમાં માત્ર ચરબી દૂર થાય..)
            </li>
            <li>
              આયુર્વેદ મુજબ વજન વધવાના મુખ્ય કારણ નું સોલ્યુશન કરીને વજન ઘટાડવો એટલે કાયમી
              સૉલ્યુશન..
            </li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-12 mb-6">• તમે ક્યો રસ્તો અપનાવશો કાયમી કે કામચલાઉ ?</h2>
          <p className="my-4">
            – મોટાં ભાગના લોકો ઝડપથી વજન ઘટાડવા માટે કામચલાઉ રસ્તાઓ આપનાવે છે જેમ કે GYM ,
            ડાયેટ , YOGA કે પછી સ્ટીરોઇડ વાળી દવાઓ અથવા ઓપરેશન કરાવતા હોય છે.
          </p>
          <p className="my-4">
            – પરંતુ તેઓ જેટલા દિવસ નિયમિત ઉપયોગ કરે ત્યાં સુધી જ શરીરમાં ફરક દેખાય અથવા વજન ઓછું
            થાય છે
          </p>
          <p className="my-4">
            – જેવું બંધ કરી દે એટલે તેમનું વજન ફરીથી વધવા લાગે છે. અને સાથે સાથે બીજી પણ ઘણી
            બધી તકલીફો થાય છે જેમકે…
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-8 text-stone-600 font-medium">
            <li>કમજોરી આવવ</li>
            <li>ચક્કર આવવા</li>
            <li>ચામડી લુઝ પડવી વગેરે..</li>
          </ol>

          <BlogImage src="/images/updatedImages/sideEffects1.jpg" alt="સાઇડ ઈફેક્ટ" linkHref="/images/updatedImages/sideEffects1.jpg" />

          <p className="my-8 font-bold text-stone-800">
            પરંતુ જો તમે કાયમી સોલ્યુશન તરફ જવા માંગતા હોવ તો વજન વધવા પાછળ નું મુખ્ય કારણ
            જાણવું જરૂરી છે ..
          </p>

          {/* ── Section 4 ── */}
          <h1 className="text-2xl sm:text-3xl font-bold text-herbal mt-12 mb-6 leading-tight">• વજન વધવાનું મુખ્ય કારણ કયું છે ?</h1>
          <p className="my-6">
            – વજન વધવાનું મુખ્ય કારણ વ્યક્તિની <span className="font-bold underline decoration-herbal border-b border-herbal pb-1">ડાયજેસ્ટીવ સિસ્ટમ એટલે પચન સાયકલ</span> નિયમિત ન હોય
            જેથી ખાધેલા ખોરાકનું પાચન ન થાય અને પાચન ન થયેલા ખોરાકનું ચરબીમાં રૂપાંતર થતું રહે
            અને તે ચરબી વ્યક્તિના શરીરમાં અલગ અલગ ભાગમાં જમાં થતી રહે છે. જેથી આપણું વજન સતત
            વધતું રહે…
          </p>

          <BlogImage src="/images/updatedImages/digestive1.jpeg" alt="ડાયજેસ્ટીવ સિસ્ટમ" linkHref="/images/updatedImages/digestive1.jpeg" />

          <p className="my-6">
            – આપણે જે ખોરાક ખાઈએ તેમાંથી ઉપર મુજબ 7 અલગ અલગ તત્વો બને છે.. જે વ્યક્તિની પાચન
            સાયકલ અનીયમીત હોય તેને જમેલા ખોરાકનું સીધું ચરબીમાં રૂપાંતર થઈ જાય અને તે ચરબી ના
            કારણે તેમનો વજન વધતો રહે છે..
          </p>
          <p className="my-6">
            – અને તમારા ફેમિલી કે મિત્ર સર્કલમાં અમુક લોકો તમારાથી બે ગણુ કે એનાથી પણ વધારે
            જમતા હોય , બેઠાડું જીવન પણ જીવતા હોય અને બહારનું ફાસ્ટ ફૂડ પણ ખાતા હોય છતાં તેનું
            વજન વધતું નથી…
          </p>

          <BlogImage src="/images/updatedImages/fastFood!.jpeg" alt="ફાસ્ટ ફૂડ" linkHref="/images/updatedImages/fastFood!.jpeg" />

          <p className="my-4">
            જો માત્ર બેઠાડું જીવન કે બહારનું ફાસ્ટ ફૂડ ખાવાથી વજન વધતું હોય તો દુનિયમાં રહેલા
            દરેક લોકો નો વજન વધવો જોઈએ ..?? પણ આવું થતું નથી સાચું ને ??
          </p>
          <p className="my-4">
            જેમનું વજન નથી વધતું તે વ્યક્તિ નું પાચન તંત્ર ( ડાયજેસ્ટીવ સિસ્ટમ ) નિયમિત છે
            જેથી એ વ્યક્તિ જે કંઈ પણ જમે છે એ વસ્તુનું તેને પાચન થઈ જાય જેના કારણે તેનું વજન
            વધતું નથી..
          </p>
          <p className="my-4 font-bold text-stone-800">
            અને અત્યારે તમારું પાચનતંત્ર | પાચન સાયકલ નિયમિત નથી જેથી તમે જે કંઈ પણ જમો છો એ
            ખોરાક પાચન થવાના બદલે ચરબીમાં રૂપાંતર થતું રહે છે અને એ ચરબી તમારા શરીરના જુદા જુદા
            ભાગમાં જમાં થતી રહે છે . જેના કારણે તમારું વજન સતત વધતું રહે છે …
          </p>
          <p className="my-4 italic !text-red-600 font-bold border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-xl">
            જૉ તમે તમારું વજન કાયમી માટે ઘટાડવા માંગતા હોવ તો તમારે સૌથી પહેલા તમારા ડાયજેસ્ટીવ
            સિસ્ટમ ( પાચન સાયક ) ને પ્રોપર કરવી જ પડશે જો તમે GYM, ડાયેટ, કસરત, કે કેમિકલ યુક્ત
            દવાઓ થી વજન ઘટાડશો તો એ ફરીથી પાછું વધી જ જશે…
          </p>

          {/* ── Section 5 ── */}
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-12 mb-6">• વજન ઘટાડવા છતાં કેમ ફરીથી વધી જાય છે ??</h2>
          <p className="my-4">
            માર્કેટમાં મળતી 90 થી 95 ટકા દવાઓ કે ટ્રીટમેન્ટ માત્ર ને માત્ર જૂની ચરબી ઓગાળવાનું
            કાર્ય કરે છે નવી ચરબી બને છે એના પર કોઈ પણ પ્રકારનું કાર્ય કરતી નથી એટલે કે
            ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ પર કાર્ય કરતી નથી, જેથી માર્કેટમાં મળતી દવાઓ કે
            ટ્રીટમેન્ટ લેવાથી તમારું વજન તો ઘટી જાય છે. પણ જેવી એ દવાઓ કે ટ્રીટમેન્ટ બંધ કરો
            એટલે તમારું વજન ફરીથી વધવા લાગે છે…
          </p>

          <BlogImage src="/images/updatedImages/weightGain1.jpeg" alt="ફરીથી વધી જાય" linkHref="/images/updatedImages/weightGain1.jpeg" />

          <p className="my-8 font-bold text-center text-stone-900 bg-gold/10 p-4 rounded-xl">
            જો તમારે વજન ઓછું કરવું જ હોય તો કાયમી માટે ઓછું કરવું ( પરમેનેન્ટ ) જોઈએ કારણ કે
            કામ ચલાઉ સોલ્યુશન અપનાવશો તો ફરીથી વજન વધી જશે જેથી તમારો સમય અને પૈસા બન્ને
            બગડશે…. આ વાત વિચારજો ખરા….
          </p>

          {/* ── Section 6 ── */}
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-12 mb-6 leading-tight">• કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટે શું કરવું ?</h1>
          <p className="my-6">
            કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટેની અમારી આયુર્વેદિક કીટ આવશે , જે મેટાબોલિઝ્મ
            સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ ( પાચન તંત્ર ) પર કાર્ય કરે છે. અને જેનો 90 દિવસનો
            કોર્સ પૂરો કરશો એટલે તમારું વજન તો ઓછું થશે જ, સાથે – સાથે તમારા શરીરના જુદા જુદા
            ભાગો જેવાકે ફાંદ, હિપ્સ, થાઇસ , છાતી વગેરે પર જામેલી એક્સ્ટ્રા ચરબીને દૂર કરશે ,
            અને આ કીટની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-herbal mt-10 mb-6">• અમારી આયુર્વેદિક કીટ કઈ રીતે કાર્ય કરશે ?</h2>
          <div className="space-y-4 mb-10 text-stone-700 bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <p className="flex items-start gap-2">
              <span className="text-herbal font-bold mt-1">✓</span>
              <span>સૌથી પહેલા તમારી મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ ને નિયમિત કરશે જેથી તમારું શરીર નકામી અને વધારાની ચરબી નહિ બનાવે….</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-herbal font-bold mt-1">✓</span>
              <span>જેથી તમારું વજન વધતું અટકી જશે અને જો તમે નીયમીત 90 દિવસ અમારી આ કીટ ઉપયોગ કરો છો તો તમારું પાચન તંત્રને એકદમ નિયમિત થઈ જશે જેથી તમારું વજન ઓછું થયા પછી ફરીથી વધવાની સંભાવના રહેતી નથી..</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-herbal font-bold mt-1">✓</span>
              <span>આયુર્વેદિક રીતે શરીરમાં જમા થયેલી નકામી ચરબીને ઓગાળીને દૂર કરશે જેથી ફાંદ, થાઇસ, હિપ્સ અને છાતી પર જમા થયેલી વધારાની ચરબી પણ દૂર થશે.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-herbal font-bold mt-1">✓</span>
              <span>ઓગળેલી ચરબીને મળ અને મૂત્ર સ્વરૂપે શરીરમાંથી બહાર કાઢશે અને તમારું પેટ સાફ કરશે..</span>
            </p>
          </div>

          {/* Order button */}
          <div className="text-center my-12">
            <p className="font-bold text-xl mb-6 text-stone-900 animate-pulse">
              ઑર્ડર માટે અહીંયા ક્લિક કરો
            </p>
            <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="inline-block group relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500"></div>
              <img
                src="/images/blog/orderBtn.jpg"
                alt="Order Now"
                className="max-w-[320px] w-full mx-auto rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95 relative z-10"
              />
            </a>
          </div>

          {/* ── Reviews ── */}
          <div className="my-16 border-t border-stone-100 pt-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-stone-900 mb-8">• અમારી આયુર્વેદીક કીટ ના RESULT &amp; REVIEW</h1>
            <BlogImage src="/images/blog/review1.jpg" alt="Review 1" linkHref="/images/blog/review1.jpg" />
            <BlogImage src="/images/blog/review2.jpg" alt="Review 2" linkHref="/images/blog/review2.jpg" />
          </div>

          {/* ── Benefits ── */}
          <div className="my-16 border-t border-stone-100 pt-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-herbal mb-8">• આયુર્વેદીક કીટ થી થતા ફાયદાઓ</h1>
            <ol className="list-decimal pl-6 space-y-4 mb-10 text-stone-700 font-medium bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-inner">
              <li>સંપૂર્ણ આયુર્વેદિક કીટ છે. તેની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી.</li>
              <li>
                મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમને પ્રોપર કરીને વજન ઓછું કરશે જેથી
                તમારું વજન ઓછું થયા પછી ફરીથી વજન વધવાની સંભાવના રહેશે નહી….
              </li>
              <li>આયુર્વેદિક ડોકટરોની ટીમ દ્વારા સર્ટિફાઇડ કીટ છે ..</li>
              <li>કોઇ પણ પ્રકારની ડાયેટ ફોલો નથી કરવાની કે પછી ભૂખ્યા નથી રહેવાનું …</li>
              <li>કસરત – GYM કે YOGA કરવાના નથી રહેતા..</li>
              <li>
                વજન તો ઓછું થશે જ પણ.. સાથે ફાંદ , હિપ્સ , થાઈસ, અને છાતીના ભાગમાં જમાં
                થયેલી હઠીલી ચરબી દૂર કરશે..
              </li>
              <li>
                કીટમાં પાવડર – ફાકી કે લીકવિડ નથી આવતું. આયુર્વેદિક ટેબલેટ ( ગોળીઓ ) આવશે
                જે ઉપયોગ કરવામાં સરળ રહેશે..
              </li>
              <li>
                ગેસ એસીડીટી કબજિયાત અને પાચન સબંધિત પ્રોબ્લેમ માં ફાયદો થશે , તેમજ વધારે
                વજન થી થતી 40 થી વધારે બીમારીઓ માંથી બચાવશે…
              </li>
            </ol>
            
            <div className="bg-herbal/10 text-herbal border border-herbal/20 p-6 rounded-2xl mb-12 font-bold text-lg text-center leading-relaxed">
              • જો તમે પણ સંપુર્ણ આયુર્વેદિક રીતે વજન ઓછું કરવા માંગતા હોવ તો આજે જ Order Now
              પર ક્લિક કરો માત્ર 90 દિવસમાં તમને બનાવશે ફેટ માંથી ફીટ આજે જ ટ્રાય કરો
              આયુર્વેદિક કીટ….
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-center text-stone-900 mb-6">ઑર્ડર કરવા માટે નીચેના બટન પર ક્લિક કરો</h1>
            <div className="text-center">
              <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="inline-block group relative">
                <div className="absolute -inset-4 bg-herbal/10 rounded-full blur-2xl group-hover:bg-herbal/20 transition-all duration-500"></div>
                <img
                  src="/images/blog/orderBtn.jpg"
                  alt="Order Now"
                  className="max-w-[320px] w-full mx-auto rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95 relative z-10"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
