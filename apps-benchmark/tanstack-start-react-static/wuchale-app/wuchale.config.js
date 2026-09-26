import { adapter as jsx } from "@wuchale/jsx";
import { defineConfig } from "wuchale";

export default defineConfig({
  locales: ["en", "es", "fr", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  catalog: {
    path: "./src/locales",
  },
  adapters: {
    main: jsx({
      files: "./src/**/*.{ts,tsx}",
      // Static variant: bundle every locale's catalog instead of lazy-loading per locale.
      loading: { direct: true },
    }),
  },
});
