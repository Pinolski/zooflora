<template>
  <div class="datepicker-demo">
    <div class="pixel-blast-container">
      <div class="pixel-grid"></div>
    </div>
    
    <div class="container">
      <div class="demo-header">
        <h1>🎵 ZooFlora DatePicker Demo</h1>
        <p>Professionelle DatePicker-Komponenten mit ZooFlora-Design</p>
      </div>
      
      <div class="demo-section">
        <h2>📅 DatePicker Demo</h2>
        <div class="form-group">
          <label>Datum auswählen:</label>
          <AdminDatePicker 
            v-model="selectedDate"
            placeholder="Datum wählen..."
          />
        </div>
        <div v-if="selectedDate" class="result">
          <strong>Ausgewähltes Datum:</strong> {{ formatDate(selectedDate) }}
        </div>
      </div>
      
      <div class="demo-section">
        <h2>⏰ TimePicker Demo</h2>
        <div class="form-group">
          <label>Uhrzeit auswählen:</label>
          <AdminTimePicker 
            v-model="selectedTime"
            placeholder="Uhrzeit wählen..."
          />
        </div>
        <div v-if="selectedTime" class="result">
          <strong>Ausgewählte Zeit:</strong> {{ formatTime(selectedTime) }}
        </div>
      </div>
      
      <div class="demo-section">
        <h2>🎯 Kombiniert</h2>
        <div class="form-row">
          <div class="form-group">
            <label>Datum:</label>
            <AdminDatePicker 
              v-model="combinedDate"
              placeholder="Datum wählen..."
            />
          </div>
          <div class="form-group">
            <label>Zeit:</label>
            <AdminTimePicker 
              v-model="combinedTime"
              placeholder="Zeit wählen..."
            />
          </div>
        </div>
        <div v-if="combinedDate && combinedTime" class="result">
          <strong>Kombiniert:</strong> {{ formatCombined(combinedDate, combinedTime) }}
        </div>
      </div>
      
      <div class="demo-section">
        <h2>🎨 Design Features</h2>
        <div class="features-grid">
          <div class="feature">
            <h3>🎨 ZooFlora Design</h3>
            <p>Dunkler Hintergrund, gelbe Akzente, Roboto Mono Font</p>
          </div>
          <div class="feature">
            <h3>✨ Animierte Pixel</h3>
            <p>Schwebende gelbe Pixel im Hintergrund</p>
          </div>
          <div class="feature">
            <h3>🎯 Interaktive Effekte</h3>
            <p>Hover, Focus, Scale und Glow-Effekte</p>
          </div>
          <div class="feature">
            <h3>📱 Responsive</h3>
            <p>Funktioniert auf allen Geräten</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AdminDatePicker from '~/components/AdminDatePicker.vue'
import AdminTimePicker from '~/components/AdminTimePicker.vue'

// Meta
definePageMeta({
  layout: false
})

// Reactive data
const selectedDate = ref(null)
const selectedTime = ref(null)
const combinedDate = ref(null)
const combinedTime = ref(null)

// Methods
const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatTime = (time) => {
  if (!time) return ''
  return new Date(time).toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatCombined = (date, time) => {
  if (!date || !time) return ''
  const dateObj = new Date(date)
  const timeObj = new Date(time)
  
  dateObj.setHours(timeObj.getHours())
  dateObj.setMinutes(timeObj.getMinutes())
  
  return dateObj.toLocaleString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Generate animated pixels
const generatePixels = () => {
  const pixelGrid = document.querySelector('.pixel-grid')
  if (!pixelGrid) return
  
  const pixelCount = 200
  
  for (let i = 0; i < pixelCount; i++) {
    const pixel = document.createElement('div')
    pixel.className = 'pixel'
    pixel.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${6 + Math.random() * 8}s;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
    `
    pixelGrid.appendChild(pixel)
  }
}

onMounted(() => {
  generatePixels()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.datepicker-demo {
  font-family: 'Roboto Mono', monospace;
  background-color: #181818;
  color: #ffffff;
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
  padding: 20px;
  min-height: 100vh;
}

/* Animated Pixel Background */
.pixel-blast-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.pixel-grid {
  position: relative;
  width: 100%;
  height: 100%;
}

.pixel {
  position: absolute;
  background: #FFED00;
  opacity: 0.05;
  animation: pixelFloat 8s infinite ease-in-out;
}

@keyframes pixelFloat {
  0%, 100% { 
    opacity: 0.05;
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    opacity: 0.15;
    transform: translateY(-30px) rotate(180deg);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(24, 24, 24, 0.95);
  border: 2px solid #FFED00;
  padding: 40px;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.demo-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid #FFED00;
}

.demo-header h1 {
  color: #FFED00;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
}

.demo-header p {
  color: #cccccc;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-section {
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #333;
  transition: all 0.3s ease;
}

.demo-section:hover {
  border-color: #FFED00;
  background: rgba(255, 237, 0, 0.05);
}

.demo-section h2 {
  color: #FFED00;
  font-size: 1.8rem;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  color: #FFED00;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.result {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 237, 0, 0.1);
  border: 2px solid #FFED00;
  color: #FFED00;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.feature {
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #333;
  transition: all 0.3s ease;
}

.feature:hover {
  border-color: #FFED00;
  background: rgba(255, 237, 0, 0.05);
  transform: translateY(-5px);
}

.feature h3 {
  color: #FFED00;
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.feature p {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
