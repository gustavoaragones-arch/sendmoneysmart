# PHASE 1 — PROMPT 02
## SendMoneySmart · QA Audit + Corridor Page Completion + Pre-Publish Checklist

---

## CONTEXT
The homepage is built and visually correct. Now we audit and complete everything
that makes this site publishable and revenue-generating.

This session has ONE job: **make the Canada → India corridor page perfect, 
verify all 6 corridor pages work, and clear every pre-publish gate.**

Do not add new features. Do not refactor working code. 
Fix what's missing. Verify what exists. Ship.

---

## STEP 1 — AUDIT THE CORRIDOR PAGE

Open and visually inspect: `src/app/send-money/[corridor]/page.tsx`

Verify ALL 10 sections exist in this exact order. For each missing section,
build it immediately before moving on.

### SECTION AUDIT CHECKLIST

---

#### ✅ SECTION 1 — SEO HEAD (invisible, but critical)
Verify `generateMetadata()` exports from the corridor page and produces:

```typescript
export async function generateMetadata({ params }) {
  const corridor = getCorridor(params.corridor);
  return {
    title: corridor.meta_title,
    description: corridor.meta_description,
    alternates: { canonical: `https://sendmoneysmart.com/send-money/${corridor.slug}/` },
    openGraph: {
      title: corridor.meta_title,
      description: corridor.meta_description,
      url: `https://sendmoneysmart.com/send-money/${corridor.slug}/`,
      siteName: 'SendMoneySmart',
      type: 'website',
    },
  };
}
```

Verify JSON-LD schema is injected in the page via `<script type="application/ld+json">`:
- [ ] `FAQPage` schema — populated from `corridor.faq` array
- [ ] `BreadcrumbList` schema — Home → Send Money → [Corridor name]
- [ ] Both schemas present as separate `<script>` tags in `<head>`

If either schema is missing, add it now using this pattern in the corridor page component:

```tsx
// In the corridor page Server Component:
const { faqSchema, breadcrumbSchema } = generateCorridorSchema(corridor, results);

// In the JSX return:
<>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
  />
  {/* page content */}
</>
```

---

#### ✅ SECTION 2 — BREADCRUMB NAV (visible, above H1)
Should render: `Home → Send Money → Canada → India`
Each item is a real `<a>` link. Matches the BreadcrumbList schema exactly.

If missing, add this component:

```tsx
// components/corridor/Breadcrumb.tsx
export function Breadcrumb({ corridor }: { corridor: Corridor }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-6">
      <ol className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
        <li><a href="/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition-colors">Home</a></li>
        <li>/</li>
        <li><a href="/send-money/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition-colors">Send Money</a></li>
        <li>/</li>
        <li style={{ color: 'var(--text-primary)' }}>
          {corridor.from_country} → {corridor.to_country}
        </li>
      </ol>
    </nav>
  );
}
```

---

#### ✅ SECTION 3 — H1 + LAST UPDATED
```tsx
<h1 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold mb-2">
  {corridor.h1}
</h1>
<p style={{ color: 'var(--text-muted)' }} className="text-sm mb-8">
  Last updated: {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}
  · Rates are estimates for comparison purposes
</p>
```

The H1 MUST contain the corridor keyword. Example: 
`Best Way to Send Money from Canada to India (2026)`

---

#### ✅ SECTION 4 — DIRECT ANSWER BLOCK
This is the **primary AEO citation target**. It must exist as a visually distinct
box at the top of the page, before the comparison table.

If missing or plain text, replace with this styled component:

```tsx
// components/corridor/DirectAnswerBlock.tsx
export function DirectAnswerBlock({ corridor }: { corridor: Corridor }) {
  return (
    <div 
      className="rounded-xl p-5 mb-8 border"
      style={{ 
        background: 'var(--accent-muted)', 
        borderColor: 'var(--border-accent)' 
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: 'var(--accent)' }} className="text-xs font-semibold uppercase tracking-wider">
          Quick Answer
        </span>
      </div>
      <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }} className="text-base leading-relaxed">
        {corridor.direct_answer}
      </p>
    </div>
  );
}
```

Verify `corridor.direct_answer` is populated in corridors.json for all 6 corridors.

---

#### ✅ SECTION 5 — WINNER CARD
The single most important conversion element. Must be visible **above the fold
on mobile (390px width)**. This is not optional.

The Winner Card shows:
- "🏆 Best Overall" badge
- Provider name + logo
- "Send [typical_amount] → receive [calculated amount] [currency_symbol]"
- Total cost of transfer
- Large teal CTA button: "Send with [Provider] →"

If missing or broken, build it:

```tsx
// components/corridor/WinnerCard.tsx
'use client';
import { TransferResult, Corridor, buildAffiliateUrl, formatCurrency, formatCost } from '@/lib/calculator';

