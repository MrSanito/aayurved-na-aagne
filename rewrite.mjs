import fs from 'fs';

let content = fs.readFileSync('C:\\Projects\\freelance\\aayurved\\src\\app\\arthritis\\page.tsx', 'utf-8');

// 1. Remove GlobalStyles usage and definition
content = content.replace(/const GlobalStyles = \(\) => \([\s\S]*?\n\);\n/, '');
content = content.replace(/<GlobalStyles \/>\n/, '');

// 2. Rewrite Wrap, Img, Tag, WaBtn, Divider, SectionHeading
const primitivesRegex = /\/\* ════════════════ REUSABLE PRIMITIVES ════════════════ \*\/[\s\S]*?\/\* ════════════════ PRODUCT SECTION COMPONENT ════════════════ \*\//;
const newPrimitives = `/* ════════════════ REUSABLE PRIMITIVES ════════════════ */

const Wrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={\`max-w-5xl mx-auto px-6 \${className}\`}>{children}</div>
);

const Img = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-base-200 mb-8 mt-2">
    <img src={src} alt={alt} loading="lazy" className={\`w-full object-cover \${className}\`} />
  </div>
);

const Tag = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={\`badge badge-lg badge-outline font-bold uppercase tracking-widest px-4 py-3 \${className}\`}>
    {children}
  </div>
);

const WaBtn = ({ text = "અત્યારે જ ઓર્ડર કરો", className = "", href }: { text?: string; className?: string; href?: string }) => (
  <Link
    href={href || "https://wa.me/919687105624?text=હું++આર્થરાઇટિસ+સોલ્યુશન+વિશે+જાણવા+ઈચ્છું+છું"}
    target="_blank" rel="noopener noreferrer"
    className={\`btn btn-success text-white shadow-xl shadow-success/30 hover:scale-105 transition-all outline-none border-none py-4 px-8 h-auto text-lg rounded-full \${className}\`}
  >
    <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    {text}
  </Link>
);

const Divider = () => (
  <div className="divider w-full max-w-lg mx-auto my-16 before:bg-primary/20 after:bg-primary/20">
    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center">✦</div>
  </div>
);

/* ════════════════ SECTION HEADING ════════════════ */

const SectionHeading = ({
  children, className = "", accent = false
}: { children: React.ReactNode; className?: string; accent?: boolean }) => (
  <h2 className={\`text-3xl md:text-5xl font-extrabold font-serif \${accent ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-base-content'} \${className}\`}>
    {children}
  </h2>
);

/* ════════════════ PRODUCT SECTION COMPONENT ════════════════ */
`;
content = content.replace(primitivesRegex, newPrimitives);


// 3. Rewrite ProductSection Component
const productSectionRegex = /const ProductSection = \([\s\S]*?\n\};\n/m;
const newProductSection = `const ProductSection = ({
  tag, title, subtitle, bannerImg, img1, img2, howImg,
  features, howToUse, ctaText, children,
  dark = false,
}: {
  tag: string; title: string; subtitle: string;
  bannerImg: string; img1: string; img2?: string; howImg: string;
  features: { title: string; desc: string }[];
  howToUse: React.ReactNode;
  ctaText?: string; children?: React.ReactNode;
  dark?: boolean;
}) => {
  return (
    <section className={\`py-20 \${dark ? 'bg-base-300 text-base-content' : 'bg-base-100 text-base-content'}\`}>
      <Wrap>
        <div className="mb-6 flex justify-center lg:justify-start">
          <Tag className={\`\${dark ? 'badge-primary' : 'badge-secondary'}\`}>{tag}</Tag>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-xl opacity-80 mb-12 max-w-3xl leading-relaxed">{subtitle}</p>

        <Img src={bannerImg} alt={title} />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Img src={img1} alt={\`\${tag} 1\`} />
          {img2 && <Img src={img2} alt={\`\${tag} 2\`} />}
        </div>

        {children && <div className="mb-12">{children}</div>}

        <div className="space-y-4 mb-12">
          {features.map((f, i) => (
            <div key={i} className="card bg-base-200/50 shadow-sm hover:shadow-md transition-all border border-base-content/5">
              <div className="card-body p-6 flex flex-row gap-4 items-start">
                <span className="text-2xl pt-1 opacity-70">✦</span>
                <p className="text-lg">
                  <strong className="block mb-1 text-primary">{f.title}</strong>
                  <span className="opacity-80 leading-relaxed">{f.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <Img src={howImg} alt="How to use" />

        <div className="card bg-primary/10 border-l-4 border-primary rounded-none rounded-r-2xl shadow-sm">
          <div className="card-body p-8">
            <h3 className="card-title text-2xl font-serif mb-4 text-primary">ઉપયોગ / સેવન કરવાની રીત (How to Use):</h3>
            <div className="text-lg opacity-80 leading-relaxed">
              {howToUse}
            </div>
          </div>
        </div>

        {ctaText && (
          <div className="mt-12 text-center lg:text-left">
            <WaBtn text={ctaText} />
          </div>
        )}
      </Wrap>
    </section>
  );
};
`;
content = content.replace(productSectionRegex, newProductSection);


