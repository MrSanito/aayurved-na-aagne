import type { Metadata } from "next";
import { Poppins, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansGujarati = Noto_Sans_Gujarati({
  variable: "--font-noto-gujarati",
  subsets: ["gujarati"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${poppins.variable} ${notoSansGujarati.variable} font-body bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
