import { COLORS } from "@repo/common/constants";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({
  step,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="relative pr-4 lg:pr-[18px]">
      <div
        className="relative z-10 mb-[18px] flex h-[26px] w-[26px] items-center justify-center rounded-full font-mono text-[13px] text-white"
        style={{
          backgroundColor: COLORS.ink,
        }}
      >
        {step}
      </div>

      <h4 className="mb-2 font-space text-[15.5px] font-semibold">
        {title}
      </h4>

      <p
        className="text-[13.5px] leading-[1.55]"
        style={{
          color: COLORS.inkSoft,
        }}
      >
        {description}
      </p>
    </div>
  );
}