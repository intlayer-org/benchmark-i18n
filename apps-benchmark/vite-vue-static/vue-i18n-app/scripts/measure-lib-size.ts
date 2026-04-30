import path from "node:path";
import { measureLibSize } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };

measureLibSize({
  appName: pkg.name,
  benchmarkCategory: "vite-vue-static",
  emptyComponentFile: "scripts/EmptyComponent.vue",
  wrapperTemplate: (componentPath) => `
    import { h } from 'vue';
    import Component from '${componentPath}';
    import Wrapper from '${path.resolve("./scripts/LibWrapper.vue").replace(/\\/g, "/")}';

    export default {
      render() {
        return h(Wrapper, {}, {
          default: () => h(Component)
        });
      }
    }
  `,
  additionalExternalPackages: ["vue", "vue-router", "lucide-vue-next"],
}).catch(console.error);
