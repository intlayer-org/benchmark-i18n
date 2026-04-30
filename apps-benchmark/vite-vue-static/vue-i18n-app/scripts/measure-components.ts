import path from "node:path";
import { measureComponents } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };

measureComponents({
  appName: pkg.name,
  benchmarkCategory: "vite-vue-static",
  wrapperTemplate: (componentPath) => `
    import { h } from 'vue';
    import Component from '${componentPath}';
    import Wrapper from '${path.resolve("./scripts/Wrapper.vue").replace(/\\/g, "/")}';

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
