import React from "react";
import { CheckCircle } from "lucide-react";

export const blogs = [
  {
    id: "1",
    title: "વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય..",
    excerpt: "આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", 
    content: (
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p className="font-medium text-lg text-gray-900 border-l-4 border-herbal pl-4 py-1 bg-herbal/5 rounded-r">
            આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…
          </p>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2">ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની શકો છો.</li>
              <li>પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> વજન ઘટાડવા માટે ના ઉપાયો ?
            </h4>
            <p className="mb-2">અત્યારે વજન ઓછું કરવા માટે લોકો ઘણાં પ્રયત્નો કરતા હોય છે જેમ કે..</p>
            <ol className="list-decimal pl-5 mb-2 font-medium">
              <li>GYM</li>
              <li>ડાયેટ</li>
              <li>YOGA</li>
              <li>એક સમય જમવાનું બંધુ કરી દેય તેમજ કેમિકલ યુક્ત કે સ્ટીરોઇડ વાળી દવાઓ પણ લેય છે.</li>
            </ol>
            <p className="text-red-700 bg-red-50 p-3 rounded-lg border border-red-100">
              પરંતુ તેઓ વજન ઓછું કરવામાં નિષ્ફળ જાય છે અથવા વજન ઓછું તો કરી લે છે પણ બંધ કર્યા પછી તેમનું વજન ફરીથી વધી જાય છે કારણ કે તેઓ વજન ઓછું કરવા માટે સાચો રસ્તો નથી આપનાવતા…
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> વજન ઘટાડવા માટેનો સાચો રસ્તો ક્યો છે ??
            </h4>
            <p className="mb-2">આપણું વજન ઘટાડવાના મુખ્ય 2 રસ્તાઓ હોય છે.</p>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-800 block mb-1">1) કામચલાઉ સોલ્યુશન</span>
                <p>માત્ર ચરબી ઓગાળીને વજન ઘટાડવો ( GYM – ડાયેટ – YOGA – કસરત – કેમિકલ યુક્ત દવાઓ – સર્જરી વગેરે ..જેમાં માત્ર ચરબી દૂર થાય..)</p>
              </div>
              <div className="bg-herbal/10 p-4 rounded-xl border border-herbal/20">
                <span className="font-bold text-herbal block mb-1">2) કાયમી સૉલ્યુશન</span>
                <p>આયુર્વેદ મુજબ વજન વધવાના મુખ્ય કારણ નું સોલ્યુશન કરીને વજન ઘટાડવો.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> તમે ક્યો રસ્તો અપનાવશો કાયમી કે કામચલાઉ ?
            </h4>
            <p className="mb-2">મોટાં ભાગના લોકો ઝડપથી વજન ઘટાડવા માટે કામચલાઉ રસ્તાઓ આપનાવે છે જેમ કે GYM , ડાયેટ , YOGA કે પછી સ્ટીરોઇડ વાળી દવાઓ અથવા ઓપરેશન કરાવતા હોય છે. પરંતુ તેઓ જેટલા દિવસ નિયમિત ઉપયોગ કરે ત્યાં સુધી જ શરીરમાં ફરક દેખાય અથવા વજન ઓછું થાય છે.</p>
            <p className="mb-2">જેવું બંધ કરી દે એટલે તેમનું વજન ફરીથી વધવા લાગે છે. અને સાથે સાથે બીજી પણ ઘણી બધી તકલીફો થાય છે જેમકે…</p>
            <ul className="flex flex-wrap gap-3 mb-4">
              <li className="bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">1. કમજોરી આવવી</li>
              <li className="bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">2. ચક્કર આવવા</li>
              <li className="bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">3. ચામડી લુઝ પડવી વગેરે..</li>
            </ul>
            <p className="font-medium text-herbal">પરંતુ જો તમે કાયમી સોલ્યુશન તરફ જવા માંગતા હોવ તો વજન વધવા પાછળ નું મુખ્ય કારણ જાણવું જરૂરી છે ..</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> વજન વધવાનું મુખ્ય કારણ કયું છે ?
            </h4>
            <p className="mb-4">
              વજન વધવાનું મુખ્ય કારણ વ્યક્તિની <strong className="text-gray-900">ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ નિયમિત ન હોય</strong> જેથી ખાધેલા ખોરાકનું પાચન ન થાય અને પાચન ન થયેલા ખોરાકનું ચરબીમાં રૂપાંતર થતું રહે અને તે ચરબી વ્યક્તિના શરીરમાં અલગ અલગ ભાગમાં જમાં થતી રહે છે. જેથી આપણું વજન સતત વધતું રહે…
            </p>
            <p className="mb-4">
              આપણે જે ખોરાક ખાઈએ તેમાંથી અલગ અલગ તત્વો બને છે.. જે વ્યક્તિની પાચન સાયકલ અનીયમીત હોય તેને જમેલા ખોરાકનું સીધું ચરબીમાં રૂપાંતર થઈ જાય અને તે ચરબી ના કારણે તેમનો વજન વધતો રહે છે.. 
            </p>
            <p className="mb-4 bg-beige/50 p-4 rounded-xl">
              અને તમારા ફેમિલી કે મિત્ર સર્કલમાં અમુક લોકો તમારાથી બે ગણુ કે એનાથી પણ વધારે જમતા હોય , બેઠાડું જીવન પણ જીવતા હોય અને બહારનું ફાસ્ટ ફૂડ પણ ખાતા હોય છતાં તેનું વજન વધતું નથી… જો માત્ર બેઠાડું જીવન કે બહારનું ફાસ્ટ ફૂડ ખાવાથી વજન વધતું હોય તો દુનિયમાં રહેલા દરેક લોકો નો વજન વધવો જોઈએ ..?? પણ આવું થતું નથી સાચું ને ??
            </p>
            <p className="mb-4 text-herbal font-medium">
              જેમનું વજન નથી વધતું તે વ્યક્તિ નું પાચન તંત્ર ( ડાયજેસ્ટીવ સિસ્ટમ ) નિયમિત છે જેથી એ વ્યક્તિ જે કંઈ પણ જમે છે એ વસ્તુનું તેને પાચન થઈ જાય જેના કારણે તેનું વજન વધતું નથી..
            </p>
            <p className="mb-4">
              અને અત્યારે તમારું પાચનતંત્ર | પાચન સાયકલ નિયમિત નથી જેથી તમે જે કંઈ પણ જમો છો એ ખોરાક પાચન થવાના બદલે ચરબીમાં રૂપાંતર થતું રહે છે અને એ ચરબી તમારા શરીરના જુદા જુદા ભાગમાં જમાં થતી રહે છે . જેના કારણે તમારું વજન સતત વધતું રહે છે …
            </p>
            <p className="font-bold bg-herbal/10 text-herbal p-4 rounded-xl border-l-4 border-herbal">
              જૉ તમે તમારું વજન કાયમી માટે ઘટાડવા માંગતા હોવ તો તમારે સૌથી પહેલા તમારા ડાયજેસ્ટીવ સિસ્ટમ ( પાચન સાયકલ ) ને પ્રોપર કરવી જ પડશે જો તમે GYM, ડાયેટ, કસરત, કે કેમિકલ યુક્ત દવાઓ થી વજન ઘટાડશો તો એ ફરીથી પાછું વધી જ જશે…
            </p>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> વજન ઘટાડવા છતાં કેમ ફરીથી વધી જાય છે ??
            </h4>
            <p className="mb-4">
              માર્કેટમાં મળતી 90 થી 95 ટકા દવાઓ કે ટ્રીટમેન્ટ માત્ર ને માત્ર જૂની ચરબી ઓગાળવાનું કાર્ય કરે છે નવી ચરબી બને છે એના પર કોઈ પણ પ્રકારનું કાર્ય કરતી નથી એટલે કે ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ પર કાર્ય કરતી નથી, જેથી માર્કેટમાં મળતી દવાઓ કે ટ્રીટમેન્ટ લેવાથી તમારું વજન તો ઘટી જાય છે. પણ જેવી એ દવાઓ કે ટ્રીટમેન્ટ બંધ કરો એટલે તમારું વજન ફરીથી વધવા લાગે છે…
            </p>
            <p className="font-medium text-gray-900">
              જો તમારે વજન ઓછું કરવું જ હોય તો કાયમી માટે ઓછું કરવું ( પરમેનેન્ટ ) જોઈએ કારણ કે કામ ચલાઉ સોલ્યુશન અપનાવશો તો ફરીથી વજન વધી જશે જેથી તમારો સમય અને પૈસા બન્ને બગડશે…. આ વાત વિચારજો ખરા….
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટે શું કરવું ?
            </h4>
            <p className="mb-4">
              કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટેની અમારી <strong>આયુર્વેદિક કીટ</strong> આવશે , જે મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ ( પાચન તંત્ર ) પર કાર્ય કરે છે. અને જેનો 90 દિવસનો કોર્સ પૂરો કરશો એટલે તમારું વજન તો ઓછું થશે જ, સાથે – સાથે તમારા શરીરના જુદા જુદા ભાગો જેવાકે ફાંદ, હિપ્સ, થાઇસ , છાતી વગેરે પર જામેલી એક્સ્ટ્રા ચરબીને દૂર કરશે , અને આ કીટની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> અમારી આયુર્વેદિક કીટ કઈ રીતે કાર્ય કરશે ?
            </h4>
            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li>સૌથી પહેલા તમારી મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ ને નિયમિત કરશે જેથી તમારું શરીર નકામી અને વધારાની ચરબી નહિ બનાવે….</li>
              <li>જેથી તમારું વજન વધતું અટકી જશે અને જો તમે નીયમીત 90 દિવસ અમારી આ કીટ ઉપયોગ કરો છો તો તમારું પાચન તંત્રને એકદમ નિયમિત થઈ જશે જેથી તમારું વજન ઓછું થયા પછી ફરીથી વધવાની સંભાવના રહેતી નથી..</li>
              <li>આયુર્વેદિક રીતે શરીરમાં જમા થયેલી નકામી ચરબીને ઓગાળીને દૂર કરશે જેથી ફાંદ, થાઇસ, હિપ્સ અને છાતી પર જમા થયેલી વધારાની ચરબી પણ દૂર થશે.</li>
              <li>ઓગળેલી ચરબીને મળ અને મૂત્ર સ્વરૂપે શરીરમાંથી બહાર કાઢશે અને તમારું પેટ સાફ કરશે..</li>
            </ul>
            <div className="text-center my-8">
              <a href="/#transformations" className="inline-block bg-herbal text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-herbal/90 transition-colors">
                અમારી આયુર્વેદીક કીટ ના RESULT & REVIEW માટે અહીંયા ક્લિક કરો
              </a>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <span className="text-herbal">•</span> આયુર્વેદીક કીટ થી થતા ફાયદાઓ
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "સંપૂર્ણ આયુર્વેદિક કીટ છે. તેની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી.",
                "મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમને પ્રોપર કરીને વજન ઓછું કરશે જેથી તમારું વજન ઓછું થયા પછી ફરીથી વજન વધવાની સંભાવના રહેશે નહી….",
                "આયુર્વેદિક ડોકટરોની ટીમ દ્વારા સર્ટિફાઇડ કીટ છે ..",
                "કોઇ પણ પ્રકારની ડાયેટ ફોલો નથી કરવાની કે પછી ભૂખ્યા નથી રહેવાનું …",
                "કસરત – GYM કે YOGA કરવાના નથી રહેતા..",
                "વજન તો ઓછું થશે જ પણ.. સાથે ફાંદ , હિપ્સ , થાઈસ, અને છાતીના ભાગમાં જમાં થયેલી હઠીલી ચરબી દૂર કરશે..",
                "કીટમાં પાવડર – ફાકી કે લીકવિડ નથી આવતું. આયુર્વેદિક ટેબલેટ ( ગોળીઓ ) આવશે જે ઉપયોગ કરવામાં સરળ રહેશે..",
                "ગેસ એસીડીટી કબજિયાત અને પાચન સબંધિત પ્રોબ્લેમ માં ફાયદો થશે , તેમજ વધારે વજન થી થતી 40 થી વધારે બીમારીઓ માંથી બચાવશે…"
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-herbal shrink-0" />
                  <p className="text-gray-700 font-medium text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-linear-to-r from-herbal/10 to-gold/10 p-6 rounded-2xl text-center mt-8">
            <p className="font-bold text-lg text-gray-900 mb-6">
              જો તમે પણ સંપુર્ણ આયુર્વેદિક રીતે વજન ઓછું કરવા માંગતા હોવ તો આજે જ Order Now પર ક્લિક કરો માત્ર 90 દિવસમાં તમને બનાવશે ફેટ માંથી ફીટ આજે જ ટ્રાય કરો આયુર્વેદિક કીટ….
            </p>
            <a href="/#contact" className="inline-block bg-gold text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xl uppercase tracking-wider">
              Order Now
            </a>
          </div>
        </div>
    )
  },
  {
    id: "2",
    title: "Fast BMI Calculator : ઉંમર અને ઊંચાઈ પ્રમાણે કેટલું વજન હોવું જોઈએ",
    excerpt: "તમારું આદર્શ વજન જાણવા માટે તમારા શરીરના આંકડા તપાસો, કારણ કે વધારે વજન અને સ્થૂળતા એ હાઈ બ્લડ પ્રેશર, હૃદય રોગ અને ડાયાબિટીસ જેવા રોગો માટે જોખમી પરિબળો છે. ",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", 
    content: (
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p className="font-medium text-lg text-gray-900 border-l-4 border-herbal pl-4 py-1 bg-herbal/5 rounded-r">
            ફાસ્ટ BMI કેલ્ક્યુલેટર: ઉંમર અને ઊંચાઈ પ્રમાણે કેટલું વજન હોવું જોઈએ? તમારું આદર્શ વજન જાણવા માટે તમારા શરીરના આંકડા તપાસો, કારણ કે વધારે વજન અને સ્થૂળતા એ હાઈ બ્લડ પ્રેશર, હૃદય રોગ અને ડાયાબિટીસ જેવા રોગો માટે જોખમી પરિબળો છે. જો તમે વજન ઓછું કરવા માંગતા હોવ અથવા ડાયેટ (diet) પર હોવ તો તમારું સ્વસ્થ વજન (ઉંમર અને ઉંચાઈ આધારિત) શોધવા માટે પણ BMI Calculator ઉપયોગ કરી શકાય છે.
          </p>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> BMI calculator શું છે?
            </h4>
            <p className="mb-2">
              BMI કેલ્ક્યુલેટર એ એક સાધન છે જે Quetelet ઇન્ડેક્સની ગણતરી કરે છે. BMI calculator માં યુઝરે પોતાનું સાચું વજન અને ઊંચાઈ નાખવાની હોય છે જેના પછી તેને પરિણામ મળે છે. આ ગણતરીઓના આધારે વ્યક્તિનું વજન વધારે છે કે ઓછું તે જણાવે છે.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> BMI કેલ્ક્યુલેટર નો ઉદ્દેશ શું છે?
            </h4>
             <p className="mb-2">
               આનો ઉદ્દેશ એટલો જ છે કે આ પરથી જાણી શકાય કે કોઈ વ્યક્તિનું ઉંમર અને ઉંચાઇ પ્રમાણે કેટલું વજન હોવું જોઈએ.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> BMI Score શું છે?
            </h4>
             <p className="mb-2">
                આ માટે માત્ર ઉંમર અને ઊંચાઈ અનુસાર તમારું વજન કેટલું હોઈ એ જણાવે છે જેના માટે તમારી ઉંમર, ઊંચાઈ અને વજન નાખવું ત્યાર બાદ જો BMI Score 18.5 જણાવે છે.
             </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> BMI Score શું હોવો જોઈએ?
            </h4>
             <p className="mb-2">
                વ્યક્તિની ઊંચાઈ અને વજનના આધારે જો તેનો BMI ઇન્ડેક્સ 18.5 કરતા ઓછો હોય તો તે સામાન્ય કરતા ઓછો છે. જો તમારું BMI સ્તર 18.5 થી 24.9 ની વચ્ચે છે તો આ એક સંપૂર્ણ સ્થિતિ છે. જો BMI લેવલ 25 કે તેથી વધુ હોય તો તમારે સાવધાન રહેવું જોઈએ.
             </p>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="text-herbal">•</span> BMI નો અર્થ શું છે?
            </h4>
             <p className="mb-4 bg-beige/50 p-4 rounded-xl">
               BMI એટલે કે બોડી માસ ઇન્ડેક્સ માપવા માટે એક સરળ ફોર્મ્યુલા છે. આ ખરેખર તમારા શરીરના વજન અને ઊંચાઈનો ગુણોત્તર છે.
             </p>
          </div>

          <div className="bg-herbal/5 p-6 rounded-2xl border border-herbal/20 mt-8">
            <h4 className="font-bold text-xl text-herbal mb-4 text-center">કઈ ઉંમરે વજન કેટલું હોવું જોઈએ?</h4>
            
            <div className="space-y-8">
              <div>
                <h5 className="font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-200">પુરુષો માટે BMI ચાર્ટ</h5>
                <p className="mb-3 text-sm italic text-gray-600">
                  અહીં આપેલ માપ 18 કે તેથી વધુ ઉંમરના લોકો માટે છે. ઊંચાઈ 4′ 10″ થી 7′ સુધીની છે. આ આધારે, તમે પુરુષો માટે આ BMI કેલ્ક્યુલેટરનો ઉપયોગ કરી શકો છો અને નીચેના પરિણામો મેળવી શકો છો:
                </p>
                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                      <thead>
                         <tr className="bg-herbal text-white text-sm">
                            <th className="p-3">Category</th>
                            <th className="p-3">BMI Range</th>
                         </tr>
                      </thead>
                      <tbody className="text-sm">
                         <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium text-red-600">Underweight</td>
                            <td className="p-3 text-gray-700">&lt; 18.5</td>
                         </tr>
                         <tr className="border-b border-gray-100 bg-green-50">
                            <td className="p-3 font-medium text-herbal">Normal Weight</td>
                            <td className="p-3 text-gray-700">18.5 – 24.9</td>
                         </tr>
                         <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium text-orange-500">Overweight</td>
                            <td className="p-3 text-gray-700">25.0 – 29.9</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-medium text-red-600">Obese</td>
                            <td className="p-3 text-gray-700">≥ 30.0</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-200">સ્ત્રીઓ માટે bmi ચાર્ટ</h5>
                <p className="mb-3 text-sm italic text-gray-600">
                  અહીં 18 વર્ષ અને તેથી વધુ ઉંમરની સ્ત્રીઓ માટેના માપન છે. ઊંચાઈ 4′ 10″ થી 7′ સુધીની છે. નીચેના પરિણામો મેળવવા માટે મહિલાઓ માટે BMI કેલ્ક્યુલેટરનો ઉપયોગ કરી શકાય છે:
                </p>
                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                      <thead>
                         <tr className="bg-gold text-white text-sm">
                            <th className="p-3">Category</th>
                            <th className="p-3">BMI Range</th>
                         </tr>
                      </thead>
                      <tbody className="text-sm">
                         <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium text-red-600">Underweight</td>
                            <td className="p-3 text-gray-700">&lt; 18.5</td>
                         </tr>
                         <tr className="border-b border-gray-100 bg-green-50">
                            <td className="p-3 font-medium text-herbal">Normal Weight</td>
                            <td className="p-3 text-gray-700">18.5 – 24.9</td>
                         </tr>
                         <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium text-orange-500">Overweight</td>
                            <td className="p-3 text-gray-700">25.0 – 29.9</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-medium text-red-600">Obese</td>
                            <td className="p-3 text-gray-700">≥ 30.0</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-linear-to-r from-herbal/10 to-gold/10 p-6 rounded-2xl text-center mt-8">
            <p className="font-bold text-lg text-gray-900 mb-6">
              જો તમે પણ સંપુર્ણ આયુર્વેદિક રીતે વજન ઓછું કરવા માંગતા હોવ તો આજે જ Order Now પર ક્લિક કરો માત્ર 90 દિવસમાં તમને બનાવશે ફેટ માંથી ફીટ આજે જ ટ્રાય કરો આયુર્વેદિક કીટ….
            </p>
            <a href="/#contact" className="inline-block bg-gold text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xl uppercase tracking-wider">
              Order Now
            </a>
          </div>
        </div>
    )
  }
];
