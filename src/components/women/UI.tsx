"use client";

import React, { useState, useRef } from "react";
import { FaPlay, FaWhatsapp } from "react-icons/fa";

export const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-4xl mx-auto px-4 py-12 md:py-16 ${className}`}>
    {children}
  </section>
);

export const Heading = ({ children, level = 2, className = "" }: { children: React.ReactNode; level?: 1 | 2 | 3; className?: string }) => {
  const baseClasses = "font-bold tracking-tight leading-tight";
  const colorClass = className.includes("text-") ? "" : "text-stone-900";
  
  if (level === 1) return <h1 className={`${baseClasses} ${colorClass} text-3xl md:text-4xl text-center mb-8 ${className}`}>{children}</h1>;
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

export const VideoBox = ({ src, className = "" }: { src: string; className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    <div className={`relative group rounded-4xl overflow-hidden shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-herbal/10 transition-all duration-700 hover:-translate-y-2 border border-white bg-black aspect-9/16 ${className}`}>
      <video 
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        loop
        onClick={togglePlay}
      />
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-herbal shadow-xl transform group-hover:scale-110 transition-transform">
            <FaPlay className="ml-1 text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export const WhatsAppButton = ({ text = "અત્યારે જ ઓર્ડર કરો", message = "Hello, I want to order Women's Health products", className = "" }: { text?: string; message?: string; className?: string }) => (
  <div className={`flex justify-center my-10 ${className}`}>
    <a 
      href={`https://wa.me/917359556845?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#20ba5a] transition-all hover:scale-105 shadow-xl shadow-green-200"
    >
      <FaWhatsapp className="text-2xl" />
      {text}
    </a>
  </div>
);
