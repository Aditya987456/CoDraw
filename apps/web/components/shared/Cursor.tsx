
export interface cursorProps {
    name:string,
    color:string,
    style?:React.CSSProperties
}



export function Cursor({ name, color, style }:cursorProps) {
  return (
    <div style={{ position: "absolute", pointerEvents: "none", ...style }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M2 1.5 L17 8.5 L9.5 10.5 L7 18 Z"
          fill={color}
          stroke="#fff"
          strokeWidth="1"
        />
      </svg>
      <span
        style={{
          marginLeft: 14,
          marginTop: -4,
          display: "inline-block",
          background: color,
          color: "#fff",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          padding: "2px 7px",
          borderRadius: 5,
          whiteSpace: "nowrap",
          position: "relative",
          top: -2,
        }}
      >
        {name}
      </span>
    </div>
  );
}