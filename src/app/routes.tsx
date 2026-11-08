import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { SEOManager } from '@/app/components/ui/SEOManager';
import { RootLayout } from '@/app/components/RootLayout';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage').then(m => ({ default: m.CaseStudyDetailPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const Capabilities3DPage = lazy(() => import('./pages/Capabilities3DPage').then(m => ({ default: m.Capabilities3DPage })));
const ShowreelPage = lazy(() => import('./pages/ShowreelPage').then(m => ({ default: m.ShowreelPage })));
const DeveloperPortfolioPage = lazy(() => import('./pages/DeveloperPortfolioPage').then(m => ({ default: m.DeveloperPortfolioPage })));
const DeveloperPortfolioPage2 = lazy(() => import('./pages/DeveloperPortfolioPage2').then(m => ({ default: m.DeveloperPortfolioPage2 })));
const DeveloperPortfolioPage3 = lazy(() => import('./pages/DeveloperPortfolioPage3').then(m => ({ default: m.DeveloperPortfolioPage3 })));
const DeveloperPortfolioPage4 = lazy(() => import('./pages/DeveloperPortfolioPage4').then(m => ({ default: m.DeveloperPortfolioPage4 })));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-border border-t-foreground animate-spin" />
    </div>
  );
}

export function AppRoutes() {
  return (
    <>
      <SEOManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/developer-portfolio" element={<DeveloperPortfolioPage />} />
          <Route path="/developer-portfolio-2" element={<DeveloperPortfolioPage2 />} />
          <Route path="/developer-portfolio-3" element={<DeveloperPortfolioPage3 />} />
          <Route path="/developer-portfolio-4" element={<DeveloperPortfolioPage4 />} />
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/3d-capabilities" element={<Capabilities3DPage />} />
            <Route path="/showreel" element={<ShowreelPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
