# PHASE 1 — PROMPT 01
## SendMoneySmart · Project Bootstrap + Master Corridor Page

---

## CONTEXT
You are the **Project Lead** for **SendMoneySmart** — a remittance comparison engine.
You hold three roles simultaneously: **Lead Programmer**, **UX Director**, **Marketing Director**.

This is the first development session. You are building from zero.
Your output in this session becomes the **master template** for all 100+ corridor pages.
Get this right and the rest scales automatically.

Operator: **Albor Digital LLC** (Wyoming, USA) — `albor.digital`
Legal footer reference: contact@albor.digital

---

## SESSION OBJECTIVE
Bootstrap the entire Next.js project AND build the first production corridor page:
`/send-money/canada-to-india/`

This page IS the product. Every future page is generated from its template.

---

## STEP 1 — PROJECT SCAFFOLD

Run the following to initialize the project:

```bash
npx create-next-app@latest sendmoneysmart \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
cd sendmoneysmart
npm install lucide-react clsx
```

---

## STEP 2 — FILE STRUCTURE TO CREATE

Scaffold this exact structure. Do not deviate:

```
sendmoneysmart/
├── src/
│   ├── app/
│   │   ├── layout.tsx                         ← Root layout (fonts, meta, nav, footer)
│   │   ├── page.tsx                           ← Homepage
│   │   ├── send-money/
│   │   │   └── [corridor]/
│   │   │       └── page.tsx                   ← Dynamic corridor page (SSG)
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── corridor/
│   │   │   ├── DirectAnswerBlock.tsx
│   │   │   ├── WinnerCard.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── Calculator.tsx
│   │   │   ├── ScenarioBlocks.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── RelatedCorridors.tsx
│   │   └── ui/
│   │       ├── TrustBar.tsx
│   │       └── AffiliateCTA.tsx
│   ├── lib/
│   │   ├── calculator.ts                      ← Core cost calculation engine
│   │   ├── corridors.ts                       ← Corridor data helpers
│   │   └── seo.ts                             ← Title/meta/schema generators
│   └── data/
│       ├── providers.json                     ← All provider data
│       └── corridors.json                     ← All corridor configs
├── public/
│   └── logos/                                 ← Provider SVG logos (placeholders ok)
├── CLAUDE.md                                  ← Project rules (paste full system prompt here)
└── DECISIONS.md                               ← Architectural decision log
```

---

## STEP 3 — DATA FILES

### `/src/data/providers.json`
Create this file with EXACTLY these providers:

