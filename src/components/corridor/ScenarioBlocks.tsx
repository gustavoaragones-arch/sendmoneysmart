import { TransferResult, Corridor, buildAffiliateUrl, formatCurrency, formatCost } from '@/lib/calculator';
import AffiliateCTA from '@/components/ui/AffiliateCTA';
import { DollarSign, Zap, MapPin, TrendingUp } from 'lucide-react';

interface ScenarioBlocksProps {
  results: TransferResult[];
  corridor: Corridor;
  amount: number;
}

export default function ScenarioBlocks({ results, corridor, amount }: ScenarioBlocksProps) {
  const cheapest = results.find((r) => r.is_cheapest);
  const fastest = results.find((r) => r.is_fastest);
  const cashPickup = results.find((r) => r.provider.cash_pickup && corridor.cash_pickup_providers.includes(r.provider.id));
  const largeTransfer = [...results]
    .filter((r) => r.provider.max_transfer >= 10000)
    .sort((a, b) => a.totalCost - b.totalCost)[0];

  const scenarios = [
    {
      icon: <DollarSign size={18} />,
      title: 'Cheapest overall',
      label: 'Send for less',
      result: cheapest,
    },
    {
      icon: <Zap size={18} />,
      title: 'Fastest delivery',
      label: 'Urgent transfers',
      result: fastest,
    },
    {
      icon: <MapPin size={18} />,
      title: 'Cash pickup',
      label: 'Recipient collects cash',
      result: cashPickup,
    },
    {
      icon: <TrendingUp size={18} />,
      title: 'Large transfers',
      label: 'Sending over $1,000',
      result: largeTransfer,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {scenarios.map((scenario) => {
        if (!scenario.result) return null;
        const { provider } = scenario.result;
        const affiliateUrl = buildAffiliateUrl(provider, corridor, amount);

        return (
          <div
            key={scenario.title}
            className="rounded-xl border p-4"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: 'var(--accent)' }}>{scenario.icon}</span>
              <div>
                <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  {scenario.title}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-dim)' }}>
                  {scenario.label}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: provider.color + '22', color: provider.color }}
              >
                {provider.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-sm">{provider.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {provider.speed} · fees {formatCost(scenario.result.totalCost, corridor.currency_from)}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-xs" style={{ color: 'var(--text-dim)' }}>They receive: </span>
              <span className="font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono-data)' }}>
                {formatCurrency(scenario.result.amountReceived, corridor.currency_symbol_to)}
              </span>
            </div>

            <AffiliateCTA
              url={affiliateUrl}
              label={`Send with ${provider.name} →`}
              variant="secondary"
            />
          </div>
        );
      })}
    </div>
  );
}
