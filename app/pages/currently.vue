<script setup lang="js">
const { data: currently } = await useAsyncData(() => queryCollection('content').path('/currently').first())

useSeoMeta({
  title:'currently | bgd',
  ogTitle: currently.title,
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: currently.description,
  ogDescription: currently.description,
  twitterCard:'summary_large_image'
})
</script>
<template>
<UContainer>
    <UCard class="mx-auto min-w-2 md:max-w-fit sm:max-w-80">
      <h1 class="text-xl text-center my-2"><i>{{currently.title}}</i></h1>
      <subtitle class="text-xs">{{currently.description}}</subtitle>
    <ContentRenderer v-if="currently" :value="currently" />
  <div v-else>Currently not found</div>
</UCard>
</UContainer>

</template>
<style>
.link-class{
  text-decoration-color: #a7f3d0 !important; 
  text-decoration: underline dotted;
}
.link-class:hover{
  color: #6ee7b7 !important;
  text-decoration: underline dotted;
  text-decoration-thickness: 2px !important;
  text-decoration-color: #6ee7b7 !important;
}
</style>