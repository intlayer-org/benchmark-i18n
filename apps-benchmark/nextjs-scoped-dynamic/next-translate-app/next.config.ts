import type { NextConfig } from "next";

const nextTranslate = require("next-translate-plugin");

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextTranslate(nextConfig, { turbopack: true });
