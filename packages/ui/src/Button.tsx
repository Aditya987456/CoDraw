// // "use client";

// // import type { CSSProperties, ReactNode } from "react";
// // import type { LucideIcon } from "lucide-react";
// // import { COLORS } from "@repo/common/constants";

// // export interface ButtonProps {
// //   children: ReactNode;
// //   variant?: "primary" | "accent" | "outline" | "ghost";
// //   onClick?: () => void;
// //   style?: CSSProperties;
// //   icon?: LucideIcon;
// //   size?: "sm" | "md";
// // }

// // export function Button({
// //   children,
// //   variant = "primary",
// //   onClick,
// //   style,
// //   icon: Icon,
// //   size = "md",
// // }: ButtonProps) {
// //   const sizeClass =
// //     size === "sm"
// //       ? "text-[13px] px-[14px] py-2"
// //       : "text-[14.5px] px-5 py-[11px]";

// //   const variantStyle = {
// //     primary: {
// //       backgroundColor: COLORS.ink,
// //       color: "#fff",
// //     },
// //     accent: {
// //       backgroundColor: COLORS.blue,
// //       color: "#fff",
// //     },
// //     outline: {
// //       backgroundColor: "transparent",
// //       color: COLORS.ink,
// //       borderColor: COLORS.border,
// //     },
// //     ghost: {
// //       backgroundColor: "transparent",
// //       color: COLORS.inkSoft,
// //     },
// //   };

// //   return (
// //     <button
// //       onClick={onClick}
// //       onMouseEnter={(e) => {
// //         e.currentTarget.style.transform = "translateY(-1px)";
// //       }}
// //       onMouseLeave={(e) => {
// //         e.currentTarget.style.transform = "translateY(0)";
// //       }}
// //       className={`
// //         inline-flex
// //         items-center
// //         justify-center
// //         gap-2
// //         rounded-[10px]
// //         border-[1.5px]
// //         border-transparent
// //         font-semibold
// //         whitespace-nowrap
// //         transition-all
// //         duration-150
// //         ease-in-out
// //         font-space
// //         ${sizeClass}
// //       `}
// //       style={{
// //         ...variantStyle[variant],
// //         ...style,
// //       }}
// //     >
// //       {Icon && <Icon size={18} />}
// //       {children}
// //     </button>
// //   );
// // }



// "use client";

// import type { CSSProperties, ReactNode } from "react";
// import type { LucideIcon } from "lucide-react";

// import { COLORS } from "@repo/common/constants";

// export interface ButtonProps {
//   children: ReactNode;
//   variant?: "primary" | "accent" | "outline" | "ghost";
//   onClick?: () => void;
//   style?: CSSProperties;
//   icon?: LucideIcon;
//   size?: "sm" | "md";
// }

// export function Button({
//   children,
//   variant = "primary",
//   onClick,
//   style,
//   icon: Icon,
//   size = "md",
// }: ButtonProps) {
//   const sizeClass =
//     // size === "sm"
//     //   ? "px-[14px] py-2 text-[13px]"
//     //   : "px-5 py-[11px] text-[14.5px]";
//     size === "sm"
//       ? "p-6 text-[18px]"
//       : "px-5 py-[11px] text-[14.5px]";

//   const variantStyle = {
//     primary: {
//       backgroundColor: COLORS.ink,
//       color: "#fff",
//     },
//     accent: {
//       backgroundColor: COLORS.blue,
//       color: "#fff",
//     },
//     outline: {
//       backgroundColor: "transparent",
//       color: COLORS.ink,
//       borderColor: COLORS.border,
//     },
//     ghost: {
//       backgroundColor: "transparent",
//       color: COLORS.inkSoft,
//     },
//   };

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`
//         inline-flex
//         items-center
//         justify-center
//         gap-2
//         rounded-[10px]
//         border-[1.5px]
//         border-transparent
//         font-space
//         font-semibold
//         leading-none
//         whitespace-nowrap
//         cursor-pointer
//         transition-all
//         duration-150
//         ease-in-out
//         hover:-translate-y-[1px]
//         active:translate-y-0

//         ${sizeClass}
//       `}
//       style={{
//         ...variantStyle[variant],
//         ...style,
//       }}
//     >
//       {Icon && <Icon size={16} />}
//       {children}
//     </button>
//   );
// }



"use client";

import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { COLORS } from "@repo/common/constants";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "nav" | "default" | "hero" | "icon";
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  onClick,
  disabled = false,
  style,
  className = "",
}: ButtonProps) {
  const variantClass = {
    primary: "",
    accent: "",
    outline: "",
    ghost: "",
  };

  const variantStyle = {
    primary: {
      backgroundColor: COLORS.ink,
      color: "#fff",
      borderColor: "transparent",
    },

    accent: {
      backgroundColor: COLORS.blue,
      color: "#fff",
      borderColor: "transparent",
    },

    outline: {
      backgroundColor: "#fff",
      color: COLORS.ink,
      borderColor: COLORS.border,
    },

    ghost: {
      backgroundColor: "transparent",
      color: COLORS.inkSoft,
      borderColor: "transparent",
    },
  };

  const sizeClass = {
    nav: "h-10 px-5 text-sm rounded-xl",

    default:
      "h-11 px-6 text-sm rounded-xl",

    hero: "h-14 px-6 bg-green-500 rounded-2xl",

    icon:
      "h-11 w-11 rounded-xl p-0",
  };

  const classes = [
    "inline-flex items-center justify-center",
    "gap-2",
    "border",
    "select-none",
    "font-space",
    "font-bold",
    "cursor-pointer",
    "whitespace-nowrap",
    "transition-all duration-200 ease-out",
    "hover:-translate-y-0.5",
    "active:translate-y-0",
    "active:scale-[0.98]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    // "shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
    sizeClass[size],
    variantClass[variant],
    className,
  ].join(" ");


  //console.log(classes);
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{
        ...variantStyle[variant],
        ...style,
      }}
      className={classes}
    >
      {Icon && (
        <Icon
          size={size === "hero" ? 20 : 18}
          strokeWidth={2}
          className="shrink-0"
        />
      )}

      {size !== "icon" && (
        <span className="leading-none">{children}</span>
      )}
    </button>
  );
}