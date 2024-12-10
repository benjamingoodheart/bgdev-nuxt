<script setup>
import {useTemplateRef, onMounted, watch} from 'vue'
const resumeRef:Ref<string> = useTemplateRef('resume')
onMounted(()=>{
    resumeRef.value.focus()
})
useSeoMeta({
  title:'résumé',
  ogTitle: 'benjamin goodheart development'
})
</script>
<template>
<UContainer>
    <embed src="resume-dec2024.pdf" width="80%" height="900vh" class="mx-auto my-resume" ref="resume"/>
</UContainer>
</template>