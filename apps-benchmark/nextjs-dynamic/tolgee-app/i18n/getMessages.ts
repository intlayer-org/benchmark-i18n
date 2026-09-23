import type en from "./locales/en.json";

export type Messages = typeof en;

export const getMessages = async (locale: string): Promise<Messages> => {
  try {
    const mod = await import(`./locales/${locale}.json`);
    return (mod as { default: Messages }).default;
  } catch {
    const mod = await import("./locales/en.json");
    return mod.default;
  }
};
