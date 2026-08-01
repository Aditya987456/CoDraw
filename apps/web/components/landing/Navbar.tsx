"use client";

import Link from "next/link";

import { COLORS } from "@repo/common/constants";
import { Button, Logo } from "@repo/ui";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-295 items-center justify-between px-6 py-5 lg:px-12">
      <Logo />

      <div
        className="hidden items-center gap-7 text-[14.5px] md:flex"
        style={{ color: COLORS.inkSoft }}
      >
        <Link
          href="#features"
          className="transition-colors duration-200 hover:text-black"
        >
          Features
        </Link>

        <Link
          href="#how-it-works"
          className="transition-colors duration-200 hover:text-black"
        >
          How it works
        </Link>

        <Link href="/signin">
          <Button size="nav" variant="ghost">Sign In</Button>
        </Link>

        <Link href="/signup">
          <Button variant="accent" size="nav">Get Started</Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        
        className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
        style={{ borderColor: COLORS.border }}
        onClick={()=>alert("hii")}
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.ink}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
}