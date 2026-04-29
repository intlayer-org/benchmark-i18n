import { mount } from "svelte";
import App from "./App.svelte";
import "./styles.css";
import { initRouter, pathname } from "./lib/routerStore";

if (
  typeof window !== "undefined" &&
  (window.location.pathname === "/" || window.location.pathname === "")
) {
  history.replaceState(null, "", "/en");
}
pathname.set(
  typeof window !== "undefined" ? window.location.pathname : "/en",
);
initRouter();

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
