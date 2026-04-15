declare global {
  /** Nested message tree (split JSON catalogs merged per locale in `getMessages`). */
  interface IntlMessages extends Record<string, string | Record<string, unknown>> {}
}

declare module "use-intl" {
  interface AppConfig {
    Messages: IntlMessages;
  }
}
