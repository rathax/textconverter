
<template>
  <div class="p-5 ">
    <div>
      <h1 class="text-3xl text-center font-bold mb-4 ">Unicode text converter that works in <br> Facebook, WhatsApp,
        Twitter(X), and lots
        more.</h1>
      <h2 class="text-base text-center font-bold text-secondary">This App
        converts characters from the ASCII range. Characters
        are converted on a one to one basis.</h2>
      <div class="mt-8 mb-8 flex justify-center">
        <textarea rows="4" cols="50"
          class="px-3 py-2 rounded border border-gray-300 outline-0 focus:ring-[3px]  border-r-2 ring-[rgba(38,143,255,0.5)]  transition-shadow duration-150  focus:border-[#007bff]  w-full max-w-4xl"
          v-model="input"></textarea>

      </div>

      <div class="flex-col">

        <FontRow v-for="(item, index) in data" :key="index" :text="item"></FontRow>
      </div>
    </div>
    <div class="mt-8 text-center md:text-left max-w-5xl m-auto">
      <h3 class="mt-4 mb-2 text-xl font-bold">Unlock Creativity with Unicode</h3>
      <p class="">Unleash your creativity and express yourself like never before. Our user-friendly Unicode Text Converter
        lets you effortlessly convert plain text into a mesmerizing array of symbols, and decorative characters.
        Whether you're crafting a social media post, designing a website, or adding a personal touch to your messages, our
        tool is your go-to resource for creating texts that leave a lasting impression.</p>
      <h3 class="mt-4 mb-2 text-xl font-bold">Key Features</h3>
      <li class="list-none"><b>Wide Range of Characters:</b> Choose from an extensive collection of Unicode characters an symbols
        to personalize your text</li>
      <li class="list-none"><b>Easy-to-Use Interface:</b> This mobile friendly interface ensures a seamless and hassle-free text conversion
        experience, even for beginners.</li>
      <li class="list-none"><b>Instant Preview:</b> See the transformation in real-time with our instant preview feature, allowing you to
        fine-tune your fancy text before sharing it with the world.</li>
      <li class="list-none"><b>Copy and Paste Convenience:</b> Copy your converted text with a single click and paste it directly into your
        favorite platforms, saving you time and effort.</li>
      <p class="mt-4">Possible transforms:
        circled, negative circled, Asian fullwidth, math bold, math bold Fraktur, math bold italic, math bold script, math
        double-struck, math monospace, math sans, math sans-serif bold, math sans-serif bold italic, math sans-serif
        italic,
        parenthesized, regional indicator symbols, squared, negative squared and more.</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import FontRow from "./components/FontRow.vue"
import { computed, ref } from 'vue';
import * as db from "./stores/db"
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

<style></style>