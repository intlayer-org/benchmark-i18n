import en from "./messages/en";

declare module "use-intl" {
  interface AppConfig {
    Messages: typeof en;
  }
}