```json
{
  "wise": {
    "id": "wise",
    "name": "Wise",
    "logo": "/logos/wise.svg",
    "color": "#9FE870",
    "fee_flat_cad": 1.50,
    "fee_flat_usd": 1.00,
    "fee_percent": 0.0065,
    "fx_margin": 0.00,
    "speed": "1–2 days",
    "speed_minutes": 2880,
    "affiliate_url": "https://wise.com/invite/",
    "affiliate_params": "?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign=",
    "tags": ["low_cost", "bank_transfer", "transparent", "mid_market_rate"],
    "trust_stat": "16M+ customers worldwide",
    "regulated": true,
    "cash_pickup": false,
    "min_transfer": 1,
    "max_transfer": 1000000,
    "description": "Best for low fees and the real exchange rate"
  },
  "remitly": {
    "id": "remitly",
    "name": "Remitly",
    "logo": "/logos/remitly.svg",
    "color": "#E8174B",
    "fee_flat_cad": 0,
    "fee_flat_usd": 0,
    "fee_percent": 0.015,
    "fx_margin": 0.01,
    "speed": "Minutes–hours",
    "speed_minutes": 60,
    "affiliate_url": "https://www.remitly.com/",
    "affiliate_params": "?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign=",
    "tags": ["fast", "cash_pickup", "mobile_first", "express"],
    "trust_stat": "Available in 170+ countries",
    "regulated": true,
    "cash_pickup": true,
    "min_transfer": 1,
    "max_transfer": 30000,
    "description": "Best for speed and cash pickup"
  },
  "western_union": {
    "id": "western_union",
    "name": "Western Union",
    "logo": "/logos/western-union.svg",
    "color": "#FFDD00",
    "fee_flat_cad": 5.00,
    "fee_flat_usd": 5.00,
    "fee_percent": 0.005,
    "fx_margin": 0.025,
    "speed": "Minutes–1 day",
    "speed_minutes": 30,
    "affiliate_url": "https://www.westernunion.com/",
    "affiliate_params": "?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign=",
    "tags": ["cash_pickup", "trusted", "global_network", "instant"],
    "trust_stat": "500,000+ agent locations",
    "regulated": true,
    "cash_pickup": true,
    "min_transfer": 1,
    "max_transfer": 50000,
    "description": "Best for cash pickup and instant transfers"
  },
  "xoom": {
    "id": "xoom",
    "name": "Xoom (PayPal)",
    "logo": "/logos/xoom.svg",
    "color": "#003087",
    "fee_flat_cad": 2.99,
    "fee_flat_usd": 2.99,
    "fee_percent": 0.008,
    "fx_margin": 0.02,
    "speed": "Minutes–2 days",
    "speed_minutes": 120,
    "affiliate_url": "https://www.xoom.com/",
    "affiliate_params": "?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign=",
    "tags": ["paypal_backed", "fast", "trusted", "usa_strong"],
    "trust_stat": "Backed by PayPal",
    "regulated": true,
    "cash_pickup": true,
    "min_transfer": 10,
    "max_transfer": 50000,
    "description": "Best for PayPal users and USA senders"
  },
  "ofx": {
    "id": "ofx",
    "name": "OFX",
    "logo": "/logos/ofx.svg",
    "color": "#00A9CE",
    "fee_flat_cad": 0,
    "fee_flat_usd": 0,
    "fee_percent": 0,
    "fx_margin": 0.015,
    "speed": "1–2 days",
    "speed_minutes": 2880,
    "affiliate_url": "https://www.ofx.com/",
    "affiliate_params": "?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign=",
    "tags": ["large_transfers", "no_fee", "bank_rate", "business"],
    "trust_stat": "No transfer fees, ever",
    "regulated": true,
    "cash_pickup": false,
    "min_transfer": 1000,
    "max_transfer": 1000000,
    "description": "Best for large transfers over $1,000"
  }
}
```

