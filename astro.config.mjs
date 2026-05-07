import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aibubbletracker.top",
  integrations: [sitemap()],
  output: "static"
});
