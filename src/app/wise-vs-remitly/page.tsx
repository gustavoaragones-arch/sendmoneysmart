import { Metadata } from 'next';
import { calculateTransfer, getCorridor } from '@/lib/calculator';

export const metadata: Metadata = {
  title: 'Wise vs Remitly — Which Is Cheaper? (2026) | SendMoneySmart',
  description: 'Wise vs Remitly comparison for 2026. Which is cheaper, faster, and better for your corridor? Full fee breakdown, exchange rates, and verdict.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/wise-vs-remitly/' },
  openGraph: {
    title: 'Wise vs Remitly — Which Is Cheaper? (2026) | SendMoneySmart',
    description:
      'Wise vs Remitly comparison for 2026. Which is cheaper, faster, and better for your corridor? Full fee breakdown, exchange rates, and verdict.',
    url: 'https://www.sendmoneysmart.com/wise-vs-remitly/',
    siteName: 'SendMoneySmart',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Wise cheaper than Remitly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most bank-to-bank transfers, Wise is cheaper than Remitly because Wise uses the mid-market exchange rate with zero FX margin. Remitly adds approximately 1% FX margin on top of their transfer fee. On a $500 CAD transfer to India, Wise typically costs $4.75 total vs Remitly's $315+ total cost."
      }
    },
    {
      "@type": "Question",
      name: "Is Remitly faster than Wise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Remitly's Express option delivers in minutes to hours. Wise typically takes 1–2 business days for bank deposits. If speed is the priority, Remitly is the better choice."
      }
    },
    {
      "@type": "Question",
      name: "Which is better for cash pickup — Wise or Remitly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remitly is better for cash pickup. Wise only supports bank-to-bank transfers and does not offer cash pickup. Remitly has extensive cash pickup networks in India, Philippines, Mexico, and other major corridors."
      }
    },
    {
      "@type": "Question",
      name: "Does Wise use the real exchange rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Wise uses the mid-market rate — the same rate shown on Google — with zero FX margin. You pay a small transparent percentage fee (around 0.65%), but the exchange rate itself is never marked up."
      }
    },
    {
      "@type": "Question",
      name: "Which is safer — Wise or Remitly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are safe and regulated. Wise is regulated by the FCA (UK), FinCEN (USA), and FINTRAC (Canada). Remitly is licensed as a money transmitter in all US states and regulated in Canada and other markets. Both hold customer funds in segregated accounts."
      }
    }
  ]
};

export default function WiseVsRemitlyPage() {
  const corridor = getCorridor('canada-to-india');
  const results = corridor
    ? calculateTransfer(500, corridor, ['wise', 'remitly'])
    : [];
  const wise = results.find(r => r.provider.id === 'wise');
  const remitly = results.find(r => r.provider.id === 'remitly');

  const comparisonRows = [
    { label: 'Transfer fee (CAD $500)', wise: wise ? `CAD ${wise.fee.toFixed(2)}` : '—', remitly: remitly ? `CAD ${remitly.fee.toFixed(2)}` : '—' },
    { label: 'FX margin', wise: '0% (mid-market rate)', remitly: '~1%' },
    { label: 'Total cost (CAD $500 → INR)', wise: wise ? `CAD ${wise.totalCost.toFixed(2)}` : '—', remitly: remitly ? `CAD ${remitly.totalCost.toFixed(2)}` : '—' },
    { label: 'Recipient receives', wise: wise ? `₹${Math.round(wise.amountReceived).toLocaleString()}` : '—', remitly: remitly ? `₹${Math.round(remitly.amountReceived).toLocaleString()}` : '—' },
    { label: 'Delivery speed', wise: '1–2 business days', remitly: 'Minutes–hours' },
    { label: 'Cash pickup', wise: '❌ No', remitly: '✅ Yes' },
    { label: 'Mobile app', wise: '✅ Yes', remitly: '✅ Yes' },
    { label: 'Regulated', wise: '✅ FCA, FinCEN, FINTRAC', remitly: '✅ Multi-jurisdiction' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10">
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <a href="/" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Wise vs Remitly</span>
          </nav>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold mb-4">
            Wise vs Remitly — Which Is Cheaper? (2026)
          </h1>
          <p style={{ color: 'var(--text-muted)' }} className="text-lg">
            Full fee comparison, exchange rate breakdown, and a clear verdict for your corridor.
          </p>
          <p style={{ color: 'var(--text-dim)' }} className="text-sm mt-2">
            Last updated: April 2026 · Based on CAD $500 transfer to India
          </p>
        </div>

        {/* Verdict Box */}
        <div className="rounded-2xl p-6 mb-10 border-2" style={{ background: 'var(--accent-muted)', borderColor: 'var(--border-accent)' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>Quick Verdict</div>
          <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }} className="leading-relaxed">
            <strong>Wise is cheaper</strong> for bank-to-bank transfers — it uses the real exchange rate with no FX margin.
            <strong> Remitly is faster</strong> and better for cash pickup. If you want the lowest total cost, choose Wise.
            If your recipient needs cash in hand within the hour, choose Remitly.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-4">
            Wise vs Remitly — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left p-4" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>Feature</th>
                  <th className="text-left p-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>Wise 🏆</th>
                  <th className="text-left p-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Remitly</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-elevated)',
                      borderBottom: '1px solid var(--border)'
                    }}
                  >
                    <td className="p-4 font-medium" style={{ color: 'var(--text-muted)' }}>{row.label}</td>
                    <td className="p-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{row.wise}</td>
                    <td className="p-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{row.remitly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* When to use each */}
        <section className="mb-10">
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-4">
            When to Use Wise vs Remitly
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-accent)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="font-bold mb-3">Choose Wise when:</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>✅ You want the lowest total cost</li>
                <li>✅ Your recipient has a bank account</li>
                <li>✅ Timing is flexible (1–2 days is fine)</li>
                <li>✅ You&apos;re sending over $1,000</li>
                <li>✅ You want full transparency on fees</li>
              </ul>
            </div>
            <div className="rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="font-bold mb-3">Choose Remitly when:</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>⚡ You need money there in minutes</li>
                <li>🏪 Your recipient needs cash pickup</li>
                <li>📱 You prefer a mobile-first experience</li>
                <li>🆕 You&apos;re a first-time sender (promotions)</li>
                <li>🌍 Your corridor isn&apos;t well-supported by Wise</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="font-semibold mb-2">{item.name}</h3>
                <p style={{ color: 'var(--text-muted)' }} className="text-sm">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 text-center border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-accent)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-xl font-bold mb-3">
            Compare Wise and Remitly for your specific corridor
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <a href="/send-money/canada-to-india/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90" style={{ background: 'var(--accent)', color: '#0A1628', fontFamily: 'var(--font-display)' }}>
              Canada → India →
            </a>
            <a href="/send-money/usa-to-india/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 border" style={{ background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border)', fontFamily: 'var(--font-display)' }}>
              USA → India →
            </a>
            <a href="/send-money/usa-to-mexico/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 border" style={{ background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border)', fontFamily: 'var(--font-display)' }}>
              USA → Mexico →
            </a>
          </div>
        </section>

        <div className="mt-8 rounded-xl p-4 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-dim)' }}>
            <strong style={{ color: 'var(--text-muted)' }}>Disclaimer:</strong> Comparison based on estimated rates for a CAD $500 transfer to India as of April 2026. Actual costs may vary. We may earn affiliate commissions from provider links. Operated by Albor Digital LLC — <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>
          </p>
        </div>
      </main>
    </>
  );
}