### `/src/data/corridors.json`
```json
{
  "canada-to-india": {
    "slug": "canada-to-india",
    "from_country": "Canada",
    "to_country": "India",
    "from_code": "CA",
    "to_code": "IN",
    "currency_from": "CAD",
    "currency_to": "INR",
    "currency_symbol_to": "₹",
    "flag_from": "🇨🇦",
    "flag_to": "🇮🇳",
    "popular_providers": ["wise", "remitly", "western_union", "xoom", "ofx"],
    "cash_pickup_providers": ["remitly", "western_union"],
    "seo_volume": "high",
    "typical_amount": 500,
    "typical_amount_label": "CAD 500",
    "h1": "Best Way to Send Money from Canada to India (2026)",
    "direct_answer": "The cheapest way to send money from Canada to India is typically Wise — they use the real mid-market exchange rate with fees as low as $4.50 CAD on a $500 transfer. For speed, Remitly delivers in minutes. For cash pickup, Western Union or Remitly work best.",
    "meta_title": "Send Money Canada to India — Best Rates 2026 | SendMoneySmart",
    "meta_description": "Compare Wise, Remitly, Western Union and more. Find the cheapest way to send money from Canada to India. Save up to $18 per transfer. Updated 2026.",
    "related_corridors": ["canada-to-philippines", "canada-to-china", "usa-to-india"],
    "faq": [
      {
        "q": "What is the cheapest way to send money from Canada to India?",
        "a": "Wise is typically the cheapest option for bank-to-bank transfers from Canada to India, thanks to their mid-market exchange rate and low percentage-based fees. On a $500 CAD transfer, total costs are usually under $5 CAD."
      },
      {
        "q": "Is Wise better than Western Union for Canada to India?",
        "a": "For bank transfers, yes — Wise is significantly cheaper than Western Union because Wise uses the real exchange rate with no margin. Western Union adds a 2–3% FX margin on top of their transfer fee. For cash pickup, Western Union has more agent locations in India."
      },
      {
        "q": "How long does it take to send money from Canada to India?",
        "a": "Transfer times vary by provider: Wise takes 1–2 business days, Remitly can deliver in minutes to hours, and Western Union offers near-instant transfers for cash pickup."
      },
      {
        "q": "What is the maximum amount I can send from Canada to India?",
        "a": "Most providers allow transfers up to $50,000–$1,000,000 CAD, but large transfers may require additional documentation. Wise supports up to $1,000,000 CAD. Check your provider's limits for your specific amount."
      },
      {
        "q": "Do I need to pay tax on money sent to India from Canada?",
        "a": "Canada doesn't tax outbound remittances. In India, recipients typically don't pay tax on foreign remittances for personal transfers up to certain thresholds. Consult a tax professional for large or regular transfers."
      },
      {
        "q": "Which app is best to send money from Canada to India?",
        "a": "Wise and Remitly both have highly-rated mobile apps. Wise is best for low cost, Remitly is best for speed and cash pickup options across India."
      },
      {
        "q": "What exchange rate should I expect for CAD to INR?",
        "a": "The mid-market rate is the 'real' rate you see on Google. Wise passes this rate directly to you. Other providers like Western Union and Xoom apply a margin of 1.5–3% above the mid-market rate, which can cost $15–$30 on a $500 transfer."
      }
    ]
  },
  "canada-to-philippines": {
    "slug": "canada-to-philippines",
    "from_country": "Canada",
    "to_country": "Philippines",
    "from_code": "CA",
    "to_code": "PH",
    "currency_from": "CAD",
    "currency_to": "PHP",
    "currency_symbol_to": "₱",
    "flag_from": "🇨🇦",
    "flag_to": "🇵🇭",
    "popular_providers": ["wise", "remitly", "western_union", "xoom"],
    "cash_pickup_providers": ["remitly", "western_union"],
    "seo_volume": "high",
    "typical_amount": 500,
    "h1": "Best Way to Send Money from Canada to Philippines (2026)",
    "direct_answer": "Wise offers the lowest fees for bank transfers from Canada to the Philippines. Remitly is fastest, often delivering in minutes. For cash pickup at SM, Palawan, or LBC branches, Western Union and Remitly both work well.",
    "meta_title": "Send Money Canada to Philippines — Best Rates 2026 | SendMoneySmart",
    "meta_description": "Compare Wise, Remitly, Western Union for Canada to Philippines transfers. Find the cheapest rates updated for 2026. Save on every transfer.",
    "related_corridors": ["canada-to-india", "canada-to-china", "usa-to-philippines"],
    "faq": [
      {
        "q": "What is the cheapest way to send money from Canada to Philippines?",
        "a": "Wise consistently offers the lowest total cost for bank-to-bank transfers from Canada to the Philippines, using the mid-market rate with low fees."
      },
      {
        "q": "Can I send money for cash pickup in the Philippines from Canada?",
        "a": "Yes. Remitly and Western Union both offer extensive cash pickup networks in the Philippines, including SM malls, Palawan Express, and LBC branches."
      },
      {
        "q": "How fast can I send money from Canada to Philippines?",
        "a": "Remitly offers delivery in minutes for express transfers. Wise typically takes 1–2 business days for bank deposits."
      }
    ]
  },
  "canada-to-china": {
    "slug": "canada-to-china",
    "from_country": "Canada",
    "to_country": "China",
    "from_code": "CA",
    "to_code": "CN",
    "currency_from": "CAD",
    "currency_to": "CNY",
    "currency_symbol_to": "¥",
    "flag_from": "🇨🇦",
    "flag_to": "🇨🇳",
    "popular_providers": ["wise", "ofx", "western_union", "xoom"],
    "cash_pickup_providers": ["western_union"],
    "seo_volume": "medium",
    "typical_amount": 500,
    "h1": "Best Way to Send Money from Canada to China (2026)",
    "direct_answer": "Wise and OFX are typically the cheapest ways to send money from Canada to China for bank transfers. OFX has no transfer fees on amounts over $1,000 CAD. For large transfers, OFX often wins on total cost.",
    "meta_title": "Send Money Canada to China — Best Rates 2026 | SendMoneySmart",
    "meta_description": "Compare Wise, OFX, Western Union for Canada to China money transfers. Find the lowest CAD to CNY rates. Updated 2026.",
    "related_corridors": ["canada-to-india", "canada-to-philippines", "usa-to-india"],
    "faq": [
      {
        "q": "What is the best way to send money from Canada to China?",
        "a": "For amounts under $1,000 CAD, Wise is typically cheapest. For larger amounts over $1,000 CAD, OFX charges no transfer fees and competitive FX rates."
      }
    ]
  },
  "usa-to-mexico": {
    "slug": "usa-to-mexico",
    "from_country": "USA",
    "to_country": "Mexico",
    "from_code": "US",
    "to_code": "MX",
    "currency_from": "USD",
    "currency_to": "MXN",
    "currency_symbol_to": "$",
    "flag_from": "🇺🇸",
    "flag_to": "🇲🇽",
    "popular_providers": ["wise", "remitly", "western_union", "xoom"],
    "cash_pickup_providers": ["remitly", "western_union", "xoom"],
    "seo_volume": "very_high",
    "typical_amount": 300,
    "h1": "Best Way to Send Money from USA to Mexico (2026)",
    "direct_answer": "Wise and Remitly are the cheapest options for USD to MXN transfers. Remitly frequently runs promotions for first-time senders — sometimes zero fees. Western Union is best for cash pickup at OXXO and other locations throughout Mexico.",
    "meta_title": "Send Money USA to Mexico — Best Rates 2026 | SendMoneySmart",
    "meta_description": "Compare Wise, Remitly, Xoom, Western Union for USA to Mexico transfers. Find the cheapest USD to MXN rates. Save $10–$20 per transfer.",
    "related_corridors": ["usa-to-india", "usa-to-philippines", "canada-to-india"],
    "faq": [
      {
        "q": "What is the cheapest way to send money from the USA to Mexico?",
        "a": "Remitly and Wise are consistently the cheapest for USA to Mexico. Remitly often has first-transfer promotions with zero fees. Wise uses the mid-market rate."
      },
      {
        "q": "Can I send money to OXXO in Mexico from the USA?",
        "a": "Yes. Western Union and Remitly both support cash pickup at OXXO stores across Mexico."
      }
    ]
  },
  "usa-to-india": {
    "slug": "usa-to-india",
    "from_country": "USA",
    "to_country": "India",
    "from_code": "US",
    "to_code": "IN",
    "currency_from": "USD",
    "currency_to": "INR",
    "currency_symbol_to": "₹",
    "flag_from": "🇺🇸",
    "flag_to": "🇮🇳",
    "popular_providers": ["wise", "remitly", "western_union", "xoom", "ofx"],
    "cash_pickup_providers": ["remitly", "western_union"],
    "seo_volume": "very_high",
    "typical_amount": 500,
    "h1": "Best Way to Send Money from USA to India (2026)",
    "direct_answer": "Wise is the cheapest way to send money from the USA to India for bank deposits, offering the mid-market USD/INR rate. Remitly delivers in minutes. For large transfers over $1,000, OFX has no fees.",
    "meta_title": "Send Money USA to India — Best Rates 2026 | SendMoneySmart",
    "meta_description": "Compare Wise, Remitly, Xoom, OFX for USA to India transfers. Find the cheapest USD to INR exchange rates. Updated for 2026.",
    "related_corridors": ["usa-to-philippines", "usa-to-mexico", "canada-to-india"],
    "faq": [
      {
        "q": "What is the cheapest way to send money from USA to India?",
        "a": "Wise is consistently the cheapest for bank transfers, offering the real USD/INR mid-market rate. On $500, total fees are typically under $4 USD."
      }
    ]
  },
  "usa-to-philippines": {
    "slug": "usa-to-philippines",
    "from_country": "USA",
    "to_country": "Philippines",
    "from_code": "US",
    "to_code": "PH",
    "currency_from": "USD",
    "currency_to": "PHP",
    "currency_symbol_to": "₱",
    "flag_from": "🇺🇸",
    "flag_to": "🇵🇭",
    "popular_providers": ["wise", "remitly", "western_union", "xoom"],
    "cash_pickup_providers": ["remitly", "western_union"],
    "seo_volume": "high",
    "typical_amount": 300,
    "h1": "Best Way to Send Money from USA to Philippines (2026)",
    "direct_answer": "Remitly and Wise are the best options for sending money from the USA to the Philippines. Remitly is fastest (minutes) with strong cash pickup coverage. Wise is cheapest for bank deposits using the real USD/PHP rate.",
    "meta_title": "Send Money USA to Philippines — Best Rates 2026 | SendMoneySmart",
    "meta_description": "Compare Wise, Remitly, Western Union for USA to Philippines transfers. Best USD to PHP exchange rates. Cash pickup available. Updated 2026.",
    "related_corridors": ["usa-to-india", "usa-to-mexico", "canada-to-philippines"],
    "faq": [
      {
        "q": "What is the best app to send money to Philippines from USA?",
        "a": "Remitly has the top-rated app for USA to Philippines with fast delivery and cash pickup at SM, Palawan, and LBC. Wise is best for low-cost bank deposits."
      }
    ]
  }
}
```

