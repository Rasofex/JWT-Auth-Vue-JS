import { defineStore } from 'pinia'
import axios from 'axios'

interface User {
  id: number
  name: string
  email: string
}

interface Token {
  accessToken: string
  refreshToken: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null, // данные пользователя
    token: null as Token | null // данные токена
  }),
  getters: {
    isAuthenticated(): boolean {
      return !!this.user && !!this.token
    }
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post('/api/auth/login', {
          email,
          password
        })
        const { user, token } = response.data
        this.user = user
        this.token = token
        return { success: true }
      } catch (error: any) {
        return { success: false, message: error.message }
      }
    },
    async logout() {
      try {
        await axios.post('/api/auth/logout', {
          token: this.token?.refreshToken
        })
        this.user = null
        this.token = null
        return { success: true }
      } catch (error: any) {
        return { success: false, message: error.message }
      }
    },
    async refresh() {
      try {
        const response = await axios.post('/api/auth/refresh', {
          token: this.token?.refreshToken
        })
        const { token } = response.data
        this.token = token
        return { success: true }
      } catch (error: any) {
        return { success: false, message: error.message }
      }
    },
    async verify() {
      try {
        const response = await axios.get('/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${this.token?.accessToken}`
          }
        })
        const { user } = response.data
        this.user = user
        return { success: true }
      } catch (error: any) {
        return { success: false, message: error.message }
      }
    }
  }
})
