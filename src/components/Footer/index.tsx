export default function Footer() {
  const links = {
    Product: ['Features', 'Changelog', 'Roadmap', 'Pricing'],
    Resources: ['Docs', 'API', 'Blog', 'Community'],
    Company: ['About', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  }

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface-2)',
        padding: '64px 24px 40px',
      }}
    >
      {/* CTA banner */}
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto 64px',
          background: 'var(--a)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px 56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          boxShadow: 'var(--shadow-accent)',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.03em',
              marginBottom: 8,
            }}
          >
            Start for free today.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            No account required. Just download and go.
          </p>
        </div>
        <a
          href="#download"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '13px 28px',
            background: 'white',
            color: 'var(--a-active)',
            borderRadius: 'var(--radius-md)',
            fontSize: 14,
            fontWeight: 700,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'transform 0.15s var(--ease)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          Download Lumis
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v8M4 7.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      {/* Links grid */}
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr repeat(4, 1fr)',
          gap: 40,
          flexWrap: 'wrap',
          marginBottom: 48,
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                background: 'var(--a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
                <path d="M8 5L11 6.8V10.2L8 12L5 10.2V6.8L8 5Z" fill="white" />
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', letterSpacing: '-0.02em' }}>
              Lumis
            </span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.6, maxWidth: 220 }}>
            The workspace for focused people. Fast, local-first, and beautifully simple.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: 14,
              }}
            >
              {section}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.12s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          paddingTop: 24,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
          © 2025 Lumis Inc. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Twitter', 'GitHub', 'Discord'].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontSize: 12,
                color: 'var(--text-tertiary)',
                textDecoration: 'none',
                transition: 'color 0.12s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--a)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
