import { useNavigate } from 'react-router';
import { HeroSection } from '@/app/components/sections/home/HeroSection';
import { TrustedBySection } from '@/app/components/sections/home/TrustedBySection';
import { Interactive3DSection } from '@/app/components/sections/home/Interactive3DSection';
import { DigitalExcellenceSection } from '@/app/components/sections/home/DigitalExcellenceSection';
import { ServicesSection } from '@/app/components/sections/home/ServicesSection';
import { CaseStudiesPreviewSection } from '@/app/components/sections/home/CaseStudiesPreviewSection';
import { TestimonialsSection } from '@/app/components/sections/home/TestimonialsSection';
import { BlogSection } from '@/app/components/sections/home/BlogSection';
import { ReadyToBuildSection } from '@/app/components/sections/home/ReadyToBuildSection';
import { ThreeDPoem } from '@/app/components/ui/three-d-poem';
import GrainHeroSection from '@/app/components/ui/grain-gradient-hero-section';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="DataRadix - Cutting-Edge Technology Solutions" 
        description="Transform your business with DataRadix's cutting-edge technology solutions. Expert in custom software, cloud infrastructure, AI, and digital transformation."
        keywords="DataRadix, IT Solutions, Software Development, Cloud Infrastructure, AI Integration, Digital Transformation"
      />
      <HeroSection />
      
      <TrustedBySection />
      
      <Interactive3DSection />
      
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

      <GrainHeroSection 
        title="Engineering the Future"
        subtitle="We blend technical precision with architectural excellence to build digital experiences that redefine industry standards."
        ctaLabel="Start Your Project"
        onCtaClick={() => navigate('/contact')}
      />

      <CaseStudiesPreviewSection />

      <TestimonialsSection />

      <BlogSection />

      <ReadyToBuildSection />
    </div>
  );
}
