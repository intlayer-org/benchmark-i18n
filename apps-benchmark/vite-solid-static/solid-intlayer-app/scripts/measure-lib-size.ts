import { measureLibSize } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };
measureLibSize({
  appName: pkg.name,
  benchmarkCategory: "vite-solid-static",
  additionalExternalPackages: [
    "solid-js",
    "solid-js/web",
    "solid-js/store",
    "solid-js/h",
    "solid-js/html",
    "@solidjs/router",
    "test-utils",
    "test-utils/browser-metrics",
    /\.json$/,
  ],
  esbuild: { jsx: "preserve" },
}).catch(console.error);
