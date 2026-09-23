import { createApp } from "vue";
import { VueTolgee } from "@tolgee/vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { tolgee } from "./i18n";

createApp(App).use(router).use(VueTolgee, { tolgee }).mount("#app");