export function WinnerCard({ winner, corridor }: { winner: TransferResult; corridor: Corridor }) {
  const affiliateUrl = buildAffiliateUrl(winner.provider, corridor, corridor.typical_amount);
  
  return (
    <div 
      className="rounded-2xl p-6 mb-8 border-2 relative overflow-hidden"
      style={{ 
        background: 'var(--bg-surface)', 
        borderColor: 'var(--accent)' 
      }}
    >
      {/* Best Overall Badge */}
      <div 
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
        style={{ background: 'var(--accent)', color: '#0A1628' }}
      >
        🏆 Best Overall — Lowest Cost
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            {winner.provider.name}
          </div>
          <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }} className="text-sm">
            Send {corridor.currency_from} {corridor.typical_amount} → receive{' '}
            <span style={{ color: 'var(--accent)' }} className="font-semibold text-base">
              {formatCurrency(winner.amountReceived, corridor.currency_symbol_to)}
            </span>
          </div>
          <div style={{ color: 'var(--text-muted)' }} className="text-xs mt-1">
            Total cost: {formatCost(winner.totalCost, corridor.currency_from)} · {winner.provider.speed}
          </div>
        </div>

        <a
          href={affiliateUrl}
          rel="nofollow sponsored"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ background: 'var(--accent)', color: '#0A1628', fontFamily: 'var(--font-display)' }}
        >
          Send with {winner.provider.name} →
        </a>
      </div>

      <p className="text-xs mt-3" style={{ color: 'var(--text-dim)' }}>
        * {winner.provider.trust_stat} · We may earn a commission — at no extra cost to you.
      </p>
    </div>
  );
}
```

---

#### ✅ SECTION 6 — COMPARISON TABLE
Must include ALL providers in `corridor.popular_providers`. 

Required columns: **Provider | Fees | Exchange Rate | You Receive | Speed | Action**

Critical requirements:
- [ ] Cheapest row has teal left border + subtle teal background tint
- [ ] "You Receive" column shows formatted currency amount (e.g., "₹82,450")
- [ ] "Fees" shows total cost in corridor currency (e.g., "CAD 4.82")
- [ ] "Action" column has affiliate CTA button with `rel="nofollow sponsored"` and UTM params
- [ ] Table is horizontally scrollable on mobile (overflow-x-auto wrapper)
- [ ] Table uses `font-mono` for all numeric data

Verify UTM params are present on EVERY affiliate link:
```
https://wise.com/invite/?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign=canada-to-india
```

If UTM params are missing from any link, fix `buildAffiliateUrl()` in `calculator.ts`.

---

#### ✅ SECTION 7 — CALCULATOR
The calculator is the moat. Verify it fully works:

**Functional requirements:**
- [ ] Amount input defaults to `corridor.typical_amount`
- [ ] Results update on input change (debounced 300ms)
- [ ] Results are RANKED by cheapest first
- [ ] Each result shows: provider name, "You receive: [amount]", "Total cost: [cost]", speed
- [ ] Winner is visually highlighted (teal accent)
- [ ] Results animate on recalculation (fade in)
- [ ] A "Send" CTA button links to provider with UTM params

**Test these amounts on Canada → India:**
- $100 CAD → Wise should be cheapest
- $500 CAD → Wise should be cheapest  
- $5,000 CAD → OFX should challenge for cheapest (no flat fee)

If calculator is missing or broken, build the client component:

```tsx
// components/corridor/Calculator.tsx
'use client';
import { useState, useCallback } from 'react';
import { calculateTransfer, Corridor, buildAffiliateUrl, formatCurrency, formatCost } from '@/lib/calculator';

