<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)

async function loadUser() {
  try {
    const res = await fetch('/.auth/me', { credentials: 'include' })
    if (!res.ok) return
    const data = await res.json()
    user.value = data?.clientPrincipal || null
  } catch { /* ignore */ }
}

onMounted(loadUser)
</script>

<template>
  <nav style="display:flex; gap:14px; align-items:center; padding:10px; border-bottom:1px solid #eee;">
    <!-- left: public nav -->
    <RouterLink to="/courses">Courses</RouterLink>
    <RouterLink to="/trainers">Trainers</RouterLink>
    <RouterLink to="/trainer/apply">Become Trainer</RouterLink>

    <!-- right: auth -->
    <span style="margin-left:auto"></span>
    <template v-if="user">
      <span>Hi, {{ user.userDetails }}</span>
      <RouterLink to="/dashboard" style="margin-left:12px">Dashboard</RouterLink>
      <a href="/.auth/logout" style="margin-left:12px">Sign out</a>
    </template>
    <template v-else>
      <a href="/.auth/login/github">Sign in</a>
    </template>
  </nav>
</template>


