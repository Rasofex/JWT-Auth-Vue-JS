<template>
  <div class="flex w-full justify-center">
    <SkeletonProfileCard v-if="loading" />
    <ProfileCard v-else-if="user !== null" :user="user" />
  </div>
</template>

<script lang="ts">
import SkeletonProfileCard from '@/components/Skeletons/SkeletonProfileCard.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import { useUserStore } from '@/stores/user'
import type { RouteLocationNormalized } from 'vue-router'

export default {
  name: 'UserView',
  components: {
    SkeletonProfileCard,
    ProfileCard
  },
  data() {
    return {
      user: null,
      loading: true
    }
  },
  methods: {
    getUser(username: string) {
      const userStore = useUserStore()
      userStore.getUser(username).then((user) => {
        this.user = user
        this.loading = false
      })
    }
  },
  beforeRouteUpdate(to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) {
    if (to.params.username !== from.params.username) {
      this.loading = true
      this.getUser(to.params.username as string)
    }
    next()
  },
  mounted() {
    this.getUser(this.$route.params.username as string)
  }
}
</script>

<style scoped></style>
