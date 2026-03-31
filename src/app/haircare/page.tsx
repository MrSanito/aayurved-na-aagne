import React from "react";

const imgBase = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/";

const images = {
  logo: imgBase + "AVvXsEhvLpPgQIUG9vSkOF1fLxbxg1jhzDlpMjuB6jl7R6RWRp43YCkNc3iwY_6452gVo9-WOv_K8a2vQRHods7KbFX5I9Gbmt1gY48zGTX0ktUGpSmaznpFSOAX0T1HYwzk7Rgn5AvpJoK1KF5mCGsynmD4QgdwCmDmhEtWGB0cmAqkXuyegSg0QpNOpggmcvvT/s320/1003078797.png",
  hairfall1: imgBase + "AVvXsEh2eNvLsZKhfJp7zANYAl2dWaIAC_CgPkvUxMfcAe4q3SvBHz5T6w6WJQUo0jVHF9DIsMFGmtiLUlOG6-HbAmUDgkBETgscg0WoTNKLPuq0fI-FOvt2fh51yR_9Cb__I8fNxL0agBtBqpX0GOFJTqH_ayIufD3I80tWeLdGgjQSYYRQ6ZYvLGHTenP4G_bW/s320/1003077581.jpg",
  hairfall2: imgBase + "AVvXsEikLERvkSU-G2sJbrVP0lKs3Uc-I-N4pt8vE9YpoxJU_B0haBlWboCTzuXDndY0D7syESghTQWb63GD6yHCdwc6fxLCb0nQdtMbN67z8h71SfoZVpnirGB4R-24d-FXtF9Gp2d-I52uiD6PPRhIttCSvXMdwWRafc-4USb3qlngrZcrYeivpoR8W5OYdnRm/s320/1003077582.jpg",
  vitamins: imgBase + "AVvXsEj5HN9Rp78mbAAJ-2QoT42_LCtoAVYy4qKg8L3yhWoHosif_Dv5CIAMN4u3huvLzlko_Ig7wT9Pldp4RoX-kWqp_BkoLG0HlbBxio7S42ytqP9gTXx7lrDT1boBD-nTY7Vs5tqzKwFwyt9kOoNhZ1njGeXKZ1d19OLn0VBdD98lhfG5vGnLXWQirnG4Qu4t/s320/1003077583.jpg",
  norwood: imgBase + "AVvXsEj1BMQ1T17qol1LCTkx3Li1pHupvc6-DsVJa_GiImicIwC_2KWpJpPQj3WU_Mes05yaJK0LbyNS_bzkXK4vnQ6SUYfXwUoLxA9F9euz0xuQImVU_pxQfXF7MsDvVUbkOKjVks4WD2vFYZrcfbzfZ1iEIq9mir-NQbyGWtMvl5zuTpOXoRf7caSq-vkpbd6k/s320/1003077584.jpg",
  blackHair: imgBase + "AVvXsEhIvWvb31MrndYiL3N1PpZChL0inZCvdvZ7Ain2Xwk-xeLZHInhOisKekwI-0mN6Yoe5slCZ6e2ifgyNHWjXYZiidZk0RGaU7BRfrDpTEZZgZuvflKGnQLFdV55Z3_TEIyNc3TY5Orn7QYahzpU1eCjDc0lQ3BrzUl365fmGEXKOkcnh7BB_GJPV6ozjwmf/s320/1003077585.jpg",
  products: imgBase + "AVvXsEguzMIs2KTZ1yA3IBinQAj_z3OGftwFkhnRxFsckHsj0Pnb6pCX49dNyueoGnFBh149J6Gkbkq15j5jGIpFgxWcOldqPKD1eJbme2AIF8KMH5rdrBJBa5ucDzUnCq65AMOw9i3oHxBiId3zdYOYJjgNgY-n7M4-uo79Edewpnm3tJVUYsf8gwiCCMm0R2HJ/s320/1003077586.jpg",
  biotinDeficiency: imgBase + "AVvXsEgcdm9RESWP0-Dg38DeSmRG7XYOsRrXVVIVowC-2luEPp8Cf4K-NKr0lOEh-lOL0F7K-1OB0YqSC01869VsxWcGKe3FPYXgkM5-M4J58g7B0dvQI6FZF7a8vP36b0XgMbv1TOenpywpEVFfXIsVn1B0V0SxbD7kCFnbNQT4o-neurMYyhw_f2hPE9JCPMqh/s320/1003077587.jpg",
  biotinGummy: imgBase + "AVvXsEhnBnTDgavndsQ0M2D8N_LP5cwjKzBTGaePkb-Ez5hr925M4ScuC_X6DX9Lgi6yu2On1UiZzF3214jYMT1kp1cb5mWqiXrBxf7LgLmezeOg6vyMSJxFcxskMyGGwy6WRI4l-zfEHYlUaE5LnNws2NyyT1259YNMB_jgq2me_UxLsJaGHMgBV63hMU5CotfU/w364-h702/1003134921.jpg",
  b12spray: imgBase + "AVvXsEiRakKUucGiRSkNhYbZXS9kf3iPY2n-3Y3YE23ugsahLqUXW28hzqTj3l42oM08Q6VWypRzF1-7T_mWv6_Lrb7WafpgABWPB2xQXCO86iOPJGu1TuCB-aYNUBGiMN62XmBxuPSd2jPpURq0nIUreKLtSLtJNzgrhv21mrA5lNrLR4xHsIiZh5ZVYD7jFyyP/w338-h410/1003134949.jpg",
  saptamrut: imgBase + "AVvXsEj0S2MXgajyw0VdiJ-6bkydRJpxlnOc_8OyQHkgzq8jiNNELYztYh3E3Rvf3uEl7bO5nhMveVj5qSjQwTmY2DwnMefYJrhJvNpA5EwHvN7I_hm6tiYfEO1t9QVVf1Bu61u2PJL8PZ892LlVzPHksBDUv02c7klZRqIMrXYb5q4qV8At7MyW_X6TmIhakFIZ/w338-h499/1003134948.jpg",
  hairTonic: imgBase + "AVvXsEg6WfjgjrwNmiegeucQ090KainwCGwoqj0glQHV_yAiZVLeSjlT3pC_OHq5az_PLjJN6nMOnqbe2H22Gqvo2YoyBHopzj_y9uerr2yBCCUhDTozCNcyxGbAfrCovrW_tJIO5qHeoeejY91gHDXD6mlSepAk_XWL8RO4Z3qjIP6bpt6c0Jd8y6lzlq1FHSt9/w352-h496/1003136052.jpg",
  shampoo: imgBase + "AVvXsEjtIUCBw64TaQGCHEWByVD_TO3XT2ln8zmCwt-FXUdF7evYj8SPNRt8HQtbaxKPlshmVGgEm237qJgsC42Zqmvehd3DG4zPsiX9qJBBBb6jI-NC7bqh_6iWikz9OvvqgF3wfKYfnz7OIilAyl6kn91hZ5TokHqHxidTJ9d3GdJgusBF-7eu3uvCoUSmm3EQ/w369-h464/1003136696.jpg",
  conditioner: imgBase + "AVvXsEhNiKtDy4DUusltHIGcgmX9PN5ZnfcxFgSPfzEYTVL4ZTUPC0_2dJJqfjWGQIVsbghqziTpc3UzJV0bzFN_ghyk6dfP0Smdss5XY53FVXa1GnekYIIdPU27_QA61r_sKz8MtbGHdy3NdYjXNzlIIPO0gDEXK9RsXMbKhpm3_i3QocjpOqOItN7WKtqXoJZE/w330-h471/1003136697.jpg",
  conditionerResult: imgBase + "AVvXsEjEfae3XHQZz_r3UTKAwF8YMvys9LxaF4qVjpfXleCHZlZ4Z7H52Pj2WKkL95IPoqoqa2Ky-vauEgy892AW6ltLoIA8V7aDO7LyhvYRTy1RCOLblnqMmZqID0MwHlbaVLSiBY10FbDM7v_tm8XcVAJlYI1I14DYwnopLzt42JVvoC3T506_e2X4M_S9JIau/s320/1003077620.jpg",
  hairOil: imgBase + "AVvXsEi3Xx3DM5Yeuwx8R9EDtGcTEhVksGYlDDUEBIB1KgbPS2yZK8T-uaagYU6fA5M6Wdbg55yuqbJMIdBRgUmpMH51dL8lsUMz1b3CvXz2g6okbcIwGbjvxoExC6dQPe5VVUUoRp-1YyEY-WD5vNuhyphenhypheny30RPQ6K7Tms97OdU5EfGho3mAI_FNUc1W8tFBtGX6U/w363-h488/1002797632.jpg",
  hairOilResult: imgBase + "AVvXsEjkBwv1ZYtyvgz-qpTsGkTDPc8QBybHoH6RBlm-bNau0qokGN2zQiLw3NIEgVLTnPoKjp3V-axgu1WJXSeXWRvjONqWE3DJjIBlkk5j-EgrLRKPbwN3pYeKH09CyhTs4xIUZC7jlFnCf9J-uPxvdOkklU17v9rZ22aNXAvIpEEdS6WgTjiiYYhG9UImkiHN/s320/1003077626.jpg",
  serum: imgBase + "AVvXsEhp2CDibGdMvDv_76pV9g53V4bXOFaASbsCc1OTomwYPCR0RoUgdzoXrGgKAstbzwRLHCiDXrST8glWrXNDRaWGoxXw-PAtnjrFSQ7v4DbeF5DKhJI_jDEXJzNnNE81fuC-DA16Ub4hSHxbLPeiIvd6V8AI4CfW8ScvA8yx3iRjF0J4xQqECxmP4FRjo60j/w354-h447/1003136673.jpg",
  gif1: imgBase + "AVvXsEjBaJNc1RyUkt4uLGc3PEphMMIruY74xON8Pv400eSCLOt9jUl6DZWBAuROIHLygmoQsZvn923nWW9onhjBEwvq4XOyuvlJlz8S2fDYK-2eonMeb57MkSdAOCUjeDHooWvR93_RTaosgDZL_TMupPqGh58Mf7SSMaB0cX_FrybBFGHgSRZN2ICff9LwvRdy/s320/1003065750.gif",
  result1: imgBase + "AVvXsEjR3r0AqeXNJMJ0dwmndUdNVp2Q0hA5NhDk3-0walqaMDXNtTNtTfiSbyLJR4DfudtFSRMYGHvDwgqJvOhF_LeuBC-8vGLdwoKTgS2HHG5zB69MQbm6ZOWvqa0USA54kPQ2_7YH4bAUgwIT9iKNB30kJ4mX_ychd_g4lvJZqbWFk5UsNIb_l4WR2SoiozFD/s320/1003077630.jpg",
  gif2: imgBase + "AVvXsEiMHSKL4eNOWo-EnyTeuNC8GdXmZTbeKBRfVA0WeFdbXJOCY7zk6UO9__kAS0jDXLYO_Rkm3ee681eibKkbbuPt9VNbH8kdMHbGIoT9E0fShhfj-JhLuCsp1IEVuU5SuXxAzDs_JmG60pc3JcQvtTzlNY-WTdY_UQFF1nMZd1348kt1evF4RznYhjfs3XQ5/s1600/1003065751.gif",
  cert1: imgBase + "AVvXsEjC5u2e09x2exTordvIlX6xE4TP0bq8JyfxJ6niqQ1pemmOtaupnwhV9lC8dAQnOJk_jmXRD_ELom_n4A_HKVnWpEPinx2uXrmh6v3P7VXdGbUcdqN4LaVozmMK-4de9OVXSVa4aBSKQRUBbAEysrXgdFe8M9ZylnGVVbGFeSJCWgrjSnjLuYHZ36k_28WM/s320/1003090306.png",
  gif3: imgBase + "AVvXsEiDG0xqCqlxtuE_IgqjFG51JsqPvJwjpZN_8rbVmb1qOv8sFITrjrJD8aOUc2WPaMvT2PwvS2Ek83AmSECfp6ELahyphenhyphen5QbDRNA1swJUFTIl6fovMCMSEypz9A_o85e-yVtgfiFLmZxE4_e74-xKoLq024DKj2PaLKs_frL8Nt2lVQVTV9cMHB7hDZnKs2uVd/s1600/1003065749.gif",
  cert2: imgBase + "AVvXsEi3Q0FByHPmAk_RmydfhNbMYkRDqNx7Sl0TCTVKZeT0ojOSdFQY7AJYebTC2yV2oy456dxYSmkAfenSfSkiBiEo0ianHa5PIZXbQCG6yiVWGoT3uxZa8jre3_a1cf9qkOS8uj-YZhb7jUbqWQr2UDQdPnr7s796_yJLWBx2Rfk0ivmpbPjnyUteREkKSdsz/s320/1003090358.png",
  gif4: imgBase + "AVvXsEhmuxaVEHRHpTAZrHEWUntxP5DVx3wauAB7atvsUU2xEqJe08NE2seDAFQbcKU-peiejMBC6Tg3u0xfjx_hFRd6_hTE8JUU3mwPT1mY4yuvfZjZuRx979BZp8l_UVgB87g6taXg0sM7bclIzCQWxqT2OaLdGaMuce7_4lehiYrDqHZ0S_0c3vHMTrjplJuo/s320/1003065748.gif",
  cert3: imgBase + "AVvXsEiLBodNA_j96k_EdY-fd1YWLibeVauFKcc2H4xq9vNMxomIc3WEHJTQE2b6MLU8l6WAiKLr8lzDHxBGALb8BD_xBg6Kl9eFK_eGFZNCN33b3lUR2U-y6A3EQXLV_TJRFfrKxpjCuZdWVFzqAgGfpUmVyDSHqegWwFoP3XR_P7fL6S2C9JUn8HgTa5EYQP_r/s320/1003090511.png",
  gif5: imgBase + "AVvXsEjnRDvcURcPjx4PJ2hgwd8pwMbmfCEwBAUVIysbAcAczRNfQnatiJV6L55533QwFoYbRUQqEYv1pvj1ITH9rrC0ED6UPrWF27afV7opsmkzM-HnxyCOemQeWVJ7bs18uQzWH9WdjuBXkQlIcHdEImZfW6xC_WZnzOox_Vi9EneeK2vTYHu_FKN7XJFY2SeU/s1600/1003065751.gif",
  certification: imgBase + "AVvXsEhEc9r0YjlslgT7HJkArSJoINKZKPNN3Ar7e7j2HYzDZli7mKqd5GTHU-7fNArQL4rA38KgBQ5y5KwRvsAT8qeBhiYlkNI_AFoSgvuD-RA8iwHJcEC1taOHkcBylGSFtD4KWJJL-LRWwo2tYlbgich1q5GyJPj2fSJbeLXu2XCU_-oR2lk0iYhMYR1lTDM5/s320/1003080746.jpg",
};

