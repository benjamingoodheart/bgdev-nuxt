<script setup lang="ts">
import * as z from 'zod'
import type {FormSubmitEvent} from '@nuxt/ui'


const schema = z.object({
    email: z.email('Invalid email'),
    name: z.string('Put your name!'),
    message: z.string('Put a message!')
})

type Scheme = z.output<typeof schema>
const state = reactive<Partial<Schema>>({
    email:undefined,
    name: undefined,
    message: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>){
    toast.add({title:'Success', description: 'The form has been submitted', color: 'success'})
    console.log(event.data)
}
</script>
<template>
  <UContainer class="grid grid-cols-3">
    <div class="col-span-1"></div>
    <UCard>
    <div class="mb-5">
    <p class="text-sm">You can find me on <UButton to="https://github.com/benjamingoodheart" size="xs"
            variant="outline" icon="mingcute:github-line" target="_blank">Github</UButton> and <UButton
            to="https://www.linkedin.com/in/bengoodheart/" class="hover:text-primary-300 mr-1" variant="outline"
            size="xs" icon="tabler:brand-linkedin" target="_blank">LinkedIn</UButton>. You can also reach out via the contact form below! </p>
    </div>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <UFormField label="Email" name="Email" class="my-3">
        <UInput v-model="state.email" class="w-full" />
      </UFormField>
            <UFormField label="Name" name="Name" class="my-3">
        <UInput v-model="state.name" class="w-full"/>
      </UFormField>
      <UFormField label="Message" name="Message" class="my-3">
        <UTextarea v-model="state.message" class="w-full" />
      </UFormField>
          <UButton type="submit">
      Submit
    </UButton>
    </UForm>
    </UCard>
  </UContainer>
</template>
