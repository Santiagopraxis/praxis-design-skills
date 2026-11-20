function SectionHeader({ kicker, title, description, align = 'left', tone = 'light' }) {
  const dark = tone === 'dark';
  return React.createElement(
    'div',
    { style: { textAlign: align, fontFamily: 'var(--font-display)' } },
    kicker &&
      React.createElement(
        'div',
        {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: dark ? 'var(--purple-200)' : 'var(--purple-600)',
            marginBottom: 10,
          },
        },
        kicker
      ),
    React.createElement(
      'div',
      {
        style: {
          fontSize: 'var(--fs-display-md)',
          fontWeight: 'var(--fw-title)',
          letterSpacing: 'var(--tracking-tight)',
          color: dark ? '#fff' : 'var(--ink-900)',
        },
      },
      title
    ),
    description &&
      React.createElement(
        'div',
        {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 14.5,
            marginTop: 8,
            color: dark ? 'var(--text-inverse-muted)' : 'var(--ink-500)',
            maxWidth: 520,
          },
        },
        description
      )
  );
}
window.SectionHeader = SectionHeader;
