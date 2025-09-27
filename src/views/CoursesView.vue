<template>
  <div class="courses">
    <h1>Courses</h1>

    <!-- Search box -->
    <input
      v-model="search"
      type="text"
      placeholder="Search courses..."
      class="search-box"
    />

    <div v-if="loading">Loading…</div>
    <div v-else>
      <ul>
        <li v-for="course in filteredCourses" :key="course.id">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
        </li>
      </ul>
      <p v-if="filteredCourses.length === 0">No courses found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const courses = ref([])
const loading = ref(true)
const search = ref("")

// computed property to filter by search term
const filteredCourses = computed(() =>
  courses.value.filter(c =>
    c.title.toLowerCase().includes(search.value.toLowerCase()) ||
    c.description.toLowerCase().includes(search.value.toLowerCase())
  )
)

onMounted(async () => {
  try {
    const res = await fetch('/courses.json')
    courses.value = await res.json()
  } catch (e) {
    console.error("Failed to load courses", e)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.search-box {
  padding: 8px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 300px;
}
</style>

