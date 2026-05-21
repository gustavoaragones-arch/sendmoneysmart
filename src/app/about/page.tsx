import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Calculator, ExternalLink, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SendMoneySmart — How We Compare Money Transfers | SendMoneySmart',
  description:
    'Learn how SendMoneySmart compares international money transfer providers. Who we are, how our calculations work, and our affiliate disclosure.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/about/' },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About SendMoneySmart',
  url: 'https://www.sendmoneysmart.com/about/',
  description:
    'SendMoneySmart is a remittance comparison engine operated by Albor Digital LLC. We help immigrants and international senders find the cheapest way to send money abroad.',
  publisher: {
    '@type': 'Organization',
    name: 'Albor Digital LLC',
    url: 'https://albor.digital',
    contactPoint: { '@type': 'ContactPoint', email: 'contact@albor.digital' },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          About SendMoneySmart
        </h1>
        <p className="text-lg mb-10" style={{ color: 'var(--text-muted)' }}>
          A comparison engine for international money transfers. Built for immigrants, expats, and
          anyone sending money home.
        </p>

        {/* What we are */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            What is SendMoneySmart?
          </h2>
          <div className="rounded-xl border p-6 text-sm leading-relaxed space-y-3"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
            <p>
              SendMoneySmart is a free comparison tool that shows you the cheapest, fastest, and best
              options for sending money from Canada or the USA to countries around the world.
            </p>
            <p>
              We compare providers including Wise, Remitly, Western Union, Xoom, and OFX — showing
              their true total cost, including both transfer fees and the exchange rate margin they
              apply. Most people only look at the transfer fee. We show you the full picture.
            </p>
            <p>
              We do not handle any money. We are a comparison and information service only. When you
              click through to a provider, you transact directly with them.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            How Our Comparison Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Calculator size={20} />,
                title: 'True cost calculation',
                desc: 'We calculate total cost = transfer fee + FX margin loss. Most comparisons only show fees. We show what the recipient actually receives.',
              },
              {
                icon: <Shield size={20} />,
                title: 'Regulated providers only',
                desc: 'We only list providers that are regulated financial institutions in their operating jurisdictions. No unregulated services.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-4"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent)' }}>
                  {item.icon}
                  <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    {item.title}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/how-we-calculate"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              Read our full calculation methodology →
            </Link>
          </div>
        </section>

        {/* Operator */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Who Operates SendMoneySmart?
          </h2>
          <div className="rounded-xl border p-6 text-sm leading-relaxed space-y-2"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
            <p>
              SendMoneySmart is owned and operated by <strong style={{ color: 'var(--text-primary)' }}>Albor Digital LLC</strong>, a
              Wyoming-registered company in the United States.
            </p>
            <p>
              We are not a bank, money transmitter, or financial advisor. We are a comparison
              and information service. Rates displayed are estimates for comparison purposes —
              always verify directly with your provider before sending.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Mail size={14} style={{ color: 'var(--accent)' }} />
              <a
                href="mailto:contact@albor.digital"
                className="hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                contact@albor.digital
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink size={14} style={{ color: 'var(--accent)' }} />
              <a
                href="https://albor.digital"
                target="_blank"
                rel="noopener"
                className="hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                albor.digital
              </a>
            </div>
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Affiliate Disclosure
          </h2>
          <div
            className="rounded-xl border p-6 text-sm leading-relaxed space-y-3"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <p>
              SendMoneySmart earns affiliate commissions when you click on a provider link and
              complete a money transfer. This is how we fund the service.
            </p>
            <p>
              Our affiliate relationships do not influence our rankings or comparisons. Providers
              are ranked by lowest total cost (fee + FX margin) for the entered amount. We do not
              accept payment for placement or to alter rankings.
            </p>
            <p>
              All outbound provider links are marked with <code style={{ color: 'var(--accent)' }}>rel=&quot;nofollow sponsored&quot;</code>.
            </p>
          </div>
        </section>

        {/* Rates disclaimer */}
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Exchange rates shown are approximations based on mid-market rates at the time of our last
          data review. Actual rates may differ. SendMoneySmart accepts no liability for decisions
          made based on the information presented.
        </p>
      </div>
    </>
  );
}
