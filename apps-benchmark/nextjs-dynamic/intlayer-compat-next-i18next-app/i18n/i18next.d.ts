import "i18next";
import en from "./locales/en.json";
import { defaultNS } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      translation: typeof en;
    };
  }
}
