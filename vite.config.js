import path, { resolve } from 'node:path';
import url from 'node:url';
import { defineConfig } from "vite";
import pugTransformer from "vite-plugin-pug-transformer";
import sassGlobImports from 'vite-plugin-sass-glob-import'

const root = resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'src')
const outDir = resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'dist')

export default defineConfig({
  root,
  base: './',
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
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


