import { defineConfig } from "@lingui/cli";
import { formatter } from "@lingui/format-json";

export default defineConfig({
  format: formatter({ style: "minimal" }),
  catalogs: [
    {
      include: ["src"],
      path: "<rootDir>/src/locales/{locale}/messages",
    },
  ],
  locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  sourceLocale: "en",
});
