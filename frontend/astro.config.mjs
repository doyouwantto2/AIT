import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import graphqlLoader from "vite-plugin-graphql-loader";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      graphqlLoader(),
    ],
    server: {
      proxy: {
        // Forward /api requests to your Axum backend
        '/api': {
          target: 'http://127.0.0.1:3000', // your Axum backend
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), // remove /api prefix if backend routes are like /users
        },
      },
    },
  },
  integrations: [react()],
});
