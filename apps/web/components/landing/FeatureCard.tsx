import { COLORS } from "@repo/common/constants";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  body,
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl border bg-white p-6"
      style={{
        borderColor: COLORS.border,
        backgroundColor: COLORS.panel,
      }}
    >
      <div
        className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border"
        style={{
          backgroundColor: COLORS.board,
          borderColor: COLORS.border,
        }}
      >
        <Icon size={18} color={COLORS.blue} />
      </div>

      <h3 className="mb-2 font-space text-[16.5px] font-semibold">
        {title}
      </h3>

      <p
        className="text-sm leading-[1.55]"
        style={{
          color: COLORS.inkSoft,
        }}
      >
        {body}
      </p>
    </div>
  );
}