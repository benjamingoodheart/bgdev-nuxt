import { OgImage } from '../.nuxt/components';
<script setup>
useSeoMeta({
  title:'portfolio',
  ogTitle: 'portfolio | benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: "Benjamin Goodheart's professional development portfolio",
  ogDescription: "Benjamin Goodheart's professional development portfolio",
  twitterCard:'summary_large_image',
})</script>
<template>
    <UContainer class="mb-5">
    <PortfolioComponent/>
</UContainer>
</template>
<style>
</style>