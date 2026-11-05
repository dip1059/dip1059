import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dip1059.netlify.app",
  output: "static",
  compressHTML: true,
  build: { inlineStylesheets: "always" },
});
