import { createApp } from "vue";
import { intlayer } from "vue-intlayer";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(intlayer).use(router).mount("#app");
