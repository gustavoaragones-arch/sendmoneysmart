# PHASE 1 — PROMPT 03
## SendMoneySmart · Fix Broken Links + Missing Pages + Calculator + OFX

---

## AUDIT FINDINGS — FIX ALL OF THESE IN ORDER

The live site at sendmoneysmart.com has been audited. Six issues found.
Fix them in this exact sequence. Do not skip ahead.

---

## FIX 1 — LEGAL PAGES (CRITICAL — do first)
### Pages needed: `/privacy`, `/terms`, `/disclaimer`

These are 404ing on the live site. They are linked from the footer on every page.
A site with broken Privacy Policy and Terms links is a legal and SEO liability.

Create these three files using the exact legal content below.
Use the existing site design system (navy background, Sora font, teal accents).

### File: `src/app/privacy/page.tsx`

```tsx
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
```

---

### File: `src/app/terms/page.tsx`

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SendMoneySmart',
  description: 'Terms of Service for SendMoneySmart, operated by Albor Digital LLC.',
  alternates: { canonical: 'https://sendmoneysmart.com/terms/' },
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
```

---

### File: `src/app/disclaimer/page.tsx`

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | SendMoneySmart',
  description: 'Disclaimer for SendMoneySmart. Rates shown are estimates for comparison purposes only.',
  alternates: { canonical: 'https://sendmoneysmart.com/disclaimer/' },
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
            All exchange rates, transfer fees, and cost comparisons shown on SendMoneySmart are estimates based on publicly available provider information and approximate mid-market rates. They are provided for general comparison purposes only. Actual rates and fees may differ based on: the payment method you use (bank transfer vs. debit/credit card), the exact amount transferred, your location, the recipient's location, current market conditions, and provider-specific promotions or pricing changes. Always verify the final rate and total cost directly with your chosen provider before initiating any transfer.
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
```

---

## FIX 2 — HOW IT WORKS PAGE
### File: `src/app/how-money-transfers-work/page.tsx`

This page is linked from the main nav on every page. It's 404ing. Build it now.

```tsx
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
                  The difference between the real exchange rate and the rate you're given. A 2% margin on $500 costs you $10 — invisibly. This is where most providers make their money.
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
              The mid-market rate is the "real" exchange rate — the midpoint between the buy and sell price for a currency pair. It's the rate you see on Google, XE.com, or Bloomberg.
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="mb-4">
              Wise is the only major provider that passes this rate directly to customers with no margin. Every other provider adds a margin of 1–3% above the mid-market rate — which means you receive less.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              On a $500 CAD transfer to India, a 2.5% FX margin (like Western Union's) costs you approximately $12.50 CAD in hidden fees — on top of any visible transfer fee.
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
```

---

## FIX 3 — WISE VS REMITLY PAGE
### File: `src/app/wise-vs-remitly/page.tsx`

This is linked from the footer on every page and returns 404.
This is also a high-SEO-value comparison page. Build it fully.

```tsx
import { Metadata } from 'next';
import { calculateTransfer, getCorridor } from '@/lib/calculator';

export const metadata: Metadata = {
  title: 'Wise vs Remitly — Which Is Cheaper? (2026) | SendMoneySmart',
  description: 'Wise vs Remitly comparison for 2026. Which is cheaper, faster, and better for your corridor? Full fee breakdown, exchange rates, and verdict.',
  alternates: { canonical: 'https://sendmoneysmart.com/wise-vs-remitly/' },
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
                <li>✅ You're sending over $1,000</li>
                <li>✅ You want full transparency on fees</li>
              </ul>
            </div>
            <div className="rounded-xl p-5 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }} className="font-bold mb-3">Choose Remitly when:</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>⚡ You need money there in minutes</li>
                <li>🏪 Your recipient needs cash pickup</li>
                <li>📱 You prefer a mobile-first experience</li>
                <li>🆕 You're a first-time sender (promotions)</li>
                <li>🌍 Your corridor isn't well-supported by Wise</li>
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
```

---

## FIX 4 — CALCULATOR DEFAULT STATE

### Problem
The calculator renders with blank dashes (`—`) on page load because the default
amount isn't triggering the calculation on mount.

