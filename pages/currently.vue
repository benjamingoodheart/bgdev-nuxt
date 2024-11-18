<script setup lang="ts">
const {data} = await useAsyncData('currently', () => queryContent('/currently').findOne())
console.log(data)
</script>
<template>
<UContainer>
    <UCard class="mx-auto" style="width: 50vw;">
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