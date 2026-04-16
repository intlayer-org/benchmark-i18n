import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";

import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot =
  path.basename(configDir) === "nextjs-base-app"
    ? path.join(configDir, "../..")
    : path.join(configDir, "../../..");
const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot,
};

export default async function (): Promise<NextConfig> {
  return await withLingo(nextConfig, {
    sourceRoot: "./app",
    sourceLocale: "en",
    targetLocales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
    models: "lingo.dev",
    dev: {
      usePseudotranslator: true,
    },
  });
}
