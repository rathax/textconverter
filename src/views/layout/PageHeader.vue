
<template>
  <div class="">
    <div class="px-16 max-w-[1728px] m-auto h-16">
      <div> </div>
      <div class="flex divide-x justify-between sm:justify-end py-3 items-center h-full font-semibold" >
        <div class="px-3">
          <RouterLink to="/" rel="alternate" hreflang="en">EN</RouterLink>
        </div>
        <div class="px-3">
          <RouterLink to="/fr"  rel="alternate" hreflang="fr">FR</RouterLink>
        </div>
        <div class="px-3 ">
          <RouterLink :to="'/de'"  rel="alternate" hreflang="de">DE</RouterLink>
        </div>
        <div class="px-3 ">
          <RouterLink :to="'/es'" rel="alternate" hreflang="es">ES</RouterLink>
        </div>
        <div class="px-3 ">
          <RouterLink :to="'/zh-CN'"  rel="alternate" hreflang="zh-CN">CN</RouterLink>
        </div>
        <div class="px-3 ">
          <a href="https://github.com/rathax/textconverter" target="_blank" aria-label="Visit Text Converter on Github"><GithubIcon class="h-[22px] w-[22px]" /></a>
        </div>
      </div>
    </div>


  </div>
</template>
  
<script setup lang="ts">
import GithubIcon from "@/assets/github-mark.svg?component"


</script>
  