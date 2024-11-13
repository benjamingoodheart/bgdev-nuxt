<script lang="ts">
</script>
<template>

    <ContentDoc v-slot="{ doc }">
        <p v-for="d in doc.body">
           {{  d }}
        </p>
        </ContentDoc>
</template>