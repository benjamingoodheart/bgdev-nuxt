<script setup lang="ts">
const {data} = await useAsyncData('currently', () => queryContent('/currently').findOne())
useSeoMeta({
  title:'currently...',
  ogTitle: 'benjamin goodheart development'
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