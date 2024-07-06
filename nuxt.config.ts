import type { NuxtI18nOptions } from "@nuxtjs/i18n";
import type { I18nHeadOptions } from "@nuxtjs/i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/index.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-svgo"],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'de',
        file: 'de.json'
      },
      {
        code: 'es',
        file: 'es.json'
      },
      {
        code: 'fr',
        file: 'fr.json'
      },
      {
        code: 'zh-CN',
        file: 'zh-CN.json'
      }
    ],
    vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    compilation: {
      strictMessage: false
    }
  
  } satisfies NuxtI18nOptions
})