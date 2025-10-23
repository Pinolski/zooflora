<template>
  <div class="admin-enhanced">
    <div class="pixel-blast-container">
      <div class="pixel-grid"></div>
    </div>
    
    <div class="container">
      <div class="admin-header">
        <h1>🎵 ZooFlora CMS - Enhanced Konzerte verwalten</h1>
        <div class="admin-actions">
          <span class="user-info">👤 Eingeloggt als: <strong>admin</strong></span>
          <button class="btn-logout" @click="logout">Logout</button>
        </div>
      </div>
      
      <div v-if="message" :class="['message', messageType]">
        {{ message }}
      </div>
      
      <div class="add-concert">
        <h2>🎵 Neues Konzert hinzufügen</h2>
        <div class="success-message">
          <strong>🚀 Enhanced DatePicker:</strong><br>
          1. Professionelle Datum/Zeit-Auswahl mit Vue3DatePicker<br>
          2. Intuitive Kalender- und Zeit-Interfaces<br>
          3. Automatisches Speichern im Backend<br>
          4. Erscheint SOFORT auf der Website! 🎉
        </div>
        
        <form @submit.prevent="saveConcert">
          <div class="form-row">
            <div class="form-group">
              <label for="title">Titel/Venue:</label>
              <input 
                v-model="form.title" 
                type="text" 
                id="title" 
                name="title" 
                placeholder="z.B. Club Indigo" 
                required
              >
            </div>
            <div class="form-group">
              <label for="date">Datum:</label>
              <AdminDatePicker 
                v-model="form.date"
                placeholder="Datum wählen..."
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="city">Stadt:</label>
              <input 
                v-model="form.city" 
                type="text" 
                id="city" 
                name="city" 
                placeholder="z.B. Berlin" 
                required
              >
            </div>
            <div class="form-group">
              <label for="venue">Venue (detailliert):</label>
              <input 
                v-model="form.venue" 
                type="text" 
                id="venue" 
                name="venue" 
                placeholder="z.B. Club Indigo" 
                required
              >
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="time">Uhrzeit:</label>
              <AdminTimePicker 
                v-model="form.time"
                placeholder="Uhrzeit wählen..."
              />
            </div>
            <div class="form-group">
              <label for="ticket_url">Ticket URL (optional):</label>
              <input 
                v-model="form.ticket_url" 
                type="url" 
                id="ticket_url" 
                name="ticket_url" 
                placeholder="https://..."
              >
            </div>
          </div>
          
          <div class="form-group">
            <label for="photos_url">Fotos URL (optional):</label>
            <input 
              v-model="form.photos_url" 
              type="url" 
              id="photos_url" 
              name="photos_url" 
              placeholder="https://..."
            >
          </div>
          
          <div class="form-group">
            <label for="body">Beschreibung (optional):</label>
            <textarea 
              v-model="form.body" 
              id="body" 
              name="body" 
              placeholder="Zusätzliche Informationen zum Konzert..."
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-success" :disabled="loading">
            {{ loading ? '⏳ Speichere...' : '🎵 Konzert speichern' }}
          </button>
        </form>
      </div>

      <div class="concert-list">
        <h3>📅 Konzerte 
        <!--  <button class="btn refresh-btn" @click="loadConcerts">🔄 Aktualisieren</button> -->
        </h3>
        <div v-if="concerts.length === 0" class="no-concerts">
          <p>Keine Konzerte gefunden.</p>
        </div>
        <div v-else class="concerts-grid">
          <div 
            v-for="concert in concerts" 
            :key="concert._id" 
            class="concert-item"
          >
            <div class="concert-header">
              <h3>{{ concert.title }}</h3>
              <span :class="['status-badge', getStatusClass(concert.date)]">
                {{ getStatusText(concert.date) }}
              </span>
            </div>
            <div class="concert-meta">
              📅 {{ formatDate(concert.date) }} | 🏢 {{ concert.city }} | ⏰ {{ concert.time || 'TBA' }}
            </div>
            <div class="concert-actions">
              <button class="btn btn-secondary" @click="editConcert(concert._id)">Bearbeiten</button>
              <button class="btn" @click="viewConcert(concert._id)">Anzeigen</button>
            </div>
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
const form = ref({
  title: '',
  date: null,
  city: '',
  venue: '',
  time: null,
  ticket_url: '',
  photos_url: '',
  body: ''
})

const concerts = ref([])
const loading = ref(false)
const message = ref('')
const messageType = ref('success')

