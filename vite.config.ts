import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/AirQuality",
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
  };

  if (command === "serve") {
    config.base = "/";
  }

  return config;
});
