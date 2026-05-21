import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCorridor, getAllCorridors, calculateTransfer } from '@/lib/calculator';
import { generateCorridorSchema } from '@/lib/seo';
import DirectAnswerBlock from '@/components/corridor/DirectAnswerBlock';
import WinnerCard from '@/components/corridor/WinnerCard';
import ComparisonTable from '@/components/corridor/ComparisonTable';
import Calculator from '@/components/corridor/Calculator';
import ScenarioBlocks from '@/components/corridor/ScenarioBlocks';
import FAQAccordion from '@/components/corridor/FAQAccordion';
import RelatedCorridors from '@/components/corridor/RelatedCorridors';
import TrustBar from '@/components/ui/TrustBar';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ corridor: string }>;
}

export async function generateStaticParams() {
  const corridors = getAllCorridors();
  return corridors.map((c) => ({ corridor: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { corridor: slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) return {};

  return {
    title:
      corridor.meta_title ??
      `Send Money ${corridor.from_country} to ${corridor.to_country} — Cheapest Rates 2026 | SendMoneySmart`,
    description: corridor.meta_description,
    alternates: {
      canonical: `https://www.sendmoneysmart.com/send-money/${corridor.slug}/`,
    },
    openGraph: {
      title:
        corridor.meta_title ??
        `Send Money ${corridor.from_country} to ${corridor.to_country} — Cheapest Rates 2026 | SendMoneySmart`,
      description: corridor.meta_description,
      url: `https://www.sendmoneysmart.com/send-money/${corridor.slug}/`,
      siteName: 'SendMoneySmart',
      type: 'website',
    },
  };
}

export default async function CorridorPage({ params }: PageProps) {
  const { corridor: slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) notFound();

  const defaultAmount = corridor.typical_amount;
  const results = calculateTransfer(defaultAmount, corridor, corridor.popular_providers);
  const winner = results[0];

  const { faqSchema, breadcrumbSchema, webPageSchema } = generateCorridorSchema(corridor);

  const from = corridor.from_country;
  const to = corridor.to_country;
  const fromCur = corridor.currency_from;
  const toCur = corridor.currency_to;
  const winnerName = winner?.provider.name ?? 'Wise';

  return (
    <>
      {/* JSON-LD Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <TrustBar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1 text-xs mb-6 flex-wrap"
          style={{ color: 'var(--text-dim)' }}
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/#corridors" className="hover:text-white transition-colors">
            Send Money
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-muted)' }}>
            {from} to {to}
          </span>
        </nav>

        {/* H1 */}
        <h1
          className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {corridor.flag_from} {corridor.flag_to}{' '}
          {corridor.h1 ?? `Best Way to Send Money from ${from} to ${to} (2026)`}
        </h1>

        {/* Last Updated */}
        <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
          Last updated: {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}
          {' '}· Rates are estimates for comparison purposes
        </p>

        {corridor.unique_intro && (
          <p
            className="text-sm mb-6 leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {corridor.unique_intro}
          </p>
        )}

        {/* Direct Answer — AEO primary weapon, cssSelector target for Speakable schema */}
        {corridor.direct_answer && (
          <div className="direct-answer-block mb-6">
            <DirectAnswerBlock answer={corridor.direct_answer} />
          </div>
        )}

        {/* Winner Card — cssSelector target for Speakable schema */}
        {winner && (
          <div className="winner-card-summary mb-6">
            <WinnerCard result={winner} corridor={corridor} amount={defaultAmount} />
          </div>
        )}

        {/* Comparison Table — SEO H2: long-tail keyword */}
        <section className="mb-10">
          <h2
            className="text-lg font-bold mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {from} to {to} Transfer Comparison — Fees, Rates &amp; Speed ({fromCur} to {toCur})
          </h2>
          <ComparisonTable results={results} corridor={corridor} amount={defaultAmount} />
        </section>

        {/* Calculator — SEO H2 */}
        <section className="mb-10">
          <h2
            className="text-lg font-bold mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            How Much Does It Cost to Send Money from {from} to {to}?
          </h2>
          <Calculator corridor={corridor} />
        </section>

        {/* Scenario Blocks — SEO H2 */}
        <section className="mb-10">
          <h2
            className="text-lg font-bold mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Is {winnerName} Better Than Western Union for {from} to {to}?
          </h2>
          <ScenarioBlocks results={results} corridor={corridor} amount={defaultAmount} />
        </section>

        {/* FAQ — SEO H2 */}
        {corridor.faq && corridor.faq.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Frequently Asked Questions — {from} to {to} Money Transfers
            </h2>
            <FAQAccordion faqs={corridor.faq} />
          </section>
        )}

        {/* Related Corridors */}
        {corridor.related_corridors.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Compare Other Money Transfer Corridors
            </h2>
            <RelatedCorridors slugs={corridor.related_corridors} />
          </section>
        )}

        {/* Disclaimer */}
        <div className="rounded-xl p-4 border mt-8" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            <strong style={{ color: 'var(--text-muted)' }}>Disclaimer:</strong> Rates and fees shown
            are estimates based on publicly available provider information and are for comparison
            purposes only. Actual rates may vary based on payment method, amount, and destination.
            Always verify the final rate and fees directly with your chosen provider before sending.
            SendMoneySmart may earn affiliate commissions when you click provider links — at no extra
            cost to you. Operated by Albor Digital LLC, Wyoming, USA.{' '}
            Contact: <a href="mailto:contact@albor.digital" style={{ color: 'var(--accent)' }}>contact@albor.digital</a>
          </p>
        </div>
      </div>
    </>
  );
}
