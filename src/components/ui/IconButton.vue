<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconButton'
})
</script>

<template>
  <button class="rounded-full text-gray-400 hover:text-black dark:hover:text-white">
    <slot></slot>
  </button>
</template>

<style scoped></style>
