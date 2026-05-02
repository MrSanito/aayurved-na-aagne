"use client";

import React from "react";
import { Section, Heading, Paragraph, ImageBox, WhatsAppButton } from "../UI";
import { images } from "../../../app/haircare/constants";

export const Causes = () => (
  <Section>
    <Heading>વાળ ખરવાના મુખ્ય કારણો</Heading>
    <div className="space-y-6">
      <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-herbal">
        <Paragraph className="font-bold mb-2">૧. પોષણની ઉણપ (Nutritional Deficiency)</Paragraph>
        <Paragraph>શરીરમાં પ્રોટીન, આયર્ન, ઝીંક અને વિટામિન્સની ઉણપથી વાળના મૂળ નબળા પડે છે.</Paragraph>
      </div>
      <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-herbal">
        <Paragraph className="font-bold mb-2">૨. હોર્મોનલ અસંતુલન (Hormonal Imbalance)</Paragraph>
        <Paragraph>PCOS અથવા થાઈરોઈડ જેવી સમસ્યાઓ વાળ ખરવા માટે જવાબદાર હોઈ શકે છે.</Paragraph>
      </div>
      <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-herbal">
        <Paragraph className="font-bold mb-2">૩. માનસિક તણાવ (Stress)</Paragraph>
        <Paragraph>વધુ પડતો તણાવ વાળના વિકાસના ચક્રને અસર કરે છે.</Paragraph>
      </div>
    </div>
    <ImageBox src={images.hairfall2} alt="Hair Fall Causes" />
    <WhatsAppButton text="ફ્રી કન્સલ્ટેશન માટે ક્લિક કરો" message="I have hair fall issues, please guide me" />
  </Section>
);
