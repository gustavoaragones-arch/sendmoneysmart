import type { Metadata } from 'next';
import Link from 'next/link';
import { getProvider, calculateTransfer, getCorridor, formatCurrency, formatCost } from '@/lib/calculator';
import AffiliateCTA from '@/components/ui/AffiliateCTA';
import TrustBar from '@/components/ui/TrustBar';
import { Check, X, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wise vs Remitly 2026 — Which Is Cheaper? Full Comparison | SendMoneySmart',
  description:
    'Wise vs Remitly: side-by-side comparison of fees, exchange rates, speed, and cash pickup. Find out which is cheaper for your transfer in 2026.',
  alternates: { canonical: '/compare/wise-vs-remitly/' },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wise vs Remitly 2026 — Full Comparison of Fees, Rates, and Speed',
  description: 'Side-by-side comparison of Wise and Remitly for international money transfers including fees, exchange rates, transfer speed, and cash pickup availability.',
  publisher: {
    '@type': 'Organization',
    name: 'Albor Digital LLC',
    url: 'https://albor.digital',
  },
  url: 'https://www.sendmoneysmart.com/compare/wise-vs-remitly/',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Wise cheaper than Remitly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wise is typically cheaper than Remitly for most transfer amounts and corridors. Wise uses the real mid-market exchange rate with 0% FX margin, while Remitly applies a 1–2% FX margin on top of the rate. On a $500 transfer, Wise usually costs $4–6 less in total fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Remitly faster than Wise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Remitly is significantly faster than Wise for most corridors. Remitly Express delivers in minutes to hours. Wise typically takes 1–2 business days for bank-to-bank transfers. If speed is critical, Remitly wins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Remitly offer cash pickup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Remitly offers cash pickup at thousands of partner locations in countries like India, Philippines, Mexico, and more. Wise does not support cash pickup — it is bank transfer only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for large transfers — Wise or Remitly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wise is better for large transfers. Wise supports transfers up to $1,000,000 and its 0% FX margin saves significant money on large amounts. Remitly has a $30,000 maximum limit and the 1% FX margin costs more as the amount increases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are both Wise and Remitly safe to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Both Wise and Remitly are regulated financial institutions. Wise is regulated in the UK (FCA), USA, EU, Canada, and more. Remitly is regulated as a money transmitter in all 50 US states and multiple other countries. Both have millions of customers.',
      },
    },
  ],
};

