const testimonials = [
  {
    quote:
      "I switched from Notion three months ago and I'm never going back. Lumis is absurdly fast and the bi-directional linking actually changed how I take notes.",
    author: 'Priya Narayan',
    role: 'Senior Product Designer at Figma',
    avatar: 'PN',
    avatarColor: '#5b5fef',
  },
  {
    quote:
      "The local-first approach isn't just a feature — it's a philosophy. My notes are mine. They're fast, they're private, and they'll survive any acquisition.",
    author: 'Marcus Hellström',
    role: 'Staff Engineer at Vercel',
    avatar: 'MH',
    avatarColor: '#1a8754',
  },
  {
    quote:
      "I manage six ongoing projects and Lumis is the connective tissue. The AI search remembers context across everything I've ever written. It's eerie and brilliant.",
    author: 'Sofia Reinholt',
    role: 'Independent researcher & writer',
    avatar: 'SR',
    avatarColor: '#b8860b',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '96px 24px', maxWidth: 1140, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 12px',
            background: 'var(--good-soft)',
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--good-text-on)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Loved by thousands
        </div>
        <h2
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            color: 'var(--text)',
            lineHeight: 1.1,
          }}
        >
          People who switched
          <br />
          never looked back.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.author}
            style={{
              padding: '28px',
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--warm)">
                  <path d="M7 1l1.5 4h4.5l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" />
                </svg>
              ))}
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: 'var(--text)',
                fontStyle: 'italic',
                flex: 1,
              }}
            >
              "{t.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: t.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '0.02em',
                  flexShrink: 0,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
                  {t.author}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 1 }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
