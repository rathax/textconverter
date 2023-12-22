import './index.css'
// src/main.ts
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router/index'
import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage, setupI18n } from './plugins/i18n'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
const i18n = setupI18n()

export const createApp: any = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: routes },
  // function to have custom setups
  async ({ app, router, routes, isClient, initialState }) => {
    app.use(i18n)
    
    router.beforeEach(async (to, from, next) => {
      const paramsLocale = to.params.locale as string
      // use locale if paramsLocale is not in SUPPORT_LOCALES
      if (!SUPPORT_LOCALES.includes(paramsLocale)) {
        if (to.path === '/') {
          setI18nLanguage(i18n, 'en')
        
          return next()
        }
        return next(`/`)
      }
      if(paramsLocale === 'en') next(`/`)

      // load locale messages
      if (!i18n.global.availableLocales.includes(paramsLocale as any)) {
        await loadLocaleMessages(i18n, paramsLocale)
      }
      // set i18n language
      setI18nLanguage(i18n, paramsLocale)
      return next()
    })
  }
)

export async function includedRoutes() {
  // Sensitive key is managed by Vite - this would not be available inside
  // vite.config.js as it runs before the environment has been populated.

  return SUPPORT_LOCALES.map((val) => '/' + val).concat(['/'])
}
