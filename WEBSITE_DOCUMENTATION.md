# Care at Home, Ranchi - Complete Project Documentation & Build History

> **AUTOMATION DIRECTIVE FOR ANTIGRAVITY CLI**: Every time a modification, build, or command is executed by the agent/CLI on this project, this file (`WEBSITE_DOCUMENTATION.md`) MUST be updated with the logged changes, new features, and structural updates for full clarity and compositeness.

---

## 1. Brand Identity & Organizational Context

- **Business Name**: Care at Home, Ranchi
- **Established Year**: 2016
- **Headquarters Address**: Care at Home, 5, in front of TRIBES INDIA, opposite of Ashok Nagar Road, Ashok Kunj, Harmu Housing Colony, Delatoli, Ranchi, Jharkhand 834002, India
- **Contact Number**: `+91-9430156190`
- **Email**: `careathome24hr@gmail.com`
- **Hours of Operation**: 24/7 / 365 Days Continuous Duty
- **Market Standing**: 4.7 / 5 Stars based on 146+ verified client reviews (Google & Justdial).
- **Scope of Service**: Specialized clinical home nursing care, bed baths, patient hygiene, tracheostomy suctioning, catheter flushing, Ryles tube feeding, post-surgical wound dressing, colostomy care, and in-home physiotherapy. *(Strictly NO domestic maids, house cleaning, or cooking services)*.

---

## 2. Technical Stack & Architecture

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphic utilities
- **Typography**: `Plus_Jakarta_Sans` (Sans-serif body) & `Merriweather` (Serif titles)
- **Icons**: Lucide React (Clean vector SVG medical icons, zero text emojis)
- **Animations**: Framer Motion
- **Maps**: Real embedded Google Maps iframe targeting Gate No. 5, Ashok Nagar, Ranchi

---

## 3. Design System & Theme Rules

1. **Color Palette**:
   - Primary Deep Navy: `#0C364A`
   - Clinical Teal: `#20AD96`
   - Lime Green Accent: `#8EC63F`
   - Surface Light Backgrounds: `#F8FAFC` & `#FFFFFF`
   - Border Elements: `#E2E8F0` & `#CBD5E1`
2. **Pill Badges**: All section subheaders, trust badges, and category labels are enclosed in uniform pill container styling (`rounded-full border px-3.5 py-1.5 text-xs font-bold`).
3. **Single Navbar Call CTA**:
   - Primary Call CTA ("Call Us") is positioned **EXCLUSIVELY** in the Navbar header (`Navbar.tsx`).
   - Duplicate inline call buttons and phone strings across body components have been completely purged for a clean, non-repetitive presentation.
   - All text emojis have been purged and replaced with authentic vector SVG medical icons.

---

## 4. Chronological Implementation History

### Phase 1: Foundation & Corporate Framework
- Established Next.js App Router layout with `Plus_Jakarta_Sans` and `Merriweather` font configurations.
- Created `site-data.ts` containing `BRAND_DATA`, `SPECIFIC_PROCEDURES`, `SERVICES_LIST`, `REVIEWS_DATA`, and `FAQ_DATA`.

### Phase 2: Design Overhaul & UI Refinement
- Configured sleek header navigation with logo + **Care at Home, Ranchi** title and live operational status (`Ranchi, Jharkhand`).
- Built `ContactMap.tsx` featuring the real embedded Google Maps iframe for Gate No. 5, Ashok Nagar, Ranchi.
- Integrated 50+ real client reviews from Google and Justdial into an auto-rotating testimonial carousel.

### Phase 3: Single-Channel Call Directives & Brand Safety
- Completely removed all WhatsApp triage popups and links.
- Streamlined all CTA buttons to concise phone call triggers (`tel:+91-9430156190`).
- Purged all personal founder names across the entire codebase to maintain strict institutional authority.

### Phase 4: Navbar Optimization & Uniform Pill Badging
- Simplified Navbar link text from `Reviews (146+)` to **"Reviews"**.
- Standardized section header badge styling using uniform pill container components across `TestimonialSlider`, `OnboardingProcess`, `SpecificProcedures`, and `ScopeDisclaimer`.
- Created `WEBSITE_DOCUMENTATION.md` in the project root to maintain continuous build history.

