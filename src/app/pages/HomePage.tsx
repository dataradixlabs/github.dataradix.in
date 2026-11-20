import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router';
import { HeroSection } from '@/app/components/sections/home/HeroSection';
import { TrustedBySection } from '@/app/components/sections/home/TrustedBySection';
import { DigitalExcellenceSection } from '@/app/components/sections/home/DigitalExcellenceSection';
import { ServicesSection } from '@/app/components/sections/home/ServicesSection';
import { CaseStudiesPreviewSection } from '@/app/components/sections/home/CaseStudiesPreviewSection';
import { TestimonialsSection } from '@/app/components/sections/home/TestimonialsSection';
import { BlogSection } from '@/app/components/sections/home/BlogSection';
import { ReadyToBuildSection } from '@/app/components/sections/home/ReadyToBuildSection';
import { ThreeDPoem } from '@/app/components/ui/three-d-poem';
import { SEOManager } from '@/app/components/ui/SEOManager';

// Dynamic lazy imports for heavy 3D Spline and WebGL Shader sections
const Interactive3DSection = lazy(() =>
  import('@/app/components/sections/home/Interactive3DSection').then(m => ({ default: m.Interactive3DSection }))
);

const GrainHeroSection = lazy(() =>
  import('@/app/components/ui/grain-gradient-hero-section')
);

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Cutting-Edge Technology Solutions" 
        description="Transform your business with DataRadix's cutting-edge technology solutions. Expert in custom software, cloud infrastructure, AI, and digital transformation."
        keywords="DataRadix, IT Solutions, Software Development, Cloud Infrastructure, AI Integration, Digital Transformation"
        canonicalUrl="https://dataradix.in"
        schema={[
          {
            '@type': 'Organization',
            name: 'DataRadix',
            url: 'https://dataradix.in',
            logo: 'https://dataradix.in/logo.svg',
            description: 'Enterprise-grade software engineering, distributed systems, and cloud architecture.',
            sameAs: [
              'https://linkedin.com/company/dataradix',
              'https://github.com/dataradixlabs'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'info@dataradix.in'
            }
          },
          {
            '@type': 'WebSite',
            name: 'DataRadix',
            url: 'https://dataradix.in',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://dataradix.in/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />
      <HeroSection />
      
      <TrustedBySection />
      
      <Suspense fallback={<div className="h-[500px] w-full flex items-center justify-center bg-secondary/10"><div className="w-8 h-8 border-2 border-primary border-t-transparent animate-spin" /></div>}>
        <Interactive3DSection />
      </Suspense>
      
      <DigitalExcellenceSection />

      <ThreeDPoem
        title="Digital Synergy"
        poemHTML={`
          <p>The <span>synergy</span> between code and design ignited in our laboratory, each morning our systems clashed under the glow of monitors, logs streaked with <span>data</span> and insights; we <span>architected</span> between abstractions, every deployment a spark of progress against complex challenges. We stepped forward with <span>precision</span>, meeting every requirement with robust solutions, two disciplines seeking a shared <span>triumph</span> in their integration. When complex logic <span>faltered</span>, our collaborative spirit caught it—teams aligning, pulses synced in a daring development cycle. In failure we found optimization; in triumph we discovered <span>scalability</span>. Each moment spent <span>daring</span> to push boundaries built a solution impervious to obsolescence. hand in hand, knowing excellence blooms not through simple fixes, but by <span>daring greatly</span> together.</p>
        `}
      />

      <ThreeDPoem
        title="Creative Labs"
        reversed={true}
        poemHTML={`
          <p>The <span>love</span> between Ayla and Leo ignited in the old courtyard, each morning their swords clashed under dawn’s glow, faces streaked with <span>dust</span> and sweat; they <span>danced</span> between parries, every laugh a spark of joy against uncertain hearts. She stepped forward with <span>courage</span>, he met her gaze with open warmth, two souls seeking a shared <span>triumph</span> in their vulnerability. When blades slipped and one <span>faltered</span>, the other caught them—forearms brushing, pulses aligned in a daring heartbeat. In failure they found grace; in triumph they discovered unity. Each moment spent <span>daring</span> to trust the other built a bond impervious to fear. At dusk, they sheathed their swords, stepping from the <span>arena</span> hand in hand, knowing love blooms not through perfection, but by <span>daring greatly</span> together.</p>
        `}
      />

      <ServicesSection />

      <Suspense fallback={<div className="min-h-[80vh] w-full flex items-center justify-center bg-black"><div className="w-8 h-8 border-2 border-white border-t-transparent animate-spin" /></div>}>
        <GrainHeroSection 
          title="Engineering the Future"
          subtitle="We blend technical precision with architectural excellence to build digital experiences that redefine industry standards."
          ctaLabel="Start Your Project"
          onCtaClick={() => navigate('/contact')}
        />
      </Suspense>

      <CaseStudiesPreviewSection />

      <TestimonialsSection />

      <BlogSection />

      <ReadyToBuildSection />
    </div>
  );
}
