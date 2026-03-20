import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const socialPlatforms = [
  {
    name: "Facebook",
    handle: "Aayurved Na Aangne",
    link: "https://www.facebook.com/share/1FJzT8X53X/",
    icon: <Facebook size={32} className="text-white fill-current" />,
    color: "#1877F2",
    bgColor: "bg-[#1877F2]",
    textColor: "text-[#1877F2]",
    borderColor: "border-[#1877F2]",
  },
  {
    name: "Instagram",
    handle: "@aayurvedna_aangne_weightloss",
    link: "https://www.instagram.com/aayurvedna_aangne_weightloss?igsh=MTR5bnVqZWY4NTRsZg==",
    icon: <Instagram size={32} className="text-white" />,
    color: "#E4405F",
    bgColor: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    textColor: "text-[#DD2A7B]",
    borderColor: "border-[#DD2A7B]",
  },
  {
    name: "YouTube",
    handle: "@aayurvednaaangne",
    link: "https://www.youtube.com/@aayurvednaaangne",
    icon: <Youtube size={32} className="text-white fill-current" />,
    color: "#FF0000",
    bgColor: "bg-[#FF0000]",
    textColor: "text-[#FF0000]",
    borderColor: "border-[#FF0000]",
  },
  {
    name: "WhatsApp",
    handle: "Join our Community",
    link: "https://chat.whatsapp.com/HmzbYQBxadJ3olIPYhi70Y?mode=gi_t",
    icon: <MessageCircle size={32} className="text-white fill-current" />,
    color: "#25D366",
    bgColor: "bg-[#25D366]",
    textColor: "text-[#25D366]",
    borderColor: "border-[#25D366]",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">
             અમારી સાથે જોડાઓ
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            સોશિયલ મીડિયા પર અમને ફોલો કરો
          </h3>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {socialPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center relative"
            >
              {/* Circular Icon Container */}
              <div 
                className={`z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-360 ${platform.bgColor}`}
                style={{ 
                    boxShadow: `0 10px 30px -10px ${platform.color}80`
                }}
              >
                {platform.icon}
              </div>

              {/* Box Container */}
              <div className="flex-1 -ml-6 bg-white pl-10 pr-6 py-4 rounded-r-2xl shadow-lg border-y border-r border-gray-100 min-h-[80px] flex items-center justify-between relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:bg-gray-50">
                <div>
                  <h4 className={`text-xl font-bold ${platform.textColor} uppercase tracking-tight`}>
                    {platform.name}
                  </h4>
                  <p className="text-gray-500 font-medium">{platform.handle}</p>
                </div>
                
                {/* Visual Accent from reference image */}
                <div 
                  className={`absolute right-0 top-0 bottom-0 w-2 ${platform.bgColor}`}
                ></div>

                {/* Arrow Icon appears on hover */}
                <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <svg 
                     width="24" 
                     height="24" 
                     viewBox="0 0 24 24" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="3" 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     className={platform.textColor}
                   >
                     <path d="M5 12h14"></path>
                     <path d="m12 5 7 7-7 7"></path>
                   </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
