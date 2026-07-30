// import { COLORS } from "@repo/common/constants"; 
// import { Cursor } from "../shared/Cursor";

// export function HeroBoard() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: 380,
//         borderRadius: 18,
//         border: `1.5px solid ${COLORS.border}`,
//         background:
//           `linear-gradient(${COLORS.boardLine} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.boardLine} 1px, transparent 1px)`,
//         backgroundSize: "26px 26px",
//         backgroundColor: COLORS.panel,
//         boxShadow: "0 24px 60px -30px rgba(28,29,33,0.25)",
//         overflow: "hidden",
//       }}
//     >
//       {/* sketch: idea -> sketch -> ship */}
//       <svg viewBox="0 0 600 380" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
//         <rect x="46" y="60" width="130" height="70" rx="10" fill="none" stroke={COLORS.ink} strokeWidth="2.2" />
//         <text x="111" y="100" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="15" fill={COLORS.ink}>Idea</text>
 
//         <path d="M180 95 C 210 95, 210 95, 236 95" stroke={COLORS.blue} strokeWidth="2.2" fill="none" strokeLinecap="round" />
//         <path d="M228 88 L238 95 L228 102" stroke={COLORS.blue} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
 
//         <circle cx="320" cy="95" r="46" fill="none" stroke={COLORS.coral} strokeWidth="2.2" />
//         <text x="320" y="100" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="15" fill={COLORS.ink}>Sketch</text>
 
//         <path d="M368 95 C 398 95, 398 95, 424 95" stroke={COLORS.green} strokeWidth="2.2" fill="none" strokeLinecap="round" />
//         <path d="M416 88 L426 95 L416 102" stroke={COLORS.green} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
 
//         <rect x="430" y="60" width="120" height="70" rx="4" fill="#FFF7DE" stroke={COLORS.amber} strokeWidth="2" transform="rotate(-2 490 95)" />
//         <text x="490" y="100" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="15" fill={COLORS.ink} transform="rotate(-2 490 95)">Ship it</text>
 
//         <path d="M70 220 Q 160 180 260 225 COLORS 460 210" stroke={COLORS.ink} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
//         <rect x="90" y="255" width="90" height="58" rx="6" fill="none" stroke={COLORS.blue} strokeWidth="2" opacity="0.8" />
//         <circle cx="260" cy="285" r="30" fill="none" stroke={COLORS.coral} strokeWidth="2" opacity="0.8" />
//         <path d="M340 260 L410 310" stroke={COLORS.green} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
//         <path d="M400 302 L412 311 L399 318" stroke={COLORS.green} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
//       </svg>
 
//       <Cursor name="Ana" color={COLORS.blue} style={{ animation: "float1 7s ease-in-out infinite", top: 40, left: 40 }} />
//       <Cursor name="Théo" color={COLORS.coral} style={{ animation: "float2 8.5s ease-in-out infinite", top: 180, left: 300 }} />
//       <Cursor name="Mika" color={COLORS.green} style={{ animation: "float3 6.2s ease-in-out infinite", top: 260, left: 120 }} />
//     </div>
//   );
// }


















import { COLORS } from "@repo/common/constants";
import { Cursor } from "../shared/Cursor";

export function HeroBoard() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        maxHeight: 450,
        minHeight: 260,
        borderRadius: 18,
        overflow: "hidden",
        border: `1.5px solid ${COLORS.border}`,
        backgroundColor: COLORS.panel,
        backgroundImage: `
          linear-gradient(${COLORS.boardLine} 1px, transparent 1px),
          linear-gradient(90deg, ${COLORS.boardLine} 1px, transparent 1px)
        `,
        backgroundSize: "26px 26px",
        boxShadow: "0 24px 60px -30px rgba(28,29,33,0.25)",
      }}
    >
      <svg
        viewBox="0 0 600 380"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Idea */}
        <rect
          x="46"
          y="60"
          width="130"
          height="70"
          rx="10"
          fill="none"
          stroke={COLORS.ink}
          strokeWidth="2.2"
        />

        <text
          x="111"
          y="100"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="15"
          fill={COLORS.ink}
        >
          Idea
        </text>

        {/* Arrow */}
        <path
          d="M180 95 C210 95 210 95 236 95"
          stroke={COLORS.blue}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M228 88 L238 95 L228 102"
          stroke={COLORS.blue}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Sketch */}
        <circle
          cx="320"
          cy="95"
          r="46"
          fill="none"
          stroke={COLORS.coral}
          strokeWidth="2.2"
        />

        <text
          x="320"
          y="100"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="15"
          fill={COLORS.ink}
        >
          Sketch
        </text>

        {/* Arrow */}
        <path
          d="M368 95 C398 95 398 95 424 95"
          stroke={COLORS.green}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M416 88 L426 95 L416 102"
          stroke={COLORS.green}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ship */}
        <rect
          x="430"
          y="60"
          width="120"
          height="70"
          rx="4"
          fill="#FFF7DE"
          stroke={COLORS.amber}
          strokeWidth="2"
          transform="rotate(-2 490 95)"
        />

        <text
          x="490"
          y="100"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="15"
          fill={COLORS.ink}
          transform="rotate(-2 490 95)"
        >
          Ship it
        </text>

        {/* Bottom Sketches */}
        <path
          d="M70 220 Q160 180 260 225 T460 210"
          stroke={COLORS.ink}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.55"
        />

        <rect
          x="90"
          y="255"
          width="90"
          height="58"
          rx="6"
          fill="none"
          stroke={COLORS.blue}
          strokeWidth="2"
          opacity="0.8"
        />

        <circle
          cx="260"
          cy="285"
          r="30"
          fill="none"
          stroke={COLORS.coral}
          strokeWidth="2"
          opacity="0.8"
        />

        <path
          d="M340 260 L410 310"
          stroke={COLORS.green}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />

        <path
          d="M400 302 L412 311 L399 318"
          stroke={COLORS.green}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
      </svg>

      <Cursor
        name="Ana"
        color={COLORS.blue}
        style={{
          top: "10%",
          left: "8%",
        }}
      />

      <Cursor
        name="Théo"
        color={COLORS.coral}
        style={{
          top: "45%",
          left: "58%",
        }}
      />

      <Cursor
        name="Mika"
        color={COLORS.green}
        style={{
          top: "68%",
          left: "25%",
        }}
      />
    </div>
  );
}