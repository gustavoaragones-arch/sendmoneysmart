import Link from 'next/link';
import { getAllCorridors } from '@/lib/calculator';
import { ArrowRight } from 'lucide-react';

interface RelatedCorridorsProps {
  slugs: string[];
}

export default function RelatedCorridors({ slugs }: RelatedCorridorsProps) {
  const all = getAllCorridors();
  const related = slugs
    .map((slug) => all.find((c) => c.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {related.map((corridor) => {
        if (!corridor) return null;
        return (
          <Link
            key={corridor.slug}
            href={`/send-money/${corridor.slug}/`}
            className="rounded-xl border p-4 flex items-center justify-between group transition-colors hover:border-[var(--border-accent)]"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <div>
              <div className="text-xl mb-1">
                {corridor.flag_from} → {corridor.flag_to}
              </div>
              <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                {corridor.from_country} → {corridor.to_country}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-dim)' }}>
                {corridor.currency_from} to {corridor.currency_to}
              </div>
            </div>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
              style={{ color: 'var(--accent)' }}
            />
          </Link>
        );
      })}
    </div>
  );
}
