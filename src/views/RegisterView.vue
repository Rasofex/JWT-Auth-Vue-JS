<template>
  <div class="flex h-full">
    <div class="w-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
      <div class="max-w-md w-full">
        <h1 class="text-3xl font-bold mb-6 text-black text-center dark:text-white">Sign Up</h1>
        <h1 class="text-sm font-semibold mb-6 text-zinc-500 text-center dark:text-zinc-400">
          Join to Our Community with all time access and free
        </h1>
        <p class="text-red-500 dark:text-red-400 mb-6" v-bind="{ error }" v-if="error">
          {{ error }}
        </p>
        <form class="space-y-4" @submit.prevent="signup">
          <div>
            <label class="block text-sm font-medium text-zinc-700 dark:text-white" for="username"
              >Username</label
            >
            <input
              id="username"
              class="mt-1 p-2 w-full border border-zinc-500 rounded-md focus:border-zinc-200 focus:outline-none transition-colors duration-300 dark:bg-zinc-800 dark:text-white"
              name="username"
              type="text"
              v-model="username"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-zinc-700 dark:text-white" for="email"
              >Email</label
            >
            <input
              id="email"
              class="mt-1 p-2 w-full border border-zinc-500 rounded-md focus:border-zinc-200 focus:outline-none transition-colors duration-300 dark:bg-zinc-800 dark:text-white"
              name="email"
              type="text"
              v-model="email"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-zinc-700 dark:text-white" for="password"
              >Password</label
            >
            <input
              id="password"
              class="mt-1 p-2 w-full border border-zinc-500 rounded-md focus:border-zinc-200 focus:outline-none transition-colors duration-300 dark:bg-zinc-800 dark:text-white"
              name="password"
              type="password"
              v-model="password"
            />
          </div>
          <div>
            <button
              class="w-full bg-black text-white p-2 rounded-md hover:bg-zinc-800 focus:bg-black outline-none transition-colors duration-300 dark:bg-zinc-800 dark:hover:bg-zinc-100 dark:hover:text-black font-bold"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div class="mt-4 text-sm text-zinc-600 text-center dark:text-zinc-400 font-semibold">
          <p>
            Already have an account?
            <span
              class="text-black hover:underline cursor-pointer dark:text-white font-semibold"
              @click="$router.push('/signin')"
              >Login here</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore()

const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const signup = async () => {
  error.value = ''
  authStore.errors = ''
  await authStore.signup(username.value, email.value, password.value)
  if (authStore.errors) {
    error.value = authStore.errors
  } else {
    router.push({ path: '/signin' })
  }
}
</script>

<style scoped></style>
