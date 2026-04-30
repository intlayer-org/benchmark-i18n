import path from "node:path";
import { measureComponents } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };
measureComponents({
  appName: pkg.name,
  benchmarkCategory: "vite-solid-static",
  wrapperTemplate: (componentPath) => `
    import Component from '${componentPath}';
    import Wrapper from '${path.resolve("./scripts/Wrapper.tsx").replace(/\\/g, "/")}';

    export default function Wrapped() {
      return (
        <Wrapper>
          <Component />
        </Wrapper>
      );
    }
  `,
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
