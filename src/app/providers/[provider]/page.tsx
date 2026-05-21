import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getProvider, getAllCorridors, calculateTransfer, getCorridor, formatCost, formatCurrency } from '@/lib/calculator';
import AffiliateCTA from '@/components/ui/AffiliateCTA';
import TrustBar from '@/components/ui/TrustBar';
import { Shield, Clock, DollarSign, Check, X } from 'lucide-react';

// Static content per provider — AEO citation targets
const PROVIDER_CONTENT: Record<string, {
  slug: string;
  fullName: string;
  founded: string;
  hq: string;
  regulation: string;
  customers: string;
  summary: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  faq: { q: string; a: string }[];
}> = {
  wise: {
    slug: 'wise',
    fullName: 'Wise (formerly TransferWise)',
    founded: '2011',
    hq: 'London, UK',
    regulation: 'FCA (UK), FinCEN (USA), FINTRAC (Canada), and 50+ other regulators',
    customers: '16 million+',
    summary: 'Wise is the benchmark for low-cost international transfers. Founded in 2011, Wise pioneered the use of the mid-market exchange rate — passing the real FX rate directly to customers with no markup. Their fee is a small flat amount plus a percentage, making them the cheapest option for most bank-to-bank transfers.',
    pros: [
      '0% FX margin — real mid-market rate always',
      'Fully transparent fees shown upfront',
      'Supports 80+ currencies and 160+ countries',
      'Multi-currency account available (Wise Account)',
      'Regulated in UK, USA, Canada, EU, and more',
      'Business transfers supported',
    ],
    cons: [
      'No cash pickup option',
      'Bank transfers only (no cash-in at stores)',
      'Slower than express services (1–2 business days)',
      'Transfer fee is a percentage — more expensive relative to competitors for very small amounts',
    ],
    bestFor: 'Individuals and businesses who want the cheapest possible bank-to-bank transfer and are not in a hurry.',
    faq: [
      { q: 'Is Wise safe and legitimate?', a: 'Yes. Wise is a publicly listed company (LSE: WISE) regulated by the FCA in the UK and by financial regulators in every country it operates. It has 16 million+ customers worldwide and has processed over $100 billion in transfers.' },
      { q: 'How does Wise make money if it uses the mid-market rate?', a: 'Wise charges a transparent fee (flat fee + small percentage) instead of hiding profit in the exchange rate. This is clearly shown before you confirm the transfer.' },
      { q: 'How long does a Wise transfer take?', a: 'Most transfers arrive in 1–2 business days. Some corridors like USA to Mexico can settle in hours. Wise shows you an estimated delivery time before you confirm.' },
      { q: 'What is the maximum amount I can send with Wise?', a: 'Wise supports transfers up to $1,000,000 USD (or equivalent). Large transfers may require additional identity verification.' },
    ],
  },
  remitly: {
    slug: 'remitly',
    fullName: 'Remitly',
    founded: '2011',
    hq: 'Seattle, WA, USA',
    regulation: 'Licensed money transmitter in all 50 US states, and regulated in Canada, EU, UK, and Australia',
    customers: '5 million+',
    summary: 'Remitly is built for speed and convenience. Founded in 2011 with a focus on the immigrant market, Remitly offers two tiers: Economy (cheaper, 3–5 days) and Express (minutes to hours, higher fee). Its strong cash pickup network in countries like India, Philippines, and Mexico makes it the go-to for recipients who need physical cash.',
    pros: [
      'Express transfers arrive in minutes',
      'Extensive cash pickup network (170+ countries)',
      'Strong promotional offers for first-time senders',
      'Highly rated mobile app',
      'Available in more countries than most competitors',
    ],
    cons: [
      '~1% FX margin applied on top of fees',
      'More expensive than Wise for bank deposits',
      '$30,000 maximum transfer limit',
      'Express tier costs more than Economy',
    ],
    bestFor: 'Senders who need money to arrive fast, or whose recipient prefers cash pickup.',
    faq: [
      { q: 'Is Remitly safe?', a: 'Yes. Remitly is licensed as a money transmitter in all 50 US states and is regulated in Canada, the EU, UK, and Australia. It has served over 5 million customers.' },
      { q: 'How fast is Remitly Express?', a: 'Remitly Express typically delivers in minutes to a few hours for most corridors. Actual delivery time depends on the destination country and recipient bank.' },
      { q: 'Does Remitly have a promo for new users?', a: 'Remitly frequently runs promotions for first-time senders, including reduced fees or favorable rates. Check their site for current offers when you register.' },
      { q: 'What is the difference between Remitly Economy and Express?', a: 'Economy is cheaper (lower fees) but takes 3–5 business days. Express costs slightly more but delivers in minutes to hours. Both use the same exchange rate.' },
    ],
  },
  western_union: {
    slug: 'western-union',
    fullName: 'Western Union',
    founded: '1851',
    hq: 'Denver, CO, USA',
    regulation: 'Licensed money transmitter in all US states, and regulated globally — one of the most regulated remittance companies in the world',
    customers: '150 million+',
    summary: 'Western Union is the largest money transfer operator in the world by agent network, with 500,000+ locations in 200+ countries. Founded in 1851, it is one of the most recognized financial brands globally. While not the cheapest option for bank transfers, Western Union excels at instant cash pickup availability — making it irreplaceable in regions with limited banking infrastructure.',
    pros: [
      '500,000+ cash pickup locations globally',
      'Near-instant transfers for cash pickup',
      'Available in 200+ countries and territories',
      'Trusted brand with 170+ years of history',
      'Strong presence in rural and underbanked regions',
    ],
    cons: [
      '2.5% FX margin — significantly more expensive than Wise',
      'High fees on top of the FX margin',
      'Most expensive option for bank-to-bank transfers',
      'Digital experience lags behind newer competitors',
    ],
    bestFor: 'Senders whose recipients need cash pickup, especially in rural areas or countries with limited banking access.',
    faq: [
      { q: 'Why is Western Union more expensive than Wise?', a: 'Western Union applies a 2–3% FX margin on top of their transfer fee, which adds significant cost. Wise uses the mid-market rate with 0% margin. On a $500 transfer, this difference can be $15–$20.' },
      { q: 'How fast is Western Union?', a: 'For cash pickup, Western Union can be near-instant — within minutes. For bank deposits, it typically takes 1–3 business days.' },
      { q: 'Is Western Union reliable for cash pickup in India?', a: 'Yes. Western Union has an extensive agent network in India through partner banks and retail locations. Recipients can collect cash at thousands of locations across the country.' },
    ],
  },
  xoom: {
    slug: 'xoom',
    fullName: 'Xoom (a PayPal service)',
    founded: '2001',
    hq: 'San Francisco, CA, USA',
    regulation: 'Licensed money transmitter in all US states, regulated as part of PayPal Holdings',
    customers: 'Part of PayPal (220M+ accounts)',
    summary: 'Xoom is a PayPal-owned money transfer service focused on the US market. It is particularly popular among PayPal users who can fund transfers directly from their PayPal balance. Xoom supports bank deposits, cash pickup, and home delivery in select markets. Its fees are moderate — cheaper than Western Union but more expensive than Wise.',
    pros: [
      'Directly integrated with PayPal accounts',
      'Supports bank deposit, cash pickup, and home delivery',
      'Fast transfers (often same day)',
      'Backed by PayPal\'s security infrastructure',
    ],
    cons: [
      '2% FX margin — more expensive than Wise',
      'Primarily US-focused (less available for Canadian senders)',
      '$50,000 maximum transfer limit',
      'Fees are higher than Wise and Remitly',
    ],
    bestFor: 'US-based senders who already use PayPal and want a convenient, integrated transfer experience.',
    faq: [
      { q: 'Is Xoom the same as PayPal?', a: 'Xoom is owned by PayPal but operates as a separate money transfer service. You can fund transfers from your PayPal balance, debit, or credit card. PayPal itself does not directly support international money transfers to bank accounts in most countries.' },
      { q: 'Is Xoom available in Canada?', a: 'Xoom has limited availability for Canadian senders. It is primarily designed for US senders. Canadian users should consider Wise, Remitly, or OFX instead.' },
    ],
  },
  ofx: {
    slug: 'ofx',
    fullName: 'OFX (formerly OzForex)',
    founded: '1998',
    hq: 'Sydney, Australia',
    regulation: 'Regulated by ASIC (Australia), FinCEN (USA), FINTRAC (Canada), FCA (UK), and others',
    customers: '1 million+',
    summary: 'OFX specializes in larger transfers, with no transfer fees at all — they make their margin purely on the FX spread (1.5% above mid-market). This makes OFX cost-competitive with Wise for transfers over $1,000 CAD/USD, where the FX margin cost stays proportional while Wise\'s percentage fee also grows. OFX also offers forward contracts and rate alerts for business users.',
    pros: [
      'No transfer fees — ever',
      'Best value for large transfers ($1,000+)',
      'Forward contracts available (lock in today\'s rate)',
      'Rate alerts and market tools',
      'Business transfer solutions',
      'Phone support available',
    ],
    cons: [
      '$1,000 minimum transfer amount',
      '1.5% FX margin — more expensive than Wise for mid-market rate',
      'No cash pickup',
      'Slower onboarding process',
      'Less suited for small or urgent transfers',
    ],
    bestFor: 'Individuals or businesses transferring $1,000 or more who want no transfer fees and competitive FX rates.',
    faq: [
      { q: 'Is OFX really free to use?', a: 'OFX charges no transfer fees. Their revenue comes from a 1–1.5% FX margin applied to the exchange rate. For large transfers, this is comparable to or cheaper than paying Wise\'s percentage-based fee.' },
      { q: 'What is the minimum transfer for OFX?', a: 'OFX requires a minimum transfer of $1,000 USD or equivalent. They are not suitable for small transfers.' },
      { q: 'Is OFX good for business transfers?', a: 'Yes. OFX is particularly popular for business international payments. They offer forward contracts, rate alerts, and dedicated account managers for business clients.' },
    ],
  },
};

