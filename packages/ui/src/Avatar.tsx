import { COLORS } from "@repo/common/constants";

export interface AvatarProps {
  name: string;
  color: string;
  size?: number;
  ring?: boolean;
}

export function Avatar({
  name,
  color,
  size = 28,
  ring = true,
}: AvatarProps) {
  return (
    <div
      title={name}
      className="
        flex
        items-center
        justify-center
        rounded-full
        font-space
        font-semibold
        text-white
        shrink-0
      "
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.4,
        border: ring ? "2px solid #fff" : "none",
        boxShadow: ring ? `0 0 0 1px ${COLORS.border}` : "none",
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}