import { OgImage } from '../.nuxt/components';
<script setup>
useSeoMeta({
  title:'portfolio',
  ogTitle: 'portfolio | benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
  description: "Benjamin Goodheart's Professional Development Portfolio",
  ogDescription: "Benjamin Goodheart's Professional Development Portfolio",
  twitterCard:'https://benjamin.goodheart.dev/ogcard.png'
})</script>
<template>
    <UContainer class="mb-5">
    <PortfolioComponent/>
</UContainer>
</template>
<style>
</style>