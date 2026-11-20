function Badge({ children, tone = 'neutral', size = 'md' }) {
  const tones = {
    neutral: { bg: 'var(--surface-sunken)', fg: 'var(--ink-700)', border: 'var(--border-subtle)' },
    primary: { bg: 'var(--purple-100)', fg: 'var(--purple-600)', border: 'transparent' },
    teal: { bg: 'color-mix(in oklch, var(--teal-500) 16%, white)', fg: 'var(--teal-700)', border: 'transparent' },
    critical: { bg: 'color-mix(in oklch, var(--status-critical) 14%, white)', fg: 'var(--status-critical)', border: 'transparent' },
    warning: { bg: 'color-mix(in oklch, var(--status-warning) 16%, white)', fg: '#8a5a12', border: 'transparent' },
    ok: { bg: 'color-mix(in oklch, var(--status-ok) 14%, white)', fg: 'var(--status-ok)', border: 'transparent' },
    inverse: { bg: 'rgba(255,255,255,0.12)', fg: '#fff', border: 'rgba(255,255,255,0.18)' },
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '3px 10px' : '5px 14px';
  const fs = size === 'sm' ? 11 : 13;
  return React.createElement(
    'span',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: pad,
        fontSize: fs,
        fontWeight: 600,
        letterSpacing: '0.02em',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.border}`,
        fontFamily: 'var(--font-body)',
        whiteSpace: 'nowrap',
      },
    },
    children
  );
}
window.Badge = Badge;
