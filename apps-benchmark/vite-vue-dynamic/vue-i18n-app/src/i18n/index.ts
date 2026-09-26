import { createI18n } from "vue-i18n";
import { locales } from "./config";

// Dynamic variant: no catalog is bundled up front; each locale's messages are
// fetched as their own chunk the first time the locale is used.
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {},
});

const messageLoaders = import.meta.glob<{ default: Record<string, unknown> }>(
  "../../locales/*.json",
);

export async function loadLocaleMessages(locale: string): Promise<void> {
  if (!(locales as readonly string[]).includes(locale)) return;
  if (i18n.global.availableLocales.includes(locale as never)) return;
  const messages = await messageLoaders[`../../locales/${locale}.json`]();
  i18n.global.setLocaleMessage(locale as never, messages.default as never);
}

export default i18n;
