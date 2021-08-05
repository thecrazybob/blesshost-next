// next.config.js
const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

module.exports = withNextPluginPreval({
  images: {
    domains: [
      "blog.blesshost.com",
      "secure.gravatar.com",
      "images.unsplash.com",
    ],
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
