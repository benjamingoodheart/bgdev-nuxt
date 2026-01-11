<script setup lang="js">
useSeoMeta({
  title: 'contact | bgd',
  ogTitle: 'contact | benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: "Contact Benjamin",
  ogDescription: "Contact Benjamin",
  twitterCard:'summary_large_image'
})
const submitted = ref(false)

</script>
<template>
  <UContainer class="grid">
   <ContactForm/>
  </UContainer>
</template>