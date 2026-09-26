import path from "node:path";
import { measureSvelteLibSize } from "test-utils/measure-svelte-components";
import pkg from "../package.json" with { type: "json" };

await measureSvelteLibSize({
  appName: pkg.name,
  benchmarkCategory: "vite-svelte-static",
  emptyComponentFile: "scripts/EmptyComponent.svelte",
  wrapperTemplate: (componentPath) => `
    <script>
      import Component from '${componentPath}';
      import Wrapper from '${path.resolve("./scripts/LibWrapper.svelte").replace(/\\/g, "/")}';
    </script>
    <Wrapper>
      <Component />
    </Wrapper>
  `,
  additionalExternalPackages: [/\.json$/],
});
