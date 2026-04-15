import { adapter as jsx } from "@wuchale/jsx";
import { defineConfig } from "wuchale";

export default defineConfig({
  locales: ["en", "es", "fr", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  catalog: {
    path: "./src/locales",
  },
  adapters: {
    main: jsx({
      loader: "react",
      files: "./src/**/*.{ts,tsx}",
    }),
  },
});
