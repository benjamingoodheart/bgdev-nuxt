<script setup>
import { useMediaQuery, useElementVisibility } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 780px)')
const links = [{ label: 'portfolio', to: '/' }, { label: 'currently', to: '/currently' }, {label: 'about', to: '/about'}, { label: 'contact', to: 'contact' }]
const dropdownItems = [[
    { label: 'portfolio', to: '/' }, { label: 'currently', to: '/currently' }, {label: 'about', to: '/about'}, { label: 'contact', to: '/contact' }
]]
const ddTarget = ref(null)
const eeTarget = ref(null)
</script>
<template>
    <UContainer>
        <div
            class="grid md:grid-cols-12 sm:grid-cols-6 border-2 border-primary-500 dark:border-0 dark:bg-gray-500 rounded-xl my-5 py-2 px-2">
            <div class="text-green-200 my-auto col-span-2 sm:col-span-1">
                <UAvatar alt="avatar" size="md" src="/avatar.webp" class="shadow-md pfp dark:grayscale dark:brightness-125"
                    v-if="isLargeScreen === true"></UAvatar>
            </div>
            <div class="my-auto md:col-span-4 sm:col-span-2">
                <UButton variant="link" class="dark:text-gray-100 hover:dark:text-blue-200" to="/"><span
                        class="font-mono md:text-xl sm:text-xs">benjamin.goodheart.dev</span></UButton>
            </div>
            <div class="justify-self-end col-span-6" v-if="isLargeScreen === true" ref="ddTarget">
                <UHorizontalNavigation :links="links" class="font-mono"></UHorizontalNavigation>
            </div>
            <div class="md:invisible sm:col-span-2 justify-self-end" v-if="isLargeScreen === false" ref="eeTarget">
                <UDropdown :items="dropdownItems">
                    <UButton icon="ic:outline-menu" class="dark:bg-slate-400 dark:hover:bg-slate-50"></UButton>
                </UDropdown>
            </div>
        </div>
    </UContainer>
</template>
<style scoped>
.pfp {
    transition: transform 250ms ease-in-out;
}

.pfp:hover {
    transform: scale(2);
    transition: transform 250ms ease-in-out;
}
</style>