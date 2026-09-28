import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import fluent, { syncFluentBundles } from "./i18n";
import router from "./router";

createApp(App)
  .use(router)
  .use(fluent)
  .mount("#app");

router.afterEach((to) => {
  syncFluentBundles(typeof to.params.locale === "string" ? to.params.locale : "en");
});

syncFluentBundles(typeof router.currentRoute.value.params.locale === "string"
  ? (router.currentRoute.value.params.locale as string)
  : "en");
