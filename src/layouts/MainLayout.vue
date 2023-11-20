<template>
  <HeaderPage />
  <div class="h-screen lg:mx-20 md:pt-20">
    <div
      class="flex w-full justify-center md:mx-auto max-w-6xl relative gap-5 2xl:gap-0 md:px-5 lg:px-0"
    >
      <div class="fixed bottom-0 left-0 z-50 w-full md:relative md:max-w-min">
        <SideMenu />
      </div>
      <div class="w-full flex justify-center mx-auto max-w-7xl">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import SideMenu from '@/components/SideMenu.vue'
</script>

<style scoped></style>
