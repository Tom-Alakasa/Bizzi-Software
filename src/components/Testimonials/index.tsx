const testimonials = [
  {
    quote:
      "O Axiom facilitou muito o controle dos meus produtos. A interface é simples, rápida e consigo acompanhar meu estoque sem complicação. Desde que comecei a usar, reduzi bastante os erros de cadastro. Recomendo para quem procura praticidade.",
    author: "Pedro da Costa",
    role: "Gerente de Padaria",
    avatar: "PC",
    avatarColor: "#5b5fef",
  },
  {
    quote:
      "Excelente aplicativo! O gerenciamento dos produtos ficou muito mais organizado e intuitivo. Gostei da velocidade do app e da facilidade para adicionar, editar e consultar os itens. Atendeu exatamente ao que eu precisava para o meu negócio.",
    author: "Mariana Santos",
    role: "Dona de e-comerce local",
    avatar: "MS",
    avatarColor: "#1a8754",
  },
  {
    quote:
      "O Axiom é uma ótima ferramenta para organizar produtos. O aplicativo é fácil de usar e cumpre bem sua proposta. Ainda espero algumas funcionalidades novas nas próximas atualizações, mas até agora minha experiência tem sido muito positiva.",
    author: "Sofia Felix",
    role: "Loja independente",
    avatar: "SF",
    avatarColor: "#b8860b",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "96px 24px", maxWidth: 1140, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            lineHeight: 1.1,
          }}
        >
          Nossas avaliações
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.author}
            style={{
              padding: "28px",
              background: "var(--surface-2)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="var(--warm)"
                >
                  <path d="M7 1l1.5 4h4.5l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" />
                </svg>
              ))}
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--text)",
                fontStyle: "italic",
                flex: 1,
              }}
            >
              "{t.quote}"
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: t.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.02em",
                  flexShrink: 0,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {t.author}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-tertiary)",
                    marginTop: 1,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
