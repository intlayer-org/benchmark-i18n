import { measureComponents } from "test-utils/measure-components";
import solid from "vite-plugin-solid";
import pkg from "../package.json" with { type: "json" };

measureComponents({
  appName: pkg.name,
  benchmarkCategory: "vite-solid-static",
  skipViteConfig: true,
  additionalPlugins: [solid()],
  additionalExternalPackages: [
    "solid-js",
    "solid-js/web",
    "solid-js/store",
    "solid-js/h",
    "solid-js/html",
    "@solidjs/router",
    "test-utils",
    "test-utils/browser-metrics",
  ],
  esbuild: { jsx: "preserve" },
}).catch(console.error);
