<script setup>
useSeoMeta({
  title: 'contact',
  ogTitle: 'benjamin goodheart development',
  ogImage: 'https://benjamin.goodheart.dev/ogcard.png',
})
const submitted = ref(false)
const handleClick = () => {
  submitted.value = true
}
</script>
<template>
  <UContainer class="grid">
    <div class="grid md:grid-cols-4">
      <div></div>
      <UCard class="col-span-2">
        <p class="text-lg">You can find me on <UButton href="https://github.com/benjamingoodheart" size="xs"
            variant="outline" icon="mingcute:github-line" target="_blank">Github</UButton> and <UButton
            href="https://www.linkedin.com/in/bengoodheart/" class="hover:text-primary-300 mr-1" variant="outline"
            size="xs" icon="tabler:brand-linkedin" target="_blank">LinkedIn</UButton>.</p>

        <div class="container" v-if="!submitted">
          <p>You can also send me a message using the form below:</p>

          <form action="https://formspree.io/f/mbljzgea" method="POST" target="_blank"
            class="border-2 rounded-xl p-2 my-5 shadow-md">
            <div class="grid grid-cols-4 space-y-2 m-2">

              <label class="col-span-2">
                Your email:
              </label>
              <input class="col-span-2 border-2 rounded-md shadow-sm" type="email" name="email">
              <label class="col-span-2">
                Your message:
              </label>
              <textarea name="message" class="col-span-2 border-2 rounded-md shadow-sm"></textarea>
            </div>

            <div class="text-center">
              <UButton type="submit" @click="handleClick" class="dark:bg-slate-500 dark:hover:bg-slate-400">Send
              </UButton>

            </div>
          </form>
        </div>
        <div v-if="submitted" class="bg-green-200 rounded-xl p-2 shadow-xl mt-5">
          Thanks! I got your message and will reach out to you asap.
        </div>
      </UCard>

    </div>
  </UContainer>

</template>