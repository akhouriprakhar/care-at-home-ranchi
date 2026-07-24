care-at-home-ranchi/
├── public/
│   ├── images/
│   │   ├── equipment/       # (O2 concentrators, beds, wheelchairs)
│   │   ├── services/        # (Nursing, elderly care, baby care)
│   │   └── brand/           # (Logo: Navy/Green)
│   └── robots.txt           # Essential for local SEO crawling
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout: Navbar, Footer, Inter/Merriweather fonts
│   │   ├── page.tsx         # Home Page
│   │   ├── about/
│   │   │   └── page.tsx     # Institutional history & Management sign-off
│   │   ├── contact/
│   │   │   └── page.tsx     # Maps, WhatsApp API links, Feasibility Disclaimer
│   │   ├── equipment/
│   │   │   └── page.tsx     # Rental inventory & hygiene protocols
│   │   └── services/
│   │       ├── nursing-care/page.tsx
│   │       ├── elderly-assistance/page.tsx
│   │       └── mother-baby-care/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Sticky, with high-contrast emergency CTA
│   │   │   ├── Footer.tsx   # Contains NAP (Name, Address, Phone) & Feasibility disclaimer
│   │   │   └── MobileMenu.tsx # Ensure links don't conflict with sticky CTAs
│   │   ├── ui/
│   │   │   ├── Button.tsx   # Reusable component with variants (Primary: Navy, Accent: Lime)
│   │   │   ├── ServiceCard.tsx
│   │   │   └── EquipmentCard.tsx # Includes 'Sanitized' badge prop
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── TrustStrip.tsx # "Est. 2017 | Verified | Sanitized"
│   │       └── ScopeDisclaimer.tsx # The polite "Medical Only / No Maids" block
│   ├── constants/
│   │   └── site-data.ts     # JSON objects for services, inventory, and pricing
│   └── styles/
│       └── globals.css      # Tailwind directives & base styles
├── tailwind.config.ts       # Configure #0A2342 (Navy) and #76B900 (Lime Green)
└── next-sitemap.config.js   # Automated sitemap generation for Google Maps/Search