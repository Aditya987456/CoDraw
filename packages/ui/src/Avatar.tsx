import { COLORS } from "@repo/common/constants";


export interface AvatarProps {
    name:string;
    color:string;
    size?:number;
    ring?:boolean;
}


export function Avatar({ name, color, size = 28, ring = true }:AvatarProps) {
  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: size * 0.4,
        border: ring ? "2px solid #fff" : "none",
        boxShadow: ring ? "0 0 0 1px " + COLORS.border : "none",
        flexShrink: 0,
      }}
    >
      {name[0]}
    </div>
  );
}
 