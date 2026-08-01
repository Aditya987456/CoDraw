"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { COLORS } from "@repo/common/constants";
import { Button } from "@repo/ui";

export function CTA() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pb-24 lg:px-12">
      <div
        className="
          flex
          flex-col
          gap-8
          rounded-[22px]
          px-8
          py-12
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-[60px]
          lg:py-[56px]
        "
        style={{
          backgroundColor: COLORS.ink,
        }}
      >
        <div>
          <h3 className="mb-2 font-space text-[26px] font-semibold text-white">
            Grab a marker.
          </h3>

          <p className="text-[15px] text-[#B9BABE]">
            Free to sign up. Your first room is ready in seconds.
          </p>
        </div>

        <Link href="/signup">
          <Button variant="accent" icon={ArrowRight}>
            Create your account
          </Button>
        </Link>
      </div>
    </section>
  );
}