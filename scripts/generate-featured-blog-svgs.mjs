import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/blog');

const POSTS = [
  {
    id: 'scala-apache-spark-iceberg-lakehouse',
    category: 'DATA ARCHITECTURE',
    titleLine1: 'Building Real-Time Lakehouses',
    titleLine2: 'with Scala, Spark & Iceberg',
    concept: 'ACID Transactions, Streaming CDC Pipelines & Zero-ETL Analytics',
    accent: '#DC2626',
    secondary: '#F97316',
    tags: ['Scala 3', 'Apache Spark', 'Apache Iceberg', 'Delta Lake'],
    diagramType: 'lakehouse'
  },
  {
    id: 'most-relevant-technologies-for-software-engineers-in-2027',
    category: 'ENGINEERING TRENDS',
    titleLine1: 'Most Relevant Technologies',
    titleLine2: 'for Software Engineers in 2027',
    concept: 'Agentic Runtimes, Wasm Edge Micro-VMs & Memory-Safe Architectures',
    accent: '#06B6D4',
    secondary: '#3B82F6',
    tags: ['Agentic AI', 'Rust / Go', 'WebAssembly', 'Platform Eng'],
    diagramType: 'radar'
  },
  {
    id: 'mastering-akka-clustering',
    category: 'DISTRIBUTED SYSTEMS',
    titleLine1: 'Mastering Akka Clustering',
    titleLine2: 'Resilient Node Meshes at Scale',
    concept: 'Gossip Protocols, Dynamic Failure Detectors & Split-Brain Resolvers',
    accent: '#0284C7',
    secondary: '#38BDF8',
    tags: ['Akka Cluster', 'Apache Pekko', 'Actor Systems', 'Consensus'],
    diagramType: 'cluster'
  },
  {
    id: 'high-performance-akka-http',
    category: 'REACTIVE APIS',
    titleLine1: 'High-Performance Akka HTTP',
    titleLine2: 'Beyond Basic REST Gateways',
    concept: 'Streaming Backpressure, Zero-Copy Buffers & Sub-2ms Latencies',
    accent: '#E11D48',
    secondary: '#FB7185',
    tags: ['Akka HTTP', 'Akka Streams', 'gRPC / HTTP/2', 'Backpressure'],
    diagramType: 'stream'
  },
  {
    id: 'akka-persistence-event-sourcing',
    category: 'DATA ARCHITECTURE',
    titleLine1: 'Akka Persistence & Event Sourcing',
    titleLine2: 'Immutable State Ledgers',
    concept: 'CQRS Read/Write Separation, Journaling & Snapshotting at Scale',
    accent: '#D97706',
    secondary: '#FBBF24',
    tags: ['Event Sourcing', 'CQRS', 'Kafka Journal', 'Ledger Architecture'],
    diagramType: 'eventsourcing'
  },
  {
    id: 'future-of-ai-development',
    category: 'ARTIFICIAL INTELLIGENCE',
    titleLine1: 'Future of AI in Software Engineering',
    titleLine2: 'From Code Gen to Agentic Systems',
    concept: 'Deterministic Harnesses, Cyclic Task Planning & Schema Sandboxes',
    accent: '#8B5CF6',
    secondary: '#A78BFA',
    tags: ['Agentic Runtimes', 'LangGraph', 'Temporal Workflows', 'RAG'],
    diagramType: 'ai'
  },
  {
    id: 'microservices-best-practices',
    category: 'SYSTEM ARCHITECTURE',
    titleLine1: 'Microservices Architecture 2026',
    titleLine2: 'Production Engineering Playbook',
    concept: 'Decoupled Datastores, Distributed Saga Patterns & Zero-Monolith Rules',
    accent: '#10B981',
    secondary: '#34D399',
    tags: ['Distributed Saga', 'gRPC Contracts', 'OpenTelemetry', 'Resilience'],
    diagramType: 'microservices'
  },
  {
    id: 'react-server-components',
    category: 'FRONTEND ARCHITECTURE',
    titleLine1: 'Understanding React Server Components',
    titleLine2: 'Streaming SSR & Hydration Boundaries',
    concept: 'Zero-Bundle Server Execution, Suspense Streams & Edge Rendering',
    accent: '#06B6D4',
    secondary: '#38BDF8',
    tags: ['React 19', 'Next.js App Router', 'Streaming SSR', 'Web Vitals'],
    diagramType: 'react'
  },
  {
    id: 'kubernetes-production',
    category: 'CLOUD & SRE',
    titleLine1: 'Running Kubernetes in Production',
    titleLine2: 'Battle-Tested Enterprise Lessons',
    concept: 'Multi-AZ Topology, GitOps with ArgoCD & Automated Pod Autoscaling',
    accent: '#3B82F6',
    secondary: '#60A5FA',
    tags: ['Kubernetes', 'ArgoCD GitOps', 'Cilium eBPF', 'KEDA Scaling'],
    diagramType: 'k8s'
  },
  {
    id: 'mobile-app-performance',
    category: 'MOBILE PLATFORMS',
    titleLine1: 'Optimizing Mobile App Performance',
    titleLine2: '60 FPS Native & Hybrid Runtimes',
    concept: 'Memory Allocation Profiling, Offline SQLite Sync & TurboModules',
    accent: '#F59E0B',
    secondary: '#FCD34D',
    tags: ['Swift Concurrency', 'Kotlin Coroutines', 'React Native', 'Offline-First'],
    diagramType: 'mobile'
  },
  {
    id: 'design-systems-guide',
    category: 'EXPERIENCE ENGINEERING',
    titleLine1: 'Building Scalable Design Systems',
    titleLine2: 'Tokens, Components & Code Connect',
    concept: 'Design Tokens, WCAG AAA Accessibility & Multi-Platform Component Kits',
    accent: '#EC4899',
    secondary: '#F472B6',
    tags: ['Figma Tokens', 'Tailwind / Radix', 'WCAG 2.2 AAA', 'Component Lib'],
    diagramType: 'design'
  },
  {
    id: 'apache-iceberg-metadata-architecture-manifest-lists-snapshots-and-snapshot-isolation',
    category: 'DATA ENGINEERING & BIG DATA',
    titleLine1: 'Apache Iceberg Metadata Architecture',
    titleLine2: 'Manifest Lists & Snapshot Isolation',
    concept: 'Decoupling Dataset Size from Query Planning via Multi-Tier Trees',
    accent: '#0284C7',
    secondary: '#06B6D4',
    tags: ['Apache Iceberg', 'ACID Transactions', 'Object Storage', 'Metadata Trees'],
    diagramType: 'iceberg'
  }
];