export function Calculator({ corridor }: { corridor: Corridor }) {
  const [amount, setAmount] = useState(corridor.typical_amount);
  const results = calculateTransfer(amount, corridor, corridor.popular_providers);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) setAmount(val);
  }, []);

  return (
    <div className="rounded-2xl p-6 mb-8" style={{ background: 'var(--bg-surface)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-xl font-bold mb-4">
        Calculate Your Transfer
      </h2>

      {/* Amount Input */}
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="flex items-center gap-2 rounded-xl px-4 py-3 flex-1 border"
          style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
        >
          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }} className="text-sm font-medium">
            {corridor.currency_from}
          </span>
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            min={1}
            className="flex-1 bg-transparent outline-none text-lg font-semibold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          />
        </div>
        <span style={{ color: 'var(--text-muted)' }}>→</span>
        <div 
          className="rounded-xl px-4 py-3 border"
          style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          {corridor.currency_to}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {results.map((result, index) => (
          <div
            key={result.provider.id}
            className="rounded-xl p-4 border flex items-center justify-between gap-4 transition-all"
            style={{
              background: result.is_cheapest ? 'var(--accent-muted)' : 'var(--bg-elevated)',
              borderColor: result.is_cheapest ? 'var(--border-accent)' : 'var(--border)',
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }} className="text-xs w-4">
                #{index + 1}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--text-primary)' }} className="font-semibold text-sm">
                    {result.provider.name}
                  </span>
                  {result.is_cheapest && (
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: 'var(--accent)', color: '#0A1628' }}
                    >
                      Cheapest
                    </span>
                  )}
                  {result.is_fastest && !result.is_cheapest && (
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: 'rgba(255,180,0,0.15)', color: '#FFB400' }}
                    >
                      Fastest
                    </span>
                  )}
                </div>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }} className="text-xs mt-0.5">
                  Cost: {formatCost(result.totalCost, corridor.currency_from)} · {result.provider.speed}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }} className="font-semibold">
                {formatCurrency(result.amountReceived, corridor.currency_symbol_to)}
              </div>
              <a
                href={buildAffiliateUrl(result.provider, corridor, amount)}
                rel="nofollow sponsored"
                target="_blank"
                className="text-xs mt-1 inline-block hover:opacity-80 transition-opacity"
                style={{ color: 'var(--accent)' }}
              >
                Send →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

#### ✅ SECTION 8 — SCENARIO BLOCKS
4 cards answering: **Cheapest | Fastest | Cash Pickup | Large Transfer**

Each card names the winning provider and links to them with UTM params.

If missing, build these as static data derived from the results array:

```tsx
// components/corridor/ScenarioBlocks.tsx
export function ScenarioBlocks({ results, corridor }: { results: TransferResult[]; corridor: Corridor }) {
  const cheapest = results.find(r => r.is_cheapest);
  const fastest = [...results].sort((a, b) => a.speed_minutes - b.speed_minutes)[0];
  const cashPickup = results.find(r => corridor.cash_pickup_providers.includes(r.provider.id));
  const largeTransfer = results.find(r => r.provider.id === 'ofx') || cheapest;

  const scenarios = [
    { icon: '💰', label: 'Cheapest', provider: cheapest, note: 'Lowest total cost' },
    { icon: '⚡', label: 'Fastest', provider: fastest, note: 'Quickest delivery' },
    { icon: '🏪', label: 'Cash Pickup', provider: cashPickup, note: 'Collect in person' },
    { icon: '📦', label: 'Large Transfer', provider: largeTransfer, note: 'Best for $1,000+' },
  ].filter(s => s.provider);

  return (
    <div className="mb-8">
      <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-xl font-bold mb-4">
        Best Option By Situation
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {scenarios.map(({ icon, label, provider, note }) => (
          <a
            key={label}
            href={buildAffiliateUrl(provider!.provider, corridor, corridor.typical_amount)}
            rel="nofollow sponsored"
            target="_blank"
            className="rounded-xl p-4 border text-center transition-all hover:border-teal-400/50 hover:scale-[1.02]"
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-xs font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
            <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{provider!.provider.name}</div>
            <div className="text-xs mt-1" style={{ color: 'var(--text-dim)' }}>{note}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
```

---

