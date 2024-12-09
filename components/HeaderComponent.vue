<script setup lang="ts">
import {useMediaQuery} from '@vueuse/core'
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const links = [{label: 'portfolio', to:'/'}, {label: 'résumé', to:'/resume'}, {label:'currently', to:'/currently'}, {label:'contact', to:'contact'}]
const dropdownItems = [[
{label: 'portfolio', to:'/'}, {label: 'résumé', to:'/resume'}, {label:'currently', to:'/currently'}, {label:'contact', to:'/contact'}
]]


</script>
<template>
    <UContainer>
    <div class="grid md:grid-cols-12 sm:grid-cols-6 border-2 border-primary-500 dark:border-0 dark:bg-gray-500 rounded-xl my-5 py-2 px-2">
        <div class="text-green-200 my-auto">    
            <UAvatar size="md" src="/avatar.jpg" class="shadow-md pfp dark:grayscale dark:brightness-125"></UAvatar>
        </div>
        <div class="my-auto md:col-span-4 sm:col-span-1">
           <UButton variant = "link" class="dark:text-gray-100 hover:dark:text-blue-200" to="/"><span class="md:text-xl sm:text-sm">benjamin.goodheart.dev</span></UButton>
        </div>
        <div class="justify-self-end col-span-6" v-if="isLargeScreen===true">
            <UHorizontalNavigation :links="links" ></UHorizontalNavigation>
            </div>
            <div class="col-span-3 justify-self-end " v-if="isLargeScreen===false">
            <UDropdown :items="dropdownItems" >
                <UButton icon="ic:outline-menu" class="dark:bg-slate-400 dark:hover:bg-slate-50" ></UButton>
            </UDropdown>
        </div>
    </div>
</UContainer>
</template>
<style scoped>
.pfp{
    transition: transform 250ms ease-in-out;
}
.pfp:hover{
    transform: scale(2);
    transition: transform 250ms ease-in-out;
}
</style>