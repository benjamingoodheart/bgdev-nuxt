<script setup lang="ts">
import {useMediaQuery} from '@vueuse/core'
const isLargeScreen = computed(async()=>await useMediaQuery('(min-width: 1024px)'))
const links = [{label: 'portfolio', to:'/'}, {label: 'resume', to:'/resume'}, {label:'currently', to:'/currently'}, {label:'contact', to:'contact'}]
const dropdownItems = [[
{label: 'portfolio', to:'/'}, {label: 'resume', to:'/resume'}, {label:'currently', to:'/currently'}, {label:'contact', to:'/contact'}
]]


</script>
<template>
    <UContainer>
    <div class="grid grid-cols-6 md:grid-cols-6 border-2 border-primary-500 dark:border-0 dark:bg-gray-500 rounded-xl my-5 py-2 px-2">
        <div class="text-green-200">    
            <UAvatar size="md" src="/avatar.jpg" class="shadow-md"></UAvatar>
        </div>
        <div class="my-auto col-span-4">
           <UButton  variant="link" class="dark:text-gray-100 hover:dark:text-blue-200" to="/"><h1 class="text-xl">benjamin.goodheart.dev</h1></UButton>
        </div>
        <div class="justify-self-end">
            <UHorizontalNavigation :links="links" v-if="isLargeScreen"></UHorizontalNavigation>
            <UDropdown v-if="!isLargeScreen" :items="dropdownItems">
                <UButton icon="ic:outline-menu" ></UButton>
            </UDropdown>
        </div>
    </div>
</UContainer>
</template>