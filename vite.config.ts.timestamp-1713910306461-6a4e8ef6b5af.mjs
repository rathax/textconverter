// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import svgLoader from "file:///C:/Users/rathax/Documents/arbeit/vuetify3-test/vuetify/node_modules/vite-svg-loader/index.js";
import { defineConfig } from "file:///C:/Users/rathax/Documents/arbeit/vuetify3-test/vuetify/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/rathax/Documents/arbeit/vuetify3-test/vuetify/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/rathax/Documents/arbeit/vuetify3-test/vuetify/node_modules/vite-plugin-pwa/dist/index.js";
import { resolve, dirname } from "node:path";
import VueI18nPlugin from "file:///C:/Users/rathax/Documents/arbeit/vuetify3-test/vuetify/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/rathax/Documents/arbeit/vuetify3-test/vuetify/vite.config.ts";
var vite_config_default = defineConfig(
  (options) => {
    return {
      ssr: {
        // SSG Vue-i18n workaround
        noExternal: [/vue-i18n/]
      },
      ssgOptions: {
        crittersOptions: {
          preload: "media"
        }
      },
      plugins: [
        vue(),
        svgLoader(),
        VueI18nPlugin({
          /* options */
          // locale messages resource pre-compile option
          include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**"),
          strictMessage: false,
          fullInstall: false,
          ssr: options.ssrBuild,
          runtimeOnly: true
        }),
        VitePWA({
          includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
          injectRegister: "script-defer",
          workbox: { skipWaiting: true },
          manifest: {
            name: "Unicode Text Converter",
            short_name: "TC",
            description: "Generates Fancy Fonts",
            theme_color: "#ffffff",
            icons: [
              {
                src: "pwa-192x192.png",
                sizes: "192x192",
                type: "image/png"
              },
              {
                src: "pwa-512x512.png",
                sizes: "512x512",
                type: "image/png"
              },
              {
                src: "pwa-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any"
              },
              {
                src: "pwa-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
              }
            ]
          }
        })
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
        }
      }
    };
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyYXRoYXhcXFxcRG9jdW1lbnRzXFxcXGFyYmVpdFxcXFx2dWV0aWZ5My10ZXN0XFxcXHZ1ZXRpZnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHJhdGhheFxcXFxEb2N1bWVudHNcXFxcYXJiZWl0XFxcXHZ1ZXRpZnkzLXRlc3RcXFxcdnVldGlmeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcmF0aGF4L0RvY3VtZW50cy9hcmJlaXQvdnVldGlmeTMtdGVzdC92dWV0aWZ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgeyByZXNvbHZlLCBkaXJuYW1lIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChvcHRpb25zKSA9PiB7XG5yZXR1cm4ge1xuICBzc3I6IHtcbiAgICAvLyBTU0cgVnVlLWkxOG4gd29ya2Fyb3VuZFxuICBub0V4dGVybmFsOiBbL3Z1ZS1pMThuL10sXG4gIH0sXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBjcml0dGVyc09wdGlvbnM6IHtcbiAgICAgIHByZWxvYWQ6ICdtZWRpYSdcbiAgICB9XG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHN2Z0xvYWRlcigpLFxuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgLyogb3B0aW9ucyAqL1xuICAgICAgLy8gbG9jYWxlIG1lc3NhZ2VzIHJlc291cmNlIHByZS1jb21waWxlIG9wdGlvblxuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL3NyYy9sb2NhbGVzLyoqJyksXG4gICAgICAgIHN0cmljdE1lc3NhZ2U6IGZhbHNlLCBmdWxsSW5zdGFsbDogZmFsc2UsIHNzcjogb3B0aW9ucy5zc3JCdWlsZCwgcnVudGltZU9ubHk6IHRydWUsIH0pLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZycsICdtYXNrLWljb24uc3ZnJ10sXG4gICAgICBpbmplY3RSZWdpc3RlcjogJ3NjcmlwdC1kZWZlcicsXG4gICAgICB3b3JrYm94OiB7IHNraXBXYWl0aW5nOiB0cnVlLCB9LFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1VuaWNvZGUgVGV4dCBDb252ZXJ0ZXInLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVEMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dlbmVyYXRlcyBGYW5jeSBGb250cycsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn19XG4pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVyxTQUFTLGVBQWUsV0FBVztBQUNyWSxPQUFPLGVBQWU7QUFDdEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLFNBQVMsZUFBZTtBQUNqQyxPQUFPLG1CQUFtQjtBQU51TSxJQUFNLDJDQUEyQztBQVVsUixJQUFPLHNCQUFRO0FBQUEsRUFBYSxDQUFDLFlBQVk7QUFDekMsV0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBO0FBQUEsUUFFTCxZQUFZLENBQUMsVUFBVTtBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixpQkFBaUI7QUFBQSxVQUNmLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BRUEsU0FBUztBQUFBLFFBQ1AsSUFBSTtBQUFBLFFBQ0osVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBO0FBQUE7QUFBQSxVQUdaLFNBQVMsUUFBUSxRQUFRLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLGtCQUFrQjtBQUFBLFVBQzFFLGVBQWU7QUFBQSxVQUFPLGFBQWE7QUFBQSxVQUFPLEtBQUssUUFBUTtBQUFBLFVBQVUsYUFBYTtBQUFBLFFBQU0sQ0FBQztBQUFBLFFBQ3pGLFFBQVE7QUFBQSxVQUNOLGVBQWUsQ0FBQyxlQUFlLHdCQUF3QixlQUFlO0FBQUEsVUFDdEUsZ0JBQWdCO0FBQUEsVUFDaEIsU0FBUyxFQUFFLGFBQWEsS0FBTTtBQUFBLFVBQzlCLFVBQVU7QUFBQSxZQUNSLE1BQU07QUFBQSxZQUNOLFlBQVk7QUFBQSxZQUNaLGFBQWE7QUFBQSxZQUNiLGFBQWE7QUFBQSxZQUNiLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0UsS0FBSztBQUFBLGdCQUNMLE9BQU87QUFBQSxnQkFDUCxNQUFNO0FBQUEsY0FDUjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxLQUFLO0FBQUEsZ0JBQ0wsT0FBTztBQUFBLGdCQUNQLE1BQU07QUFBQSxjQUNSO0FBQUEsY0FDQTtBQUFBLGdCQUNFLEtBQUs7QUFBQSxnQkFDTCxPQUFPO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGdCQUNOLFNBQVM7QUFBQSxjQUNYO0FBQUEsY0FDQTtBQUFBLGdCQUNFLEtBQUs7QUFBQSxnQkFDTCxPQUFPO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGdCQUNOLFNBQVM7QUFBQSxjQUNYO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsVUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLFFBQ3REO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUFDO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
