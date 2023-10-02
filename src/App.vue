<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderPage from '@/components/ui/HeaderPage.vue'
</script>

<template>
  <div>
    <HeaderPage />
    <div class="mt-28 p-5 lg:mx-20">
      <RouterView />
    </div>
  </div>
</template>
