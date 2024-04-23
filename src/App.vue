
<template>
  <PageHeader />
  <div class="p-5 ">
    <RouterView></RouterView>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "./views/layout/PageHeader.vue";
import { useHead, } from "@unhead/vue";
import { useRoute, } from "vue-router"
import { computed, watch } from "vue";
const { locale, t } = useI18n();
const route = useRoute()
const routepath = computed(() => "https://www.textconverter.net" + (route?.path === '/' ? "" : route?.path) || "")

watch([routepath,locale], () => {
  useHead({
    meta: [
      {
        name: 'description',
        content: `AD-FREE ${t('title')}`.replace(new RegExp(" <br> ", 'g'), ""),
      },
    ],
    link: [{ rel: "canonical", href: routepath }],
    htmlAttrs: { lang: locale },
  })
}, {immediate: true})

</script>

<style></style>