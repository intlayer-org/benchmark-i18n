import type { NextConfig } from "next";

import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot =
  path.basename(configDir) === "nextjs-base-app"
    ? path.join(configDir, "../..")
    : path.join(configDir, "../../..");
const nextTranslate = require("next-translate-plugin");

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot,
  /* config options here */
  output: "standalone",
};

// Note: only available in Next.js +16 (for 15, you need to force a boolean, default false)
const isTurbopack = !process.argv.includes("--webpack");

export default nextTranslate(nextConfig, { turbopack: isTurbopack });
