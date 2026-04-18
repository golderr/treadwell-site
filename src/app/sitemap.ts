import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { articles } from "@/content/articles";

const BASE = "https://treadwellrestoration.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/service-area",
    "/process",
    "/about",
    "/faq",
    "/resources",
  ].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${BASE}/service-area/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${BASE}/resources/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...articleRoutes];
}
