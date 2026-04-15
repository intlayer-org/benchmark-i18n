import { measureComponents } from "test-utils/measure-components";
import pkg from "../package.json" with { type: "json" };

measureComponents({
  appName: pkg.name,
  benchmarkCategory: "nextjs-static",
  componentDirectories: ["./src/components", "./components"],
  // Externalize Next.js packages so they are excluded from the per-component
  // size measurement (they are identical across all apps and not i18n-related).
  additionalExternalPackages: [
    "next",
    "next/link",
    "next/navigation",
    "next/image",
    "next/script",
  ],
}).catch(console.error);
