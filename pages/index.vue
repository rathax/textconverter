
<template>
  <div class="p-5">
    <section>
      <div>
        <h1 class="text-3xl text-center font-bold mb-4 whitespace-break-spaces" v-html="t('title')"></h1>
        <h2 class="text-base text-center font-bold text-secondary" v-html="t('subTitle') + ' ' + t('subTitle2')"></h2>
          <div class="mt-8 mb-8 flex justify-center">
            <!-- transition-shadow duration-150 removed due to INP debugging-->
            <textarea rows="6" cols="50" aria-label="text"
              class="px-3 py-2 rounded border border-gray-300 outline-0 focus:ring-[3px]  border-r-2 ring-[rgba(38,143,255,0.5)]    focus:border-[#007bff]  w-full max-w-4xl"
              v-model="input"></textarea>
          </div>
      </div>
      <div>
        <div class="flex flex-col">
          <FontRow v-for="(item, index) in data" :key="index" :text="item"></FontRow>
        </div>
        <div align="center" class="min-h-72">
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7920782567845375" data-ad-slot="1375391614"
          data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>
      </div>
    </section>
    <section class="mt-14 text-center md:text-left max-w-5xl m-auto formatted-text">
      <h3 class="text-h3" v-html="t('faq1.question')"></h3>
      <p class="" v-html="t('faq1.answer')"></p>

      <h3 class="text-h3" v-html="t('faq2.question')"></h3>
      <p class="" v-html="t('faq2.answer')"></p>

      <h3 class="text-h3" v-html="t('faq3.question')"></h3>
      <p class="" v-html="t('faq3.answer')"></p>

      <h3 class="text-h3" v-html="t('faq4.question')"></h3>
      <p class="" v-html="t('faq4.answer')"></p>

      <h3 class="text-h3" v-html="t('faq5.question')"></h3>
      <p class="" v-html="t('faq5.answer')"></p>

      <h3 class="text-h3" v-html="t('faq6.question')"></h3>
      <p class="" v-html="t('faq6.answer')"></p>

      <h3 class="text-h3" v-html="t('faq7.question')"></h3>
      <p class="" v-html="t('faq7.answer')"></p>

      <h3 class="text-h3" v-html="t('faq8.question')"></h3>
      <p class="" v-html="t('faq8.answer')"></p>

      <h3 class="text-h3" v-html="t('faq9.question')"></h3>
      <p class="" v-html="t('faq9.answer')"></p>


      <h3 class="text-h3">{{ t('keyFeatures.title') }}</h3>
      <ul>
        <li class="list-none" v-html="t('keyFeatures.li1')"></li>
        <li class="list-none" v-html="t('keyFeatures.li2')"></li>
        <li class="list-none" v-html="t('keyFeatures.li3')"></li>
        <li class="list-none" v-html="t('keyFeatures.li4')"></li>
      </ul>


      <p class="mt-4">{{ t('keyFeatures.possibleTransofrms') }}
        circled, negative circled, Asian fullwidth, math bold, math bold Fraktur, math bold italic, math bold script, math
        double-struck, math monospace, math sans, math sans-serif bold, math sans-serif bold italic, math sans-serif
        italic, parenthesized, regional indicator symbols, squared, negative squared and more.</p>
    </section>
  </div>
</template>
  
  
<script setup lang="ts">
import FontRow from "@/components/FontRow.vue"
import { computed, watch, ref, onMounted } from 'vue';
import * as db from "@/assets/db"
import { useI18n } from "vue-i18n";
import { useRouter, } from "vue-router"
const router = useRouter()
const { t, locale } = useI18n();

const defaultInput = "Unicode Text Converter " + new Date().getFullYear() + " !"
const input = ref(defaultInput)


onMounted(() => {
  if (router.currentRoute.value.query.text && typeof router.currentRoute.value.query.text === "string") {
  console.log(input.value = router.currentRoute.value.query.text)
  console.log(input.value)

  input.value = router.currentRoute.value.query.text
}
})

