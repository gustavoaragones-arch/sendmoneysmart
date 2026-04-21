import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCorridors } from '@/lib/calculator';
import { generateHomeSchema } from '@/lib/seo';
import TrustBar from '@/components/ui/TrustBar';
import { ArrowRight, Search, Calculator, Send, Shield, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SendMoneySmart — Find the Cheapest Way to Send Money Abroad',
  description: 'Compare Wise, Remitly, Western Union and more. Real rates, no fluff.',
  alternates: { canonical: 'https://www.sendmoneysmart.com/' },
};

export default function HomePage() {
  const corridors = getAllCorridors();
  const { webSiteSchema, organizationSchema } = generateHomeSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <TrustBar />

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Find the Cheapest Way to{' '}
            <span style={{ color: 'var(--accent)' }}>Send Money Abroad</span>
          </h1>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Compare Wise, Remitly, Western Union and more. Real rates, no fluff. Save up to $20 per transfer.
          </p>
          {/* Quick corridor grid CTA */}
          <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>
            Pick your corridor below to compare rates instantly
          </p>
          <div className="flex items-center justify-center gap-2 text-xs" style={{ color: 'var(--text-dim)' }}>
            <Shield size={12} style={{ color: 'var(--accent)' }} />
            Regulated providers only · No sign-up required
          </div>
        </div>
      </section>

      {/* Corridors Grid */}
      <section id="corridors" className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xl font-bold mb-6 text-center"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
          >
            Top money transfer corridors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {corridors.map((corridor) => (
              <Link
                key={corridor.slug}
                href={`/send-money/${corridor.slug}`}
                className="group rounded-xl border p-5 flex flex-col gap-3 transition-all hover:border-[var(--border-accent)] hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
              >
                <div className="text-2xl">{corridor.flag_from} → {corridor.flag_to}</div>
                <div>
                  <div className="font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
                    {corridor.from_country} → {corridor.to_country}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-dim)' }}>
                    {corridor.currency_from} to {corridor.currency_to}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      corridor.seo_volume === 'very_high' ? 'bg-red-900/30 text-red-400' : 'bg-teal-900/30 text-teal-400'
                    }`}
                  >
                    {corridor.seo_volume === 'very_high' ? 'Very popular' : corridor.seo_volume === 'high' ? 'Popular' : 'Compare rates'}
                  </span>
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                    style={{ color: 'var(--accent)' }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 border-y" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Search size={22} />,
                step: '1',
                title: 'Pick your corridor',
                desc: 'Choose the country you\'re sending from and to.',
              },
              {
                icon: <Calculator size={22} />,
                step: '2',
                title: 'Enter your amount',
                desc: 'See exactly how much your recipient gets — fees included.',
              },
              {
                icon: <Send size={22} />,
                step: '3',
                title: 'Compare and send',
                desc: 'Click through to the cheapest provider and send in minutes.',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why trust SendMoneySmart?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Search size={18} />, title: '5+ providers compared', desc: 'Wise, Remitly, Western Union, Xoom, OFX' },
              { icon: <RefreshCw size={18} />, title: 'Regularly updated', desc: 'Rates reviewed and refreshed frequently' },
              { icon: <Shield size={18} />, title: 'No hidden costs', desc: 'We show total cost — fees + FX margin' },
              { icon: <Shield size={18} />, title: 'Bank-level security', desc: 'All listed providers are regulated financial institutions' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-4 text-center"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                >
                  {item.icon}
                </div>
                <div className="font-semibold text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
