import { adapter as svelte } from "@wuchale/svelte";
import { defineConfig } from "wuchale";

export default defineConfig({
  locales: ["en", "es", "fr", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  catalog: {
    path: "./src/locales",
  },
  adapters: {
    main: svelte({
      files: "./src/**/*.{svelte,svelte.ts}",
      // Static variant: bundle every locale's catalog instead of lazy-loading per locale.
      loading: { direct: true },
    }),
  },
});
