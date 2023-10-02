<template>
  <div class="fixed z-50 top-0 left-0 w-full">
    <div class="flex items-center justify-between bg-white dark:bg-zinc-800 shadow-lg px-4 py-2">
      <div class="flex items-center">
        <img
          alt="logo"
          class="h-8 w-8 mr-2 object-cover"
          src="https://camo.githubusercontent.com/2366059413a6081005a08bde8c92f5fa0e2af6c2425129e5e9dae9eb43234352/68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f39356337366636306564376365316138393735343033346639356465383432352f616465373861616636613233663634622d34352f73343030783630302f393639356131633130303036633364646430353734303636313933336232356235396533323835622e676966"
        />
        <h1 class="text-xl font-bold text-zinc-800 dark:text-zinc-200">My App</h1>
      </div>
      <div class="flex items-center">
        <button class="px-4 py-2 text-white bg-blue-600 rounded" @click="openModal">
          <span class="font-bold">Sign Up</span>
        </button>
      </div>
    </div>
    <LoginModal v-if="showModal" :onClose="closeModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginModal from '@/components/modal/LoginModal.vue'

export default defineComponent({
  name: 'HeaderPage',
  components: { LoginModal },
  setup() {
    // Создаем реактивное состояние для отображения или скрытия модального окна
    const showModal = ref(false)
    // Создаем функции для открытия и закрытия модального окна
    const openModal = () => {
      showModal.value = true
    }
    const closeModal = () => {
      showModal.value = false
    }
    return {
      showModal,
      openModal,
      closeModal
    }
  },
  methods: {
    signUp() {
      // TODO: implement sign up logic
    }
  }
})
</script>
