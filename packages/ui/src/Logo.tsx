import { COLORS } from "@repo/common/constants";

export interface LogoProps {
  size?: number;
  color?: string;
}

export function Logo({
  size = 22,
  color = COLORS.ink,
}: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          fill={COLORS.blue}
        />

        <path
          d="M7 15.5 L11 8 L14 13 L17 8.5"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="font-space font-semibold tracking-[-0.02em] whitespace-nowrap"
        style={{
          fontSize: size * 0.82,
          color,
        }}
      >
        CoDraw
      </span>
    </div>
  );
}