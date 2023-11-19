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
import { useRoute } from 'vue-router'

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
  mounted() {
    const userStore = useUserStore()
    const username = useRoute().params.username as string

    userStore.getUser(username).then((user) => {
      this.user = user
      this.loading = false
    })
  }
}
</script>

<style scoped></style>
