import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/resume/" : "/",
  plugins: [preact()],
  resolve: {
    alias:
      process.env.NODE_ENV === "production"
        ? {
            "@": "/resume/",
            src: "/resume/",
          }
        : {},
  },
});
