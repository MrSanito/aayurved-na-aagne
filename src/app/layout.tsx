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
  title: "AAYURVED NA AANGNE - વજન ઘટાડવા માટેનો આયુર્વેદિક ઉપાય",
  description: "આયુર્વેદ દ્વારા કુદરતી રીતે વજન ઘટાડો. વજન ઘટાડવા માટેનો અત્યાર સુધીનો સૌથી સફળ આયુર્વેદિક ઉપાય.",
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
