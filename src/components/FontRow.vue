
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
