import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | SendMoneySmart',
  description: 'Disclaimer for SendMoneySmart. Rates shown are estimates for comparison purposes only.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/disclaimer/' },
  openGraph: {
    title: 'Disclaimer | SendMoneySmart',
    description: 'Disclaimer for SendMoneySmart. Rates shown are estimates for comparison purposes only.',
    url: 'https://www.sendmoneysmart.com/disclaimer/',
    siteName: 'SendMoneySmart',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <a href="/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Disclaimer</span>
        </nav>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-3xl font-bold mb-2">
          Disclaimer
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="text-sm">
          Albor Digital LLC · Effective Date: January 1, 2026
        </p>
      </div>

      <div className="space-y-8" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">1. General Disclaimer</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            The products, tools, data, and content provided by Albor Digital LLC are offered for informational and practical utility purposes only. While we strive for accuracy and usefulness, we make no representations or warranties — express or implied — regarding the completeness, accuracy, reliability, or suitability of any information or tool for any particular purpose. All use is at your own risk.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">2. Rates and Fees Are Estimates</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            All exchange rates, transfer fees, and cost comparisons shown on SendMoneySmart are estimates based on publicly available provider information and approximate mid-market rates. They are provided for general comparison purposes only. Actual rates and fees may differ based on: the payment method you use (bank transfer vs. debit/credit card), the exact amount transferred, your location, the recipient&apos;s location, current market conditions, and provider-specific promotions or pricing changes. Always verify the final rate and total cost directly with your chosen provider before initiating any transfer.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">3. No Financial Advice</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Nothing on SendMoneySmart constitutes financial, investment, tax, or legal advice of any kind. The comparisons and recommendations on this site are based on publicly available fee and rate data and are intended to help you make an informed decision — not to replace advice from a qualified professional. Always consult appropriate professionals for decisions involving significant sums.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">4. Affiliate Relationships</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            SendMoneySmart may earn affiliate commissions when you click on provider links and complete a transfer or sign up. This compensation does not influence the order or ranking of providers shown in our comparison tables — rankings are determined solely by calculated total cost using our transparent fee formula. Our goal is to show you the cheapest option accurately, regardless of commission structure.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">5. Third-Party Providers</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We are not affiliated with, endorsed by, or officially partnered with Wise, Remitly, Western Union, Xoom, OFX, or any other provider listed on this site, except where an affiliate relationship exists. All provider names, logos, and trademarks are the property of their respective owners. Provider data may change at any time without notice.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">6. Limitation of Liability</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            To the fullest extent permitted by law, Albor Digital LLC and its owner shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from reliance on or use of the rates, fees, or comparisons shown on SendMoneySmart.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">7. Jurisdictional Notice</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            SendMoneySmart is operated from Canada and the United States. We make no representation that our tools are appropriate or available for use in all jurisdictions. Users who access our products from outside these regions do so at their own initiative and are responsible for compliance with local laws.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">8. Contact</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Questions about this disclaimer: <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>
          </p>
        </section>

      </div>
    </main>
  );
}
