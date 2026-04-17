import { TransferResult, Corridor, buildAffiliateUrl, formatCurrency, formatCost } from '@/lib/calculator';
import AffiliateCTA from '@/components/ui/AffiliateCTA';
import { Shield, Clock } from 'lucide-react';

interface ComparisonTableProps {
  results: TransferResult[];
  corridor: Corridor;
  amount: number;
}

export default function ComparisonTable({ results, corridor, amount }: ComparisonTableProps) {
  // Find WU total cost as baseline for "You save vs WU"
  const wuResult = results.find((r) => r.provider.id === 'western_union');
  const wuCost = wuResult?.totalCost ?? null;

  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border)' }}>
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--bg-elevated)' }}>
            <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider"
              style={{ color: 'var(--text-dim)' }}>
              Provider
            </th>
            <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider"
              style={{ color: 'var(--text-dim)' }}>
              Transfer Fee
            </th>
            <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider hidden sm:table-cell"
              style={{ color: 'var(--text-dim)' }}>
              You Receive
            </th>
            <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider hidden md:table-cell"
              style={{ color: 'var(--text-dim)' }}>
              vs Western Union
            </th>
            <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider hidden sm:table-cell"
              style={{ color: 'var(--text-dim)' }}>
              Delivery
            </th>
            <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, idx) => {
            const { provider } = result;
            const isWinner = result.is_cheapest;
            const savingsVsWU = wuCost !== null ? wuCost - result.totalCost : null;
            const affiliateUrl = buildAffiliateUrl(provider, corridor, amount);

            return (
              <tr
                key={provider.id}
                className={isWinner ? 'winner-row' : ''}
                style={{
                  borderTop: idx > 0 ? `1px solid var(--border)` : undefined,
                  backgroundColor: isWinner ? undefined : 'var(--bg-surface)',
                }}
              >
                {/* Provider */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: provider.color + '22', color: provider.color }}
                    >
                      {provider.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold flex items-center gap-1.5">
                        {provider.name}
                        {isWinner && (
                          <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--accent)', color: '#0A1628', fontSize: '10px' }}>
                            BEST
                          </span>
                        )}
                        {result.is_fastest && !isWinner && (
                          <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: '#3B82F633', color: '#60A5FA', fontSize: '10px' }}>
                            FASTEST
                          </span>
                        )}
                      </div>
                      <div className="text-xs flex items-center gap-1" style={{ color: 'var(--text-dim)' }}>
                        {provider.regulated && <Shield size={10} style={{ color: 'var(--accent)' }} />}
                        {provider.trust_stat}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Fee */}
                <td className="px-4 py-3 text-right font-mono-data">
                  <div className="font-medium">{formatCost(result.fee, corridor.currency_from)}</div>
                  <div className="text-xs" style={{ color: 'var(--text-dim)' }}>
                    total: {formatCost(result.totalCost, corridor.currency_from)}
                  </div>
                </td>

                {/* You receive */}
                <td className="px-4 py-3 text-right hidden sm:table-cell">
                  <span
                    className="font-bold"
                    style={{ color: isWinner ? 'var(--accent)' : 'var(--text-primary)', fontFamily: 'var(--font-mono-data)' }}
                  >
                    {formatCurrency(result.amountReceived, corridor.currency_symbol_to)}
                  </span>
                </td>

                {/* vs WU */}
                <td className="px-4 py-3 text-right hidden md:table-cell">
                  {savingsVsWU !== null && savingsVsWU > 0.01 ? (
                    <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                      Save {formatCost(savingsVsWU, corridor.currency_from)}
                    </span>
                  ) : savingsVsWU !== null && savingsVsWU < -0.01 ? (
                    <span style={{ color: '#FF6B6B' }}>
                      +{formatCost(Math.abs(savingsVsWU), corridor.currency_from)}
                    </span>
                  ) : (
                    <span style={{ color: 'var(--text-dim)' }}>—</span>
                  )}
                </td>

                {/* Delivery */}
                <td className="px-4 py-3 text-right hidden sm:table-cell">
                  <span className="flex items-center justify-end gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <Clock size={11} />
                    {provider.speed}
                  </span>
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-right">
                  <AffiliateCTA
                    url={affiliateUrl}
                    label={`Send →`}
                    variant={isWinner ? 'primary' : 'secondary'}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
