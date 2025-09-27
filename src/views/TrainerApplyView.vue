<script setup>
import { ref } from 'vue'
const form = ref({ name: '', skills: '', rate: 50, availability: '' })
const status = ref('')

async function submit() {
  status.value = 'Submitting…'
  const payload = {
    name: form.value.name.trim(),
    skills: form.value.skills.split(',').map(s => s.trim()).filter(Boolean),
    rate: Number(form.value.rate),
    availability: form.value.availability.trim()
  }
  const res = await fetch('/api/trainers/apply', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(payload)
  })
  status.value = res.ok ? 'Application submitted! We’ll review soon.' : 'Failed to submit.'
}
</script>

<template>
  <h1>Apply to be a Trainer</h1>
  <div><input v-model="form.name" placeholder="Your name" /></div>
  <div><input v-model="form.skills" placeholder="Skills (comma separated)" /></div>
  <div><input v-model.number="form.rate" type="number" min="0" /> $/h</div>
  <div><input v-model="form.availability" placeholder="Your availability" /></div>
  <button @click="submit">Submit</button>
  <p>{{ status }}</p>
</template>

