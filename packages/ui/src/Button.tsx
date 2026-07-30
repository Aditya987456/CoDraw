 
"use client"
import type { CSSProperties, ReactNode } from "react";
import { COLORS } from "@repo/common/constants";
import type { LucideIcon } from 'lucide-react';


export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "ghost";
  onClick?: () => void;
  style?: CSSProperties;
  icon?: LucideIcon;
  size?: "sm" | "md";
}


export function Button({ children, variant = "primary", onClick, style, icon: Icon, size = "md" }:ButtonProps) {

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: size === "sm" ? 13 : 14.5,
    padding: size === "sm" ? "8px 14px" : "11px 20px",
    borderRadius: 10,
    cursor: "pointer",
    border: "1.5px solid transparent",
    transition: "transform .15s ease, box-shadow .15s ease, background .15s ease",
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: { background: COLORS.ink, color: "#fff" },
    accent: { background: COLORS.blue, color: "#fff" },
    outline: { background: "transparent", color: COLORS.ink, borderColor: COLORS.border },
    ghost: { background: "transparent", color: COLORS.inkSoft },
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}