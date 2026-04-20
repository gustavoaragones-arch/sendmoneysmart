import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SendMoneySmart',
  description: 'Terms of Service for SendMoneySmart, operated by Albor Digital LLC.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/terms/' },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <a href="/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Terms of Use</span>
        </nav>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-3xl font-bold mb-2">
          Terms of Service
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="text-sm">
          Albor Digital LLC · Effective Date: January 1, 2026 · Last Updated: January 1, 2026
        </p>
      </div>

      <div className="space-y-8" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            By accessing or using any website, web application, mobile application, or digital tool owned and operated by Albor Digital LLC ("Albor Digital," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our products or services. These Terms apply to all products and digital properties operated under the Albor Digital brand, including SendMoneySmart.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">2. Who We Are</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Albor Digital LLC is an independent digital product studio registered in the State of Wyoming, United States. We design, build, and operate our own digital products and tools. We do not provide client services, consulting, or custom software development for third parties.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">3. Products and Services</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Our products may include utility web applications, mobile applications, SaaS platforms, ad-supported tools, and AI-assisted services. We reserve the right to modify, suspend, or discontinue any product or feature at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">4. User Eligibility</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            You must be at least 13 years of age to use our products. If you are under 18, you represent that you have obtained parental or guardian consent.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">5. Acceptable Use</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            You agree not to use our products to: (a) violate any applicable law or regulation; (b) infringe on the intellectual property rights of Albor Digital or any third party; (c) transmit harmful, abusive, or offensive content; (d) attempt to gain unauthorized access to our systems; (e) scrape, harvest, or extract data from our products without written permission; (f) use our products for any commercial purpose without our prior written consent; or (g) interfere with the operation or integrity of our platforms.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">6. Intellectual Property</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            All content, design, code, data, and materials within our products are the exclusive property of Albor Digital LLC or its licensors and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our products for personal, non-commercial purposes.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">7. Third-Party Services</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Our products may integrate with or link to third-party services (such as payment processors, analytics providers, or money transfer platforms). These third parties have their own terms and privacy policies. Albor Digital LLC is not responsible for the practices or content of any third-party service. Links to third-party providers on SendMoneySmart may result in affiliate commissions earned by Albor Digital LLC — at no cost to you.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">8. Disclaimer of Warranties</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            OUR PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR PRODUCTS WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF HARMFUL COMPONENTS. RATES AND FEES SHOWN ON SENDMONEYSMART ARE ESTIMATES FOR COMPARISON PURPOSES ONLY AND MAY NOT REFLECT CURRENT LIVE RATES.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">9. Limitation of Liability</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALBOR DIGITAL LLC AND ITS OWNER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR PRODUCTS. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM OR (B) USD $50.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">10. Governing Law and Disputes</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            These Terms are governed by the laws of the State of Wyoming, United States. Any dispute arising from these Terms shall first be addressed through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">11. Changes to These Terms</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We reserve the right to update these Terms at any time. Changes will be posted on this page with a revised effective date. Your continued use of our products after any changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">12. Contact</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            For questions about these Terms: <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>
          </p>
        </section>

      </div>
    </main>
  );
}
