'use client';

import { useState, useMemo } from 'react';
import { calculateTransfer, Corridor, formatCurrency, formatCost, buildAffiliateUrl } from '@/lib/calculator';
import AffiliateCTA from '@/components/ui/AffiliateCTA';
import { Clock } from 'lucide-react';

interface CalculatorProps {
  corridor: Corridor;
}

export default function Calculator({ corridor }: CalculatorProps) {
  const [amount, setAmount] = useState(corridor.typical_amount);
  const [inputValue, setInputValue] = useState(String(corridor.typical_amount));
  const [animKey, setAnimKey] = useState(0);

  const results = useMemo(() => {
    if (!amount || amount <= 0) return [];
    return calculateTransfer(amount, corridor, corridor.popular_providers);
  }, [amount, corridor]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
      setAnimKey((k) => k + 1);
    }
  };

  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
    >
      {/* Input row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
            You send ({corridor.currency_from})
          </label>
          <div className="relative">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold"
              style={{ color: 'var(--text-muted)' }}
            >
              {corridor.currency_from}
            </span>
            <input
              type="number"
              min={1}
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full pl-14 pr-4 py-3 rounded-lg text-lg font-bold outline-none focus:ring-2 transition-all"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono-data)',
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = 'var(--accent)')
              }
              onBlur={(e) =>
                (e.target.style.borderColor = 'var(--border)')
              }
            />
          </div>
        </div>
        <div className="self-end pb-3 text-xl" style={{ color: 'var(--text-dim)' }}>→</div>
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
            They receive ({corridor.currency_to})
          </label>
          <div
            className="py-3 px-4 rounded-lg text-lg font-bold"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              color: 'var(--accent)',
              fontFamily: 'var(--font-mono-data)',
            }}
          >
            {results[0]
              ? formatCurrency(results[0].amountReceived, corridor.currency_symbol_to)
              : '—'}
          </div>
          <div className="text-xs mt-1" style={{ color: 'var(--text-dim)' }}>
            Best rate · via {results[0]?.provider.name ?? '...'}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2.5" key={animKey}>
        {results.map((result, idx) => {
          const { provider } = result;
          const affiliateUrl = buildAffiliateUrl(provider, corridor, amount);
          const isWinner = result.is_cheapest;

          return (
            <div
              key={provider.id}
              className={`calc-result-animate flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 ${isWinner ? 'winner-row' : ''}`}
              style={{
                animationDelay: `${idx * 40}ms`,
                backgroundColor: isWinner ? undefined : 'var(--bg-elevated)',
                border: isWinner ? undefined : '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-bold w-4 text-center" style={{ color: 'var(--text-dim)' }}>
                  {idx + 1}
                </span>
                <div
                  className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: provider.color + '22', color: provider.color }}
                >
                  {provider.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{provider.name}</div>
                  <div className="text-xs flex items-center gap-1" style={{ color: 'var(--text-dim)' }}>
                    <Clock size={10} />
                    {provider.speed}
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div
                  className="font-bold text-sm"
                  style={{
                    color: isWinner ? 'var(--accent)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-mono-data)',
                  }}
                >
                  {formatCurrency(result.amountReceived, corridor.currency_symbol_to)}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-dim)' }}>
                  fees: {formatCost(result.totalCost, corridor.currency_from)}
                </div>
              </div>

              <AffiliateCTA
                url={affiliateUrl}
                label="Send →"
                variant={isWinner ? 'primary' : 'secondary'}
              />
            </div>
          );
        })}
      </div>

      <p className="text-xs mt-4" style={{ color: 'var(--text-dim)' }}>
        Rates are estimates based on approximate mid-market rates. Actual amounts may vary. Always verify with your provider before sending.
      </p>
    </div>
  );
}