### Phase 5: Button De-duplication & Fixed Height Review Card
- Removed duplicate inline Call Helpline buttons from component bodies.
- Fixed Testimonial Card container height (`min-h-[300px]`) and sorted reviews chronologically (Most Recent to Older) without numerical counters.
- Purged all remaining WhatsApp intake mentions from the Contact page and forms.

### Phase 6: Vector SVG Icons & Exclusive Single Navbar CTA
- Restricted call actions to **EXCLUSIVELY** one "Call Us" button in the Navbar.
- Disabled `EmergencyCallFAB` and removed call buttons from `StickyMobileCTA`, `Hero`, `OnboardingProcess`, `SpecificProcedures`, and `ServiceCard`.
- Integrated clean medical vector SVG icons on service cards and sub-pages.
- Added Framer Motion layoutId spring navigation animations on the Navbar.

### Phase 7: Full-Size Multi-Section Service Pages Layout
- Expanded service detail pages into rich, full-size multi-section clinical layouts:
  - *Full-width hero header banner* with category vector badges and breadcrumbs.
  - *2-Column grid* for Prescribed Medical Procedures vs Daily Caregiver Duties.
  - *Shift Model Availability Matrix* (12h Day / 12h Night / 24h Full-Time).
  - *Serviceable Ranchi Neighborhoods Grid*.

### Phase 11: Global Layout Stability & White Gap Elimination (Phase 1)
- Audited all section containers (`ServiceDetailLayout.tsx`, `ServicesDirectoryView.tsx`, `AboutView.tsx`, `page.tsx`).
- Replaced section outer margins (`mt-16`, `my-12`) with full-width section padding (`py-10 sm:py-14`).
- Applied outer section background colors (`bg-[#0C364A]`, `bg-[#F8FAFC]`) directly to outermost `<section>` elements, eliminating all white line gaps.

### Phase 12: Service Page De-duplication & Shift Matrix Refactor (Phase 2)
- Refactored `ServiceDetailLayout.tsx` shift matrix across all 4 service detail pages to display strictly 3 standard options: **12-Hour Shift (Day/Night)**, **24-Hour Continuous (1 Attendant)**, and **24-Hour Split (2 Alternating Attendants)**.
- Removed the repetitive "Serving 100% of Localities Across Ranchi" banner from `ServiceDetailLayout.tsx` template, restricting it exclusively to the Home and About pages.

### Phase 13: Component Refinements & Accuracy Corrections (Phase 3)
- Corrected office operating hours across site data: **Administrative Office Desk: Mon–Sat (Closed Sundays) • Patient Clinical Care & Deployments: 24/7/365**.
- Updated `TestimonialSlider.tsx` with Framer Motion touch-drag swipe gestures (`drag="x"`) while preserving `line-clamp-4` overflow protection.
- Applied `glass-panel-dark` and `glass-panel-light` shadow utilities to `contact/page.tsx` cards for balanced visual weight. Verified `loading="lazy"` on embedded Google Maps iframe.
- Injected a transitional banner (**"Sanitized Equipment & Verified Clinical Personnel"**) with a `#F8FAFC` background in `AboutView.tsx` above the footer.
- Restricted `MobileMenu.tsx` drawer height (`max-h-[calc(100vh-125px)]`) so it opens cleanly without overlapping or obscuring `StickyMobileCTA.tsx`.

### Phase 14: Quality Assurance, Link Audit & CLS Verification (Phase 4)
- Audited `ServicesDirectoryView.tsx` and all internal navigation buttons; confirmed all dynamic service route links (`/services/critical-care`, `/services/elderly-hygiene`, `/services/mother-baby-care`, `/services/physiotherapy`) resolve cleanly.
- Confirmed Navbar Framer Motion dropdown and active indicators rely on absolute positioning, preserving zero CLS layout stability scores.
- Ran `npm run build` with 100% clean static page generation.

