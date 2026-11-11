export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://nextdynamics.tech/sitemap.xml",
    host: "https://nextdynamics.tech",
  };
}

