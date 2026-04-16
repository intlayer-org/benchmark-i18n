import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot =
  path.basename(configDir) === "nextjs-base-app"
    ? path.join(configDir, "../..")
    : path.join(configDir, "../../..");

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  outputFileTracingRoot: monorepoRoot,
};

export default nextConfig;
