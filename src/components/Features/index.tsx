import { useState } from "react";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="2"
          fill="var(--a)"
          opacity="0.9"
        />
        <rect
          x="12"
          y="3"
          width="7"
          height="7"
          rx="2"
          fill="var(--a)"
          opacity="0.4"
        />
        <rect
          x="3"
          y="12"
          width="7"
          height="7"
          rx="2"
          fill="var(--a)"
          opacity="0.4"
        />
        <rect
          x="12"
          y="12"
          width="7"
          height="7"
          rx="2"
          fill="var(--a)"
          opacity="0.7"
        />
      </svg>
    ),
    title: "Everything in one place",
    desc: "Notes, tasks, bookmarks, and references unified in a single workspace. No more context-switching between five different apps.",
    tag: "Workspace",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="var(--a)" strokeWidth="1.5" />
        <path
          d="M8 11l2 2 4-4"
          stroke="var(--a)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Local-first, always fast",
    desc: "Your data lives on your device. No loading spinners, no waiting for servers — open in under 100ms, always. Sync is opt-in.",
    tag: "Performance",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 6h14M4 11h10M4 16h7"
          stroke="var(--a)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "AI-powered search",
    desc: "Find anything instantly with semantic search that understands intent, not just keywords. Ask in plain language, get precise results.",
    tag: "AI",
    warm: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 4v5l3 3"
          stroke="var(--a)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.3 7.3A7 7 0 1 0 18 13"
          stroke="var(--a)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Smart recurring tasks",
    desc: "Set it once. Lumis handles recurring tasks, deadlines, and reminders intelligently — adapting to how you actually work.",
    tag: "Productivity",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="5"
          width="16"
          height="12"
          rx="2.5"
          stroke="var(--a)"
          strokeWidth="1.5"
        />
        <path
          d="M8 9h6M8 13h4"
          stroke="var(--a)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Rich markdown editor",
    desc: "Distraction-free writing with a markdown editor that stays out of your way. Tables, code blocks, embeds — it's all there when you need it.",
    tag: "Editor",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="11" r="3" stroke="var(--a)" strokeWidth="1.5" />
        <circle cx="15" cy="7" r="3" stroke="var(--a)" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="3" stroke="var(--a)" strokeWidth="1.5" />
        <path
          d="M9.8 9.5l2.4-1.5M9.8 12.5l2.4 1.5"
          stroke="var(--a)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Bi-directional links",
    desc: "Connect ideas across your workspace. Every link is tracked both ways so your notes form a living knowledge graph, not a pile of files.",
    tag: "Knowledge",
  },
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  warm?: boolean;
}

function FeatureCard({ icon, title, desc, tag, warm }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px",
        background: "var(--surface-2)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        cursor: "default",
        transition:
          "box-shadow 0.2s var(--ease), transform 0.2s var(--ease), border-color 0.2s",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        borderColor: hovered ? "var(--border-strong)" : "var(--border)",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius-md)",
          background: warm ? "var(--warm-soft)" : "var(--a-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.01em",
          marginBottom: 8,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.65,
          color: "var(--text-secondary)",
          marginBottom: 16,
        }}
      >
        {desc}
      </p>

      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: warm ? "var(--warm)" : "var(--a)",
          padding: "3px 10px",
          background: warm ? "var(--warm-soft)" : "var(--a-soft)",
          borderRadius: 100,
        }}
      >
        {tag}
      </span>
    </div>
  );
}

export default function Features() {
  return (
    <section
      style={{
        padding: "96px 24px",
        maxWidth: 1140,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            background: "var(--a-soft)",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            color: "var(--a-text-on)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Features
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            lineHeight: 1.1,
            marginBottom: 14,
          }}
        >
          Built for the way
          <br />
          you actually think.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: 420,
          }}
        >
          Not another tool you need to tame. Lumis adapts to your workflow from
          day one.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
