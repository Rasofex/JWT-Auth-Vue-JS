import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4200/api'

export const useUserStore = defineStore('user', {
  actions: {
    async getUser(username: string) {
      const { data } = await axios.get(`/user/${username}`)
      return data.user
    }
  }
})
