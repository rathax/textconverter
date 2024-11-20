<template>
  <div class="flex min-h-screen flex-col">
    <header class="">
      <div class="px-16 max-w-[1728px] m-auto h-16">
        <div class="flex divide-x justify-between sm:justify-end py-3 items-center h-full font-semibold">
          <div class="px-3">
            <RouterLink to="/" rel="alternate" hreflang="en">EN</RouterLink>
          </div>
          <div class="px-3">
            <RouterLink to="/fr" rel="alternate" hreflang="fr">FR</RouterLink>
          </div>
          <div class="px-3 ">
            <RouterLink :to="'/de'" rel="alternate" hreflang="de">DE</RouterLink>
          </div>
          <div class="px-3 ">
            <RouterLink :to="'/es'" rel="alternate" hreflang="es">ES</RouterLink>
          </div>
          <div class="px-3 ">
            <RouterLink :to="'/zh-CN'" rel="alternate" hreflang="zh-CN">CN</RouterLink>
          </div>
          <!--        <div class="px-3 ">
          <a href="https://github.com/rathax/textconverter" target="_blank" aria-label="Visit Text Converter on Github"><GithubIcon class="h-[22px] w-[22px]" /></a>
        </div>-->
        </div>
      </div>
    </header>
    <div>
      <div align="center" id="ad-slot" style="min-height: 280px;">
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7920782567845375" data-ad-slot="1375391614"
          data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>
    </div>
    <main class="flex-1">

      <NuxtPage />
    </main>
    <footer class="p-10 m-0  mt-10 sm:px-20 bg-surface-card border-t border-surface-border text-center h3">
      <nuxt-link to="/about" class="my-3 block">
        About
      </nuxt-link>
      <nuxt-link to="/privacy" class="my-3 block">
        Privacy Policy
      </nuxt-link>
      <nuxt-link to="/contact" class="my-3 block">
        Contact
      </nuxt-link>
      <a href="https://github.com/rathax/textconverter" class="my-3 block" target="_blank" rel="nofollow">
        GitHub
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, nextTick } from "vue";
const route = useRoute()
const routepath = computed(() => "https://www.textconverter.net" + (route?.path === '/' ? "" : route?.path) || "")

if (import.meta.browser) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

if (import.meta.server) {
  const event = useRequestEvent()
  if(event) {
    setResponseStatus(event, 404)
  }
}


watch([routepath], () => {
  useHead({
    script: [{ src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7920782567845375", async: true, crossorigin: "anonymous" }],
    link: [{ rel: "canonical", href: routepath }]
  })
}, { immediate: true })

onMounted(() => {
  nextTick().then(() => {
    try {
         // @ts-expect-error
         (window.adsbygoogle = window.adsbygoogle || []).push({});
          // @ts-expect-error
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error)
    }

  })
})


</script>

<style>
@media screen and (max-width: 960px) {
  #ad-slot {
    min-height: 345px;
  }
}

.text-h3 {
  @apply mt-5 mb-3 text-xl font-bold
}
</style>