function renderDiagram(type, accent, secondary) {
  switch (type) {
    case 'lakehouse':
      return `
        <circle cx="0" cy="0" r="170" stroke="#1E293B" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        <circle cx="0" cy="0" r="120" stroke="${accent}" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="0" cy="0" r="70" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <path d="M -110 -30 C -60 -60, -20 0, 40 -40 C 80 -60, 110 -20, 140 -30" stroke="${secondary}" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"/>
        <path d="M -130 10 C -80 -20, -30 40, 30 0 C 70 -20, 110 20, 130 10" stroke="#06B6D4" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"/>
        <path d="M -110 50 C -60 20, -20 70, 40 30 C 80 10, 110 50, 140 40" stroke="${accent}" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"/>
        <circle cx="0" cy="-120" r="9" fill="${accent}"/>
        <circle cx="104" cy="60" r="7" fill="${secondary}"/>
        <circle cx="-104" cy="60" r="7" fill="#06B6D4"/>
        <rect x="-18" y="-18" width="36" height="36" rx="8" fill="${accent}"/>
      `;
    case 'cluster':
      return `
        <circle cx="0" cy="0" r="160" stroke="#1E293B" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        <circle cx="0" cy="0" r="110" stroke="${accent}" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="0" cy="0" r="60" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <circle cx="0" cy="-110" r="10" fill="${accent}"/>
        <circle cx="95" cy="55" r="8" fill="${secondary}"/>
        <circle cx="-95" cy="55" r="8" fill="#10B981"/>
        <line x1="0" y1="-110" x2="95" y2="55" stroke="${accent}" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
        <line x1="95" y1="55" x2="-95" y2="55" stroke="${secondary}" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
        <line x1="-95" y1="55" x2="0" y2="-110" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
        <rect x="-16" y="-16" width="32" height="32" rx="6" fill="${accent}"/>
      `;
    case 'stream':
      return `
        <rect x="-140" y="-90" width="280" height="180" rx="10" fill="#0D111A" stroke="#1E293B" stroke-width="1.5"/>
        <path d="M -120 -40 L 120 -40" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
        <path d="M -120 0 L 120 0" stroke="${secondary}" stroke-width="3" stroke-linecap="round"/>
        <path d="M -120 40 L 120 40" stroke="#06B6D4" stroke-width="3" stroke-linecap="round"/>
        <circle cx="-60" cy="-40" r="7" fill="${accent}"/>
        <circle cx="30" cy="-40" r="7" fill="${accent}"/>
        <circle cx="-10" cy="0" r="7" fill="${secondary}"/>
        <circle cx="70" cy="0" r="7" fill="${secondary}"/>
        <circle cx="-80" cy="40" r="7" fill="#06B6D4"/>
        <circle cx="10" cy="40" r="7" fill="#06B6D4"/>
      `;
    case 'eventsourcing':
      return `
        <rect x="-150" y="-80" width="300" height="160" rx="10" fill="#0D111A" stroke="#1E293B" stroke-width="1.5"/>
        <path d="M -130 0 L 130 0" stroke="#334155" stroke-width="2"/>
        <circle cx="-100" cy="0" r="14" fill="#0F172A" stroke="${accent}" stroke-width="2"/>
        <text x="-100" y="4" fill="${accent}" font-family="monospace" font-size="10" text-anchor="middle" font-weight="700">e1</text>
        <circle cx="-40" cy="0" r="14" fill="#0F172A" stroke="${secondary}" stroke-width="2"/>
        <text x="-40" y="4" fill="${secondary}" font-family="monospace" font-size="10" text-anchor="middle" font-weight="700">e2</text>
        <circle cx="20" cy="0" r="14" fill="#0F172A" stroke="${accent}" stroke-width="2"/>
        <text x="20" y="4" fill="${accent}" font-family="monospace" font-size="10" text-anchor="middle" font-weight="700">e3</text>
        <circle cx="80" cy="0" r="14" fill="#0F172A" stroke="${secondary}" stroke-width="2"/>
        <text x="80" y="4" fill="${secondary}" font-family="monospace" font-size="10" text-anchor="middle" font-weight="700">e4</text>
        <rect x="110" y="-12" width="24" height="24" rx="4" fill="${accent}"/>
      `;
    case 'k8s':
      return `
        <circle cx="0" cy="0" r="160" stroke="#1E293B" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        <polygon points="0,-100 86,-50 86,50 0,100 -86,50 -86,-50" stroke="${accent}" stroke-width="2" fill="#0F172A" opacity="0.8"/>
        <circle cx="0" cy="-40" r="8" fill="${secondary}"/>
        <circle cx="40" cy="20" r="8" fill="${accent}"/>
        <circle cx="-40" cy="20" r="8" fill="#10B981"/>
        <circle cx="0" cy="0" r="18" fill="${accent}"/>
      `;
    case 'react':
      return `
        <ellipse cx="0" cy="0" rx="140" ry="55" stroke="${accent}" stroke-width="2" fill="none" opacity="0.6"/>
        <ellipse cx="0" cy="0" rx="140" ry="55" stroke="${secondary}" stroke-width="2" fill="none" transform="rotate(60)" opacity="0.6"/>
        <ellipse cx="0" cy="0" rx="140" ry="55" stroke="#38BDF8" stroke-width="2" fill="none" transform="rotate(120)" opacity="0.6"/>
        <circle cx="0" cy="0" r="16" fill="${accent}"/>
      `;
    case 'mobile':
      return `
        <rect x="-65" y="-120" width="130" height="240" rx="18" fill="#0E131F" stroke="${accent}" stroke-width="2"/>
        <rect x="-30" y="-110" width="60" height="8" rx="4" fill="#1E293B"/>
        <rect x="-50" y="-85" width="100" height="40" rx="6" fill="#161F30"/>
        <rect x="-50" y="-35" width="100" height="50" rx="6" fill="#161F30"/>
        <rect x="-50" y="25" width="100" height="60" rx="6" fill="#161F30"/>
        <circle cx="0" cy="100" r="8" fill="${secondary}"/>
      `;
    case 'design':
      return `
        <rect x="-130" y="-90" width="120" height="80" rx="6" fill="#161324" stroke="${accent}" stroke-width="1.5"/>
        <rect x="10" y="-90" width="120" height="80" rx="6" fill="#161324" stroke="${secondary}" stroke-width="1.5"/>
        <rect x="-130" y="10" width="260" height="80" rx="6" fill="#161324" stroke="#475569" stroke-width="1.5"/>
        <circle cx="-70" cy="-50" r="15" fill="${accent}"/>
        <circle cx="70" cy="-50" r="15" fill="${secondary}"/>
        <line x1="-100" y1="50" x2="100" y2="50" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
      `;
    case 'ai':
      return `
        <circle cx="0" cy="0" r="150" stroke="#1E293B" stroke-width="2" fill="none"/>
        <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" stroke="${accent}" stroke-width="2" fill="none" opacity="0.5"/>
        <circle cx="0" cy="-120" r="8" fill="${accent}"/>
        <circle cx="104" cy="-60" r="8" fill="${secondary}"/>
        <circle cx="104" cy="60" r="8" fill="${accent}"/>
        <circle cx="0" cy="120" r="8" fill="${secondary}"/>
        <circle cx="-104" cy="60" r="8" fill="${accent}"/>
        <circle cx="-104" cy="-60" r="8" fill="${secondary}"/>
        <circle cx="0" cy="0" r="24" fill="#0F172A" stroke="${accent}" stroke-width="2"/>
      `;
    case 'microservices':
      return `
        <rect x="-120" y="-70" width="70" height="60" rx="6" fill="#101C1B" stroke="${accent}" stroke-width="1.5"/>
        <rect x="50" y="-70" width="70" height="60" rx="6" fill="#101C1B" stroke="${secondary}" stroke-width="1.5"/>
        <rect x="-35" y="20" width="70" height="60" rx="6" fill="#101C1B" stroke="#06B6D4" stroke-width="1.5"/>
        <line x1="-50" y1="-40" x2="50" y2="-40" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="-85" y1="-10" x2="0" y2="20" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="85" y1="-10" x2="0" y2="20" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
      `;
    default:
      return `
        <circle cx="0" cy="0" r="160" stroke="#1E293B" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        <circle cx="0" cy="0" r="110" stroke="${accent}" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="0" cy="0" r="60" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <circle cx="0" cy="-110" r="8" fill="${accent}"/>
        <circle cx="95" cy="55" r="6" fill="${secondary}"/>
        <circle cx="-95" cy="55" r="6" fill="#10B981"/>
        <rect x="-16" y="-16" width="32" height="32" rx="6" fill="${accent}"/>
      `;
  }
}