---

## STEP 4 — CALCULATION ENGINE

### `/src/lib/calculator.ts`

```typescript
import providersData from '@/data/providers.json';
import corridorsData from '@/data/corridors.json';

export type Provider = {
  id: string;
  name: string;
  logo: string;
  color: string;
  fee_flat_cad: number;
  fee_flat_usd: number;
  fee_percent: number;
  fx_margin: number;
  speed: string;
  speed_minutes: number;
  affiliate_url: string;
  affiliate_params: string;
  tags: string[];
  trust_stat: string;
  regulated: boolean;
  cash_pickup: boolean;
  min_transfer: number;
  max_transfer: number;
  description: string;
};

export type Corridor = {
  slug: string;
  from_country: string;
  to_country: string;
  from_code: string;
  to_code: string;
  currency_from: string;
  currency_to: string;
  currency_symbol_to: string;
  flag_from: string;
  flag_to: string;
  popular_providers: string[];
  cash_pickup_providers: string[];
  seo_volume: string;
  typical_amount: number;
  h1?: string;
  direct_answer?: string;
  meta_title?: string;
  meta_description?: string;
  related_corridors: string[];
  faq?: { q: string; a: string }[];
};

export type TransferResult = {
  provider: Provider;
  totalCost: number;
  amountReceived: number;
  fee: number;
  fxLoss: number;
  speed: string;
  speed_minutes: number;
  rank_cheapest: number;
  rank_fastest: number;
  is_cheapest: boolean;
  is_fastest: boolean;
};

// Approximate mid-market rates (CAD/USD to various currencies)
// In production, replace with live API
const APPROX_RATES: Record<string, Record<string, number>> = {
  CAD: {
    INR: 62.5,
    PHP: 41.2,
    CNY: 5.35,
    MXN: 13.8,
    USD: 0.74,
  },
  USD: {
    INR: 83.5,
    PHP: 56.0,
    CNY: 7.25,
    MXN: 17.2,
    CAD: 1.35,
  },
};

export function getExchangeRate(from: string, to: string): number {
  return APPROX_RATES[from]?.[to] ?? 1;
}

export function calculateTransfer(
  amount: number,
  corridor: Corridor,
  providerIds: string[]
): TransferResult[] {
  const isCAD = corridor.currency_from === 'CAD';
  const midRate = getExchangeRate(corridor.currency_from, corridor.currency_to);

  const results: TransferResult[] = providerIds
    .map((id) => {
      const p = (providersData as Record<string, Provider>)[id];
      if (!p) return null;
      if (amount < p.min_transfer || amount > p.max_transfer) return null;

      const flatFee = isCAD ? p.fee_flat_cad : p.fee_flat_usd;
      const percentFee = amount * p.fee_percent;
      const fee = flatFee + percentFee;

      const amountAfterFee = amount - fee;
      const effectiveRate = midRate * (1 - p.fx_margin);
      const amountReceived = amountAfterFee * effectiveRate;
      const fxLoss = amountAfterFee * midRate * p.fx_margin;
      const totalCost = fee + fxLoss;

      return {
        provider: p,
        totalCost,
        amountReceived,
        fee,
        fxLoss,
        speed: p.speed,
        speed_minutes: p.speed_minutes,
        rank_cheapest: 0,
        rank_fastest: 0,
        is_cheapest: false,
        is_fastest: false,
      };
    })
    .filter(Boolean) as TransferResult[];

  // Sort by cheapest and assign ranks
  const byCost = [...results].sort((a, b) => a.totalCost - b.totalCost);
  const bySpeed = [...results].sort((a, b) => a.speed_minutes - b.speed_minutes);

  byCost.forEach((r, i) => {
    r.rank_cheapest = i + 1;
  });
  bySpeed.forEach((r, i) => {
    r.rank_fastest = i + 1;
  });

  if (byCost[0]) byCost[0].is_cheapest = true;
  if (bySpeed[0]) bySpeed[0].is_fastest = true;

  return byCost;
}

export function getAllCorridors(): Corridor[] {
  return Object.values(corridorsData as Record<string, Corridor>);
}

export function getCorridor(slug: string): Corridor | null {
  return (corridorsData as Record<string, Corridor>)[slug] ?? null;
}

export function getProvider(id: string): Provider | null {
  return (providersData as Record<string, Provider>)[id] ?? null;
}

export function buildAffiliateUrl(provider: Provider, corridor: Corridor, amount: number): string {
  return `${provider.affiliate_url}${provider.affiliate_params}${corridor.slug}&amount=${amount}`;
}

export function formatCurrency(amount: number, symbol: string): string {
  return `${symbol}${Math.round(amount).toLocaleString()}`;
}

export function formatCost(amount: number, currency: string): string {
  return `${currency} ${amount.toFixed(2)}`;
}
```

