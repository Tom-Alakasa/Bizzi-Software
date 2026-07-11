type Platform = "windows";

interface Props {
  activePlatform: Platform;
}

const platforms: {
  id: Platform;
  label: string;
  icon: string;
  version: string;
  size: string;
}[] = [
  {
    id: "windows",
    label: "Windows",
    icon: "⊞",
    size: "52 MB",
    version: "3.4.1",
  },
];

export default function Hero({ activePlatform }: Props) {
  const active = platforms.find((p) => p.id === activePlatform)!;

  return (
    <section
      id="download"
      style={{
        paddingTop: 140,
        paddingBottom: 96,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(91,95,239,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 68px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--text)",
            marginBottom: 20,
          }}
        >
          Tudo o que seu comércio precisa,
          <br />
          <span style={{ color: "var(--a)" }}> em um só lugar.</span>
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: 540,
            margin: "0 auto 44px",
            fontWeight: 400,
          }}
        >
          O Bizzi é um aplicativo de trabalho unificado para suas notas, tarefas
          e produtos — com um design elegante e focado.
        </p>

        {/* Platform selector */}
        <div
          style={{
            display: "inline-flex",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            padding: 4,
            gap: 2,
            marginBottom: 20,
            boxShadow: "var(--shadow-sm)",
          }}
        ></div>

        {/* Download button */}
        <div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: "var(--a)",
              color: "var(--text-on-accent)",
              borderRadius: "var(--radius-md)",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "var(--shadow-accent)",
              transition: "all 0.2s var(--ease)",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--a-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 28px rgba(91, 95, 239, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--a)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-accent)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2v10M5 8.5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 14.5h14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            Baixar para {active.label}
          </a>

          <p
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "var(--text-tertiary)",
              letterSpacing: "0.01em",
            }}
          ></p>
        </div>

        {/* Other platforms */}
        <p
          style={{ marginTop: 24, fontSize: 13, color: "var(--text-tertiary)" }}
        >
          {platforms
            .filter((p) => p.id !== activePlatform)
            .map((p, i, arr) => (
              <span key={p.id}>
                <button
                  onClick={() => "a"}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    color: "var(--a)",
                    fontWeight: 500,
                    fontFamily: "var(--font-ui)",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    padding: 0,
                  }}
                >
                  {p.label}
                </button>
                {i < arr.length - 1 ? " and " : ""}
              </span>
            ))}
        </p>
      </div>

      {/* App preview */}
      <div
        style={{
          maxWidth: 960,
          margin: "72px auto 0",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "var(--surface-2)",
            borderRadius: 16,
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              padding: "12px 16px",
              background: "var(--surface-1)",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: "var(--aside)",
                borderRadius: 6,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                color: "var(--text-tertiary)",
                fontFamily: "var(--font-mono)",
                maxWidth: 320,
                margin: "0 auto",
              }}
            >
              lumis://workspace/daily
            </div>
          </div>

          {/* App layout mock */}
          <div style={{ display: "flex", height: 380 }}>
            {/* Sidebar */}
            <div
              style={{
                width: 220,
                borderRight: "1px solid var(--border)",
                background: "var(--aside)",
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                flexShrink: 0,
              }}
            >
              {[
                { label: "Today", icon: "◈", active: true },
                { label: "Inbox", icon: "⊞", badge: 3 },
                { label: "Projects", icon: "◧" },
                { label: "Notes", icon: "◻" },
                { label: "References", icon: "⊡" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "7px 10px",
                    borderRadius: "var(--radius-sm)",
                    background: item.active ? "var(--a-soft)" : "transparent",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: item.active ? 600 : 400,
                      color: item.active
                        ? "var(--a-text-on)"
                        : "var(--text-secondary)",
                    }}
                  >
                    <span style={{ fontSize: 12, opacity: 0.7 }}>
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        background: "var(--a)",
                        color: "white",
                        borderRadius: 100,
                        padding: "1px 6px",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}

              <div
                style={{
                  marginTop: "auto",
                  padding: "8px 10px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--warm-soft)",
                  border: "1px solid rgba(184,134,11,0.2)",
                  fontSize: 11,
                  color: "var(--warm-text-on)",
                  fontWeight: 500,
                }}
              >
                ✦ 3 tasks due today
              </div>
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: "28px 32px", overflowY: "auto" }}>
              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    marginBottom: 6,
                  }}
                >
                  Wednesday, July 9
                </div>
                <div style={{ fontSize: 13, color: "var(--text-tertiary)" }}>
                  3 tasks · 2 meetings · 1 note
                </div>
              </div>

              {/* Task items */}
              {[
                { done: true, label: "Review product spec v2", tag: "Design" },
                {
                  done: false,
                  label: "Write weekly standup notes",
                  tag: "Work",
                },
                {
                  done: false,
                  label: "Finalize Q3 roadmap items",
                  tag: "Planning",
                },
              ].map((task, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 14px",
                    background: task.done
                      ? "var(--surface-1)"
                      : "var(--surface-2)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    marginBottom: 8,
                    opacity: task.done ? 0.55 : 1,
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                      border: task.done
                        ? "none"
                        : "1.5px solid var(--border-strong)",
                      background: task.done ? "var(--good)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {task.done && (
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M1.5 4.5L3.5 6.5L7.5 2.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text)",
                      flex: 1,
                      textDecoration: task.done ? "line-through" : "none",
                    }}
                  >
                    {task.label}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "2px 8px",
                      background: "var(--a-soft)",
                      color: "var(--a-text-on)",
                      borderRadius: 100,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {task.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle gradient fade at bottom of preview */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background:
              "linear-gradient(to top, var(--surface-0), transparent)",
            borderRadius: "0 0 16px 16px",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
