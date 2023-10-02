<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconLinkProfile',
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <a
    :href="href"
    class="inline-block mx-1.5 md:mx-0 text-sm text-gray-400 hover:text-black dark:hover:text-white"
    rel="noopener noreferrer"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>

<style scoped></style>
