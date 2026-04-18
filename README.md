# Treadwell Restoration — Website

Next.js 16 + Tailwind v4 + TypeScript. Hosted on Vercel.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Epilogue (display) + Inter (body), via Google Fonts
- **Deployment:** Vercel
- **Domain:** treadwellrestoration.com

## Local Development

```bash
npm install
npm run dev
```

Site runs on http://localhost:3000

## Project Structure

```
src/
  app/                    # Next.js app router pages
    layout.tsx            # Root layout + SEO metadata
    page.tsx              # Homepage
    globals.css           # Tailwind + design tokens
    services/             # /services and dynamic service pages
    service-area/         # /service-area and dynamic city pages
    resources/            # /resources and dynamic article pages
    about/, process/, faq/
    sitemap.ts            # Auto-generated sitemap
    robots.ts             # robots.txt
  components/             # Shared components (Nav, Footer, Icons, etc.)
  content/                # Static content data
    cities.ts             # 12 service cities with local context
    services.ts           # 4 services
    articles.ts           # 5 launch articles
public/
  llms.txt                # LLM/AI-friendly site digest
```

## Content to Fill In

The `/about` page has bracketed placeholders that need to be filled in with real details:
- `[CONTRACTOR NAME]` — founder's name
- `[YEARS]` — years of experience as GC
- `[TYPES OF PROJECTS]` — GC specialty areas
- `[APPROX NUMBER]` — number of projects worked on
- `[CITIES / REGIONS]` — where the GC career was based
- `[A NOTABLE PROJECT...]` — one memorable project or category
- `[ONE OR TWO SENTENCES...]` — personal approach

## Deployment

1. Push to GitHub
2. Import to Vercel (framework auto-detected)
3. Add custom domain: treadwellrestoration.com
4. Update Namecheap DNS:
   - A record @ → 76.76.21.21
   - CNAME www → cname.vercel-dns.com
5. Submit sitemap to Google Search Console + Bing Webmaster Tools