### Find this in `src/components/corridor/Calculator.tsx` (or equivalent)

The `useState` initial value must immediately produce results. If `results` is
derived from state, ensure it runs on first render.

**Verify the component looks like this:**
```tsx
'use client';
import { useState, useMemo } from 'react';

export function Calculator({ corridor }) {
  const [amount, setAmount] = useState(corridor.typical_amount); // ← must default to typical_amount

  // useMemo runs on first render AND on amount change
  const results = useMemo(() => {
    if (!amount || amount <= 0) return [];
    return calculateTransfer(amount, corridor, corridor.popular_providers);
  }, [amount, corridor]);

  // ... rest of component
}
```

**If using useEffect instead of useMemo — replace it.** `useEffect` runs after
the first paint, causing a flash of blank content. `useMemo` calculates
synchronously and populates results immediately.

---

## FIX 5 — ADD OFX TO COMPARISON TABLES

### Problem
OFX is missing from Canada→India and other corridor comparison tables despite
being in `providers.json` and `corridors.json`.

### Debug steps:
1. Open `src/data/corridors.json`
2. Find `canada-to-india` entry
3. Verify `popular_providers` array includes `"ofx"`:
   ```json
   "popular_providers": ["wise", "remitly", "western_union", "xoom", "ofx"]
   ```
4. Open `src/lib/calculator.ts`
5. Verify `calculateTransfer()` doesn't filter out OFX for amounts below `min_transfer`

**The likely issue:** OFX has `min_transfer: 1000` in providers.json, and
the `typical_amount` for Canada→India is `500`. The calculator correctly
filters OFX out at $500, but it should still appear in the table with a note.

**Fix in the ComparisonTable component:**
```tsx
// Show OFX even if below min_transfer — display a note instead
const allProviders = corridor.popular_providers.map(id => getProvider(id)).filter(Boolean);
const results = calculateTransfer(amount, corridor, corridor.popular_providers);

// For providers not in results (filtered out), show a "minimum transfer" row
allProviders.forEach(provider => {
  if (!results.find(r => r.provider.id === provider.id)) {
    // Add a disabled row: "Min. transfer: $1,000"
  }
});
```

Or simply: change OFX `min_transfer` to `1` in `providers.json` and add a note
in the description field: `"Best for transfers over CAD $1,000 — no transfer fees"`.
This is simpler and keeps the table complete.

**Recommended:** Change `min_transfer` to 1, update description to clarify it's
best for large transfers. OFX should always appear in the table.

---

## FIX 6 — VERIFY AFTER ALL FIXES

Run in order:
```bash
npm run build       # must pass with zero errors
npm run start       # verify locally

# Manually test these URLs at localhost:
# /privacy
# /terms
# /disclaimer
# /how-money-transfers-work
# /wise-vs-remitly
# /send-money/canada-to-india  ← calculator must show results on load
# /send-money/canada-to-india  ← OFX must appear in comparison table
```

Then deploy:
```bash
vercel --prod
```

After deploy, verify live:
```
https://www.sendmoneysmart.com/privacy           ← must return 200
https://www.sendmoneysmart.com/terms             ← must return 200
https://www.sendmoneysmart.com/disclaimer        ← must return 200
https://www.sendmoneysmart.com/how-money-transfers-work  ← must return 200
https://www.sendmoneysmart.com/wise-vs-remitly   ← must return 200
```

---

## DONE DEFINITION

```
✅ /privacy — live, renders full privacy policy content
✅ /terms — live, renders full terms of service content
✅ /disclaimer — live, renders full disclaimer content
✅ /how-money-transfers-work — live with FAQPage schema
✅ /wise-vs-remitly — live with comparison table + FAQPage schema
✅ Calculator shows results on page load (no blank dashes)
✅ OFX appears in all relevant comparison tables
✅ npm run build passes with zero errors
✅ All 5 previously-404 URLs return 200 on live site
```

When all boxes are checked: **the site is fully production-ready.**

---

*SendMoneySmart · Phase 1 Prompt 03 · Fix Broken Pages · Albor Digital LLC*
