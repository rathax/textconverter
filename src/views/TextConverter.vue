
<template>
    <div class="p-5">
      <div>
        <h1 class="text-3xl text-center font-bold mb-4 " v-html="t('title')"></h1>
  
        <h2 class="text-base text-center font-bold text-secondary" v-html="t('subTitle')"></h2>
        <div class="mt-8 mb-8 flex justify-center">
          <textarea rows="6" cols="50" aria-label="text"
            class="px-3 py-2 rounded border border-gray-300 outline-0 focus:ring-[3px]  border-r-2 ring-[rgba(38,143,255,0.5)]  transition-shadow duration-150  focus:border-[#007bff]  w-full max-w-4xl"
            v-model="input"></textarea>
  
        </div>
  
        <div class="flex-col">
  
          <FontRow v-for="(item, index) in data" :key="index" :text="item"></FontRow>
        </div>
      </div>
      <div class="mt-14 text-center md:text-left max-w-5xl m-auto leading-7 text-base">
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
      </div>
  
  
  
  
  
  
    </div>
  </template>
  
  
  <script setup lang="ts">
  import FontRow from "@/components/FontRow.vue"
  import { computed, ref } from 'vue';
  import * as db from "@/stores/db"
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();
  
  
  
  
  
  const defaultInput = "Unicode Text Converter " + new Date().getFullYear() + " !"
  const input = ref(defaultInput)
  
  const data = computed(() => {
    const string = input.value.split("")
  
    const helper = (string: string[], table: Record<string, string>) => {
      return string.map((char) => {
        if (char === '\n') return "<br>"
        return table[char] ?? char
      }).join('')
    }
  
    const charsetmap: string[] = []
  
    for (const charset in db) {
      charsetmap.push(helper(string, (db as any)[charset]) as any)
    }
  
  
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
  
  </script>
  
  <style>
  .text-h3 {
    @apply mt-5 mb-3 text-xl font-bold
  }
  </style>