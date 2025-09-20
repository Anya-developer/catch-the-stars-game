// vite.config.js
import { defineConfig } from "file:///C:/Users/Admin/Desktop/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/the-star-traveler-game/node_modules/vite/dist/node/index.js";
import pugPlugin from "file:///C:/Users/Admin/Desktop/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/the-star-traveler-game/node_modules/vite-plugin-pug/dist/index.js";
import sassGlobImports from "file:///C:/Users/Admin/Desktop/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/the-star-traveler-game/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [pugPlugin({ localImports: true }, { hello: "world", baseUrl: "./src" }), sassGlobImports()],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXFx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQ0Mlx1MDQzQVx1MDQzMFxcXFx0aGUtc3Rhci10cmF2ZWxlci1nYW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXFx1MDQxMlx1MDQzNVx1MDQ0MFx1MDQ0MVx1MDQ0Mlx1MDQzQVx1MDQzMFxcXFx0aGUtc3Rhci10cmF2ZWxlci1nYW1lXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbi9EZXNrdG9wLyVEMCU5MiVEMCVCNSVEMSU4MCVEMSU4MSVEMSU4MiVEMCVCQSVEMCVCMC90aGUtc3Rhci10cmF2ZWxlci1nYW1lL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHB1Z1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tcHVnXCI7XHJcbmltcG9ydCBzYXNzR2xvYkltcG9ydHMgZnJvbSAndml0ZS1wbHVnaW4tc2Fzcy1nbG9iLWltcG9ydCc7XHJcblxyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcblxyXG5jb25zdCBvcHRpb25zID0geyBwcmV0dHk6IHRydWUgfTtcclxuY29uc3QgbG9jYWxzID0geyBuYW1lOiBcIk15IFB1Z1wiIH07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcHVnUGx1Z2luKHsgbG9jYWxJbXBvcnRzOiB0cnVlIH0sIHsgaGVsbG86IFwid29ybGRcIiwgYmFzZVVybDogXCIuL3NyY1wiIH0pLCBzYXNzR2xvYkltcG9ydHMoKV0sXHJcbiAgYmFzZTogJy4vJyxcclxuXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VQb2xsaW5nOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnLi9kaXN0JyxcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gIH1cclxuICBcclxufSk7XHJcblxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdZLFNBQVMsb0JBQW9CO0FBQzdaLE9BQU8sZUFBZTtBQUN0QixPQUFPLHFCQUFxQjtBQVE1QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsVUFBVSxFQUFFLGNBQWMsS0FBSyxHQUFHLEVBQUUsT0FBTyxTQUFTLFNBQVMsUUFBUSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7QUFBQSxFQUNwRyxNQUFNO0FBQUEsRUFFTixLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxFQUNmO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
