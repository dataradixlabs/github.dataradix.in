import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';
import { CASE_STUDIES, CASE_STUDY_CATEGORIES } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === selectedCategory);

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Our Work - Case Studies & Success Stories" 
        description="Discover how DataRadix has helped businesses transform through innovative technology solutions. Explore our portfolio of web, mobile, and cloud projects."
        keywords="Case Studies, Tech Portfolio, Success Stories, Project Highlights, Web Development Work"
      />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Portfolio</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-none">
              Our Work Speaks<br />
              <span className="gradient-text">For Itself</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore real projects, real results, and real impact we've delivered
              for businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 border-b border-border bg-secondary sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {CASE_STUDY_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs whitespace-nowrap transition-colors border ${
                  selectedCategory === category
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent border-border text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ delay: index * 0.04 }}
              >
                <Link to={`/case-studies/${study.id}`} className="block group h-full">
                  <div className="bg-background hover:bg-secondary transition-colors overflow-hidden h-full flex flex-col">
                    {/* Cover Visual */}
                    <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden border-b border-border">
                      {study.image ? (
                        <img
                          src={study.image}
                          alt={`${study.title} - ${study.category} Case Study`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          width={600}
                          height={338}
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-pattern opacity-100" />
                          <study.icon className="w-20 h-20 text-muted-foreground/30 relative z-10" />
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        {study.category}
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-5 flex-1 leading-relaxed">
                        {study.tagline}
                      </p>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4 mb-5 pt-4 border-t border-border">
                        {[study.results.metric1, study.results.metric2, study.results.metric3].map((metric) => (
                          <div key={metric.label}>
                            <div className="font-display font-bold text-base">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-xs font-medium">
                        View Case Study
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20 border border-border">
              <p className="text-sm text-muted-foreground">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
