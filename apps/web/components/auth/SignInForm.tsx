// "use client";

// import Link from "next/link";
// import { Mail, Lock } from "lucide-react";

// import { Button } from "@repo/ui";
// import { COLORS } from "@repo/common/constants";

// import { Field } from "./Field";

// export function SignInForm() {
//   return (
//     <div>
//       {/* Heading */}
//       <div className="mb-8">
//         <h1 className="font-space text-3xl font-semibold tracking-tight">
//           Welcome back
//         </h1>

//         <p
//           className="mt-2 text-sm"
//           style={{
//             color: COLORS.inkSoft,
//           }}
//         >
//           Sign in to continue to your boards.
//         </p>
//       </div>

//       {/* Form */}
//       <form className="space-y-5">
//         <Field
//           id="email"
//           label="Email"
//           type="email"
//           placeholder="you@example.com"
//           icon={Mail}
//         />

//         <Field
//           id="password"
//           label="Password"
//           type="password"
//           placeholder="••••••••"
//           icon={Lock}
//         />

//         {/* Forgot Password */}
//         <div className="flex justify-end">
//           <Link
//             href="/forgot-password"
//             className="text-sm font-medium hover:underline"
//             style={{
//               color: COLORS.blue,
//             }}
//           >
//             Forgot password?
//           </Link>
//         </div>

//         {/* Submit Button */}
//         <Button
//           variant="accent"
//           className="w-full"
//         >
//           Sign In
//         </Button>
//       </form>

//       {/* Footer */}
//       <p
//         className="mt-8 text-center text-sm"
//         style={{
//           color: COLORS.inkSoft,
//         }}
//       >
//         Don't have an account?{" "}
//         <Link
//           href="/signup"
//           className="font-medium hover:underline"
//           style={{
//             color: COLORS.blue,
//           }}
//         >
//           Create one
//         </Link>
//       </p>
//     </div>
//   );
// }












"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";

import { Button } from "@repo/ui";
import { COLORS } from "@repo/common/constants";

import { Field } from "./Field";

export function SignInForm() {
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
          Welcome back
        </h1>

        <p
          className="mt-3 text-[15px] leading-7"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          Sign in to continue where you left off.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
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
          placeholder="••••••••"
          icon={Lock}
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm transition hover:underline"
            style={{
              color: COLORS.blue,
            }}
          >
            Forgot password?
          </Link>
        </div>

        <Button
          variant="accent"
          className="w-full"
          size="default"
        >
          Sign In
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
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium hover:underline"
            style={{
              color: COLORS.blue,
            }}
          >
            Create one
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