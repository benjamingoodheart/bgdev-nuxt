import { OgImage } from '../.nuxt/components';
<script setup>
useSeoMeta({
  title:'portfolio',
  ogTitle: 'benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png'
})</script>
<template>
    <UContainer class="mb-5">
    <PortfolioComponent/>
</UContainer>
</template>
<style>
</style>