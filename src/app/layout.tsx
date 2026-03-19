import type { Metadata } from "next";
import { Anek_Gujarati } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const anekGujarati = Anek_Gujarati({
  variable: "--font-anek-gujarati",
  subsets: ["gujarati", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય.. - AAYURVED NA AANGNE",
  description: "આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" data-theme="light">
      <body
        className={`${anekGujarati.variable} font-body bg-white text-gray-800`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
