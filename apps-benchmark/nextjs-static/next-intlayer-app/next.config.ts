import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
};

export default withIntlayer(nextConfig);
