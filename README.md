# Ehealth — Smart Hospital Management & Community Healthcare Platform

A world-class Next.js 14 website for Ehealth, a digital healthcare platform serving hospitals, clinics, labs, and pharmacies across Kenya and Africa.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Fonts**: Sora (display) + DM Sans (body) via Google Fonts

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd ehealth

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Homepage (all sections)
│   ├── about/page.tsx      # About page
│   ├── features/page.tsx   # Features page
│   ├── pricing/page.tsx    # Pricing page
│   ├── contact/page.tsx    # Contact page
│   └── blog/page.tsx       # Blog & Insights page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky responsive navbar
│   │   └── Footer.tsx      # Full footer
│   └── sections/
│       ├── HeroSection.tsx           # Cinematic hero with dashboard mockup
│       ├── ProblemSection.tsx        # Problem cards with stats
│       ├── SolutionSection.tsx       # Solution overview + workflow
│       ├── ModulesSection.tsx        # 10 interactive module cards
│       ├── BenefitsSection.tsx       # Tabbed benefits by audience
│       ├── HomeVisitSection.tsx      # Mobile app mockup + tracking
│       ├── AnalyticsSection.tsx      # Live Recharts dashboard
│       ├── MarketAndSecurity.tsx     # Market stats + security features
│       └── TestimonialsAndCTA.tsx    # Testimonials + final CTA
├── lib/
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Global styles, Tailwind, CSS variables
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Full homepage with all 12 sections |
| `/about` | Company story, mission, team, timeline |
| `/features` | Complete feature breakdown by module |
| `/pricing` | 3-tier pricing with FAQ |
| `/contact` | Contact form + office locations |
| `/blog` | Blog listing with featured article |

---

## Design System

### Colors
- **Brand Blue**: `#1cbef0` (primary)
- **Emerald Green**: `#10b981` (accent)
- **Navy Dark**: `#0a1628` (background)
- **Navy Mid**: `#0d1f3c` (cards)

### Typography
- **Display**: Sora — headlines, stats, CTAs
- **Body**: DM Sans — paragraphs, UI text
- **Mono**: JetBrains Mono — code, labels

### Key Utilities
- `.glass` — glassmorphism card style
- `.gradient-text` — brand gradient text
- `.gradient-border` — animated gradient border
- `.grid-bg` — dot/grid background pattern
- `.tag-pill` — section label pill
- `.section-pad` — consistent section padding

---

## Customisation

### Updating Content
All content is inline in each section component. Search for the relevant string and update directly — no CMS required for a static deployment.

### Changing Colors
Edit `tailwind.config.js` under `theme.extend.colors` to adjust brand colors. Update CSS variables in `globals.css` to match.

### Adding Pages
Create a new folder under `src/app/` with a `page.tsx` file. Import `Navbar` and `Footer` from `@/components/layout`.

### Connecting a Backend
The contact form in `/contact` renders as static HTML. To make it functional:
1. Add a server action in `src/app/contact/actions.ts`
2. Add `action={submitForm}` to the form
3. Or connect to a service like Resend, Formspree, or your own API

---

## Environment Variables

No environment variables are required for the static build. If you add backend integrations, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://ehealth.africa
RESEND_API_KEY=your_key_here
# etc.
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export
Add `output: 'export'` to `next.config.js`, then run `npm run build`. Output goes to `/out`.

---

## License
© 2025 Ehealth Africa Ltd. All rights reserved.
