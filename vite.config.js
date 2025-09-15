import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import sassGlobImports from 'vite-plugin-sass-glob-import';

import { resolve } from 'path';

const options = { pretty: true };
const locals = { name: "My Pug" };


export default defineConfig({
  plugins: [pugPlugin({ localImports: true }, { hello: "world", baseUrl: "./src" }), sassGlobImports()],
  base: './',

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  },

  server: {
    watch: {
      usePolling: true
    }
  },
  
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
  
});

