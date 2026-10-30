function Timeline({ steps = [] }) {
  const statusColor = {
    done: 'var(--teal-500)',
    current: 'var(--flame-500)',
    upcoming: 'var(--border-strong)',
  };
  return React.createElement(
    'div',
    { style: { display: 'flex', width: '100%' } },
    steps.map((s, i) =>
      React.createElement(
        'div',
        { key: i, style: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' } },
        React.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center', width: '100%' } },
          React.createElement('div', {
            style: {
              flex: 1,
              height: 2,
              background: i === 0 ? 'transparent' : statusColor[steps[i - 1].status] || statusColor.upcoming,
            },
          }),
          React.createElement('div', {
            style: {
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: statusColor[s.status] || statusColor.upcoming,
              flexShrink: 0,
            },
          }),
          React.createElement('div', {
            style: {
              flex: 1,
              height: 2,
              background: i === steps.length - 1 ? 'transparent' : statusColor[s.status] || statusColor.upcoming,
            },
          })
        ),
        React.createElement(
          'div',
          { style: { marginTop: 10, textAlign: 'center', fontFamily: 'var(--font-body)' } },
          React.createElement('div', { style: { fontSize: 11, color: 'var(--ink-500)', fontWeight: 600 } }, s.date),
          React.createElement('div', { style: { fontSize: 13, color: 'var(--ink-900)', fontWeight: 700, marginTop: 2 } }, s.label)
        )
      )
    )
  );
}
window.Timeline = Timeline;
