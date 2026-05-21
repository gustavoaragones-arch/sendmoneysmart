import providersData from '@/data/providers.json';
import corridorsData from '@/data/corridors.json';

export type Provider = {
  id: string;
  name: string;
  logo: string;
  color: string;
  fee_flat_cad: number;
  fee_flat_usd: number;
  fee_percent: number;
  fx_margin: number;
  speed: string;
  speed_minutes: number;
  affiliate_url: string;
  affiliate_params: string;
  tags: string[];
  trust_stat: string;
  regulated: boolean;
  cash_pickup: boolean;
  min_transfer: number;
  max_transfer: number;
  description: string;
};

export type Corridor = {
  slug: string;
  from_country: string;
  to_country: string;
  from_code: string;
  to_code: string;
  currency_from: string;
  currency_to: string;
  currency_symbol_to: string;
  flag_from: string;
  flag_to: string;
  popular_providers: string[];
  cash_pickup_providers: string[];
  seo_volume: string;
  typical_amount: number;
  typical_amount_label?: string;
  h1?: string;
  unique_intro?: string;
  direct_answer?: string;
  meta_title?: string;
  meta_description?: string;
  related_corridors: string[];
  faq?: { q: string; a: string }[];
};

export type TransferResult = {
  provider: Provider;
  totalCost: number;
  amountReceived: number;
  fee: number;
  fxLoss: number;
  speed: string;
  speed_minutes: number;
  rank_cheapest: number;
  rank_fastest: number;
  is_cheapest: boolean;
  is_fastest: boolean;
};

// Approximate mid-market rates (CAD/USD to various currencies)
// In production, replace with live API
const APPROX_RATES: Record<string, Record<string, number>> = {
  CAD: {
    INR: 62.5,
    PHP: 41.2,
    CNY: 5.35,
    MXN: 13.8,
    USD: 0.74,
  },
  USD: {
    INR: 83.5,
    PHP: 56.0,
    CNY: 7.25,
    MXN: 17.2,
    CAD: 1.35,
  },
};

export function getExchangeRate(from: string, to: string): number {
  return APPROX_RATES[from]?.[to] ?? 1;
}

export function calculateTransfer(
  amount: number,
  corridor: Corridor,
  providerIds: string[]
): TransferResult[] {
  const isCAD = corridor.currency_from === 'CAD';
  const midRate = getExchangeRate(corridor.currency_from, corridor.currency_to);

  const results: TransferResult[] = providerIds
    .map((id) => {
      const p = (providersData as Record<string, Provider>)[id];
      if (!p) return null;
      if (amount < p.min_transfer || amount > p.max_transfer) return null;

      const flatFee = isCAD ? p.fee_flat_cad : p.fee_flat_usd;
      const percentFee = amount * p.fee_percent;
      const fee = flatFee + percentFee;

      const amountAfterFee = amount - fee;
      const effectiveRate = midRate * (1 - p.fx_margin);
      const amountReceived = amountAfterFee * effectiveRate;
      const fxLoss = amountAfterFee * midRate * p.fx_margin;
      const totalCost = fee + fxLoss;

      return {
        provider: p,
        totalCost,
        amountReceived,
        fee,
        fxLoss,
        speed: p.speed,
        speed_minutes: p.speed_minutes,
        rank_cheapest: 0,
        rank_fastest: 0,
        is_cheapest: false,
        is_fastest: false,
      };
    })
    .filter(Boolean) as TransferResult[];

  // Sort by cheapest and assign ranks
  const byCost = [...results].sort((a, b) => a.totalCost - b.totalCost);
  const bySpeed = [...results].sort((a, b) => a.speed_minutes - b.speed_minutes);

  byCost.forEach((r, i) => {
    r.rank_cheapest = i + 1;
  });
  bySpeed.forEach((r, i) => {
    r.rank_fastest = i + 1;
  });

  if (byCost[0]) byCost[0].is_cheapest = true;
  if (bySpeed[0]) bySpeed[0].is_fastest = true;

  return byCost;
}

export function getAllCorridors(): Corridor[] {
  return Object.values(corridorsData as Record<string, Corridor>);
}

export function getCorridor(slug: string): Corridor | null {
  return (corridorsData as Record<string, Corridor>)[slug] ?? null;
}

export function getProvider(id: string): Provider | null {
  return (providersData as Record<string, Provider>)[id] ?? null;
}

export function buildAffiliateUrl(provider: Provider, corridor: Corridor, amount: number): string {
  return `${provider.affiliate_url}${provider.affiliate_params}${corridor.slug}&amount=${amount}`;
}

export function formatCurrency(amount: number, symbol: string): string {
  return `${symbol}${Math.round(amount).toLocaleString()}`;
}

export function formatCost(amount: number, currency: string): string {
  return `${currency} ${amount.toFixed(2)}`;
}
