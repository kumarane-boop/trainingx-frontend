<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './stores/user'
const user = useUserStore()
onMounted(() => user.refresh())
</script>

<template>
  <nav style="display:flex; gap:12px; padding:10px; border-bottom:1px solid #eee;">
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <span v-if="user.isAuthenticated"> | hi {{ user.user?.userDetails }}</span>
    <button v-if="!user.isAuthenticated" @click="user.login('github', '/dashboard')">Sign in</button>
    <button v-else @click="user.logout('/')">Sign out</button>
  </nav>
  <RouterView />
</template>


