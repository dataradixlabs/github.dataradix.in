import React, { useEffect, useRef } from 'react';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';
import './DeveloperPortfolioPage4.css';

function FadingVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const opacityRef = useRef(0);
  const fadingOutRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  const setOpacity = (val: number) => {
    opacityRef.current = Math.max(0, Math.min(1, val));
    if (videoRef.current) {
      videoRef.current.style.opacity = opacityRef.current.toString();
    }
  };

  const fadeTo = (target: number, duration = 500, callback?: () => void) => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
    }
    const startOpacity = opacityRef.current;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setOpacity(startOpacity + (target - startOpacity) * progress);
      
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        animFrameRef.current = null;
        if (callback) callback();
      }
    };
    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setOpacity(0);
    
    const handleLoadedData = () => {
      fadeTo(1, 500);
      fadingOutRef.current = false;
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
          fadingOutRef.current = false;
          fadeTo(1, 500);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover translate-y-[17%] transition-none"
      style={{ opacity: 0 }}
      autoPlay
      muted
      playsInline
      src={src}
    />
  );
}

export function DeveloperPortfolioPage4() {
  return (
    <div className="portfolio4-wrapper min-h-screen bg-black overflow-hidden flex flex-col relative w-full">
      <FadingVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4" />
      
      {/* Navigation bar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg">Asme</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium transition-colors hover:text-white/80">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero content area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>
        
        <div className="max-w-xl w-full space-y-4 flex flex-col items-center">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/40 text-base min-w-0"
            />
            <button className="bg-white rounded-full p-3 text-black shrink-0 transition-transform hover:scale-105">
              <ArrowRight size={20} />
            </button>
          </div>
          
          <p className="text-white text-sm leading-relaxed px-4 text-center">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>
          
          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors mt-2">
            Manifesto
          </button>
        </div>
      </main>

      {/* Social icons footer */}
      <footer className="relative z-10 flex justify-center gap-4 pb-12 mt-auto">
        <button aria-label="Instagram" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Instagram size={20} />
        </button>
        <button aria-label="Twitter" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Twitter size={20} />
        </button>
        <button aria-label="Website" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe size={20} />
        </button>
      </footer>
    </div>
  );
}
