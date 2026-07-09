const stats = [
  { value: '2.4M+', label: 'Active users', sub: 'across 140 countries' },
  { value: '<100ms', label: 'Open time', sub: 'median on 3-year-old hardware' },
  { value: '98.7%', label: 'Uptime', sub: 'sync service, last 12 months' },
  { value: '4.9 ★', label: 'App Store rating', sub: 'from 48,000 reviews' },
]

export default function Stats() {
  return (
    <section
      style={{
        background: 'var(--surface-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '64px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
        }}
      >
        {stats.map((s) => (
          <div key={s.value} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--a)',
                marginBottom: 6,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: 4,
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
