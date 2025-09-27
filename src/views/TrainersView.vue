<script setup>
import { ref, onMounted, computed } from 'vue'
const trainers = ref([])
const search = ref('')
const loading = ref(true)

const filtered = computed(() =>
  trainers.value
    .filter(t => t.approved)
    .filter(t =>
      [t.name, ...(t.skills||[])].join(' ').toLowerCase().includes(search.value.toLowerCase())
    )
)

onMounted(async () => {
  try {
    // start static, later switch to '/api/trainers/list'
    const res = await fetch('/trainers.json')
    trainers.value = await res.json()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <h1>Trainers</h1>
  <input v-model="search" placeholder="Search trainers or skills…" />
  <div v-if="loading">Loading…</div>
  <ul v-else>
    <li v-for="t in filtered" :key="t.id">
      <strong>{{ t.name }}</strong> — {{ (t.skills||[]).join(', ') }}
      <span style="margin-left:8px">Rate: ${{ t.rate }}/h</span>
      <div>Availability: {{ t.availability }}</div>
    </li>
  </ul>
</template>

