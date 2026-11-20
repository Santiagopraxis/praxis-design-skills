function Card({ eyebrow, title, children, elevated = false, tone = 'light' }) {
  const dark = tone === 'dark';
  return React.createElement(
    'div',
    {
      style: {
        background: dark ? 'var(--navy-900)' : 'var(--surface)',
        color: dark ? 'var(--text-inverse)' : 'var(--ink-900)',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        boxShadow: elevated ? 'var(--shadow-md)' : 'none',
        padding: 'var(--space-5)',
        fontFamily: 'var(--font-body)',
      },
    },
    eyebrow &&
      React.createElement(
        'div',
        {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: dark ? 'var(--text-inverse-muted)' : 'var(--ink-500)',
            marginBottom: 8,
          },
        },
        eyebrow
      ),
    title &&
      React.createElement(
        'div',
        {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
          },
        },
        title
      ),
    React.createElement(
      'div',
      { style: { fontSize: 14, lineHeight: 'var(--lh-normal)', color: dark ? 'var(--text-inverse-muted)' : 'var(--ink-700)' } },
      children
    )
  );
}

function StatCard({ value, label, tone = 'flame' }) {
  const colors = { flame: 'var(--flame-500)', teal: 'var(--teal-500)', ink: 'var(--ink-900)' };
  return React.createElement(
    'div',
    {
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-5)',
        fontFamily: 'var(--font-display)',
        minWidth: 140,
      },
    },
    React.createElement('div', { style: { fontSize: 36, fontWeight: 800, color: colors[tone] || colors.flame, letterSpacing: 'var(--tracking-tight)' } }, value),
    React.createElement('div', { style: { fontSize: 12, color: 'var(--ink-500)', fontFamily: 'var(--font-body)', marginTop: 4 } }, label)
  );
}

window.Card = Card;
window.StatCard = StatCard;
