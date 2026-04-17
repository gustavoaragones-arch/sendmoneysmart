import { TransferResult, Corridor, buildAffiliateUrl, formatCurrency, formatCost } from '@/lib/calculator';
import AffiliateCTA from '@/components/ui/AffiliateCTA';

interface WinnerCardProps {
  result: TransferResult;
  corridor: Corridor;
  amount: number;
}

export default function WinnerCard({ result, corridor, amount }: WinnerCardProps) {
  const { provider } = result;
  const affiliateUrl = buildAffiliateUrl(provider, corridor, amount);
  const received = formatCurrency(result.amountReceived, corridor.currency_symbol_to);
  const cost = formatCost(result.totalCost, corridor.currency_from);

  return (
    <div
      className="rounded-xl p-5 border"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-accent)',
      }}
    >
      {/* Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'var(--accent)', color: '#0A1628' }}
        >
          🏆 Lowest Cost
        </span>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Best overall for {corridor.currency_from} → {corridor.currency_to}
        </span>
      </div>

      {/* Provider info */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          {/* Provider color dot / logo placeholder */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: provider.color + '22', color: provider.color }}
          >
            {provider.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              {provider.name}
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {provider.description}
            </div>
          </div>
        </div>

        {/* Amount summary */}
        <div className="text-right">
          <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>
            Send {formatCost(amount, corridor.currency_from)} → receive
          </div>
          <div
            className="text-2xl font-bold"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono-data)' }}
          >
            {received}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Total fees: {cost} · {provider.speed}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 flex items-center gap-3 flex-wrap">
        <AffiliateCTA url={affiliateUrl} label={`Send with ${provider.name} →`} variant="primary" />
        <span className="text-xs" style={{ color: 'var(--text-dim)' }}>
          {provider.trust_stat}
        </span>
      </div>
    </div>
  );
}
