
<template>
  <div class="text-center my-7 text-2xl min-h-[26.256px]"> 
    <span  v-html="text"></span> <CopyIcon v-if="(text ?? '').length > 0" class="ml-1 inline hover:cursor-pointer h-6 hover:h-7 transition-all" :class="{'animate-gelatine': bounce}" @click="copyText"/>

  </div>
</template>

<script setup lang="ts">

import CopyIcon from "@/assets/copy-icon.svg?component"
import { ref } from "vue";
const props = defineProps({
  text: String,
})

const bounce = ref(false)
async function copyText() {
  bounce.value = false
  await new Promise(resolve => setTimeout(resolve, 1))
  
  navigator.clipboard.writeText(props.text?.replace(new RegExp("<br>", 'g'), "\n") ?? "");
  bounce.value = true
}
</script>

<style>
.animate-gelatine {
  animation: gelatine 0.5s forwards;
}
@keyframes gelatine {
  from, to { transform: scale(1, 1); fill:black }
  25% { transform: scale(0.85, 1.15); fill: green}
  50% { transform: scale(1.15, 0.85); fill: green}
  75% { transform: scale(0.90, 1.10); fill: green}
  100% { fill: black}

}
</style>