import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(241, 241, 248, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.3s var(--ease)",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "var(--a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-accent)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path d="M8 5L11 6.8V10.2L8 12L5 10.2V6.8L8 5Z" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Bizzi
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {["Features", "Changelog", "Docs", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 18px",
            background: "var(--a)",
            color: "var(--text-on-accent)",
            borderRadius: "var(--radius-sm)",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "var(--shadow-accent)",
            transition:
              "background 0.15s var(--ease), transform 0.15s var(--ease)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--a-hover)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--a)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Download
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v7M3 5.5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.5h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
