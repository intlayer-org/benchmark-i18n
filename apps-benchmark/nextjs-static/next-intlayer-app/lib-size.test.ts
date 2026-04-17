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
    "@intlayer/dictionaries-entry",
    "@intlayer/unmerged-dictionaries-entry",
    "@intlayer/remote-dictionaries-entry",
    "@intlayer/dynamic-dictionaries-entry",
    "@intlayer/fetch-dictionaries-entry",
  ],
  skipViteConfig: true,
});
