const fs = require("fs");
const globby = require("globby");
const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
  return data?.posts;
}

function addPage(page) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");
  const route = path === "/index" ? "" : path;
  return `  <url>
    <loc>${`https://www.blesshost.com${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
    "!pages/blog",
  ]);
  const blogPosts = await getAllPostsWithSlug();
  const slugs = blogPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [];
  const allpages = [...pages, ...slugs];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allpages.map(addPage).join("\n")}
  </urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
