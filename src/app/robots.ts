import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://treadwellrestoration.com/sitemap.xml",
    host: "https://treadwellrestoration.com",
  };
}
