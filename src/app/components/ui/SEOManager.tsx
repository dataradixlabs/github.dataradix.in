import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  keywords?: string;
}

const DEFAULT_TITLE = 'DataRadix | Innovative IT Solutions & Digital Transformation';
const DEFAULT_DESCRIPTION = 'DataRadix provides cutting-edge IT solutions, from web and mobile development to cloud architecture and AI integration. Building the future of digital innovation since 2010.';
const DEFAULT_ROBOTS = 'index, follow';
const DEFAULT_KEYWORDS = 'IT Solutions, Software Development, Cloud Computing, AI Integration, Digital Transformation, DataRadix';

export function SEOManager({ title, description, robots, keywords }: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Title
    const fullTitle = title ? `${title} | DataRadix` : DEFAULT_TITLE;
    document.title = fullTitle;
    
    // 2. Manage Meta Tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', description || DEFAULT_DESCRIPTION);
    updateMetaTag('robots', robots || DEFAULT_ROBOTS);
    updateMetaTag('keywords', keywords || DEFAULT_KEYWORDS);
    
    // 3. Ensure Charset and Viewport (Standard in index.html, but good to double check)
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    if (!document.querySelector('meta[name="viewport"]')) {
      updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    }

    // 4. Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', window.location.origin + pathname);

  }, [title, description, robots, keywords, pathname]);

  return null;
}
