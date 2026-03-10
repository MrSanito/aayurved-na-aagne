import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82";

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      <div
        className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 hidden sm:block pointer-events-auto"
      >
        <p className="text-sm font-semibold text-gray-800">
          માર્ગદર્શન માટે મેસેજ કરો
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group pointer-events-auto"
      >
        <div
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] group-hover:bg-green-600 transition-colors animate-bounce"
        >
          <MessageCircle className="w-8 h-8 text-white fill-current" />
        </div>
        <div className="absolute inset-0 bg-[#25D366] rounded-full w-full h-full -z-10 animate-ping opacity-75"></div>
      </a>
    </div>
  );
}
