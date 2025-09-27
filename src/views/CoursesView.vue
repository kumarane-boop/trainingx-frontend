<script setup>
import { ref, onMounted } from 'vue'

const courses = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/api/courses')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    courses.value = await res.json()
  } catch (e) {
    console.error(e)
    error.value = 'Could not load courses. If running locally, start with SWA CLI.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h1>Courses</h1>
    <div v-if="loading">Loading…</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="c in courses" :key="c.id">
        <h3>{{ c.title }}</h3>
        <p>{{ c.description }}</p>
      </li>
    </ul>
  </div>
</template>

