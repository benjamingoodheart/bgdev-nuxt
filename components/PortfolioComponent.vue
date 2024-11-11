<script setup>
const items = [{
    slot: 'data',
    label: 'Project #1',
}, {
    slot:'data',
    label: 'Project #2',
}]
</script>
<template>
    <UTabs :items="items">
        <template #data="{item}">
            <UCard>
                <template #header>
                    <h1 class="text-xl">{{ item.label }}</h1>
                </template>
                <div class="min-h-20 bg-primary-400 text-center">
                    <h1 class="text-white">IMAGE</h1>
                </div>
                <UDivider icon="hugeicons:arrow-down-double" class="my-4"/>
                <div>

                </div>
            </UCard>
        </template>
    </UTabs>
</template>