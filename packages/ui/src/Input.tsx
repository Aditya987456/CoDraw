"use client";

import type { CSSProperties, InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

import { COLORS } from "@repo/common/constants";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  style?: CSSProperties;
}

export function Input({
  icon: Icon,
  error = false,
  containerClassName = "",
  inputClassName = "",
  style,
  ...props
}: InputProps) {
  return (
    <div
      style={{
        borderColor: error ? "#ef4444" : COLORS.border,
        backgroundColor: COLORS.panel,
        ...style,
      }}
      className={[
        "flex items-center gap-3",
        "h-12 w-full",
        "rounded-xl border",
        "px-4",
        "transition-all duration-200",
        "focus-within:border-blue-500",
        "focus-within:ring-2",
        "focus-within:ring-blue-500/15",
        containerClassName,
      ].join(" ")}
    >
      {Icon && (
        <Icon
          size={18}
          strokeWidth={2}
          className="shrink-0"
          style={{
            color: COLORS.inkSoft,
          }}
        />
      )}

      <input
        {...props}
        className={[
          "w-full",
          "bg-transparent",
          "outline-none",
          "border-none",
          "text-[15px]",
          "placeholder:text-zinc-400",
          inputClassName,
        ].join(" ")}
        style={{
          color: COLORS.ink,
        }}
      />
    </div>
  );
}