---

## STEP 5 — SEO HELPERS

### `/src/lib/seo.ts`

```typescript
import { Corridor, TransferResult } from './calculator';

export function generateCorridorSchema(corridor: Corridor, results: TransferResult[]) {
  const faqSchema = corridor.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: corridor.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sendmoneysmart.com' },
      { '@type': 'ListItem', position: 2, name: 'Send Money', item: 'https://sendmoneysmart.com/send-money/' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${corridor.from_country} to ${corridor.to_country}`,
        item: `https://sendmoneysmart.com/send-money/${corridor.slug}/`,
      },
    ],
  };

  return { faqSchema, breadcrumbSchema };
}
```

---

## STEP 6 — VISUAL DESIGN SYSTEM

### Design Identity
- **Aesthetic**: Precision financial tool — like Bloomberg built for immigrants. Dense but trustworthy.
- **Dark background**: `#0A1628` (deep navy) 
- **Surface cards**: `#0F1F3D` (mid navy)
- **Accent / CTA**: `#00D4AA` (electric teal)
- **Winner highlight**: `#00D4AA` with 10% opacity background
- **Text primary**: `#F0F4FF`
- **Text muted**: `#8B9DC3`
- **Danger / warning**: `#FF6B6B`
- **Success / cheapest**: `#00D4AA`

