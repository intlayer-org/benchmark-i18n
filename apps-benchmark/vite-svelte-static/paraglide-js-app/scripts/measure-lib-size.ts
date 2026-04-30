import { measureSvelteLibSize } from "test-utils/measure-svelte-components";
import pkg from "../package.json" with { type: "json" };

await measureSvelteLibSize({
  appName: pkg.name,
  benchmarkCategory: "vite-svelte-static",
});
