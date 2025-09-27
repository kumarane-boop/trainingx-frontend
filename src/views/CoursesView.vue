<template>
  <div>
    <h1>Courses</h1>
    <div v-if="loading">Loading courses...</div>
    <ul v-else>
      <li v-for="course in courses" :key="course.id">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const courses = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('/api/courses')
    if (!res.ok) throw new Error('Failed to fetch courses')
    courses.value = await res.json()
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>


