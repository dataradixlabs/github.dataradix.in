# DataRadix Website

Production-ready, multi-page website for DataRadix - an IT Solutions & Technology Services company.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (minimal, tasteful animations)
- **Lucide Icons**
- **Inter Font**

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Pages

- **Home** (`/`) - Hero, services overview, featured case studies, latest blogs
- **About** (`/about`) - Company mission, values, approach, team
- **Services** (`/services`) - Detailed service offerings with CTAs
- **Industries** (`/industries`) - Industry-specific solutions
- **Case Studies** (`/case-studies`) - Listing and individual case study pages
- **Blog** (`/blog`) - Blog listing and individual blog posts
- **Careers** (`/careers`) - Open positions and company culture
- **Contact** (`/contact`) - Contact form and information

## 🎯 Features

### Content
- 5 high-quality blog posts (800-1200 words each)
- 3 detailed case studies with realistic business context
- Real copy throughout (no placeholder text)

### Conversion Elements
- Lead magnet modals (Engineering Readiness Checklist)
- Strategic CTAs across all pages
- Inline CTAs for content engagement
- Final CTA sections on key pages

### Performance & SEO
- Static site generation for fast loads
- SEO-friendly metadata on all pages
- Accessible HTML structure
- Mobile-first responsive design

## 🏗️ Project Structure

```
DataRadix-web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/
│   ├── services/
│   ├── industries/
│   ├── case-studies/
│   ├── blog/
│   ├── careers/
│   └── contact/
├── components/             # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── cta/               # CTA components
│   ├── BlogContent.tsx
│   └── LeadMagnetModal.tsx
├── lib/
│   └── data/              # Static data (blogs, case studies)
└── public/                # Static assets
```

## 🎨 Design Principles

- **Mobile-first**: Responsive design that works on all devices
- **Clean typography**: Excellent readability for long-form content
- **Subtle animations**: Framer Motion for smooth, professional interactions
- **Professional SaaS look**: Modern, clean, enterprise-ready

## 📝 Content Management

Blog posts and case studies are stored as TypeScript data files in `lib/data/`. To add new content:

1. Add blog post to `lib/data/blogs.ts`
2. Add case study to `lib/data/case-studies.ts`
3. Pages will automatically generate static routes

## 🚢 Deployment

The site is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📊 Performance

The site is optimized for:
- 90+ Lighthouse score
- Fast page loads
- SEO best practices
- Accessibility (WCAG compliant)

## 🔧 Development

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Clean, commented code
- Reusable components

### Adding New Pages

1. Create new page in `app/[page-name]/page.tsx`
2. Add route to `components/Header.tsx` navigation
3. Add metadata export for SEO

## 📞 Support

For questions or issues, contact: info@dataradix.in

---

Built with ❤️ by DataRadix
# github.dataradix.in
