import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How International Money Transfers Work | SendMoneySmart',
  description: 'Learn how international money transfers work — exchange rates, FX margins, transfer fees, and how to find the cheapest way to send money abroad.',
  alternates: { canonical: 'https://sendmoneysmart.com/how-money-transfers-work/' },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an FX margin and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An FX margin is the difference between the mid-market exchange rate (the real rate you see on Google) and the rate a provider gives you. A 2% FX margin on a $500 transfer costs you $10 in hidden fees — even if the advertised transfer fee is zero. Always check the total cost including the FX margin."
      }
    },
    {
      "@type": "Question",
      name: "What is the mid-market exchange rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mid-market rate is the midpoint between buy and sell prices for a currency pair. It is the rate you see on Google or XE.com. It is the most fair rate. Wise passes this rate directly to customers. Most other providers add a margin of 1–3% above it."
      }
    },
    {
      "@type": "Question",
      name: "Why is the total cost different from the transfer fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Providers make money in two ways: a transfer fee (shown upfront) and an FX margin (hidden in the exchange rate). A provider with a $0 transfer fee can still be more expensive than Wise if they apply a 3% FX margin. Total cost = transfer fee + FX loss."
      }
    },
    {
      "@type": "Question",
      name: "How long does an international money transfer take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transfer times vary by provider and method. Bank-to-bank transfers via Wise typically take 1–2 business days. Remitly and Western Union offer express delivery in minutes for cash pickup or debit card-funded transfers. SWIFT bank transfers can take 3–5 business days."
      }
    }
  ]
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10">
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <a href="/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>How It Works</span>
          </nav>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold mb-4">
            How International Money Transfers Work
          </h1>
          <p style={{ color: 'var(--text-muted)' }} className="text-lg">
            Understanding fees, exchange rates, and how to find the cheapest way to send money abroad.
          </p>
        </div>

        <div className="space-y-12" style={{ fontFamily: 'var(--font-body)', lineHeight: '1.8' }}>

          {/* Section 1 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-4">
              The Two Costs You Always Pay
            </h2>
            <p style={{ color: 'var(--text-muted)' }} className="mb-4">
              Every international money transfer has two costs — but most providers only show you one.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
                <div className="text-2xl mb-2">💸</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="font-semibold mb-2">Transfer Fee</h3>
                <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                  The upfront fee shown at checkout. Can be a flat amount ($3.99) or a percentage (1.5% of amount). This is the visible cost.
                </p>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-accent)' }}>
                <div className="text-2xl mb-2">🔍</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="font-semibold mb-2">FX Margin (The Hidden Cost)</h3>
                <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                  The difference between the real exchange rate and the rate you&apos;re given. A 2% margin on $500 costs you $10 — invisibly. This is where most providers make their money.
                </p>
              </div>
            </div>
            <div className="rounded-xl p-5 border" style={{ background: 'var(--accent-muted)', borderColor: 'var(--border-accent)' }}>
              <p style={{ color: 'var(--text-primary)' }} className="text-sm font-medium">
                <strong>The formula:</strong> Total cost = Transfer fee + (Amount × FX margin %). SendMoneySmart uses this exact formula to rank providers — so you always see the real cost.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-4">
              What Is the Mid-Market Rate?
            </h2>
            <p style={{ color: 'var(--text-muted)' }} className="mb-4">
              The mid-market rate is the &quot;real&quot; exchange rate — the midpoint between the buy and sell price for a currency pair. It&apos;s the rate you see on Google, XE.com, or Bloomberg.
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="mb-4">
              Wise is the only major provider that passes this rate directly to customers with no margin. Every other provider adds a margin of 1–3% above the mid-market rate — which means you receive less.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              On a $500 CAD transfer to India, a 2.5% FX margin (like Western Union&apos;s) costs you approximately $12.50 CAD in hidden fees — on top of any visible transfer fee.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-4">
              How to Use SendMoneySmart
            </h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Pick your corridor', desc: 'Select the country you\'re sending from and the country receiving the money. Each corridor has its own comparison page.' },
                { step: '02', title: 'Enter your amount', desc: 'Type in how much you want to send. The calculator instantly ranks all providers by true total cost — cheapest first.' },
                { step: '03', title: 'Compare the real costs', desc: 'See exactly how much your recipient will receive from each provider, including the hidden FX margin, not just the transfer fee.' },
                { step: '04', title: 'Click and send', desc: 'Click through to your chosen provider. We may earn an affiliate commission — at no extra cost to you.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
                  <div className="text-2xl font-bold shrink-0" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{step}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="font-semibold mb-1">{title}</h3>
                    <p style={{ color: 'var(--text-muted)' }} className="text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section>
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
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-2xl font-bold mb-3">
              Ready to find the cheapest transfer?
            </h2>
            <p style={{ color: 'var(--text-muted)' }} className="mb-6">Pick your corridor and compare rates in seconds.</p>
            <a
              href="/#corridors"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#0A1628', fontFamily: 'var(--font-display)' }}
            >
              Compare corridors →
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
