<template>
  <!-- Компонент LoginModal принимает один пропс: onClose -->
  <!-- onClose - это функция, которая вызывается при закрытии модального окна -->
  <div class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Вход / Регистрация</h2>
        <button
          class="rounded-full text-zinc-400 hover:text-black dark:hover:text-white"
          @click="onClose()"
        >
          <Icon size="24">
            <CloseFilled />
          </Icon>
        </button>
      </div>
      <form @submit.prevent="submit">
        <div class="flex flex-col mb-4">
          <label class="text-zinc-600 dark:text-zinc-400 mb-2" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            class="border border-zinc-300 dark:border-zinc-700 rounded-md px-4 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="text-zinc-600 dark:text-zinc-400 mb-2" for="password">Пароль</label>
          <input
            id="password"
            v-model="password"
            class="border border-zinc-300 dark:border-zinc-700 rounded-md px-4 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
          />
        </div>
        <div class="flex justify-end mb-4">
          <a class="text-sm text-blue-500 hover:underline dark:hover:text-blue-400" href="#"
            >Забыли пароль?</a
          >
        </div>
        <div class="flex justify-between items-center">
          <button class="px-4 py-2 bg-blue-600 text-white rounded mr-2" type="submit">Войти</button>
          <button class="px-4 py-2 bg-white text-zinc-800 rounded" type="button" @click="register">
            Регистрация
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { CloseFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

export default defineComponent({
  name: 'LoginModal',
  components: {
    CloseFilled,
    Icon
  },
  props: {
    onClose: {
      type: Function,
      required: true
    }
  },
  setup() {
    // Создаем реактивные данные для email и password
    const email = ref('')
    const password = ref('')
    return {
      email,
      password
    }
  },
  methods: {
    submit() {
      // TODO: implement login logic
    },
    register() {
      // TODO: implement register logic
    }
  }
})
</script>
