import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useUserStore } from '../stores/user'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } }
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach(async (to) => {
  const user = useUserStore()
  if (user.loading) await user.refresh()
  if (to.meta.requiresAuth && !user.isAuthenticated) {
    // Let server also protect it, but for nicer UX, trigger login here:
    user.login('github', to.fullPath)   // use 'aad' if you enabled Microsoft
    return false
  }
})

export default router



