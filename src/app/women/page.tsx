import Link from "next/link";
import React from "react";

// Reuse the UI Components pattern from haircare page for consistency
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <Section className="relative z-10 text-center">
          <Heading level={1} className="text-pink-600 mb-6">
            "સ્ત્રી સ્વાસ્થ્ય જાગૃતિ: PCOS થી થાઈરોઈડ સુધીની સંપૂર્ણ સમજ"
          </Heading>
          <ImageBox 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibcPr7sDoa_eoXkqWHUBoPx_Ci4x4Bex0jYrtF25Mk0xK8z9yI50nKk3D0Plv7icsaRcfUXMjuzXHmk6RjPYrrhvLZ-8A7EYwZ0o-X4bh_Xft-iWhcrkOY_QB05GqL76avT1FpfWJrWCSj9wsvovVu0MsDu94LcOYNT4WXjcn3wWTl4ZRiljVdJxrQugRT/s1376/1003065689.png" 
            alt="સ્ત્રી સ્વાસ્થ્ય જાગૃતિ" 
            className="max-w-md mx-auto"
          />
          <Paragraph className="text-xl md:text-2xl font-medium text-stone-700 mt-8">
            PCOS, PCOD, અનિયમિત માસિક કે વજન વધવા જેવી સમસ્યાઓ હવે તમારી ખુશી આડે નહીં આવે. જાણો, સમજો અને આયુર્વેદિક રીતે સ્વસ્થ બનો.
          </Paragraph>
        </Section>
      </div>

      {/* Real Problems Section */}
      <Section>
        <Heading level={2} className="text-center mb-8">સ્ત્રીઓના જીવનમાં વાસ્તવિક સમસ્યાઓ</Heading>
        <ImageBox 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghJa-Ex-vqprWlOxIpBSSBCg1hdD2T1ieoqzw9uGqmEbJXJ6avH6hssUOGFEVa1PdRsy1uv30rlsT_AfJ241URMdaxNlvinzwlZepsUwFLUDgwaU_QMeysySjO9UVF5ZijURC9LbR7IY_VP8-iANv56SUmOoGtFr92F3Su8CgD_QKHu0awKa5JjBf9BXNE/s1280/1003056938.jpg" 
          alt="સ્ત્રીઓના જીવનમાં વાસ્તવિક સમસ્યાઓ" 
        />
        <div className="space-y-6 mt-10">
          <div className="flex items-center gap-3">
             <span className="text-2xl">🌸</span>
             <Heading level={3} className="my-0">સ્ત્રીઓના સ્વાસ્થ્યનું મહત્વ</Heading>
          </div>
          <Paragraph className="italic">સમજ, જાગૃતિ અને યોગ્ય નિરાકરણ</Paragraph>
          <Paragraph>સ્ત્રી એટલે શક્તિ, પરંતુ આજના વ્યસ્ત જીવનમાં ઘણી સ્ત્રીઓ પોતાનું સ્વાસ્થ્ય અવગણે છે… નાની નાની સમસ્યાઓ ધીમે ધીમે મોટી બીમારીઓનું રૂપ લઈ લે છે 😔</Paragraph>
          
          <ul className="space-y-4">
            <li className="flex gap-3"><span className="text-pink-500">👉</span> <Paragraph className="mb-0">સ્ત્રીઓના શરીર અને હોર્મોન્સ ખૂબ જ સંવેદનશીલ હોય છે</Paragraph></li>
            <li className="flex gap-3"><span className="text-pink-500">👉</span> <Paragraph className="mb-0">જીવનના દરેક તબક્કે (કિશોરાવસ્થા, ગર્ભાવસ્થા, મેનોપોઝ) શરીરમાં બદલાવ આવે છે</Paragraph></li>
            <li className="flex gap-3"><span className="text-pink-500">👉</span> <Paragraph className="mb-0">योग्य જાગૃતિ અને કાળજી વગર સ્વાસ્થ્ય બગડી શકે છે</Paragraph></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <Heading level={3} className="text-red-700 mt-0">⚠️ આજકાલ સામાન્ય બની ગયેલી સમસ્યાઓ</Heading>
            <ImageBox 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3ac7U0Fqy9Ythmy-QyFbD-PCOIt5QvErLrQoYZbQbZvN7CeP1951EncqMDW5Uz1dEZyeulClnjEIYX1HFpsMesQ1DLA9X79qko6nPnAyiQYhy2rMpiaEPgHDpQQKqOtRS1N_CAhYyUl2E2GgYaxk37VvWfRdLPrSYyTwiC_bXhd8-dxKe7cXDVd0eogah/s1280/1003106480.jpg" 
              alt="સામાન્ય સમસ્યાઓ" 
            />
            <ul className="space-y-2 mt-4 font-medium">
              <li>🔸 **થાયરોઇડ સમસ્યા** - વજન વધવું, થાક, હોર્મોનલ અસંતુલન.</li>
              <li>🔸 **PCOS / PCOD** - અનિયમિત પિરિયડ, વજન વધારો, હોર્મોનલ ડિસ્ટર્બન્સ.</li>
              <li>🔸 ** મોટાપો ( Obasity )** - મોટોપો ડાયબિટીસ અને હ્રદય રોગનું મૂળ છે. ડિપ્રેસન અને ચિંતા નું પણ મૂળ કારણ છે.</li>
            </ul>
             <Paragraph className="mt-6 font-bold">👉 આ બધી સમસ્યાઓ એકબીજાથી જોડાયેલી હોય છે</Paragraph>
             <Paragraph className="font-bold">👉 સમયસર ધ્યાન ન આપીએ તો ભવિષ્યમાં ગંભીર બીમારીઓ બની શકે છે</Paragraph>
          </div>
          
          <Heading level={2} className="text-center text-herbal">🌿 આયુર્વેદિક ઉકેલ – સ્વસ્થ જીવન તરફ એક પગલું</Heading>
        </div>
      </Section>

      {/* Reality & Statistics Section */}
      <Section className="bg-white rounded-3xl shadow-sm border border-stone-100">
        <Heading level={2} className="text-center">વાસ્તવિકતા અને આંકડાઓ</Heading>
        <ImageBox 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ojN37llXWbg0-UYkOPLbYi26BBwcKfBqzuLMB6I9Kon-LilWNU5XSmDe4MF7m-z0r8epLac58evumWmrLsblzuGPW3FpgpNgYoUMlVWV_1379tUaK4c5ImWqEjhIYId6BPZ7C7N79NQ7aKzsJ79uOPClDyPSxTwaP4-6ndCbAl3s9U3om2AIi8Heeorn/s1280/1003056939.jpg" 
          alt="આંકડાઓ" 
        />
        <Paragraph className="text-center mt-6">
          આ સમસ્યાઓ માત્ર કલ્પના નથી, પરંતુ રામાજની કઠોર વાસ્તવિકતા છે. સંશોધનો મુજબ, લાખો સ્ત્રીઓ આ સમસ્યાઓથી પીડાઈ રહી છે, અને આ આંકડા ચિંતાજનક છે. સાચી સમજ અને સમયસર પગલાં અનિવાર્ય છે.
        </Paragraph>

        <Heading level={2} className="text-center mt-12">ભારત અને દુનિયામાં આંકડાઓની સ્થિતિ</Heading>
        <ImageBox 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbNacJA1g0BoZNixmTPyhFFs6x5tWdqnOUPh7u-dBxNeCeXwWTfHLKpMc765sn8OztlKbGx0qYse041Utv5Jw8ewviKyMXhkq6w_GYwduKTVYMXmTUpHd3KLkCK8Cp_dJt1le4aroplk_vJWX9_8gt-2MKh8rcYVjHLic-fS3N4TTXraRGc5lfDdFKK9_-/s1280/1003056940.jpg" 
          alt="આંકડાઓની સ્થિતિ" 
        />
        <Paragraph className="text-center">
          આ આંકડાઓ સાબિત કરે છે કે સ્ત્રીઓનું સ્વારથ્ય કેટલું સંવેદનશીલ છે. 4 માંથી 1 સ્ત્રી મોટાપાથી અને 3 માંથી 1 ગર્ભાવસ્થા દરમિયાન તકલીફથી પીડાય છે. આ માત્ર આંકડા નથી, પરંતુ આપણી આસપાસની સ્ત્રીઓની કહાની છે.
        </Paragraph>
      </Section>

      {/* PCOS / PCOD Section */}
      <Section>
        <Heading level={2} className="text-pink-600">PCOS/PCOD: ચિંતાજનક આંકડાઓ અને સમજણ</Heading>
        <ImageBox 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi457-Lc_Y_eGCzLxzkC0us55DOp2Dmq9Hh42eqtRgtH6GU3eiqSd34ZCLlfROxVhSbw6RcKP2tlhDP22RvxW0SgO41-MQZ3h5x8caMyurWeOTCw8i-wWqd_en6UrIPGsmiscGli3AX9JyN985qi3acKYJhvaLwonrPTW2CQbNQPBPWzeH0cZVoH09wGdAT/s1280/1003056941.jpg" 
          alt="PCOS/PCOD" 
        />
        <Paragraph className="font-bold text-center mt-6 text-xl">PCOS/PCOD: સ્ત્રી સ્વાસ્થ્યની એક ગંભીર વાસ્તવિકતા</Paragraph>
        <Paragraph className="text-center">આજના સમયમાં બદલાતી જીવનશૈલીને કારણે સ્ત્રીઓમાં હોર્મોનલ સમસ્યાઓ વધી રહી છે. ચાલો જાણીએ તેના વિશેના કેટલાક ચોંકાવનારા આંકડા અને મુખ્ય લક્ષણો.</Paragraph>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-pink-100 my-10">
          <Heading level={3} className="text-pink-600 mt-0">PCOS ના મુખ્ય લક્ષણો :-</Heading>
          <Paragraph>જો તમને નીચે મુજબના ચિહ્નો દેખાય, તો તેને નજરઅંદાજ ન કરો:</Paragraph>
          <ol className="list-decimal list-inside space-y-3 mt-4 font-medium text-stone-700">
            <li>* અનિયમિત માસિક: પીરિયડ્સ સમયસર ન આવવા અથવા ખૂબ ઓછો/વધારે રક્તસ્ત્રાવ થવો.</li>
            <li>* સફેદ ડિસ્ચાર્જ: અસામાન્ય સફેદ પાણી પડવાની સમસ્યા.</li>
            <li>* ગર્ભાવસ્થામાં તકલીફ: કન્સીવ કરવામાં (ગર્ભધારણ) મુશ્કેલી આવવી.</li>
            <li>* શારીરિક ફેરફાર: ચહેરા પર વધારાના વાળ ઉગવા અથવા અચાનક વજન વધવું.</li>
          </ol>
          <Paragraph className="mt-6 font-bold text-herbal font-center text-xl text-center">સ્વસ્થ નારી, સ્વસ્થ પરિવાર!</Paragraph>
        </div>

        <Heading level={2}>*PCOD અને PCOS ના કારણે થતી મુખ્ય સમસ્યાઓ *</Heading>
        <div className="grid md:grid-cols-2 gap-4 my-8">
           {[
             "૧. અનિયમિત માસિક: માસિક સમયસર ન આવવું અથવા વધુ/ઓછો રક્તસ્ત્રાવ થવો.",
             "૨. વજન વધવું: અચાનક વજન વધવું અને તેને ઘટાડવામાં મુશ્કેલી પડવી.",
             "૩. અણગમતા વાળ: ચહેરા અને શરીર પર પુરુષોની જેમ વધુ વાળ ઉગવા.",
             "૪. ખીલ અને વાળ ખરવા: ચહેરા પર જીદ્દી ખીલ થવા અને માથાના વાળ પાતળા થઈને ખરવા.",
             "૫. ગર્ભધારણમાં મુશ્કેલી: પ્રેગ્નન્સી રાખવામાં સમસ્યા થવી (Infertility)"
           ].map((text, i) => (
             <div key={i} className="bg-pink-50 p-4 rounded-xl border border-pink-100 font-medium">{text}</div>
           ))}
        </div>

        <Heading level={2}>મહિલાઓમાં વધી રહ્યો છે ઓવરી કેન્સર અને હોર્મોનલ સમસ્યાઓનો ખતરો</Heading>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaOFnNGPGkqehHK1xvYjXLNcmkjDsUBXgE_LIepAhwdtfGMUmMiZOCcjRLVGFClFH8_rdkCSbAlUD-JPIHSEjifDpWukioRzlYH0CQKjVvj7dyzA-lbxdGLSW0B1AU20sHz2ABY1fLRJLA86Sm-NxJ69b4-ZQPfreRvVzAOXtEA-ZPi_qXW_qn_aHlLzZh/s1280/1003056942.jpg" alt="Cancer risk" />
        
        <Heading level={2} className="text-center">Pcod અને pcos ના ભારતમાં વધતા જતા કેસો :-</Heading>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3CeTN7mvofmgtzjTPly3TMjJ9iWdeX0RnZhLHXqODVb0v1-cE0GO2Iuujxe-9tW7cJ7s-CQ6jYAq-vPKxNCXCWOPKGrqJbIdhEtYb0Q-Qy7d1-9FsmFJ6Bzy73__CjUeUaH0HdhmPci2y6tH_V8CXWXRTkisKWzMz-bb08uF1di-1bWPNCSafYpZkeVaI/s1280/1003106263.jpg" alt="PCOS cases India" />
        
        <Heading level={2} className="text-center">સૅલીબ્રિટીઓની pcod અને pcos ની સાથેની સ્ટ્રગલ સ્ટોરી </Heading>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzT6_E9QQueM62BH_K8-9RO8A2KLsndmaWBkidM83IQrlGMZdHlQ24j-B3z6n2MP9ySzutzpQ7Xig7_lAjY7JTpM3HDUS6PH3FwHqHMqLteZ7T43ANaUxRQ3mZJg1zKIq8XkAp6lHm63knS4PXDpjGxTldoF_MS8NESMG6oS-lYsbcmHfoTxN2oRU5Bhe/s1280/1003056943.jpg" alt="Celebrity struggle" />
      </Section>

      {/* Ayurvedic Course Section */}
      <Section className="bg-stone-900 text-white rounded-[3rem] px-8 md:px-16 py-16">
        <Heading level={2} className="text-white text-center mb-8 mt-0">PCOD / PCOS માટે નો સંપૂર્ણ આયુર્વેદિક કોર્સ :- </Heading>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvYu8rE6SYWX7h61UeGoV8B-5uTyeHsajZeYoKtP-VTsuT3K_ylLTeorb-QPAIytD7qpq1MIMqU0R_CTR0clZg0N11jow3SYXbqkdr-2Sip_A6h8NhCaZ0dwFbhZ3xgUJYhlKcN73rjKWQ8N_bw6OknATBgD6sYxbxUaVevUpbjx72SNB5yGK2ZPJo0PTW/s1280/1003101543.jpg" alt="Ayurvedic Course" />
        
        {/* Shewell Care Drink */}
        <ProductCard title="૧. શીવેલ કેર ડ્રિંક (Shewell Care Drink)" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgntL-JIk8YgY96qfYk55eV6Hyagti_m_TWZWi4GOrlWXB-bpH0GPjGrNr1IBzNusJSe_E-lCv1lye1PuhCeeIwAHeNOVkduC5jNwTay6lqhJzOCRHwG9h7wmGn8EyArAEtnT0cmgI9YFjJCg-rCU4vUP2Q0BGPDwl6qishoWsUC9CC8bjGtuZm1-A0hRRC/s1280/1003101803.jpg">
           <Paragraph className="text-pink-600 font-bold">હોર્મોનલ સંતુલન માટે અંતિમ સમાધાન</Paragraph>
           <Paragraph className="text-stone-700">હોર્મોન્સનું અસંતુલન PCOD અને PCOSનું મુખ્ય કારણ છે. અમારું ‘શીવેલ કેર’ (પીવા માટે અને ગોળી સ્વરૂપે) એક એવું વિશેષ મિશ્રણ છે જે કુદરતી રીતે હોર્મોન્સને સંતુલિત કરવામાં મદદ કરે છે.</Paragraph>
           <Paragraph className="font-bold text-stone-900">* લાભ: અનિયમિત માસિકને નિયમિત બનાવે છે અને હોર્મોન્સને નિયંત્રિત કરે છે.</Paragraph>
        </ProductCard>

        {/* Shewell Tablet */}
        <ProductCard title="2. શીવેલ ટેબ્લેટ (Shewell tablet)" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJHXDWv02y6lE4BYnMiAT4A6MNrF51GFWBUYhSCeBPFtjpFU2ue3gpzhKidJwck_kkKkSoFiKFmLIsGpesKKPYoFyG53uq-drM7usZ_0Ciy_cZ7MIgmfWCmbDeMN8IyAsnEFBZGmByy4OcsRSyMOAwj9smuiNs6qeTK5tbMERFZxi4UJVe89vir52UU5AU/s1280/1003101804.jpg">
           <Paragraph className="text-pink-600 font-bold">હોર્મોનલ સંતુલન માટે અંતિમ સમાધાન</Paragraph>
           <Paragraph className="text-stone-700">અમારું ‘શીવેલ કેર’ ટેબ્લેટ કુદરતી રીતે હોર્મોન્સને સંતુલિત કરવામાં અને સ્ત્રીઓના આંતરિક સ્વાસ્થ્યને સુધારવામાં મદદરૂપ છે.</Paragraph>
           <Paragraph className="font-bold text-stone-900">* લાભ: અનિયમિત માસિકને નિયમિત બનાવે છે અને હોર્મોન્સને નિયંત્રિત કરે છે.</Paragraph>
        </ProductCard>

        {/* Teamex Berry Drink */}
        <ProductCard title="૨. ટીમિક બેરી ડ્રિંક (Teamex Berry Drink)" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXT0OvEza0DGTHETEmhPW_l8_b1NA7MlIvRWgvvhh5Den9Omd5z6FF-fbLWoBZsOYxsRep8vHbM2zGdpGeX8g2OTQgPsVlAQrUJuFwhH9F9hrKAj6CttEONwtSt6kG9eSVOdeK2XUQ585EdC3nTvBkerxbGhJkri7nTP5MhMmTJa38bXd87ENkrUTPVcBR/s1280/1003101805.jpg">
           <Paragraph className="text-pink-600 font-bold">કુદરતી એન્ટીઑકિસડન્ટનો પાવરહાઉસ</Paragraph>
           <Paragraph className="text-stone-700">તણાવ અને શરીરમાં બળતરા (inflammation) PCODની સમસ્યાને વધારે છે. ટીમિક બેરી ડ્રિંક એન્ટીઑકિસડન્ટોથી ભરપૂર છે, જે તમારા શરીરને ડિટોક્સ કરવામાં મદદ કરે છે.</Paragraph>
           <Paragraph className="font-bold text-stone-900">* લાભ: મેટાબોલિઝમ સુધારે છે અને તણાવ ઓછો કરે છે.</Paragraph>
        </ProductCard>

        {/* Saptamrut Loh */}
        <ProductCard title="૩. સપ્તામૃત લોહ (Saptamrut Loh)" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9bTmFCZRrpQDeWf1ONM4UW3OYyIsNCXEce6P_gbMJIawCGnM7KkRNpH0y7KW0QodbYG-D4A_GrAql9_Y8DfTv3PVoYKDRHlMTmVBtj6dU3-b_IJy1zdvD8hg8qSaAb5h5Vngmt-o3DSbLzUT85_ErqUmiJMNHAqyrlXFNb-7WVjQQIUe88gW3PD7ZaVLj/s1280/1003101806.jpg">
           <Paragraph className="text-pink-600 font-bold">કુદરતી આયર્નનો સ્રોત</Paragraph>
           <Paragraph className="text-stone-700">અનિયમિત અને વધુ રક્તસ્ત્રાવને કારણે ઘણી સ્ત્રીઓમાં આયર્નની ઉણપ જોવા મળે છે. સપ્તામૃત લોહ આયર્નનો કુદરતી સ્ત્રોત છે, જે તમને દિવસભર ઊર્જા પૂરી પાડે છે.</Paragraph>
           <Paragraph className="font-bold text-stone-900">* લાભ: લોહીમાં હિમોગ્લોબિનનું પ્રમાણ વધારે છે.</Paragraph>
        </ProductCard>

        {/* Intimate Wash */}
        <ProductCard title="૪. શીવેલ ઇન્ટિમેટે વોશ (Shewell intimateWash )" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3qr3TNrds7jXnCw4VuoK148g1NRwt73Qpnxgs-J-OE0jvu9uYHTPE9detJOs89ZfaFSe0FZUQBSMWS0ZPeG5udl23-_tsJG4NmyvcGQAPg7PierUS-y9ZhxdMIh5ykLxpdtJFVA086XvV6UOc_ALr89ek35OG0hV3AAOHZXrpF-O70J7BG_07aaU3Ouz/s1280/1003101807.jpg">
           <Paragraph className="text-pink-600 font-bold">સંપૂર્ણ પીરિયડ કેર</Paragraph>
           <Paragraph className="text-stone-700">PCODમાં વ્યક્તિગત સ્વચ્છતા વધુ મહત્વની બને છે. ‘શીવેલ ઇન્ટિમેટ વોશ’ માસિક ધર્મ દરમિયાન સંપૂર્ણ સ્વચ્છતા અને સુરક્ષા પૂરી પાડે છે.</Paragraph>
        </ProductCard>

        {/* Sanitary Pads */}
        <ProductCard title="5.શીવેલ (Shewell) સેનિટરી પેડ્સ" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtFAuTzuCqdnDvFwalD4eRq1JleJbhg7rtrqJlc4ZFTji6R2bgrp8KO0eQvwKSeTWOg1t0_WPsaFVI-WpDyqKu_0mmZtmamTFeChZG47gQOvt9AwkGt2y4U4IWA30aRl3Vb7AZgKyy7rwg-dCwkESvAQzFKG8JSxnuZLPwgd7QRw9OiHwcJsnbmqXrtWm1/s1280/1003101811.jpg">
           <Paragraph className="text-pink-600 font-bold">તમારા આરામદાયક પ્રવાસની શરૂઆત</Paragraph>
           <Paragraph className="text-stone-700">માસિક ધર્મના તે મુશ્કેલ દિવસોમાં હવે મેળવો સંપૂર્ણ આઝાદી અને અપ્રતિમ આરામ. શીવેલ સેનિટરી પેડ્સ ખાસ કરીને સ્ત્રીઓની જરૂરિયાતોને ધ્યાનમાં રાખીને બનાવવામાં આવ્યા છે.</Paragraph>
        </ProductCard>
        
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIj_4NywooKMIaSOiL_KahOFdLPzlItuBTDj_br8Xt2mjrceeBC6QQ6CdbwCCwpzbYpjgJDfC7tvhyphenhyphenctzeLdgwp-ty-7TURy3XRmvIzgHd-q_x7evDpc0hDMIC4KnCKi2DBXpxZUeQztycuf7AsMO7xHrJIsSmMXuWSkDPSndMYnvf4l4nmIvsKmJcZy0L/s1600/1003065751.gif" alt="Result GIF" />
      </Section>

      {/* Results & Reviews */}
      <Section>
        <Heading level={2}>Pcod અને pcos ના રિઝલ્ટ & રિવ્યૂ </Heading>
        <Heading level={3}>કૉમેન્ટ્સ of કસ્ટમર </Heading>
        <Paragraph className="italic text-stone-500">Reviews and comments would appear here...</Paragraph>
      </Section>

      {/* Thyroid Section */}
      <Section className="bg-stone-50 rounded-[3rem]">
        <Heading level={1} className="text-blue-600">થાઇરોઇડ :-</Heading>
        <Paragraph>થાઇરોઇડ એ ગળાના ભાગમાં આવેલી એક નાની, પતંગિયા આકારની ગ્રંથિ છે, જે આપણા શરીરના મેટાબોલિઝમ (ચયાપચય) ને નિયંત્રિત કરે છે. જ્યારે આ ગ્રંથિ જરૂરિયાત કરતા વધુ કે ઓછું હોર્મોન ઉત્પન્ન કરે, ત્યારે શરીરમાં અનેક સમસ્યાઓ સર્જાય છે.</Paragraph>
        
        <Heading level={2}>થાઇરોઇડના મુખ્ય પ્રકારો અને લક્ષણો</Heading>
        <Paragraph>થાઇરોઇડની સમસ્યા મુખ્યત્વે બે પ્રકારની હોય છે:</Paragraph>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4y177R9R2PXMU6Y_QdBjvWfaKJlqTFEpVCQ1uU-EuocF2b0i0j3OM8prER8mFORIlAd5OwLaqHqKnnRYTbohlnbXxdfZLyv740Rb3nYnNIpU7D3Wg8ASPzp7ije4fAzx_6Z6cJfOpdsriQC60YbEh7LQhGXs-hRfaxtuyGCAVsEVzaj9AZCPEANAEZ8T1/s320/1003106312.jpg" alt="Thyroid types" />
        
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <Heading level={3} className="mt-0">1. હાઇપોથાઇરોડિઝમ (Hypothyroidism)</Heading>
            <Paragraph>આમાં ગ્રંથિ પૂરતા પ્રમાણમાં હોર્મોન બનાવી શકતી નથી.</Paragraph>
            <Paragraph className="font-medium text-sm">* લક્ષણો: અચાનક વજન વધવું, થાક લાગવો, કબજિયાત, વધુ પડતી ઠંડી લાગવી, ત્વચા સૂકી થવી અને વાળ ખરવા.</Paragraph>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <Heading level={3} className="mt-0">2. હાઇપરથાઇરોડિઝમ (Hyperthyroidism)</Heading>
            <Paragraph>આમાં ગ્રંથિ જરૂર કરતા વધારે હોર્મોન બનાવે છે.</Paragraph>
            <Paragraph className="font-medium text-sm">* લક્ષણો: વજન વધારો (ક્યારેક ઘટાડો), ગભરામણ, હૃદયના ધબકારા વધવા, મૂડમાં ફેરફાર.</Paragraph>
          </div>
        </div>

        <Heading level={2} className="text-blue-600">🔍 થાઈરોઈડના મુખ્ય લક્ષણો અને તેના દ્વારા થતી તકલીફો :</Heading>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqpbvg0bO5w0ANEMu2i4E6nOHWLSy-bcHk92gR5JO-GrZPP5ZJmfNXUrf3PcozbPwuJRjZ8-Bwmr_JmQagKv3UDmPvCEEp8_Uq6M51epUNKcMIC7fAstKKgZVsTv_SU-xInRQA0OjVIaHYQLi182cF379XQfad2wv10fQXjpk0nYfWRdanqG6VtdPT8Vmm/w320-h174/1003056948.jpg" alt="Thyroid Symptoms" />
        
        <div className="space-y-4 font-medium text-stone-700">
          <Paragraph>જો તમે નીચેનામાંથી કોઈ પણ લક્ષણો અનુભવો છો, તો તે થાઈરોઈડની નિશાની હોઈ શકે છે:</Paragraph>
          <p>1 * વજનમાં અચાનક ફેરફાર ⚖️ - વધારે પડતો થાઇરોઇડ (Hyper) વજન ઘટાડે છે, જ્યારે ઓછો થાઇરોઇડ (Hypo) વજનમાં ઝડપી વધારો કરે છે.</p>
          <p>2 * થાક અને નબળાઈ 😫 - પૂરતી ઊંઘ લીધા પછી પણ આખો દિવસ આળસ આવવી અને શરીરમાં શક્તિનો અભાવ અનુભવવો.</p>
          <p>3 * મૂડમાં ઉતાર-ચઢાવ 🧘♀️ - વધારે પડતી ચિંતા, ગભરામણ અથવા કારણ વગર ઉદાસી (ડિપ્રેશન) જેવું લાગવું.</p>
          <p>4 * વાળ અને ત્વચાની સમસ્યા 💇♂️ - વાળનું અતિશય ખરવું અને ત્વચા એકદમ સૂકી (Dry skin) થઈ જવી.</p>
          <p>5 * માસિક ધર્મમાં અનિયમિતતા 🩸 - મહિલાઓમાં પીરિયડ્સ સમયસર ન આવવા અથવા તેમાં ખૂબ વધારે કે ઓછો દુખાવો થવો.</p>
          <Paragraph className="italic mt-4">"થાઈરોઈડને છુપાવો નહીં, તેને આયુર્વેદથી હરાવો!"</Paragraph>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-12">
          <Heading level={3} className="text-blue-800 mt-0">આયુર્વેદનો ફાયદો</Heading>
          <Paragraph>એલોપેથી દવાઓ ઘણીવાર માત્ર હોર્મોન્સને મેનેજ કરે છે, જ્યારે આયુર્વેદ સમસ્યાના મૂળ (Root Cause) પર કામ કરે છે.</Paragraph>
          <ul className="list-disc list-inside space-y-2 mt-4 font-medium">
            <li>* હોર્મોનલ બેલેન્સ: કુદરતી જડીબુટ્ટીઓ દ્વારા હોર્મોન્સનું કુદરતી રીતે નિયમન.</li>
            <li>* ઝીરો સાઈડ ઈફેક્ટ: શરીરને નુકસાન કર્યા વગર ધીમી પણ અસરકારક સારવાર.</li>
            <li>* સંપૂર્ણ વેલનેસ: પાચન અને રોગપ્રતિકારક શક્તિમાં સુધારો.</li>
          </ul>
        </div>

        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW3vOIam37BctWDZaJdIHZLZZms4vBlBToRCFBvqUIZ14mYJswOqRNeV9VwqVVjkuCL_Dp5biFL8Ivu26Cp84-1o7IvP_0TnSROuVGnVp-yqTJt41CdTl3zXVQyiESA8TayrWf8uDXi_POoJNM3HS4CtUq1azvdEo1i_FsYQjsQfI5GcYnmdl0M1WWFtSl/s1280/1003056949.jpg" alt="Stats Graph Thyroid" />
        
        <div className="text-center">
           <Heading level={2} className="text-blue-700">ભારતમાં વધતી થાઈરોઈડની સમસ્યા: શું તમે સુરક્ષિત છો? 📈</Heading>
           <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrCTmiXdFsG0yxiEgmgUxT3CMOOBoxnxre_5dBB27qLiHMYPN1YtoDLkXFG3vhvHe4Df0KH2ruGdTR-smXt738C8vNCl5xtwl3P7heFcume0QH0Lfp_GHTBoo83gBPuBXvNhujfenuOvAEQpAUMNHmVNaZUV0Mh6XiltKFq3xPAqQ9lue4DYyEr8JHh8w/s1280/1003106213.jpg" alt="Thyroid Market Graph" />
           <Paragraph className="max-w-2xl mx-auto">તાજેતરના આંકડાઓ મુજબ, ભારતમાં થાઈરોઈડની સમસ્યા ધરાવતા લોકોની સંખ્યામાં ચિંતાજનક વધારો થઈ રહ્યો છે. ૨૦૧૮ થી ૨૦૩૦ સુધીનો ગ્રાફ સ્પષ્ટ દર્શાવે છે કે થાઈરોઈડ ટેસ્ટિંગ માર્કેટ $૧૪૨ મિલિયનથી વધીને $૨૫૫ મિલિયન સુધી પહોંચવાની ધારણા છે.</Paragraph>
        </div>

        {/* Thyroid Solution Products */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-stone-100 my-12">
            <Heading level={2} className="text-center text-blue-600">થાઇરોઇડ નું કાયમી સોલ્યૂશન :- </Heading>
            <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-jVSAOfzkaVFRas6hoVDmUQnQng7VXPPhVJEyldJcv483_YhDwDT6h28qUKvW_vS-5uLC8UR1RTOV8XSUVKl9WpROQE-rDf68AfVwCdWyLBSXX9Pfx5T9xBgBWQU9_spQbWcpIH7X-FsndUSCaBI96ju0ZlqAHAAsVp0o5hARlKoyXSpKZlXcN8Pi4wYf/s1280/1003102906.jpg" alt="Thyroid Solution" />
            
            <ProductCard title="થાઇરોકેર વેલનેસ ડ્રિન્ક :-" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdcyAHnzkB-XaSX5GYqBN8fm11GFwH91QmNk4XkbKYEDCYALH6hpg247qkgBV5yBq2YOeAW_wQZYN1CHHZSo55DPpQWW3tunSRM5QF2wuTs899O6OyZgUrj9YXwykZzbSIlBWNVJp1Mbwk594fTQtcx_h-9oqYMmpVBS8WlQ3ZcZ8XCn87Mlki2I-Obouy/s1280/1003102904.jpg">
               <Paragraph className="font-bold text-blue-600">થાયરોકેર વેલનેસ ડ્રિંક: થાયરોઇડ સ્વાસ્થ્ય માટે કુદરતી સુરક્ષા</Paragraph>
               <Paragraph>થાયરોકેર વેલનેસ ડ્રિંક એ ખાસ કરીને થાયરોઇડ ગ્રંથિની કાર્યક્ષમતા વધારવા અને તમારા શરીરને ઊર્જાવાન રાખવા માટે બનાવવામાં આવ્યું છે.</Paragraph>
            </ProductCard>

            <ProductCard title="કાંચનાર ગુગ્ગલુ ટેબ્લેટ :- " image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNbvgWIRlfl5LHZCJh2lHGGBM9k5Qc2runDcPXW9xp5As7-STJwxIGFTFLzejpyqtnX0fqrjDIMHPApBJyM_dV1H34AED-Fbtctl9PL-oACbnRI_G2EJEfygKczIVbrMjxw828_cFdU3_DA28-RXF1eeL8p7JTFXO95yiSAZm91yfMbtyebRdKKQ4RYONC/s1280/1003102905.jpg">
               <Paragraph className="font-bold text-blue-600">થાઈરોઈડ સ્વાસ્થ્ય માટે કુદરતી વરદાન</Paragraph>
               <Paragraph>તે ખાસ કરીને થાઈરોઈડ ગ્રંથિના કાર્યને સંતુલિત કરવા અને શરીરમાં રહેલી બિનજરૂરી ગાંઠોને કુદરતી રીતે ઓગાળવામાં મદદરૂપ થાય છે.</Paragraph>
            </ProductCard>

            <Heading level={2} className="text-center">થાઇરોઇડ ના રિઝલ્ટ & રિવ્યૂ </Heading>
            <Paragraph className="text-center">Comments of customer </Paragraph>
            <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHKlmCZNSKLaaeNDMAsoxYdEqkacs_WnZLAZUpvDDJUU-Fk3ZGWHcrv0gqHcdYLqC3iNXBf73osYAhIyQp-WfiZuEP9vSod9plC-AZfzFE-7MU7vl-5X6VQbTetIW7uvUu1kCdIT4qbtLggPvfTLIDP0cyxzzZTqhYk2AsT-3IA4oDJXiQ8rQhBHu-X3ay/s320/1003065750.gif" alt="Result GIF" />
        </div>
      </Section>

      {/* Obesity Section */}
      <Section>
        <Heading level={1} className="text-orange-600">મોટાપો અને સ્ત્રી સ્વાસ્થ્ય :-</Heading>
        <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9VPhq4U7ZI474_mFvqit8XmnQJrmXKSRYXFhMgIpk4NCzA7aMgp8iH5c73O3Xmf-t5HF4KY9OGPNjTGlzVfgGvPoZlBPH2ZI3PC9YosIlwZZh4MTbbEkVgqAOvxNiYO8didsSI5J7xrI1q5N3QgaVnHosv4Jk9uc_jXUyk2UZyv5B1d3i0HPqR10IJrOd/s1280/1003056950.jpg" alt="Obesity Awareness" />
        <Paragraph className="font-bold text-xl mt-6">મોટાપો: માત્ર વજન નહીં, સ્વાસ્થ્યનો પડકાર</Paragraph>
        <Paragraph>વધતું વજન એ માત્ર શારીરિક દેખાવની સમસ્યા નથી, પરંતુ તે અનેક ગંભીર બીમારીઓનું પ્રવેશદ્વાર છે. આયુર્વેદની મદદથી તમે કુદરતી રીતે ફિટ બની શકો છો.</Paragraph>

        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 my-10">
           <Heading level={3} className="text-orange-700 mt-0">⚠️ મોટાપાને કારણે થતી સમસ્યાઓ</Heading>
           <ul className="space-y-3 font-medium text-stone-700">
             <li>1 * સાંધાનો દુખાવો: ઘૂંટણ અને કમર પર વધારાનું દબાણ આવવું.</li>
             <li>2 * શ્વાસ લેવામાં તકલીફ: સામાન્ય ચાલવામાં પણ હાંફ ચઢવો.</li>
             <li>3 * હોર્મોનલ અસંતુલન: ખાસ કરીને સ્ત્રીઓમાં PCOD/PCOS નું જોખમ.</li>
             <li>4 * હૃદય અને પાચન: બ્લડ પ્રેશર અને પાચનશક્તિ નબળી પડવી.</li>
           </ul>
        </div>

        <Heading level={2} className="text-herbal">🌿 આયુર્વેદિક સમાધાન (The Solution)</Heading>
        <Paragraph>જીમ કે કડક ડાયેટિંગ વગર પણ વજન ઘટાડવું શક્ય છે:</Paragraph>
        <ul className="list-disc list-inside space-y-2 font-medium mb-8">
          <li>* મેટાબોલિઝમ બૂસ્ટ: આયુર્વેદિક ઔષધિઓ દ્વારા શરીરની ચરબી ઓગળવાની પ્રક્રિયા ઝડપી બનાવો.</li>
          <li>* કુદરતી ડિટોક્સ: શરીરના ઝેરી તત્વોને બહાર કાઢી સ્ફૂર્તિ મેળવો.</li>
          <li>* સંતુલિત આહાર: ભૂખ્યા રહ્યા વગર સાચો ખોરાક પસંદ કરવાની સમજ.</li>
        </ul>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 mb-12">
          <Heading level={3} className="mt-0">✨ અમારો ઉદ્દેશ્ય</Heading>
          <Paragraph>અમે તમને વજન ઘટાડવા માટે માત્ર દવાઓ નહીં, પણ એક સ્વસ્થ જીવનશૈલી આપવા માંગીએ છીએ.</Paragraph>
          <Paragraph className="font-bold text-herbal italic">"ચરબી ઘટાડો, આત્મવિશ્વાસ વધારો – આજે જ તમારી સફર શરૂ કરો."</Paragraph>
          <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhucDr4ASt5iDnAZXpR_PHD5AMq1JQTBN_pV5JynyqSyUquM5S_-sYHbZ1KEhT_W7yEFM1Bk2dap-QXot8dWeW0CYspgVMps0d5oYwbZtGs1cI3PYmlOE1CcTgLbodCgJqolHCUKbwKKq67hRs4uVB6ZwjkJvt9-Micg4M0qzR7b-ZiGXzQ_q8g7TOVNmB3/s1280/1003106368.jpg" alt="Obesity Market Stats" />
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 mb-12">
            <Heading level={2} className="text-stone-900">ભારતમાં સ્થૂળતા નું સંકટ :- </Heading>
            <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGu6bJev2N_cMAVdSi5XNfocUAq8_dBrjvSfgFbH20qWkTT4LgOVtRVgBjg2cPWMuC5OLTNnVxdDpmjricxQrzzn7qYVi6iZSRtL43s7Zv_rEeTh0FhBdbixfCglWGcO8gFvMl8Wi8w6eJD-vTOmzs3x1oIlYptPasgTIqLAzr8QZWYtd1x6JAgHw65M8K/s1280/1003107592.jpg" alt="Obesity Crisis" />
            <Paragraph>ભારતમાં તોળાતું સ્થૂળતાનું સંકટ: 'ટાઈમ્સ ઓફ ઈન્ડિયા' ના અહેવાલ મુજબ, ભારતમાં મેદસ્વીતા (Obesity) ખૂબ જ ઝડપથી વધી રહી છે અને તે ભવિષ્યમાં મોટા 'હેલ્થ ક્રાઈસિસ' નું રૂપ લઈ શકે છે.</Paragraph>
        </div>

        {/* Beautilook Product */}
        <ProductCard title="Beautilook :- " image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw242Ap3vovOnHnUCTCltI7xsxDpDL3keZDKVZpf5gSBuPd6aF1udMdteytHPuCRuVG9JoFB2k-aPGuzWhyFVSXjMA2eUmm0XTKjaHIbIH917SMj1OoZAfOBnHIyoVHoi_kTyhUHqe1efP5zmF-36Fxv3WIp3JlcUF9H9WWGCFkkGPvq0oQXApO9m568M4/s1280/1003102907.jpg">
           <Paragraph className="font-bold text-orange-600">હવે વજન ઘટાડો કુદરતી રીતે, કોઈ પણ કસરત કે ડાયટ વગર! ✨</Paragraph>
           <Paragraph>બ્યુટીલુક લાવ્યું છે ભારતની નંબર ૧ આયુર્વેદિક ફોર્મ્યુલા, જે માત્ર ૯૦ દિવસમાં તમને આપશે મનગમતું ફિગર!</Paragraph>
           <ImageBox src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi67zpUCT8Ajrp1LsXiSU12v53xl4jKQBGV5UvnTpLn5WMfhBp5xn_wdSz3lXn3Ar2oHuClARO3oTPzW9donlvB8GOPKOzK_g-LVyYwjBD9i8pkXHJW7ip4uUZQsxTLDsD-A0OETW-tp4_lpr_xrvNz7_KF10zwHo3IKECrAzaKrvEQSv0PGm7wUlpd5Jp4/s320/1003065750.gif" alt="Result GIF" />
        </ProductCard>
      </Section>

      {/* CTA Section */}
      <Section className="text-center pb-24">
        <Heading level={2}>વેઈટ લોસ ની પોસ્ટ ની લિંક અહીં મૂકી દેવી </Heading>
        <div className="mt-12 flex flex-col items-center gap-6">
           <WhatsAppButton text="અત્યારે જ ઓર્ડર કરો" className="w-full md:w-auto" />
           <Paragraph className="text-stone-500 italic">વધારે માહિતી કે ઓર્ડર માટે આજે જ સંપર્ક કરો.</Paragraph>
        </div>
      </Section>
    </main>
  );
}
