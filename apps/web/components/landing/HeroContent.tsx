"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { COLORS } from "@repo/common/constants";
import { Button } from "@repo/ui";

export function HeroContent() {
  return (
    <div>

      {/* Badge-- means people drawing things... */}
      <div
        className="mb-[22px] inline-flex items-center gap-2 rounded-full border px-3 py-[5px] text-[12.5px]"
        style={{
          borderColor: COLORS.border,
          color: COLORS.inkSoft,
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse"
          style={{
            backgroundColor: COLORS.green,
          }}
        />

        live now · 3 people drawing
      </div>

      {/* Heading */}
      <h1 className="mb-5.5 font-space text-4xl font-bold leading-tight tracking-[-0.03em] md:text-[52px]">
        A shared whiteboard,
        <br />
        live in the room.
      </h1>

      {/* Description */}
      <p
        className="mb-8 max-w-[440px] text-[17px] leading-[1.6]"
        style={{
          color: COLORS.inkSoft,
        }}
      >
        CoDraw is a real-time collaborative canvas. Open a room, share the code,
        and watch ideas get sketched out together — saved automatically, ready
        whenever you come back.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-14 ">
        <Link href="/signup">
          <Button size="hero" variant="accent" icon={ArrowRight}>
            Start a board
          </Button>
        </Link>

      {/* demo button... */}
        <Link href="/signup">
          <Button size="hero" variant="outline" >
            Try Demo
          </Button>
        </Link>

      </div>
    </div>
  );
}