import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zahrasinamehr.com/",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
