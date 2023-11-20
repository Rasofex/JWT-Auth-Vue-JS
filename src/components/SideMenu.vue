<template>
  <div
    class="fixed bottom-0 left-0 w-full md:relative xl:w-[220px] md:w-min bg-white dark:bg-zinc-800 rounded-t-2xl md:rounded-2xl"
  >
    <div class="md:py-4 py-2 text-zinc-500 dark:text-zinc-400">
      <ul class="mt-2 md:mt-0 flex md:flex-col justify-evenly md:justify-start">
        <li class="relative">
          <button
            class="px-6 py-2 md:py-3 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-zinc-800 dark:hover:text-zinc-200"
            @click="$router.push(`/user/${username}`)"
          >
            <Icon size="24">
              <Person32Regular />
            </Icon>
            <span class="ml-4 hidden lg:block">Профиль</span>
          </button>
        </li>
        <li class="relative">
          <button
            class="px-6 py-2 md:py-3 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-zinc-800 dark:hover:text-zinc-200"
            @click="$router.push('/')"
          >
            <Icon size="24">
              <Home32Regular />
            </Icon>
            <span class="ml-4 hidden lg:block">Новости</span>
          </button>
        </li>
        <li class="relative">
          <button
            class="px-6 py-2 md:py-3 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-zinc-800 dark:hover:text-zinc-200"
            @click="$router.push('/settings')"
          >
            <Icon size="24">
              <Settings32Regular />
            </Icon>
            <span class="ml-4 hidden lg:block">Настройки</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Person32Regular, Home32Regular, Settings32Regular } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
const username = localStorage.getItem('username')
</script>

<style scoped lang="scss"></style>
