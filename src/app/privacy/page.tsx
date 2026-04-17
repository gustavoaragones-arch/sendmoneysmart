import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SendMoneySmart',
  description: 'Privacy Policy for SendMoneySmart, operated by Albor Digital LLC.',
  alternates: { canonical: 'https://sendmoneysmart.com/privacy/' },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <a href="/" style={{ color: 'var(--text-muted)' }} className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Privacy Policy</span>
        </nav>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="text-3xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="text-sm">
          Albor Digital LLC · Effective Date: January 1, 2026 · Last Updated: January 1, 2026
        </p>
      </div>

      <div className="space-y-8" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', lineHeight: '1.7' }}>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">1. Introduction</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Albor Digital LLC ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use any product or digital property operated by Albor Digital, including SendMoneySmart. By using our products, you consent to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">2. Information We Collect</h2>
          <p style={{ color: 'var(--text-muted)' }} className="mb-3">
            <strong style={{ color: 'var(--text-primary)' }}>Information you provide directly:</strong> Name, email address, payment information, and any other data you submit when creating an account, subscribing, or contacting us.
          </p>
          <p style={{ color: 'var(--text-muted)' }} className="mb-3">
            <strong style={{ color: 'var(--text-primary)' }}>Usage data:</strong> Pages visited, features used, time spent, device type, browser type, IP address, and referring URLs.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Cookies and tracking data:</strong> See our Cookie Notice section below for full details.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">3. How We Use Your Information</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We use collected information to: (a) provide, operate, and maintain our products; (b) process payments and manage subscriptions; (c) respond to inquiries and support requests; (d) send transactional communications; (e) improve and develop our products; (f) detect and prevent fraud or misuse; and (g) comply with legal obligations. We do not sell your personal information to third parties. We do not use your data for targeted advertising on behalf of third parties.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">4. Legal Basis for Processing (GDPR)</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            If you are located in the European Economic Area, our legal bases for processing your personal data include: performance of a contract (to provide our services), compliance with legal obligations, our legitimate interests in operating and improving our products, and — where required — your consent.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">5. Sharing of Information</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We may share your information with: (a) service providers who assist in operating our products (e.g., payment processors, cloud hosting providers, analytics services), under confidentiality agreements; (b) law enforcement or regulatory bodies when required by law; and (c) a successor entity in the event of a merger, acquisition, or sale of assets.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">6. Data Retention</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Account data is retained for the duration of your account and for a reasonable period thereafter. You may request deletion of your data at any time.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">7. Your Rights</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict our processing; withdraw consent at any time; and receive your data in a portable format. To exercise any of these rights, contact us at <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>. We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">8. Children's Privacy</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Our products are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such data, we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">9. Data Security</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">10. International Transfers</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Your information may be transferred to and processed in countries other than your own, including the United States and Canada. We take steps to ensure that appropriate safeguards are in place for such transfers in compliance with applicable law.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">11. Cookies</h2>
          <p style={{ color: 'var(--text-muted)' }} className="mb-3">
            We use cookies and similar technologies to ensure our products function correctly, remember your preferences, and analyze how users interact with our products. Types of cookies used:
          </p>
          <ul className="space-y-2 pl-4" style={{ color: 'var(--text-muted)' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Strictly Necessary:</strong> Core product functionality and session management.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Functional:</strong> User preferences and saved states. Up to 1 year.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Analytics:</strong> Aggregate usage data via tools such as Google Analytics. Up to 2 years.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Advertising:</strong> Used in ad-supported products to serve relevant ads. Up to 2 years.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)' }} className="mt-3">
            You can control cookies through your browser settings. Disabling strictly necessary cookies may affect product functionality. Our products do not currently respond to Do Not Track (DNT) signals.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">12. Changes to This Policy</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We may update this Privacy Policy periodically. Changes will be posted with a revised effective date. Continued use of our products after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }} className="text-lg font-semibold mb-3">13. Contact</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            For privacy-related questions or requests: <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>
          </p>
        </section>

      </div>
    </main>
  );
}
