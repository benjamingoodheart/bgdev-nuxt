<script setup>
const {data} = await useAsyncData('about', () => queryContent('/about').findOne())
</script>
<template>
<UContainer>
    <UCard class="mx-auto min-w-2 md:max-w-lg sm:max-w-80">
    <ContentDoc>
    <template v-slot="{doc}">
        <h1 class="text-xl">{{doc.title }}</h1>
    </template>
</ContentDoc>
<ContentRendererMarkdown :value="data" class="text-sm"></ContentRendererMarkdown>
</UCard>
</UContainer>
</template>
<style>
.link-class:hover{
  color: #6ee7b7 !important;
}
</style>