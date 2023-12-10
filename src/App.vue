
<template>
  <PageHeader />
  <div class="p-5 ">
    <RouterView></RouterView>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "./views/layout/PageHeader.vue";
import { useHead,  } from "@unhead/vue";
const { t } = useI18n();




useHead({
  meta: [
      {
        name: 'description',
        content: `${t('title')} ${t('subTitle')}`.replace(new RegExp("<br>", 'g'), " "),
      },
    ],
})



</script>

<style>

</style>