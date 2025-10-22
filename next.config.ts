import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
