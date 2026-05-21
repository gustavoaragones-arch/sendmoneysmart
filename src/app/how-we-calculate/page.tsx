import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Calculate Money Transfer Costs | SendMoneySmart',
  description:
    'Our methodology for calculating the true cost of international money transfers. We include transfer fees AND exchange rate margins to show you the real total cost.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/how-we-calculate/' },
  openGraph: {
    title: 'How We Calculate Money Transfer Costs | SendMoneySmart',
    description:
      'Our methodology for calculating the true cost of international money transfers. We include transfer fees AND exchange rate margins to show you the real total cost.',
    url: 'https://www.sendmoneysmart.com/how-we-calculate/',
    siteName: 'SendMoneySmart',
    type: 'website',
  },
};

const methodologySchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How SendMoneySmart Calculates the True Cost of Money Transfers',
  description:
    'Methodology for calculating total transfer cost = transfer fee + FX margin loss, to find the cheapest provider for any remittance corridor.',
  publisher: {
    '@type': 'Organization',
    name: 'Albor Digital LLC',
    url: 'https://albor.digital',
  },
  url: 'https://www.sendmoneysmart.com/how-we-calculate/',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Calculate the True Cost of a Money Transfer',
  description: 'Step-by-step methodology to find the real total cost of an international money transfer, including both the transfer fee and the exchange rate margin.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Identify the mid-market exchange rate',
      text: 'The mid-market rate is the real exchange rate — the midpoint between buy and sell prices on the global forex market. You can see it on Google or XE.com.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Calculate the transfer fee',
      text: 'Transfer fee = flat fee + (amount × percentage fee). Example: Wise charges $1.50 + 0.65% on a $500 CAD transfer = $1.50 + $3.25 = $4.75 fee.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Calculate the FX margin loss',
      text: 'FX margin loss = amount after fee × mid-market rate × provider FX margin. Example: Western Union applies a 2.5% FX margin, costing ~$12.38 on a $500 transfer.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Calculate total cost',
      text: 'Total cost = transfer fee + FX margin loss. This is the true cost of the transfer — the amount the sender loses relative to the mid-market rate.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Calculate amount received',
      text: 'Amount received = (amount − fee) × (mid-market rate × (1 − FX margin)). This is exactly what the recipient receives in their local currency.',
    },
  ],
};

export default function HowWeCalculatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          How We Calculate Transfer Costs
        </h1>
        <p className="text-lg mb-10" style={{ color: 'var(--text-muted)' }}>
          Most comparison sites only show you the transfer fee. We show you the full picture —
          fees plus the hidden cost of the exchange rate margin.
        </p>

        {/* The problem */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Why Transfer Fees Alone Are Misleading
          </h2>
          <div
            className="rounded-xl border p-6 text-sm leading-relaxed space-y-3"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <p>
              When you send money internationally, providers make money in two ways:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>Transfer fee</strong> — a flat or percentage charge displayed upfront. Example: $5.00 flat fee.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>FX margin</strong> — a markup applied to the exchange rate. If the mid-market rate is ₹62.50 per CAD, they might give you ₹61.00 — pocketing the 2.4% difference silently.
              </li>
            </ol>
            <p>
              A provider with a $0 transfer fee and a 2.5% FX margin costs <em>more</em> than a provider with a $5 fee and 0% FX margin on most transfer amounts above $200. Comparing fees alone leads to the wrong choice.
            </p>
          </div>
        </section>

        {/* The formula */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            The True Cost Formula
          </h2>
          <div
            className="rounded-xl border p-6 text-sm space-y-4"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <div
              className="rounded-lg p-4 font-mono-data text-sm space-y-2"
              style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--accent)' }}
            >
              <div>fee = flat_fee + (amount × fee_percent)</div>
              <div>fx_loss = (amount − fee) × mid_rate × fx_margin</div>
              <div>total_cost = fee + fx_loss</div>
              <div>amount_received = (amount − fee) × mid_rate × (1 − fx_margin)</div>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              We apply this formula to every provider for every amount you enter. The provider with the lowest <code style={{ color: 'var(--accent)' }}>total_cost</code> is ranked first. The provider with the highest <code style={{ color: 'var(--accent)' }}>amount_received</code> gives your recipient the most money — which is the same ranking.
            </p>
          </div>
        </section>

        {/* Worked example */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Worked Example — CAD $500 to India
          </h2>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border)' }}>
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  {['Provider', 'Transfer Fee', 'FX Margin', 'FX Loss', 'Total Cost', 'Recipient Gets'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { provider: 'Wise', fee: 'CAD $4.75', fxMargin: '0%', fxLoss: 'CAD $0.00', total: 'CAD $4.75', receives: '₹30,955', winner: true },
                  { provider: 'Remitly', fee: 'CAD $7.50', fxMargin: '1.0%', fxLoss: 'CAD $4.93', total: 'CAD $12.43', receives: '₹30,474', winner: false },
                  { provider: 'Western Union', fee: 'CAD $7.50', fxMargin: '2.5%', fxLoss: 'CAD $12.31', total: 'CAD $19.81', receives: '₹29,951', winner: false },
                ].map((row, i) => (
                  <tr
                    key={row.provider}
                    className={row.winner ? 'winner-row' : ''}
                    style={{
                      borderTop: i > 0 ? '1px solid var(--border)' : undefined,
                      backgroundColor: row.winner ? undefined : 'var(--bg-surface)',
                    }}
                  >
                    <td className="px-4 py-3 font-semibold">
                      {row.winner && <span className="text-xs px-1.5 py-0.5 rounded mr-1.5" style={{ backgroundColor: 'var(--accent)', color: '#0A1628', fontSize: '10px' }}>BEST</span>}
                      {row.provider}
                    </td>
                    <td className="px-4 py-3 font-mono-data">{row.fee}</td>
                    <td className="px-4 py-3 font-mono-data">{row.fxMargin}</td>
                    <td className="px-4 py-3 font-mono-data" style={{ color: row.fxLoss === 'CAD $0.00' ? 'var(--accent)' : '#FF6B6B' }}>{row.fxLoss}</td>
                    <td className="px-4 py-3 font-mono-data font-bold">{row.total}</td>
                    <td className="px-4 py-3 font-mono-data font-bold" style={{ color: row.winner ? 'var(--accent)' : undefined }}>{row.receives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-dim)' }}>
            Based on approximate mid-market rate of CAD 1 = ₹62.50. For illustrative purposes.
          </p>
        </section>

        {/* Exchange rates */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            About Our Exchange Rates
          </h2>
          <div
            className="rounded-xl border p-6 text-sm leading-relaxed space-y-3"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <p>
              We currently use approximate mid-market rates based on recent averages. These rates are updated
              periodically and are clearly marked as estimates on every comparison page.
            </p>
            <p>
              In the future, we plan to integrate live exchange rate data. Until then, the relative
              rankings between providers are accurate — a provider with 0% FX margin will always
              beat a provider with 2.5% margin regardless of the exact mid-market rate.
            </p>
            <p>
              <strong style={{ color: 'var(--text-primary)' }}>Always verify the current rate directly with your chosen provider</strong> before
              completing a transfer. Rates fluctuate throughout the day.
            </p>
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/about/"
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            ← About SendMoneySmart
          </Link>
          <Link
            href="/#corridors"
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            Compare corridors →
          </Link>
        </div>
      </div>
    </>
  );
}
