import { COLORS } from "@repo/common/constants";
import { Logo } from "@repo/ui";

export function Footer() {
  return (
    <footer
      className="
        mx-auto
        flex
        max-w-[1180px]
        flex-col
        gap-4
        border-t
        px-6
        py-8
        text-[13px]
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:px-12
      "
      style={{
        borderColor: COLORS.border,
        color: COLORS.inkFaint,
      }}
    >
      <Logo
        size={18}
        color={COLORS.inkFaint}
      />

      <span>
        Built to learn real-time collaboration, end to end.
      </span>
    </footer>
  );
}