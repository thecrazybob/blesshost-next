// next.config.js
const createNextPluginPreval = require("next-plugin-preval/config");
const generateRobotsTxt = require("./scripts/generate-robots-txt");
const withNextPluginPreval = createNextPluginPreval();
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
  i18n: {
    locales: ["en", "ar", "ru", "zh"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "www.blesshost.com",
        defaultLocale: "en",
      },
      {
        domain: "ae.blesshost.com",
        defaultLocale: "ar",
      },
      {
        domain: "ru.blesshost.com",
        defaultLocale: "ru",
      },
      {
        domain: "zh.blesshost.com",
        defaultLocale: "zh",
      },
    ],
  },
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
      require("./scripts/generate-sitemap");
      generateRobotsTxt();
    }
    return config;
  },
});
