import { registerBundleTest } from "test-utils/pages-test";
import pkg from "./package.json" with { type: "json" };

registerBundleTest({
  appName: pkg.name,
  benchmarkCategory: "tanstack-start-react-dynamic",
});
