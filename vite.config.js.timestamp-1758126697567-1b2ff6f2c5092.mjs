// vite.config.js
import { defineConfig } from "file:///C:/Users/Admin/Desktop/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/the-star-traveler-game/node_modules/vite/dist/node/index.js";
import pugPlugin from "file:///C:/Users/Admin/Desktop/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/the-star-traveler-game/node_modules/vite-plugin-pug/dist/index.js";
import { viteStaticCopy } from "file:///C:/Users/Admin/Desktop/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/the-star-traveler-game/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  plugins: [
    pugPlugin({ localImports: true }, { hello: "world", baseUrl: "./src" }),
    viteStaticCopy({
      targets: [
        {
          src: "src/audio",
          // копируем папку audio
          dest: "."
          // положим её прямо в dist/
        }
      ]
    })
  ],
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXFx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQ0Mlx1MDQzQVx1MDQzMFxcXFx0aGUtc3Rhci10cmF2ZWxlci1nYW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXFx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQ0Mlx1MDQzQVx1MDQzMFxcXFx0aGUtc3Rhci10cmF2ZWxlci1nYW1lXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wLyVEMCU5MiVEMCVCNSVEMSU4MCVEMSU4MSVEMSU4MiVEMCVCQSVEMCVCMC90aGUtc3Rhci10cmF2ZWxlci1nYW1lL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHB1Z1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tcHVnXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5jb25zdCBvcHRpb25zID0geyBwcmV0dHk6IHRydWUgfTtcclxuY29uc3QgbG9jYWxzID0geyBuYW1lOiBcIk15IFB1Z1wiIH07XHJcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiBcInNyY1wiLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHB1Z1BsdWdpbih7IGxvY2FsSW1wb3J0czogdHJ1ZSB9LCB7IGhlbGxvOiBcIndvcmxkXCIsIGJhc2VVcmw6IFwiLi9zcmNcIiB9KSxcclxuICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgdGFyZ2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJzcmMvYXVkaW9cIiwgLy8gXHUwNDNBXHUwNDNFXHUwNDNGXHUwNDM4XHUwNDQwXHUwNDQzXHUwNDM1XHUwNDNDIFx1MDQzRlx1MDQzMFx1MDQzRlx1MDQzQVx1MDQ0MyBhdWRpb1xyXG4gICAgICAgICAgZGVzdDogXCIuXCIgICAgICAgICAvLyBcdTA0M0ZcdTA0M0VcdTA0M0JcdTA0M0VcdTA0MzZcdTA0MzhcdTA0M0MgXHUwNDM1XHUwNDUxIFx1MDQzRlx1MDQ0MFx1MDQ0Rlx1MDQzQ1x1MDQzRSBcdTA0MzIgZGlzdC9cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXSxcclxuICBiYXNlOiAnLi8nLFxyXG5cclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXJ2ZXI6IHtcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZVBvbGxpbmc6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICcuL2Rpc3QnLFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgfSBcclxufSlcclxuXHJcblxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdZLFNBQVMsb0JBQW9CO0FBQzdaLE9BQU8sZUFBZTtBQUl0QixTQUFTLHNCQUFzQjtBQUcvQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxVQUFVLEVBQUUsY0FBYyxLQUFLLEdBQUcsRUFBRSxPQUFPLFNBQVMsU0FBUyxRQUFRLENBQUM7QUFBQSxJQUN0RSxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsS0FBSztBQUFBO0FBQUEsVUFDTCxNQUFNO0FBQUE7QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUVOLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
