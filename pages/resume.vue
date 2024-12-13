<script setup>
import {useTemplateRef, onMounted, watch} from 'vue'
const resumeRef = useTemplateRef('resume')
onMounted(()=>{
    resumeRef.value.focus()
})
useSeoMeta({
  title:'résumé',
  ogTitle: 'benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: "Benjamin Goodheart's résumé",
  ogDescription: "Benjamin Goodheart's résumé",
  twitterCard:'https://benjamin.goodheart.dev/ogcard.png'
})
</script>
<template>
<UContainer class="text-center">
    <div class="grid grid-cols-3">
      <div></div>
      <subtitle class="text-sm mb-4">If you're on Chrome on Mobile, the embedded résumé won't load. You download my résumé by <a class="hover:text-emerald-300" href="/resume-dec2024.pdf" download id="resume-dl" style="text-decoration: dotted underline;">clicking here.</a></subtitle>
      <div></div>
    </div>
    <embed src="resume-dec2024.pdf" width="80%" height="900vh" class="mx-auto my-resume" ref="resume"/>
</UContainer>
</template>
