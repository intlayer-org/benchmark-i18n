import { test } from "@playwright/test";
import { registerLibSizeTest } from "test-utils/lib-size-test";
import pkg from "./package.json" with { type: "json" };

registerLibSizeTest(test, {
  appName: pkg.name,
  benchmarkCategory: "nextjs-static",
  appDir: import.meta.dirname,
  additionalExternalPackages: [
    "next",
    "next/link",
    "next/navigation",
    "next/image",
    "next/script",
  ],
});
