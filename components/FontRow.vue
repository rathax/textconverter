<template>
  <div class="text-center my-7 text-2xl min-h-[26.256px]"> 
    <span  v-html="props.text ?? 'WTF'"></span> <span  v-if="(props.text ?? '').length > 0" 
      :style="{'mask': 'url(\'./copy-icon.svg\') no-repeat center', '-webkit-mask': 'url(\'./copy-icon.svg\') no-repeat center'}"
      class="ml-1 hover:cursor-pointer w-6 h-6 hover:scale-110 transition-all  bg-black  inline-flex align-middle" :class="{'animate-gelatine': bounce}" @click="copyText"> </span>
  </div>
</template>
<style>


</style>

<script setup lang="ts">

import { ref } from "vue";
const props = defineProps({
  text: String,
})

const bounce = ref(false)
async function copyText() {
  navigator.clipboard.writeText(props.text?.replace(new RegExp("<br>", 'g'), "\n") ?? "");

  bounce.value = false
  await new Promise(resolve => setTimeout(resolve, 1))

  
  bounce.value = true
}
</script>
