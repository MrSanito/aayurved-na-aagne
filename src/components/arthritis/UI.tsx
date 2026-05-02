import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-4xl mx-auto px-4 py-12 md:py-16 ${className}`}>
    {children}
  </section>
);

export const Heading = ({ children, level = 2, className = "" }: { children: React.ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const baseClasses = "font-bold tracking-tight leading-tight";
  const colorClass = className.includes("text-") ? "" : "text-stone-900";
  if (level === 1) return <h1 className={`${baseClasses} ${colorClass} text-3xl md:text-5xl text-center mb-8 ${className}`}>{children}</h1>;
  if (level === 2) return <h2 className={`${baseClasses} ${colorClass} text-2xl md:text-3xl mt-12 mb-6 ${className}`}>{children}</h2>;
  return <h3 className={`${baseClasses} ${colorClass} text-xl md:text-2xl mt-8 mb-4 ${className}`}>{children}</h3>;
};

export const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const colorClass = className.includes("text-") ? "" : "text-stone-700";
  return (
    <p className={`${colorClass} leading-relaxed mb-4 text-base md:text-lg ${className}`}>{children}</p>
  );
};

export const ImageBox = ({ src, alt, width, className = "" }: { src: string; alt: string; width?: number; className?: string }) => (
  <div className={`flex justify-center my-8 ${className}`}>
    <img src={src} alt={alt} className="max-w-full h-auto rounded-xl shadow-lg border border-stone-100" style={width ? { maxWidth: width } : {}} />
  </div>
);

export const ProductCard = ({ title, image, children }: { title: string; image: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden my-12 transition-all hover:shadow-md">
    <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
      <h3 className="text-xl md:text-2xl font-bold text-herbal-dark">{title}</h3>
    </div>
    <div className="p-6 md:p-8 md:flex gap-10 items-start">
      <div className="md:w-1/3 mb-6 md:mb-0 shrink-0">
        <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-inner border border-stone-100 p-1" />
      </div>
      <div className="md:w-2/3 space-y-3">
        {children}
      </div>
    </div>
  </div>
);

export const InfoBox = ({ children, type = "default" }: { children: React.ReactNode; type?: "default" | "green" }) => {
  const classes = type === "green"
    ? "bg-green-50 border-green-200 text-green-900"
    : "bg-stone-50 border-stone-200 text-stone-900";
  return (
    <div className={`${classes} border rounded-2xl p-6 md:p-8 my-8 text-center italic font-medium`}>
      {children}
    </div>
  );
};

export const WhatsAppButton = ({ text = "અત્યારે જ ઓર્ડર કરો", className = "", href }: { text?: string; className?: string; href?: string }) => (
  <Link
    href={href || "https://wa.me/919687105624?text=હું++આર્થરાઇટિસ+સોલ્યુશન+વિશે+જાણવા+ઈચ્છું+છું"}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all hover:scale-[1.05] active:scale-95 ${className}`}
  >
    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>{text}</span>
  </Link>
);

export const VideoBox = ({ src, className = "" }: { src: string; className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative group rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white bg-black ${isLandscape ? 'aspect-video' : 'aspect-9/16'} ${className}`}>
      <video 
        ref={videoRef}
        src={`${src}#t=0.001`} 
        playsInline
        preload="metadata"
        className="w-full h-full object-contain"
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          if (v.videoWidth > v.videoHeight) {
            setIsLandscape(true);
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
        controls={isPlaying}
      /> 
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:bg-black/10 transition-all duration-500 cursor-pointer flex items-center justify-center"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500 border border-white/40 shadow-2xl">
            <FaPlay className="ml-1 text-xl" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-outfit font-black text-xs uppercase tracking-[0.2em] mb-1 drop-shadow-lg">Patient Review</p>
            <div className="h-1 w-12 bg-herbal rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
          </div>
        </div>
      )}

      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-white uppercase tracking-widest">Aayurved Results</span>
        </div>
      </div>
    </div>
  );
};
