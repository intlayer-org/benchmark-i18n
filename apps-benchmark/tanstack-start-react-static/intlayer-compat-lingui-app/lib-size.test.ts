import { test } from "@playwright/test";
import { registerLibSizeTest } from "test-utils/lib-size-test";
import pkg from "./package.json" with { type: "json" };

registerLibSizeTest(test, {
  appName: pkg.name,
  benchmarkCategory: "tanstack-start-react-static",
  appDir: import.meta.dirname,
});
