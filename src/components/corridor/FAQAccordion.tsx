'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  faqs: { q: string; a: string }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: isOpen ? 'var(--border-accent)' : 'var(--border)' }}
          >
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-colors"
              style={{ backgroundColor: isOpen ? 'var(--accent-muted)' : 'var(--bg-surface)' }}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                {faq.q}
              </span>
              <ChevronDown
                size={16}
                style={{
                  color: 'var(--accent)',
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </button>
            {isOpen && (
              <div
                className="px-5 py-4 text-sm leading-relaxed border-t"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-surface)' }}
              >
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
