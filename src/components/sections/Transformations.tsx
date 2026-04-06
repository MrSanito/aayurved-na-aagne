"use client"
import { useState } from "react";
import { FaCamera, FaCheckCircle, FaPlay, FaPause, FaImages } from "react-icons/fa";

interface MediaItem {
  type: "image" | "video";
  url: string;
  id: string;
  alt: string;
}

export default function Transformations() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const mediaItems: MediaItem[] = [
    { type: "video", url: "/Videos/video 2.mp4", id: "vid2", alt: "Ayurveda treatment testimonial video" },
    { type: "video", url: "/Videos/video 3.mp4", id: "vid3", alt: "Ayurvedic diet success video review" },
    { type: "video", url: "/Videos/video 4.mp4", id: "vid4", alt: "Healthy living journey video testimonial" },
    { type: "video", url: "/Videos/video 5.mp4", id: "vid5", alt: "Customer sharing experience with ayurvedic kit" },
    { type: "video", url: "/Videos/video 1.mp4", id: "vid1", alt: "Introduction to ayurvedic weight loss process" },
    { type: "image", url: "/content/product result.jpeg", id: "img1", alt: "Ayurvedic weight loss product result comparison" },
    { type: "image", url: "/assets/1001965731.jpg", id: "img2", alt: "Customer weight loss success story before after" },
    { type: "image", url: "/assets/1001972842.jpg", id: "img3", alt: "Natural fat reduction result image" },
    { type: "image", url: "/assets/1001972854.jpg", id: "img4", alt: "Body transformation after 90 days ayurveda" },
    { type: "image", url: "/assets/1001972865.jpg", id: "img5", alt: "Effective ayurvedic weight loss result" },
    { type: "image", url: "/assets/1001965644.jpg", id: "img6", alt: "Transformation result after natural treatment" },
    { type: "image", url: "/assets/1001972839.jpg", id: "img7", alt: "Consistent weight loss results with ayurveda" },
  ];

  const toggleVideo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const video = document.getElementById(id) as HTMLVideoElement;
    
    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo) {
        const currentPlaying = document.getElementById(playingVideo) as HTMLVideoElement;
        if (currentPlaying) currentPlaying.pause();
      }
      
      video.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section id="transformations" className="py-24 md:py-32 bg-herbal text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaCamera className="text-gold" size={24} />
            <span className="text-sm font-bold text-gold tracking-[0.3em] uppercase font-outfit">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight font-heading">
            અમારી આયુર્વેદીક કીટ ના <span className="text-gold italic font-light font-outfit block mt-2 text-2xl md:text-4xl tracking-widest uppercase">Results</span>
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full mb-10 shadow-lg shadow-gold/20"></div>
          <p className="text-beige/80 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            માત્ર 90 દિવસમાં સેંકડો લોકોએ આયુર્વેદના માધ્યમથી પોતાનું વજન ઘટાડીને સ્વાસ્થ્ય પાછું મેળવ્યું છે.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-2 border border-white/10 relative"
            >
              <div className="relative overflow-hidden">
                {item.type === "image" ? (
                  <div className="relative group">
                    <img 
                      src={item.url} 
                      alt={item.alt}
                      className="w-full h-auto min-h-[400px] object-contain bg-stone-50 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center justify-center gap-2 text-white font-bold bg-herbal/95 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl font-outfit text-sm uppercase tracking-widest">
                        <FaCheckCircle className="text-gold" />
                        <span>Amazing Result</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-9/16 bg-black flex items-center justify-center min-h-[400px]">
                    <video
                      id={item.id}
                      className="w-full h-full object-contain"
                      playsInline
                      preload="none"
                      onClick={(e) => toggleVideo(item.id, e)}
                      src={item.url}
                      controls={playingVideo === item.id}
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    {playingVideo !== item.id && (
                      <button 
                        onClick={(e) => toggleVideo(item.id, e)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors z-20"
                      >
                        <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                           <FaPlay className="text-white ml-1" size={30} />
                        </div>
                      </button>
                    )}

                    <div className="absolute top-4 right-4 bg-herbal/80 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-white/10 uppercase tracking-widest z-30">
                      Video Story
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
