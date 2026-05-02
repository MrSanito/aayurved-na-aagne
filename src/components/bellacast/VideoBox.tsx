import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

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
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
        controls={isPlaying}
      /> 
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 cursor-pointer flex items-center justify-center"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500 border border-white/30">
            <FaPlay className="ml-1 text-xl" />
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest font-outfit">
              Success Story
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
