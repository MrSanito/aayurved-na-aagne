import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ખરતા વાળનું કાયમી ઉપાય - આયુર્વેદના આંગણે (Hair Care Solution)",
  description: "શું તમે પણ ખરતા વાળ, ખોડો, પાતળા વાળ, અકાળે થયેલ સફેદ વાળ થી પરેશાન છો? જાણો આયુર્વેદિક ઉપચાર દ્વારા વાળને મૂળમાંથી મજબૂત કરવાના રસ્તાઓ.",
  keywords: ["Hair Care", "Hair Fall Solution", "Ayurvedic Hair Care", "Gujarat Hair Specialist", "આયુર્વેદના આંગણે", "ખરતા વાળ"],
  alternates: {
    canonical: "/haircare",
  },
  openGraph: {
    title: "ખરતા વાળનું કાયમી ઉપાય - આયુર્વેદના આંગણે",
    description: "ખરતા વાળ, ખોડો અને પાતળા વાળનો આયુર્વેદિક ઉકેલ.",
    url: "https://www.aayurvednaangne.in/haircare",
    images: [{ url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2eNvLsZKhfJp7zANYAl2dWaIAC_CgPkvUxMfcAe4q3SvBHz5T6w6WJQUo0jVHF9DIsMFGmtiLUlOG6-HbAmUDgkBETgscg0WoTNKLPuq0fI-FOvt2fh51yR_9Cb__I8fNxL0agBtBqpX0GOFJTqH_ayIufD3I80tWeLdGgjQSYYRQ6ZYvLGHTenP4G_bW/s1280/1003077581.jpg" }]
  }
};

export default function HairCareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
