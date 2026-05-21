import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/ui/TrustBar';

export const metadata: Metadata = {
  title: 'TransferWise Is Now Wise — Compare Rates 2026 | SendMoneySmart',
  description:
    'TransferWise rebranded to Wise in 2021. Compare current Wise fees vs Remitly, Western Union and more for sending money internationally.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/transferwise/' },
  openGraph: {
    title: 'TransferWise Is Now Wise — Compare Rates 2026 | SendMoneySmart',
    description:
      'TransferWise rebranded to Wise in 2021. Compare current Wise fees vs Remitly, Western Union and more for sending money internationally.',
    url: 'https://www.sendmoneysmart.com/transferwise/',
    siteName: 'SendMoneySmart',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is TransferWise now called Wise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TransferWise rebranded to Wise in February 2021. The service, fees, and ownership are unchanged.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are TransferWise and Wise the same company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Wise is the same legal entity as TransferWise — same regulators, same customer accounts, same mid-market exchange rate model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TransferWise still available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, under the Wise brand. The TransferWise website and app redirect to Wise. You can log in at wise.com with your existing TransferWise credentials.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find my old TransferWise account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Log in at wise.com using the same email and password you used for TransferWise. Your balance, recipients, and transfer history carry over automatically.',
      },
    },
  ],
};

const corridorLinks = [
  { label: 'USA → India', slug: 'usa-to-india' },
  { label: 'USA → Mexico', slug: 'usa-to-mexico' },
  { label: 'USA → Philippines', slug: 'usa-to-philippines' },
  { label: 'Canada → India', slug: 'canada-to-india' },
];

export default function TransferwisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TrustBar />

      <main className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>TransferWise → Wise</span>
        </nav>

        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          TransferWise Is Now Wise — Here&apos;s What Changed (2026)
        </h1>

        <div
          className="rounded-xl border p-5 mb-8 text-sm leading-relaxed"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-accent)',
            color: 'var(--text-primary)',
          }}
        >
          <strong>Direct answer:</strong> TransferWise rebranded to Wise in February 2021. The
          service, fees, and ownership are the same. The Wise app and website are the rebrand of
          TransferWise.
        </div>

        <section className="mb-10 space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          <p>
            If you searched for &quot;TransferWise&quot; in 2026, you are looking for{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Wise</strong>. The company kept its
            mid-market exchange rate model and transparent fee structure — only the name and logo
            changed. Wise remains regulated by the FCA (UK), FinCEN (USA), FINTRAC (Canada), and
            dozens of other financial authorities worldwide.
          </p>
          <p>
            For international transfers, Wise is still typically the cheapest option when sending
            bank-to-bank, because it charges 0% FX margin on top of a small percentage fee. Compare
            Wise against Remitly, Western Union, and Xoom on your specific corridor before sending.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Compare Wise (TransferWise) by Corridor
          </h2>
          <ul className="space-y-2 text-sm">
            {corridorLinks.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/send-money/${c.slug}/`}
                  className="hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {c.label} — fees &amp; rates
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Link href="/wise-vs-remitly/" className="hover:underline" style={{ color: 'var(--accent)' }}>
              Wise vs Remitly full comparison →
            </Link>
            {' · '}
            <Link href="/providers/wise/" className="hover:underline" style={{ color: 'var(--accent)' }}>
              Wise provider review →
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {(
              faqSchema.mainEntity as Array<{
                name: string;
                acceptedAnswer: { text: string };
              }>
            ).map((item) => (
              <div
                key={item.name}
                className="rounded-xl border p-4 text-sm"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
              >
                <div
                  className="font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                  {item.name}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        <div
          className="rounded-xl border p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-accent)' }}
        >
          <div>
            <div className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to send with Wise?
            </div>
            <div className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Formerly TransferWise · Mid-market rates · 16M+ customers
            </div>
          </div>
          <Link
            href="/providers/wise/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{
              background: 'var(--accent)',
              color: 'var(--bg-primary)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Wise review &amp; rates →
          </Link>
        </div>
      </main>
    </>
  );
}