### Typography
- **Display/H1/H2**: `Sora` (Google Fonts) — confident, modern, slightly geometric
- **Body/Tables**: `IBM Plex Sans` — readable, technical feel
- **Numbers/Data**: `IBM Plex Mono` — tabular numbers, financial feel

### Global CSS Variables in `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --bg-base: #0A1628;
  --bg-surface: #0F1F3D;
  --bg-elevated: #162849;
  --accent: #00D4AA;
  --accent-muted: rgba(0, 212, 170, 0.12);
  --text-primary: #F0F4FF;
  --text-muted: #8B9DC3;
  --text-dim: #4A5C7A;
  --border: rgba(255,255,255,0.07);
  --border-accent: rgba(0, 212, 170, 0.3);
  --font-display: 'Sora', sans-serif;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --radius: 12px;
  --radius-sm: 8px;
}

body {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}
```

---

## STEP 7 — CORRIDOR PAGE COMPONENT

### `/src/app/send-money/[corridor]/page.tsx`

This is the **most important file in the project**. Build it as a Server Component with `generateStaticParams` for SSG.

The page must render in this exact order:

```
1. [SEO: title, meta, JSON-LD schema in <head>]
2. Breadcrumb nav
3. H1 — corridor-specific
4. Direct Answer Block — 2-3 sentences, highlighted box
5. Winner Card — "Best overall: Wise" with CTA button
6. Comparison Table — all providers, sortable columns
7. Calculator — amount input → ranked output
8. Scenario Blocks — Cheapest / Fastest / Cash Pickup / Large Transfers
9. FAQ Accordion — SEO schema-backed
10. Related Corridors — 3 card links
11. Disclaimer — "Rates are estimates. Last updated [date]."
```

### Key implementation requirements:

**Comparison Table columns:**
| Provider | Transfer Fee | FX Rate | You Save vs WU | Delivery | Action |
- "You Save vs WU" = compare total cost to Western Union as baseline
- Highlight the cheapest row with teal left border + subtle background
- Provider logo in first column (img with fallback to colored initial)

**Calculator behavior:**
- Default amount = corridor.typical_amount
- Input: number field with currency label (CAD / USD)
- On change (debounced 300ms): recalculate all providers
- Output: ranked list with "You receive: ₹82,450" prominent
- Show total cost below: "Total fees: CAD 4.82"
- Animate result rows on recalculation (fade + slide)

**Winner Card:**
- Absolute top of content (below H1)
- Large badge: "🏆 Lowest Cost"
- Provider name + logo
- "Send CAD 500 → receive ₹XX,XXX"
- Big teal CTA button: "Send with Wise →"

**Affiliate CTAs:**
- All links: `rel="nofollow sponsored" target="_blank"`
- UTM: `?utm_source=sendmoneysmart&utm_medium=comparison&utm_campaign={corridor.slug}`

---

## STEP 8 — HOMEPAGE

### `/src/app/page.tsx`

Simple, conversion-focused homepage:

```
1. Hero section
   - H1: "Find the Cheapest Way to Send Money Abroad"
   - Subheading: "Compare Wise, Remitly, Western Union and more. Real rates, no fluff."
   - Quick corridor selector: [From country ▼] → [To country ▼] [Compare Now]
   - Trust bar: "Trusted by immigrants in Canada & USA"

