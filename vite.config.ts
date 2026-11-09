import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "node:path";

export default defineConfig({
  tanstackStart: {
    srcDirectory: "src/app",
  },
  vite: {
    resolve: {
      alias: [
        {
          find: "@/assets",
          replacement: path.resolve("src/assets"),
        },
        {
          find: "@",
          replacement: path.resolve("src/app"),
        },
      ],
    },
  },
});
