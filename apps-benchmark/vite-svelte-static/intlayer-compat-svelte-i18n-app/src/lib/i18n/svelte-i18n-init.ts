import { init } from "svelte-i18n";
import { parsePath } from "../path";

// `svelte-i18n` is aliased to `@intlayer/svelte-i18n` by `svelteI18nVitePlugin`,
// so the messages are served from the intlayer dictionaries compiled from
// `src/locales/` instead of being passed to `register` (which would ship every
// locale in the main bundle).
export async function setupSvelteI18n(
  initialPathname: string,
): Promise<void> {
  const parsed = parsePath(initialPathname);
  const initialLocale = parsed.kind === "ok" ? parsed.locale : "en";
  await init({
    fallbackLocale: "en",
    initialLocale,
  });
}
