import { defineConfig } from "vite";
import pugTransformer from "vite-plugin-pug-transformer";
import sassGlobImports from 'vite-plugin-sass-glob-import'

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/index.html",
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images'
          } else if (extType === 'css') {
            extType = 'styles'
          }
          return `${extType}/[name][extname]`
        },
        entryFileNames: `scripts/[name].js`,
        chunkFileNames: `scripts/[name].js`,
      },
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: ""
      }
    }
  },
  plugins: [
    sassGlobImports(),
    pugTransformer(),
  ],
});


