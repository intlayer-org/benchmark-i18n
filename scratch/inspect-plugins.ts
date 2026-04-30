import { loadConfigFromFile } from "vite";
import path from "node:path";

async function run() {
  const configRoot = path.resolve("apps-benchmark/vite-vue-static/vue-intlayer-app");
  const configPath = path.join(configRoot, "vite.config.ts");
  const loaded = await loadConfigFromFile(
    { command: "build", mode: "production" },
    configPath,
    configRoot
  );
  if (loaded) {
    console.log("Plugins:");
    const plugins = (loaded.config.plugins || []).flat(Infinity);
    for (const p of plugins) {
      if (p && p.name) {
        console.log(`- ${p.name}`);
      } else {
        console.log(`- [unnamed plugin]`);
      }
    }
  } else {
    console.log("Failed to load config");
  }
}

run().catch(console.error);
