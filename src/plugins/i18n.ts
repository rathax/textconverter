import { nextTick } from 'vue'
import { createI18n, type I18n } from 'vue-i18n'
import en from '@/locales/en.json'

export const SUPPORT_LOCALES = ['en', 'de', 'fr', "es", "cn"]

export function setupI18n() {
  const i18n = createI18n({
    locale: 'en',
    allowComposition: true,
    legacy: false,
    availableLocales: SUPPORT_LOCALES,
    messages: { en: en },
    warnHtmlMessage: false,

  })
  setI18nLanguage(i18n, 'en')
  return i18n
}

export function setI18nLanguage(i18n: any, locale: string) {
  i18n.global.locale.value = locale

  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  //  document.querySelector('html')!.setAttribute('lang', locale)
}

export async function loadLocaleMessages(
  i18n: { global: { setLocaleMessage: (arg0: any, arg1: any) => void } },
  locale: any
) {
  // load locale messages with dynamic import
  const messages = await import(`../locales/${locale}.json`)

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}
