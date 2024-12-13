<script setup>
const {data} = await useAsyncData('currently', () => queryContent('/currently').findOne())
useSeoMeta({
  title:'currently...',
  ogTitle: 'currently | benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: "What is Benjamin currently up to?",
  ogDescription: "What is Benjamin currently up to?",
  twitterCard:'https://benjamin.goodheart.dev/ogcard.png'
})
</script>
<template>
<UContainer>
    <UCard class="mx-auto min-w-2 md:max-w-fit sm:max-w-80">
    <ContentDoc>
    <template v-slot="{doc}">
        <h1 class="text-xl">{{doc.title }}</h1>
    </template>
</ContentDoc>
<ContentRendererMarkdown :value="data"></ContentRendererMarkdown>
</UCard>
</UContainer>

</template>
<style>

</style>