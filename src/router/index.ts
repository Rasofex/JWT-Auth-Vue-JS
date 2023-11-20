// Router
import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import ErrorView404 from '../views/ErrorView404.vue'

// Layouts
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// Stores
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/user',
          children: [
            {
              path: ':username',
              component: UserView
            }
          ]
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: RegisterView
        },
        {
          path: 'signin',
          name: 'signin',
          component: LoginView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: ErrorView404
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    if (['signin', 'signup'].includes(to.name as string)) {
      return next()
    }

    return next({ name: 'signin' })
  }

  try {
    await authStore.refresh()

    if (!authStore.getToken) {
      if (
        authStore.errors.includes('Refresh token expired') ||
        authStore.errors.includes('Something went wrong') ||
        authStore.errors.includes('User not found')
      ) {
        authStore.clearToken()
      }

      if (['signin', 'signup'].includes(to.name as string)) {
        return next(false)
      }

      return next({ name: 'signin' })
    }

    if (['signin', 'signup'].includes(to.name as string)) {
      return next({ name: 'home' })
    }

    return next()
  } catch (error) {
    authStore.clearToken()

    if (['signin', 'signup'].includes(to.name as string)) {
      return next(false)
    }

    return next({ name: 'signin' })
  }
})
export default router
