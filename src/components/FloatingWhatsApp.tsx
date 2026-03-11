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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 text-white">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.955-6.576 6.586-6.576 1.758.001 3.411.687 4.654 1.932 1.242 1.244 1.928 2.895 1.926 4.652-.003 3.626-2.955 6.578-6.58 6.578z"/>
            <path d="M11.597 9.873c-.198-.099-1.17-.578-1.352-.644-.182-.066-.315-.099-.448.099-.133.198-.513.644-.629.776-.115.132-.23.149-.428.05-.198-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.1-1.372-.114-.198-.011-.304.088-.403.089-.089.198-.231.297-.347.099-.115.132-.198.198-.33.066-.132.033-.248-.016-.347-.049-.099-.448-1.082-.613-1.482-.161-.39-.323-.337-.448-.344l-.382-.007c-.133 0-.348.05-.53.248-.182.198-.696.678-.696 1.65 0 .972.713 1.913.812 2.045.099.132 1.395 2.132 3.38 2.992.473.205.843.327 1.13.419.475.151.907.129 1.25.078.384-.057 1.17-.478 1.336-.94.166-.462.166-.858.116-.94-.05-.082-.183-.132-.381-.231z"/>
          </svg>
        </div>
        <div className="absolute inset-0 bg-[#25D366] rounded-full w-full h-full -z-10 animate-ping opacity-75"></div>
      </a>
    </div>
  );
}
