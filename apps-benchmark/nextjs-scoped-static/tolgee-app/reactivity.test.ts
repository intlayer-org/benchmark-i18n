import { test, expect } from "@playwright/test";
import { registerReactivityTest } from "test-utils/reactivity-test";
import pkg from "./package.json" with { type: "json" };


registerReactivityTest(test, expect, {
  appName: pkg.name,
  benchmarkCategory: "nextjs-scoped-static",

});
