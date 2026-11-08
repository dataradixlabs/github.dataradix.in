import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import './DeveloperPortfolioPage.css';

function FadingVideo({ src, className, style }: { src: string, className?: string, style?: React.CSSProperties }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const fadeTo = useCallback((targetOpacity: number, durationMs = 500) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startOpacity = parseFloat(videoRef.current?.style.opacity || '0') || 0;
    const startTime = performance.now();
    const distance = targetOpacity - startOpacity;
    
    if (distance === 0) return;

    function step(currentTime: number) {
      let elapsed = currentTime - startTime;
      let progress = elapsed / durationMs;
      if (progress > 1) progress = 1;
      
      if (videoRef.current) {
        videoRef.current.style.opacity = (startOpacity + distance * progress).toString();
      }
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }
    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
      videoRef.current.play();
      fadeTo(1);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { duration, currentTime } = videoRef.current;
    if (!fadingOutRef.current && duration - currentTime <= 0.55 && duration - currentTime > 0) {
      fadingOutRef.current = true;
      fadeTo(0);
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
}

function BlurText({ text, className }: { text: string, className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const words = text.split(" ");
  
  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={isInView ? { filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'], opacity: [0, 0.5, 1], y: [50, -5, 0] } : {}}
          transition={{ duration: 0.7, times: [0, 0.5, 1], ease: 'easeOut', delay: (i * 100) / 1000 }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6 4 20 12 6 20 6 4" />
  </svg>
);

function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-black text-white">
      <FadingVideo 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      <nav className="fixed top-4 w-full px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-auto">
        <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center">
          <span className="font-heading italic text-2xl lowercase mt-1 text-white">a</span>
        </div>
        
        <div className="hidden md:flex liquid-glass p-1.5 rounded-full items-center gap-1">
          {['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map(link => (
            <a key={link} href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors rounded-full">
              {link}
            </a>
          ))}
          <button className="bg-white text-black px-3 py-2 rounded-full text-sm font-medium font-body flex items-center gap-1 whitespace-nowrap ml-2">
            Claim a Spot
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-12 h-12 opacity-0 pointer-events-none"></div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 w-full">
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.4, ease: 'easeOut' }}
          className="liquid-glass rounded-full p-1.5 flex items-center mb-6"
        >
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full mr-3">New</span>
          <span className="text-sm text-white/90 pr-3 font-body">Maiden Crewed Voyage to Mars Arrives 2026</span>
        </motion.div>

        <BlurText 
          text="Venture Past Our Sky Across the Universe"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl text-center tracking-[-4px] m-0"
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ease: 'easeOut' }}
          className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight text-center"
        >
          Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
        </motion.p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, ease: 'easeOut' }}
          className="flex items-center gap-6 mt-6"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 font-body cursor-pointer">
            Start Your Voyage
            <ArrowUpRight className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 text-white text-sm font-medium font-body hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer">
            View Liftoff
            <PlayIcon className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.3, ease: 'easeOut' }}
          className="flex flex-wrap items-stretch justify-center gap-4 mt-8"
        >
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col items-start text-left">
            <svg className="w-7 h-7 text-white mb-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
            <div className="mt-8">
              <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">34.5 Min</div>
              <div className="text-xs text-white font-body font-light mt-2">Average Videos Watch Time</div>
            </div>
          </div>

          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col items-start text-left">
            <svg className="w-7 h-7 text-white mb-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <div className="mt-8">
              <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">2.8B+</div>
              <div className="text-xs text-white font-body font-light mt-2">Users Across the Globe</div>
            </div>
          </div>
        </motion.div>
      </main>

      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ delay: 1.4, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-4 pb-8 w-full mt-12"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Collaborating with top aerospace pioneers globally
        </div>
        <div className="flex flex-wrap justify-center font-heading italic text-white text-2xl md:text-3xl tracking-tight gap-12 md:gap-16">
          <span>Aeon</span>
          <span>·</span>
          <span>Vela</span>
          <span>·</span>
          <span>Apex</span>
          <span>·</span>
          <span>Orbit</span>
          <span>·</span>
          <span>Zeno</span>
        </div>
      </motion.div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white">
      <FadingVideo 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6">// Capabilities</div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] m-0">
            Production<br/>evolved
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          
          <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                {['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 spacer"></div>
            <div className="mt-6">
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none m-0">AI Scenery</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                {['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 spacer"></div>
            <div className="mt-6">
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none m-0">Batch Production</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                {['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 spacer"></div>
            <div className="mt-6">
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none m-0">Smart Lighting</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function DeveloperPortfolioPage() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Capabilities />
    </div>
  );
}
