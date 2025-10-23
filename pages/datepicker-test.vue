<template>
  <div class="datepicker-test">
    <div class="container">
      <h1>🎵 ZooFlora DatePicker Test</h1>
      
      <div class="test-section">
        <h2>📅 DatePicker Test</h2>
        <AdminDatePicker 
          v-model="selectedDate"
          placeholder="Datum wählen..."
        />
        <div v-if="selectedDate" class="result">
          Ausgewählt: {{ selectedDate }}
        </div>
      </div>
      
      <div class="test-section">
        <h2>⏰ TimePicker Test</h2>
        <AdminTimePicker 
          v-model="selectedTime"
          placeholder="Uhrzeit wählen..."
        />
        <div v-if="selectedTime" class="result">
          Ausgewählt: {{ selectedTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminDatePicker from '~/components/AdminDatePicker.vue'
import AdminTimePicker from '~/components/AdminTimePicker.vue'

definePageMeta({
  layout: false
})

const selectedDate = ref(null)
const selectedTime = ref(null)
</script>

<style scoped>
.datepicker-test {
  font-family: 'Roboto Mono', monospace;
  background-color: #181818;
  color: #ffffff;
  min-height: 100vh;
  padding: 40px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(24, 24, 24, 0.95);
  border: 2px solid #FFED00;
  padding: 40px;
  backdrop-filter: blur(10px);
}

h1 {
  color: #FFED00;
  font-size: 2rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

h2 {
  color: #FFED00;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.test-section {
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #333;
}

.result {
  margin-top: 15px;
  padding: 10px;
  background: rgba(255, 237, 0, 0.1);
  border: 2px solid #FFED00;
  color: #FFED00;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
