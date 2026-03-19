// No extra imports needed — pure React

// ─── Proxy helper — bypasses Blogger's hotlink/CORS protection ──────────────
// wsrv.nl is a free image proxy that fetches the image server-side and serves it
const proxy = (url) => `https://wsrv.nl/?url=${encodeURIComponent(url)}`;

const RAW = {
  hero:         "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEqgh9Anh2URuoXakN9z1V80o8l7iJjr3sO5ZFiOP6cGphfGuDGe3M2RR-BHC5mv8ll4fh9HYedRzFDJtmhvea6UwabF2ruipdAigxT9eJ0d373ilaJSs78rnhn5o6qkgWtk_1y5C2NphyphenhyphenRruhGRSdIhqb3OcCZupQbUM76f39HvZOACeVLXTFmwB7cPCO/s1920/1001955126.jpg",
  weightChart:  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCPGC9Xv2nkULysXD8uO5n5OmwVCGFgcXCWTBkEa1mbM-Qv9VlSIMJU1xacwi2ZIwBqhUA2MibwvId6xsAOhB7VyCc6SaAzQUog8ogzhpGwtpYpFB3y3NeKROQGGHjW3qL0bcvIavWM4XQ29vIBh5g_cvY0mlOcbjqlVRRZQXHNsOo3TGFP1s2SXBBffaV/s921/1001954278.jpg",
  diseases:     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl-B_PYSTsKRIfWpoTIRt6itVt2S0OGF7libODUBaw6edSj50jGXDCwSVBWbigb-8VIVttrgCPM1JSiZPimDsGGqbHcJLTv8F30J0Y3HF-l1xYMF_xksNWaV8XVS-oFBPCNES4pstrl8jYo6uNHFIMMCnmEFN9xMvfOCCaKSS4QZQRzE8zQQJepiMxZk6d/s1920/1001955265.jpg",
  remedies:     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiQZHYcLgmAH6zpCCye3_pCqZvQatETbh49jKku0SaYuI3PsV67Gc2_02D-g9bMHL6f2z3ld8NBfgz8x2WnNFoSuTcP-3x4hOXmvB8sEANVO8U-GlIqYqfZx-ZyIvBwJHPr3uGn6J7tFDQ9DhEpEId5-D0aIe3gekXrwVpPd6koTjqGcsBn9Fd8OkGghV/s1920/1001955447.jpg",
  whatsappGif1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRykECrvQ4CwqDsD25uUhGDuh3W1yVZCjEDNF2tugSHHqRO-4byaXunq2rpfzu9lxdrzVXzBbgu8jWNtRJUTro3ojEBmXq86h3mQm8D_RAPOyOFJjvukRzfs8Rl0z-yKMcm4FBAIH6zm-0JDswjWk4cy0T_0O1ijByHxEzMTGhhXZUTQwq4D7prDCXTHs0/s1600/1001973507.gif",
  sideEffects:  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7Kk4l92LDwR0xdmahDne2QKD0iozf4VGDoRn_Zz5NVHQLDUjGXgba2aCa41UygIBL7qH57X5KT2w5NVLqpFxOBss7xTZGQdVLmaQkGdJYgvoPMH9aZs3FnBGSC7dVc0fWmAXQ1Didwo7Vu97EGwaJmWgjoW67DqZdtlL06iambU1PtDVJf1O5XdKy28L4/s1920/1001963450.jpg",
  digestive:    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKjnnw6WpUoCMqcetCpG4wRgsuVICrmem0Hs59e3Ip0zSabb4rVO5RlywjPcwtr_446FtdNHgDOrOr-uAnkqIpogKzcmp0YOREL-izZ2g9l-3ndcGv6epUObyg7bvSm_QTC6jBFTszo4PS2mdto0VYQoAU6UyDKc3eMRK_xGdqYVOI3OCvhAO9C483EVzs/s1920/1001965149.jpg",
  fastFood:     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4wXyoqqqWPOpp0fF04PBiUPRKKKqeTSs_TOUExclYsXF9DJ2HEw7T6cRNtuHX73lisqkwkCS-gF86DxJ7x2GUmt0gQTWMpDgavEgjJ1KrOgIsbHJ7DpfQKAoUjikoC9-WqNXbpZH774Rfq09kXyC8pCfSud4rylac5PNr_EogysPMlMb_tT92tt2FhE8V/s1920/1001965337.jpg",
  whatsappGif2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLh3FGiPeIIo18QfuIpxlJlOSGDMeW1V22FDXqxV8ZcBRogOMGwNWdAVM0lpZdmPD5WdVLJ2_RtxR3i-duzAcOGA0dxK2VVZj5_xoLe6qDPmL6jtgLG4UaAjbgVSEnsknc7KbJiDFtBU2zWDtOWCS31BUtTVTs-8veCOwxRsjtnjEiKCibvbKxybUGdme7/s1600/1001972345.gif",
  weightGain:   "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMybLbDBg7rmOMa8QX_W6lbW8Ziydhcfw0XkL20auQd5riX9Ls2rhY54bIpEnacl_FWnzgfMdP93kJDX2Ao6wFstx28YH0eORU3Q6V_PWZIdXfzo7a2txJOfxIcUuRmLv2fpzHgYpveRoeitkcbtJiMi_EZHJIC34v9i73Dn_eHBbEvXXb7F89re5_7V-J/s1920/1001965431.jpg",
  orderBtn:     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhak1c7BeO5HWgYm-R1zhWBFd1n39XmvjoRdTDTHGNMVPsoi6-TfPGyeOQKgnjvv09h1X208OWJjMTg5WX4UC6qRcV7q0LqooQWX0gHKsjcm3bjG5AgN_iegHnj3yrMm8NJ6ab-vfGuRAziH5zOd-jgJzYfsbgrMBUs7fIWVDCCvAgmVkBXro4h_S5nr4C_/s1920/1001965394.jpg",
  review1:      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJIZqciY65i4fy9Q1rSWM2fdFgNV4lKbOujMX4JKsZWUPFGYXf-djNtRzK_ijGKJXdMdODI3hxLKsTFc5RdibygDg4U3s7TFHc3PwaOBh1ZUJ7NcPFG793EGsW2hoYPoAnGkjX9UsUBQ1rMjjKIq3Yf2OXR_6CyqUG3Beq6I81f4BLh23X3Pc0c7GFPW3N/s1920/1001973082.jpg",
  review2:      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHkTUjiBjNbnOGFoawlrTCkuw9Sv5fg-ZgcSL-iANdi0JMjgwkUW93KIzdq900Yz3Ek14VRnY-HNBr4fYreqY4al5rMLUJELp_aC_dfz4-dKPJ2teMoYZ2NcqHnjOTsHYE3qN5xxfDn-5LSEeBUg4j5cFKf6d-hC4QAwmT0GSMNcU_067eC3dY3bzjj3wj/s1920/1001973235.jpg",
  whatsappGif3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNHxdwF5-552-essPOcfW2QLNZEeV85X-dWZNrc4ZbgcvtwnU3kr_FOdJWLjSwMiAfx7A08QjYYpzYdU5w04FRZ7Hq_Xr4iGzzV-3CE8DaZwTjUyR0dJSJ0PpYc7tsT1LFBDadXPCxwCk_K_F_-z94lDy8BZbzI4A6W5pSRAW0MYeZwQ4pJQVO01WVuzb2/s1600/1001972345.gif",
};

