# PROJECT CONTEXT — CARE AT HOME RANCHI

**Created:** 2026-10-15  
**Domain:** https://careathomeranchi.com/  
**Role:** Healthcare Coordination & Professional Home Care in Ranchi, Jharkhand (Est. 2016)

---

## 1. Verified System Architecture

- **Framework:** Next.js 16.4.0 (App Router, Turbopack)
- **Language & Runtime:** TypeScript 5, React 19.2.4 (React DOM 19.2.4)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss` 4.x) with custom color tokens in `@theme`
- **Animation / Motion:** `framer-motion` 12.42.2
- **Icons:** `lucide-react` 1.26.0
- **Build & Quality:** `next build` (zero errors, 13/13 routes statically prerendered + 1 health endpoint), `eslint` (zero errors)
- **Git Status:** Working directory is currently uninitialized as a git repository (`fatal: not a git repository`). Preserving all user files and configurations in place.

---

## 2. Directory Structure & Canonical Routes

```
src/
├── app/
│   ├── layout.tsx                     # Root layout, fonts, MedicalBusiness JSON-LD schema, global nav & footer
│   ├── page.tsx                       # Homepage with Hero, TrustStrip, Services, Procedures, Slider, FAQ
│   ├── about/page.tsx                 # About Care at Home Ranchi, agency history, coordinator model
│   ├── contact/page.tsx               # Ashok Nagar office details, phone, email, Google Maps iframe
│   ├── reviews/page.tsx               # Verified client feedback directory & ratings
│   ├── services/                      # Services directory
│   │   ├── page.tsx                   # Service catalog overview
│   │   ├── critical-care/page.tsx     # 12h/24h ICU-grade & shift home nursing
│   │   ├── elderly-hygiene/page.tsx   # Senior citizen hygiene, bedridden daily living assistance
│   │   ├── mother-baby-care/page.tsx  # Postnatal maternal & newborn support
│   │   └── physiotherapy/page.tsx     # In-home rehabilitation & physiotherapy
│   ├── api/
│   │   └── health/route.ts            # Lightweight uptime/health endpoint
│   ├── sitemap.ts                     # Dynamic XML sitemap generator
│   └── not-found.tsx                  # 404 handler
├── components/
│   ├── layout/                        # Navbar, MobileMenu, Footer, PreFooterCTA, StickyMobileCTA
│   ├── sections/                      # Hero, TrustStrip, SpecificProcedures, OnboardingProcess, TestimonialSlider, FaqSection
│   ├── services/                      # ServicesDirectoryView, ServiceDetailLayout
│   ├── about/                         # AboutView
│   └── ui/                            # ServiceCard, ContactMap, TrustBadge
├── constants/
│   └── site-data.ts                   # Central source of truth for business contact, services, procedures, reviews
└── styles/
    └── globals.css                    # Tailwind v4 theme, fonts, utility classes
```

---

## 3. Verified Business & Clinical Constraints

1. **Brand Identity:** Care at Home, Ranchi (Established 2016).
2. **Office Location:** Care At Home, In Front Of Tribes India, Opposite Of Ashok Nagar Gate No. 5, Ranchi, Jharkhand 834002.
3. **Primary Phone & Helpline:** `+91-9430156190`
4. **Primary Email:** `careathome24hr@gmail.com`
5. **Exact Geo Coordinates:** Latitude `23.35047`, Longitude `85.28357`
6. **Operating Hours:** Office open Monday – Saturday (Closed Sundays). Care coordination is reachable 24/7 for active patient cases.
7. **Caregiver Verification Policy:** Aadhaar identification & thorough background check. *Strict Rule:* Never claim "police verification" or formal university degree acronyms (`GNM`/`B.Sc`) unless formally documented. Use terms like "nurses, trained caregivers, bedside attendants".
8. **Service Area Reality:** Ashok Nagar, Harmu, Kanke, Bariatu, Morabadi, Doranda, Lalpur, and major Ranchi neighborhoods. *Strict Rule:* Avoid claiming "100% of Ranchi City" as an absolute guarantee.
9. **Superlatives to Correct:** Replace "Hospital-Grade" and "Registered Clinical Agency" with truthful local phrasing: "Professional Clinical Home Care & Patient Attendant Coordination".

---

## 4. Typography Consolidation Decision

- **Previous Problem:** 3 conflicting font families loaded simultaneously:
  1. `Inter` (sans-serif)
  2. `Space Grotesk` (headings — looks like tech/startup)
  3. `Instrument Serif` (decorative slanted italics — breaks healthcare trust)
- **Unified Standard:** Consolidate completely to **`Inter`** (clean, accessible, high-legibility medical sans-serif) for all headings, body text, badges, and CTAs.
- **Visual Tone:** Reassuring, calm, dignified, high contrast, readable on compact mobile screens.
