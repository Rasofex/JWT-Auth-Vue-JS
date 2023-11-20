<template>
  <div class="flex justify-center mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="w-full bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center justify-center">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-zinc-800 dark:text-zinc-200">404</h1>
        <p class="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Page not found</p>
      </div>
      <div class="text-center">
        <router-link to="/" class="animate-pulse text-3xl font-bold text-zinc-800 dark:text-zinc-200 hover:underline dark:hover:text-white"
          >Go Home</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
