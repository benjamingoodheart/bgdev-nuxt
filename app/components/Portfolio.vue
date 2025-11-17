import { UContainer } from '../../.nuxt/content/components';
<script setup lang="js">
const items = [
{
    slot: 'data',
    label: 'River of Babel',
    desc: 'A web app that translates one music streaming source to another.',
    stack: ["Nuxt.js", "Vue", "Tailwind CSS", "Apple Music API", "Spotify API", "Vercel"],
    icons: ['mingcute:music-line', 'mingcute:transformation-line','mingcute:link-2-line'],
    directLink: 'https://www.riverofbabel.app'
},
{
    slot: 'data',
    label: 'My Portfolio Website',
    desc: 'I wanted to showcase my past work and at the same time learn a new framework (Nuxt). You are on the current production deployment right now!',
    stack: ['Nuxt.js', 'Vue', 'AWS Amplify', 'Tailwind CSS'],
    icons: ['mingcute:code-line', 'carbon:portfolio', 'mingcute:layout-5-line'],
    link: 'https://github.com/benjamingoodheart/bgdev-nuxt/'
},
{
    slot:'data',
    label: 'Mystic Seer',
    desc: "A CLI app inspired by The Twilight Zone episode 'The Nick of Time'. Ask a yes or no question and find out your fortune. Implemented in Rust to learn more about the language. v0.2.0 released on 03/30/25 with colorized output!",
    stack: ["Rust"],
    demo:'/demos/mystic-seer.webp',
    icons:['mdi:star-four-points-outline','mingcute:crystal-ball-line', "mingcute:ticket-line"],
    link: 'https://github.com/benjamingoodheart/mystic-seer'
},{
    slot: 'data',
    label: 'PDF Xtractor',
    desc: 'CLI utility to easy extract pdf tables contained within.',
    stack: ['Python', 'pdfplumber', 'pandas'],
    icons: ['material-symbols:picture-as-pdf-outline', 'svg-spinners:3-dots-fade', 'pixelarticons:table'],
    link: 'https://github.com/benjamingoodheart/xtractor',
    demo: '/demos/xtractor.webp'
},
{
    slot: 'data',
    label: '.csv->db Daemon',
    desc: 'A client wanted to simulate drafting fantasy athletes using pre-existing data and a database, putting one row from the csv into the corresponding table once a day for a year. I wrote a script that achieved this. ',
    stack: ['Python', 'Pandas', 'numpy'],
    demo: '/demos/csvdaemon.webp',
    icons: ['material-symbols:csv-outline-sharp', 'material-symbols:line-end-arrow-outline-rounded', 'material-symbols:database-outline'],
    link: 'https://github.com/benjamingoodheart/stats-thru-year-sim'
},]
</script>
<template>
    <UTabs :items="items">
        <template #data="{ item }">
            <UCard>
                <template #header>
                    <h1 class="text-xl">{{ item.label }}</h1>
                </template>
                <div class="bg-primary-400 dark:bg-slate-700 text-center min-h-10">
                    <span v-for="icon in item.icons">
                        <Icon :name="icon" class="mt-3 mx-1" />
                    </span>
                </div>
                <USeparator class="my-4" />
                <div>
                    <h1 class="text-xl my-2">Description:</h1>
                    <p>{{ item.desc }}</p>
                    <h1 class="text-xl my-2">
                        Stack: </h1>
                    <ul>
                        <li v-for="s in item.stack">
                            <Icon name="pixelarticons:label-sharp" class="my-auto mx-2" size=".8em" />{{ s }}
                        </li>
                    </ul>
                    <div v-if="item.demo">
                    <h1 class="text-xl my-2">Demo:</h1>
                        <img alt='Demo .gif' :src="item.demo" style="box-shadow: .1vw .1vh .1vw;"
                            class="mx-auto my-3 rounded-xl md:object-cover sm:min-w-full sm:min-h-full" loading="lazy" ></img>
                    </div>
                    <div v-if="item.link" class="text-center">
                        <UButton size="xs" icon="mingcute:github-line"
                            class="git-btn dark:bg-slate-500 hover:dark:bg-slate-700 dark:text-white" :to="item.link"
                            target="_blank">
                            View On Github</UButton>
                    </div>
                    <div v-if="item.directLink" class="text-center">
                        <UButton size="xs" icon="carbon:application-web"
                            class="git-btn dark:bg-slate-500 hover:dark:bg-slate-700 dark:text-white" :to="item.directLink"
                            target="_blank">
                            Visit {{ item.label }}</UButton>
                    </div>
                </div>
            </UCard>
        </template>
    </UTabs>
</template>
