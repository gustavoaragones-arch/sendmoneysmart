# SendMoneySmart — Decision Log

## 2026 — Project Bootstrap

### ARCH-001: Framework
**Decision**: Next.js 14+ App Router
**Reason**: SSG via `generateStaticParams` for corridor pages = fast load + SEO-friendly. ISR for future live rate updates when live exchange rate API is added.

### ARCH-002: Data layer
**Decision**: JSON files in `/src/data/` (no database at MVP)
**Reason**: Zero infrastructure cost. All data is static/slow-changing. Migrate to DB when live API rates are needed.

### ARCH-003: Calc engine
**Decision**: Approximate rates hardcoded in `calculator.ts`
**Reason**: Live API rates require paid subscriptions. Approximate model with clear disclaimer builds trust while shipping fast. Swap `APPROX_RATES` for live fetch when ready.

### ARCH-004: Styling
**Decision**: Tailwind CSS + CSS variables for design tokens
**Reason**: Fast iteration, no CSS-in-JS overhead, works perfectly with Next.js App Router RSC.

### ARCH-005: Monetization
**Decision**: Affiliate links only at MVP (no ads above fold)
**Reason**: Trust is everything in finance. Ads destroy trust signal. Affiliate CTAs that are genuinely helpful convert better and align with user intent.

### ARCH-006: Dynamic route
**Decision**: Single `/send-money/[corridor]/page.tsx` template for all corridors
**Reason**: One template scales to 100+ corridors automatically. All content pulled from `corridors.json`.

### ARCH-007: Typography
**Decision**: Sora (headings) + IBM Plex Sans (body) + IBM Plex Mono (numbers)
**Reason**: Sora gives confident modern feel for H1s. IBM Plex Sans is readable at small sizes. IBM Plex Mono gives financial-terminal credibility to numeric data.

### ARCH-008: Affiliate link format
**Decision**: All CTAs use `rel="nofollow sponsored" target="_blank"` with UTM params
**Reason**: Google compliance for affiliate links. UTM params enable click tracking per corridor per provider in GA4.
