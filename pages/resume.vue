<script setup>
import {useTemplateRef, onMounted, watch} from 'vue'

useSeoMeta({
  title:'résumé',
  ogTitle: 'benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: "Benjamin Goodheart's résumé",
  ogDescription: "Benjamin Goodheart's résumé",
  twitterCard:'summary_large_image',
})
</script>
<template>
<UContainer class="text-center">
    <div class="grid grid-cols-3">
      <div></div>
      <p class="text-md mb-4">Please download my résumé by <a class="hover:text-emerald-300" href="/resume_2025.pdf" download id="resume-dl" style="text-decoration: dotted underline;">clicking here.</a></p>
      <div></div>
    </div>
  </UContainer>
</template>
