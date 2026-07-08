import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { resources } from "@/lib/resources";

const BASE_URL = "https://hope-rebuild-platform-demo.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const entries: Array<{ path: string; changefreq: string; priority: string; lastmod: string }> = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          ...resources.map((r) => ({
            path: `/resources/${r.slug}`,
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today,
          })),
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});