interface DirectAnswerBlockProps {
  answer: string;
}

export default function DirectAnswerBlock({ answer }: DirectAnswerBlockProps) {
  return (
    <div
      className="rounded-xl p-4 border text-sm leading-relaxed"
      style={{
        backgroundColor: 'var(--accent-muted)',
        borderColor: 'var(--border-accent)',
        color: 'var(--text-primary)',
      }}
    >
      <span className="font-semibold" style={{ color: 'var(--accent)' }}>
        Quick answer:{' '}
      </span>
      {answer}
    </div>
  );
}