#### ✅ SECTION 9 — FAQ ACCORDION
Must render all items from `corridor.faq` array. Minimum 5 FAQs per corridor.

Requirements:
- [ ] Accordion expand/collapse behavior (click to open)
- [ ] Visually clean — one open at a time
- [ ] First FAQ item open by default
- [ ] FAQ content matches the JSON-LD FAQPage schema exactly

Verify `corridors.json` has minimum 5 FAQ items for all 6 corridors.
If any corridor has fewer than 5 FAQs, add them now using the AEO FAQ writing
rules from the strategy doc.

---

#### ✅ SECTION 10 — RELATED CORRIDORS + DISCLAIMER

**Related corridors** — 3 card links at bottom:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
  {corridor.related_corridors.map(slug => {
    const related = getCorridor(slug);
    if (!related) return null;
    return (
      <a key={slug} href={`/send-money/${slug}/`}
        className="rounded-xl p-4 border transition-all hover:border-teal-400/30"
        style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
      >
        <div className="text-lg mb-1">{related.flag_from} → {related.flag_to}</div>
        <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
          {related.from_country} → {related.to_country}
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--accent)' }}>Compare rates →</div>
      </a>
    );
  })}
</div>
```

**Disclaimer** — REQUIRED at bottom of every corridor page (legal obligation per Albor Digital legal docs):
```tsx
<div className="rounded-xl p-4 border mt-8" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
    <strong style={{ color: 'var(--text-muted)' }}>Disclaimer:</strong> Rates and fees shown 
    are estimates based on publicly available provider information and are for comparison 
    purposes only. Actual rates may vary based on payment method, amount, and destination. 
    Always verify the final rate and fees directly with your chosen provider before sending. 
    SendMoneySmart may earn affiliate commissions when you click provider links — at no extra 
    cost to you. Operated by Albor Digital LLC, Wyoming, USA. 
    Contact: <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>
  </p>
</div>
```

---

## STEP 2 — VERIFY ALL 6 CORRIDOR PAGES

Run `npm run dev` and manually visit each URL. Confirm each page loads without errors:

```
http://localhost:3001/send-money/canada-to-india/
http://localhost:3001/send-money/canada-to-philippines/
http://localhost:3001/send-money/canada-to-china/
http://localhost:3001/send-money/usa-to-mexico/
http://localhost:3001/send-money/usa-to-india/
http://localhost:3001/send-money/usa-to-philippines/
```

For each page verify:
- [ ] Page loads with no console errors
- [ ] H1 is corridor-specific (not generic)
- [ ] Direct Answer Block is present and populated
- [ ] Winner Card shows correct cheapest provider
- [ ] Comparison table renders all providers
- [ ] Calculator produces output when amount is changed
- [ ] FAQ accordion has at least 5 items
- [ ] Related corridors link to real pages

---

## STEP 3 — HOMEPAGE FIX

### Fix the Trust Section
In the "Why trust SendMoneySmart?" section, find the **Albor Digital LLC card** and replace it:

**Remove:**
```
Icon: building/info
Title: Albor Digital LLC
Body: Operated transparently from Wyoming, USA
```

**Replace with:**
```tsx
{
  icon: ShieldCheck,  // lucide-react
  title: "Bank-level security",
  body: "All listed providers are regulated financial institutions"
}
```

This stays: 5+ providers compared · Regularly updated · No hidden costs · Bank-level security

---

## STEP 4 — TECHNICAL INFRASTRUCTURE

### 4.1 — sitemap.xml
Create `src/app/sitemap.ts` (Next.js 14 auto-generates sitemap.xml):

```typescript
import { MetadataRoute } from 'next';
import { getAllCorridors } from '@/lib/calculator';

