import { useEffect } from 'react';
import { useLocation } from 'react-router';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    authorName?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_TITLE = 'DataRadix | Enterprise Software Engineering & Digital Transformation';
const DEFAULT_DESCRIPTION = 'DataRadix delivers enterprise-grade software development, distributed systems architecture, cloud infrastructure, and AI engineering solutions.';
const DEFAULT_OG_IMAGE = 'https://dataradix.in/logo.svg';
const BASE_URL = 'https://dataradix.in';

export function SEOManager({
  title,
  description,
  robots = 'index, follow',
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  articleData,
  breadcrumbs,
  schema,
}: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Page Title
    const fullTitle = title ? `${title} | DataRadix` : DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper to create or update meta tags
    const setMeta = (attributeName: string, attributeValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const finalDescription = description || DEFAULT_DESCRIPTION;
    const finalCanonical = canonicalUrl || `${BASE_URL}${pathname === '/' ? '' : pathname}`;
    const finalImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

    // Standard Meta Tags
    setMeta('name', 'description', finalDescription);
    setMeta('name', 'robots', robots);
    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // OpenGraph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', finalDescription);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', finalCanonical);
    setMeta('property', 'og:image', finalImage);
    setMeta('property', 'og:site_name', 'DataRadix');
    setMeta('property', 'og:locale', 'en_US');

    // Twitter / X Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', finalDescription);
    setMeta('name', 'twitter:image', finalImage);

    // Article Specific Metadata
    if (ogType === 'article' && articleData) {
      if (articleData.publishedTime) setMeta('property', 'article:published_time', articleData.publishedTime);
      if (articleData.modifiedTime) setMeta('property', 'article:modified_time', articleData.modifiedTime);
      if (articleData.authorName) setMeta('property', 'article:author', articleData.authorName);
      if (articleData.section) setMeta('property', 'article:section', articleData.section);
    }

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', finalCanonical);

    // Dynamic JSON-LD Structured Data
    const schemasToInject: any[] = [];

    // Global Organization + WebSite on root
    if (pathname === '/') {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DataRadix',
        url: BASE_URL,
        logo: `${BASE_URL}/logo.svg`,
        sameAs: [
          'https://linkedin.com/company/dataradix',
          'https://github.com/dataradixlabs'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'info@dataradix.in'
        }
      });
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DataRadix',
        url: BASE_URL
      });
    }

    // Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `${BASE_URL}${b.url}`
        }))
      });
    }

    // Custom or Article Schema
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    let scriptTag = document.querySelector('script#dr-jsonld') as HTMLScriptElement;
    if (schemasToInject.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dr-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemasToInject.length === 1 ? schemasToInject[0] : { '@context': 'https://schema.org', '@graph': schemasToInject });
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, robots, keywords, canonicalUrl, ogImage, ogType, articleData, breadcrumbs, schema, pathname]);

  return null;
}
