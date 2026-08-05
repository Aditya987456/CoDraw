"use client";

import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

import { Button } from "@repo/ui";
import { COLORS } from "@repo/common/constants";

import { Field } from "./Field";

export function SignUpForm() {
  return (
    <div className="mx-auto w-full max-w-[420px]">
      {/* Heading */}
      <div className="mb-10">
        <h1
          className="font-space text-4xl font-bold tracking-tight"
          style={{
            color: COLORS.ink,
          }}
        >
          Create your account
        </h1>

        <p
          className="mt-3 text-[15px] leading-7"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          Join CoDraw and start collaborating in minutes.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <Field
          id="name"
          label="Full Name"
          placeholder="Aditya Raj"
          icon={User}
        />

        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={Mail}
        />

        <Field
          id="password"
          label="Password"
          type="password"
          placeholder="Create a password"
          icon={Lock}
        />

        <Button
          variant="accent"
          className="w-full"
          size="default"
        >
          Create Account
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p
          className="text-sm"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium hover:underline"
            style={{
              color: COLORS.blue,
            }}
          >
            Sign In
          </Link>
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-sm transition hover:underline"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}