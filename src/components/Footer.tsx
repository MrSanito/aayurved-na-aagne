import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12">
          <div>
            <Link href="/" className="font-poppins text-2xl font-bold text-herbal inline-block mb-4">
              AAYURVED NA AANGNE
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              કુદરતી આયુર્વેદિક પદ્ધતિથી વજન ઘટાડવા અને સ્વસ્થ જીવનશૈલી અપનાવવાનો સૌથી સાચો અને સુરક્ષિત રસ્તો.
            </p>
          </div>
          <div className="flex md:justify-end border-t border-gray-800 md:border-0 pt-8 md:pt-0">
             <div className="space-y-4">
              <h4 className="text-lg font-semibold text-beige mb-4 border-b border-gray-700 pb-2 inline-block">સંપર્ક કરો</h4>
              <p className="text-gray-400">સ્થળ: અમરેલી, ગુજરાત</p>
              <a 
                href="https://api.whatsapp.com/message/JBAPTQYQ6RH6K1?autoload=1&app_absent=0"
                target="_blank"
                className="text-white hover:text-herbal transition-colors flex items-center gap-2 mt-4"
              >
                <MessageCircle size={20} className="text-green-500" />
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
