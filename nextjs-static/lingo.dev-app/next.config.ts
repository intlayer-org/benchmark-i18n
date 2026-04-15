import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";

const nextConfig: NextConfig = {};

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
