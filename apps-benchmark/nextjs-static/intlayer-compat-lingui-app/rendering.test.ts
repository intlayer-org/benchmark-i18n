import { test, expect } from "@playwright/test";
import { registerRenderingTest } from "test-utils/rendering-test";
import pkg from "./package.json" with { type: "json" };

registerRenderingTest(test, expect, {
  appName: pkg.name,
  benchmarkCategory: "nextjs-static",
});
