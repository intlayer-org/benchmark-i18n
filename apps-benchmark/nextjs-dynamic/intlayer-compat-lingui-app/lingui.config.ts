import { defineConfig } from "@lingui/cli";
import { formatter } from "@lingui/format-json";

export default defineConfig({
  format: formatter({ style: "minimal" }),
  compileNamespace: "es",
  catalogs: [
    {
      include: ["app"],
      path: "<rootDir>/locales/{locale}/messages",
    },
    {
      include: ["components"],
      path: "<rootDir>/locales/{locale}/messages",
    },
  ],
  locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  sourceLocale: "en",
});
