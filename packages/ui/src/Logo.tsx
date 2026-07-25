import { COLORS } from "@repo/common/constants";

export function Logo({ size = 22, color = COLORS.ink }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill={COLORS.blue} />
        <path
          d="M7 15.5 L11 8 L14 13 L17 8.5"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: size * 0.82,
          letterSpacing: "-0.02em",
          color,
        }}
      >
        CoDraw
      </span>
    </div>
  );
}
