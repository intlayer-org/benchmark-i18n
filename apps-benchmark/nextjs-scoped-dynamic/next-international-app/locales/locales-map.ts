import de from "./de";
import en from "./en";
import es from "./es";
import fr from "./fr";
import it from "./it";
import ja from "./ja";
import ko from "./ko";
import pt from "./pt";
import ru from "./ru";
import zh from "./zh";

/**
 * Eager locale bundles (no `import()` code-splitting). next-international still
 * expects `() => Promise<module>`; we satisfy that with Promise.resolve.
 */
export const localesMap = {
  en: () => Promise.resolve({ default: en }),
  fr: () => Promise.resolve({ default: fr }),
  es: () => Promise.resolve({ default: es }),
  de: () => Promise.resolve({ default: de }),
  it: () => Promise.resolve({ default: it }),
  pt: () => Promise.resolve({ default: pt }),
  zh: () => Promise.resolve({ default: zh }),
  ja: () => Promise.resolve({ default: ja }),
  ko: () => Promise.resolve({ default: ko }),
  ru: () => Promise.resolve({ default: ru }),
} as const;