function generateSvg(post) {
  const esc = (str) => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="none">
  <defs>
    <linearGradient id="bg-grad-${post.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080B11"/>
      <stop offset="50%" stop-color="#0E1726"/>
      <stop offset="100%" stop-color="#05070B"/>
    </linearGradient>
    <linearGradient id="accent-grad-${post.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${post.accent}"/>
      <stop offset="100%" stop-color="${post.secondary}"/>
    </linearGradient>
    <pattern id="grid-${post.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" stroke-width="0.8" opacity="0.55"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="675" fill="url(#bg-grad-${post.id})"/>
  <rect width="1200" height="675" fill="url(#grid-${post.id})"/>

  <!-- Ambient Radial Glows -->
  <circle cx="980" cy="240" r="380" fill="${post.accent}" opacity="0.14" filter="blur(90px)"/>
  <circle cx="220" cy="520" r="300" fill="${post.secondary}" opacity="0.08" filter="blur(90px)"/>

  <!-- Tech Architectural Visual on Right -->
  <g transform="translate(870, 320)" opacity="0.9">
    ${renderDiagram(post.diagramType, post.accent, post.secondary)}
  </g>

  <!-- Left Content Card -->
  <g transform="translate(90, 130)">
    <!-- Category Badge -->
    <rect x="0" y="0" width="${Math.max(200, post.category.length * 11 + 40)}" height="34" rx="4" fill="#131B2A" stroke="#2B3C55" stroke-width="1.2"/>
    <circle cx="16" cy="17" r="5" fill="${post.accent}"/>
    <text x="32" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">${esc(post.category)}</text>

    <!-- Main Title Line 1 -->
    <text x="0" y="105" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="800" letter-spacing="-0.5">
      ${esc(post.titleLine1)}
    </text>

    <!-- Main Title Line 2 -->
    ${post.titleLine2 ? `<text x="0" y="155" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="800" letter-spacing="-0.5">
      ${esc(post.titleLine2)}
    </text>` : ''}

    <!-- Concept Subtitle -->
    <text x="0" y="${post.titleLine2 ? '210' : '165'}" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400">
      ${esc(post.concept)}
    </text>

    <!-- Tech Tags Bar -->
    <g transform="translate(0, ${post.titleLine2 ? '250' : '205'})">
      ${post.tags.map((t, idx) => `
        <g transform="translate(${idx * 135}, 0)">
          <rect x="0" y="0" width="125" height="28" rx="4" fill="#141C2B" stroke="#25354C" stroke-width="1"/>
          <text x="62" y="18" fill="#CBD5E1" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">${esc(t)}</text>
        </g>
      `).join('')}
    </g>

    <!-- Accent Divider Bar -->
    <rect x="0" y="${post.titleLine2 ? '300' : '255'}" width="80" height="4" rx="2" fill="url(#accent-grad-${post.id})"/>

    <!-- Brand Footer Signature -->
    <g transform="translate(0, 350)">
      <rect x="0" y="-6" width="28" height="28" rx="6" fill="#0F172A" stroke="#334155" stroke-width="1"/>
      <circle cx="14" cy="8" r="5" fill="${post.accent}"/>
      <text x="40" y="14" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" letter-spacing="0.5">DataRadix Engineering Insights</text>
    </g>
  </g>
</svg>`;
}

for (const post of POSTS) {
  const filePath = path.join(outDir, `${post.id}.svg`);
  fs.writeFileSync(filePath, generateSvg(post));
}

console.log(`✅ Successfully generated all ${POSTS.length} high-standard blog cover visuals!`);
