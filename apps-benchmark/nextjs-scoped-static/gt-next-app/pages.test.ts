import { test, expect } from "@playwright/test";
import { registerBundleTest } from "test-utils/pages-test";
import pkg from "./package.json" with { type: "json" };

registerBundleTest(test, expect, {
  appName: pkg.name,
  benchmarkCategory: "nextjs-scoped-static",
});
