export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-bg-surface px-3 py-1.5 text-sm text-ink-muted font-mono transition-colors hover:border-accent-dim hover:text-ink">
      {label}
    </span>
  );
}
