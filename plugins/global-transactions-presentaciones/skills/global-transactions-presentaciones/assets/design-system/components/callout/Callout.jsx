function Callout({ tone = 'info', title, children }) {
  const tones = {
    info: { bg: 'color-mix(in oklch, var(--teal-500) 10%, white)', accent: 'var(--teal-700)' },
    critical: { bg: 'color-mix(in oklch, var(--status-critical) 9%, white)', accent: 'var(--status-critical)' },
    warning: { bg: 'color-mix(in oklch, var(--status-warning) 12%, white)', accent: '#8a5a12' },
    ok: { bg: 'color-mix(in oklch, var(--status-ok) 9%, white)', accent: 'var(--status-ok)' },
  };
  const t = tones[tone] || tones.info;
  return React.createElement(
    'div',
    {
      style: {
        background: t.bg,
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4) var(--space-5)',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      },
    },
    title &&
      React.createElement(
        'div',
        { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: t.accent } },
        title
      ),
    React.createElement('div', { style: { fontSize: 13.5, color: 'var(--ink-700)', lineHeight: 'var(--lh-normal)' } }, children)
  );
}
window.Callout = Callout;
