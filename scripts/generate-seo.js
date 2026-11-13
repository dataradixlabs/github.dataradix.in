import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://dataradix.in';

// 1. Define Static Routes
const staticRoutes = [
  '',
  '/about',
  '/services',
  '/case-studies',
  '/blog',
  '/contact',
  '/3d-capabilities',
  '/showreel',
  '/privacy',
  '/terms',
  '/cookies'
];

// 2. Extract Dynamic Routes
async function generateSitemap() {
  const dataPath = path.resolve(__dirname, '../src/app/data/index.ts');
  const dataContent = fs.readFileSync(dataPath, 'utf-8');

  const catalogPath = path.resolve(__dirname, '../src/app/data/catalog/generatedCatalog.ts');
  let queuedBlogIds = [];
  if (fs.existsSync(catalogPath)) {
    const catalogContent = fs.readFileSync(catalogPath, 'utf-8');
    // Read all queued blogs up to today
    const todayIso = new Date().toISOString().split('T')[0];
    
    // Extract posts with their publishDate
    const postMatches = [...catalogContent.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?publishDate:\s*['"]([^'"]+)['"]/g)];
    queuedBlogIds = postMatches
      .filter(m => m[2] <= todayIso)
      .map(m => m[1]);
  }

  const servicesMatch = dataContent.match(/export const SERVICES = \[([\s\S]*?)\];/);
  const baseBlogPostsMatch = dataContent.match(/const BASE_BLOG_POSTS = \[([\s\S]*?)\];/);
  const caseStudiesMatch = dataContent.match(/export const CASE_STUDIES = \[([\s\S]*?)\];/);

  const extractIds = (block) => {
    if (!block) return [];
    return [...block.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  };

  const services = extractIds(servicesMatch ? servicesMatch[1] : '');
  const baseBlogs = extractIds(baseBlogPostsMatch ? baseBlogPostsMatch[1] : '');
  const caseStudies = extractIds(caseStudiesMatch ? caseStudiesMatch[1] : '');

  const dynamicRoutes = [
    ...services.map(id => `/services/${id}`),
    ...baseBlogs.map(id => `/blog/${id}`),
    ...queuedBlogIds.map(id => `/blog/${id}`),
    ...caseStudies.map(id => `/case-studies/${id}`)
  ];

  const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])];

  // Generate XML with Google Image Sitemap namespace
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes.map(route => {
  let imageTag = '';
  if (route.startsWith('/blog/')) {
    const slug = route.replace('/blog/', '');
    const imgUrl = slug === 'most-relevant-technologies-for-software-engineers-in-2027' 
      ? `${BASE_URL}/blog-technologies-2027.jpg` 
      : `${BASE_URL}/blog/${slug}.svg`;
    imageTag = `\n    <image:image>\n      <image:loc>${imgUrl}</image:loc>\n      <image:title>${slug.replace(/-/g, ' ')}</image:title>\n    </image:image>`;
  } else if (route.startsWith('/case-studies/')) {
    const slug = route.replace('/case-studies/', '');
    imageTag = `\n    <image:image>\n      <image:loc>${BASE_URL}/case-studies/${slug}.svg</image:loc>\n      <image:title>${slug.replace(/-/g, ' ')} architecture case study</image:title>\n    </image:image>`;
  }

  return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : route.split('/').length > 2 ? '0.7' : '0.8'}</priority>${imageTag}
  </url>`;
}).join('\n')}
</urlset>`;

  // Generate Robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  // Write to public directory
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

  console.log(`✅ Sitemap generated with ${allRoutes.length} published routes (including ${queuedBlogIds.length} time-gated blogs active today).`);
  console.log(`✅ Robots.txt generated.`);
}

generateSitemap().catch(console.error);
