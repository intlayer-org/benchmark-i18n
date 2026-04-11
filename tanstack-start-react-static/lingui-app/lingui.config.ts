import { defineConfig } from "@lingui/cli";

export default defineConfig({
  catalogs: [
    {
      include: ["src"],
      path: "<rootDir>/src/locales/{locale}/messages",
    },
  ],
  locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  sourceLocale: "en",
});
