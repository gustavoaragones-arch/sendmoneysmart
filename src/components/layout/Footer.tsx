import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t mt-16"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div
              className="text-lg font-bold mb-2"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              SendMoney<span style={{ color: 'var(--text-primary)' }}>Smart</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Compare the cheapest way to send money internationally. Real rates, no fluff.
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--text-dim)' }}>
              Operated by Albor Digital LLC (Wyoming, USA)
            </p>
            <a
              href="mailto:contact@albor.digital"
              className="text-xs mt-1 block hover:underline"
              style={{ color: 'var(--text-dim)' }}
            >
              contact@albor.digital
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
                Compare
              </span>
              <Link href="/send-money/canada-to-india" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                Canada → India
              </Link>
              <Link href="/send-money/canada-to-philippines" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                Canada → Philippines
              </Link>
              <Link href="/send-money/usa-to-mexico" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                USA → Mexico
              </Link>
              <Link href="/send-money/usa-to-india" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                USA → India
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
                Info
              </span>
              <Link href="/how-money-transfers-work" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                How It Works
              </Link>
              <Link href="/wise-vs-remitly" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                Wise vs Remitly
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
                Legal
              </span>
              <Link href="/privacy" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="hover:text-white" style={{ color: 'var(--text-muted)' }}>
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-6 border-t text-xs" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
          <p>
            © {year} Albor Digital LLC. Operated at{' '}
            <a href="https://albor.digital" className="hover:underline" rel="noopener">
              albor.digital
            </a>
            . Rates shown are estimates for comparison purposes only and may not reflect current exchange rates.
            We may earn affiliate commissions when you click on provider links — at no extra cost to you.
            Always verify rates directly with your chosen provider before sending.
          </p>
        </div>
      </div>
    </footer>
  );
}
