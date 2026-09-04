import type { NextConfig } from "next";

/**
 * Static export for Cloudflare Pages (upload `out/` or connect git with
 * build command that produces `out`, output directory `out`).
 *
 * For full Next.js on Cloudflare Workers later, you can migrate to
 * `@opennextjs/cloudflare` — see README.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
