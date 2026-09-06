import en from "./messages/en.json";

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

type Messages = typeof en;

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}

declare module "use-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}
