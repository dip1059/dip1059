import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dipankarsaha.vercel.app",
  output: "static",
  compressHTML: true,
  build: { inlineStylesheets: "always" },
});
