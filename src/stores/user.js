import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,        // SWA clientPrincipal
    loading: true
  }),
  getters: {
    isAuthenticated: (s) => !!s.user
  },
  actions: {
    async refresh() {
      try {
        const res = await fetch('/.auth/me', { headers: { 'x-swa': 'me' } })
        if (!res.ok) { this.user = null; return }
        const data = await res.json()
        this.user = data?.clientPrincipal || null
      } finally {
        this.loading = false
      }
    },
    login(provider = 'github', returnTo = '/') {
      window.location.href =
        `/.auth/login/${provider}?post_login_redirect_uri=${encodeURIComponent(returnTo)}`
    },
    logout(returnTo = '/') {
      window.location.href =
        `/.auth/logout?post_logout_redirect_uri=${encodeURIComponent(returnTo)}`
    }
  }
})

