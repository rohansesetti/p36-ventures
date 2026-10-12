import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const base = "https://www.p36ventures.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/what-we-do",
    "/services",
    "/studio",
    "/process",
    "/portfolio",
    "/about",
    "/opportunities",
    "/opportunities/fellowship",
    "/opportunities/fellowship/membership",
    "/opportunities/fellowship/apply",
    "/scouts",
    "/contact",
    "/privacy",
  ];

  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/opportunities/fellowship") ? 0.8 : 0.6,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
