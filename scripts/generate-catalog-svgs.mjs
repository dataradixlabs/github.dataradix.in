import fs from 'fs';
import path from 'path';
import { TOPIC_SCHEDULE_PLAN } from '../src/app/data/catalog/schedulePlan.ts';

const outDir = path.resolve('public/blog');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function generateSvg(item) {
  // Split title if long
  const words = item.title.split(' ');
  let line1 = item.title;
  let line2 = '';
  if (words.length > 5) {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(' ');
    line2 = words.slice(mid).join(' ');
  }

  // XML escape helpers
  const esc = (str) => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="none">
  <defs>
    <linearGradient id="bg-grad-${item.day}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080B11"/>
      <stop offset="50%" stop-color="#0E1726"/>
      <stop offset="100%" stop-color="#05070B"/>
    </linearGradient>
    <linearGradient id="accent-grad-${item.day}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${item.accent}"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
    <pattern id="grid-${item.day}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" stroke-width="0.8" opacity="0.5"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#bg-grad-${item.day})"/>
  <rect width="1200" height="675" fill="url(#grid-${item.day})"/>

  <!-- Ambient Glow -->
  <circle cx="1020" cy="220" r="380" fill="${item.accent}" opacity="0.12" filter="blur(90px)"/>
  <circle cx="220" cy="520" r="300" fill="#0284C7" opacity="0.08" filter="blur(90px)"/>

  <!-- Tech Geometric Motif on Right -->
  <g transform="translate(860, 320)" opacity="0.88">
    <circle cx="0" cy="0" r="165" stroke="#1E293B" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
    <circle cx="0" cy="0" r="115" stroke="${item.accent}" stroke-width="2" fill="none" opacity="0.4"/>
    <circle cx="0" cy="0" r="65" fill="#0F172A" stroke="#334155" stroke-width="2"/>
    <!-- Orbiting Data Nodes -->
    <circle cx="0" cy="-115" r="8" fill="${item.accent}"/>
    <circle cx="100" cy="58" r="6" fill="#38BDF8"/>
    <circle cx="-100" cy="58" r="6" fill="#10B981"/>
    <!-- Radial Geometric Lines -->
    <line x1="-165" y1="0" x2="165" y2="0" stroke="#1E293B" stroke-width="1.5"/>
    <line x1="0" y1="-165" x2="0" y2="165" stroke="#1E293B" stroke-width="1.5"/>
    <!-- Data Radix Node Core -->
    <rect x="-18" y="-18" width="36" height="36" rx="8" fill="url(#accent-grad-${item.day})"/>
  </g>

  <!-- Left Content Card -->
  <g transform="translate(100, 130)">
    <!-- Category Badge -->
    <rect x="0" y="0" width="300" height="34" rx="4" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="16" cy="17" r="5" fill="${item.accent}"/>
    <text x="32" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">${esc(item.category.toUpperCase())}</text>

    <!-- Main Title Line 1 -->
    <text x="0" y="105" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="800" letter-spacing="-0.5">
      ${esc(line1)}
    </text>

    <!-- Main Title Line 2 -->
    ${line2 ? `<text x="0" y="155" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="800" letter-spacing="-0.5">
      ${esc(line2)}
    </text>` : ''}

    <!-- Concept Subtitle -->
    <text x="0" y="${line2 ? '210' : '165'}" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400">
      ${esc(item.conceptSubtitle)}
    </text>

    <!-- Tech Tags Bar -->
    <g transform="translate(0, ${line2 ? '250' : '205'})">
      ${item.tags.map((t, idx) => `
        <g transform="translate(${idx * 130}, 0)">
          <rect x="0" y="0" width="120" height="26" rx="13" fill="#1E293B" opacity="0.8"/>
          <text x="60" y="17" fill="#CBD5E1" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">${esc(t)}</text>
        </g>
      `).join('')}
    </g>

    <!-- Divider Bar -->
    <rect x="0" y="${line2 ? '300' : '255'}" width="80" height="4" rx="2" fill="url(#accent-grad-${item.day})"/>

    <!-- Brand Footer Signature -->
    <g transform="translate(0, 350)">
      <rect x="0" y="-6" width="28" height="28" rx="6" fill="#0F172A" stroke="#334155" stroke-width="1"/>
      <circle cx="14" cy="8" r="5" fill="#38BDF8"/>
      <text x="40" y="14" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" letter-spacing="0.5">DataRadix Engineering Insights</text>
    </g>
  </g>
</svg>`;
}

let count = 0;
for (const item of TOPIC_SCHEDULE_PLAN) {
  const filePath = path.join(outDir, `${item.slug}.svg`);
  fs.writeFileSync(filePath, generateSvg(item));
  count++;
}

console.log(`✅ Successfully generated all ${count} SVG vector graphics for the 45-day queue.`);
