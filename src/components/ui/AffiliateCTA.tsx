import { ExternalLink } from 'lucide-react';

interface AffiliateCTAProps {
  url: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function AffiliateCTA({ url, label, variant = 'primary' }: AffiliateCTAProps) {
  if (variant === 'primary') {
    return (
      <a
        href={url}
        rel="nofollow sponsored"
        target="_blank"
        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
        style={{
          backgroundColor: 'var(--accent)',
          color: '#0A1628',
          fontFamily: 'var(--font-display)',
        }}
      >
        {label}
        <ExternalLink size={13} />
      </a>
    );
  }

  return (
    <a
      href={url}
      rel="nofollow sponsored"
      target="_blank"
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white border"
      style={{
        color: 'var(--accent)',
        borderColor: 'var(--border-accent)',
        backgroundColor: 'transparent',
      }}
    >
      {label}
      <ExternalLink size={12} />
    </a>
  );
}