watch(input, (val) => {
  router.replace({ ...router.currentRoute.value, query: { text: val } });
})
const helper = (string: string[], table: Record<string, string>) => {
  return string.map((char) => {
    if (char === '\n') return "<br>"
    return table[char] ?? char
  }).join('')
}

const data = computed(() => {
  console.log(input.value)
  const string = input.value.split("")


  const charsetmap: string[] = []

  for (const charset in db) {
    charsetmap.push(helper(string, (db as any)[charset]) as any)
    if (charset === "sa" || charset === "sb") {
      charsetmap.push(helper(string.slice().reverse(), (db as any)[charset]) as any)
    }
  }

  charsetmap.push(string.slice().reverse().join(""))
  charsetmap.push(input.value.replace(/([^\s])/g, "[̲̅$1]"))
  charsetmap.push(input.value.replace(/([^\s])/g, "\u3010$1\u3011"))
  charsetmap.push(input.value.replace(/([^\s])/g, "\u300E$1\u300F"))

  if (string.length >= 1) {
    charsetmap.push(string.join("̶") + "̶")
    charsetmap.push(string.join("̴") + "̴")
    charsetmap.push(string.join("̳") + "̳")
    charsetmap.push(string.join("̷") + "̷")
    charsetmap.push(string.join("̾") + "̾")
    charsetmap.push(string.join("͎") + "͎")
    charsetmap.push(string.join("͓̽") + "͓̽")
  }

  return charsetmap
})


useSeoMeta({
  title: 'Text Converter | Unicode Text Converter',
  ogTitle: 'Text Converter | Unicode Text Converter',
  description: () => `${t('title')}`.replace(new RegExp(" <br> ", 'g'), ""),
  ogDescription: `${t('title')}`.replace(new RegExp(" <br> ", 'g'), ""),
  author: 'ratHax',
  keywords: 'unicode text converter, text converter, unicode converter, fancy text converter, font translate, unicode text transformer, text transformer, qaz wtf"',
})

// if(window) {
//     // @ts-expect-error
//   (window.adsbygoogle = window.adsbygoogle || []).push({});
// }


watch([locale], () => {
  useHead({
    link: [
      { rel: "alternate", hreflang: "x-default", href: "https://www.textconverter.net" },
      { rel: "alternate", hreflang: "en", href: "https://www.textconverter.net" },
      { rel: "alternate", hreflang: "fr", href: "https://www.textconverter.net/fr" },
      { rel: "alternate", hreflang: "de", href: "https://www.textconverter.net/de" },
      { rel: "alternate", hreflang: "es", href: "https://www.textconverter.net/es" },
      { rel: "alternate", hreflang: "zh-CN", href: "https://www.textconverter.net/zh-CN" },
    ],
    script: [{
      type: "application/ld+json", innerHTML: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.textconverter.net",
          "name": "Text Converter",
          "alternateName": ["Unicode Text Converter", "Unicode Text Translator"],
          "potentialAction": [{
            "@type": "CreateAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.textconverter.net/?text={text_to_convert}"
            },
            "query-input": "required name=text_to_convert"
          }]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "url": "https://www.textconverter.net",
          "name": "Text Converter",
          "alternateName": ["Unicode Text Converter", "Unicode Text Translator"],
          "applicationCategory": "UtilitiesApplication",
          "browserRequirements": "Requires modern web browser",
          "operatingSystem": "API-based",
          "softwareHelp": "https://github.com/rathax/textconverter",
          "featureList": [
            "Unicode text converter that works in Facebook, WhatsApp, Twitter(X), LinkedIn and lots more.",
            "Easy-to-Use Interface for hassle-free text conversion experience",
            "Copy and Paste Convenience",
            "Instant Preview",
            "Wide Range of Characters: Choose from an extensive collection of Unicode characters an symbols to personalize your text"
          ],
          "offers": {
            "@type": "Offer",
            "price": "0"
          }
        }
      ])
    }],
    htmlAttrs: { lang: locale },
  })
}, { immediate: true })

</script>
  
