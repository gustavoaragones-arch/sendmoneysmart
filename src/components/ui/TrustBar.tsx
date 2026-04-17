import { Shield, RefreshCw, Users } from 'lucide-react';

export default function TrustBar() {
  return (
    <div
      className="border-y py-3"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium"
          style={{ color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1.5">
            <Shield size={13} style={{ color: 'var(--accent)' }} />
            Regulated providers only
          </span>
          <span className="flex items-center gap-1.5">
            <RefreshCw size={13} style={{ color: 'var(--accent)' }} />
            Rates updated regularly
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} style={{ color: 'var(--accent)' }} />
            Trusted by immigrants in Canada &amp; USA
          </span>
        </div>
      </div>
    </div>
  );
}
