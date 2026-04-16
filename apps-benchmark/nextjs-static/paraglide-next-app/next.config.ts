import type { NextConfig } from "next";
import { paraglideWebpackPlugin } from "@inlang/paraglide-js";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // In production, `paraglideWebpackPlugin` compiles twice (buildStart +
    // beforeRun) and the incremental pass can leave a stub `messages/_index.js`,
    // breaking `import * as m from "../paraglide/messages"`. CI uses `bun run
    // extract` before `next build` for a full emit; dev keeps the plugin for
    // watch/recompile.
    if (dev) {
      config.plugins.push(
        paraglideWebpackPlugin({
          outdir: "./paraglide",
          project: "./project.inlang",
          outputStructure: "message-modules",
          strategy: ["url", "cookie", "baseLocale"],
          urlPatterns: [
            {
              pattern: "https://:domain(.*)/:path*",
              localized: [
                ["en", "https://:domain(.*)/:path*"],
                ["fr", "https://:domain(.*)/fr/:path*"],
                ["es", "https://:domain(.*)/es/:path*"],
                ["de", "https://:domain(.*)/de/:path*"],
                ["it", "https://:domain(.*)/it/:path*"],
                ["pt", "https://:domain(.*)/pt/:path*"],
                ["zh", "https://:domain(.*)/zh/:path*"],
                ["ja", "https://:domain(.*)/ja/:path*"],
                ["ko", "https://:domain(.*)/ko/:path*"],
                ["ru", "https://:domain(.*)/ru/:path*"],
              ],
            },
          ],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
