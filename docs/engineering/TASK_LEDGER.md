# TASK LEDGER — CARE AT HOME RANCHI

**Last Updated:** 2026-10-15  
**Orchestrator:** Principal Software Architect & Lead Full-Stack Engineer  
**Status Key:** `PENDING` | `IN_PROGRESS` | `VERIFIED` | `BLOCKED`

---

## Workstream A: Typography Consolidation & Visual Simplicity (Priority: P0)

| Task ID | Task Description | Target Files | Status | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **A-1** | Remove `Space Grotesk` & `Instrument Serif` font imports and definitions. Set `Inter` as the single font family across headings and body. | `src/styles/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx` | `VERIFIED` | `next build` passes, zero external font mismatches |
| **A-2** | Replace decorative `font-serif italic text-gradient-lime` styling in Hero heading with dignified, high-contrast sans-serif styling. | `src/components/sections/Hero.tsx` | `VERIFIED` | Visual inspection & build check |
| **A-3** | Replace decorative `font-serif italic text-gradient-lime` styling in PreFooterCTA with consistent, professional sans-serif styling. | `src/components/layout/PreFooterCTA.tsx` | `VERIFIED` | Visual inspection & build check |
| **A-4** | Replace decorative `font-serif` heading styling in ServicesDirectoryView with clean sans-serif typography. | `src/components/services/ServicesDirectoryView.tsx` | `VERIFIED` | Visual inspection & build check |
| **A-5** | Standardize review quotes in TestimonialSlider and reviews page from italic serif to clean, readable sans-serif. | `src/components/sections/TestimonialSlider.tsx`, `src/app/reviews/page.tsx` | `VERIFIED` | Visual inspection & build check |

---

## Workstream B: Healthcare Trust & Content Integrity (Priority: P0)

| Task ID | Task Description | Target Files | Status | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **B-1** | Correct unverified "100% of Ranchi City" claims to realistic neighborhood coverage (Ashok Nagar, Harmu, Kanke, Bariatu, Morabadi, Doranda, Lalpur). | `src/app/page.tsx`, `src/components/sections/Hero.tsx`, `src/components/about/AboutView.tsx` | `VERIFIED` | Content grep check & build check (zero remaining instances) |
| **B-2** | Replace "Hospital-Grade" and "Registered Clinical Agency" claims with truthful local service positioning ("Professional Clinical Home Care & Patient Attendant Coordination"). | `src/constants/site-data.ts`, `src/app/page.tsx`, `src/components/sections/Hero.tsx`, `src/components/about/AboutView.tsx` | `VERIFIED` | Content audit & build check (zero remaining instances) |
| **B-3** | Audit caregiver qualifications across service descriptions to adhere strictly to non-degree, background-verified terminology. | `src/constants/site-data.ts`, `src/components/sections/OnboardingProcess.tsx`, `src/components/about/AboutView.tsx` | `VERIFIED` | Purged GNM/B.Sc acronyms; build check |

---

## Workstream C: Conversion & Contact Integrity (Priority: P1)

| Task ID | Task Description | Target Files | Status | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **C-1** | Verify all direct phone links (`tel:+91-9430156190`) and Google Maps directions links (`https://maps.app.goo.gl/JQuKiimKwetQJcY29`) across mobile FABs, header, footer, and contact desk. | `src/components/layout/Navbar.tsx`, `src/components/layout/StickyMobileCTA.tsx`, `src/components/layout/Footer.tsx`, `src/app/contact/page.tsx` | `VERIFIED` | Verified destination links in source code |
| **C-2** | Purged WhatsApp direct messaging across hero, navbars, and CTAs in favor of primary Direct Calling to prevent unmonitored messaging backlogs. | All layout and CTA components | `VERIFIED` | 100% WhatsApp purge verified across components |
| **C-3** | Fix "Ranchi" character clipping glitch caused by WebKit background clipping on italic spans. | `src/app/contact/page.tsx`, `src/app/reviews/page.tsx`, `src/components/about/AboutView.tsx` | `VERIFIED` | Solid color styling applied, zero character clipping |

---

## Workstream D: Technical SEO, Accessibility & Verification (Priority: P1)

| Task ID | Task Description | Target Files | Status | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **D-1** | Validate `MedicalBusiness` JSON-LD schema with exact Ashok Nagar coordinates and areas served. | `src/app/layout.tsx` | `VERIFIED` | Verified coordinates (23.35047, 85.28357) & areaServed array |
| **D-2** | Run full production build, TypeScript compiler checks, and ESLint verification. | All project files | `VERIFIED` | `npm run build && npm run lint` exit code 0 |
| **D-3** | Log comprehensive execution report in `WEBSITE_DOCUMENTATION.md`. | `WEBSITE_DOCUMENTATION.md` | `VERIFIED` | Updated documentation log |

---

## Workstream E: Cloudflare Pages Deployment & Repository Synchronization (Priority: P0)

| Task ID | Task Description | Target Files | Status | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **E-1** | Configure Next.js static export (`output: 'export'`) in `next.config.ts` for clean Cloudflare Pages static compilation. | `next.config.ts` | `VERIFIED` | `npm run build` generates `out/` with 13 static routes + 1 static API |
| **E-2** | Add `public/_headers` for edge-served HTTP security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy). | `public/_headers` | `VERIFIED` | File created and copied into `out/_headers` on build |
| **E-3** | Configure `/api/health` with `export const dynamic = 'force-static'` to ensure zero runtime compilation failures. | `src/app/api/health/route.ts` | `VERIFIED` | Pre-rendered to `out/api/health` JSON successfully |
| **E-4** | Stage, commit with message `modified base ui`, and push to remote `origin/main`. | Git repository | `VERIFIED` | Production commit and remote push completed cleanly |

