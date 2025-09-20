// import { defineConfig } from "vite";
// import pugPlugin from "vite-plugin-pug";
// import { resolve } from 'path'
// const options = { pretty: true };
// const locals = { name: "My Pug" };
// import { viteStaticCopy } from "vite-plugin-static-copy";


// export default defineConfig({
//   root: "./",
//   plugins: [
//     pugPlugin({ localImports: true }, { hello: "world", baseUrl: "./src" }),
//     viteStaticCopy({
//       targets: [
//         {
//           src: "src/audio", // копируем папку audio
//           dest: "."         // положим её прямо в dist/
//         }
//       ]
//     })
//   ],
//   base: './',

//   css: {
//     preprocessorOptions: {
//       scss: {
//         api: 'modern-compiler',
//       }
//     }
//   },

//   server: {
//     watch: {
//       usePolling: true
//     }
//   },
  
//   build: {
//     outDir: './dist',
//     emptyOutDir: true,
//   } 
// })

import { defineConfig } from "vite";
import pugTransformer from "vite-plugin-pug-transformer";
import { viteStaticCopy } from "vite-plugin-static-copy";
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


