<template>
  <div
    class="md:rounded-2xl rounded-b-2xl max-w-4xl w-full overflow-hidden"
  >
    <div class="flex flex-col w-full flex-1">
      <div class="w-full overflow-hidden">
        <img
          v-if="user?.bannerUrl"
          alt="banner"
          class="md:aspect-[21/6] aspect-[9/3] object-cover w-full h-full"
          :src="user?.bannerUrl"
        />
        <div v-else class="md:aspect-[21/6] aspect-[9/3] object-cover w-full h-full bg-zinc-200 dark:bg-zinc-700"></div>
      </div>
      <div class="flex flex-col md:flex-row items-center pb-5 md:px-5 dark:bg-zinc-800 bg-white">
        <div
          class="md:w-48 md:h-48 w-32 h-32 md:-mt-24 -mt-[4.2rem] rounded-full overflow-hidden border-2 dark:border-zinc-700 border-zinc-200 bg-white dark:bg-zinc-800"
        >
          <img
            v-if="user?.avatarUrl"
            alt="Logo"
            class="rounded-full object-cover"
            :src="user?.avatarUrl"
          />
          <div v-else class="rounded-full flex h-full items-center justify-center">
            <span class="text-5xl font-bold">{{ user?.name ? user?.name[0] : '' }}{{ user?.username[0] }}</span>
          </div>
        </div>
        <div class="flex flex-row md:pl-5 flex-1">
          <div>
            <h1 class="flex text-2xl font-bold mt-2 md:mt-3.5 justify-center md:justify-start mb-2">
              {{ user?.name ? user?.name + '&nbsp;' : '' }}
              <span class="text-blue-500">{{ user?.username }}</span>
            </h1>
            <div class="text-gray-500 justify-self-center md:justify-self-start dark:text-gray-300">
              <p class="line-clamp-1">{{ user?.bio }}</p>
            </div>
            <div class="flex justify-center md:justify-start space-x-3 mt-2" v-if="user?.githubLink !== '' || user?.twitterLink !== ''">
              <a
                v-if="user?.twitterLink !== null && user?.twitterLink !== ''"
                :href="user?.twitterLink"
                class="icon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size="24">
                  <LogoTwitter />
                </Icon>
              </a>

              <a
                v-if="user?.githubLink !== null && user?.githubLink !== ''"
                :href="user?.githubLink"
                class="icon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size="24">
                  <LogoGithub />
                </Icon>
              </a>
            </div>
          </div>
        </div>
        <div class="justify-items-end justify-end hidden md:flex pt-5">
          <div class="flex">
            <div class="icon">
              <Icon size="24">
                <Edit32Regular />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LogoGithub, LogoTwitter } from '@vicons/ionicons5'
import { Edit32Regular } from '@vicons/fluent'
import { Icon } from '@vicons/utils'

export default {
  name: 'ProfileCard',
  components: {
    Icon,
    LogoGithub,
    LogoTwitter,
    Edit32Regular
  },
  props: {
    user: {
      type: Object,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/icon.module.scss';
</style>
