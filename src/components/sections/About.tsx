export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border-[12px] border-white">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
            style={{ backgroundImage: 'url("/assets/1001965644.jpg")' }}
          ></div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-10">
            <h4 className="text-white font-outfit font-black text-2xl tracking-tight leading-none">
              REAL RESULTS <br/><span className="text-gold">GUARANTEED</span>
            </h4>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-herbal font-outfit font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Root Cause Analysis
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight font-heading">
              વજન વધવાનું <span className="text-stone-400">મુખ્ય કારણ</span> કયું છે?
            </h2>
          </div>
          
          <div className="space-y-8 text-stone-600 text-lg md:text-xl leading-relaxed font-medium transition-all group">
            <p>
              વજન વધવાનું મુખ્ય કારણ વ્યક્તિની ડાયજેસ્ટીવ સિસ્ટમ એટલે પાચન સાયકલ નિયમિત ન હોય જેથી ખાધેલા ખોરાકનું પાચન ન થાય અને પાચન ન થયેલા ખોરાકનું ચરબીમાં રૂપાંતર થતું રહે છે.
            </p>
            <p>
              અને અત્યારે તમારું પાચનતંત્ર નિયમિત નથી જેથી તમે જે કંઈ પણ જમો છો એ ખોરાક પાચન થવાના બદલે ચરબીમાં રૂપાંતર થતું રહે છે અને એ ચરબી તમારા શરીરના જુદા જુદા ભાગમાં જમાં થતી રહે છે.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 mt-10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-herbal"></div>
              <p className="font-bold text-herbal leading-relaxed flex items-center gap-4">
                <span className="text-gold font-black text-4xl opacity-20">"</span>
                જો તમારે વજન ઓછું કરવું જ હોય તો કાયમી માટે ઓછું કરવું (પરમેનેન્ટ) જોઈએ કારણ કે કામ ચલાઉ સોલ્યુશન અપનાવશો તો ફરીથી વજન વધી જશે.
                <span className="text-gold font-black text-4xl opacity-20 self-end">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