// Methods
const saveConcert = async () => {
  loading.value = true
  message.value = ''
  
  try {
    const concertData = {
      ...form.value,
      date: form.value.date ? new Date(form.value.date).toISOString().split('T')[0] : '',
      time: form.value.time ? new Date(form.value.time).toTimeString().slice(0, 5) : ''
    }
    
    const response = await fetch('/api/concerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(concertData)
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.statusMessage || 'Fehler beim Speichern')
    }
    
    message.value = `✅ Konzert "${concertData.title}" wurde erfolgreich gespeichert!`
    messageType.value = 'success'
    
    // Reset form
    form.value = {
      title: '',
      date: null,
      city: '',
      venue: '',
      time: null,
      ticket_url: '',
      photos_url: '',
      body: ''
    }
    
    // Reload concerts
    await loadConcerts()
    
  } catch (error) {
    console.error('Error saving concert:', error)
    message.value = `❌ Fehler beim Speichern: ${error.message}`
    messageType.value = 'error'
  } finally {
    loading.value = false
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
      message.value = ''
    }, 5000)
  }
}

const loadConcerts = async () => {
  try {
    const response = await fetch('/api/concerts')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    concerts.value = await response.json()
  } catch (error) {
    console.error('Error loading concerts:', error)
    message.value = '❌ Fehler beim Laden der Konzerte'
    messageType.value = 'error'
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const getStatusClass = (dateString) => {
  const today = new Date()
  const concertDate = new Date(dateString)
  return concertDate >= today ? 'status-upcoming' : 'status-past'
}

const getStatusText = (dateString) => {
  const today = new Date()
  const concertDate = new Date(dateString)
  return concertDate >= today ? 'Kommend' : 'Vergangen'
}

const editConcert = (id) => {
  message.value = `Bearbeitung von Konzert ${id} wird in einer zukünftigen Version verfügbar sein.`
  messageType.value = 'error'
}

const viewConcert = (id) => {
  message.value = `Anzeige von Konzert ${id} wird in einer zukünftigen Version verfügbar sein.`
  messageType.value = 'error'
}

const logout = () => {
  // Implement logout logic
  window.location.href = '/api/admin'
}

// Lifecycle
onMounted(() => {
  loadConcerts()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admin-enhanced {
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

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #FFED00;
}

.admin-header h1 {
  color: #FFED00;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
}

.admin-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-info {
  color: #ffffff;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: transparent;
  color: #FFED00;
  text-decoration: none;
  border: 2px solid #FFED00;
  margin-right: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #FFED00;
  transition: left 0.3s ease;
  z-index: -1;
}

.btn:hover {
  color: #181818;
}

.btn:hover::before {
  left: 0;
}

.btn-logout {
  border-color: #ff0000;
  color: #ff0000;
}

.btn-logout::before {
  background: #ff0000;
}

.btn-secondary {
  border-color: #666;
  color: #666;
}

.btn-secondary::before {
  background: #666;
}

.btn-secondary:hover {
  color: #ffffff;
}

.btn-success:hover {
  color: #181818;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.add-concert {
  margin-top: 50px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  position: relative;
}

.add-concert h2 {
  color: #FFED00;
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
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
  font-size: 0.9rem;
}

.form-group input, 
.form-group textarea {
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #333;
  color: #ffffff;
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus, 
.form-group textarea:focus {
  outline: none;
  border-color: #FFED00;
  background: rgba(255, 237, 0, 0.05);
  box-shadow: 0 0 20px rgba(255, 237, 0, 0.2);
}

.form-group input::placeholder, 
.form-group textarea::placeholder {
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
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

.concert-list {
  margin-top: 50px;
}

.concert-list h3 {
  color: #FFED00;
  font-size: 1.4rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.concerts-grid {
  display: grid;
  gap: 25px;
}

.concert-item {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #333;
  padding: 25px;
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.concert-item:hover {
  border-color: #FFED00;
  background: rgba(255, 237, 0, 0.05);
  transform: translateY(-2px);
}

.concert-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.concert-header h3 {
  margin: 0;
  color: #FFED00;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.concert-meta {
  color: #cccccc;
  font-size: 0.9rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.concert-actions {
  margin-top: 20px;
}

.status-badge {
  display: inline-block;
  padding: 2px 6px;
  border: 1px solid;
  border-radius: 12px;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Roboto Mono', monospace;
}

.status-upcoming {
  background: rgba(0, 255, 0, 0.15);
  color: #00ff00;
  border-color: #00ff00;
}

.status-past {
  background: rgba(255, 0, 0, 0.15);
  color: #ff0000;
  border-color: #ff0000;
}

.success-message {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  padding: 20px;
  border: 2px solid #00ff00;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;
}

.message {
  padding: 20px;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;
}

.message.success {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  border: 2px solid #00ff00;
}

.message.error {
  background: rgba(255, 0, 0, 0.1);
  color: #ff0000;
  border: 2px solid #ff0000;
}

.no-concerts {
  text-align: center;
  padding: 40px;
  color: #666;
}

.refresh-btn {
  background: #007bff;
  color: white;
  margin-bottom: 20px;
}

.refresh-btn:hover {
  background: #0056b3;
}
</style>
