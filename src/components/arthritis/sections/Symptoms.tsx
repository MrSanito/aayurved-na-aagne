import React from "react";
import { Section, Heading, InfoBox, Paragraph } from "../UI";

export const Symptoms = () => {
  return (
    <Section className="bg-white rounded-3xl mt-12 shadow-sm border border-stone-100">
      <Heading level={2} className="text-center text-herbal mb-8">આર્થરાઇટિસના મુખ્ય લક્ષણો</Heading>

      <ul className="space-y-3 mb-10">
        {[
          "1 * સાંધાનો દુખાવો: હલનચલન કરતી વખતે અથવા આરામ કરતી વખતે પણ સાંધામાં સતત દુખાવો રહેવો.",
          "2 * જકડાઈ જવું (Stiffness): ખાસ કરીને સવારના સમયે સાંધા જકડાઈ જાય અને તેને હલાવવામાં મુશ્કેલી પડે.",
          "3 * સોજો: સાંધાની આસપાસ લાલાશ દેખાવી અને સોજો આવવો.",
          "4 * હલનચલનમાં મર્યાદા: સાંધા પૂરી રીતે વળી ન શકવા અથવા ચાલવા-ફરવામાં તકલીફ થવી.",
          "5 * અવાજ આવવો: સાંધા હલાવતી વખતે કટ-કટ જેવો અવાજ આવવો.",
        ].map((t, i) => (
          <li key={i} className="flex items-center gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100 transition-transform hover:translate-y-[-2px] shadow-sm">
            <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-herbal bg-herbal/10">✓</span>
            <span className="text-stone-700">{t}</span>
          </li>
        ))}
      </ul>

      <Heading level={3} className="text-herbal-dark mt-6">તેના દ્વારા થતી તકલીફો</Heading>
      <ul className="space-y-3 mb-10 bg-stone-50 p-6 rounded-2xl border border-stone-100">
        {[
          "6 * રોજિંદા કાર્યોમાં મુશ્કેલી: દાદર ચડવા, નીચે બેસવા કે વજન ઊંચકવામાં ખૂબ જ તકલીફ પડે છે.",
          "7 * શારીરિક દેખાવમાં ફેરફાર: લાંબા ગાળે આંગળીઓ કે ઘૂંટણનો આકાર બદલાઈ શકે છે (વળી જવા).",
          "8 * વધુ પડતો થાક: શરીરમાં સતત સોજો રહેવાને કારણે જલ્દી થાક લાગે છે.",
          "9 * ઊંઘમાં ખલેલ: રાત્રે સાંધાના દુખાવાને કારણે પૂરતી ઊંઘ આવતી નથી.",
          "10 * માનસિક તાણ: લાંબા સમયની પીડાને કારણે વ્યક્તિ માનસિક રીતે નબળી પડી શકે છે.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 py-2 text-stone-700">
            <span className="shrink-0 mt-1">⚠️</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <InfoBox type="green">
        <Paragraph className="font-bold text-herbal text-xl mb-2">🌿 શું તમારે આર્થરાઇટિસ (સાંધાના દુખાવા) માટે કોઈ અસરકારક આયુર્વેદિક જડીબુટ્ટીઓ કે તેલ વિશે જાણવું છે?</Paragraph>
      </InfoBox>
    </Section>
  );
};
