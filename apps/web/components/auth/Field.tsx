"use client";

import type { LucideIcon } from "lucide-react";

import { Input } from "@repo/ui";
import { ChangeEventHandler } from "react";

interface FieldProps {
  id: string;
  name:string;
  value:string;
  onChange:ChangeEventHandler<HTMLInputElement>;
  label: string;
  type?: string;
  placeholder: string;
  icon: LucideIcon;
  error?: boolean;
}

export function Field({
  id,
  name,
  onChange,
  value,
  label,
  type = "text",
  placeholder,
  icon,
  error,
}: FieldProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-zinc-800"
      >
        {label}
      </label>

      <Input
        id={id}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        icon={icon}
        error={error}
      />
    </div>
  );
}