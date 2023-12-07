
<template>
  <div class="">
    <div class="px-16 max-w-[1728px] m-auto h-16">
      <div> </div>
      <div class="flex divide-x justify-end py-3 items-center h-full font-semibold" >
        <div class="px-3">
          <RouterLink to="/">EN</RouterLink>
        </div>
        <div class="px-3">
          <RouterLink to="/fr">FR</RouterLink>
        </div>
        <div class="px-3 ">
          <RouterLink :to="'/de'">DE</RouterLink>
        </div>
        <div class="px-3 ">
          <RouterLink :to="'/es'">ES</RouterLink>
        </div>
        <div class="px-3 ">
          <RouterLink :to="'/cn'">CN</RouterLink>
        </div>
      </div>
    </div>


  </div>
</template>
  
<script setup lang="ts">
</script>
  