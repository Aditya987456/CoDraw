"use client";

import { Logo } from "@repo/ui";
import { COLORS } from "@repo/common/constants";

export function AuthBrand() {
  return (
    <aside
      className="
        hidden
        lg:flex
        items-center
        justify-center
        border-r
        px-20
      "
      style={{
        borderColor: COLORS.border,
        backgroundColor: COLORS.board,
      }}
    >
      <div className="max-w-sm">
        <Logo />

        <div className="mt-16">
          <p
            className="text-sm font-medium uppercase tracking-[0.18em]"
            style={{
              color: COLORS.blue,
            }}
          >
            Collaborative Whiteboard
          </p>

          <h1
            className="
              mt-5
              font-space
              text-5xl
              font-bold
              leading-tight
              tracking-tight
            "
            style={{
              color: COLORS.ink,
            }}
          >
            Think.
            <br />
            Draw.
            <br />
            Collaborate.
          </h1>

          <p
            className="mt-8 text-lg leading-8"
            style={{
              color: COLORS.inkSoft,
            }}
          >
            Create a room, invite your team,
            and continue exactly where you
            left off.
          </p>
        </div>

        <div
          className="mt-20 text-sm"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          © 2026 CoDraw
        </div>
      </div>
    </aside>
  );
}