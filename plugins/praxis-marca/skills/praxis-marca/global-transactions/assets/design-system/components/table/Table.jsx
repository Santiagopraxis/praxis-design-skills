function Table({ columns = [], rows = [] }) {
  return React.createElement(
    'table',
    { style: { width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 13.5 } },
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        null,
        columns.map((c, i) =>
          React.createElement(
            'th',
            {
              key: i,
              style: {
                textAlign: 'left',
                padding: '10px 14px',
                fontFamily: 'var(--font-display)',
                fontSize: 11,
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--ink-500)',
                borderBottom: '1px solid var(--border-strong)',
              },
            },
            c
          )
        )
      )
    ),
    React.createElement(
      'tbody',
      null,
      rows.map((r, ri) =>
        React.createElement(
          'tr',
          { key: ri, style: { background: ri % 2 ? 'var(--surface-sunken)' : 'transparent' } },
          r.map((cell, ci) =>
            React.createElement(
              'td',
              { key: ci, style: { padding: '10px 14px', color: 'var(--ink-900)', borderBottom: '1px solid var(--border-subtle)' } },
              cell
            )
          )
        )
      )
    )
  );
}
window.Table = Table;