export default function WiseVsRemitlyPage() {
  const wise = getProvider('wise');
  const remitly = getProvider('remitly');
  const corridor = getCorridor('canada-to-india');

  if (!wise || !remitly || !corridor) return null;

  const amount = 500;
  const results = calculateTransfer(amount, corridor, ['wise', 'remitly']);
  const wiseResult = results.find((r) => r.provider.id === 'wise');
  const remitlyResult = results.find((r) => r.provider.id === 'remitly');

  const comparisonRows = [
    { label: 'Transfer fee (CAD $500)', wise: `CAD ${(wise.fee_flat_cad + 500 * wise.fee_percent).toFixed(2)}`, remitly: `CAD ${(remitly.fee_flat_cad + 500 * remitly.fee_percent).toFixed(2)}`, wiseWins: true },
    { label: 'FX margin', wise: '0% — mid-market rate', remitly: '~1% above mid-market', wiseWins: true },
    { label: 'Total cost (CAD $500)', wise: wiseResult ? formatCost(wiseResult.totalCost, 'CAD') : '—', remitly: remitlyResult ? formatCost(remitlyResult.totalCost, 'CAD') : '—', wiseWins: true },
    { label: 'Recipient receives', wise: wiseResult ? formatCurrency(wiseResult.amountReceived, '₹') : '—', remitly: remitlyResult ? formatCurrency(remitlyResult.amountReceived, '₹') : '—', wiseWins: true },
    { label: 'Transfer speed', wise: '1–2 business days', remitly: 'Minutes to hours', wiseWins: false },
    { label: 'Cash pickup', wise: 'No', remitly: 'Yes', wiseWins: false },
    { label: 'Max transfer limit', wise: '$1,000,000', remitly: '$30,000', wiseWins: true },
    { label: 'Mobile app', wise: '⭐⭐⭐⭐⭐', remitly: '⭐⭐⭐⭐⭐', wiseWins: null },
    { label: 'Regulated', wise: 'Yes (FCA, FinCEN, FINTRAC)', remitly: 'Yes (50 US states, more)', wiseWins: null },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TrustBar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs mb-6 flex-wrap" style={{ color: 'var(--text-dim)' }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>Wise vs Remitly</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Wise vs Remitly (2026) — Which Is Cheaper?
        </h1>

        {/* Direct answer block */}
        <div
          className="direct-answer-block rounded-xl border p-4 text-sm leading-relaxed mb-8"
          style={{ backgroundColor: 'var(--accent-muted)', borderColor: 'var(--border-accent)' }}
        >
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>Quick answer: </span>
          Wise is cheaper for most transfers — it uses the mid-market exchange rate with 0% FX margin, saving you $5–$15 on a $500 transfer compared to Remitly.
          Remitly is faster (minutes vs days) and supports cash pickup. Choose Wise to maximize what your recipient receives; choose Remitly for urgent transfers or cash pickup.
        </div>

        {/* Head-to-head cards */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { provider: wise, result: wiseResult, badge: '💰 Cheapest', affiliateUrl: `${wise.affiliate_url}${wise.affiliate_params}wise-vs-remitly` },
            { provider: remitly, result: remitlyResult, badge: '⚡ Fastest', affiliateUrl: `${remitly.affiliate_url}${remitly.affiliate_params}wise-vs-remitly` },
          ].map(({ provider, result, badge, affiliateUrl }) => (
            <div
              key={provider.id}
              className="rounded-xl border p-4"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: provider.color + '22', color: provider.color }}>
                  {provider.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>{provider.name}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--accent)' }}>{badge}</span>
                </div>
              </div>
              {result && (
                <div className="mb-3">
                  <div className="text-xs mb-0.5" style={{ color: 'var(--text-dim)' }}>CAD 500 → recipient gets</div>
                  <div className="text-xl font-bold" style={{ fontFamily: 'var(--font-mono-data)', color: 'var(--accent)' }}>
                    {formatCurrency(result.amountReceived, '₹')}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Total fees: {formatCost(result.totalCost, 'CAD')} · {provider.speed}
                  </div>
                </div>
              )}
              <AffiliateCTA url={affiliateUrl} label={`Send with ${provider.name} →`} variant="primary" />
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Wise vs Remitly — Full Feature Comparison 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border)' }}>
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>Feature</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider" style={{ color: wise.color }}>Wise</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider" style={{ color: remitly.color }}>Remitly</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} style={{ borderTop: i > 0 ? '1px solid var(--border)' : undefined, backgroundColor: 'var(--bg-surface)' }}>
                    <td className="px-4 py-3 font-medium text-xs" style={{ color: 'var(--text-muted)' }}>{row.label}</td>
                    <td className="px-4 py-3 text-center text-xs">
                      <span style={{ color: row.wiseWins === true ? 'var(--accent)' : 'var(--text-primary)', fontFamily: 'var(--font-mono-data)' }}>
                        {row.wiseWins === true && <Check size={12} className="inline mr-1" style={{ color: 'var(--accent)' }} />}
                        {row.wiseWins === false && row.wise === 'No' && <X size={12} className="inline mr-1" style={{ color: '#FF6B6B' }} />}
                        {row.wise}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-xs">
                      <span style={{ color: row.wiseWins === false ? 'var(--accent)' : 'var(--text-primary)', fontFamily: 'var(--font-mono-data)' }}>
                        {row.wiseWins === false && <Check size={12} className="inline mr-1" style={{ color: 'var(--accent)' }} />}
                        {row.remitly}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* When to use each */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            When to Use Wise vs When to Use Remitly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                provider: 'Wise',
                color: wise.color,
                scenarios: [
                  'You want the maximum amount delivered',
                  'Sending over $500 (FX margin savings grow with amount)',
                  'Not in a rush — 1–2 days is fine',
                  'Sending large amounts over $10,000',
                  'Recipient has a bank account',
                ],
              },
              {
                provider: 'Remitly',
                color: remitly.color,
                scenarios: [
                  'Transfer needs to arrive today or tonight',
                  'Recipient needs cash pickup',
                  'First-time sender (promotional rates often available)',
                  'Sending under $200 where fee difference is small',
                  'Mobile-first experience preferred',
                ],
              },
            ].map((item) => (
              <div key={item.provider} className="rounded-xl border p-4" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
                <div className="font-bold mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: item.color }}>
                  <Shield size={16} />
                  Choose {item.provider} when…
                </div>
                <ul className="space-y-2">
                  {item.scenarios.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Frequently Asked Questions — Wise vs Remitly
          </h2>
          <div className="space-y-3 text-sm">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="rounded-xl border p-4" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
                <div className="font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{item.name}</div>
                <div style={{ color: 'var(--text-muted)' }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Related corridors */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Compare Wise vs Remitly for Specific Corridors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Canada → India', slug: 'canada-to-india' },
              { label: 'Canada → Philippines', slug: 'canada-to-philippines' },
              { label: 'USA → Mexico', slug: 'usa-to-mexico' },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/send-money/${c.slug}`}
                className="rounded-lg border p-3 text-sm font-medium hover:border-[var(--border-accent)] transition-colors"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </section>

        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-dim)' }}>
          <Clock size={11} />
          Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}. Rates are estimates.
        </div>
      </div>
    </>
  );
}
