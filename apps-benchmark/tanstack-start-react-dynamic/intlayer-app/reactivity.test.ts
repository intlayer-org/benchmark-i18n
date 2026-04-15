import { registerReactivityTest } from "test-utils/reactivity-test";
import pkg from "./package.json" with { type: "json" };

registerReactivityTest({
  appName: pkg.name,
  benchmarkCategory: "tanstack-start-react-dynamic",
});
