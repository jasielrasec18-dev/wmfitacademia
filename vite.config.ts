import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import path from "node:path";

// O Nitro escolhe o destino do deploy automaticamente: na Vercel gera o
// formato `.vercel/output`; localmente gera um servidor Node em `.output`.
export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({ srcDirectory: "src/app" }),
    nitro(),
    viteReact(),
  ],
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
    dedupe: ["react", "react-dom", "@tanstack/react-query"],
  },
});
