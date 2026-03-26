import type { Metadata } from "next";
import { Anek_Gujarati, Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";

const anekGujarati = Anek_Gujarati({
  variable: "--font-anek-gujarati",
  subsets: ["gujarati", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય.. - AAYURVED NA AANGNE",
  description: "આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. આ ચરબી શરીરને બેડોળ બનાવે છે અને અનેક રોગને આમંત્રણ આપે છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે માટે સંપૂર્ણ વાંચજો…",
  keywords: ["આયુર્વેદ", "વજન ઘટાડવા", "ચરબી દૂર કરવા", "સ્વાસ્થ્ય", "આયુર્વેદિક ઉપચાર", "વજન ઘટાડો", "વજન સંતુલિત કરો", "ચરબી બર્ન કરો", "Ayurveda", "Weight Loss", "Natural Weight Loss", "Fat Burn", "Healthy Living", "Aayurved Na Aangne"],
  authors: [{ name: "Aayurved Na Aangne" }],
  creator: "Aayurved Na Aangne",
  publisher: "Aayurved Na Aangne",
  metadataBase: new URL("https://www.aayurvednaangne.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય.. - AAYURVED NA AANGNE",
    description: "આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે...",
    url: "https://www.aayurvednaangne.in",
    siteName: "Aayurved Na Aangne",
    images: [
      {
        url: "/assets/result_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Aayurved Na Aangne - Natural Weight Loss",
      },
    ],
    locale: "gu_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય.. - AAYURVED NA AANGNE",
    description: "આપણું વજન વધવાનું કારણ શરીરમાં જમા થતી વધારાની ચરબી હોય છે. અહી શરીરમાં જમાં થયેલી ચરબીને દૂર કરવાનો સરળ અને કાયમી તેમજ સાચો રસ્તો જણાવવામાં આવ્યો છે...",
    images: ["/assets/result_banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" data-theme="light">
      <body
        className={`${anekGujarati.variable} ${outfit.variable} font-body bg-white text-gray-800`}
      >
        <JsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
