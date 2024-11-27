<script setup>
import {useTemplateRef, onMounted, watch} from 'vue'
const resumeRef = useTemplateRef('resume')
onMounted(()=>{
    resumeRef.value.focus()
})
</script>
<template>
<UContainer>
 
    <embed  src="resume-nov2024.pdf" width="80%" height="900vh" class="mx-auto my-resume" ref="resume"/>
</UContainer>
</template>