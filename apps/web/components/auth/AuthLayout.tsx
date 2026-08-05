"use client";

import type { ReactNode } from "react";

import { AuthBrand } from "./AuthBrand";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Brand Panel */}
        <AuthBrand />

        {/* Right Form Panel */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}