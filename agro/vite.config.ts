import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
