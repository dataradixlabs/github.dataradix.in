import fs from 'fs';
import path from 'path';
import { TOPIC_SCHEDULE_PLAN } from './schedulePlan.ts';

// Base launch date: today (November 13, 2026)
const BASE_DATE = new Date('2026-11-13T00:00:00Z');

function formatDate(d: Date): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

function formatIso(d: Date): string {
  return d.toISOString().split('T')[0];
}

export interface CatalogPost {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  author: { name: string; avatar: string; bio: string };
  date: string; // Human formatted, e.g. "November 14, 2026"
  publishDate: string; // ISO date for time-gating, e.g. "2026-11-14"
  readTime: string;
  category: string;
  iconName: string;
  featured: boolean;
  content: string;
}

export const QUEUED_BLOG_POSTS: CatalogPost[] = TOPIC_SCHEDULE_PLAN.map((item, index) => {
  const postDate = new Date(BASE_DATE.getTime() + item.offsetDays * 24 * 60 * 60 * 1000);
  const formattedPublishDate = formatIso(postDate);
  const formattedDisplayDate = formatDate(postDate);

  const content = `
    <p>In modern high-scale technology environments, engineering decisions can no longer be made on intuition alone. As distributed workloads, real-time analytics, and cloud infrastructures expand, technical leaders must balance throughput, latency, maintainability, and total cost of ownership. This in-depth architectural guide breaks down the core patterns behind <strong>${item.title}</strong>.</p>

    <h2>The Core Architectural Problem</h2>
    <p>${item.excerpt}</p>
    <p>Traditional monolithic approaches and brittle script architectures fail when traffic surges or data scales beyond single-node boundaries. Systems must be engineered with explicit failure boundaries, backpressure mechanisms, and deterministic state consistency.</p>

    <h2>Key Technical Pillars & Implementation Patterns</h2>
    <p>When architecting this capability in production, high-performing engineering teams prioritize three non-negotiable principles:</p>
    <ul>
      <li><strong>Deterministic Concurrency & Resource Isolation:</strong> Ensuring worker threads or fiber runtimes do not exhaust connection pools, CPU registers, or heap memory under peak load.</li>
      <li><strong>Schema Evolution & Strict Data Contracts:</strong> Guarding wire protocols and storage schemas against breaking upstream changes.</li>
      <li><strong>End-to-End Observability & Tracing:</strong> Emitting structured metrics, W3C trace contexts, and health checks to detect silent degradations before service SLAs fail.</li>
    </ul>

    <h2>Production Optimization & Best Practices</h2>
    <p>To avoid common operational pitfalls in staging and production:</p>
    <ul>
      <li>Implement automated circuit breakers and exponential backoff on all network boundaries.</li>
      <li>Use lightweight binary serialization formats or memory-mapped storage to minimize garbage-collection pressure.</li>
      <li>Audit your cloud resource allocations to eliminate over-provisioned idle compute.</li>
    </ul>

    <h2>Conclusion & Strategic Takeaways</h2>
    <p>Adopting modern distributed engineering standards ensures your platforms remain resilient, scalable, and cost-efficient. Investing in foundational architecture today prevents multi-million dollar outages and engineering gridlock tomorrow.</p>
  `;

  return {
    id: item.slug,
    image: `/blog/${item.slug}.svg`,
    title: item.title,
    excerpt: item.excerpt,
    author: {
      name: 'Utkarsh',
      avatar: 'U',
      bio: 'Software Development Engineer'
    },
    date: formattedDisplayDate,
    publishDate: formattedPublishDate,
    readTime: `${Math.floor(7 + (index % 5))} min read`,
    category: item.category,
    iconName: 'Database',
    featured: false,
    content: content.trim()
  };
});
