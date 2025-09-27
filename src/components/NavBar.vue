<script setup>
import { ref, onMounted } from 'vue'
const user = ref(null)

async function loadUser() {
  try {
    const res = await fetch('/.auth/me', { credentials: 'include' })
    if (!res.ok) return
    const data = await res.json()
    user.value = data?.clientPrincipal || null
  } catch {}
}
onMounted(loadUser)
</script>

<template>
  <nav style="display:flex; gap:12px; align-items:center">
    <a href="/">Home</a>
    <a href="/courses">Courses</a>
    <a href="/trainers">Trainers</a>
    <a href="/dashboard">Dashboard</a>

    <div style="margin-left:auto">
      <template v-if="user">
        <span>Hi, {{ user.userDetails }}</span>
        <a href="/trainer/apply" style="margin-left:12px">Become a Trainer</a>
        <a href="/.auth/logout" style="margin-left:12px">Sign out</a>
      </template>
      <template v-else>
        <a href="/.auth/login/github">Sign in</a>
      </template>
    </div>
  </nav>
</template>

