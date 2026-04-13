import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.FRENCH],
    defaultLocale: Locales.ENGLISH,
  },
  dictionary: {
    importMode: "dynamic",
  },
  build: {
    /**
     * Minify the dictionaries to reduce the bundle size.
     */
     minify: true;

    /**
     * Purge the unused keys in a dictionaries
     */
     purge: true;

    /**
     * Indicates if the build should check TypeScript types
     */
    checkTypes: false;
  },
};

export default config;