import type { NextConfig } from "next";
import { paraglideWebpackPlugin } from "@inlang/paraglide-js";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      paraglideWebpackPlugin({
        outdir: "./paraglide",
        project: "./project.inlang",
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
    return config;
  },
};

export default nextConfig;
