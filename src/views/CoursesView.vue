<template>
  <div>
    <h1>Courses</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref([
  { id: 1, title: 'Azure Fundamentals', description: 'Learn basics of Microsoft Azure' },
  { id: 2, title: 'Vue.js for Beginners', description: 'Build SPAs with Vue and Vite' },
  { id: 3, title: 'DevOps Essentials', description: 'CI/CD, GitHub Actions, and more' }
])
</script>

