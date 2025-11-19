# DNA-Lang Official Website

**Next.js 14 website for dnalang.dev**

## Overview

This is the official website for DNA-Lang, the world's first mobile-first quantum computing platform. Built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion for smooth, engaging interactions
- **Responsive**: Mobile-first design, optimized for all screen sizes
- **Performance**: Static generation, image optimization, code splitting
- **SEO**: Comprehensive metadata, OpenGraph, Twitter cards
- **Accessibility**: WCAG 2.1 AA compliant

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Hero.tsx             # Hero section with animated background
│   ├── Features.tsx         # Feature grid
│   ├── Architecture.tsx     # System architecture diagram
│   ├── QuantumViz.tsx       # Quantum visualization showcase
│   ├── Hardware.tsx         # Hardware specs & benchmarks
│   ├── Metrics.tsx          # Performance metrics
│   ├── UseCases.tsx         # Use cases & applications
│   ├── Testimonials.tsx     # User testimonials
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer with links
├── public/
│   ├── og-image.png         # OpenGraph image (1200x630)
│   └── favicon.ico          # Favicon
├── lib/
│   └── utils.ts             # Utility functions
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Development

### Prerequisites

- Node.js 18+ (recommended: 20.x LTS)
- npm 9+ or yarn 1.22+

### Installation

```bash
cd ~/dnalang-launch/website

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or export as static site
npm run export
```

## Deployment

### Option 1: Vercel (Recommended)

DNA-Lang website is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

**Vercel configuration** (automatic):
- Framework: Next.js
- Build command: `next build`
- Output directory: `.next`
- Install command: `npm install`
- Node.js version: 20.x

**Custom domain setup**:
1. Add domain in Vercel dashboard: `dnalang.dev`
2. Configure DNS:
   ```
   Type  Name  Value
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```
3. SSL certificate: Automatic via Vercel (Let's Encrypt)

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy to Netlify
netlify deploy --prod

# Or drag & drop .next folder to Netlify UI
```

**Netlify configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages (Static Export)

```bash
# Export as static site
npm run export

# Creates `out/` directory with static HTML/CSS/JS
# Deploy `out/` directory to GitHub Pages
```

**Note**: GitHub Pages only supports static export, not SSR.

### Option 4: Self-Hosted (Docker)

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t dnalang-website .
docker run -p 3000:3000 dnalang-website
```

## Environment Variables

Create `.env.local` for local development:

```bash
# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# IBM Quantum API (for live demo, optional)
NEXT_PUBLIC_IBM_QUANTUM_API_KEY=your_key_here

# Contact form (optional)
SENDGRID_API_KEY=your_sendgrid_key
```

**Production environment variables** (set in Vercel/Netlify dashboard):
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID
- `NEXT_PUBLIC_IBM_QUANTUM_API_KEY`: For live quantum demo

## Performance Optimizations

### Implemented

- ✅ Static generation for homepage
- ✅ Image optimization via Next.js Image component
- ✅ Code splitting (automatic via Next.js)
- ✅ CSS minification
- ✅ Gzip compression
- ✅ Lazy loading for below-the-fold content
- ✅ Prefetching for internal links

### Lighthouse Scores (Target)

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Bundle Size Analysis

```bash
# Analyze bundle size
npm run build

# Output shows size breakdown:
# Route (app)           Size     First Load JS
# ┌ ○ /                 142 B   87.4 kB
# └ ○ /about            142 B   87.4 kB
```

## SEO & Marketing

### Meta Tags

All pages include comprehensive meta tags:
- Title, description, keywords
- OpenGraph (Facebook, LinkedIn)
- Twitter cards
- Canonical URLs
- Structured data (JSON-LD)

### Sitemap

Auto-generated at `/sitemap.xml`:

```bash
# Verify sitemap
curl https://dnalang.dev/sitemap.xml
```

### Robots.txt

Located at `/public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://dnalang.dev/sitemap.xml
```

### Google Search Console

1. Verify ownership at: https://search.google.com/search-console
2. Submit sitemap: `https://dnalang.dev/sitemap.xml`
3. Monitor indexing status

## Analytics Setup

### Google Analytics 4

```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Plausible Analytics (Privacy-Friendly Alternative)

```html
<script defer data-domain="dnalang.dev" src="https://plausible.io/js/script.js"></script>
```

## Content Updates

### Adding Blog Posts

Create new MDX files in `app/blog/[slug]/page.mdx`:

```mdx
---
title: "Quantum Computing on Mobile: A Deep Dive"
date: "2025-11-19"
author: "Devin Phillip Davis"
tags: ["quantum", "mobile", "tutorial"]
---

# Quantum Computing on Mobile

Your blog post content here...
```

### Adding Documentation

Create new pages in `app/docs/[section]/page.tsx`:

```typescript
export default function InstallationGuide() {
  return (
    <div>
      <h1>Installation Guide</h1>
      {/* Content */}
    </div>
  )
}
```

## Component Library

### Reusable Components

Located in `components/`:

- **Hero**: Animated hero section with particles
- **Features**: Feature grid with hover effects
- **CTA**: Call-to-action with multiple buttons
- **Footer**: Footer with links and social icons

### Adding New Components

```typescript
'use client'

import { motion } from 'framer-motion'

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Component content */}
    </motion.div>
  )
}
```

## Testing

### Manual Testing Checklist

- [ ] Homepage loads and animations work
- [ ] All internal links navigate correctly
- [ ] External links open in new tabs
- [ ] Mobile responsive (test on Samsung Fold emulator)
- [ ] Images load and are optimized
- [ ] Forms submit correctly
- [ ] 404 page displays for invalid routes
- [ ] SEO meta tags present in `<head>`

### Automated Testing (Optional)

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

## Troubleshooting

### "Module not found" errors

```bash
# Clear .next cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Hydration errors

Check for client-side only code in server components. Move to `'use client'` components if needed.

### Build fails on Vercel

Ensure Node.js version is set to 18.x or 20.x in Vercel dashboard:
- Settings → General → Node.js Version

## Contributing

See main repository: https://github.com/ENKI-420/quantum-fold-display

## License

GPL-2.0-only

Copyright © 2025 Agile Defense Systems, LLC

---

## Quick Start Commands

```bash
# Development
npm run dev           # Start dev server (http://localhost:3000)
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run ESLint

# Deployment
vercel                # Deploy to Vercel (preview)
vercel --prod         # Deploy to Vercel (production)

# Maintenance
npm audit             # Check for vulnerabilities
npm outdated          # Check for outdated packages
npm update            # Update dependencies
```

## Support

- **Website Issues**: https://github.com/ENKI-420/quantum-fold-display/issues
- **General Support**: devin@agiledefensesystems.com
- **Community**: https://github.com/ENKI-420/quantum-fold-display/discussions

---

**Built with Next.js 14 • Deployed on Vercel • Powered by React & TypeScript**