// UI Components
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-4xl mx-auto px-4 py-12 md:py-16 ${className}`}>
    {children}
  </section>
);

const Heading = ({ children, level = 2, className = "" }: { children: React.ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const baseClasses = "font-bold text-stone-900 tracking-tight leading-tight";
  if (level === 1) return <h1 className={`${baseClasses} text-3xl md:text-4xl text-center mb-8 ${className}`}>{children}</h1>;
  if (level === 2) return <h2 className={`${baseClasses} text-2xl md:text-3xl mt-12 mb-6 ${className}`}>{children}</h2>;
  return <h3 className={`${baseClasses} text-xl md:text-2xl mt-8 mb-4 ${className}`}>{children}</h3>;
};

const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-stone-700 leading-relaxed mb-4 text-base md:text-lg ${className}`}>{children}</p>
);

const ImageBox = ({ src, alt, width }: { src: string; alt: string; width?: number }) => (
  <div className="flex justify-center my-8">
    <img src={src} alt={alt} className="max-w-full h-auto rounded-xl shadow-lg border border-stone-100" style={width ? { maxWidth: width } : {}} />
  </div>
);

const ProductCard = ({ title, image, children }: { title: string; image: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden my-12 transition-all hover:shadow-md">
    <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
      <h3 className="text-xl md:text-2xl font-bold text-herbal-dark">{title}</h3>
    </div>
    <div className="p-6 md:p-8 md:flex gap-10 items-start">
      <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-inner border border-stone-100" />
      </div>
      <div className="md:w-2/3 space-y-3">
        {children}
      </div>
    </div>
  </div>
);

const InfoBox = ({ children, type = "default" }: { children: React.ReactNode; type?: "default" | "green" }) => {
  const classes = type === "green" 
    ? "bg-green-50 border-green-200 text-green-900" 
    : "bg-stone-50 border-stone-200 text-stone-900";
  return (
    <div className={`${classes} border rounded-2xl p-6 md:p-8 my-8 text-center italic font-medium`}>
      {children}
    </div>
  );
};

export default function AyurvedicHairCare() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-stone-100 py-12 md:py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-beige rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>
        <Section className="relative z-10 text-center">
          <Heading level={1} className="text-herbal">"વાળ ખરવાની ચિંતા છોડો, આયુર્વેદ સાથે નાતો જોડો."</Heading>
          <div className="mb-10">
            <img src={images.logo} alt="આયુર્વેદના આંગણે" className="mx-auto h-24 md:h-32 w-auto" />
          </div>
          <Heading level={2} className="text-stone-800">શું તમે પણ ખરતા વાળ, ખોડો, પાતળા વાળ, અકાળે થયેલ સફેદ વાળ થી પરેશાન છો?</Heading>
          <div className="max-w-2xl mx-auto space-y-4 text-lg">
            <Paragraph>રાસાયણિક શેમ્પૂ અને તેલ ક્યારેક ફાયદા કરતા નુકસાન વધુ કરે છે.</Paragraph>
            <Paragraph className="font-semibold text-herbal">
              અમારું 'આયુર્વેદના આંગણે' હેર સોલ્યુશન પ્રાચીન જડીબુટ્ટીઓ અર્કથી બનેલું છે. આ માત્ર ઉપરછલ્લો ઈલાજ નથી, પણ મૂળમાંથી વાળને મજબૂતી આપે છે.
            </Paragraph>
          </div>
        </Section>
      </div>

      {/* Section 1: Hair Fall Issues */}
      <Section className="bg-white rounded-3xl mt-12 shadow-sm border border-stone-100">
        <Heading level={2} className="text-center font-outfit text-herbal mb-8">"શું તમે પણ દરરોજ ખરતા વાળથી પરેશાન છો?</Heading>
        <ImageBox src={images.hairfall1} alt="ખરતા વાળ" />
        <Heading level={3} className="text-stone-900 border-l-4 border-herbal pl-4 py-2 my-10">
          * "કાંસકામાં આવતા વાળ જોઈને ચિંતા થાય છે? હવે અટકાવો કાયમી ધોરણે!"
        </Heading>
        <Paragraph className="text-xl">તમારા ખરતા વાળનું આયુર્વેદિક અને કુદરતી નિવારણ અહીં છે.</Paragraph>
        <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-100 my-8">
          <Paragraph>&gt; વાળ ખરવા એ માત્ર એક સમસ્યા નથી, તે તમારા આત્મવિશ્વાસને પણ અસર કરે છે.</Paragraph>
          <Paragraph>&gt; બદલાતી જીવનશૈલી, પ્રદૂષણ અને કેમિકલયુક્ત પ્રોડક્ટ્સ તમારા વાળને મૂળમાંથી નબળા બનાવે છે. જો તમારા કાંસકામાં પણ આ રીતે વાળ ગુચ્છામાં આવતા હોય, તો તેને અવગણશો નહીં.</Paragraph>
          <div className="pt-4 border-t border-stone-200">
            <Paragraph className="font-bold text-herbal">અમારું ૧૦૦% આયુર્વેદિક સોલ્યુશન:</Paragraph>
            <ul className="list-disc list-inside space-y-2 mt-2 text-stone-700">
              <li>વાળનું ખરવાનું 90 દિવસમાં ઓછું કરે છે.</li>
              <li>સ્કેલ્પને ઊંડાણપૂર્વક પોષણ આપે છે.</li>
              <li>નવા વાળ ઉગાડવામાં મદદરૂપ થાય છે.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 2: Reasons */}
      <Section>
        <Heading level={2} className="text-center">"તમારા વાળ કેમ ખરે છે? જાણો સાચું કારણ!"</Heading>
        <div className="bg-herbal text-white p-8 rounded-2xl text-center my-8 shadow-md">
           <Heading level={3} className="text-white mt-0 mb-0">માત્ર મોંઘા શેમ્પૂ બદલવાથી વાળ ખરતા અટકશે નહીં. પહેલાં એ જાણવું જરૂરી છે કે સમસ્યા અંદરથી છે કે બહારથી.</Heading>
        </div>
        <ImageBox src={images.hairfall2} alt="વાળ ખરવાનું કારણ" />
        <Paragraph className="text-center text-lg italic bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
          ઘણીવાર આપણે મોંઘા શેમ્પૂ અને કન્ડિશનર બદલતા રહીએ છીએ, છતાં વાળ ખરવાનું બંધ થતું નથી. કારણ કે આપણે તેના 'મૂળ કારણ' સુધી પહોંચતા નથી. ચાલો જાણીએ કે તમારા વાળ કેમ ખરે છે અને આયુર્વેદ તેમાં કેવી રીતે મદદ કરી શકે છે.
        </Paragraph>
      </Section>

      {/* Section 3: Vitamins */}
      <Section className="bg-white rounded-3xl shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal">"વાળનો સાચો ખોરાક: જાણો કયા વિટામિન્સ છે જરૂરી!"</Heading>
        <ImageBox src={images.vitamins} alt="વિટામિન્સ" />
        <Paragraph>જેમ શરીરને ટકવા માટે ખોરાકની જરૂર છે, તેમ તમારા વાળને પણ જીવંત, લાંબા અને મજબૂત રહેવા માટે ખાસ પોષક તત્વોની જરૂર પડે છે.</Paragraph>
        
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-beige/30 p-6 rounded-2xl border border-beige">
            <Heading level={3} className="text-herbal mb-4 mt-0">વિટામિન્સનો પાવર :-</Heading>
            <div className="space-y-4">
              <Paragraph><strong>વિટામિન A & C:</strong> સ્કેલ્પમાં કુદરતી ઓઈલ જાળવી રાખે છે.</Paragraph>
              <Paragraph><strong>B7 (Biotin) & B12:</strong> નવા વાળ ઉગાડવા માટે મહત્વપૂર્ણ.</Paragraph>
              <Paragraph><strong>વિટામિન D & E:</strong> નુકસાન સામે રક્ષણ આપે છે.</Paragraph>
            </div>
          </div>
          <div className="bg-green-50/30 p-6 rounded-2xl border border-green-100">
            <Heading level={3} className="text-herbal mb-4 mt-0">જરૂરી મિનરલ્સ અને પ્રોટીન :-</Heading>
            <div className="space-y-4">
              <Paragraph><strong>Iron (આયર્ન):</strong> વાળના મૂળ સુધી ઓક્સિજન પહોંચાડે છે.</Paragraph>
              <Paragraph><strong>Zinc (ઝિંક):</strong> હેર ટિશ્યુના રિપેરિંગમાં મદદ કરે છે.</Paragraph>
              <Paragraph><strong>Protein (પ્રોટીન):</strong> વાળને મજબૂતી આપે છે.</Paragraph>
            </div>
          </div>
        </div>

        <InfoBox>
          <Paragraph className="font-bold text-herbal text-xl mb-2">"આયુર્વેદના આંગણે" કેમ પસંદ કરવું?</Paragraph>
          <Paragraph>"અમે માત્ર તેલ નથી આપતા, અમે તમારા વાળને જરૂરી સંપૂર્ણ આહાર આપીએ છીએ."</Paragraph>
          <Paragraph className="text-sm md:text-base opacity-80 mt-2">
            અમારું મિશ્રણ એવી રીતે તૈયાર કરવામાં આવ્યું છે કે તે આ તમામ વિટામિન્સ અને મિનરલ્સનું પોષણ સીધું તમારા વાળના મૂળમાં પહોંચાડે છે. કેમિકલ મુક્ત પદ્ધતિથી બનેલું આ સોલ્યુશન તમારા વાળને અંદરથી પોષણ આપી બહારથી સુંદર બનાવે છે.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* Section 4: Norwood Scale */}
      <Section>
        <Heading level={2} className="text-center">શું તમારા વાળ પણ ખરવા લાગ્યા છે? જાણો હેર લોસના 7 મહત્વના તબક્કા :-</Heading>
        <ImageBox src={images.norwood} alt="નોરવુડ સ્કેલ" />
        <Paragraph className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm text-center mb-8">
          વાળ ખરવા એ માત્ર વૃદ્ધાવસ્થાની નિશાની નથી, પણ તે બદલાતી જીવનશૈલી અને આનુવંશિક કારણોનું પરિણામ હોઈ શકે છે. પુરુષોમાં જોવા મળતી ટાલ (Male Pattern Baldness) ને સમજવા માટે 'નોરવુડ સ્કેલ' (Norwood Scale) ખૂબ જ ઉપયોગી છે.
        </Paragraph>
        
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-stone-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-herbal text-white">
                <th className="px-6 py-4 text-lg font-bold">સ્ટેજ</th>
                <th className="px-6 py-4 text-lg font-bold">શું થાય છે?</th>
                <th className="px-6 py-4 text-lg font-bold text-center">હાલત</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                ["સ્ટેજ 1", "શરૂઆત, દેખીતી રીતે જણાતી નથી.", "સામાન્ય"],
                ["સ્ટેજ 2", "કપાળના ખૂણે હળવાશ.", "શરૂઆત"],
                ["સ્ટેજ 3", "'M' આકાર સ્પષ્ટ અને વાળ પાતળા.", "ચિંતાજનક"],
                ["સ્ટેજ 4", "પાછળના ભાગે (Vertex) ટાલ.", "મધ્યમ"],
                ["સ્ટેજ 5", "આગળ અને પાછળની ટાલ વચ્ચેનો ગેપ ઘટે.", "ગંભીર"],
                ["સ્ટેજ 6", "ઉપરના ભાગમાં ખૂબ ઓછા વાળ.", "ખૂબ ગંભીર"],
                ["સ્ટેજ 7", "સંપૂર્ણ ટાલ, માત્ર કાનની ઉપર વાળ.", "અંતિમ"],
              ].map(([stage, desc, status]) => (
                <tr key={stage} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-stone-900">{stage}</td>
                  <td className="px-6 py-4 text-stone-700">{desc}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      status === "સામાન્ય" ? "bg-green-100 text-green-700" :
                      status === "શરૂઆત" ? "bg-blue-100 text-blue-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
          <Heading level={3} className="text-herbal mt-0">શા માટે આ સ્ટેજ સમજવા જરૂરી છે? 🧐</Heading>
          <Paragraph>
            તમે જેટલા વહેલા સ્ટેજ પર હેર લોસને ઓળખી લેશો, તેને રોકવો એટલો જ સરળ રહેશે. જો તમે સ્ટેજ 2 કે 3 પર છો, તો યોગ્ય ટ્રીટમેન્ટ અને આહારથી તમે તમારા વાળ પાછા મેળવી શકો છો અથવા ખરતા અટકાવી શકો છો.
          </Paragraph>
          <Paragraph className="font-semibold text-herbal-dark">યાદ રાખો: સમયસર લીધેલો નિર્ણય તમારા લુક અને આત્મવિશ્વાસને બચાવી શકે છે!</Paragraph>
        </div>
      </Section>

      {/* Section 5: Solutions Showcase */}
      <Section className="bg-stone-900 text-white rounded-[3rem] px-8 md:px-16 py-16 md:py-24">
        <Heading level={2} className="text-white text-center mb-6">ખરતા અને સફેદ વાળને કહો અલવિદા! મેળવો મજબૂત અને કાળા વાળ કુદરતી રીતે 🌿</Heading>
        <ImageBox src={images.blackHair} alt="કાળા અને મજબૂત વાળ" />
        <Paragraph className="text-stone-300 text-center text-xl mb-12">
          શું તમે વાળ ખરવા (Hair Fall), ટાલ પડવી (Hair Loss) અથવા નાની ઉંમરે સફેદ થતા વાળ (Grey Hair) થી પરેશાન છો?
        </Paragraph>
        
        <div className="grid md:grid-cols-2 gap-6 my-10">
          {[
            "Biotin Gummy: સ્વાદિષ્ટ ગમીઝ.",
            "B12 Spray: વિટામિનની ઉણપ દૂર કરે.",
            "Saptamrut Loh: કુદરતી કાળાપણું.",
            "Hair Tonic: બ્લડ સર્ક્યુલેશન વધારે.",
            "Argan Biotin Shampoo: રેશમી ચમક.",
            "Hair Conditioner: વાળ બનાવે મુલાયમ.",
            "7 in 1 Argan & Tea Tree: ૭ શક્તિશાળી તત્વો."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-stone-800/50 p-4 rounded-xl border border-stone-700">
               <span className="w-6 h-6 bg-herbal rounded-full flex items-center justify-center text-xs font-bold">✓</span>
               <span className="text-stone-200">{item}</span>
            </div>
          ))}
        </div>
        
        <InfoBox type="green">
          <Paragraph className="font-bold text-herbal mb-2">શા માટે અમારી પ્રોડક્ટ્સ પસંદ કરવી? ✅</Paragraph>
          <ul className="text-stone-700 space-y-1 text-sm md:text-base">
            <li>* સંપૂર્ણ સુરક્ષિત: કોઈ હાનિકારક કેમિકલનો ઉપયોગ નહીં.</li>
            <li>* ઝડપી પરિણામ: નિયમિત ઉપયોગથી થોડા જ દિવસોમાં તફાવત દેખાશે.</li>
            <li>* ઓલ-ઈન-વન સોલ્યુશન: હેર લોસથી લઈને ગ્રે હેર સુધી.</li>
          </ul>
        </InfoBox>
        
        <ImageBox src={images.products} alt="પ્રોડક્ટ્સ" />
      </Section>

      {/* Section 6: Product Deep Dive (Biotin) */}
      <Section>
        <Heading level={2} className="text-center">"બાયોટિન: નવા અને મજબૂત વાળ ઉગાડવાનું ગુપ્ત રહસ્ય!"</Heading>
        <Paragraph className="text-center italic text-stone-500">
          શું તમે જાણો છો કે તમારા વાળનો મુખ્ય ભાગ કેરાટિન (Keratin) નામના પ્રોટીનથી બનેલો છે? અને આ પ્રોટીન બનાવવા માટે શરીરને સૌથી વધુ જરૂર બાયોટિન (Biotin) ની હોય છે.
        </Paragraph>

        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm my-10">
          <Heading level={3} className="text-herbal mt-0">૧. બાયોટિન એટલે શું? બાયોટિન કેવી રીતે કામ કરે છે?</Heading>
          <Paragraph>બાયોટિન એ વિટામિન B7 છે. આ એક 'વોટર સોલ્યુબલ' વિટામિન છે, જેનો અર્થ છે કે શરીર તેને સંગ્રહિત કરી શકતું નથી.</Paragraph>
          <ul className="space-y-3 mt-4">
            <li className="flex gap-3"><span className="text-herbal font-bold">•</span> તે શરીરમાં કેરાટિન પ્રોટીનનું ઉત્પાદન વધારે છે.</li>
            <li className="flex gap-3"><span className="text-herbal font-bold">•</span> વાળના ફોલિકલ્સ (મૂળ) ને સક્રિય કરે છે.</li>
            <li className="flex gap-3"><span className="text-herbal font-bold">•</span> પાતળા વાળને જાડા અને ભરાવદાર બનાવે છે.</li>
          </ul>
        </div>

        <Heading level={2} className="text-center text-red-600">શું તમારા શરીરમાં બાયોટિનની ઉણપ છે? આ લક્ષણોને અવગણશો નહીં! ⚠️</Heading>
        <ImageBox src={images.biotinDeficiency} alt="બાયોટિનની ઉણપ" />
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-transform">
             <div className="text-3xl mb-4">💇‍♀️</div>
             <Heading level={3} className="mt-0 text-lg">વાળ ખરવા</Heading>
             <Paragraph className="text-sm">બચ્ચાઓમાં પણ વાળ નબળા અને બરડ બની જાય છે.</Paragraph>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-transform">
             <div className="text-3xl mb-4">✨</div>
             <Heading level={3} className="mt-0 text-lg">ત્વચાની ચમક</Heading>
             <Paragraph className="text-sm">ત્વચા ફિક્કી અને નિર્જીવ દેખાવા લાગે છે.</Paragraph>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-transform">
             <div className="text-3xl mb-4">💅</div>
             <Heading level={3} className="mt-0 text-lg">નખ નબળા</Heading>
             <Paragraph className="text-sm">નખ વારંવાર તૂટી જાય છે અને વિકાસ ધીમો પડે છે.</Paragraph>
           </div>
        </div>
      </Section>

      {/* Product Cards Gallery */}
      <Section className="bg-white p-8 md:p-16 rounded-[4rem] shadow-sm border border-stone-100">
        <Heading level={2} className="text-center text-herbal mb-16">અમારા ખાસ હેર કેર સોલ્યુશન્સ</Heading>
        
        {/* Biotin Gummy */}
        <ProductCard title="Biotin Gummy :-" image={images.biotinGummy}>
           <Paragraph className="font-bold text-herbal">કુદરતી સુંદરતા હવે સ્વાદ સાથે! ✨</Paragraph>
           <Paragraph>શું તમે વાળ ખરવા, નબળા નખ અથવા નિસ્તેજ ત્વચાથી કંટાળી ગયા છો? હવે મેળવો કુદરતી સોલ્યુશન આ ટેસ્ટી ગમીઝમાં!</Paragraph>
           <div className="grid grid-cols-2 gap-4 text-sm mt-4">
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• 100% ઓર્ગેનિક</div>
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• મલ્ટી-બેનિફિટ્સ</div>
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• મિક્સ બેરી ફ્લેવર</div>
             <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 font-semibold">• કેમિકલ ફ્રી</div>
           </div>
           <div className="bg-herbal/5 p-4 rounded-xl border border-herbal/20 mt-6">
             <Paragraph className="font-bold mb-1">કેવી રીતે ઉપયોગ કરવો? 🍬</Paragraph>
             <Paragraph className="text-sm mb-0">દિવસની માત્ર 1 થી 2 ગમીઝ લો. (24 કલાકમાં 8 થી વધુ ન લેવી).</Paragraph>
           </div>
        </ProductCard>

        {/* Vitamin B12 Spray */}
        <ProductCard title="Vitamin B12 Special :-" image={images.b12spray}>
           <Paragraph className="font-bold text-herbal">વાળ ખરવાની સમસ્યાથી પરેશાન છો? હવે મેળવો કુદરતી ઉકેલ! ✨</Paragraph>
           <Paragraph>શરીરમાં Vitamin B12 ની ઉણપ હેર લોસનું મુખ્ય કારણ હોઈ શકે છે. Teamex B12 Oral Spray સાથે વાળને આપો અંદરથી પોષણ.</Paragraph>
           <ul className="space-y-2 text-sm mt-4">
             <li className="flex gap-2"><strong>✓ હેર ગ્રોથ:</strong> નવા વાળ ઉગાડવામાં મદદરૂપ.</li>
             <li className="flex gap-2"><strong>✓ મજબૂત મૂળ:</strong> વાળના મૂળને પોષણ આપે.</li>
             <li className="flex gap-2"><strong>✓ શાકાહારી:</strong> ૧૦૦% શાકાહારી અને સ્ટ્રોબેરી ફ્લેવર.</li>
           </ul>
        </ProductCard>

        {/* Saptamrut Loh */}
        <ProductCard title="Saptamrut Loh tablet :-" image={images.saptamrut}>
           <Paragraph>ખરતા અને સફેદ વાળથી કંટાળી ગયા છો? હવે અપનાવો આયુર્વેદિક ઉકેલ! ✨</Paragraph>
           <Paragraph className="text-sm">વાળના મૂળને મજબૂત કરી ખરતા રોકે છે અને કુદરતી રીતે સફેદ વાળની સમસ્યામાં રાહત આપે છે.</Paragraph>
           <div className="mt-4 p-4 bg-beige/30 rounded-xl border border-beige">
             <Paragraph className="font-bold mb-1 text-sm">કુદરતી ઘટકોની શક્તિ: 🌿</Paragraph>
             <Paragraph className="text-xs mb-0">હરડે, બહેડા, જેઠીમધ - એન્ટી-ઓક્સિડન્ટથી ભરપૂર.</Paragraph>
           </div>
        </ProductCard>

        {/* Hair Toniq */}
        <ProductCard title="Hair Toniq :-" image={images.hairTonic}>
           <Paragraph>Bella Cast Hair Tonic સાથે મેળવો મજબૂત અને ઘાટા વાળ ✨</Paragraph>
           <Paragraph className="text-sm">બ્રાહ્મી, જાસૂદ, જટામાંસી, ભૃંગરાજ અને નગરમોથ જેવા 15+ થી વધુ શુદ્ધ આયુર્વેદિક ઘટકો દ્વારા નિર્મિત.</Paragraph>
           <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold text-stone-600">
              <span className="bg-stone-50 p-2 rounded border border-stone-100">વાળ ખરતા અટકાવે</span>
              <span className="bg-stone-50 p-2 rounded border border-stone-100">નવો ગ્રોથ</span>
              <span className="bg-stone-50 p-2 rounded border border-stone-100">ખોડાથી મુક્તિ</span>
              <span className="bg-stone-50 p-2 rounded border border-stone-100">બે-મોઢાવાળા વાળ</span>
           </div>
        </ProductCard>

        {/* Biotin Shampoo */}
        <ProductCard title="Biotin shampoo :-" image={images.shampoo}>
           <Paragraph>વાળ ખરતા અટકાવો અને મેળવો પાર્લર જેવી સુંદરતા! ✨</Paragraph>
           <Paragraph className="text-sm italic">Bellacast Argan & Biotin Shampoo એ તમારા વાળ માટે એક સંપૂર્ણ હેર સ્પા ટ્રીટમેન્ટ છે.</Paragraph>
           <div className="space-y-2 mt-4 text-sm">
             <Paragraph className="mb-0"><strong>• આર્ગન ઓઈલ:</strong> કુદરતી કુદરતી મોઈશ્ચરાઈઝર.</Paragraph>
             <Paragraph className="mb-0"><strong>• કેરાટિન રિપેર:</strong> સિલ્કી લુક આપે છે.</Paragraph>
             <Paragraph className="mb-0 text-red-600 font-bold">પેરાબેન અને સલ્ફેટ ફ્રી! ✅</Paragraph>
           </div>
        </ProductCard>

        {/* Hair Conditioner */}
        <ProductCard title="Hair Conditioner :-" image={images.conditioner}>
           <Paragraph>શુષ્ક વાળને કહો અલવિદા! Bellacast Conditioner સાથે મેળવો સુપર સોફ્ટ વાળ ✨</Paragraph>
           <ImageBox src={images.conditionerResult} alt="Conditioner Result" />
           <Paragraph className="text-sm">વાળને રેશમ જેવા પોચા અને ચમકદાર બનાવે છે. ગૂંચાતા અટકાવે છે જેથી તૂટવાનું ઓછું થાય.</Paragraph>
        </ProductCard>

        {/* 7in1 Hair Oil */}
        <ProductCard title="7in1 Hair oil :-" image={images.hairOil}>
           <Paragraph className="font-bold">૭ તેલની શક્તિ, હવે એક જ બોટલમાં!</Paragraph>
           <ImageBox src={images.hairOilResult} alt="Hair Oil Result" />
           <div className="grid grid-cols-2 gap-2 text-[10px] md:text-sm mt-4">
             {["૧. આર્ગન ઓઈલ", "૨. વોલનટ ઓઈલ", "૩. બદામ તેલ", "૪. નારિયેળ તેલ", "૫. આમળા તેલ", "૬. ઓલિવ ઓઈલ", "૭. જોજોબા ઓઈલ"].map((t) => (
               <div key={t} className="bg-stone-50 p-2 rounded-lg border border-stone-200 truncate">{t}</div>
             ))}
           </div>
        </ProductCard>

        {/* Hair Growth Serum */}
        <ProductCard title="Hair Growth Serum :-" image={images.serum}>
           <Paragraph className="text-herbal font-bold">વાળ ખરતા અટકાશે અને નવા વાળ ઉગશે!</Paragraph>
           <Paragraph className="text-sm italic">Bellacast Hair Growth Serum: આધુનિક સાયન્સ અને આયુર્વેદનું મિશ્રણ.</Paragraph>
           <div className="space-y-4 mt-6">
             <div className="border-l-4 border-gold pl-4">
               <Paragraph className="mb-0 font-bold text-stone-800">રેડેન્સિલ (Redensyl) & પ્રોકેપિલ (Procapil)</Paragraph>
               <Paragraph className="text-xs italic">વાળના મૂળને ફરીથી સક્રિય કરે છે.</Paragraph>
             </div>
             <Paragraph className="text-sm font-semibold">નોન-ગ્રીસી ફોર્મ્યુલા - આખો દિવસ ચીકાશ વગર!</Paragraph>
           </div>
        </ProductCard>
      </Section>

      {/* Social Proof & Gifs section */}
      <Section className="bg-white rounded-3xl my-12 border border-stone-100 shadow-sm text-center">
        <Heading level={2}>પરિણામો જે બોલે છે!</Heading>
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          <img src={images.gif1} alt="animation" className="w-full rounded-xl" />
          <img src={images.result1} alt="Result" className="w-full rounded-xl shadow-md" />
          <img src={images.gif2} alt="animation" className="w-full rounded-xl" />
          <img src={images.cert1} alt="Certification" className="w-full rounded-xl border border-stone-200" />
          <img src={images.gif3} alt="animation" className="w-full rounded-xl" />
          <img src={images.cert2} alt="Certification" className="w-full rounded-xl border border-stone-200" />
          <img src={images.gif4} alt="animation" className="w-full rounded-xl" />
          <img src={images.cert3} alt="Certification" className="w-full rounded-xl border border-stone-200" />
          <img src={images.gif5} alt="animation" className="w-full rounded-xl" />
        </div>
      </Section>

      {/* Final Benefits */}
      <Section className="bg-beige/40 rounded-[3rem] border border-beige">
        <Heading level={2} className="text-center text-herbal-dark">અમારા કોર્ષ ના મુખ્ય ફાયદા:</Heading>
        <div className="max-w-2xl mx-auto space-y-6 text-lg py-8">
           {[
             "વાળ ખરતા અટકાવે: મૂળને પોષણ આપીને વાળનું ખરવાનું બંધ કરે છે.",
             "ખોડાથી મુક્તિ: સ્કેલ્પને ચોખ્ખું અને હેલ્ધી રાખે છે.",
             "કુદરતી ચમક: પાતળા વાળને ઘટ્ટ અને રેશમી બનાવે છે.",
             "કોઈ આડઅસર નહીં: ૧૦૦% નેચરલ અને કેમિકલ મુક્ત.",
             "પાતળા વાળને ફરીથી ઘટ્ટ અને મજબૂત બનાવો.",
             "હજારો ભાઈ-બહેનોએ આયુર્વેદિક કોર્ષ થી ફાયદો મેળવ્યો છે."
           ].map((text, i) => (
             <div key={i} className="flex gap-6 items-start group">
               <span className="flex-shrink-0 w-8 h-8 rounded-full bg-herbal text-white flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-110">{i + 1}</span>
               <Paragraph className="mb-0 font-medium">{text}</Paragraph>
             </div>
           ))}
        </div>
      </Section>

      {/* Certification Section */}
      <Section className="text-center">
        <Heading level={2} className="text-herbal">Our certification :-</Heading>
        <div className="max-w-md mx-auto">
          <img src={images.certification} alt="Certification" className="w-full rounded-2xl shadow-xl border-4 border-white" />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="bg-gradient-to-br from-herbal to-herbal-dark p-12 md:p-20 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <Heading level={1} className="text-white relative z-10 mb-8">"ખરતા વાળને કાયમી અલવિદા કહેવા માટે અત્યારે જ અમારો સંપર્ક કરો!"</Heading>
          <div className="inline-block bg-white text-herbal-dark px-10 py-6 rounded-3xl shadow-xl transition-all hover:scale-105 relative z-10">
            <Paragraph className="text-2xl md:text-4xl font-black mb-0 font-outfit">📞 કોલ કરો: 96871 05624</Paragraph>
          </div>
          <Paragraph className="text-white/80 mt-8 text-sm italic relative z-10">વધારે માહિતી કે ઓર્ડર માટે આજે જ અમારો સંપર્ક કરો.</Paragraph>
        </div>
      </Section>
    </main>
  );
}