import React from "react";
import { Section, Heading, ImageBox, Paragraph } from "../UI";
import { img } from "@/app/arthritis/constants";

export const Types = () => {
  return (
    <Section>
      <Heading level={1} className="text-herbal">Types of Arthritis (સંધિવાના પ્રકારો)</Heading>
      <ImageBox src={img.types} alt="Types of Arthritis" />

      <Paragraph className="text-center mb-8">
        ચોક્કસ, તમારી વેબસાઇટ માટે સંધિવાના પ્રકારો (Types of Arthritis) વિશેની ટૂંકી અને સચોટ ગુજરાતી માહિતી નીચે મુજબ છે:
      </Paragraph>

      <div className="bg-herbal text-white p-6 rounded-2xl text-center my-8 shadow-md">
        <Paragraph className="font-bold text-xl mb-0 text-white">સંધિવાના મુખ્ય પ્રકારો (Types of Arthritis)</Paragraph>
      </div>
      <Paragraph className="text-center text-stone-600 mb-10">
        સંધિવા માત્ર એક બીમારી નથી, પરંતુ તેના વિવિધ પ્રકારો છે જે શરીરના અલગ-અલગ સાંધાઓને અસર કરે છે. મુખ્યત્વે આ ત્રણ પ્રકારો સૌથી વધુ જોવા મળે છે:
      </Paragraph>

      <div className="space-y-5 mb-10">
        {[
          { 
            title: "1. ઓસ્ટિયોઆર્થરાઇટિસ (Osteoarthritis)", 
            img: img.osteo, 
            desc: "આ સૌથી સામાન્ય પ્રકાર છે. તે સાંધામાં રહેલી ગાદી (Cartilage) ઘસાઈ જવાથી થાય છે. સામાન્ય રીતે આ ઘૂંટણ, થાપા અને હાથમાં જોવા મળે છે." 
          },
          { 
            title: "2. રુમેટોઇડ આર્થરાઇટિસ (Rheumatoid Arthritis)", 
            img: img.ra, 
            desc: "આ એક ઓટોઇમ્યુન રોગ છે, જેમાં શરીરની રોગપ્રતિકારક શક્તિ ભૂલથી સાંધા પર હુમલો કરે છે. આનાથી સાંધામાં સોજો, દુખાવો અને લાંબા ગાળે સાંધા વળી જવાની સમસ્યા થઈ શકે છે." 
          },
          { 
            title: "3. ગાઉટ (Gout)", 
            img: img.gout, 
            desc: "જ્યારે શરીરમાં યુરિક એસિડનું પ્રમાણ વધી જાય, ત્યારે સાંધામાં તેના સ્ફટિકો જમા થાય છે, જેને ગાઉટ કહેવાય છે. સામાન્ય રીતે આનાથી અંગૂઠામાં અચાનક અને અસહ્ય દુખાવો થાય છે." 
          },
        ].map((type, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm overflow-hidden flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 shrink-0">
              <img src={type.img} alt={type.title} className="w-full h-48 object-cover rounded-2xl" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-stone-900 mb-3">{type.title}</h3>
              <Paragraph className="mb-0 text-stone-600">{type.desc}</Paragraph>
            </div>
          </div>
        ))}
      </div>

      <Paragraph className="text-center font-bold text-herbal bg-green-50 p-6 rounded-2xl border border-green-100">
        તમારા સંધિવાનો પ્રકાર ગમે તે હોય, આયુર્વેદિક ઉપચાર તેને મૂળમાંથી નિયંત્રિત કરવામાં મદદ કરી શકે છે.
      </Paragraph>
    </Section>
  );
};
