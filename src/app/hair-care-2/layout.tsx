import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ખરતા વાળની સમસ્યા - આયુર્વેદિક ઉકેલ (Ayurvedic Hair Care 2)",
  description: "વાળ ખરવાની ચિંતા છોડો, આયુર્વેદ સાથે નાતો જોડો. ૧૦૦% આયુર્વેદિક હેર સોલ્યુશન જે 90 દિવસમાં પરિણામ આપે છે.",
  keywords: ["Hair Care", "Hair Growth", "Ayurvedic Treatment Amreli", "વાળ ખરવા", "ખોડો", "Ayurveda Hair Treatment"],
  alternates: {
    canonical: "/hair-care-2",
  },
  openGraph: {
     title: "ખરતા વાળની સમસ્યા - આયુર્વેદિક ઉકેલ",
     description: "વાળ ખરવાની ચિંતા છોડો, આયુર્વેદ સાથે નાતો જોડો.",
     url: "https://www.aayurvednaangne.in/hair-care-2",
     images: [{ url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvLpPgQIUG9vSkOF1fLxbxg1jhzDlpMjuB6jl7R6RWRp43YCkNc3iwY_6452gVo9-WOv_K8a2vQRHods7KbFX5I9Gbmt1gY48zGTX0ktUGpSmaznpFSOAX0T1HYwzk7Rgn5AvpJoK1KF5mCGsynmD4QgdwCmDmhEtWGB0cmAqkXuyegSg0QpNOpggmcvvT/s1376/1003078797.png" }]
  }
};

export default function HairCare2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