interface PageProps {
  params: Promise<{ provider: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PROVIDER_CONTENT).map((id) => ({
    provider: PROVIDER_CONTENT[id].slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { provider: slug } = await params;
  const id = slug === 'western-union' ? 'western_union' : slug.replace(/-/g, '_');
  const content = PROVIDER_CONTENT[id];
  if (!content) return {};

  return {
    title: `${content.fullName} Review 2026 — Fees, Rates & How It Works | SendMoneySmart`,
    description: `${content.fullName}: fees, exchange rates, transfer speed, pros and cons. Is it the cheapest option for your corridor?`,
    alternates: { canonical: `https://www.sendmoneysmart.com/providers/${content.slug}/` },
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { provider: slug } = await params;
  const id = slug === 'western-union' ? 'western_union' : slug.replace(/-/g, '_');
  const content = PROVIDER_CONTENT[id];
  if (!content) notFound();

  const provider = getProvider(id);
  if (!provider) notFound();

  // Show performance on Canada → India as example corridor
  const corridor = getCorridor('canada-to-india');
  const exampleAmount = 500;
  const exampleResult = corridor
    ? calculateTransfer(exampleAmount, corridor, [id]).find((r) => r.provider.id === id)
    : null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${content.fullName} Review 2026 — Fees, Exchange Rates & How It Works`,
    description: content.summary,
    publisher: {
      '@type': 'Organization',
      name: 'Albor Digital LLC',
      url: 'https://albor.digital',
    },
    url: `https://www.sendmoneysmart.com/providers/${content.slug}/`,
  };

  const affiliateUrl = `${provider.affiliate_url}${provider.affiliate_params}provider-page`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TrustBar />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs mb-6 flex-wrap" style={{ color: 'var(--text-dim)' }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-muted)' }}>Providers</span>
          <span>/</span>
          <span style={{ color: 'var(--text-muted)' }}>{provider.name}</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
            style={{ backgroundColor: provider.color + '22', color: provider.color }}>
            {provider.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {content.fullName}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-1"><Shield size={11} style={{ color: 'var(--accent)' }} /> Regulated</span>
              <span className="flex items-center gap-1"><Clock size={11} style={{ color: 'var(--accent)' }} /> {provider.speed}</span>
              <span>{content.customers} customers</span>
              <span>Founded {content.founded}</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{content.summary}</p>

        {/* Example calculation */}
        {exampleResult && corridor && (
          <div className="rounded-xl border p-5 mb-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-accent)' }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-dim)' }}>
              Example — CAD $500 to India
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Transfer fee', value: formatCost(exampleResult.fee, 'CAD'), icon: <DollarSign size={14} /> },
                { label: 'Total cost', value: formatCost(exampleResult.totalCost, 'CAD'), icon: <DollarSign size={14} /> },
                { label: 'Recipient gets', value: formatCurrency(exampleResult.amountReceived, '₹'), icon: null },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs mb-1" style={{ color: 'var(--text-dim)' }}>{item.label}</div>
                  <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-mono-data)', color: item.label === 'Recipient gets' ? 'var(--accent)' : 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <AffiliateCTA url={affiliateUrl} label={`Send with ${provider.name} →`} variant="primary" />
            </div>
          </div>
        )}

        {/* Key facts */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {content.fullName} — Key Facts
          </h2>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
            {[
              { label: 'Headquartered', value: content.hq },
              { label: 'Founded', value: content.founded },
              { label: 'Customers', value: content.customers },
              { label: 'Transfer fee', value: `${provider.fee_flat_cad > 0 ? `CAD $${provider.fee_flat_cad} flat` : 'No flat fee'} + ${(provider.fee_percent * 100).toFixed(2)}%` },
              { label: 'FX margin', value: provider.fx_margin === 0 ? '0% (mid-market rate)' : `~${(provider.fx_margin * 100).toFixed(1)}% above mid-market` },
              { label: 'Cash pickup', value: provider.cash_pickup ? 'Yes' : 'No' },
              { label: 'Min / Max transfer', value: `$${provider.min_transfer.toLocaleString()} / $${provider.max_transfer.toLocaleString()}` },
              { label: 'Regulation', value: content.regulation },
            ].map((row, i) => (
              <div key={row.label} className="flex items-start justify-between px-4 py-3 text-sm"
                style={{ borderTop: i > 0 ? '1px solid var(--border)' : undefined, backgroundColor: 'var(--bg-surface)' }}>
                <span className="font-medium" style={{ color: 'var(--text-dim)' }}>{row.label}</span>
                <span className="text-right max-w-xs" style={{ color: 'var(--text-primary)' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros / Cons */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {provider.name} Pros and Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
              <div className="font-semibold mb-3 flex items-center gap-1.5 text-sm" style={{ color: 'var(--accent)' }}>
                <Check size={14} /> Pros
              </div>
              <ul className="space-y-2">
                {content.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-4" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
              <div className="font-semibold mb-3 flex items-center gap-1.5 text-sm" style={{ color: '#FF6B6B' }}>
                <X size={14} /> Cons
              </div>
              <ul className="space-y-2">
                {content.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <X size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#FF6B6B' }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-xl border p-4 text-sm" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
            <span className="font-semibold" style={{ color: 'var(--accent)' }}>Best for: </span>
            <span style={{ color: 'var(--text-muted)' }}>{content.bestFor}</span>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Frequently Asked Questions About {provider.name}
          </h2>
          <div className="space-y-3">
            {content.faq.map((item) => (
              <div key={item.q} className="rounded-xl border p-4 text-sm" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
                <div className="font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{item.q}</div>
                <div style={{ color: 'var(--text-muted)' }}>{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl border p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-accent)' }}>
          <div>
            <div className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to send with {provider.name}?
            </div>
            <div className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {provider.trust_stat}
            </div>
          </div>
          <AffiliateCTA url={affiliateUrl} label={`Send with ${provider.name} →`} variant="primary" />
        </div>

        {/* Compare links */}
        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
          <span>Compare corridors using {provider.name}: </span>
          {getAllCorridors()
            .filter((c) => c.popular_providers.includes(id))
            .slice(0, 4)
            .map((c, i) => (
              <span key={c.slug}>
                {i > 0 && ' · '}
                <Link href={`/send-money/${c.slug}/`} className="hover:underline" style={{ color: 'var(--accent)' }}>
                  {c.from_country} → {c.to_country}
                </Link>
              </span>
            ))}
        </div>
      </div>
    </>
  );
}
