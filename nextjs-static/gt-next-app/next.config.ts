import type { NextConfig } from "next";
import { withGTConfig } from "gt-next/config";
import { loadDictionaries } from "intlayer/cli";

const nextConfig: NextConfig = {};

export default withGTConfig(nextConfig, {});
