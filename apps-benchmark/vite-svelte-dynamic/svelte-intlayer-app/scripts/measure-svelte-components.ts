import { measureSvelteComponents } from "test-utils/measure-svelte-components";
import pkg from "../package.json" with { type: "json" };

await measureSvelteComponents({
  appName: pkg.name,
  benchmarkCategory: "vite-svelte-dynamic",
});
