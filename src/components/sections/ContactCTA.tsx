import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-beige relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-herbal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="lg:col-span-3 p-6 sm:p-10 md:p-14 flex flex-col justify-center text-center sm:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  તમારા શરીરના સ્વભાવ મુજબ આયુર્વેદિક માર્ગદર્શન મેળવો.
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  જો તમે પણ સંપૂર્ણ આયુર્વેદિક રીતે વજન ઓછું કરવા માંગતા હોવ તો આજે જ અમારી આયુર્વેદિક કીટનો ઓર્ડર કરો. માત્ર 90 દિવસમાં ફેટમાંથી ફીટ બનો!
                </p>

                <ul className="space-y-4 mb-10">
                  {['કાયમી વજન ઘટાડો', 'કોઈ સાઇડ ઇફેક્ટ નથી', '100% આયુર્વેદિક પ્રોડક્ટ'].map((item, i) => (
                    <li key={i} className="flex items-center justify-center sm:justify-start text-gray-700">
                      <CheckCircle2 className="text-herbal mr-3 shrink-0" size={20} />
                      <span className="font-medium text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://api.whatsapp.com/message/JBAPTQYQ6RH6K1?autoload=1&app_absent=0"
                  target="_blank"
                  className="group relative flex w-full sm:inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 font-bold text-white bg-green-500 rounded-full overflow-hidden shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-[150%] group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <MessageCircle className="relative mr-2 sm:mr-3 shrink-0" size={20} />
                  <span className="relative text-sm sm:text-lg border-l border-white/30 pl-2 sm:pl-3 whitespace-nowrap">WhatsApp પર સંપર્ક કરો</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-herbal p-8 sm:p-10 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/1001965644.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div
                className="relative z-10 text-center"
              >
                <div className="text-5xl font-bold mb-2">90</div>
                <div className="text-gold font-medium tracking-widest uppercase mb-8">Days Challenge</div>
                <p className="text-beige/90 text-sm leading-relaxed mb-6">
                  90 દિવસનો કોર્સ પૂરો કરશો એટલે તમારું વજન તો ઓછું થશે જ, સાથે-સાથે તમારા શરીરના જુદા જુદા ભાગો પર જામેલી એક્સ્ટ્રા ચરબીને દૂર કરશે.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