export default function sitemap(): MetadataRoute.Sitemap {
  const corridors = getAllCorridors();
  const baseUrl = 'https://sendmoneysmart.com';

  const corridorPages = corridors.map(c => ({
    url: `${baseUrl}/send-money/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/how-it-works/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...corridorPages,
  ];
}
```

Verify `http://localhost:3001/sitemap.xml` renders correctly after this.

### 4.2 — robots.txt
Create `src/app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://sendmoneysmart.com/sitemap.xml',
  };
}
```

### 4.3 — Root layout meta
Verify `src/app/layout.tsx` has this in the metadata export:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://sendmoneysmart.com'),
  title: { default: 'SendMoneySmart — Find the Cheapest Way to Send Money Abroad', template: '%s | SendMoneySmart' },
  description: 'Compare Wise, Remitly, Western Union and more. Find the cheapest way to send money internationally. Real rates, no hidden fees.',
  openGraph: {
    type: 'website',
    siteName: 'SendMoneySmart',
  },
};
```

### 4.4 — WebSite schema on homepage
Add to `src/app/page.tsx`:

```tsx
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SendMoneySmart",
  "url": "https://sendmoneysmart.com",
  "publisher": {
    "@type": "Organization",
    "name": "Albor Digital LLC",
    "url": "https://albor.digital",
    "contactPoint": { "@type": "ContactPoint", "email": "contact@albor.digital" }
  }
};

// In JSX:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
```

---

## STEP 5 — PRE-PUBLISH BUILD TEST

Run the production build. Zero errors required before publishing:

```bash
npm run build
```

**If build fails**, fix all TypeScript errors before proceeding. Common issues:
- Missing `'use client'` on interactive components (Calculator, FAQAccordion)
- Missing `key` props on list renders
- `any` type warnings — fix with proper types from `calculator.ts`

After successful build, run:
```bash
npm run start
```

Do a final walkthrough at `http://localhost:3001`:

**Final visual QA on Canada → India page:**
- [ ] On 390px width (iPhone): Winner Card visible without scrolling
- [ ] On 390px width: Calculator input is easy to tap
- [ ] On 390px width: Comparison table scrolls horizontally
- [ ] On desktop: Full page looks polished and trustworthy
- [ ] No layout shift when calculator updates
- [ ] All affiliate links open in new tab

---

## STEP 6 — DEPLOY TO VERCEL

Once build passes and visual QA is complete:

```bash
# If Vercel CLI not installed:
npm i -g vercel

# Deploy:
vercel --prod
```

After deployment:

1. **Set production URL** in `next.config.js` if needed
2. **Submit sitemap to Google Search Console:**
   - Go to search.google.com/search-console
   - Add property: `sendmoneysmart.com`
   - Verify via DNS TXT record or HTML file
   - Submit sitemap: `https://sendmoneysmart.com/sitemap.xml`
3. **Request indexing** for these 7 URLs manually in GSC:
   ```
   https://sendmoneysmart.com/
   https://sendmoneysmart.com/send-money/canada-to-india/
   https://sendmoneysmart.com/send-money/canada-to-philippines/
   https://sendmoneysmart.com/send-money/canada-to-china/
   https://sendmoneysmart.com/send-money/usa-to-mexico/
   https://sendmoneysmart.com/send-money/usa-to-india/
   https://sendmoneysmart.com/send-money/usa-to-philippines/
   ```

---

## STEP 7 — POST-DEPLOY VERIFICATION

Visit the live Vercel URL and confirm:
- [ ] `https://[your-domain]/send-money/canada-to-india/` loads correctly
- [ ] `https://[your-domain]/sitemap.xml` is accessible and lists all 7 pages
- [ ] `https://[your-domain]/robots.txt` is accessible
- [ ] View page source on the corridor page — confirm JSON-LD schema is present in `<head>`
- [ ] Click one affiliate link — confirm UTM params are in the URL

---

## DONE DEFINITION

This session is complete when:

```
✅ npm run build passes with zero errors
✅ All 6 corridor pages render with all 10 sections
✅ Calculator produces correct ranked output
✅ All affiliate links have UTM params + rel="nofollow sponsored"
✅ FAQPage + BreadcrumbList JSON-LD on every corridor page
✅ WebSite schema on homepage
✅ sitemap.xml and robots.txt auto-generated
✅ Trust section updated (Albor Digital LLC card removed)
✅ Disclaimer present on every corridor page
✅ Deployed to Vercel
✅ Sitemap submitted to Google Search Console
✅ 7 URLs manually requested for indexing in GSC
```

When all boxes are checked: **SendMoneySmart is live and indexed.**

---

*SendMoneySmart · Phase 1 Prompt 02 · QA + Pre-Publish · Albor Digital LLC*