2. Top Corridors Grid (2x3 on mobile, 3x2 on desktop)
   - Canada → India | Canada → Philippines | Canada → China
   - USA → Mexico | USA → India | USA → Philippines
   - Each card: flags, corridor name, "Compare rates →"

3. How it works (3 steps)
   - 1. Pick your corridor
   - 2. Enter your amount
   - 3. Compare and send

4. Trust section
   - "We compare 5+ providers"
   - "Updated regularly"
   - "No hidden fees on our comparisons"
   - "Operated by Albor Digital LLC"
```

---

## STEP 9 — HEADER + FOOTER

### Header
- Logo: "SendMoneySmart" in Sora bold
- Nav: Home | Compare | How It Works
- Mobile: hamburger menu
- Sticky on scroll

### Footer
- Logo + tagline
- Links: How it works | Privacy Policy | Terms | Disclaimer | Cookie Notice
- Legal: "© 2026 Albor Digital LLC. Operated at albor.digital. Rates shown are estimates for comparison purposes. We may earn affiliate commissions."
- contact@albor.digital

---

## STEP 10 — `DECISIONS.md`

Create this file and log:

```markdown
# SendMoneySmart — Decision Log

## 2026 — Project Bootstrap

### ARCH-001: Framework
**Decision**: Next.js 14 App Router
**Reason**: SSG via generateStaticParams for corridor pages = fast load + SEO-friendly. ISR for future live rate updates.

