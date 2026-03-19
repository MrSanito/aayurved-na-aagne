import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12">
          <div>
            <Link href="/" className="font-poppins text-2xl font-bold text-herbal inline-block mb-4">
              AAYURVED NA AANGNE
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed mx-auto md:mx-0">
              કુદરતી આયુર્વેદિક પદ્ધતિથી વજન ઘટાડવા અને સ્વસ્થ જીવનશૈલી અપનાવવાનો સૌથી સાચો અને સુરક્ષિત રસ્તો.
            </p>
          </div>
          <div className="flex md:justify-end border-t border-gray-800 md:border-0 pt-8 md:pt-0">
             <div className="space-y-4">
              <h4 className="text-lg font-semibold text-beige mb-4 border-b border-gray-700 pb-2 inline-block">સંપર્ક કરો</h4>
              <p className="text-gray-400">સ્થળ: અમરેલી, ગુજરાત</p>
              <a 
                href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
                target="_blank"
                className="text-white hover:text-herbal transition-colors flex items-center justify-center md:justify-start gap-2 mt-4"
              >
                <FaWhatsapp size={20} className="text-[#25D366]" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AAYURVED NA AANGNE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
