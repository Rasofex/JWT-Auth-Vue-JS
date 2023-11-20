<template>
  <div class="w-full fixed top-0 z-50 hidden md:block">
    <div class="w-full bg-white dark:bg-zinc-800 shadow-lg px-4 py-2 flex items-center justify-between h-14">
      <div
        class="container mx-auto flex flex-row"
      >
        <div class="w-1/2 flex items-center">
          <h1
            class="text-xl font-bold text-zinc-800 dark:text-zinc-200 cursor-pointer"
            @click="$router.push({ name: 'home' })"
          >
            My App
          </h1>
        </div>
        <div class="w-1/2 flex justify-end">
          <button class="flex items-center text-zinc-800 dark:text-zinc-200 font-bold rounded-md bg-white dark:bg-zinc-700 px-4 py-2"
          @click="authStore.signout()">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
</script>