### ARCH-002: Data layer
**Decision**: JSON files in /src/data/ (no database at MVP)
**Reason**: Zero infrastructure cost. All data is static/slow-changing. Migrate to DB when API rates are needed.

### ARCH-003: Calc engine
**Decision**: Approximate rates hardcoded in calculator.ts
**Reason**: Live API rates require paid subscriptions. Approximate model with clear disclaimer builds trust while shipping fast.

### ARCH-004: Styling
**Decision**: Tailwind CSS + CSS variables for design tokens
**Reason**: Fast iteration, no CSS-in-JS overhead, works perfectly with Next.js 14 RSC.

### ARCH-005: Monetization
**Decision**: Affiliate links only at MVP (no ads)
**Reason**: Trust is everything in finance. Ads destroy trust. Affiliate CTAs that are genuinely helpful convert better.
```

---

## QUALITY GATES — Before marking Phase 1 complete:

**Code:**
- [ ] `npm run build` passes with zero errors
- [ ] All 6 corridor pages render correctly
- [ ] Calculator outputs correct results for $500 transfer on each corridor
- [ ] No hardcoded content — all data from JSON

**SEO:**
- [ ] Each corridor page has unique title + meta description
- [ ] H1 includes corridor keyword + "(2026)"
- [ ] JSON-LD FAQPage schema in `<head>`
- [ ] JSON-LD BreadcrumbList schema in `<head>`
- [ ] Internal links to 3 related corridors per page

**UX:**
- [ ] Winner card visible above fold at 390px (iPhone 14)
- [ ] Calculator works and outputs clearly formatted results
- [ ] All affiliate links have `rel="nofollow sponsored"` + UTM params
- [ ] Trust signals present on every corridor page

**Performance:**
- [ ] Lighthouse score > 90 on mobile
- [ ] No layout shift on calculator interaction
- [ ] Images have alt text + width/height

---

## BEGIN NOW

Start with this sequence:

1. Run `create-next-app` scaffold command
2. Create all files in `/src/data/`
3. Create `/src/lib/calculator.ts` and `/src/lib/seo.ts`
4. Create `globals.css` with design tokens
5. Build `Header.tsx` and `Footer.tsx`
6. Build the corridor page at `/send-money/[corridor]/page.tsx` — **this is the centerpiece**
7. Build the Homepage at `/page.tsx`
8. Run `npm run build` and fix all errors
9. Verify Canada → India page at `localhost:3000/send-money/canada-to-india/`
10. Log decisions in `DECISIONS.md`

**The Canada → India corridor page is the only output that matters in Phase 1.**
If it looks great, converts well, and passes SEO checks — the project is a success.
Ship it. Everything else scales from here.
```

---

*SendMoneySmart — Phase 1 Prompt 01 | Albor Digital LLC | albor.digital*
