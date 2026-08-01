// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;