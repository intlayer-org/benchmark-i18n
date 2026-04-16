import type { NextConfig } from "next";
import { withGTConfig } from "gt-next/config";
import { loadDictionaries } from "intlayer/cli";

import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot =
  path.basename(configDir) === "nextjs-base-app"
    ? path.join(configDir, "../..")
    : path.join(configDir, "../../..");
const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot,
};

export default withGTConfig(nextConfig, {});
