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
  },

  integrations: [react()],
});
