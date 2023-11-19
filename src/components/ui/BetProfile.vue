<template>
  <div
    class="border-2 dark:border-zinc-700 border-zinc-200 shadow-lg rounded-xl max-w-4xl overflow-hidden"
  >
    <div class="flex flex-col w-full flex-1">
      <div class="w-full overflow-hidden">
        <img
          alt="banner"
          class="md:aspect-[21/6] aspect-[9/3] object-cover w-full h-full"
          src="https://media.tenor.com/mu5UDg5JGL8AAAAC/late-night-gaming.gif"
        />
      </div>
      <div class="flex flex-col md:flex-row items-center pb-5 md:px-5">
        <div
          class="md:w-48 md:h-48 w-32 h-32 md:-mt-24 -mt-[4.2rem] rounded-full overflow-hidden border-2 dark:border-zinc-700 border-zinc-200 shadow-lg"
        >
          <img
            alt="Logo"
            class="rounded-full object-cover"
            src="https://camo.githubusercontent.com/2366059413a6081005a08bde8c92f5fa0e2af6c2425129e5e9dae9eb43234352/68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f39356337366636306564376365316138393735343033346639356465383432352f616465373861616636613233663634622d34352f73343030783630302f393639356131633130303036633364646430353734303636313933336232356235396533323835622e676966"
          />
        </div>
        <div class="flex flex-row md:pl-5 flex-1">
          <div>
            <h1 class="flex text-2xl font-bold mt-2 md:mt-3.5 justify-center md:justify-start">
              Alex
              <span class="text-blue-500">&nbsp;Rasofex</span>
            </h1>
            <p class="text-gray-500 justify-self-center md:justify-self-start dark:text-gray-300">
              Student | Full Stack Developer | Meow~
            </p>
            <div class="flex justify-center md:justify-start md:space-x-3 mt-2">
              <IconLinkProfile href="https://twitter.com/Alex72217559487">
                <Icon size="24">
                  <Twitter />
                </Icon>
              </IconLinkProfile>

              <IconLinkProfile href="https://github.com/Rasofex">
                <Icon size="24">
                  <Github />
                </Icon>
              </IconLinkProfile>
            </div>
          </div>
        </div>
        <div class="justify-items-end justify-end">
          <div class="flex">
            <IconButton @click="editProfile">
              <Icon size="24">
                <Edit32Regular />
              </Icon>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Github, Twitter } from '@vicons/fa'
import { Edit32Regular } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
import IconButton from '@/components/ui/IconButton.vue'
import IconLinkProfile from '@/components/ui/IconLinkProfile.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Github,
    Twitter,
    Edit32Regular,
    Icon,
    IconButton,
    IconLinkProfile
  },
  methods: {
    editProfile() {
      // TODO: implement edit profile logic
      console.log('edit profile')
    }
  }
})
</script>
