import { measureLibSize } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };

measureLibSize({
  appName: pkg.name,
  benchmarkCategory: "vite-vue-static",
  emptyComponentFile: "scripts/EmptyComponent.vue",
  additionalExternalPackages: ["vue", "vue-router", "lucide-vue-next"],
}).catch(console.error);
