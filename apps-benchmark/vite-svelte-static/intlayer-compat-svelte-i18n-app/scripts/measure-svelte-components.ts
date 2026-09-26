import path from "node:path";
import { measureSvelteComponents } from "test-utils/measure-svelte-components";
import pkg from "../package.json" with { type: "json" };

await measureSvelteComponents({
  appName: pkg.name,
  benchmarkCategory: "vite-svelte-static",
  wrapperTemplate: (componentPath) => `
    <script>
      import Component from '${componentPath}';
      import Wrapper from '${path.resolve("./scripts/Wrapper.svelte").replace(/\\/g, "/")}';
    </script>

    <Wrapper>
      <Component />
    </Wrapper>
  `,
});
