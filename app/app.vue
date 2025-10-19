<script setup lang="js">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'home | bgd'
const description = 'Benjamin Goodheart\'s Development Portfolio'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogUrl: 'https://benjamin.goodheart.dev',
  ogDescription: description,
  ogTitle: 'currently | benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  twitterImage: 'https://benjamin.goodheart.dev/ogcard.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
   

    <UMain>
      <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
  
    </UMain>


  </UApp>
</template>