// Apply proxy to every image
const IMAGES = Object.fromEntries(
  Object.entries(RAW).map(([k, v]) => [k, proxy(v)])
);

const WHATSAPP_LINK = "https://chat.whatsapp.com/HmzbYQBxadJ3olIPYhi70Y";
const ORDER_LINK = "https://wa.me/message/JBAPTQYQ6RH6K1";

// ─── Reusable image component ────────────────────────────────────────────────
function BlogImage({ src, alt = "", linkHref, style = {} }) {
  const img = (
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
        margin: "16px auto",
        borderRadius: 4,
        ...style,
      }}
    />
  );
  if (linkHref) {
    return (
      <a href={linkHref} target="_blank" rel="noreferrer">
        {img}
      </a>
    );
  }
  return img;
}

// ─── Main Blog Component ─────────────────────────────────────────────────────
export default function AayurvedBlog() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans Gujarati', 'Hind Vadodara', sans-serif",
        background: "#fff",
        color: "#222",
        maxWidth: 680,
        margin: "0 auto",
        padding: "0 16px 48px",
        lineHeight: 1.8,
        fontSize: 16,
      }}
    >
      {/* ── Google Font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;700&display=swap');
        a { color: #1a73e8; }
        h1 { font-size: 1.5rem; font-weight: 700; margin: 24px 0 12px; }
        h2 { font-size: 1.2rem; font-weight: 700; margin: 20px 0 10px; }
        p  { margin: 10px 0; }
        ol, ul { padding-left: 24px; margin: 10px 0; }
        li { margin: 6px 0; }
      `}</style>

   

      {/* ── Post Title ── */}
      <h2 style={{ fontSize: "1.35rem", color: "#111", marginBottom: 6 }}>
        વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય..
      </h2>
     

      {/* ── Intro ── */}
      <p>
        આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે
        છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને
        કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…
      </p>

      {/* Hero image */}
      <BlogImage src={IMAGES.hero} alt="વજન ઘટાડવો" linkHref={IMAGES.hero} />

      {/* ── Section 1 ── */}
      <h2>ઊંચાઈ પ્રમાણે વજન કેટલું હોવું જોઈએ ?</h2>
      <BlogImage src={IMAGES.weightChart} alt="ઊંચાઈ પ્રમાણે વજન" linkHref={IMAGES.weightChart} />

      <h2>
        - જો તમારું વજન તમારી ઊંચાઈ થી થોડું પણ વધારે છે તો તમે ઘણી ગંભીર બીમારીનો ભોગ બની
        શકો છો જેવી કે….
      </h2>
      <BlogImage src={IMAGES.diseases} alt="ગંભીર બીમારીઓ" linkHref={IMAGES.diseases} />

      <p>
        - પોતાનું વજન શા માટે ઘટાડવું જરૂરી છે. તે વાત તમને સમજાઈ ગઈ હશે..સાચું ને… ??!
      </p>

      {/* ── Section 2 ── */}
      <h2>• વજન ઘટાડવા માટે ના ઉપાયો ?</h2>
      <p>અત્યારે વજન ઓછું કરવા માટે લોકો ઘણાં પ્રયત્નો કરતા હોય છે જેમ કે..</p>
      <BlogImage src={IMAGES.remedies} alt="ઉપાયો" linkHref={IMAGES.remedies} />

      <p>
        1. GYM – 2. ડાયેટ – 3. YOGA – 4. એક સમય જમવાનું બંધુ કરી દેય તેમજ કેમિકલ યુક્ત કે
        સ્ટીરોઇડ વાળી દવાઓ પણ લેય છે.
      </p>
      <p>
        – પરંતુ તેઓ વજન ઓછું કરવામાં નિષ્ફળ જાય છે અથવા વજન ઓછું તો કરી લે છે પણ બંધ કર્યા
        પછી તેમનું વજન ફરીથી વધી જાય છે કારણ કે તેઓ વજન ઓછું કરવા માટે સાચો રસ્તો નથી
        આપનાવતા…
      </p>

 
      {/* ── Section 3 ── */}
      <h1>• વજન ઘટાડવા માટેનો સાચો રસ્તો ક્યો છે ??</h1>
      <p>– આપણું વજન ઘટાડવાના મુખ્ય 2 રસ્તાઓ હોય છે.</p>
      <ol>
        <li>
          માત્ર ચરબી ઓગાળીને વજન ઘટાડવો એટલે કે કામચલાઉ સોલ્યુશન ( GYM – ડાયેટ – YOGA –
          કસરત – કેમિકલ યુક્ત દવાઓ – સર્જરી વગેરે ..જેમાં માત્ર ચરબી દૂર થાય..)
        </li>
        <li>
          આયુર્વેદ મુજબ વજન વધવાના મુખ્ય કારણ નું સોલ્યુશન કરીને વજન ઘટાડવો એટલે કાયમી
          સૉલ્યુશન..
        </li>
      </ol>

      <h2>• તમે ક્યો રસ્તો અપનાવશો કાયમી કે કામચલાઉ ?</h2>
      <p>
        – મોટાં ભાગના લોકો ઝડપથી વજન ઘટાડવા માટે કામચલાઉ રસ્તાઓ આપનાવે છે જેમ કે GYM ,
        ડાયેટ , YOGA કે પછી સ્ટીરોઇડ વાળી દવાઓ અથવા ઓપરેશન કરાવતા હોય છે.
      </p>
      <p>
        – પરંતુ તેઓ જેટલા દિવસ નિયમિત ઉપયોગ કરે ત્યાં સુધી જ શરીરમાં ફરક દેખાય અથવા વજન ઓછું
        થાય છે
      </p>
      <p>
        – જેવું બંધ કરી દે એટલે તેમનું વજન ફરીથી વધવા લાગે છે. અને સાથે સાથે બીજી પણ ઘણી
        બધી તકલીફો થાય છે જેમકે…
      </p>
      <ol>
        <li>કમજોરી આવવ</li>
        <li>ચક્કર આવવા</li>
        <li>ચામડી લુઝ પડવી વગેરે..</li>
      </ol>

      <BlogImage src={IMAGES.sideEffects} alt="સાઇડ ઈફેક્ટ" linkHref={IMAGES.sideEffects} />

      <p>
        પરંતુ જો તમે કાયમી સોલ્યુશન તરફ જવા માંગતા હોવ તો વજન વધવા પાછળ નું મુખ્ય કારણ
        જાણવું જરૂરી છે ..
      </p>

      {/* ── Section 4 ── */}
      <h1>• વજન વધવાનું મુખ્ય કારણ કયું છે ?</h1>
      <p>
        – વજન વધવાનું મુખ્ય કારણ વ્યક્તિની ડાયજેસ્ટીવ સિસ્ટમ એટલે પચન સાયકલ નિયમિત ન હોય
        જેથી ખાધેલા ખોરાકનું પાચન ન થાય અને પાચન ન થયેલા ખોરાકનું ચરબીમાં રૂપાંતર થતું રહે
        અને તે ચરબી વ્યક્તિના શરીરમાં અલગ અલગ ભાગમાં જમાં થતી રહે છે. જેથી આપણું વજન સતત
        વધતું રહે…
      </p>

      <BlogImage src={IMAGES.digestive} alt="ડાયજેસ્ટીવ સિસ્ટમ" linkHref={IMAGES.digestive} />

      <p>
        – આપણે જે ખોરાક ખાઈએ તેમાંથી ઉપર મુજબ 7 અલગ અલગ તત્વો બને છે.. જે વ્યક્તિની પાચન
        સાયકલ અનીયમીત હોય તેને જમેલા ખોરાકનું સીધું ચરબીમાં રૂપાંતર થઈ જાય અને તે ચરબી ના
        કારણે તેમનો વજન વધતો રહે છે..
      </p>
      <p>
        – અને તમારા ફેમિલી કે મિત્ર સર્કલમાં અમુક લોકો તમારાથી બે ગણુ કે એનાથી પણ વધારે
        જમતા હોય , બેઠાડું જીવન પણ જીવતા હોય અને બહારનું ફાસ્ટ ફૂડ પણ ખાતા હોય છતાં તેનું
        વજન વધતું નથી…
      </p>

      <BlogImage src={IMAGES.fastFood} alt="ફાસ્ટ ફૂડ" linkHref={IMAGES.fastFood} />

      <p>
        જો માત્ર બેઠાડું જીવન કે બહારનું ફાસ્ટ ફૂડ ખાવાથી વજન વધતું હોય તો દુનિયમાં રહેલા
        દરેક લોકો નો વજન વધવો જોઈએ ..?? પણ આવું થતું નથી સાચું ને ??
      </p>
      <p>
        જેમનું વજન નથી વધતું તે વ્યક્તિ નું પાચન તંત્ર ( ડાયજેસ્ટીવ સિસ્ટમ ) નિયમિત છે
        જેથી એ વ્યક્તિ જે કંઈ પણ જમે છે એ વસ્તુનું તેને પાચન થઈ જાય જેના કારણે તેનું વજન
        વધતું નથી..
      </p>
      <p>
        અને અત્યારે તમારું પાચનતંત્ર | પાચન સાયકલ નિયમિત નથી જેથી તમે જે કંઈ પણ જમો છો એ
        ખોરાક પાચન થવાના બદલે ચરબીમાં રૂપાંતર થતું રહે છે અને એ ચરબી તમારા શરીરના જુદા જુદા
        ભાગમાં જમાં થતી રહે છે . જેના કારણે તમારું વજન સતત વધતું રહે છે …
      </p>
      <p>
        જૉ તમે તમારું વજન કાયમી માટે ઘટાડવા માંગતા હોવ તો તમારે સૌથી પહેલા તમારા ડાયજેસ્ટીવ
        સિસ્ટમ ( પાચન સાયક ) ને પ્રોપર કરવી જ પડશે જો તમે GYM, ડાયેટ, કસરત, કે કેમિકલ યુક્ત
        દવાઓ થી વજન ઘટાડશો તો એ ફરીથી પાછું વધી જ જશે…
      </p>

 
      {/* ── Section 5 ── */}
      <h2>• વજન ઘટાડવા છતાં કેમ ફરીથી વધી જાય છે ??</h2>
      <p>
        માર્કેટમાં મળતી 90 થી 95 ટકા દવાઓ કે ટ્રીટમેન્ટ માત્ર ને માત્ર જૂની ચરબી ઓગાળવાનું
        કાર્ય કરે છે નવી ચરબી બને છે એના પર કોઈ પણ પ્રકારનું કાર્ય કરતી નથી એટલે કે
        ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ પર કાર્ય કરતી નથી, જેથી માર્કેટમાં મળતી દવાઓ કે
        ટ્રીટમેન્ટ લેવાથી તમારું વજન તો ઘટી જાય છે. પણ જેવી એ દવાઓ કે ટ્રીટમેન્ટ બંધ કરો
        એટલે તમારું વજન ફરીથી વધવા લાગે છે…
      </p>

      <BlogImage src={IMAGES.weightGain} alt="ફરીથી વધી જાય" linkHref={IMAGES.weightGain} />

      <p>
        જો તમારે વજન ઓછું કરવું જ હોય તો કાયમી માટે ઓછું કરવું ( પરમેનેન્ટ ) જોઈએ કારણ કે
        કામ ચલાઉ સોલ્યુશન અપનાવશો તો ફરીથી વજન વધી જશે જેથી તમારો સમય અને પૈસા બન્ને
        બગડશે…. આ વાત વિચારજો ખરા….
      </p>

      {/* ── Section 6 ── */}
      <h1>• કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટે શું કરવું ?</h1>
      <p>
        કાયમ માટે (પરમેનેન્ટ ) વજન ઘટાડવા માટેની અમારી આયુર્વેદિક કીટ આવશે , જે મેટાબોલિઝ્મ
        સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ ( પાચન તંત્ર ) પર કાર્ય કરે છે. અને જેનો 90 દિવસનો
        કોર્સ પૂરો કરશો એટલે તમારું વજન તો ઓછું થશે જ, સાથે – સાથે તમારા શરીરના જુદા જુદા
        ભાગો જેવાકે ફાંદ, હિપ્સ, થાઇસ , છાતી વગેરે પર જામેલી એક્સ્ટ્રા ચરબીને દૂર કરશે ,
        અને આ કીટની કોઈ પણ પ્રકારની સાઇડ ઈફેક્ટ નથી
      </p>

      <h2>• અમારી આયુર્વેદિક કીટ કઈ રીતે કાર્ય કરશે ?</h2>
      <p>
        સૌથી પહેલા તમારી મેટાબોલિઝ્મ સિસ્ટમ અને ડાયજેસ્ટીવ સિસ્ટમ ને નિયમિત કરશે જેથી
        તમારું શરીર નકામી અને વધારાની ચરબી નહિ બનાવે….
      </p>
      <p>
        – જેથી તમારું વજન વધતું અટકી જશે અને જો તમે નીયમીત 90 દિવસ અમારી આ કીટ ઉપયોગ કરો
        છો તો તમારું પાચન તંત્રને એકદમ નિયમિત થઈ જશે જેથી તમારું વજન ઓછું થયા પછી ફરીથી
        વધવાની સંભાવના રહેતી નથી..
      </p>
      <p>
        આયુર્વેદિક રીતે શરીરમાં જમા થયેલી નકામી ચરબીને ઓગાળીને દૂર કરશે જેથી ફાંદ, થાઇસ,
        હિપ્સ અને છાતી પર જમા થયેલી વધારાની ચરબી પણ દૂર થશે.
      </p>
      <p>
        ઓગળેલી ચરબીને મળ અને મૂત્ર સ્વરૂપે શરીરમાંથી બહાર કાઢશે અને તમારું પેટ સાફ કરશે..
      </p>

      
      
       
 
    </div>
  );
}