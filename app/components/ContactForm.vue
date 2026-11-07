<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'


const state = reactive({
  email: undefined,
  name: undefined,
  message: undefined
})

type Schema = typeof state

const regex = /.*@.*\..*/

function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.email || state.email.search(regex)==-1)  errors.push({ name: 'email', message: 'Please enter a valid email address' })
  if (!state.name) errors.push({name: 'name', message:'Required'})
  if (!state.message) errors.push({name: 'message', message:'Required'})
  return errors
}
const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
    const { body } = await $fetch('/api/contact', {
    method: 'post',
    body: { email: state.email, name: state.name, message:state.message },
    })
  toast.add({ title: 'Success', description: 'The form has been submitted. Benjamin will get back to you ASAP', color: 'success' })
  state.email = ''
  state.name = ''
  state.message = ''
}
</script>
<template>
  <UContainer class="grid grid-cols-5">
    <div class="md:col-span-1 invisible"></div>
    <UCard class="md:col-span-3 col-span-5">
      <div class="mb-5">
         <h1 class="text-xl text-center my-2"><i>contact</i></h1>
        <p class="text-md mb-2"> Would you like to work together? I am available for small to medium scale freelance programming projects. If you want boutique, well thought-out, and human written code hit me up! Let's discuss your project and we can go from there. </p>
        <p class="text-md">
          Work-inquiry or otherwise, you can find me on
          <UButton
            to="https://github.com/benjamingoodheart"
            size="xs"
            variant="outline"
            icon="mingcute:github-line"
            target="_blank"
            class="mx-1"
            >Github</UButton
          >
          and
          <UButton
            to="https://www.linkedin.com/in/bengoodheart/"
            class="hover:text-primary-300 mr-1 mx-1"
            variant="outline"
            size="xs"
            icon="tabler:brand-linkedin"
            target="_blank"
            >LinkedIn</UButton
          >. You can also reach out via the contact form below!
        </p>
      </div>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="Email" name="email" class="my-3">
          <UInput v-model="state.email" class="w-full" placeholder='example@domain.com'/>
        </UFormField>
        <UFormField label="Name" name="name" class="my-3">
          <UInput v-model="state.name" class="w-full" placeholder='FirstName LastName'/>
        </UFormField>
        <UFormField label="Message" name="message" class="my-3">
          <UTextarea v-model="state.message" class="w-full" placeholder="What's on your mind?"/>
        </UFormField>
        <UButton type="submit" class="my-auto"> Submit </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
