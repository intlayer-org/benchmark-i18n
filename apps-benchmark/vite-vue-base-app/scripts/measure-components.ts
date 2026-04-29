import { measureComponents } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };

measureComponents({
  appName: pkg.name,
  benchmarkCategory: "vite-vue-static",
  additionalExternalPackages: ["vue", "vue-router", "lucide-vue-next"],
}).catch(console.error);
