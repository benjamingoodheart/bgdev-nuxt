import { UAvatar, USkeleton, UHorizontalNavigation, UDropdown } from '../.nuxt/components';
<script setup lang="ts">
import {useBreakpoints, breakpointsTailwind} from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanSm = breakpoints.greater('sm')
const links = [{label: 'home'}, {label: 'resume'}]
const dropdownItems = [[
    {label: 'home'},{label:'resume'}
]]
</script>
<template>
    <UContainer>
    <div class="grid grid-cols-6 md:grid-cols-4 border-2 border-primary-500 dark:border-0 dark:bg-gray-500 rounded-xl my-5 py-2 px-2">
        <div class="text-green-200">    
            <USkeleton class="md:h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
            <USkeleton class="h-8 w-8" v-if="!largerThanSm"/>
        </div>
        <div class="my-auto col-span-4">
           <h1 class="text-xl">benjamin.goodheart.dev</h1>
        </div>
        <div class="justify-self-end">
            <UHorizontalNavigation :links="links" v-if="largerThanSm"></UHorizontalNavigation>
            <UDropdown v-if="!largerThanSm" :items="dropdownItems">
                <UButton icon="ic:outline-menu" ></UButton>
            </UDropdown>
        </div>
    </div>
</UContainer>
</template>