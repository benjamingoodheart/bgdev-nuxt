<script setup>
const items = [{
    slot: 'data',
    label: 'Project #1',
    desc: 'lorem ipsum whatever',
    stack: ['Vue.js', 'node.js'],
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
                <UDivider class="my-4"/>
                <div>
                    <h1 class="text-xl my-2">Description</h1>
                    <p>{{ item.desc }}</p>

                    <h1 class="text-xl my-2">
                        Stack: </h1>
                        <ul>
                            <li v-for="s in item.stack"><Icon name="ant-design:caret-right-filled" />{{ s }}</li>
                        </ul>
                    <h1 class="text-xl my-2">Demo</h1>
                </div>
            </UCard>
        </template>
    </UTabs>
</template>