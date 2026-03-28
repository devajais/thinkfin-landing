# ThinkFin AI - Landing Page

**India's First Personal Financial Operating System**

A clean, minimalistic, SEO-optimized landing page built for ThinkFin AI - an AI-powered, hyper-personalized financial advisory platform built for every earning Indian.

## 🚀 Live Site

**URL:** [https://devajais.github.io/thinkfin-landing/](https://devajais.github.io/thinkfin-landing/)

## ✨ Features

- **Clean & Minimalistic Design** - Easy to understand for middle-class Indians
- **Mobile-First Responsive** - Perfect on all devices (320px - 1920px)
- **Smooth Animations** - Framer Motion for engaging user experience
- **SEO Optimized** - Meta tags, sitemap, structured data
- **Fast Performance** - Static site generation with Next.js
- **8 Key Sections:**
  1. Hero Section with stats
  2. Problem Section - "Meet Priya"
  3. Solution Section - Living Financial Persona
  4. Features Section - 5 core modules
  5. Trust Section - Why ThinkFin is different
  6. CTA Section with waitlist form
  7. Footer with contact info

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (GitHub Actions)

## 📦 Installation

```bash
# Clone the repository
git clone git@github.com:devajais/thinkfin-landing.git
cd thinkfin-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 🏗️ Build

```bash
# Build for production
npm run build

# The static site will be generated in the /out directory
```

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Visit the Actions tab to monitor deployment
4. Site will be live at: https://devajais.github.io/thinkfin-landing/

### GitHub Pages Setup

1. Go to Repository Settings → Pages
2. Source: GitHub Actions
3. The workflow is configured in `.github/workflows/deploy.yml`

## 📁 Project Structure

```
thinkfin-landing/
├── .github/workflows/     # GitHub Actions deployment
├── public/                # Static assets
├── src/
│   ├── app/              # Next.js app router
│   │   ├── layout.tsx    # Root layout with SEO
│   │   ├── page.tsx      # Main landing page
│   │   └── sitemap.ts    # Sitemap generation
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Page sections
│   │   ├── ui/           # Reusable UI components
│   │   ├── animations/   # Animation wrappers
│   │   └── features/     # Feature components
│   └── lib/
│       ├── constants.ts  # App constants
│       └── utils.ts      # Utility functions
└── next.config.ts        # Next.js config (static export)
```

## 🎨 Design System

### Brand Colors

- **Primary:** `#1e3a8a` (Deep Blue)
- **Secondary:** `#ea580c` (Orange)
- **Accent:** `#059669` (Green)

### Typography

- **Headings:** Poppins
- **Body:** Inter

### Breakpoints

- **xs:** 320px
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 📞 Contact

- **Email:** devashishjaiswal84@gmail.com
- **Phone:** +91 9653088918

## 🎯 Key Metrics

- **Target Audience:** 200M+ middle-income Indians (₹25K–₹2L/month, 22–40 years old)
- **Market Size:** 500M+ internet users
- **Value Proposition:** Personalized financial advice computed from your reality

## 📝 Content Highlights

- **4 Structural Failures:** Advice Gap, Trust Gap, Complexity Gap, Decision Gap
- **7 Persona Dimensions:** Income, Expenses, Assets, Liabilities, Goals, Career, Risk Profile
- **5 Core Modules:** Decision Engine, Investment Advisor, Insurance Advisor, Law & Tax Intelligence, Proactive Alerts

## 🚀 Performance

- Lighthouse Score Target: 90+
- Page Load: < 2 seconds
- Core Web Vitals: All green
- Mobile-optimized animations

## 📄 License

© 2026 ThinkFin AI. All rights reserved.

---

Built with ❤️ for every earning Indian
