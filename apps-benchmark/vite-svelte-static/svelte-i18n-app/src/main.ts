import { get } from "svelte/store";
import { mount } from "svelte";
import { locale as i18nLocale } from "svelte-i18n";
import App from "./App.svelte";
import "./styles.css";
import { isLocale } from "./lib/i18n/config";
import { setupSvelteI18n } from "./lib/i18n/svelte-i18n-init";
import { initRouter, pathname } from "./lib/routerStore";

async function bootstrap() {
  if (
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "")
  ) {
    history.replaceState(null, "", "/en");
  }
  const startPath =
    typeof window !== "undefined" ? window.location.pathname : "/en";
  pathname.set(startPath);
  await setupSvelteI18n(startPath);

  function syncPathToI18n(path: string): void {
    const seg = path.split("/").filter(Boolean)[0];
    if (seg && isLocale(seg)) void i18nLocale.set(seg);
  }
  syncPathToI18n(get(pathname));
  pathname.subscribe(syncPathToI18n);

  initRouter();

  return mount(App, {
    target: document.getElementById("app")!,
  });
}

export default await bootstrap();
