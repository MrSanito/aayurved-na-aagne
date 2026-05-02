import React from "react";
import { Star, Clock, Zap, MessageSquare } from "lucide-react";
import { Section, Heading, VideoBox, Paragraph } from "../UI";
import { arthritisResults } from "@/app/arthritis/constants";

export const SuccessStories = () => {
  return (
    <Section className="bg-white rounded-[3rem] shadow-sm border border-stone-100 my-16">
      <div className="grid lg:grid-cols-2 gap-12 md:p-12 p-6">
        {/* Text Reviews */}
        <div className="space-y-6">
          <Heading level={3} className="text-herbal-dark mt-0 mb-6 flex items-center gap-3">
            <Star className="text-amber-400 fill-amber-400" /> ગ્રાહકોના અનુભવો
          </Heading>
          <div className="grid gap-4">
            {[
              { name: "રમેશભાઈ", text: "મને છેલ્લા ૨ વર્ષથી ઘૂંટણમાં દુખાવો હતો, પણ આ ઓર્થો ઓઈલ અને કીટ વાપર્યા પછી અત્યારે હું વગર લાકડીએ ચાલી શકું છું.", rating: 5, date: "૧ મહિના પહેલા" },
              { name: "વસંતીબેન", text: "કાઈશોર ગૂગળ અને કેલ્શિયમ ટેબ્લેટથી મારા સાંધાની જકડન ઓછી થઈ ગઈ છે. ખૂબ સારો અનુભવ.", rating: 5, date: "૩ અઠવાડિયા પહેલા" },
              { name: "મુકેશભાઈ", text: "યુરિક એસિડ વધી ગયું હતું, પણ બેલાકાસ્ટની સલાહ મુજબ સારવાર લેવાથી હવે સ્ટેબલ છે.", rating: 4, date: "૫ દિવસ પહેલા" },
            ].map((rev, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-4 h-4 ${idx < rev.rating ? "text-amber-400 fill-amber-400" : "text-stone-200"}`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {rev.date}
                  </span>
                </div>
                <Paragraph className="text-stone-700 italic text-base md:text-lg mb-4">"{rev.text}"</Paragraph>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-herbal/10 flex items-center justify-center text-herbal font-bold text-xs">
                    {rev.name[0]}
                  </div>
                  <span className="font-bold text-stone-900">{rev.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Reviews */}
        <div className="space-y-6">
          <Heading level={3} className="text-herbal-dark mt-0 mb-6 flex items-center gap-3">
            <Zap className="text-herbal" /> વિડિયો પ્રતિસાદ
          </Heading>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <VideoBox src={arthritisResults.vid1} />
            <VideoBox src={arthritisResults.vid2} />
            <VideoBox src={arthritisResults.vid3} />
            <div className="bg-herbal/5 border border-herbal/10 p-4 md:p-6 rounded-3xl flex flex-col items-center justify-center text-center aspect-9/16">
              <div className="w-12 h-12 rounded-full bg-herbal/10 flex items-center justify-center text-herbal mb-4">
                <MessageSquare size={24} />
              </div>
              <Paragraph className="text-herbal-dark font-black mb-0 italic text-xs md:text-sm">તમારા સફળ પરિણામો અમારી સાથે શેર કરો!</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
