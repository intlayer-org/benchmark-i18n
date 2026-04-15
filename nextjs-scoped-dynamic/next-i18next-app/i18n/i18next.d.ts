import "i18next";
import { defaultNS, namespaces } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      [K in (typeof namespaces)[number]]: Record<string, string>;
    };
  }
}