### Phase 25: Comprehensive Mobile-First Responsiveness Audit & Fluid Optimization
- **Horizontal Overflow Prevention**: Applied `overflow-x: hidden !important; max-width: 100vw;` to `html`, `body`, and main layout container ([layout.tsx](file:///home/prakhar/projects/care-at-home-ranchi/src/app/layout.tsx) & [globals.css](file:///home/prakhar/projects/care-at-home-ranchi/src/styles/globals.css)), preventing horizontal scrollbars caused by off-screen Framer Motion initial states.
- **Responsive Stacking**: Enforced vertical stacking (`flex-col` / `grid-cols-1`) on mobile viewports for all card grids, contact action buttons, and feature panels, breaking cleanly to multi-column layouts at `sm:`, `md:`, and `lg:` breakpoints.
- **Fluid Widths**: Converted fixed widths across [TestimonialSlider.tsx](file:///home/prakhar/projects/care-at-home-ranchi/src/components/sections/TestimonialSlider.tsx), [ServiceCard.tsx](file:///home/prakhar/projects/care-at-home-ranchi/src/components/ui/ServiceCard.tsx), and [Navbar.tsx](file:///home/prakhar/projects/care-at-home-ranchi/src/components/layout/Navbar.tsx) to fluid widths (`w-full`, `max-w-4xl`, `max-[#90vw]`).
- **Mobile Navigation Harmony**: Added `pb-16 sm:pb-0` to the main viewport wrapper to guarantee [StickyMobileCTA.tsx](file:///home/prakhar/projects/care-at-home-ranchi/src/components/layout/StickyMobileCTA.tsx) does not block bottom content, maintaining 100% overlay harmony with [MobileMenu.tsx](file:///home/prakhar/projects/care-at-home-ranchi/src/components/layout/MobileMenu.tsx) (`z-[60]`).
- Verified production build with `npm run build` (100% clean static prerendering across all 12 routes).

---

## 5. Directory Structure & Key Files

```
care-at-home-ranchi/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with font providers, overflow-x-hidden & pb-16 sm:pb-0 wrapper
│   │   ├── page.tsx                  # Home page (flush hero banner & space-optimized layout)
│   │   ├── about/page.tsx            # Agency history & clinical standards
│   │   ├── contact/page.tsx          # Friendly, simplified contact page with exact address format
│   │   ├── reviews/page.tsx          # Full client reviews listing
│   │   ├── services/                 # Services directory & individual pages
│   │   │   ├── critical-care/page.tsx
│   │   │   ├── elderly-hygiene/page.tsx
│   │   │   ├── mother-baby-care/page.tsx
│   │   │   └── physiotherapy/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Header with logo title, fluid dropdown & sole Call Us button
│   │   │   ├── Footer.tsx            # Corporate footer & clinical disclaimer
│   │   │   ├── StickyMobileCTA.tsx   # Mobile-only office directions bar
│   │   │   └── MobileMenu.tsx        # Mobile menu navigation drawer (z-[60])
│   │   ├── about/
│   │   │   └── AboutView.tsx         # Interactive client component for About Us page
│   │   ├── services/
│   │   │   ├── ServiceDetailLayout.tsx # Reusable client component for 4-section service pages
│   │   │   └── ServicesDirectoryView.tsx # Flush client directory view with procedure badges
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Clean, concise hero section with Serving Ranchi Since 2016 bubble
│   │   │   ├── OnboardingProcess.tsx # 4-step deployment workflow with integrated Commitment banner
│   │   │   ├── SpecificProcedures.tsx# Detailed medical procedure cards with tight padding
│   │   │   ├── TestimonialSlider.tsx # Touch-swipe client review slider with fluid max-w-4xl width
│   │   │   └── FaqSection.tsx       # Frequently Asked Questions accordion section
│   │   └── ui/
│   │       ├── ContactMap.tsx        # Real Google Maps iframe (zoomed-in close-up view & exact address)
│   │       └── ServiceCard.tsx       # Service card with vector SVG icons and fluid w-full layout
│   └── constants/
│       └── site-data.ts              # Core constants, exact address, office hours & review data
└── WEBSITE_DOCUMENTATION.md          # Project history log
```

---

## 6. Execution Log (Maintained by Antigravity CLI)

| Date / Timestamp | Action Executed | Summary of Work Done | Verification Status |
| :--- | :--- | :--- | :--- |
| **2026-07-23** | Initial Refactoring | Removed TopBar, updated logo title, established site constants | Passed (`npm run build`) |
| **2026-07-23** | Map & Reviews Update | Embedded real Google Map iframe, added 50+ Google/Justdial reviews | Passed (`npm run build`) |
| **2026-07-23** | Call-Only Intake | Removed WhatsApp triage, streamlined buttons to compact 'Call Us' links | Passed (`npm run build`) |
| **2026-07-23** | Pill Badges & Navbar | Simplified Navbar review links, added pill subheaders, generated docs | Passed (`npm run build`) |
| **2026-07-23** | De-duplication & Fixes | Removed duplicate Call buttons, fixed review card height, purged WhatsApp | Passed (`npm run build`) |
| **2026-07-23** | Vector SVG & Navbar | Single Navbar Call CTA, SVG service icons, Framer Motion nav indicator | Passed (`npm run build`) |
| **2026-07-23** | Service Page Layout | Full-size multi-section layout for clinical service detail pages | Passed (`npm run build`) |
| **2026-07-23** | Documentation Check | Verified WEBSITE_DOCUMENTATION.md with mandatory CLI automation directive | Passed (`npm run build`) |
| **2026-07-23** | Balanced Service Pages & Navbar | Re-architected all 4 service pages with unified layout, Framer Motion animations & enhanced Navbar | Passed (`npm run build`) |
| **2026-07-23** | City-Wide Coverage & Spacing | Replaced location lists with 100% Ranchi city-wide coverage banner, tightened white gaps, overhauled About Us | Passed (`npm run build`) |
| **2026-07-23** | Contact Simplification & Color Harmony | Removed contact lead form, streamlined contact page to call helpline & map, smoothed dark-vs-white color contrast | Passed (`npm run build`) |
| **2026-07-23** | 4-Phase System Refactor | Fixed white gap lines, refactored 3-option Shift Matrix, updated office Sunday closure info, touch-swipe reviews | Passed (`npm run build`) |
| **2026-07-23** | Header Flush & Hero Redesign | Eradicated navbar-to-header white gaps on Home/Contact/Reviews, updated image text to Care at Home, expanded hero tagline | Passed (`npm run build`) |
| **2026-07-23** | Space Optimization & Map Zoom | Integrated scope statement into FAQ, tightened onboarding/procedure spacing, zoomed Google map to street view | Passed (`npm run build`) |
| **2026-07-23** | Contact Overhaul & Services Gap Fix | Redesigned contact panel to 3 high-trust cards matching brand theme, eliminated top gap on main services page | Passed (`npm run build`) |
| **2026-07-23** | Address & Phrasing Refinement | Simplified contact language, purged 24/7 claims, set exact address, shortened hero bubble | Passed (`npm run build`) |
| **2026-07-23** | Scope Positioning & Warm Hero Touch | Repositioned ScopeDisclaimer between reviews and FAQs, softened Hero text with warm family-focused touch | Passed (`npm run build`) |
| **2026-07-23** | In-Flow Integration of Scope Statement | Removed standalone Scope section, integrated Commitment statement directly inside OnboardingProcess | Passed (`npm run build`) |
| **2026-07-23** | Hero Enlargement & Bubble Refinement | Enlarged Hero section to 78vh, updated pill bubble to Caring for Families Since 2016 | Passed (`npm run build`) |
| **2026-07-23** | Hero Proportions Adjustment | Adjusted Hero section padding to py-10 md:py-16 for balanced, dignified layout | Passed (`npm run build`) |
| **2026-07-23** | Hero Restructure to High-Impact Design | Restored Hero component to high-impact headline structure and original rich subheader text | Passed (`npm run build`) |
| **2026-07-23** | Hero Reversion to Concise Structure | Restored Hero component to concise headline and bubble tagline structure | Passed (`npm run build`) |
| **2026-07-23** | Mobile-First Responsiveness Audit | Applied overflow-x hidden, fluid max-widths, responsive vertical stacking & navigation harmony | Passed (`npm run build`) |















