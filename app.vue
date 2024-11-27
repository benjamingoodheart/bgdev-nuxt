<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | bgd` : 'bgd';
  }
})
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<style>

</style>