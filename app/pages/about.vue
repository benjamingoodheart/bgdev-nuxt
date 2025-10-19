<script setup lang="ts">
const { data: about } = await useAsyncData(() => queryCollection('content').path('/about').first())
useSeoMeta({
  title:'about | bgd',
  ogTitle: about.title,
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: about.description,
  ogDescription: about.description,
  twitterCard:'summary_large_image'
})
</script>

<template>
  <UContainer>
  <UCard class="mx-auto md:max-w-3xl sm:max-w-fit">
          <h1 class="text-xl text-center my-2"><i>{{about.title}}</i></h1>
  <ContentRenderer v-if="about" :value="about" />
  <div v-else>About Not Found</div>
  </UCard>
  </UContainer>
</template>