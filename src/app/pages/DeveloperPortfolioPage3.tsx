import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight, Play, Zap, Palette, BarChart3, Shield } from 'lucide-react';
import './DeveloperPortfolioPage3.css';

function HlsVideo({ src, className, style, desaturate = false }: { src: string, className?: string, style?: React.CSSProperties, desaturate?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        startLevel: -1,
        capLevelToPlayerSize: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={`${className} ${desaturate ? 'saturate-0' : ''}`}
      style={style}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function BlurText({ text, className, delay = 0.1 }: { text: string, className?: string, delay?: number }) {
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
          transition={{ duration: 0.7, times: [0, 0.5, 1], ease: 'easeOut', delay: delay + (i * 100) / 1000 }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-full text-white font-heading italic text-xl">
          S
        </div>
        
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1">
          {['Home', 'Services', 'Work', 'Process', 'Pricing'].map((link, i) => (
            <a key={link} href="#" className={`px-3 py-2 text-sm font-medium font-body transition-colors ${i === 0 ? 'text-white' : 'text-white/90 hover:text-white'}`}>
              {link}
            </a>
          ))}
          <button className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1 ml-2">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Mobile placeholder to balance flex */}
        <div className="h-12 w-12 md:hidden"></div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-visible h-[1000px] w-full flex flex-col items-center">
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto min-h-full object-cover object-[center_20%] z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/5 z-0"></div>
      <div className="absolute bottom-0 w-full h-[300px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, black)' }}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl px-6" style={{ paddingTop: '150px' }}>
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</span>
          <span className="text-sm font-body text-white/90 pr-3">Introducing AI-powered web design.</span>
        </motion.div>

        <BlurText 
          text="The Website Your Brand Deserves" 
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] m-0"
          delay={0.1}
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-sm md:text-base text-white font-body font-light leading-tight max-w-lg"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-6 mt-8"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 font-body transition-transform hover:scale-[1.02]">
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 text-white text-sm font-medium font-body hover:text-white/80 transition-colors">
            <Play className="h-4 w-4 fill-current" />
            Watch the Film
          </button>
        </motion.div>
      </div>

      <div className="relative z-10 mt-auto pb-8 pt-16 w-full flex flex-col items-center gap-6">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Trusted by the teams behind
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 text-2xl md:text-3xl font-heading italic text-white">
          <span>Stripe</span>
          <span>Vercel</span>
          <span>Linear</span>
          <span>Notion</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
}

function StartSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-24">
      <HlsVideo 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 w-full h-[200px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, black, transparent)' }}></div>
      <div className="absolute bottom-0 w-full h-[200px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to top, black, transparent)' }}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] m-0">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base mt-6 max-w-xl">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white mt-8 transition-transform hover:scale-[1.02]">
          Get Started
        </button>
      </div>
    </section>
  );
}

function FeaturesChess() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] m-0">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="space-y-24">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-[1] m-0">
              Designed to convert.<br />Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mt-6 max-w-md">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white mt-8 transition-transform hover:scale-[1.02]">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <img src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" alt="Feature 1" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-[1] m-0">
              It gets smarter.<br />Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mt-6 max-w-md">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white mt-8 transition-transform hover:scale-[1.02]">
              See how it works
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <img src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" alt="Feature 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Days, Not Months",
      desc: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
    },
    {
      icon: <Palette className="w-5 h-5 text-white" />,
      title: "Obsessively Crafted",
      desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      title: "Built to Convert",
      desc: "Layouts informed by data. Decisions backed by performance. Results you can measure."
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Secure by Default",
      desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] m-0">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col items-start">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-heading italic text-white mb-3 tracking-tight">{f.title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative w-full py-32 flex items-center justify-center px-6">
      <HlsVideo 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        desaturate
      />
      <div className="absolute top-0 w-full h-[200px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, black, transparent)' }}></div>
      <div className="absolute bottom-0 w-full h-[200px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to top, black, transparent)' }}></div>
      
      <div className="relative z-10 w-full max-w-5xl liquid-glass rounded-3xl p-12 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: "200+", l: "Sites launched" },
            { v: "98%", l: "Client satisfaction" },
            { v: "3.2x", l: "More conversions" },
            { v: "5 days", l: "Average delivery" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">{stat.v}</div>
              <div className="text-white/60 font-body font-light text-sm">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      q: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
      n: "Sarah Chen",
      r: "CEO, Luminary"
    },
    {
      q: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
      n: "Marcus Webb",
      r: "Head of Growth, Arcline"
    },
    {
      q: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
      n: "Elena Voss",
      r: "Brand Director, Helix"
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] m-0">
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col justify-between">
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed mb-8">"{rev.q}"</p>
            <div>
              <div className="text-white font-body font-medium text-sm mb-1">{rev.n}</div>
              <div className="text-white/50 font-body font-light text-xs">{rev.r}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <section className="relative w-full pt-32 pb-8 flex flex-col items-center">
      <HlsVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 w-full h-[200px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, black, transparent)' }}></div>
      <div className="absolute bottom-0 w-full h-[200px] z-0 pointer-events-none" style={{ background: 'linear-gradient(to top, black, transparent)' }}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] m-0 tracking-tight">
          Your next website<br />starts here.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base mt-8 max-w-xl">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>
        <div className="flex items-center gap-4 mt-10">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02]">
            View Pricing
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-xs font-body">© 2026 Studio. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-body">Privacy</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-body">Terms</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-body">Contact</a>
        </div>
      </div>
    </section>
  );
}

export function DeveloperPortfolioPage3() {
  return (
    <div className="portfolio3-wrapper bg-black min-h-screen w-full">
      <Navbar />
      <Hero />
      <div className="bg-black">
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <Stats />
        <Testimonials />
        <CtaFooter />
      </div>
    </div>
  );
}
