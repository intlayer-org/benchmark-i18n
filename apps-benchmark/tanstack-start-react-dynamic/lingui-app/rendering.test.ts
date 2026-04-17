import { registerRenderingTest } from "test-utils/rendering-test";
import pkg from "./package.json" with { type: "json" };

registerRenderingTest({
  appName: pkg.name,
  benchmarkCategory: "tanstack-start-react-dynamic",
});
