import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { ALL_PROGRAMS, ALL_COLLEGES } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Top-level static routes with hand-tuned priority.
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
    { path: "/placements", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work-abroad", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/centers", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/csr", priority: 0.6, changeFrequency: "monthly" },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // One entry per course/program detail page.
  const courseEntries: MetadataRoute.Sitemap = ALL_PROGRAMS.map((p) => ({
    url: `${SITE_URL}/courses/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // One entry per polytechnic / ITI campus landing page.
  const collegeEntries: MetadataRoute.Sitemap = ALL_COLLEGES.map((c) => ({
    url: `${SITE_URL}/colleges/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...courseEntries, ...collegeEntries];
}
