import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4200/api'

const ACCESS_TOKEN_KEY = 'accessToken'

import { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
  errors?: string[];
  [key: string]: any;
}

interface AuthState {
  token: string
  errors: string
  username: string
  role: string
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: '' as string,
    errors: '' as string,
    username: ('' as string) || (localStorage.getItem('username') as string),
    role: ('' as string) || (localStorage.getItem('role') as string)
  }),
  getters: {
    isAuthenticated(): boolean {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) as string
      return accessToken !== '' && accessToken !== null
    },
    getToken(): string {
      return this.token
    }
  },
  actions: {
    async signup(username: string, email: string, password: string) {
      try {
        await axios.post('/auth/signup', {
          username,
          email,
          password
        })
        return this.$router.push({ name: 'Home' })
      } catch (error: AxiosError<ErrorResponse>) {
        const data = error?.response?.data
        if (data.message) {
          return (this.errors = data.message)
        } else if (data.length > 0) {
          return (this.errors = data[0].msg)
        }
      }
    },
    async signin(username: string, password: string) {
      try {
        const { data } = await axios.post('/auth/signin', {
          username,
          password
        })
        const { token, accessToken, role } = data
        if (!token || !accessToken) {
          this.errors = data.message
          return
        }
        this.token = token
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
        localStorage.setItem('username', username)
        localStorage.setItem('role', role)
        this.username = username
        this.role = role
        return this.$router.push({ name: 'Home' })
      } catch (error: AxiosError<ErrorResponse>) {
        this.errors = error.response.data
      }
    },
    async signout() {
      const router = useRouter();
      try {
        await axios.post('/auth/signout', {
          token: localStorage.getItem(ACCESS_TOKEN_KEY)
        })
        router.push({ name: 'Login' })
      } catch (error: AxiosError<ErrorResponse>) {
        this.errors = error.response.data
      } finally {
        this.clearToken()
      }
    },
    async refresh() {
      try {
        const { data } = await axios.post('/auth/refresh', {
          refreshToken: localStorage.getItem(ACCESS_TOKEN_KEY) as string
        })
        this.token = data.token
      } catch (error: AxiosError<ErrorResponse>) {
        const errorMessage = error?.response?.data?.message
        if (
          errorMessage === 'Refresh token expired' ||
          errorMessage === 'Something went wrong' ||
          errorMessage === 'User not found'
        ) {
          this.errors = errorMessage
          this.clearToken()
        } else {
          this.errors = errorMessage
        }
      }
    },
    clearToken() {
      this.token = ''; this.errors = ''
      this.username = ''
      this.role = ''
      localStorage.removeItem(ACCESS_TOKEN_KEY)
      localStorage.removeItem('username')
      localStorage.removeItem('role')
    }
  }
})
