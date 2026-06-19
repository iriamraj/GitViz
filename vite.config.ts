import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import InjectPreload from "unplugin-inject-preload/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    InjectPreload({
      files: [
        {
          // Added "2" right before the "$" to strictly match .woff2 and ignore .woff
          outputMatch: /(geist|inter)-latin-(400|500|700)-normal-.*\.woff2$/,
          attributes: {
            type: "font/woff2",
            as: "font",
            crossorigin: "anonymous",
          },
        },
      ],
    }),
  ],
});
