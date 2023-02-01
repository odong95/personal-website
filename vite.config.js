import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: resolve(__dirname, "src/components"),
      },
    ],
  },
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    port: 3000
  },
  plugins: [react()],
});