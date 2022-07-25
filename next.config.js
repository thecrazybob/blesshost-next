// next.config.js
const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();
const generateRobotsTxt = require("./scripts/generate-robots-txt");
const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

const OG_REWRITE = {
  source: "/opengraph/:path*",
  destination: `${process.env.OG_URL}/:path*`,
  permanent: true,
};

module.exports = withNextPluginPreval({
  experimental: {
    nextScriptWorkers: true,
  },
  swcMinify: true,
  images: {
    domains: [
      "blog.blesshost.com",
      "secure.gravatar.com",
      "images.unsplash.com",
      "cdn.sanity.io",
    ],
  },
  redirects: () => [OG_REWRITE],
  rewrites: () => [STUDIO_REWRITE],
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt();
    }
    return config;
  },
});