// stripping out all style={{...}} to clean up raw CSS
content = content.replace(/ style={{[\s\S]*?}}/g, '');

// Clean up various sections to use DaisyUI standard layout constructs
content = content.replace(/className="page-root bg-\[\#FAFAF9\] min-h-screen"/g, 'className="min-h-screen bg-base-100 font-sans"');

// Hero section cleanups
content = content.replace(/className="hero-gradient leaf-bg border-b border-stone-100 py-16 md:py-24 relative overflow-hidden"/g, 'className="hero min-h-screen bg-base-200 overflow-hidden relative"');
content = content.replace(/className="flex items-center justify-center gap-3 mb-6 fade-up"/g, 'className="flex items-center justify-center gap-4 mb-8"');
content = content.replace(/className="bg-herbal\/10 text-herbal tag-glow"/g, 'className="badge-primary"');
content = content.replace(/className="text-4xl md:text-5xl font-bold mb-2 grad-text fade-up stagger-1"/g, 'className="text-5xl md:text-7xl font-extrabold font-serif mb-6 text-primary"');
content = content.replace(/className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-8 fade-up stagger-2"/g, 'className="text-sm font-bold tracking-[0.3em] uppercase opacity-60 mb-8"');
content = content.replace(/className="hero-img-wrap max-w-lg mx-auto mb-8 fade-up stagger-2"/g, 'className="w-full max-w-xl mx-auto mb-10"');
content = content.replace(/className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto fade-up stagger-3"/g, 'className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto"');

// Symptoms section
content = content.replace(/className="py-16 md:py-24 leaf-bg"/g, 'className="py-24 bg-base-100"');
content = content.replace(/className="symptom-item flex items-start gap-4 bg-white p-4 rounded-2xl border border-stone-100"/g, 'className="card flex-row items-center gap-4 bg-base-200 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform"');
content = content.replace(/className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"/g, 'className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg bg-primary/10 text-primary"');
content = content.replace(/className="text-stone-700"/g, 'className="opacity-90"');
content = content.replace(/className="text-xl font-bold text-herbal-dark mb-5"/g, 'className="text-2xl font-bold text-primary mb-6"');
content = content.replace(/className="rounded-2xl p-6 text-center"/g, 'className="card bg-primary/10 text-primary p-8 text-center text-xl font-bold border-2 border-primary/20 shadow-lg"');
content = content.replace(/className="text-lg font-bold text-herbal-dark mb-0"/g, 'className="mb-0"');

// Stats section
content = content.replace(/className="stats-gradient leaf-bg-gold py-16 md:py-24 relative overflow-hidden"/g, 'className="py-24 bg-neutral text-neutral-content relative"');
content = content.replace(/className="hero-img-wrap mb-10"/g, 'className="mb-12"');
content = content.replace(/className="font-semibold text-stone-700 bg-white p-5 rounded-2xl mb-8"/g, 'className="font-semibold bg-base-100 text-base-content p-6 rounded-2xl mb-10 border-l-4 border-primary text-lg"');
content = content.replace(/className="stat-card flex items-start gap-4 p-5"/g, 'className="card flex-row items-center gap-5 p-6 bg-base-100 text-base-content rounded-2xl shadow-md border border-base-content/10"');
content = content.replace(/className="cta-banner text-white p-8 rounded-3xl text-center"/g, 'className="card bg-success text-success-content p-10 rounded-3xl text-center shadow-xl"');

// Types of Arthritis
content = content.replace(/className="bg-white py-16 md:py-24"/g, 'className="py-24 bg-base-200"');
content = content.replace(/className="type-card bg-stone-50 p-5 rounded-2xl"/g, 'className="card bg-base-100 p-8 rounded-3xl shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow"');
content = content.replace(/className="text-herbal-dark block mb-2"/g, 'className="text-primary text-xl block mb-3 font-bold"');
content = content.replace(/<strong className="text-herbal-dark block mb-2">/g, '<strong className="text-primary text-xl block mb-3 font-bold">');

// Osteoarthritis section (which uses custom styling)
content = content.replace(/className="py-16 md:py-24 leaf-bg"/g, 'className="py-24 bg-base-100"');
content = content.replace(/className="flex items-start gap-4 bg-white p-5 rounded-2xl"/g, 'className="card flex flex-row items-start gap-5 bg-base-200 p-6 rounded-2xl shadow-sm border border-base-content/5"');
content = content.replace(/className="p-6 rounded-2xl mb-8"/g, 'className="card bg-primary/10 border-l-4 border-primary p-8 rounded-r-2xl mb-10"');
content = content.replace(/className="text-lg font-bold text-herbal mb-4"/g, 'className="text-2xl font-bold text-primary mb-6"');

// Rheumatoid Arthritis
content = content.replace(/className="bg-herbal text-white tag-glow"/g, 'className="badge-primary"');
content = content.replace(/className="space-y-4 mb-10 p-6 rounded-2xl"/g, 'className="space-y-4 mb-12 p-8 rounded-3xl bg-base-200 shadow-md border border-base-content/5"');
content = content.replace(/className="bg-white p-6 rounded-2xl"/g, 'className="card bg-base-100 p-8 rounded-3xl shadow-lg border border-base-content/10"');
content = content.replace(/className="p-6 rounded-2xl flex flex-col justify-center"/g, 'className="card bg-primary/10 border-l-4 border-primary p-8 rounded-none rounded-r-3xl flex flex-col justify-center"');

// Gout
content = content.replace(/className="space-y-4 mb-8 p-6 rounded-2xl"/g, 'className="space-y-4 mb-10 p-8 rounded-3xl bg-base-100 shadow-lg border border-base-content/5"');

// Causes
content = content.replace(/className="dark-section-bg py-16 md:py-24"/g, 'className="py-24 bg-base-300 text-base-content"');
content = content.replace(/className="p-6 rounded-2xl text-center mb-10"/g, 'className="card bg-base-100 p-8 rounded-3xl text-center mb-12 shadow-xl"');
content = content.replace(/className="text-xl md:text-2xl font-bold text-white mb-0 leading-relaxed"/g, 'className="text-2xl md:text-3xl font-bold text-primary mb-0 leading-relaxed"');
content = content.replace(/className="flex items-start gap-4 p-5 rounded-2xl feature-card glass-card-dark"/g, 'className="card flex-row items-center gap-5 p-6 rounded-2xl shadow-md bg-base-200 border border-base-content/10 hover:-translate-y-1 transition-all"');
content = content.replace(/className="text-lg font-bold text-white text-center mb-6"/g, 'className="text-2xl font-bold text-center mb-8"');
content = content.replace(/className="bg-white text-stone-900 p-8 rounded-3xl text-center"/g, 'className="card bg-base-100 text-base-content p-10 rounded-3xl text-center shadow-2xl mt-12"');

// 5-Step Solution
content = content.replace(/className="py-16 md:py-24 leaf-bg"/g, 'className="py-24 bg-base-100"');
content = content.replace(/className="text-2xl md:text-3xl font-bold text-herbal-dark text-center mb-4 leading-tight"/g, 'className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6 leading-tight"');
content = content.replace(/grad-text-gold/g, 'text-secondary');
content = content.replace(/className="text-lg text-center font-semibold text-stone-700 p-6 rounded-2xl mb-10"/g, 'className="text-xl text-center font-semibold bg-base-200 p-8 rounded-3xl mb-12 shadow-sm"');
content = content.replace(/className="feature-card flex items-start gap-5 p-5 rounded-2xl"/g, 'className="card flex-row items-start gap-6 p-6 rounded-2xl bg-base-100 shadow-lg border border-base-content/10 hover:-translate-y-1 transition-transform"');
content = content.replace(/className="step-badge text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0"/g, 'className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl bg-primary text-primary-content shrink-0 shadow-lg"');
content = content.replace(/className="p-6 rounded-2xl text-center italic text-stone-700 mb-10"/g, 'className="p-8 rounded-3xl text-center italic text-xl mb-12 bg-primary/10 text-primary border-2 border-primary/20"');

// Products Overview
content = content.replace(/className="products-gradient leaf-bg-gold py-16 md:py-24 relative overflow-hidden"/g, 'className="py-24 bg-base-200 relative overflow-hidden"');
content = content.replace(/className="text-xl font-bold uppercase tracking-wider mb-5"/g, 'className="text-2xl font-bold uppercase tracking-wider mb-6 text-secondary"');
content = content.replace(/className="feature-card flex items-start gap-4 p-5 rounded-2xl bg-white"/g, 'className="card flex-row items-center gap-5 p-6 rounded-2xl bg-base-100 shadow-md border border-base-content/5"');
content = content.replace(/className="bg-white p-7 rounded-3xl"/g, 'className="card bg-base-100 p-10 rounded-[2.5rem] shadow-xl"');
content = content.replace(/className="text-herbal font-bold text-center p-4 rounded-xl"/g, 'className="text-primary font-bold text-center p-6 rounded-2xl bg-primary/10 mt-4 text-lg"');
content = content.replace(/className="qr-wrap mb-6"/g, 'className="p-6 bg-base-200 rounded-3xl mb-8 shadow-inner border border-base-300"');
content = content.replace(/className="bg-white p-7 rounded-3xl flex flex-col items-center justify-center"/g, 'className="card bg-base-100 p-10 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center border-2 border-secondary/30"');

// Generic replacements for product sections (cleanups)
content = content.replace(/className="cta-banner text-white p-7 rounded-2xl text-center mb-10"/g, 'className="card bg-success text-success-content p-8 rounded-3xl text-center mb-12 shadow-xl"');
content = content.replace(/className="p-5 rounded-2xl text-center font-bold mb-8 text-stone-900"/g, 'className="card bg-secondary text-secondary-content p-6 rounded-2xl text-center font-bold text-2xl mb-10 shadow-lg"');
content = content.replace(/className="feature-card p-4 rounded-2xl text-center font-semibold text-white text-sm glass-card-dark"/g, 'className="card p-6 rounded-2xl text-center font-semibold bg-base-300 shadow-md text-base-content text-base"');

// Fix Img wrap remnants
content = content.replace(/className="hero-img-wrap mb-8"/g, 'className="mb-10"');
content = content.replace(/className="hero-img-wrap my-8"/g, 'className="mb-10 mt-10"');

// Decorative items
content = content.replace(/className="deco-circle-lg"/g, 'className="hidden"');

// Footer
content = content.replace(/className="py-20 flex justify-center"/g, 'className="py-24 flex justify-center bg-base-200"');
content = content.replace(/className="footer-gif-frame max-w-\[280px\]"/g, 'className="w-full max-w-[280px] rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform"');

fs.writeFileSync('C:\\Projects\\freelance\\aayurved\\src\\app\\arthritis\\page.tsx', content);

console.log("Rewrite completed.");
