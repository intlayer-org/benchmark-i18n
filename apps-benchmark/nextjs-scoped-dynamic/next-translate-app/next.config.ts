import type { NextConfig } from "next";

const nextTranslate = require("next-translate-plugin");

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
};

// Note: only available in Next.js +16 (for 15, you need to force a boolean, default false)
const isTurbopack = !process.argv.includes("--webpack");

export default nextTranslate(nextConfig, { turbopack: isTurbopack });
